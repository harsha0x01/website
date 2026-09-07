const CACHE_NAME = "youtube-clone-v1";

const FILES_TO_CACHE = [
  "/website/",
  "/website/index.html",
  "/website/general.css",
  "/website/header.css",
  "/website/sidebar.css",
  "/website/video.css"
];

// Install
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
});

// Fetch
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
