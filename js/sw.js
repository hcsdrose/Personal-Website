const cacheName = 'v1::static';

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/css/style.css',
        '/js/jquery-3.5.1.min.js'
      ]).then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName).then(cache => {
      return cache.match(event.request).then(res => {
        return res || fetch(event.request)
      });
    })
  );
});
