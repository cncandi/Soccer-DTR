const CACHE_NAME = "soccer-dtr-v95";
const BADGE_DB_NAME = "soccer-dtr-badges";
const BADGE_STORE_NAME = "counts";
const MESSAGE_BADGE_KEY = "messages";
const APP_SHELL = [
  "./",
  "index.html",
  "backend.html",
  "taktikboard-3d.html?v=95",
  "css/app.css?v=95",
  "css/backend.css?v=1",
  "js/app.js?v=95",
  "js/backend.js?v=4",
  "manifest.webmanifest",
  "assets/kadrivo-login-banner.jpg",
  "kadrivo-icon-192.png",
  "kadrivo-icon-512.png",
  "kadrivo-apple-touch-icon.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)));
      await self.clients.claim();
    })()
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  const isSameOrigin = url.origin === self.location.origin;

  if (!isSameOrigin) return;

  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request).catch(() => caches.match("index.html"))
    );
    return;
  }

  const cacheableDestinations = new Set(["style", "script", "image", "manifest"]);
  if (!cacheableDestinations.has(event.request.destination)) return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (!response || !response.ok) return response;
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});

function openBadgeDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(BADGE_DB_NAME, 1);
    request.onupgradeneeded = () => {
      request.result.createObjectStore(BADGE_STORE_NAME);
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function readBadgeCount() {
  const db = await openBadgeDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(BADGE_STORE_NAME, "readonly");
    const request = tx.objectStore(BADGE_STORE_NAME).get(MESSAGE_BADGE_KEY);
    request.onsuccess = () => resolve(Number(request.result || 0));
    request.onerror = () => reject(request.error);
  });
}

async function writeBadgeCount(count) {
  const db = await openBadgeDb();
  await new Promise((resolve, reject) => {
    const tx = db.transaction(BADGE_STORE_NAME, "readwrite");
    tx.objectStore(BADGE_STORE_NAME).put(Math.max(0, Number(count || 0)), MESSAGE_BADGE_KEY);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

async function setMessageBadge(count) {
  await writeBadgeCount(count);
  if ("setAppBadge" in navigator && "clearAppBadge" in navigator) {
    if (count > 0) await navigator.setAppBadge(count);
    else await navigator.clearAppBadge();
  }
}

async function incrementMessageBadge() {
  const nextCount = await readBadgeCount() + 1;
  await setMessageBadge(nextCount);
  return nextCount;
}

self.addEventListener("push", (event) => {
  let payload = {};
  try {
    payload = event.data ? event.data.json() : {};
  } catch (error) {
    payload = {};
  }
  const title = payload.title || "Kadrivo";
  const options = {
    body: payload.body || "Neue Mitteilung",
    icon: "kadrivo-icon-192.png",
    badge: "kadrivo-icon-192.png",
    data: {
      url: payload.url || "./index.html#messages"
    }
  };
  event.waitUntil(
    Promise.all([
      incrementMessageBadge().catch(() => {}),
      self.registration.showNotification(title, options)
    ])
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const url = event.notification.data?.url || "./index.html#messages";
  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((clientList) => {
      const existing = clientList.find((client) => client.url.includes("Soccer-DTR"));
      if (existing) {
        existing.focus();
        return existing.navigate(url);
      }
      return clients.openWindow(url);
    })
  );
});

self.addEventListener("message", (event) => {
  if (event.data?.type === "CLEAR_MESSAGE_BADGE") {
    event.waitUntil(setMessageBadge(0).catch(() => {}));
  }
});
