const CACHE_NAME = 'lembang-heritage-v1';
const assets = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './images/icon-192.png',
  './images/icon-512.png',
  './images/Welcome.png',
  './images/lembang-fault.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
