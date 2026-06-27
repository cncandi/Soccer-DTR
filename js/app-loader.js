(() => {
  function warn(msg) {
    console.warn("[app-loader] " + msg);
  }

  function applyPatch(source, search, replace, label) {
    if (!source.includes(search)) {
      warn("Patch fehlgeschlagen (Ziel nicht gefunden): " + label);
      return source;
    }
    return source.replace(search, replace);
  }

  function patchAppScript(source) {
    // P2: removedDefaultPlayers in initialem State-Objekt
    source = applyPatch(
      source,
      'messages: [],\n      hallOfFame',
      'messages: [],\n      removedDefaultPlayers: [],\n      hallOfFame',
      "P2 removedDefaultPlayers initial state"
    );

    // P3: normalizeRemovedDefaultPlayers vor hasPlayerName einfuegen
    source = applyPatch(
      source,
      'function hasPlayerName(name, exceptId = "") {\n      const key = playerNameKey(name);\n      return Boolean(key) && state.players.some((player) => player.id !== exceptId && playerNameKey(player.name) === key);\n    }',
      'function normalizeRemovedDefaultPlayers(players = []) {\n      return [...new Set(\n        (Array.isArray(players) ? players : []).map(playerNameKey).filter(Boolean)\n      )];\n    }\n\n    function hasPlayerName(name, exceptId = "") {\n      const key = playerNameKey(name);\n      return Boolean(key) && state.players.some((player) => player.id !== exceptId && playerNameKey(player.name) === key);\n    }',
      "P3 normalizeRemovedDefaultPlayers + hasPlayerName"
    );

    // P7: renderTransportDetails + Hilfsfunktionen vor renderTransportControls einfuegen
    source = applyPatch(
      source,
      'function renderTransportControls(event, player, record) {',
      'function transportGroups(entries) {\n      return entries.reduce((groups, entry) => {\n        if (entry.transport === "self") groups.self.push(entry.name);\n        else if (entry.transport === "offer") groups.offer.push(entry.name);\n        else if (entry.transport === "passenger") groups.passenger.push(entry.name);\n        else groups.open.push(entry.name);\n        return groups;\n      }, { self: [], offer: [], passenger: [], open: [] });\n    }\n\n    function renderTransportGroup(label, names, className) {\n      className = className || "";\n      const items = names.map(function(name) { return \'<span class="attendee \' + className + \'">\' + escapeHtml(name) + \'</span>\'; }).join("");\n      return \'<div><strong>\' + escapeHtml(label) + \' (\' + names.length + \')</strong><div class="attendee-list">\' + (items || \'<span class="meta">Keine Eintraege.</span>\') + \'</div></div>\';\n    }\n\n    function renderTransportDetails(event, details) {\n      if (!isAwayGame(event)) return "";\n      var groups = transportGroups(details.yes);\n      return \'<div class="transport-details"><strong>Fahrten</strong>\' +\n        renderTransportGroup("Selbstfahrer", groups.self, "transport-self") +\n        renderTransportGroup("Fahrer / bietet Mitfahrgelegenheit", groups.offer, "transport-offer") +\n        renderTransportGroup("Mitfahrer", groups.passenger, "transport-passenger") +\n        renderTransportGroup("Noch offen", groups.open, "transport-open") +\n        \'</div>\';\n    }\n\n    function renderTransportControls(event, player, record) {',
      "P7 renderTransportDetails + transportGroups"
    );

    // P8: renderTransportDetails nach renderTransportLegend in der Zusagen-Anzeige einfuegen
    source = applyPatch(
      source,
      '${renderTransportLegend(event)}\n          </div>\n          <div>',
      '${renderTransportLegend(event)}\n          </div>\n          ${renderTransportDetails(event, details)}\n          <div>',
      "P8 renderTransportDetails in attendee block"
    );

    // P10: removedDefaultPlayers aus loadedState lesen
    source = applyPatch(
      source,
      'messages: loadedState.messages || [],\n        hallOfFame: normalizeHallOfFame(loadedState.hallOfFame',
      'messages: loadedState.messages || [],\n        removedDefaultPlayers: normalizeRemovedDefaultPlayers(loadedState.removedDefaultPlayers),\n        hallOfFame: normalizeHallOfFame(loadedState.hallOfFame',
      "P10 removedDefaultPlayers in loadedState"
    );

    return source;
  }

  function loadScriptText(source) {
    var script = document.createElement("script");
    script.text = source;
    document.body.appendChild(script);
  }

  function loadScriptSrc() {
    warn("Fallback: app.js wird ohne Patches geladen (Fetch fehlgeschlagen).");
    var script = document.createElement("script");
    script.src = "js/app.js";
    document.body.appendChild(script);
  }

  fetch("js/app.js", { cache: "no-store" })
    .then(function(response) {
      if (!response.ok) throw new Error("app.js konnte nicht geladen werden");
      return response.text();
    })
    .then(function(source) { loadScriptText(patchAppScript(source)); })
    .catch(function(err) {
      warn("Fetch-Fehler: " + err.message);
      loadScriptSrc();
    });
})();
