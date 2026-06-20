const CACHE_NAME = "soccer-dtr-v46";
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
  if (isAppStyleRequest(event.request)) {
    event.respondWith(fetchPatchedAppStyle(event.request));
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

function isAppStyleRequest(request) {
  return new URL(request.url).pathname.endsWith("/css/app.css");
}

function patchAppScript(source) {
  let patched = source
    .replace(
      'if (typeof raw === "string") return { status: raw, updatedAt: "", fine: 0, reason: "", noShow: false, noShowAt: "", noShowBy: "", paid: false, paidAt: "" };',
      'if (typeof raw === "string") return { status: raw, updatedAt: "", fine: 0, reason: "", noShow: false, noShowAt: "", noShowBy: "", paid: false, paidAt: "", transport: "" };'
    )
    .replace(
      'paidAt: raw.paidAt || ""\n      };',
      'paidAt: raw.paidAt || "",\n        transport: raw.transport || ""\n      };'
    );
  patched = patched
    .replace('messages: [],\n      hallOfFame', 'messages: [],\n      removedDefaultPlayers: [],\n      hallOfFame')
    .replace(
      'function hasPlayerName(name, exceptId = "") {\n      const key = playerNameKey(name);\n      return Boolean(key) && state.players.some((player) => player.id !== exceptId && playerNameKey(player.name) === key);\n    }',
      'function normalizeRemovedDefaultPlayers(players = []) {\n      return [...new Set([\n        ...REMOVED_DEFAULT_PLAYERS,\n        ...(Array.isArray(players) ? players : [])\n      ].map(playerNameKey).filter(Boolean))];\n    }\n\n    function hasPlayerName(name, exceptId = "") {\n      const key = playerNameKey(name);\n      return Boolean(key) && state.players.some((player) => player.id !== exceptId && playerNameKey(player.name) === key);\n    }\n\n    function deletePlayer(playerId) {\n      if (!canManage()) return;\n      const player = state.players.find((item) => item.id === playerId);\n      if (!player) return;\n      if (!window.confirm(player.name + " wirklich entfernen?")) return;\n      const key = playerNameKey(player.name);\n      if (DEFAULT_PLAYER_NAMES.some((name) => playerNameKey(name) === key)) {\n        state.removedDefaultPlayers = normalizeRemovedDefaultPlayers([...(state.removedDefaultPlayers || []), key]);\n      }\n      state.players = state.players.filter((item) => item.id !== playerId);\n      state.events = (state.events || []).map((eventItem) => {\n        if (!eventItem.rsvps?.[player.name]) return eventItem;\n        const rsvps = { ...eventItem.rsvps };\n        delete rsvps[player.name];\n        return { ...eventItem, rsvps };\n      });\n      if ($("#playerEditForm")?.elements.id?.value === playerId) closePlayerModal();\n      saveState();\n    }'
    )
    .replace(
      'function ensureDefaultPlayers(loadedState) {\n      const normalizedPlayers = mergePlayersByName(loadedState.players || []);\n      const existingNames = new Set(normalizedPlayers.map((player) => playerNameKey(player.name)));',
      'function ensureDefaultPlayers(loadedState) {\n      const removedDefaultPlayers = normalizeRemovedDefaultPlayers(loadedState.removedDefaultPlayers);\n      const normalizedPlayers = mergePlayersByName(loadedState.players || [])\n        .filter((player) => !removedDefaultPlayers.includes(playerNameKey(player.name)));\n      const existingNames = new Set(normalizedPlayers.map((player) => playerNameKey(player.name)));'
    )
    .replace(
      '.filter((name) => !existingNames.has(name.toLowerCase()))',
      '.filter((name) => !existingNames.has(name.toLowerCase()) && !removedDefaultPlayers.includes(name.toLowerCase()))'
    )
    .replace('messages: loadedState.messages || [],\n        hallOfFame', 'messages: loadedState.messages || [],\n        removedDefaultPlayers,\n        hallOfFame')
    .replace(
      '<div class="attendee-list">${yesItems || "<span class=\\"meta\\">Keine Zusagen.</span>"}</div>\n          </div>\n          <div>',
      '<div class="attendee-list">${yesItems || "<span class=\\"meta\\">Keine Zusagen.</span>"}</div>\n          </div>\n          ${renderTransportDetails(event, details)}\n          <div>'
    )
    .replace('offer: "Biete Mitfahrgelegenheit",', 'offer: "Fahrer",')
    .replace(
      'function renderTransportControls(event, player, record) {',
      'function transportGroups(entries) {\n      return entries.reduce((groups, entry) => {\n        if (entry.transport === "self") groups.self.push(entry.name);\n        else if (entry.transport === "offer") groups.offer.push(entry.name);\n        else if (entry.transport === "passenger") groups.passenger.push(entry.name);\n        else groups.open.push(entry.name);\n        return groups;\n      }, { self: [], offer: [], passenger: [], open: [] });\n    }\n\n    function renderTransportGroup(label, names, className = "") {\n      const items = names.map((name) => `<span class="attendee ${className}">${escapeHtml(name)}</span>`).join("");\n      return `\n        <div>\n          <strong>${escapeHtml(label)} (${names.length})</strong>\n          <div class="attendee-list">${items || "<span class=\\"meta\\">Keine Eintraege.</span>"}</div>\n        </div>\n      `;\n    }\n\n    function renderTransportDetails(event, details) {\n      if (!isAwayGame(event)) return "";\n      const groups = transportGroups(details.yes);\n      return `\n        <div class="transport-details">\n          <strong>Fahrten</strong>\n          ${renderTransportGroup("Selbstfahrer", groups.self, "transport-self")}\n          ${renderTransportGroup("Fahrer / bietet Mitfahrgelegenheit", groups.offer, "transport-offer")}\n          ${renderTransportGroup("Mitfahrer", groups.passenger, "transport-passenger")}\n          ${renderTransportGroup("Noch offen", groups.open, "transport-open")}\n        </div>\n      `;\n    }\n\n    function renderTransportControls(event, player, record) {'
    )
    .replace(
      '<div class="field"><button class="btn-secondary" id="clearPlayerPhotoBtn" type="button">Bild entfernen</button></div>\n        <div class="field"><button class="btn-primary" type="submit">Speichern</button></div>',
      '<div class="field"><button class="btn-secondary" id="clearPlayerPhotoBtn" type="button">Bild entfernen</button></div>\n        ${fullAccess ? `<div class="field"><button class="btn-danger" id="deletePlayerFromModalBtn" type="button">Spieler entfernen</button></div>` : ""}\n        <div class="field"><button class="btn-primary" type="submit">Speichern</button></div>'
    )
    .replace(
      'window.alert(`Temp-Passwort fuer ${player.name}: ${password}`);\n      }\n    });',
      'window.alert(`Temp-Passwort fuer ${player.name}: ${password}`);\n      }\n      if (target.id === "deletePlayerFromModalBtn") {\n        deletePlayer(player.id);\n      }\n    });'
    )
    .replace(
      'const calendarEventId = target.closest("[data-calendar-event]")?.dataset.calendarEvent;\n\n      if (transportEventId) {',
      'const calendarEventId = target.closest("[data-calendar-event]")?.dataset.calendarEvent;\n\n      if (playerId) {\n        deletePlayer(playerId);\n        return;\n      }\n\n      if (transportEventId) {'
    )
    .replace(
      'if (playerId && canManage()) state.players = state.players.filter((player) => player.id !== playerId);\n      if (eventId && canManage()) {',
      'if (eventId && canManage()) {'
    )
    .replace(
      'if ((canManage() && (playerId || eventId || pollId || toggleFineId || deleteCatalogFineId || approveSelfTrainingId || deleteSelfTrainingId || deleteBonusPointId)) || rsvpId || voteId) saveState();',
      'if ((canManage() && (eventId || pollId || toggleFineId || deleteCatalogFineId || approveSelfTrainingId || deleteSelfTrainingId || deleteBonusPointId)) || rsvpId || voteId) saveState();'
    );
  return patched;
}

function patchAppStyle(source) {
  if (source.includes(".transport-details")) return source;
  return source.replace(
    '    .attendee.absent {\n      background: #ffedd5;\n      color: #9a3412;\n    }\n\n',
    '    .attendee.absent {\n      background: #ffedd5;\n      color: #9a3412;\n    }\n\n    .transport-details {\n      display: grid;\n      gap: 8px;\n      padding-top: 4px;\n    }\n\n    .attendee.transport-self {\n      background: #e0f2fe;\n      color: #075985;\n    }\n\n    .attendee.transport-offer {\n      background: #dcfce7;\n      color: #166534;\n    }\n\n    .attendee.transport-passenger {\n      background: #ede9fe;\n      color: #5b21b6;\n    }\n\n    .attendee.transport-open {\n      background: #f1f5f9;\n      color: #475569;\n    }\n\n'
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

async function fetchPatchedAppStyle(request) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const response = await fetch(request);
    const headers = new Headers(response.headers);
    headers.set("content-type", "text/css; charset=utf-8");
    const patched = new Response(patchAppStyle(await response.text()), {
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
    headers.set("content-type", "text/css; charset=utf-8");
    return new Response(patchAppStyle(await cached.text()), {
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
