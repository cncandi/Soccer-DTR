# ⚽ Soccer-DTR - QUICK START

## 🎯 In 3 Minuten starten!

### Methode 1: Manuell (Einfach)

```bash
# 1. Paket entpacken
tar -xzf soccer-dtr-server-package.tar.gz
cd soccer-dtr-server-package

# 2. Dependencies installieren
npm install

# 3. .env konfigurieren
cp .env.example .env
nano .env  # Trage API-Key ein

# 4. Starten!
npm start
```

✅ Fertig! → http://localhost:3000

---

### Methode 2: Automatisch (mit Script)

```bash
# 1. Paket entpacken
tar -xzf soccer-dtr-server-package.tar.gz
cd soccer-dtr-server-package

# 2. Auto-Deploy (als root)
sudo ./deploy.sh

# 3. API-Key eintragen
sudo nano /var/www/soccer-dtr/.env

# 4. Server neu starten
pm2 restart soccer-dtr
```

✅ Fertig! → http://server-ip:3000

---

## 📋 Was du brauchst:

1. **Anthropic API Key**  
   → https://console.anthropic.com/
   → Kostenlos registrieren
   → API Key erstellen
   → In `.env` eintragen

2. **Node.js 18+**  
   → https://nodejs.org/

---

## 🔑 API-Key Setup:

```bash
# .env Datei öffnen
nano .env

# Eintragen:
ANTHROPIC_API_KEY=sk-ant-api03-xxxxx
```

Speichern: `Ctrl+O`, Enter, `Ctrl+X`

---

## ✅ Testen:

```bash
# Health Check
curl http://localhost:3000/api/health

# Sollte anzeigen:
# {"status":"OK","apiKeyConfigured":true}
```

---

## 🌐 Von außen zugreifen:

### Ohne Domain:
```
http://deine-server-ip:3000
```

### Mit Domain (Nginx):
```bash
# Siehe INSTALLATION.md Abschnitt "Mit Nginx"
```

---

## 📱 Vom Handy:

Gleicher WLAN:
```
http://192.168.1.xxx:3000
```

---

## 🆘 Hilfe?

- Vollständige Anleitung: `INSTALLATION.md`
- Logs: `pm2 logs soccer-dtr`
- Restart: `pm2 restart soccer-dtr`

---

## 🎯 Das war's!

Deine App läuft jetzt auf deinem Server! ⚽
