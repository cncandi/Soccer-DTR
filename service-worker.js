const CACHE_NAME = "soccer-dtr-v45";
const BADGE_DB_NAME = "soccer-dtr-badges";
const BADGE_STORE_NAME = "counts";
const MESSAGE_BADGE_KEY = "messages";
const APP_SHELL = [
  "./",
  "index.html",
  "css/app.css",
  "js/app.js",
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
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  if (isAppScriptRequest(event.request)) {
    event.respondWith(fetchPatchedAppScript(event.request));
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request).then((cached) => cached || caches.match("index.html")))
  );
});

function isAppScriptRequest(request) {
  return new URL(request.url).pathname.endsWith("/js/app.js");
}

function patchAppScript(source) {
  return source
    .replace(
      'if (typeof raw === "string") return { status: raw, updatedAt: "", fine: 0, reason: "", noShow: false, noShowAt: "", noShowBy: "", paid: false, paidAt: "" };',
      'if (typeof raw === "string") return { status: raw, updatedAt: "", fine: 0, reason: "", noShow: false, noShowAt: "", noShowBy: "", paid: false, paidAt: "", transport: "" };'
    )
    .replace(
      'paidAt: raw.paidAt || ""\n      };',
      'paidAt: raw.paidAt || "",\n        transport: raw.transport || ""\n      };'
    );
}

async function fetchPatchedAppScript(request) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const response = await fetch(request);
    const headers = new Headers(response.headers);
    headers.set("content-type", "text/javascript; charset=utf-8");
    const patched = new Response(patchAppScript(await response.text()), {
      status: response.status,
      statusText: response.statusText,
      headers
    });
    await cache.put(request, patched.clone());
    return patched;
  } catch (error) {
    const cached = await cache.match(request);
    if (!cached) throw error;
    const headers = new Headers(cached.headers);
    headers.set("content-type", "text/javascript; charset=utf-8");
    return new Response(patchAppScript(await cached.text()), {
      status: cached.status,
      statusText: cached.statusText,
      headers
    });
  }
}

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
