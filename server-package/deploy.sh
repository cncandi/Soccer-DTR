#!/bin/bash

# Soccer-DTR Deployment Script
# =============================
# Automatisches Setup auf einem frischen Server

set -e  # Exit bei Fehler

echo "⚽ Soccer-DTR Server Deployment"
echo "==============================="
echo ""

# Check if running as root
if [ "$EUID" -ne 0 ]; then 
    echo "⚠️  Bitte als root ausführen: sudo ./deploy.sh"
    exit 1
fi

# Variables
INSTALL_DIR="/var/www/soccer-dtr"
SERVICE_USER="www-data"

echo "📦 1. System-Updates & Dependencies installieren..."
apt update
apt install -y curl nginx

# Install Node.js 20.x LTS
if ! command -v node &> /dev/null; then
    echo "   Installing Node.js..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
    apt install -y nodejs
fi

echo "   ✅ Node.js $(node --version)"
echo "   ✅ npm $(npm --version)"
echo ""

# Install PM2
if ! command -v pm2 &> /dev/null; then
    echo "📦 2. PM2 installieren..."
    npm install -g pm2
    echo "   ✅ PM2 installiert"
else
    echo "📦 2. PM2 bereits installiert"
fi
echo ""

# Create installation directory
echo "📁 3. Installations-Verzeichnis erstellen..."
mkdir -p $INSTALL_DIR
cp -r ./* $INSTALL_DIR/
chown -R $SERVICE_USER:$SERVICE_USER $INSTALL_DIR
echo "   ✅ Dateien nach $INSTALL_DIR kopiert"
echo ""

# Install npm dependencies
echo "📦 4. NPM Dependencies installieren..."
cd $INSTALL_DIR
sudo -u $SERVICE_USER npm install
echo "   ✅ Dependencies installiert"
echo ""

# Setup .env
echo "🔧 5. Konfiguration..."
if [ ! -f "$INSTALL_DIR/.env" ]; then
    cp "$INSTALL_DIR/.env.example" "$INSTALL_DIR/.env"
    echo "   ⚠️  .env erstellt - BITTE API-KEY EINTRAGEN!"
    echo "   nano $INSTALL_DIR/.env"
else
    echo "   ✅ .env existiert bereits"
fi
echo ""

# Setup systemd service
echo "🔧 6. Systemd Service einrichten..."
if [ -f "$INSTALL_DIR/soccer-dtr.service" ]; then
    cp "$INSTALL_DIR/soccer-dtr.service" /etc/systemd/system/
    systemctl daemon-reload
    echo "   ✅ Service installiert"
    echo "   Starten mit: systemctl start soccer-dtr"
    echo "   Autostart: systemctl enable soccer-dtr"
fi
echo ""

# Setup Nginx
echo "🌐 7. Nginx konfigurieren..."
if [ -f "$INSTALL_DIR/nginx.conf" ]; then
    cp "$INSTALL_DIR/nginx.conf" /etc/nginx/sites-available/soccer-dtr
    
    echo "   ⚠️  Bitte Domain in Nginx-Config anpassen:"
    echo "   nano /etc/nginx/sites-available/soccer-dtr"
    echo ""
    echo "   Danach aktivieren mit:"
    echo "   ln -s /etc/nginx/sites-available/soccer-dtr /etc/nginx/sites-enabled/"
    echo "   nginx -t && systemctl reload nginx"
fi
echo ""

# Setup PM2 (Alternative zu systemd)
echo "🚀 8. PM2 Setup (optional)..."
cd $INSTALL_DIR
sudo -u $SERVICE_USER pm2 start server.js --name soccer-dtr
sudo -u $SERVICE_USER pm2 save
pm2 startup systemd -u $SERVICE_USER --hp /var/www
echo "   ✅ PM2 konfiguriert"
echo ""

# Firewall
echo "🔥 9. Firewall konfigurieren..."
if command -v ufw &> /dev/null; then
    ufw --force enable
    ufw allow 22/tcp   # SSH
    ufw allow 80/tcp   # HTTP
    ufw allow 443/tcp  # HTTPS
    echo "   ✅ Firewall aktiviert"
else
    echo "   ⚠️  UFW nicht installiert"
fi
echo ""

# Done!
echo "╔════════════════════════════════════════════════════╗"
echo "║                                                    ║"
echo "║          ✅ INSTALLATION ABGESCHLOSSEN ✅          ║"
echo "║                                                    ║"
echo "╚════════════════════════════════════════════════════╝"
echo ""
echo "📝 NÄCHSTE SCHRITTE:"
echo ""
echo "1. API-Key konfigurieren:"
echo "   nano $INSTALL_DIR/.env"
echo ""
echo "2. Server starten:"
echo "   pm2 restart soccer-dtr"
echo "   ODER"
echo "   systemctl start soccer-dtr"
echo ""
echo "3. Nginx aktivieren (optional):"
echo "   nano /etc/nginx/sites-available/soccer-dtr  # Domain anpassen"
echo "   ln -s /etc/nginx/sites-available/soccer-dtr /etc/nginx/sites-enabled/"
echo "   nginx -t && systemctl reload nginx"
echo ""
echo "4. SSL einrichten (optional):"
echo "   apt install certbot python3-certbot-nginx"
echo "   certbot --nginx -d deine-domain.de"
echo ""
echo "📊 Status prüfen:"
echo "   pm2 status"
echo "   pm2 logs soccer-dtr"
echo "   curl http://localhost:3000/api/health"
echo ""
echo "🌐 Zugriff:"
echo "   http://localhost:3000"
echo "   http://$(hostname -I | awk '{print $1}'):3000"
echo ""
