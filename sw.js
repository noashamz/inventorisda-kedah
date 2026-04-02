const cacheName = 'inventorisda-v4'; // Tukar nama cache untuk paksa update
const staticAssets = [
  './',
  './index.html',
  './manifest.json',
  './logo-risda.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(staticAssets);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
