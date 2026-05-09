#!/bin/bash

# Soccer-DTR Server Start Script
# ===============================

echo "⚽ Soccer-DTR Trainer App"
echo "=========================="
echo ""

# Check if .env exists
if [ ! -f .env ]; then
    echo "❌ .env Datei nicht gefunden!"
    echo ""
    echo "Bitte erstelle .env:"
    echo "  cp .env.example .env"
    echo "  nano .env"
    echo ""
    echo "Und trage deinen ANTHROPIC_API_KEY ein."
    exit 1
fi

# Check if node_modules exists
if [ ! -d node_modules ]; then
    echo "📦 Dependencies werden installiert..."
    npm install
    echo ""
fi

# Load .env
export $(cat .env | grep -v '^#' | xargs)

# Check if API key is set
if [ -z "$ANTHROPIC_API_KEY" ] || [ "$ANTHROPIC_API_KEY" = "dein-api-key-hier" ]; then
    echo "❌ ANTHROPIC_API_KEY nicht konfiguriert!"
    echo ""
    echo "Bitte trage in .env deinen API-Key ein:"
    echo "  nano .env"
    exit 1
fi

echo "✅ API-Key konfiguriert"
echo "✅ Dependencies installiert"
echo ""
echo "🚀 Server wird gestartet..."
echo ""

# Start server
node server.js
