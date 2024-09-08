const cacheName = 'christopher-rose-v2-' + Date.now();
const cacheFiles = [
    '/',
    '/index.html',
    '/css/style-1.0.0.css',
    '/javascript/app-1.0.0.js'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            cacheFiles.forEach((url) => {
                const request = new Request(url, { cache: 'reload' });
                fetch(request).then((response) => {
                    if (!response.ok) {
                        throw new Error('Failed to cache: ' + url);
                    }
                    cache.put(request, response);
                }).catch((error) => {
                    console.error(error);
                });
            });
        })
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((name) => {
                    if (name !== cacheName) {
                        return caches.delete(name);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                return response;
            }
            return fetch(event.request);
        }).catch((error) => {
            console.error(error);
        })
    );
});
