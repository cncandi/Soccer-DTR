# Soccer-DTR Vereinsmanager

Eine schlanke Web-App fuer eine Fussballmannschaft: Spieler verwalten, Zu- und Absagen fuer Training und Spiele erfassen, Abstimmungen erstellen und Gruppen-Mitteilungen teilen.

Live: https://cncandi.github.io/Soccer-DTR

## Funktionen

- Spieler- und Kaderverwaltung mit Position, Telefonnummer, Gruppe und Notizen
- Termine fuer Training, Spiele und Besprechungen
- Zu-, Absage und Vielleicht-Status pro angemeldetem Namen
- Abstimmungen mit beliebigen Optionen
- Mitteilungen fuer Mannschaft, Mannschaftsrat und Kasse
- Export der lokalen Daten als JSON
- Supabase-Sync vorbereitet ueber eine zentrale JSON-Dokument-Tabelle
- Mobile Webapp fuer iPhone, iPad und Android mit Home-Bildschirm-Manifest
- Mandantenfaehig fuer mehrere Vereine mit getrennten Vereinsdaten
- Pro Verein eigenes Logo und eigene Vereinsfarbe
- Einfacher Login per Spielername mit fest hinterlegter Rolle
- Startpasswort fuer alle Spieler: `fussball`; Admins koennen Passwoerter zuruecksetzen oder Temp-Passwoerter vergeben
- Admins koennen Spieler bearbeiten und jedem Spieler eine Rolle zuweisen

## Rechte

- Superadmin: kann alles inklusive Supabase-/Datenbank-Einstellungen
- Admin: kann Vereine, Spieler, Termine, Abstimmungen und Mitteilungen verwalten, aber keine Datenbank-Einstellungen aendern
- Spieler: kann Zu- und Absagen, Abstimmungen und Mitteilungen nutzen

Die Rollen werden pro Spieler gespeichert. Neue oder bestehende Spieler koennen durch Admins auf `Spieler`, `Admin` oder `Superadmin` gesetzt werden.

Der Login kann lokal gespeichert werden, damit Mitglieder sich auf ihrem Handy nicht jedes Mal neu anmelden muessen.

## Mobile Nutzung

Auf dem iPhone kann die App in Safari geoeffnet und ueber `Teilen` -> `Zum Home-Bildschirm` als Webapp installiert werden. Danach startet sie wie eine normale App mit kompakter Handy-Navigation.

Admins koennen im Bereich `Einstellungen` Vereinsname, Logo und Farbe setzen. Die Vereinsfarbe steuert die Navigation, Buttons, Markierungen und eigene Chatblasen.

## Supabase

Die App funktioniert zunaechst lokal im Browser. Fuer gemeinsame Vereinsdaten im Team kann in der App unter `Supabase` eine Supabase URL, ein Anon Public Key und ein Tabellenname eingetragen werden.

Empfohlene Tabelle:

```sql
create table club_documents (
  id text primary key,
  document jsonb not null,
  updated_at timestamptz default now()
);

alter table club_documents enable row level security;

create policy "club read" on club_documents
for select using (true);

create policy "club write" on club_documents
for insert with check (true);

create policy "club update" on club_documents
for update using (true);
```

Wichtig: Diese einfachen Policies sind nur fuer einen ersten Vereins-Prototyp geeignet. Fuer eine wirklich private App sollten Supabase Auth, Einladungen per E-Mail und restriktive Row-Level-Security verwendet werden. Eine GitHub-Pages-Seite ist technisch oeffentlich erreichbar, auch wenn nur Vereinsmitglieder den Link kennen.

## Entwicklung

Die App besteht aus statischem HTML, CSS und JavaScript in `index.html`.

```bash
git clone https://github.com/cncandi/Soccer-DTR.git
cd Soccer-DTR
```

Danach kann `index.html` direkt im Browser geoeffnet werden. GitHub Actions veroeffentlicht automatisch bei jedem Push auf `main`.

## Pruefung

Eine einfache JavaScript-Syntaxpruefung kann so laufen:

```bash
node -e "const fs=require('fs');const html=fs.readFileSync('index.html','utf8');const scripts=[...html.matchAll(/<script[^>]*>([\\s\\S]*?)<\\/script>/g)].map(m=>m[1]);for(const s of scripts)new Function(s);console.log('JS syntax OK, scripts:', scripts.length);"
```
