// service-worker.js

const CACHE_NAME = 'mi-cache';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/icon-192x192.png',
        // Agrega otras rutas de tus recursos aquí
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Si el recurso está en caché, devuélvelo
      if (cachedResponse) {
        return cachedResponse;
      }

      // Si el recurso no está en caché, realiza la solicitud de red
      return fetch(event.request).then((response) => {
        // Verifica que la respuesta sea válida y sea de una solicitud GET
        if (!response || response.status !== 200 || event.request.method !== 'GET') {
          return response;
        }

        // Clona la respuesta para poder almacenarla en caché
        const responseToCache = response.clone();

        // Abre la caché y almacena la nueva respuesta
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        // Devuelve la respuesta original al cliente
        return response;
      });
    })
  );
});
