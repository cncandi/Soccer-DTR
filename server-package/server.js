const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.static(path.join(__dirname, 'public')));

// Anthropic API Proxy Endpoint
app.post('/api/analyze', async (req, res) => {
    try {
        const { prompt } = req.body;
        
        if (!prompt) {
            return res.status(400).json({ error: 'Prompt ist erforderlich' });
        }
        
        // Anthropic API Key aus Umgebungsvariable
        const apiKey = process.env.ANTHROPIC_API_KEY;
        
        if (!apiKey) {
            return res.status(500).json({ 
                error: 'ANTHROPIC_API_KEY nicht konfiguriert. Bitte in .env setzen!' 
            });
        }
        
        // Call Anthropic API
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: 'claude-sonnet-4-20250514',
                max_tokens: 4000,
                messages: [{
                    role: 'user',
                    content: prompt
                }]
            })
        });
        
        if (!response.ok) {
            const errorData = await response.text();
            console.error('Anthropic API Error:', errorData);
            return res.status(response.status).json({ 
                error: 'Anthropic API Fehler',
                details: errorData 
            });
        }
        
        const data = await response.json();
        
        // Extract text content
        const aiResponse = data.content
            .filter(block => block.type === 'text')
            .map(block => block.text)
            .join('\n');
        
        res.json({ response: aiResponse });
        
    } catch (error) {
        console.error('Server Error:', error);
        res.status(500).json({ 
            error: 'Server-Fehler',
            message: error.message 
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK',
        timestamp: new Date().toISOString(),
        apiKeyConfigured: !!process.env.ANTHROPIC_API_KEY
    });
});

// Serve frontend
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Route nicht gefunden' });
});

// Start server
app.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════════════════════╗
║                                                        ║
║        ⚽ Soccer-DTR Trainer App Server ⚽             ║
║                                                        ║
║  Server läuft auf: http://localhost:${PORT}            ║
║                                                        ║
║  Frontend:  http://localhost:${PORT}                   ║
║  API:       http://localhost:${PORT}/api/analyze       ║
║  Health:    http://localhost:${PORT}/api/health        ║
║                                                        ║
║  API-Key konfiguriert: ${process.env.ANTHROPIC_API_KEY ? 'JA ✅' : 'NEIN ❌'}           ║
║                                                        ║
╚════════════════════════════════════════════════════════╝
    `);
});
