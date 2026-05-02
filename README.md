# ⚽ Soccer-DTR - Fußball-Trainer Assistent

**KI-gestützte Trainingsplanung, Taktikanalyse und Spielerverwaltung**

Eine vollständig webbasierte Anwendung für Fußballtrainer zur optimalen Vorbereitung auf Spiele, Verwaltung des Kaders und KI-unterstützten Trainingsplanung.

🔗 **Live-Demo:** [https://cncandi.github.io/Soccer-DTR](https://cncandi.github.io/Soccer-DTR)

---

## 🎯 Features

### 📊 **Spielerverwaltung**
- Detaillierte Spielerprofile mit 11 bewertbaren Attributen
- Technische Fähigkeiten (Passspiel, Schuss, Dribbling, Kopfball)
- Physische Attribute (Schnelligkeit, Ausdauer, Zweikampf)
- Mentale Eigenschaften (Spielintelligenz, Führung, Nervenstärke)
- Freitext für individuelle Stärken und Schwächen
- Automatisches Rating-System (1-10 Skala)

### 🎯 **Gegneranalyse**
- Strukturierte Erfassung gegnerischer Teams
- Formation und Spielweise
- Schlüsselspieler-Identifikation
- Stärken- und Schwächenanalyse
- Standard-Situationen

### 🤖 **KI-gestützte Analysen** (powered by Claude AI)
1. **Optimale Aufstellung** - Personalisierte 11er-Formation basierend auf Spielerstärken und Gegner
2. **Wochentrainingsplan** - Montag bis Freitag mit konkreten Übungen
3. **Taktik-Ansprachen** - Mannschafts-, Gruppen- und Individual-Taktik
4. **Langfristige Ziele** - 3-Monats-Entwicklungsplan für Team und einzelne Spieler

### 💾 **Datenspeicherung**
- Alle Daten werden lokal im Browser gespeichert (localStorage)
- Keine Server-Anbindung notwendig
- Daten bleiben auch nach Neustart erhalten
- Privacy-first: Deine Daten bleiben bei dir

---

## 🚀 Schnellstart

### **Online nutzen (empfohlen)**
Einfach die Live-Demo öffnen:
👉 [https://cncandi.github.io/Soccer-DTR](https://cncandi.github.io/Soccer-DTR)

### **Lokal installieren**
1. Repository klonen:
   ```bash
   git clone https://github.com/cncandi/Soccer-DTR.git
   ```
2. `index.html` im Browser öffnen
3. Fertig! Die App läuft komplett offline.

---

## 📖 Anleitung

### **1. Spieler hinzufügen**
- Navigiere zum Reiter **"Spielerverwaltung"**
- Fülle Name, Alter und Position aus
- Bewerte technische, physische und mentale Fähigkeiten (Slider 1-10)
- Optional: Füge Freitext-Notizen zu Stärken/Schwächen hinzu
- Klicke **"Spieler hinzufügen"**

### **2. Gegner analysieren**
- Gehe zu **"Gegneranalyse"**
- Trage Mannschaftsname und Formation ein
- Beschreibe Spielweise, Schlüsselspieler und Schwachstellen
- Speichern - bereit für KI-Analyse!

### **3. KI-Analyse nutzen**
- Reiter **"KI-Analyse"** öffnen
- Optional: Gegner auswählen für maßgeschneiderte Empfehlungen
- Gewünschte Analyse-Art wählen:
  - 📋 **Aufstellung** - Optimale 11 mit Begründung
  - 🏃 **Trainingsplan** - Wochenplan Mo-Fr
  - 💬 **Taktik** - Ansprachen-Stichpunkte
  - 📈 **Langfristziele** - 3-Monats-Entwicklungsplan
- KI generiert personalisierte Empfehlungen in Sekunden

---

## 🛠️ Technologie-Stack

- **Frontend:** Pure HTML5, CSS3, JavaScript (Vanilla JS)
- **KI-Integration:** Anthropic Claude API (Sonnet 4)
- **Storage:** Browser localStorage
- **Hosting:** GitHub Pages
- **Framework:** Kein Framework - 100% native Web-Technologie

---

## 🔒 Datenschutz

- **Keine Server-Kommunikation** (außer für KI-Analysen)
- **Lokale Datenspeicherung** im Browser
- **Keine Weitergabe** von Spielerdaten an Dritte
- KI-Analysen werden nur bei aktiver Nutzung durchgeführt
- Du behältst volle Kontrolle über deine Daten

---

## 💡 Verwendungsszenarien

✅ **Amateur- und Hobbytrainer** - Systematische Vorbereitung ohne Profi-Software  
✅ **Jugendtrainer** - Langfristige Spielerentwicklung dokumentieren  
✅ **Taktik-Enthusiasten** - Experimente mit Formationen und Aufstellungen  
✅ **Teammanager** - Zentrale Kaderverwaltung  

---

## 🤝 Beitragen

Feedback und Verbesserungsvorschläge sind willkommen!

1. **Issues** - Bugs oder Feature-Requests im [Issue Tracker](https://github.com/cncandi/Soccer-DTR/issues) melden
2. **Pull Requests** - Code-Verbesserungen gerne einreichen
3. **Feedback** - Einfach eine Issue erstellen

---

## 📜 Lizenz

MIT License - Freie Nutzung und Anpassung erlaubt.

---

## 👨‍💻 Entwickelt von

**Datentechnik Reitz**  
🌐 [www.cnc-technik.de](https://www.cnc-technik.de)  
📧 reitz@cnc-technik.de

---

## 🙏 Credits

- **KI-Engine:** [Anthropic Claude](https://www.anthropic.com/claude)
- **Hosting:** [GitHub Pages](https://pages.github.com/)

---

**⚽ Viel Erfolg mit deinem Team! ⚽**
