(() => {
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

  function loadScriptText(source) {
    const script = document.createElement("script");
    script.text = source;
    document.body.appendChild(script);
  }

  function loadScriptSrc() {
    const script = document.createElement("script");
    script.src = "js/app.js";
    document.body.appendChild(script);
  }

  fetch("js/app.js", { cache: "no-store" })
    .then((response) => {
      if (!response.ok) throw new Error("app.js konnte nicht geladen werden");
      return response.text();
    })
    .then((source) => loadScriptText(patchAppScript(source)))
    .catch(loadScriptSrc);
})();
