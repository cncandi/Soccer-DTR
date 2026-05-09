# ⚽ Soccer-DTR Trainer App

Vollständige Fußball-Trainer-App mit KI-Unterstützung.

## 🎯 Features

✅ Spielerverwaltung (11 Attribute + Status)
✅ Gegneranalyse (Formation, Spielweise, Stärken/Schwächen)
✅ Spiele-Management mit Workflow
✅ Kader-Generator mit WhatsApp-Export
✅ Visuelle Aufstellung (5 Formationen)
✅ KI-Analysen:
  - Optimale Aufstellung
  - Wochentrainingsplan
  - Taktische Anweisungen
  - Langfristziele
  - **NEU:** Spielsituationen (Führung/Rückstand/Unentschieden)
  - **NEU:** Halbzeitanalyse mit Empfehlungen
  - **NEU:** Nach-Spiel Bewertung
  - **NEU:** Freie Fragen mit Spracheingabe 🎤

## 📦 Inhalt

```
soccer-dtr-server-package/
├── server.js              # Node.js Backend
├── package.json           # Dependencies
├── .env.example           # Konfigurations-Vorlage
├── INSTALLATION.md        # Ausführliche Anleitung
├── README.md              # Diese Datei
├── start.sh              # Start-Skript
└── public/
    └── index.html         # Frontend-App
```

## 🚀 Schnellstart

```bash
# 1. Dependencies installieren
npm install

# 2. .env konfigurieren
cp .env.example .env
nano .env  # API-Key eintragen

# 3. Server starten
npm start
```

Öffne: **http://localhost:3000**

## 📖 Ausführliche Anleitung

Siehe **INSTALLATION.md** für:
- Server-Setup
- PM2 Production-Deployment
- Nginx Reverse Proxy
- SSL/HTTPS Konfiguration
- Monitoring & Logs
- Troubleshooting

## 🔑 API-Key

Benötigt: **Anthropic API Key**

Erhältlich auf: https://console.anthropic.com/

## 🛠️ Technologie

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express
- **AI:** Claude 4 (Anthropic)
- **Storage:** localStorage (Browser)

## 📝 Lizenz

MIT
