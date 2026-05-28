# Notiz-App

Eine moderne Progressive Web App (PWA) für Notizen mit lokalem Account-System.

## Features

- 📝 Notizen erstellen
- ✏️ Notizen bearbeiten
- 🗑️ Notizen löschen
- 🔍 Suche & Filter
- 🌙 Dark Mode
- 📱 Mobile-first Design
- 💾 Speicherung via localStorage
- 👤 Lokaler Login mit Benutzername & Passwort
- 🔒 Eigene getrennte Notizen pro Nutzer
- ⚡ Offline-Unterstützung
- 🌐 GitHub Pages kompatibel

## Technologien

```txt
HTML • CSS • JavaScript • PWA • localStorage
```

## Lokales Account-System

Die App verwendet kein Backend und keine Datenbank.

Jeder Nutzer erstellt lokal:

- Benutzername
- Passwort

Die Notizen werden getrennt im Browser gespeichert.

Wichtig:

- Accounts funktionieren nur auf dem jeweiligen Gerät/Browser
- Keine Cloud-Synchronisation
- Keine externen Dienste notwendig
- Komplett kostenlos hostbar auf GitHub Pages

## GitHub Pages

Aktiviere GitHub Pages unter:

```txt
Settings → Pages → Deploy from branch → main → /root
```

Danach läuft die App hier:

```txt
https://lordlolqdh.github.io/Notizen/
```

## Installation

Die App kann auf unterstützten Geräten direkt installiert werden.

### Android

- Browser-Menü öffnen
- "App installieren" oder "Zum Startbildschirm hinzufügen"

### iPhone / iPad

- Teilen-Menü öffnen
- "Zum Home-Bildschirm"

## Offline-Funktion

Mit Service Worker funktioniert die App auch ohne Internetverbindung.

## Lizenz

Open Source Projekt.
