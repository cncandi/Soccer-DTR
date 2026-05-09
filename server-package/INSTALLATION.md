# ⚽ Soccer-DTR Trainer App - Server Installation

## 📋 Voraussetzungen

Dein Server braucht:
- **Node.js** >= 18.0.0
- **npm** >= 9.0.0
- **Anthropic API Key** (https://console.anthropic.com/)

---

## 🚀 Schnellstart (5 Schritte)

### 1. Dateien hochladen

Lade alle Dateien auf deinen Server hoch:

```bash
cd /var/www/
mkdir soccer-dtr
cd soccer-dtr

# Kopiere alle Dateien aus diesem Paket hierher
```

### 2. Dependencies installieren

```bash
npm install
```

### 3. API-Key konfigurieren

```bash
# Kopiere .env Vorlage
cp .env.example .env

# Öffne .env und trage deinen API-Key ein
nano .env
```

Füge ein:
```
ANTHROPIC_API_KEY=sk-ant-api03-xxxxx
```

### 4. Server starten

```bash
npm start
```

Server läuft jetzt auf: **http://localhost:3000**

### 5. Im Browser öffnen

Gehe zu: **http://deine-server-ip:3000**

✅ **Fertig!**

---

## 🔧 Erweiterte Installation

### Mit PM2 (Production-Ready)

PM2 hält den Server automatisch am Laufen:

```bash
# PM2 installieren
npm install -g pm2

# Server mit PM2 starten
pm2 start server.js --name soccer-dtr

# Automatischer Start nach Neustart
pm2 startup
pm2 save

# Logs anzeigen
pm2 logs soccer-dtr

# Server neu starten
pm2 restart soccer-dtr

# Server stoppen
pm2 stop soccer-dtr
```

---

## 🌐 Mit Nginx (Production)

### Nginx Config erstellen:

```bash
sudo nano /etc/nginx/sites-available/soccer-dtr
```

Inhalt:
```nginx
server {
    listen 80;
    server_name deine-domain.de;  # ANPASSEN!

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

Aktivieren:
```bash
sudo ln -s /etc/nginx/sites-available/soccer-dtr /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### SSL mit Let's Encrypt (HTTPS):

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d deine-domain.de
```

---

## 🔐 Sicherheit

### Firewall einrichten:

```bash
# UFW Firewall
sudo ufw allow 22/tcp    # SSH
sudo ufw allow 80/tcp    # HTTP
sudo ufw allow 443/tcp   # HTTPS
sudo ufw enable
```

### API-Key schützen:

- ✅ Niemals in Git committen
- ✅ Nur in `.env` speichern
- ✅ `.env` aus `.gitignore`

---

## 📊 Monitoring

### Server-Status prüfen:

```bash
# Health Check
curl http://localhost:3000/api/health

# Mit PM2
pm2 status
pm2 monit
```

### Logs anschauen:

```bash
# PM2 Logs
pm2 logs soccer-dtr

# Oder direkt
tail -f /var/log/soccer-dtr.log
```

---

## 🔄 Updates

### Code aktualisieren:

```bash
cd /var/www/soccer-dtr

# Neue Dateien hochladen
# Dann:

pm2 restart soccer-dtr
```

---

## 🆘 Troubleshooting

### Port bereits belegt?

```bash
# Anderen Port verwenden
nano .env
# PORT=3001 eintragen

pm2 restart soccer-dtr
```

### API-Fehler?

```bash
# Health Check
curl http://localhost:3000/api/health

# Sollte anzeigen:
# {"status":"OK","apiKeyConfigured":true}
```

Wenn `apiKeyConfigured: false`:
- API-Key in `.env` nochmal prüfen
- Server neu starten: `pm2 restart soccer-dtr`

### Server erreichbar?

```bash
# Von außen testen
curl http://deine-server-ip:3000/api/health
```

Nicht erreichbar?
- Firewall prüfen: `sudo ufw status`
- Port freigeben: `sudo ufw allow 3000/tcp`

---

## 📱 Mobile Zugriff

Von deinem Handy:
1. Gleicher WLAN wie Server → `http://server-ip:3000`
2. Über Internet → Domain einrichten + HTTPS

---

## 💾 Backup

### Wichtige Daten sichern:

```bash
# Backup erstellen
tar -czf soccer-dtr-backup-$(date +%Y%m%d).tar.gz \
    /var/www/soccer-dtr/.env \
    /var/www/soccer-dtr/public

# Backup wiederherstellen
tar -xzf soccer-dtr-backup-20260509.tar.gz -C /
```

---

## 🎯 Fertig!

Deine App läuft jetzt auf deinem eigenen Server!

**Zugriff:**
- Lokal: http://localhost:3000
- Server: http://server-ip:3000
- Domain: http://deine-domain.de

**Bei Fragen:**
- Health Check: `/api/health`
- Logs: `pm2 logs soccer-dtr`
- Restart: `pm2 restart soccer-dtr`
