self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed');
});

self.addEventListener('fetch', (e) => {
  // This is required for the "Install" prompt
  e.respondWith(fetch(e.request));
});
