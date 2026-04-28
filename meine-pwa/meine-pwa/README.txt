Meine iPhone PWA
================

ORDNER-STRUKTUR:
  index.html        → Startseite (hier beginnen)
  manifest.json     → App-Name, Icon, Farben
  sw.js             → Service Worker (offline-Funktion, NICHT löschen)
  netlify.toml      → Netlify-Einstellungen (NICHT löschen)
  css/style.css     → Alle Stile
  js/app.js         → JavaScript
  seiten/           → Weitere HTML-Seiten
  bilder/           → Bilder ablegen
  icons/            → App-Icons (PNGs) für Homescreen

AUF NETLIFY HOCHLADEN:
  1. Gehe auf netlify.com → kostenlos registrieren
  2. "Add new site" → "Deploy manually"
  3. Diesen Ordner reinziehen → fertig!
  4. Du bekommst eine URL wie: https://deine-app.netlify.app

AUF IPHONE INSTALLIEREN:
  1. URL im Safari öffnen
  2. Unten auf "Teilen" tippen (Kasten mit Pfeil)
  3. "Zum Home-Bildschirm" tippen
  4. App erscheint wie eine echte App!

ICONS HINZUFÜGEN:
  Lege PNG-Dateien in den icons/ Ordner:
  - icon-120.png  (120x120px)
  - icon-152.png  (152x152px)
  - icon-180.png  (180x180px)  ← wichtigste Größe
  - icon-192.png  (192x192px)
  - icon-512.png  (512x512px)
  Du kannst dein Icon auf https://realfavicongenerator.net erstellen.
