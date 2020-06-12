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

self.addEventListener('fetch', function(event) {
 console.log(event.request.url);

 event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});
