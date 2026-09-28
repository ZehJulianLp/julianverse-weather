const CACHE_NAME = "julianverse-weather-v37";
const APP_SHELL = [
    "./",
    "./index.html",
    "./styles.css",
    "./script.js",
    "./account/app.mjs",
    "./account/config.mjs",
    "./account/panel.mjs",
    "./account/panel.css",
    "./account/adapter.mjs",
    "./account/data.mjs",
    "./account/session.mjs",
    "./account/sync.mjs",
    "./account/oidc-client.mjs",
    "./manifest.webmanifest",
    "./icons/icon-192.png",
    "./icons/icon-512.png",
    "./icons/icon-maskable-512.png"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
    );
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames
                .filter((cacheName) => cacheName.startsWith("julianverse-weather-") && cacheName !== CACHE_NAME)
                .map((cacheName) => caches.delete(cacheName))
        ))
    );
    self.clients.claim();
});

self.addEventListener("fetch", (event) => {
    if (event.request.method !== "GET") {
        return;
    }

    const requestUrl = new URL(event.request.url);

    // Authentication callbacks carry a one-time code and must never enter the cache.
    if (requestUrl.pathname.endsWith("/account-callback.html") || requestUrl.pathname.endsWith("/account/callback.mjs") || requestUrl.searchParams.has("code") || requestUrl.searchParams.has("state")) {
        return;
    }

    if (requestUrl.origin !== self.location.origin) {
        event.respondWith(fetch(event.request));
        return;
    }

    // Display settings change the query string. All app navigations use the same
    // cached shell; the app still reads the current URL and local data on startup.
    const appUrl = new URL("./", self.registration.scope);
    if (event.request.mode === "navigate" &&
        [appUrl.pathname, `${appUrl.pathname}index.html`].includes(requestUrl.pathname)) {
        event.respondWith(
            caches.match(appUrl.href).then((cachedResponse) => cachedResponse || fetch(event.request))
        );
        return;
    }

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }

            return fetch(event.request).then((response) => {
                if (!response || response.status !== 200 || response.type === "opaque") {
                    return response;
                }

                const responseToCache = response.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseToCache);
                });

                return response;
            });
        })
    );
});
