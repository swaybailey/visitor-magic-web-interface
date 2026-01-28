const CACHE_NAME = 'visitor-magic-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/addcontact.html',
  '/manifest.json',
  '/app-icon192.jpg',
  '/app-icon.jpg',
  // Add any other static assets you want cached
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
