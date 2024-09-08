// Service Worker version
const CACHE_VERSION = 'v2.0.0';

// Cache name
const CACHE_NAME = `Christopher-Rose-${CACHE_VERSION}`;

// Files to cache
const FILES_TO_CACHE = [
    '/',
    '/index.html',
    '/css/style-1.0.0.css',
    '/media/icons/profile-icon-48.png'
];

// Install event
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(FILES_TO_CACHE);
            })
    );
});

// Activate event
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames.filter((cacheName) => {
                        return cacheName.startsWith('my-app-cache-') && cacheName !== CACHE_NAME;
                    }).map((cacheName) => {
                        return caches.delete(cacheName);
                    })
                );
            })
    );
});

// Fetch event
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
            .catch(() => {
                return caches.match('/index.html');
            })
    );
});
