self.addEventListener('fetch', function(event) {
  // Este es un Service Worker básico que permite que la app cargue
  event.respondWith(fetch(event.request));
});
