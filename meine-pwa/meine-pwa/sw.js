const CACHE = 'meine-app-v1';

// Alle Dateien die offline gespeichert werden sollen
const DATEIEN = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/app.js'
];

// Installation: Dateien cachen
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(DATEIEN))
  );
});

// Anfragen: zuerst Cache, dann Netzwerk
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

// Alten Cache löschen wenn neue Version da ist
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
});
