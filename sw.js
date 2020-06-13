//Install PWA
const cacheName = 'christopherrose-0.0.5';
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        './index.html',
        './css/style-0.0.5.css',
        './js/jquery-3.5.1.min.js',
        './js/routie-0.3.2.min.js',
        './js/routes-0.0.5.js',
        './pages/home.html',
        './pages/projects.html',
        './pages/hobbies.html',
        './pages/contact.html'
      ]).then(() => self.skipWaiting());
    })
  );
});

//Fetch Cache
addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        } else {
          return fetch(event.request)
            .then(function(res) {
              return caches.open(cacheName)
                .then(function(cache) {
                  cache.put(event.request.url, res.clone());
                  return res;
                })
            })
            .catch(function(err) {
              return caches.open(cacheName)
                .then(function(cache) {
                  return cache.match('/index.html');
                });
            });
        }
      })
  );
});
