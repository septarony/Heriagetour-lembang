const CACHE_NAME = 'lembang-heritage-v1';
const assets = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json'
];

// Tahap Instalasi (Menyimpan file ke memori HP)
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Menyimpan aset ke cache...');
      return cache.addAll(assets);
    })
  );
});

// Tahap Fetch (Mengambil data dari memori saat internet mati)
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});