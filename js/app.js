    const STORE_KEY = "soccer-dtr-club-state";
    const CLUBS_KEY = "soccer-dtr-clubs";
    const CURRENT_CLUB_KEY = "soccer-dtr-current-club";
    const LOGIN_KEY = "soccer-dtr-logged-in";
    const LOGIN_USER_KEY = "soccer-dtr-current-user";
    const LOGIN_PREFILL_KEY = "soccer-dtr-login-prefill";
    const SETTINGS_KEY = "soccer-dtr-supabase-settings";
    const INSTALL_DISMISSED_KEY = "soccer-dtr-install-dismissed";
    const SEEN_PREFIX = "soccer-dtr-seen";
    const PUSH_PUBLIC_KEY = "BMzLO4YI3nJQ2J6OPpj22v7-S8XOuMTq7Ftm5L62CihAq-gNemRJPWAqhn3xzolyq97jJZ6x5KIrrgpdur7Hb8E";
    const PUSH_FUNCTION_NAME = "send-push";
    const DOC_ID = "club-state";
    const DEFAULT_CLUB_ID = "default-club";
    const DEFAULT_PASSWORD = "fussball";
    const ROLE_LEVELS = { Spieler: 1, Admin: 2, Superadmin: 3 };
    const MEMBER_FUNCTIONS = ["Spieler", "Trainer", "Betreuer"];
    const TEAM_GROUPS = ["Mannschaft", "Mannschaftsrat", "Kasse", "Trainer", "Betreuer"];
    const DEFAULT_FINE_CATALOG = [
      { label: "Zu spaet zur Teambesprechung", description: "", amount: 3, penalty: "" },
      { label: "Gelbe Karte", description: "", amount: 2, penalty: "" },
      { label: "Gelbe Karte wegen Meckern", description: "", amount: 5, penalty: "" },
      { label: "Dreckige Schuhe beim Training", description: "", amount: 2, penalty: "" },
      { label: "Dreckige Schuhe beim Spiel", description: "", amount: 5, penalty: "" },
      { label: "Rauchen im Trikot", description: "", amount: 7, penalty: "" },
      { label: "In Dusche pinkeln", description: "", amount: 10, penalty: "" },
      { label: "Unentschuldigtes Fehlen beim Training", description: "", amount: 15, penalty: "" },
      { label: "Unentschuldigtes Fehlen beim Spiel", description: "", amount: 30, penalty: "" },
      { label: "Balldienst vergessen", description: "", amount: 10, penalty: "" },
      { label: "Gelb-Rote Karte (Dummheit)", description: "", amount: 20, penalty: "" },
      { label: "Rote Karte (Dummheit/Taetlichkeit)", description: "", amount: 30, penalty: "" },
      { label: "Zu spaet beim Training", description: "Im Training zu spaet erschienen", amount: 3, penalty: "" },
      { label: "Handy klingelt", description: "Handy klingelt beim Meeting", amount: 5, penalty: "" },
      { label: "Ausstattung nicht komplett", description: "Mangel an Ausruestung waehrend des Spiels", amount: 5, penalty: "" },
      { label: "Ausruestung vergessen", description: "Ausruestung zu Hause / Umkleideraum zurueckgelassen", amount: 5, penalty: "" },
      { label: "Verpasste Kleiderordnung an einem Spieltag", description: "Die Kleiderordnung an einem Spieltag wurde nicht erfuellt", amount: 10, penalty: "" },
      { label: "Haende in den Taschen", description: "Haende in der Tasche waehrend des aktiven Trainings", amount: 1, penalty: "" },
      { label: "Abwesenheit waehrend der letzten Teambesprechung", description: "Unerwuenschte Abwesenheit bei der letzten Teambesprechung", amount: 15, penalty: "" },
      { label: "Unbezahlte Konten", description: "Aufgrund unbezahlter Betraege", amount: 2, penalty: "" },
      { label: "Zu spaet am Treffpunkt", description: "Am Treffpunkt fuer einen Spieltag zu spaet erschienen", amount: 10, penalty: "" },
      { label: "Elfmeterschiessen Training", description: "Elfmeterschiessen im Training verloren", amount: 0, penalty: "Kiste Cola" }
    ];
    const GRADE_FIELDS = ["speed", "stamina", "duels", "heading", "tactics", "form"];
    const AVAILABILITY_FIELDS = ["injured", "vacation", "unavailable", "youth"];
    const AVAILABILITY_LABELS = {
      injured: "Verletzt",
      vacation: "Urlaub",
      unavailable: "Nicht verfuegbar",
      youth: "A Jugend"
    };
    const AVAILABILITY_SYMBOLS = {
      injured: "V",
      vacation: "U",
      unavailable: "!",
      youth: "A"
    };
    const PERIOD_AVAILABILITY_FIELDS = ["injured", "vacation", "unavailable"];
    const PERFORMANCE_LABELS = {
      speed: "Schnelligkeit",
      stamina: "Ausdauer",
      duels: "Zweikampf",
      heading: "Kopfball",
      tactics: "Taktik",
      form: "Formbarometer"
    };
    const DEFAULT_SUPABASE_URL = "https://pihgvwnoznqhautudhlx.supabase.co";
    const DEFAULT_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpaGd2d25vem5xaGF1dHVkaGx4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk2NDA0NjMsImV4cCI6MjA5NTIxNjQ2M30.7BSIzhcHNibC4Tkz0Id7AnNGxFJTtx9cxF5UFX6QiGA";
    const DEFAULT_PLAYER_NAMES = [
      "AhmadAli",
      "Andreas Reitz",
      "Arsenii",
      "Ben Gaz deutschland",
      "Fabi Bierau",
      "Fynn Boehle",
      "Gaith",
      "Ibush Gashi",
      "Jakob",
      "Jan Cegledi",
      "Johannes Damm",
      "Jonas Schwind",
      "Jonathan Gaz",
      "Lenny Bergunde",
      "Luca Becker",
      "Luis Pollmann",
      "Lukas Stark",
      "Mamadou Diallo",
      "Marvin Donges",
      "Marvin Weber",
      "Max Reitz",
      "Michael Becker",
      "Mo",
      "Niko Arnold",
      "Pathe",
      "Steven Simmons",
      "Thore Ruppersberger",
      "Tristan Seipp"
    ];
    const DEFAULT_USER_ROLES = {
      "andreas reitz": "Superadmin",
      "max reitz": "Superadmin",
      "steven simmons": "Admin"
    };
    const DEFAULT_USER_PASSWORDS = {
      "andreas reitz": "F###mill55"
    };
    const DEFAULT_MEMBER_ROLES = {
      "steven simmons": ["Spieler", "Trainer"],
      "andreas reitz": ["Trainer"],
      "michael becker": ["Betreuer"]
    };
    const REMOVED_DEFAULT_PLAYERS = ["marko rujevic", "edu klaus"];

    const defaultState = {
      players: DEFAULT_PLAYER_NAMES.map((name) => ({
        id: crypto.randomUUID(),
        name,
        position: "Mittelfeld",
        phone: "",
        group: "Mannschaft",
        groups: ["Mannschaft"],
        notes: "",
        password: DEFAULT_USER_PASSWORDS[name.trim().toLowerCase()] || DEFAULT_PASSWORD,
        role: DEFAULT_USER_ROLES[name.trim().toLowerCase()] || "Spieler",
        memberRoles: DEFAULT_MEMBER_ROLES[name.trim().toLowerCase()] || ["Spieler"],
        photo: "",
        alternatePositions: [],
        availability: defaultAvailability(),
        performance: defaultPerformance()
      })),
      events: [],
      cashFines: [],
      fineCatalog: defaultFineCatalog(),
      polls: [],
      messages: [],
      hallOfFame: { selfTrainings: [], bonusPoints: [] }
    };

    let clubs = loadClubs();
    let currentClubId = loadCurrentClubId();
    let state = loadState();
    let settings = loadSettings();
    let calendarDate = isoDate(new Date());
    let calendarMode = "week";
    let expandedEventId = "";
    let selectedFamePlayer = "";
    let deferredInstallPrompt = null;
    let syncTimer = null;
    let syncInProgress = false;
    let pendingCloudSync = false;

    const titles = {
      dashboard: ["Uebersicht", "Alles Wichtige fuer Mannschaft, Training, Spiele und Gruppen."],
      players: ["Spieler", "Kader, Gruppen und Kontaktdaten verwalten."],
      events: ["Training & Spiele", "Termine erstellen und Zu- oder Absagen erfassen."],
      polls: ["Abstimmungen", "Schnelle Entscheidungen fuer Mannschaft, Mannschaftsrat und Kasse."],
      messages: ["Mitteilungen", "Gruppen-Kommunikation im Stil eines Team-Chats."],
      cash: ["Mannschaftskasse", "Strafen, offene Betraege und Kassenstand."],
      fame: ["Hall of Fame", "Punkte, Rangliste und besondere Leistungen."],
      settings: ["Einstellungen", "Vereinsdesign und Datenbank-Einstellungen verwalten."]
    };

    const $ = (selector) => document.querySelector(selector);
    const $$ = (selector) => [...document.querySelectorAll(selector)];

    function defaultPerformance() {
      return {
        speed: "",
        stamina: "",
        duels: "",
        heading: "",
        tactics: "",
        form: "",
        strengths: "",
        weaknesses: "",
        talks: ""
      };
    }

    function defaultAvailability() {
      return {
        injured: { active: false, from: "", to: "" },
        vacation: { active: false, from: "", to: "" },
        unavailable: { active: false, from: "", to: "" },
        youth: { active: false, from: "", to: "" }
      };
    }

    function normalizeAvailability(availability = {}) {
      availability = availability || {};
      const defaults = defaultAvailability();
      return Object.fromEntries(AVAILABILITY_FIELDS.map((field) => [
        field,
        {
          ...defaults[field],
          ...(availability[field] || {}),
          active: Boolean(availability[field]?.active)
        }
      ]));
    }

    function normalizeMemberRoles(player = {}) {
      const defaultRoles = DEFAULT_MEMBER_ROLES[String(player.name || "").trim().toLowerCase()];
      if (defaultRoles) return defaultRoles;
      if (Array.isArray(player.memberRoles) && player.memberRoles.length) {
        const roles = MEMBER_FUNCTIONS.filter((role) => player.memberRoles.includes(role));
        return roles.length ? roles : ["Spieler"];
      }
      if (["Trainer", "Betreuer"].includes(player.position) && player.group === player.position) {
        return [player.position];
      }
      return ["Spieler"];
    }

    function hasMemberRole(player, role) {
      return normalizeMemberRoles(player).includes(role);
    }

    function memberRoleLabels(player) {
      return normalizeMemberRoles(player).join(", ");
    }

    function normalizeGroups(player = {}) {
      if (Array.isArray(player.groups) && player.groups.length) {
        const groups = TEAM_GROUPS.filter((group) => player.groups.includes(group));
        return groups.length ? groups : ["Mannschaft"];
      }
      return [player.group || "Mannschaft"];
    }

    function groupLabels(player) {
      return normalizeGroups(player).join(", ");
    }

    function loadClubs() {
      const stored = localStorage.getItem(CLUBS_KEY);
      const parsed = stored ? JSON.parse(stored) : null;
      const source = parsed && parsed.length ? parsed : [{ id: DEFAULT_CLUB_ID, name: "Mein Verein" }];
      return source.map(normalizeClub);
    }

    function normalizeClub(club) {
      return {
        id: club.id || crypto.randomUUID(),
        name: club.name || "Mein Verein",
        color: club.color || "#155e3b",
        logo: club.logo || "",
        updatedAt: club.updatedAt || ""
      };
    }

    function loadCurrentClubId() {
      const stored = localStorage.getItem(CURRENT_CLUB_KEY);
      return clubs.some((club) => club.id === stored) ? stored : clubs[0].id;
    }

    function stateKey(clubId = currentClubId) {
      return `${STORE_KEY}:${clubId}`;
    }

    function loadState() {
      const stored = localStorage.getItem(stateKey());
      const legacyStored = currentClubId === DEFAULT_CLUB_ID ? localStorage.getItem(STORE_KEY) : null;
      const source = stored || legacyStored;
      const loadedState = source ? JSON.parse(source) : structuredClone(defaultState);
      return ensureDefaultPlayers(loadedState);
    }

    function playerNameKey(name) {
      return String(name || "").trim().toLowerCase();
    }

    function normalizePlayer(player) {
      const nameKey = playerNameKey(player.name);
      const memberRoles = normalizeMemberRoles(player);
      const isPlayerMember = memberRoles.includes("Spieler");
      return {
        ...player,
        name: String(player.name || "").trim(),
        password: player.password || DEFAULT_USER_PASSWORDS[nameKey] || DEFAULT_PASSWORD,
        role: player.role || DEFAULT_USER_ROLES[nameKey] || "Spieler",
        memberRoles,
        groups: normalizeGroups(player),
        group: normalizeGroups(player)[0],
        photo: player.photo || "",
        // Reine Trainer/Betreuer ohne Spieler-Rolle haben keine Position
        position: isPlayerMember ? (player.position || "") : "",
        alternatePositions: isPlayerMember && Array.isArray(player.alternatePositions) ? player.alternatePositions : [],
        availability: normalizeAvailability(player.availability),
        performance: { ...defaultPerformance(), ...(player.performance || {}) }
      };
    }

    function mergePlayersByName(a = [], b = []) {
      const map = new Map();
      [...a, ...b].forEach((player) => {
        const normalized = normalizePlayer(player);
        const key = playerNameKey(normalized.name);
        if (!key || REMOVED_DEFAULT_PLAYERS.includes(key)) return;
        const existing = map.get(key);
        map.set(key, existing ? { ...existing, ...normalized, id: existing.id || normalized.id } : normalized);
      });
      return [...map.values()];
    }

    function hasPlayerName(name, exceptId = "") {
      const key = playerNameKey(name);
      return Boolean(key) && state.players.some((player) => player.id !== exceptId && playerNameKey(player.name) === key);
    }

    function ensureDefaultPlayers(loadedState) {
      const normalizedPlayers = mergePlayersByName(loadedState.players || []);
      const existingNames = new Set(normalizedPlayers.map((player) => playerNameKey(player.name)));
      const missingPlayers = DEFAULT_PLAYER_NAMES
        .filter((name) => !existingNames.has(name.toLowerCase()))
        .map((name) => ({
          id: crypto.randomUUID(),
          name,
          position: "Mittelfeld",
          phone: "",
          group: "Mannschaft",
          groups: ["Mannschaft"],
          notes: "",
          password: DEFAULT_USER_PASSWORDS[name.trim().toLowerCase()] || DEFAULT_PASSWORD,
          role: DEFAULT_USER_ROLES[name.trim().toLowerCase()] || "Spieler",
          memberRoles: DEFAULT_MEMBER_ROLES[name.trim().toLowerCase()] || ["Spieler"],
          photo: "",
          alternatePositions: [],
          availability: defaultAvailability(),
          performance: defaultPerformance()
        }));

      return {
        players: [...normalizedPlayers, ...missingPlayers],
        events: (loadedState.events || []).map(normalizeEvent),
        cashFines: (loadedState.cashFines || []).map(normalizeCashFine),
        fineCatalog: ensureFineCatalog(loadedState.fineCatalog),
        polls: loadedState.polls || [],
        messages: loadedState.messages || [],
        hallOfFame: normalizeHallOfFame(loadedState.hallOfFame)
      };
    }

    function defaultFineCatalog() {
      return DEFAULT_FINE_CATALOG.map((fine) => normalizeFineCatalogItem({ ...fine, id: fineCatalogDefaultId(fine.label) }));
    }

    function fineCatalogDefaultId(label) {
      return "default-" + String(label).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    }

    function normalizeFineCatalogItem(fine) {
      return {
        id: fine.id || crypto.randomUUID(),
        label: fine.label || "Strafe",
        description: fine.description || "",
        amount: Number(fine.amount || 0),
        penalty: fine.penalty || ""
      };
    }

    function ensureFineCatalog(catalog) {
      return Array.isArray(catalog) && catalog.length
        ? catalog.map(normalizeFineCatalogItem)
        : defaultFineCatalog();
    }

    function normalizeCashFine(fine) {
      return {
        id: fine.id || crypto.randomUUID(),
        player: fine.player || "",
        label: fine.label || "Strafe",
        amount: Number(fine.amount || 0),
        penalty: fine.penalty || "",
        date: fine.date || new Date().toISOString().slice(0, 10),
        note: fine.note || "",
        createdBy: fine.createdBy || "",
        createdAt: fine.createdAt || new Date().toISOString(),
        paid: Boolean(fine.paid),
        paidAt: fine.paidAt || ""
      };
    }

    function normalizeSelfTraining(entry) {
      return {
        id: entry.id || crypto.randomUUID(),
        player: entry.player || "",
        date: entry.date || new Date().toISOString().slice(0, 10),
        note: entry.note || "",
        proof: entry.proof || "",
        createdBy: entry.createdBy || entry.player || "",
        createdAt: entry.createdAt || new Date().toISOString()
      };
    }

    function normalizeBonusPoint(entry) {
      return {
        id: entry.id || crypto.randomUUID(),
        player: entry.player || "",
        points: Number(entry.points || 0),
        reason: entry.reason || "",
        date: entry.date || new Date().toISOString().slice(0, 10),
        createdBy: entry.createdBy || "",
        createdAt: entry.createdAt || new Date().toISOString()
      };
    }

    function normalizeHallOfFame(hallOfFame = {}) {
      return {
        selfTrainings: (hallOfFame.selfTrainings || []).map(normalizeSelfTraining),
        bonusPoints: (hallOfFame.bonusPoints || []).map(normalizeBonusPoint)
      };
    }

    function normalizeEvent(event) {
      return {
        id: event.id || crypto.randomUUID(),
        type: event.type || "Training",
        title: event.title || "Termin",
        date: event.date || new Date().toISOString().slice(0, 10),
        time: event.time || "18:00",
        location: event.location || "",
        details: event.details || "",
        coach: event.coach || "",
        focus: event.focus || "",
        remark: event.remark || "",
        repeat: event.repeat || "",
        repeatGroup: event.repeatGroup || "",
        createdAt: event.createdAt || new Date().toISOString(),
        rsvps: event.rsvps || {}
      };
    }

    function loadSettings() {
      const stored = localStorage.getItem(SETTINGS_KEY);
      const parsed = stored ? JSON.parse(stored) : {};
      return {
        url: parsed.url || DEFAULT_SUPABASE_URL,
        key: parsed.key || DEFAULT_SUPABASE_ANON_KEY,
        table: parsed.table || "club_documents"
      };
    }

    function saveState(options = {}) {
      state = ensureDefaultPlayers(state);
      localStorage.setItem(stateKey(), JSON.stringify(state));
      markActiveViewSeen();
      render();
      if (options.sync !== false) queueCloudSync();
    }

    function saveClubs(options = {}) {
      localStorage.setItem(CLUBS_KEY, JSON.stringify(clubs));
      localStorage.setItem(CURRENT_CLUB_KEY, currentClubId);
      renderClubSelect();
      if (options.sync !== false) queueCloudSync();
    }

    function saveSettings() {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
      renderStatus();
    }

    function isLoggedIn() {
      const remembered = localStorage.getItem(LOGIN_KEY) === "true";
      const session = sessionStorage.getItem(LOGIN_KEY) === "true";
      return remembered || session;
    }

    function loginPrefills() {
      try {
        return JSON.parse(localStorage.getItem(LOGIN_PREFILL_KEY) || "{}");
      } catch (error) {
        return {};
      }
    }

    function loginPrefillFor(clubId = currentClubId) {
      const prefill = loginPrefills()[clubId] || {};
      return {
        user: prefill.user || localStorage.getItem(LOGIN_USER_KEY) || "Max Reitz",
        password: prefill.password || ""
      };
    }

    function saveLoginPrefill(clubId, user, password) {
      const prefills = loginPrefills();
      prefills[clubId] = { user, password };
      localStorage.setItem(LOGIN_PREFILL_KEY, JSON.stringify(prefills));
    }

    function fillSavedLoginPassword() {
      const prefill = loginPrefillFor();
      $("#loginPassword").value = $("#loginUser").value === prefill.user ? prefill.password : "";
    }

    function restoreLogin() {
      if (!isLoggedIn()) return false;
      const storedUser = localStorage.getItem(LOGIN_USER_KEY);
      const storedClub = localStorage.getItem(CURRENT_CLUB_KEY);
      if (storedClub && clubs.some((club) => club.id === storedClub)) {
        currentClubId = storedClub;
        state = loadState();
      }
      if (!storedUser || !playerByName(storedUser)) {
        localStorage.removeItem(LOGIN_KEY);
        sessionStorage.removeItem(LOGIN_KEY);
        return false;
      }
      $("#currentUser").value = storedUser;
      updateRoleFromUser();
      ensureSeenDefaults();
      return true;
    }

    function setLoginVisible(visible) {
      document.body.classList.toggle("needs-login", visible);
    }

    function activeUser() {
      return $("#currentUser").value.trim() || "Unbekannt";
    }

    function activeRole() {
      return $("#currentRole").value || "Spieler";
    }

    function roleForUser(name) {
      const player = playerByName(name);
      return player ? player.role || "Spieler" : "Spieler";
    }

    function playerByName(name) {
      return state.players.find((player) => player.name.trim().toLowerCase() === name.trim().toLowerCase());
    }

    function generateTempPassword() {
      return "tmp-" + Math.random().toString(36).slice(2, 8);
    }

    function updateRoleFromUser() {
      $("#currentRole").value = roleForUser(activeUser());
    }

    function displayPosition(player) {
      // Position nur fuer Personen anzeigen, die auch Spieler sind.
      // Reine Trainer oder Betreuer haben keine Position.
      return hasMemberRole(player, "Spieler") ? (player.position || "") : "";
    }

    function canManage() {
      return ROLE_LEVELS[activeRole()] >= ROLE_LEVELS.Admin;
    }

    function canManageCash() {
      return canManage();
    }

    function canAwardFamePoints() {
      const player = playerByName(activeUser());
      return canManage() || Boolean(player && hasMemberRole(player, "Trainer"));
    }

    function canManagePlayers() {
      return canManage();
    }

    function isSuperadmin() {
      return activeRole() === "Superadmin";
    }

    function canAccess(minRole) {
      const normalizedRole = String(minRole || "Spieler").toLowerCase();
      const requiredRole = {
        player: "Spieler",
        spieler: "Spieler",
        admin: "Admin",
        superadmin: "Superadmin"
      }[normalizedRole] || "Spieler";
      return ROLE_LEVELS[activeRole()] >= ROLE_LEVELS[requiredRole];
    }

    function clubDocumentId() {
      return `${DOC_ID}:${currentClubId}`;
    }

    function clubsDocumentId() {
      return `${DOC_ID}:clubs`;
    }

    function currentClub() {
      return clubs.find((club) => club.id === currentClubId) || clubs[0];
    }

    function touchClub(club) {
      club.updatedAt = new Date().toISOString();
      return club;
    }

    function applyClubTheme() {
      const club = currentClub();
      const color = normalizeHexColor(club.color || "#155e3b");
      document.documentElement.style.setProperty("--club-color", color);
      document.documentElement.style.setProperty("--club-dark", mixHex(color, "#000000", 72));
      document.documentElement.style.setProperty("--club-soft", mixHex(color, "#ffffff", 82));
      document.documentElement.style.setProperty("--green-2", mixHex(color, "#ffffff", 22));
      document.querySelector('meta[name="theme-color"]').setAttribute("content", color);
      $("#clubBrandName").textContent = club.name;
      renderLogo($("#clubLogoMark"), club);
    }

    function renderLogo(container, club) {
      if (!container) return;
      container.innerHTML = club.logo
        ? `<img src="${escapeAttr(club.logo)}" alt="${escapeAttr(club.name)} Logo">`
        : `<span class="brand-initials">${escapeHtml(initials(club.name))}</span>`;
    }

    function initials(name) {
      const parts = name.trim().split(/\s+/).filter(Boolean);
      return (parts.length > 1 ? parts[0][0] + parts[1][0] : name.slice(0, 3)).toUpperCase();
    }

    function normalizeHexColor(value) {
      return /^#[0-9a-f]{6}$/i.test(value) ? value : "#155e3b";
    }

    function mixHex(from, to, amount) {
      const a = hexToRgb(from);
      const b = hexToRgb(to);
      const ratio = amount / 100;
      const mixed = {
        r: Math.round(a.r * (1 - ratio) + b.r * ratio),
        g: Math.round(a.g * (1 - ratio) + b.g * ratio),
        b: Math.round(a.b * (1 - ratio) + b.b * ratio)
      };
      return `#${[mixed.r, mixed.g, mixed.b].map((part) => part.toString(16).padStart(2, "0")).join("")}`;
    }

    function hexToRgb(hex) {
      const value = normalizeHexColor(hex).slice(1);
      return {
        r: parseInt(value.slice(0, 2), 16),
        g: parseInt(value.slice(2, 4), 16),
        b: parseInt(value.slice(4, 6), 16)
      };
    }

    function formatDate(date, time) {
      if (!date) return "";
      const value = new Date(`${date}T${time || "00:00"}`);
      return value.toLocaleString("de-DE", { weekday: "short", day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" });
    }

    function formatNavLabel(label) {
      const words = label.trim().split(/\s+/).filter(Boolean);
      if (words.length <= 4) return document.createTextNode(label.trim());
      const fragment = document.createDocumentFragment();
      fragment.append(document.createTextNode(words.slice(0, 4).join(" ")));
      fragment.append(document.createElement("br"));
      fragment.append(document.createTextNode(words.slice(4).join(" ")));
      return fragment;
    }

    function setupNavLabels() {
      $$(".nav button").forEach((button) => {
        if (button.querySelector(".nav-label")) return;
        const badges = Array.from(button.querySelectorAll(".nav-badge"));
        const label = Array.from(button.childNodes)
          .filter((node) => node.nodeType === Node.TEXT_NODE)
          .map((node) => node.textContent)
          .join(" ")
          .trim();
        if (!label) return;
        button.setAttribute("aria-label", label);
        button.textContent = "";
        const labelNode = document.createElement("span");
        labelNode.className = "nav-label";
        labelNode.append(formatNavLabel(label));
        button.append(labelNode, ...badges);
      });
    }

    function getSupabaseClient() {
      if (!settings.url || !settings.key || !window.supabase) return null;
      return window.supabase.createClient(settings.url, settings.key);
    }

    function supabaseMissingReason() {
      if (!settings.url || !settings.key) return "Supabase ist noch nicht konfiguriert. Lokale Daten bleiben aktiv.";
      if (!window.supabase) return "Supabase-Bibliothek ist noch nicht geladen. Bitte Internetverbindung pruefen oder die Seite neu laden.";
      return "Supabase ist noch nicht verfuegbar. Lokale Daten bleiben aktiv.";
    }

    function supabaseErrorMessage(error) {
      const message = error.message || String(error);
      if (message.includes("Could not find the table")) {
        return `Supabase-Fehler: Tabelle "${settings.table}" wurde nicht gefunden. Keine Vereinsdaten geladen.`;
      }
      return "Supabase-Fehler: " + message;
    }

    async function waitForSupabaseLibrary(timeoutMs = 5000) {
      if (!settings.url || !settings.key || window.supabase) return Boolean(window.supabase);
      const startedAt = Date.now();
      while (!window.supabase && Date.now() - startedAt < timeoutMs) {
        await new Promise((resolve) => window.setTimeout(resolve, 100));
      }
      return Boolean(window.supabase);
    }

    function queueCloudSync() {
      if (!settings.url || !settings.key || !window.supabase) return;
      if (syncInProgress) {
        pendingCloudSync = true;
        return;
      }
      window.clearTimeout(syncTimer);
      syncTimer = window.setTimeout(() => {
        syncWithSupabase({ silent: true, preferLocal: true });
      }, 800);
    }

    async function syncWithSupabase(options = {}) {
      if (syncInProgress) {
        pendingCloudSync = true;
        return;
      }
      if (!window.supabase) await waitForSupabaseLibrary();
      const client = getSupabaseClient();
      if (!client) {
        setStatus(supabaseMissingReason());
        return;
      }

      syncInProgress = true;
      pendingCloudSync = false;
      if (!options.silent) setStatus("Synchronisiere mit Supabase ...");
      try {
        const clubChanged = await syncClubs(client);
        if (clubChanged) {
          state = loadState();
          updateRoleFromUser();
        }
        const { data, error } = await client.from(settings.table).select("document").eq("id", clubDocumentId()).maybeSingle();
        if (error) {
          setStatus("Supabase-Fehler: " + error.message);
          return;
        }

        if (!options.preferLocal && data && data.document) {
          state = mergeState(state, data.document);
        }

        const payload = { id: clubDocumentId(), document: state, updated_at: new Date().toISOString() };
        const result = await client.from(settings.table).upsert(payload);
        if (result.error) {
          setStatus("Supabase-Fehler: " + result.error.message);
          return;
        }

        localStorage.setItem(stateKey(), JSON.stringify(state));
        setStatus("Synchronisiert: " + new Date().toLocaleTimeString("de-DE"));
        render();
      } catch (error) {
        setStatus(supabaseErrorMessage(error));
      } finally {
        syncInProgress = false;
        if (pendingCloudSync) {
          pendingCloudSync = false;
          queueCloudSync();
        }
      }
    }

    async function syncClubs(client) {
      const previousClubId = currentClubId;
      const previousClubs = clubs.map(normalizeClub);
      const { data, error } = await client.from(settings.table).select("document,updated_at").eq("id", clubsDocumentId()).maybeSingle();
      if (error) throw new Error(error.message);
      if (data && data.document && Array.isArray(data.document.clubs)) {
        const remoteClubs = data.document.clubs.map((club) => normalizeClub({ ...club, updatedAt: club.updatedAt || data.updated_at || "" }));
        const hadOnlyDefaultClub = previousClubs.length === 1 && isDefaultPlaceholderClub(previousClubs[0]);
        clubs = hadOnlyDefaultClub ? remoteClubs : mergeClubs(clubs, remoteClubs);
        if (hadOnlyDefaultClub && remoteClubs.length) {
          currentClubId = preferredRemoteClub(remoteClubs).id;
        } else if (!clubs.some((club) => club.id === currentClubId)) {
          currentClubId = clubs[0].id;
        }
        saveClubs({ sync: false });
      }

      const result = await client.from(settings.table).upsert({
        id: clubsDocumentId(),
        document: { clubs },
        updated_at: new Date().toISOString()
      });
      if (result.error) throw new Error(result.error.message);
      return previousClubId !== currentClubId;
    }

    function isDefaultPlaceholderClub(club) {
      return club
        && club.id === DEFAULT_CLUB_ID
        && club.name === "Mein Verein"
        && normalizeHexColor(club.color || "#155e3b") === "#155e3b"
        && !club.logo;
    }

    function preferredRemoteClub(remoteClubs) {
      return remoteClubs.find((club) => !isDefaultPlaceholderClub(club)) || remoteClubs[0];
    }

    function mergeState(localState, remoteState) {
      return ensureDefaultPlayers({
        players: mergePlayersByName(localState.players, remoteState.players || []),
        events: mergeById(localState.events, remoteState.events || []),
        cashFines: mergeById(localState.cashFines || [], remoteState.cashFines || []),
        fineCatalog: mergeById(localState.fineCatalog || [], remoteState.fineCatalog || []),
        polls: mergeById(localState.polls, remoteState.polls || []),
        messages: mergeById(localState.messages, remoteState.messages || []),
        hallOfFame: {
          selfTrainings: mergeById(localState.hallOfFame?.selfTrainings || [], remoteState.hallOfFame?.selfTrainings || []),
          bonusPoints: mergeById(localState.hallOfFame?.bonusPoints || [], remoteState.hallOfFame?.bonusPoints || [])
        }
      });
    }

    function mergeById(a, b) {
      const map = new Map();
      [...a, ...b].forEach((item) => map.set(item.id, item));
      return [...map.values()];
    }

    function mergeClubs(a, b) {
      const map = new Map();
      [...a, ...b].map(normalizeClub).forEach((club) => {
        const existing = map.get(club.id);
        if (!existing || newerClub(club, existing) === club) map.set(club.id, club);
      });
      return [...map.values()].sort((clubA, clubB) => clubA.name.localeCompare(clubB.name, "de"));
    }

    function newerClub(candidate, existing) {
      const candidateTime = Date.parse(candidate.updatedAt || "");
      const existingTime = Date.parse(existing.updatedAt || "");
      if (Number.isFinite(candidateTime) || Number.isFinite(existingTime)) {
        return (candidateTime || 0) >= (existingTime || 0) ? candidate : existing;
      }
      return candidate;
    }

    function setStatus(text) {
      $("#syncStatus").textContent = text;
    }

    function renderStatus() {
      const club = clubs.find((item) => item.id === currentClubId);
      const mode = settings.url && settings.key ? `Supabase bereit: ${settings.table}` : "Lokale Daten aktiv.";
      setStatus(`${club ? club.name : "Verein"} - ${mode}`);
    }

    function installHintText() {
      const standalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone;
      if (standalone) return "";
      const isiOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
      return isiOS ? "Teilen und Zum Home-Bildschirm waehlen." : "Als App auf dem Home-Bildschirm speichern.";
    }

    function renderInstallPanel() {
      const panel = $("#installPanel");
      if (!panel) return;
      const standalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone;
      const dismissed = localStorage.getItem(INSTALL_DISMISSED_KEY) === "true";
      const hint = installHintText();
      panel.hidden = standalone || dismissed || !hint;
      $("#installHint").textContent = hint;
      $("#installAppBtn").hidden = !deferredInstallPrompt;
    }

    function seenKey(type) {
      return `${SEEN_PREFIX}:${currentClubId}:${activeUser().toLowerCase()}:${type}`;
    }

    function ensureSeenDefaults() {
      if (!isLoggedIn()) return;
      ["events", "messages"].forEach((type) => {
        const key = seenKey(type);
        if (!localStorage.getItem(key)) localStorage.setItem(key, new Date().toISOString());
      });
    }

    function markSeen(type) {
      if (!isLoggedIn()) return;
      localStorage.setItem(seenKey(type), new Date().toISOString());
    }

    function markActiveViewSeen() {
      const activeView = $(".view.active")?.id;
      if (activeView === "events") markSeen("events");
      if (activeView === "messages") markSeen("messages");
    }

    function unreadCounts() {
      if (!isLoggedIn()) return { events: 0, messages: 0, total: 0 };
      const eventSeen = localStorage.getItem(seenKey("events")) || new Date().toISOString();
      const messageSeen = localStorage.getItem(seenKey("messages")) || new Date().toISOString();
      const allowedGroups = allowedMessageGroups();
      const events = state.events.filter((event) => (event.createdAt || "") > eventSeen).length;
      const messages = state.messages.filter((message) => allowedGroups.includes(message.group) && (message.createdAt || "") > messageSeen).length;
      return { events, messages, total: events + messages };
    }

    async function updateAppBadge(total) {
      if (!("setAppBadge" in navigator) || !("clearAppBadge" in navigator)) return;
      try {
        if (total > 0) await navigator.setAppBadge(total);
        else await navigator.clearAppBadge();
      } catch (error) {
        // App-Badges sind nicht in jedem Browser erlaubt.
      }
    }

    function clearServiceWorkerMessageBadge() {
      if (!("serviceWorker" in navigator)) return;
      const message = { type: "CLEAR_MESSAGE_BADGE" };
      navigator.serviceWorker.controller?.postMessage(message);
      navigator.serviceWorker.ready
        .then((registration) => registration.active?.postMessage(message))
        .catch(() => {});
    }

    function renderNotificationBadges() {
      const counts = unreadCounts();
      Object.entries(counts).forEach(([type, count]) => {
        if (type === "total") return;
        $$(`[data-nav-badge="${type}"]`).forEach((badge) => {
          badge.hidden = count === 0;
          badge.textContent = count ? (count > 99 ? "99+" : String(count)) : "";
          badge.title = count ? `${count} neu` : "";
        });
      });
      updateAppBadge(counts.messages);
      if (counts.messages === 0) clearServiceWorkerMessageBadge();
    }

    function pushSupported() {
      return Boolean("serviceWorker" in navigator && "PushManager" in window && "Notification" in window);
    }

    function pushFunctionUrl() {
      return settings.url ? `${settings.url.replace(/\/$/, "")}/functions/v1/${PUSH_FUNCTION_NAME}` : "";
    }

    function urlBase64ToUint8Array(value) {
      const padding = "=".repeat((4 - value.length % 4) % 4);
      const base64 = (value + padding).replace(/-/g, "+").replace(/_/g, "/");
      const raw = window.atob(base64);
      return Uint8Array.from([...raw].map((char) => char.charCodeAt(0)));
    }

    async function currentPushSubscription() {
      if (!pushSupported()) return null;
      const registration = await navigator.serviceWorker.ready;
      return registration.pushManager.getSubscription();
    }

    async function renderPushPanel() {
      const status = $("#pushStatus");
      const button = $("#enablePushBtn");
      if (!status || !button) return;
      if (!pushSupported()) {
        status.textContent = "Dieses Geraet unterstuetzt Web Push fuer diese App nicht.";
        button.hidden = true;
        return;
      }
      if (!settings.url || !settings.key) {
        status.textContent = "Push braucht die Supabase-Verbindung.";
        button.hidden = true;
        return;
      }
      const permission = Notification.permission;
      const subscription = await currentPushSubscription().catch(() => null);
      if (permission === "granted" && subscription) {
        status.textContent = "Push-Benachrichtigungen sind auf diesem Geraet aktiv.";
        button.textContent = "Benachrichtigungen aktualisieren";
      } else if (permission === "denied") {
        status.textContent = "Benachrichtigungen sind im Browser blockiert.";
        button.hidden = true;
      } else {
        status.textContent = "Aktivieren, um Mitteilungen auch bei geschlossener App zu sehen.";
        button.textContent = "Benachrichtigungen aktivieren";
      }
    }

    async function savePushSubscription(subscription) {
      const client = getSupabaseClient();
      if (!client || !subscription) return false;
      const payload = {
        endpoint: subscription.endpoint,
        club_id: currentClubId,
        user_name: activeUser(),
        groups: allowedMessageGroups(),
        subscription: subscription.toJSON(),
        updated_at: new Date().toISOString()
      };
      const result = await client.from("push_subscriptions").upsert(payload);
      if (result.error) {
        setStatus("Push-Fehler: " + result.error.message);
        return false;
      }
      setStatus("Push-Benachrichtigungen aktiviert.");
      return true;
    }

    async function enablePushNotifications() {
      if (!pushSupported()) {
        window.alert("Dieses Geraet unterstuetzt Web Push fuer diese App nicht.");
        return;
      }
      if (!settings.url || !settings.key) {
        window.alert("Push braucht die Supabase-Verbindung.");
        return;
      }
      const permission = await Notification.requestPermission();
      if (permission !== "granted") {
        renderPushPanel();
        return;
      }
      const registration = await navigator.serviceWorker.ready;
      const existing = await registration.pushManager.getSubscription();
      const subscription = existing || await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(PUSH_PUBLIC_KEY)
      });
      await savePushSubscription(subscription);
      renderPushPanel();
    }

    async function sendPushForMessage(message) {
      if (!settings.url || !settings.key || !pushFunctionUrl()) return;
      try {
        await fetch(pushFunctionUrl(), {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: settings.key,
            Authorization: `Bearer ${settings.key}`
          },
          body: JSON.stringify({
            clubId: currentClubId,
            group: message.group,
            excludeUser: activeUser(),
            title: `Neue Mitteilung: ${message.group}`,
            body: `${message.author}: ${message.body}`,
            url: `${location.origin}${location.pathname}#messages`
          })
        });
      } catch (error) {
        console.warn("Push konnte nicht gesendet werden.", error);
      }
    }

    function render() {
      applyClubTheme();
      applyPermissions();
      renderClubSelect();
      renderLoginUsers();
      renderClubDesignForm();
      renderInstallPanel();
      renderStatus();
      renderStats();
      renderMessageGroups();
      renderPlayers();
      renderStaff();
      renderEventForm();
      renderCalendar();
      renderEvents();
      renderAllEventsList();
      renderFines();
      renderCash();
      renderFame();
      renderPolls();
      renderMessages();
      renderDashboard();
      renderNotificationBadges();
      renderPushPanel();
    }

    function applyPermissions() {
      $$(".admin-only").forEach((el) => {
        el.style.display = canManage() ? "" : "none";
      });
      $$(".superadmin-only").forEach((el) => {
        el.style.display = isSuperadmin() ? "" : "none";
      });
      $$(".cash-manage").forEach((el) => {
        el.style.display = canManageCash() ? "" : "none";
      });
      $$(".fame-award").forEach((el) => {
        el.style.display = canAwardFamePoints() ? "" : "none";
      });
      $$(".nav button").forEach((button) => {
        button.hidden = !canAccess(button.dataset.minRole);
      });
      $("#exportBtn").hidden = !canManage();

      const activeButton = $(".nav button.active:not([hidden])");
      if (!activeButton) {
        const firstAllowed = $(".nav button:not([hidden])");
        if (firstAllowed) switchView(firstAllowed.dataset.view);
      }
    }

    function renderClubSelect() {
      const options = clubs
        .map((club) => `<option value="${club.id}">${escapeHtml(club.name)}</option>`)
        .join("");
      [$("#clubSelect"), $("#loginClubSelect")].forEach((select) => {
        if (!select) return;
        select.innerHTML = options;
        select.value = currentClubId;
      });
    }

    function renderClubDesignForm() {
      const form = $("#clubDesignForm");
      if (!form) return;
      const club = currentClub();
      form.elements.name.value = club.name;
      form.elements.color.value = normalizeHexColor(club.color || "#155e3b");
      form.elements.logoUrl.value = club.logo && !club.logo.startsWith("data:") ? club.logo : "";
    }

    function renderLoginUsers() {
      const selected = loginPrefillFor().user;
      const names = [...new Set([...DEFAULT_PLAYER_NAMES, ...state.players.map((player) => player.name)])]
        .sort((a, b) => a.localeCompare(b, "de"));
      $("#loginUser").innerHTML = names
        .map((name) => `<option value="${escapeAttr(name)}">${escapeHtml(name)}</option>`)
        .join("");
      $("#loginUser").value = names.includes(selected) ? selected : "Max Reitz";
      fillSavedLoginPassword();
    }

    function renderStats() {
      const roster = rosterPlayers();
      $("#statPlayers").textContent = roster.filter((player) => isActiveToday(player)).length;
      $("#statInjured").textContent = roster.filter((player) => statusActiveToday(player, "injured")).length;
      $("#statUnavailable").textContent = roster.filter((player) => statusActiveToday(player, "unavailable")).length;
      $("#statVacation").textContent = roster.filter((player) => statusActiveToday(player, "vacation")).length;
    }

    function renderPlayers() {
      const list = $("#playerList");
      list.innerHTML = "";
      const roster = state.players.filter((player) => hasMemberRole(player, "Spieler"));
      if (!roster.length) return empty(list, "Noch keine Spieler angelegt.");
      const query = ($("#playerSearch")?.value || "").trim().toLowerCase();
      const players = roster
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name, "de"))
        .filter((player) => !query || playerSearchText(player).includes(query));
      if (!players.length) return empty(list, "Kein Spieler passt zur Suche.");
      players
        .forEach((player) => {
          list.appendChild(item(`
            <div class="item-head">
              <div class="player-summary">
                <div class="player-photo">${player.photo ? `<img src="${escapeAttr(player.photo)}" alt="${escapeAttr(player.name)}">` : escapeHtml(initials(player.name))}</div>
                <div>
                  <div class="player-title-row">
                    <p class="item-title">${escapeHtml(player.name)}</p>
                    ${renderAvailabilityBadges(player)}
                  </div>
                  <div class="meta"><span>${escapeHtml(displayPosition(player))}</span><span>${escapeHtml(memberRoleLabels(player))}</span><span>${escapeHtml(player.role || "Spieler")}</span><span>${escapeHtml(player.phone || "Keine Telefonnummer")}</span></div>
                </div>
              </div>
              <span class="chip">${escapeHtml(groupLabels(player))}</span>
            </div>
            ${renderAvailabilityLine(player)}
            ${renderPlayerCalendarStats(player)}
            ${player.notes ? `<p class="meta">${escapeHtml(player.notes)}</p>` : ""}
            ${canManage() ? renderPerformanceSummary(player) : ""}
            ${canManagePlayers() ? `
              <div class="row-actions"><button class="mini" data-open-player="${escapeAttr(player.id)}">Spieler bearbeiten</button></div>
              ${canManage() ? `<div class="row-actions">
                <button class="mini no" data-delete-player="${escapeAttr(player.id)}">Entfernen</button>
              </div>` : ""}
            ` : ""}
          `));
        });
    }

    function renderStaff() {
      const list = $("#staffList");
      if (!list) return;
      list.innerHTML = "";
      const staff = state.players
        .filter((person) => hasMemberRole(person, "Trainer") || hasMemberRole(person, "Betreuer"))
        .sort((a, b) => a.name.localeCompare(b.name, "de"));
      if (!staff.length) return empty(list, "Noch kein Staff angelegt.");
      staff.forEach((person) => {
        list.appendChild(item(`
          <div class="item-head">
            <div class="player-summary">
              <div class="player-photo">${person.photo ? `<img src="${escapeAttr(person.photo)}" alt="${escapeAttr(person.name)}">` : escapeHtml(initials(person.name))}</div>
              <div>
                <p class="item-title">${escapeHtml(person.name)}</p>
                <div class="meta"><span>${escapeHtml(memberRoleLabels(person))}</span><span>${escapeHtml(person.role || "Spieler")}</span><span>${escapeHtml(person.phone || "Keine Telefonnummer")}</span></div>
              </div>
            </div>
            <span class="chip">${escapeHtml(groupLabels(person))}</span>
          </div>
          ${person.notes ? `<p class="meta">${escapeHtml(person.notes)}</p>` : ""}
          ${canManage() ? `
            <div class="row-actions">
              <button class="mini" data-open-player="${person.id}">Person bearbeiten</button>
              <button class="mini no" data-delete-player="${person.id}">Entfernen</button>
            </div>
          ` : ""}
        `));
      });
    }

    function renderEventForm() {
      const coachSelect = $("#eventCoach");
      if (!coachSelect) return;
      const current = coachSelect.value;
      const coaches = state.players
        .filter((player) => hasMemberRole(player, "Trainer"))
        .map((player) => player.name)
        .sort((a, b) => a.localeCompare(b, "de"));
      coachSelect.innerHTML = `<option value="">Nicht zugewiesen</option>${coaches.map((name) => `<option value="${escapeAttr(name)}">${escapeHtml(name)}</option>`).join("")}`;
      coachSelect.value = coaches.includes(current) ? current : "";
    }

    function rosterPlayers() {
      return state.players.filter((player) => hasMemberRole(player, "Spieler"));
    }

    function statusActiveToday(player, field) {
      const availability = normalizeAvailability(player.availability);
      const today = isoDate(new Date());
      const item = availability[field];
      return Boolean(item?.active && dateInPeriod(today, item.from, item.to));
    }

    function isActiveToday(player) {
      return !["injured", "vacation", "unavailable"].some((field) => statusActiveToday(player, field));
    }

    function eventSupportsRsvp(event) {
      return ["Training", "Spiel"].includes(event.type);
    }

    function eventDateTime(event) {
      return new Date(`${event.date}T${event.time || "00:00"}`);
    }

    function eventDeadline(event) {
      const hours = event.type === "Spiel" ? 48 : 6;
      return new Date(eventDateTime(event).getTime() - hours * 60 * 60 * 1000);
    }

    function isLateAbsence(event) {
      return new Date() > eventDeadline(event);
    }

    function rsvpRecord(event, playerName) {
      const raw = (event.rsvps || {})[playerName];
      if (!raw) return null;
      if (typeof raw === "string") return { status: raw, updatedAt: "", fine: 0, reason: "" };
      return { status: raw.status || "yes", updatedAt: raw.updatedAt || "", fine: Number(raw.fine || 0), reason: raw.reason || "" };
    }

    function playerUnavailableForEvent(player, event) {
      const availability = normalizeAvailability(player.availability);
      return PERIOD_AVAILABILITY_FIELDS.some((field) => {
        const item = availability[field];
        return item.active && dateInPeriod(event.date, item.from, item.to);
      });
    }

    function dateInPeriod(date, from, to) {
      if (!from && !to) return true;
      return (!from || date >= from) && (!to || date <= to);
    }

    function effectiveRsvp(event, player) {
      if (!eventSupportsRsvp(event)) return "none";
      if (playerUnavailableForEvent(player, event)) return "no";
      const record = rsvpRecord(event, player.name);
      return record ? record.status : "yes";
    }

    function countRsvp(event, status) {
      return rosterPlayers().filter((player) => effectiveRsvp(event, player) === status).length;
    }

    function weekStart(dateStr = calendarDate) {
      const date = new Date(`${dateStr}T00:00`);
      const mondayOffset = (date.getDay() + 6) % 7;
      date.setDate(date.getDate() - mondayOffset);
      return date;
    }

    function currentWeekRange() {
      const start = weekStart(calendarDate);
      const end = addDays(start, 6);
      return { start: isoDate(start), end: isoDate(end), startDate: start, endDate: end };
    }

    function currentMonthRange() {
      const date = new Date(`${calendarDate}T00:00`);
      const start = new Date(date.getFullYear(), date.getMonth(), 1);
      const end = new Date(date.getFullYear(), date.getMonth() + 1, 0);
      return { start: isoDate(start), end: isoDate(end), startDate: start, endDate: end };
    }

    function currentCalendarRange() {
      return calendarMode === "month" && canManage() ? currentMonthRange() : currentWeekRange();
    }

    function weekLabel() {
      const { startDate, endDate } = currentWeekRange();
      return `${formatShortDate(isoDate(startDate))} - ${formatShortDate(isoDate(endDate))}`;
    }

    function monthLabel() {
      const date = new Date(`${calendarDate}T00:00`);
      return date.toLocaleDateString("de-DE", { month: "long", year: "numeric" });
    }

    function calendarLabel() {
      return calendarMode === "month" && canManage() ? monthLabel() : weekLabel();
    }

    function visibleCalendarEvents() {
      const { start, end } = currentCalendarRange();
      return state.events
        .filter((event) => dateInPeriod(event.date, start, end))
        .sort((a, b) => `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`));
    }

    function rsvpDetails(event) {
      const players = rosterPlayers().slice().sort((a, b) => a.name.localeCompare(b.name, "de"));
      const yes = [];
      const no = [];
      players.forEach((player) => {
        const record = rsvpRecord(event, player.name);
        const unavailable = playerUnavailableForEvent(player, event);
        const status = effectiveRsvp(event, player);
        const entry = {
          name: player.name,
          reason: record?.reason || (unavailable ? "Status: nicht verfuegbar" : ""),
          explicit: Boolean(record)
        };
        if (status === "no") no.push(entry);
        else yes.push(entry);
      });
      return { yes, no };
    }

    function renderRsvpDetails(event) {
      const details = rsvpDetails(event);
      const yesItems = details.yes.map((entry) => `<span class="attendee yes">${escapeHtml(entry.name)}${entry.explicit ? "" : " (automatisch)"}</span>`).join("");
      const noItems = details.no.map((entry) => `<span class="attendee no">${escapeHtml(entry.name)}${entry.reason ? ` - ${escapeHtml(entry.reason)}` : ""}</span>`).join("");
      return `
        <div class="attendance-panel">
          <div>
            <strong>Zusagen (${details.yes.length})</strong>
            <div class="attendee-list">${yesItems || "<span class=\"meta\">Keine Zusagen.</span>"}</div>
          </div>
          <div>
            <strong>Absagen (${details.no.length})</strong>
            <div class="attendee-list">${noItems || "<span class=\"meta\">Keine Absagen.</span>"}</div>
          </div>
        </div>
      `;
    }

    function playerCalendarStats(player) {
      const now = new Date();
      return state.events.reduce((stats, event) => {
        if (!eventSupportsRsvp(event)) return stats;
        const status = effectiveRsvp(event, player);
        const past = eventDateTime(event) <= now;
        const record = rsvpRecord(event, player.name);
        stats.fines += record?.fine || 0;
        if (status === "no") stats.absences += 1;
        if (event.type === "Training" && past && status === "yes") stats.trainings += 1;
        if (event.type === "Spiel" && status === "yes") stats.squad += 1;
        return stats;
      }, { trainings: 0, absences: 0, squad: 0, fines: 0 });
    }

    function renderPlayerCalendarStats(player) {
      const stats = playerCalendarStats(player);
      return `
        <div class="meta">
          <span>Training: ${stats.trainings}</span>
          <span>Absagen: ${stats.absences}</span>
          <span>Kader: ${stats.squad}</span>
          <span>Strafen: ${stats.fines.toFixed(2).replace(".", ",")} EUR</span>
        </div>
      `;
    }

    function renderCalendar() {
      const grid = $("#calendarGrid");
      const weekLabelEl = $("#calendarWeekLabel");
      if (!grid || !weekLabelEl) return;
      if (!canManage()) calendarMode = "week";
      weekLabelEl.textContent = calendarLabel();
      grid.innerHTML = "";
      grid.classList.toggle("month-mode", calendarMode === "month" && canManage());
      $$(".calendar-mode [data-calendar-mode]").forEach((button) => {
        button.classList.toggle("active", button.dataset.calendarMode === calendarMode);
      });
      ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"].forEach((day) => {
        const label = document.createElement("div");
        label.className = "calendar-weekday";
        label.textContent = day;
        grid.appendChild(label);
      });

      const monthRange = currentMonthRange();
      const start = calendarMode === "month" && canManage() ? weekStart(monthRange.start) : weekStart(calendarDate);
      const dayCount = calendarMode === "month" && canManage()
        ? Math.ceil(((weekStart(monthRange.end).getTime() - start.getTime()) / 86400000) + 7)
        : 7;

      for (let i = 0; i < dayCount; i += 1) {
        const date = new Date(start);
        date.setDate(start.getDate() + i);
        const dateStr = isoDate(date);
        const holiday = holidayName(dateStr);
        const dayEvents = state.events
          .filter((event) => event.date === dateStr)
          .sort((a, b) => (a.time || "").localeCompare(b.time || ""));
        const cell = document.createElement("div");
        cell.className = [
          "calendar-day",
          calendarMode === "month" && canManage() && !dateInPeriod(dateStr, monthRange.start, monthRange.end) ? "outside" : "",
          date.getDay() === 0 ? "sunday" : "",
          holiday ? "holiday" : ""
        ].filter(Boolean).join(" ");
        cell.dataset.calendarDate = dateStr;
        cell.innerHTML = `
          <div class="calendar-date"><span>${date.getDate()}</span>${holiday ? `<span class="holiday-name">${escapeHtml(holiday)}</span>` : ""}</div>
          ${dayEvents.map((event) => `<div class="calendar-event ${eventClass(event)}" draggable="${canManage()}" data-calendar-event="${escapeAttr(event.id)}">${escapeHtml(event.time || "")} ${escapeHtml(event.title)}</div>`).join("")}
        `;
        grid.appendChild(cell);
      }
    }

    function eventClass(event) {
      if (event.type === "Spiel") return "game";
      if (event.type === "Geburtstag") return "birthday";
      if (event.type === "Event" || event.type === "Sonstiges") return "other";
      return "";
    }

    function eventInfoLine(event) {
      const items = [];
      if (event.coach) items.push(`Trainer: ${event.coach}`);
      if (event.focus) items.push(`Schwerpunkt: ${event.focus}`);
      if (event.remark) items.push(`Bemerkung: ${event.remark}`);
      return items.length ? `<div class="meta">${items.map((text) => `<span>${escapeHtml(text)}</span>`).join("")}</div>` : "";
    }

    function renderEvents() {
      const list = $("#eventList");
      list.innerHTML = "";
      const events = visibleCalendarEvents();
      if (!events.length) return empty(list, calendarMode === "month" && canManage() ? "Keine Termine in diesem Monat." : "Keine Termine in dieser Woche.");
      events
        .forEach((event) => {
          const yes = countRsvp(event, "yes");
          const no = countRsvp(event, "no");
          const player = playerByName(activeUser());
          const myStatus = player && hasMemberRole(player, "Spieler") ? effectiveRsvp(event, player) : "none";
          const myRecord = player ? rsvpRecord(event, player.name) : null;
          const deadline = eventSupportsRsvp(event) ? eventDeadline(event).toLocaleString("de-DE", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" }) : "";
          const lateText = eventSupportsRsvp(event) && isLateAbsence(event) ? "Spaete Absage kostet 10 EUR." : "";
          const expanded = expandedEventId === event.id;
          const statusChip = myStatus === "no" ? `<span class="chip red">Abgesagt${myRecord?.reason ? `: ${escapeHtml(myRecord.reason)}` : ""}</span>` : `<span class="chip blue">Zugesagt</span>`;
          list.appendChild(item(`
            <div class="item-head" data-toggle-event-details="${event.id}">
              <div>
                <p class="item-title">${escapeHtml(event.title)}</p>
                <div class="meta"><span>${escapeHtml(event.type)}</span><span>${formatDate(event.date, event.time)}</span><span>${escapeHtml(event.location || "Ort offen")}</span></div>
              </div>
              ${eventSupportsRsvp(event) && player && hasMemberRole(player, "Spieler") ? statusChip : `<span class="chip">${escapeHtml(event.type)}</span>`}
            </div>
            ${event.details ? `<p class="meta">${escapeHtml(event.details)}</p>` : ""}
            ${eventInfoLine(event)}
            ${eventSupportsRsvp(event) ? `<div class="meta"><span>${yes} Zusagen</span><span>${no} Absagen</span><span>Absagefrist: ${deadline}</span>${lateText ? `<span>${lateText}</span>` : ""}</div>` : ""}
            <div class="row-actions">
              ${eventSupportsRsvp(event) && player && hasMemberRole(player, "Spieler") ? `
                <button class="mini yes" data-rsvp="${event.id}" data-status="yes" ${myStatus === "yes" ? "disabled" : ""}>Zusage</button>
                <button class="mini no" data-rsvp="${event.id}" data-status="no">Absage</button>
              ` : ""}
              ${eventSupportsRsvp(event) ? `<button class="mini" data-toggle-event-details="${event.id}">${expanded ? "Teilnehmer ausblenden" : "Teilnehmer anzeigen"}</button>` : ""}
              ${canManage() ? `<button class="mini" data-edit-event="${escapeAttr(event.id)}">Bearbeiten</button>` : ""}
              ${canManage() ? `<button class="mini no" data-delete-event="${escapeAttr(event.id)}">Loeschen</button>` : ""}
            </div>
            ${expanded ? renderRsvpDetails(event) : ""}
          `));
        });
    }

    function renderAllEventsList() {
      const list = $("#allEventsList");
      if (!list) return;
      list.innerHTML = "";
      if (!state.events.length) return empty(list, "Noch keine Termine erfasst.");
      state.events
        .slice()
        .sort((a, b) => `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`))
        .forEach((event) => list.appendChild(item(`
          <div class="item-head">
            <div>
              <p class="item-title">${escapeHtml(event.title)}</p>
              <div class="meta"><span>${escapeHtml(event.type)}</span><span>${formatDate(event.date, event.time)}</span><span>${escapeHtml(event.location || "Ort offen")}</span></div>
              ${eventInfoLine(event)}
            </div>
            <span class="chip">${countRsvp(event, "yes")} / ${countRsvp(event, "no")}</span>
          </div>
          <div class="row-actions">
            <button class="mini" data-edit-event="${escapeAttr(event.id)}">Bearbeiten</button>
            <button class="mini no" data-delete-event="${escapeAttr(event.id)}">Loeschen</button>
          </div>
        `)));
    }

    function fameEntriesForPlayer(player) {
      const now = new Date();
      const entries = [];
      state.events.forEach((event) => {
        if (!eventSupportsRsvp(event) || eventDateTime(event) > now || effectiveRsvp(event, player) !== "yes") return;
        if (event.type === "Training") {
          entries.push({
            id: `event::${event.id}::${player.name}`,
            type: "training",
            date: event.date,
            title: "Training",
            text: `${event.title}${event.location ? `, ${event.location}` : ""}`,
            points: 5
          });
        }
        if (event.type === "Spiel") {
          entries.push({
            id: `event::${event.id}::${player.name}`,
            type: "squad",
            date: event.date,
            title: "Kader",
            text: `${event.title}${event.location ? `, ${event.location}` : ""}`,
            points: 10
          });
        }
      });
      (state.hallOfFame?.selfTrainings || [])
        .filter((entry) => playerNameKey(entry.player) === playerNameKey(player.name))
        .forEach((entry) => entries.push({
          id: entry.id,
          type: "self",
          date: entry.date,
          title: "Eigenes Training",
          text: entry.note || "Training mit Bildnachweis",
          proof: entry.proof,
          points: 5
        }));
      (state.hallOfFame?.bonusPoints || [])
        .filter((entry) => playerNameKey(entry.player) === playerNameKey(player.name))
        .forEach((entry) => entries.push({
          id: entry.id,
          type: "bonus",
          date: entry.date,
          title: "Besondere Leistung",
          text: entry.reason,
          createdBy: entry.createdBy,
          points: entry.points
        }));
      return entries.sort((a, b) => `${b.date}${b.title}`.localeCompare(`${a.date}${a.title}`));
    }

    function fameRows() {
      return rosterPlayers()
        .map((player) => {
          const entries = fameEntriesForPlayer(player);
          return {
            player,
            entries,
            total: entries.reduce((sum, entry) => sum + Number(entry.points || 0), 0)
          };
        })
        .sort((a, b) => b.total - a.total || a.player.name.localeCompare(b.player.name, "de"));
    }

    function renderFameForm() {
      const selfForm = $("#selfTrainingForm");
      if (selfForm && !selfForm.elements.date.value) selfForm.elements.date.value = new Date().toISOString().slice(0, 10);
      const bonusForm = $("#bonusPointForm");
      if (!bonusForm) return;
      if (!bonusForm.elements.date.value) bonusForm.elements.date.value = new Date().toISOString().slice(0, 10);
      const current = $("#bonusPointPlayer").value;
      const players = rosterPlayers().map((player) => player.name).sort((a, b) => a.localeCompare(b, "de"));
      $("#bonusPointPlayer").innerHTML = players.map((name) => `<option value="${escapeAttr(name)}">${escapeHtml(name)}</option>`).join("");
      $("#bonusPointPlayer").value = players.includes(current) ? current : players[0] || "";
    }

    function canViewFameDetails(name) {
      return canManage() || playerNameKey(name) === playerNameKey(activeUser());
    }

    function renderFame() {
      const ranking = $("#fameRanking");
      const details = $("#fameDetails");
      if (!ranking || !details) return;
      renderFameForm();
      const rows = fameRows();
      const activeName = activeUser();
      if (!selectedFamePlayer || !rows.some((row) => playerNameKey(row.player.name) === playerNameKey(selectedFamePlayer))) {
        selectedFamePlayer = rows.some((row) => playerNameKey(row.player.name) === playerNameKey(activeName)) ? activeName : rows[0]?.player.name || "";
      }
      const leader = rows[0];
      const myRow = rows.find((row) => playerNameKey(row.player.name) === playerNameKey(activeName));
      $("#fameLeader").textContent = leader ? `${leader.player.name} (${leader.total})` : "-";
      $("#fameMyPoints").textContent = myRow ? myRow.total : 0;
      $("#fameTotalPoints").textContent = rows.reduce((sum, row) => sum + row.total, 0);

      ranking.innerHTML = "";
      if (!rows.length) empty(ranking, "Noch keine Spieler vorhanden.");
      rows.forEach((row, index) => {
        const selected = playerNameKey(row.player.name) === playerNameKey(selectedFamePlayer);
        ranking.appendChild(item(`
          <div class="item-head">
            <div>
              <p class="item-title">#${index + 1} ${escapeHtml(row.player.name)}</p>
              <div class="meta"><span>${row.entries.length} Eintraege</span>${canViewFameDetails(row.player.name) ? "<span>Details sichtbar</span>" : "<span>Details privat</span>"}</div>
            </div>
            <span class="score-badge">${row.total}</span>
          </div>
          <div class="row-actions">
            <button class="mini ${selected ? "yes" : ""}" data-fame-player="${escapeAttr(row.player.name)}">${canViewFameDetails(row.player.name) ? "Details anzeigen" : "Punkte ansehen"}</button>
          </div>
        `));
      });

      const selectedRow = rows.find((row) => playerNameKey(row.player.name) === playerNameKey(selectedFamePlayer));
      $("#fameDetailTitle").textContent = selectedRow ? `Punktedetails: ${selectedRow.player.name}` : "Punktedetails";
      details.innerHTML = "";
      if (!selectedRow) return empty(details, "Bitte einen Spieler auswaehlen.");
      if (!canViewFameDetails(selectedRow.player.name)) {
        return empty(details, "Details sind nur fuer den eigenen Namen sichtbar.");
      }
      if (!selectedRow.entries.length) return empty(details, "Noch keine Punkte vorhanden.");
      selectedRow.entries.forEach((entry) => {
        details.appendChild(item(`
          <div class="item-head">
            <div>
              <p class="item-title">${escapeHtml(entry.title)}</p>
              <div class="meta"><span>${formatShortDate(entry.date)}</span><span>${escapeHtml(entry.text || "")}</span>${entry.createdBy ? `<span>Von ${escapeHtml(entry.createdBy)}</span>` : ""}</div>
            </div>
            <span class="score-badge">${entry.points > 0 ? "+" : ""}${entry.points}</span>
          </div>
          ${entry.proof ? `<img class="proof-image" src="${escapeAttr(entry.proof)}" alt="Bildnachweis eigenes Training">` : ""}
          ${canManage() && entry.type === "self" ? `<div class="row-actions"><button class="mini no" data-delete-self-training="${escapeAttr(entry.id)}">Eigentraining entfernen</button></div>` : ""}
          ${canManage() && entry.type === "bonus" ? `<div class="row-actions"><button class="mini no" data-delete-bonus-point="${escapeAttr(entry.id)}">Sonderpunkte entfernen</button></div>` : ""}
        `));
      });
    }

    function renderFines() {
      const list = $("#fineList");
      if (!list) return;
      list.innerHTML = "";
      const rows = [];
      state.events.forEach((event) => {
        Object.entries(event.rsvps || {}).forEach(([name, value]) => {
          const record = typeof value === "string" ? { status: value, fine: 0 } : value;
          if (record.fine) rows.push({ name, event, fine: record.fine, updatedAt: record.updatedAt || "" });
        });
      });
      if (!rows.length) return empty(list, "Noch keine Strafen erfasst.");
      rows
        .sort((a, b) => `${b.event.date}${b.event.time}`.localeCompare(`${a.event.date}${a.event.time}`))
        .forEach((row) => list.appendChild(item(`
          <div class="item-head">
            <div>
              <p class="item-title">${escapeHtml(row.name)}</p>
              <div class="meta"><span>${escapeHtml(row.event.title)}</span><span>${formatDate(row.event.date, row.event.time)}</span><span>${row.updatedAt ? new Date(row.updatedAt).toLocaleString("de-DE") : ""}</span></div>
            </div>
            <span class="chip red">${Number(row.fine).toFixed(2).replace(".", ",")} EUR</span>
          </div>
        `)));
    }

    function allFineRows() {
      const manual = (state.cashFines || []).map((fine) => ({
        id: fine.id,
        source: "manual",
        player: fine.player,
        label: fine.label,
        amount: Number(fine.amount || 0),
        penalty: fine.penalty || "",
        date: fine.date,
        note: fine.note || "",
        createdBy: fine.createdBy || "",
        paid: Boolean(fine.paid),
        paidAt: fine.paidAt || ""
      }));
      const automatic = [];
      state.events.forEach((event) => {
        Object.entries(event.rsvps || {}).forEach(([name, value]) => {
          const record = typeof value === "string" ? { status: value, fine: 0 } : value;
          if (!record.fine) return;
          automatic.push({
            id: `${event.id}::${name}`,
            source: "event",
            eventId: event.id,
            player: name,
            label: `Spaete Absage: ${event.title}`,
            amount: Number(record.fine || 0),
            date: (record.updatedAt || event.date).slice(0, 10),
            note: `${event.type} am ${formatDate(event.date, event.time)}`,
            createdBy: "Kalender",
            paid: Boolean(record.paid),
            paidAt: record.paidAt || ""
          });
        });
      });
      return [...manual, ...automatic].sort((a, b) => `${b.date}${b.label}`.localeCompare(`${a.date}${a.label}`));
    }

    function renderCash() {
      if (!$("#cashTotal")) return;
      const rows = allFineRows();
      const total = rows.reduce((sum, fine) => sum + fine.amount, 0);
      const paid = rows.filter((fine) => fine.paid).reduce((sum, fine) => sum + fine.amount, 0);
      const open = total - paid;
      $("#cashTotal").textContent = formatCurrency(total);
      $("#cashPaid").textContent = formatCurrency(paid);
      $("#cashOpen").textContent = formatCurrency(open);
      renderCashForm();
      renderDonationForm();
      renderFineRows($("#cashOpenList"), rows.filter((fine) => !fine.paid), "Keine offenen Betraege.");
      renderFineRows($("#cashFineList"), rows, "Noch keine Kassenbewegungen.");
      renderFineCatalog();
    }

    function renderDonationForm() {
      const form = $("#donationForm");
      if (!form) return;
      if (!form.elements.date.value) form.elements.date.value = new Date().toISOString().slice(0, 10);
    }

    function renderCashForm() {
      const playerSelect = $("#cashFinePlayer");
      const catalogSelect = $("#cashFineCatalog");
      const amountInput = $("#cashFineAmount");
      const form = $("#cashFineForm");
      if (!playerSelect || !catalogSelect || !form) return;
      const currentPlayer = playerSelect.value;
      playerSelect.innerHTML = rosterPlayers()
        .map((player) => `<option value="${escapeAttr(player.name)}">${escapeHtml(player.name)}</option>`)
        .join("");
      if (currentPlayer) playerSelect.value = currentPlayer;
      catalogSelect.innerHTML = (state.fineCatalog || [])
        .map((fine) => `<option value="${escapeAttr(fine.id)}">${escapeHtml(fine.label)} - ${fine.penalty ? escapeHtml(fine.penalty) : `${formatCurrency(fine.amount)} EUR`}</option>`)
        .join("");
      if (!form.elements.date.value) form.elements.date.value = new Date().toISOString().slice(0, 10);
      const selected = fineCatalogById(catalogSelect.value) || state.fineCatalog[0];
      if (!amountInput.value) amountInput.value = selected.amount;
    }

    function renderFineRows(container, rows, emptyText) {
      if (!container) return;
      container.innerHTML = "";
      if (!rows.length) return empty(container, emptyText);
      rows.forEach((fine) => {
        container.appendChild(item(`
          <div class="item-head">
            <div>
              <p class="item-title">${escapeHtml(fine.player)}</p>
              <div class="meta"><span>${escapeHtml(fine.label)}</span><span>${formatShortDate(fine.date)}</span><span>${escapeHtml(fine.createdBy || "")}</span>${fine.note ? `<span>${escapeHtml(fine.note)}</span>` : ""}</div>
            </div>
            <div class="row-actions">
              ${fine.paid ? `<span class="paid-check" title="Bezahlt bestaetigt">&#10003;</span>` : ""}
              <span class="chip ${fine.paid ? "blue" : "red"}">${fine.penalty ? escapeHtml(fine.penalty) : `${formatCurrency(fine.amount)} EUR`}</span>
            </div>
          </div>
          ${canManage() ? `<div class="row-actions">
            <button class="mini ${fine.paid ? "" : "yes"}" data-toggle-fine="${escapeAttr(fine.id)}">${fine.paid ? "Als offen markieren" : "Bezahlt bestaetigen"}</button>
          </div>` : ""}
        `));
      });
    }

    function renderFineCatalog() {
      const list = $("#fineCatalogList");
      if (!list) return;
      list.innerHTML = "";
      (state.fineCatalog || []).forEach((fine) => {
        list.appendChild(item(`
          <div class="item-head">
            <div>
              <p class="item-title">${escapeHtml(fine.label)}</p>
              <div class="meta">${fine.description ? `<span>${escapeHtml(fine.description)}</span>` : ""}</div>
            </div>
            <span class="chip">${fine.penalty ? escapeHtml(fine.penalty) : `${formatCurrency(fine.amount)} EUR`}</span>
          </div>
          <div class="row-actions">
            <button class="mini" data-edit-catalog-fine="${escapeAttr(fine.id)}">Bearbeiten</button>
          </div>
        `));
      });
    }

    function fineCatalogById(id) {
      return (state.fineCatalog || []).find((fine) => fine.id === id);
    }

    function toggleFinePaid(id) {
      if (id.includes("::")) {
        const [eventId, name] = id.split("::");
        const event = state.events.find((item) => item.id === eventId);
        const record = event ? rsvpRecord(event, name) : null;
        if (!event || !record) return;
        const paid = !record.paid;
        event.rsvps[name] = {
          ...record,
          paid,
          paidAt: paid ? new Date().toISOString() : ""
        };
        return;
      }
      const fine = (state.cashFines || []).find((item) => item.id === id);
      if (!fine) return;
      fine.paid = !fine.paid;
      fine.paidAt = fine.paid ? new Date().toISOString() : "";
    }

    function formatCurrency(value) {
      return Number(value || 0).toFixed(2).replace(".", ",");
    }

    function rsvpLabel(status) {
      return { yes: "zugesagt", no: "abgesagt", none: "-" }[status] || status;
    }

    function isoDate(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    }

    function addDays(date, days) {
      const copy = new Date(date);
      copy.setDate(copy.getDate() + days);
      return copy;
    }

    function addMonths(date, months) {
      const copy = new Date(date);
      copy.setMonth(copy.getMonth() + months);
      return copy;
    }

    function holidayName(dateStr) {
      const date = new Date(`${dateStr}T00:00`);
      const year = date.getFullYear();
      const fixed = {
        [`${year}-01-01`]: "Neujahr",
        [`${year}-05-01`]: "Tag der Arbeit",
        [`${year}-10-03`]: "Tag der Einheit",
        [`${year}-12-25`]: "1. Weihnachtstag",
        [`${year}-12-26`]: "2. Weihnachtstag"
      };
      if (fixed[dateStr]) return fixed[dateStr];
      const easter = easterDate(year);
      const movable = new Map([
        [isoDate(addDays(easter, -2)), "Karfreitag"],
        [isoDate(addDays(easter, 1)), "Ostermontag"],
        [isoDate(addDays(easter, 39)), "Himmelfahrt"],
        [isoDate(addDays(easter, 50)), "Pfingstmontag"]
      ]);
      return movable.get(dateStr) || "";
    }

    function easterDate(year) {
      const a = year % 19;
      const b = Math.floor(year / 100);
      const c = year % 100;
      const d = Math.floor(b / 4);
      const e = b % 4;
      const f = Math.floor((b + 8) / 25);
      const g = Math.floor((b - f + 1) / 3);
      const h = (19 * a + b - d - g + 15) % 30;
      const i = Math.floor(c / 4);
      const k = c % 4;
      const l = (32 + 2 * e + 2 * i - h - k) % 7;
      const m = Math.floor((a + 11 * h + 22 * l) / 451);
      const month = Math.floor((h + l - 7 * m + 114) / 31);
      const day = ((h + l - 7 * m + 114) % 31) + 1;
      return new Date(year, month - 1, day);
    }

    function renderPolls() {
      const list = $("#pollList");
      list.innerHTML = "";
      if (!state.polls.length) return empty(list, "Noch keine Abstimmungen erstellt.");
      state.polls.forEach((poll) => {
        const total = Object.keys(poll.votes || {}).length || 1;
        const options = poll.options.map((option) => {
          const votes = Object.values(poll.votes || {}).filter((vote) => vote === option).length;
          const percent = Math.round((votes / total) * 100);
          return `
            <div>
              <div class="meta"><strong>${escapeHtml(option)}</strong><span>${votes} Stimmen</span></div>
              <div class="progress"><span style="width:${percent}%"></span></div>
              <button class="mini" data-vote="${poll.id}" data-option="${escapeAttr(option)}">Waehlen</button>
            </div>
          `;
        }).join("");
        list.appendChild(item(`
          <div class="item-head">
            <div>
              <p class="item-title">${escapeHtml(poll.question)}</p>
              <div class="meta"><span>${escapeHtml(poll.group)}</span><span>Ende: ${escapeHtml(poll.endsAt || "offen")}</span></div>
            </div>
            ${canManage() ? `<button class="mini no" data-delete-poll="${poll.id}">Loeschen</button>` : ""}
          </div>
          <div class="grid">${options}</div>
        `));
      });
    }

    function renderMessages() {
      const allowedGroups = allowedMessageGroups();
      const group = allowedGroups.includes($("#messageGroup").value) ? $("#messageGroup").value : allowedGroups[0];
      $("#messageGroup").value = group;
      const feed = $("#messageFeed");
      feed.innerHTML = "";
      const messages = state.messages.filter((message) => message.group === group && allowedGroups.includes(message.group));
      if (!messages.length) {
        const box = document.createElement("div");
        box.className = "empty";
        box.textContent = "Noch keine Mitteilungen in dieser Gruppe.";
        feed.appendChild(box);
        return;
      }
      messages
        .slice()
        .sort((a, b) => a.createdAt.localeCompare(b.createdAt))
        .forEach((message) => {
          const bubble = document.createElement("article");
          bubble.className = "bubble" + (message.author === activeUser() ? " mine" : "");
          bubble.innerHTML = `<strong>${escapeHtml(message.author)} <span class="meta">${new Date(message.createdAt).toLocaleString("de-DE")}</span></strong><p>${escapeHtml(message.body)}</p>`;
          feed.appendChild(bubble);
        });
      feed.scrollTop = feed.scrollHeight;
    }

    function renderDashboard() {
      const nextEvents = $("#nextEvents");
      nextEvents.innerHTML = "";
      const upcoming = state.events
        .filter((event) => new Date(event.date + "T" + event.time) >= new Date())
        .sort((a, b) => `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`))
        .slice(0, 4);
      if (!upcoming.length) empty(nextEvents, "Keine anstehenden Termine.");
      upcoming.forEach((event) => nextEvents.appendChild(item(`
        <div class="item-head">
          <div>
            <p class="item-title">${escapeHtml(event.title)}</p>
            <div class="meta"><span>${formatDate(event.date, event.time)}</span><span>${escapeHtml(event.location || "Ort offen")}</span></div>
          </div>
          <span class="chip">${countRsvp(event, "yes")} dabei</span>
        </div>
      `)));

      const latest = $("#latestMessages");
      latest.innerHTML = "";
      const allowedGroups = allowedMessageGroups();
      const messages = state.messages
        .filter((message) => allowedGroups.includes(message.group))
        .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
        .slice(0, 5);
      if (!messages.length) empty(latest, "Noch keine Mitteilungen.");
      messages.forEach((message) => latest.appendChild(item(`
        <div class="item-head">
          <div>
            <p class="item-title">${escapeHtml(message.author)}</p>
            <div class="meta"><span>${escapeHtml(message.group)}</span><span>${new Date(message.createdAt).toLocaleString("de-DE")}</span></div>
          </div>
        </div>
        <p class="meta">${escapeHtml(message.body)}</p>
      `)));
    }

    function item(html) {
      const el = document.createElement("article");
      el.className = "item";
      el.innerHTML = html;
      return el;
    }

    function empty(container, text) {
      const el = document.createElement("div");
      el.className = "empty";
      el.textContent = text;
      container.appendChild(el);
    }

    function formValues(form) {
      return Object.fromEntries(new FormData(form).entries());
    }

    function escapeHtml(value) {
      return String(value ?? "").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
    }

    function escapeAttr(value) {
      return escapeHtml(value).replace(/"/g, "&quot;");
    }

    function optionList(options, selected) {
      return options
        .map((option) => `<option ${option === selected ? "selected" : ""}>${escapeHtml(option)}</option>`)
        .join("");
    }

    function positionOptions(selected) {
      return optionList(["Tor", "Abwehr", "Mittelfeld", "Sturm", "Trainer", "Betreuer"], selected);
    }

    function groupOptions(selected) {
      return optionList(["Mannschaft", "Mannschaftsrat", "Kasse", "Trainer", "Betreuer"], selected);
    }

    function allowedMessageGroups() {
      if (canManage()) return TEAM_GROUPS;
      const person = playerByName(activeUser());
      return person ? normalizeGroups(person) : ["Mannschaft"];
    }

    function renderMessageGroups() {
      const select = $("#messageGroup");
      const selected = select.value;
      const groups = allowedMessageGroups();
      select.innerHTML = groups
        .map((group) => `<option ${group === selected ? "selected" : ""}>${escapeHtml(group)}</option>`)
        .join("");
      if (!groups.includes(select.value)) select.value = groups[0];
    }

    function groupEditor(player) {
      const groups = normalizeGroups(player);
      return TEAM_GROUPS.map((group) => `
        <label class="check-row">
          <input type="checkbox" name="group${group}" ${groups.includes(group) ? "checked" : ""}>
          ${escapeHtml(group)}
        </label>
      `).join("");
    }

    function groupsFromValues(values) {
      const groups = TEAM_GROUPS.filter((group) => values[`group${group}`] === "on");
      return groups.length ? groups : ["Mannschaft"];
    }

    function roleOptions(selected) {
      return optionList(["Spieler", "Admin", "Superadmin"], selected);
    }

    function memberRoleEditor(player) {
      const roles = normalizeMemberRoles(player);
      return MEMBER_FUNCTIONS.map((role) => `
        <label class="check-row">
          <input type="checkbox" name="memberRole${role}" ${roles.includes(role) ? "checked" : ""}>
          ${escapeHtml(role)}
        </label>
      `).join("");
    }

    function memberRolesFromValues(values) {
      const roles = MEMBER_FUNCTIONS.filter((role) => values[`memberRole${role}`] === "on");
      return roles.length ? roles : ["Spieler"];
    }

    function gradeOptions(selected) {
      return optionList(["", "1", "2", "3", "4", "5", "6"], String(selected || ""));
    }

    function activeAvailabilityEntries(player) {
      const availability = normalizeAvailability(player.availability);
      return AVAILABILITY_FIELDS
        .map((field) => ({ field, ...availability[field] }))
        .filter((entry) => entry.active);
    }

    function availabilityText(entry) {
      const label = AVAILABILITY_LABELS[entry.field];
      if (PERIOD_AVAILABILITY_FIELDS.includes(entry.field) && (entry.from || entry.to)) {
        return `${label} ${formatPeriod(entry.from, entry.to)}`;
      }
      return label;
    }

    function formatPeriod(from, to) {
      if (from && to) return `${formatShortDate(from)} bis ${formatShortDate(to)}`;
      if (from) return `ab ${formatShortDate(from)}`;
      if (to) return `bis ${formatShortDate(to)}`;
      return "";
    }

    function formatShortDate(value) {
      if (!value) return "";
      const date = new Date(`${value}T00:00`);
      return date.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "2-digit" });
    }

    function renderAvailabilityBadges(player) {
      const entries = activeAvailabilityEntries(player);
      if (!entries.length) return "";
      return `<span class="status-badges">${entries.map((entry) => `
        <span class="status-badge ${entry.field}" title="${escapeAttr(availabilityText(entry))}" aria-label="${escapeAttr(availabilityText(entry))}">${escapeHtml(AVAILABILITY_SYMBOLS[entry.field])}</span>
      `).join("")}</span>`;
    }

    function renderAvailabilityLine(player) {
      const entries = activeAvailabilityEntries(player);
      if (!entries.length) return "";
      return `<div class="meta status-line">${entries.map((entry) => `<span>${escapeHtml(availabilityText(entry))}</span>`).join("")}</div>`;
    }

    function playerSearchText(player) {
      const availability = activeAvailabilityEntries(player).map(availabilityText).join(" ");
      return [
        player.name,
        displayPosition(player),
        player.role,
        memberRoleLabels(player),
        groupLabels(player),
        player.phone,
        player.notes,
        availability
      ].join(" ").toLowerCase();
    }

    function availabilityEditor(player) {
      const availability = normalizeAvailability(player.availability);
      return AVAILABILITY_FIELDS.map((field) => {
        const item = availability[field];
        const period = PERIOD_AVAILABILITY_FIELDS.includes(field) ? `
          <div class="period">
            <label>Von</label>
            <input type="date" name="${field}From" value="${escapeAttr(item.from || "")}">
            <label>Bis</label>
            <input type="date" name="${field}To" value="${escapeAttr(item.to || "")}">
          </div>
        ` : "";
        return `
          <div class="availability-card">
            <label class="check-row">
              <input type="checkbox" name="${field}Active" ${item.active ? "checked" : ""}>
              ${escapeHtml(AVAILABILITY_LABELS[field])}
            </label>
            ${period}
          </div>
        `;
      }).join("");
    }

    function availabilityFromValues(values) {
      return Object.fromEntries(AVAILABILITY_FIELDS.map((field) => [
        field,
        {
          active: values[`${field}Active`] === "on",
          from: PERIOD_AVAILABILITY_FIELDS.includes(field) ? values[`${field}From`] || "" : "",
          to: PERIOD_AVAILABILITY_FIELDS.includes(field) ? values[`${field}To`] || "" : ""
        }
      ]));
    }

    function renderPerformanceSummary(player) {
      const performance = { ...defaultPerformance(), ...(player.performance || {}) };
      const gradeHtml = GRADE_FIELDS
        .map((field) => `
          <div class="performance-item">
            <strong>${PERFORMANCE_LABELS[field]}</strong>
            <span>${escapeHtml(performance[field] || "-")}</span>
          </div>
        `)
        .join("");
      const textRows = [
        ["Alternativpositionen", (player.alternatePositions || []).join(", ") || "-"],
        ["Staerken", performance.strengths || "-"],
        ["Schwaechen", performance.weaknesses || "-"],
        ["Gespraeche", performance.talks || "-"]
      ].map(([label, value]) => `<div class="meta"><strong>${label}:</strong><span>${escapeHtml(value)}</span></div>`).join("");

      return `
        <details>
          <summary class="mini">Leistungsdaten</summary>
          <div class="performance-grid" style="margin-top: 10px;">${gradeHtml}</div>
          <div class="grid" style="margin-top: 10px;">${textRows}</div>
        </details>
      `;
    }

    function openPlayerModal(playerId) {
      const player = state.players.find((item) => item.id === playerId);
      if (!player || !canManagePlayers()) return;
      const isRosterPlayer = hasMemberRole(player, "Spieler");
      const fullAccess = canManage();
      $("#playerModalTitle").textContent = `${player.name} bearbeiten`;
      $("#playerEditForm").innerHTML = `
        <input type="hidden" name="id" value="${escapeAttr(player.id)}">
        <div class="field"><label>Name</label><input name="name" value="${escapeAttr(player.name)}" required></div>
        ${isRosterPlayer ? `<div class="field"><label>Position</label><select name="position">${positionOptions(player.position)}</select></div>` : ""}
        <div class="field"><label>Telefon</label><input name="phone" value="${escapeAttr(player.phone || "")}" inputmode="tel"></div>
        ${fullAccess ? `<div class="field"><label>Berechtigung</label><select name="role">${roleOptions(player.role || "Spieler")}</select></div>` : ""}
        <div class="field full"><label>Gruppen</label><div class="inline-checks">${groupEditor(player)}</div></div>
        ${fullAccess ? `<div class="field full"><label>Funktion</label><div class="inline-checks">${memberRoleEditor(player)}</div></div>` : ""}
        ${fullAccess ? `<div class="field"><label>Passwort</label><input name="password" type="text" value="${escapeAttr(player.password || DEFAULT_PASSWORD)}" autocomplete="off"></div>` : ""}
        ${fullAccess ? `<div class="field"><label>Aktion</label><button class="mini" id="generatePlayerPasswordBtn" type="button">Temp-Passwort erzeugen</button></div>` : ""}
        <div class="field"><label>Spielerbild</label><input type="file" name="photoFile" accept="image/*"></div>
        <div class="field full"><label>Bild als URL</label><input name="photo" value="${escapeAttr(player.photo && !player.photo.startsWith("data:") ? player.photo : "")}" placeholder="https://..."></div>
        <div class="field full"><label>Notizen</label><textarea name="notes">${escapeHtml(player.notes || "")}</textarea></div>
        <div class="field full">
          <label>Status</label>
          <div class="availability-grid">${availabilityEditor(player)}</div>
        </div>
        ${isRosterPlayer && fullAccess ? `<details class="form-details field full">
          <summary>Leistungsdaten</summary>
          <div class="form-grid">
            <div class="field full"><label>Alternativpositionen</label><input name="alternatePositions" value="${escapeAttr((player.alternatePositions || []).join(", "))}" placeholder="z.B. Abwehr, Sturm"></div>
            ${GRADE_FIELDS.map((field) => `
              <div class="field"><label>${PERFORMANCE_LABELS[field]}</label><select name="${field}">${gradeOptions(player.performance?.[field])}</select></div>
            `).join("")}
            <div class="field full"><label>Staerken</label><textarea name="strengths">${escapeHtml(player.performance?.strengths || "")}</textarea></div>
            <div class="field full"><label>Schwaechen</label><textarea name="weaknesses">${escapeHtml(player.performance?.weaknesses || "")}</textarea></div>
            <div class="field full"><label>Gespraeche</label><textarea name="talks">${escapeHtml(player.performance?.talks || "")}</textarea></div>
          </div>
        </details>` : ""}
        <div class="field"><button class="btn-secondary" id="clearPlayerPhotoBtn" type="button">Bild entfernen</button></div>
        <div class="field"><button class="btn-primary" type="submit">Speichern</button></div>
      `;
      $("#playerModal").classList.add("open");
      $("#playerModal").setAttribute("aria-hidden", "false");
    }

    function closePlayerModal() {
      $("#playerModal").classList.remove("open");
      $("#playerModal").setAttribute("aria-hidden", "true");
      $("#playerEditForm").innerHTML = "";
    }

    function readFileAsDataUrl(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(file);
      });
    }

    function createEventsFromForm(values) {
      const repeat = values.repeat || "";
      const repeatUntil = values.repeatUntil || values.date;
      const repeatGroup = repeat ? crypto.randomUUID() : "";
      const createdAt = new Date().toISOString();
      const dates = [];
      let cursor = new Date(`${values.date}T00:00`);
      const end = new Date(`${repeatUntil}T00:00`) < cursor ? new Date(cursor) : new Date(`${repeatUntil}T00:00`);
      while (cursor <= end && dates.length < 80) {
        dates.push(isoDate(cursor));
        if (!repeat) break;
        if (repeat === "weekly") cursor = addDays(cursor, 7);
        if (repeat === "biweekly") cursor = addDays(cursor, 14);
        if (repeat === "monthly") cursor = addMonths(cursor, 1);
      }
      return dates.map((date) => normalizeEvent({
        id: crypto.randomUUID(),
        type: values.type,
        title: values.title,
        date,
        time: values.time,
        location: values.location,
        details: values.details,
        coach: values.coach,
        focus: values.trainingFocus,
        remark: values.remark,
        repeat,
        repeatGroup,
        createdAt,
        rsvps: {}
      }));
    }

    function updateEventFormState() {
      const form = $("#eventForm");
      if (!form) return;
      const editing = Boolean(form.elements.namedItem("eventId").value);
      $("#eventSubmitBtn").textContent = editing ? "Termin aktualisieren" : "Termin speichern";
      $("#cancelEventEditBtn").hidden = !editing;
      form.elements.repeat.disabled = editing;
      form.elements.repeatUntil.disabled = editing;
    }

    function resetEventForm() {
      const form = $("#eventForm");
      if (!form) return;
      form.reset();
      form.elements.namedItem("eventId").value = "";
      updateEventFormState();
      renderEventForm();
    }

    function editEvent(eventId) {
      const eventItem = state.events.find((item) => item.id === eventId);
      const form = $("#eventForm");
      if (!eventItem || !form || !canManage()) return;
      renderEventForm();
      form.elements.namedItem("eventId").value = eventItem.id;
      form.elements.type.value = eventItem.type;
      form.elements.title.value = eventItem.title;
      form.elements.date.value = eventItem.date;
      form.elements.time.value = eventItem.time;
      form.elements.repeat.value = "";
      form.elements.repeatUntil.value = "";
      form.elements.location.value = eventItem.location || "";
      form.elements.coach.value = eventItem.coach || "";
      form.elements.namedItem("trainingFocus").value = eventItem.focus || "";
      form.elements.details.value = eventItem.details || "";
      form.elements.remark.value = eventItem.remark || "";
      updateEventFormState();
      form.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function csvValue(value) {
      return `"${String(value || "").replace(/"/g, '""')}"`;
    }

    function exportEventsCsv() {
      const rows = [
        ["Typ", "Titel", "Datum", "Uhrzeit", "Ort", "Trainer", "Schwerpunkt", "Bemerkung", "Details", "Zusagen", "Absagen"],
        ...state.events
          .slice()
          .sort((a, b) => `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`))
          .map((event) => [
            event.type,
            event.title,
            event.date,
            event.time,
            event.location,
            event.coach,
            event.focus,
            event.remark,
            event.details,
            countRsvp(event, "yes"),
            countRsvp(event, "no")
          ])
      ];
      const blob = new Blob([rows.map((row) => row.map(csvValue).join(";")).join("\n")], { type: "text/csv;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "soccer-dtr-termine.csv";
      link.click();
      URL.revokeObjectURL(url);
    }

    function switchView(viewName) {
      const button = $(`.nav button[data-view="${viewName}"]`);
      if (!button || button.hidden || !canAccess(button.dataset.minRole)) return;
      $$(".nav button").forEach((nav) => nav.classList.remove("active"));
      $$(".view").forEach((view) => view.classList.remove("active"));
      button.classList.add("active");
      $("#" + viewName).classList.add("active");
      $("#viewTitle").textContent = titles[viewName][0];
      $("#viewSubtitle").textContent = titles[viewName][1];
      if (viewName === "events" || viewName === "messages") {
        markSeen(viewName);
        renderNotificationBadges();
      }
    }

    setupNavLabels();

    $$(".nav button").forEach((button) => {
      button.addEventListener("click", () => switchView(button.dataset.view));
    });

    $("#playerForm").addEventListener("submit", (event) => {
      event.preventDefault();
      if (!canManage()) return;
      const values = formValues(event.currentTarget);
      if (hasPlayerName(values.name)) {
        setStatus(`Spieler "${values.name.trim()}" existiert bereits.`);
        return;
      }
      const groups = groupsFromValues(values);
      const memberRoles = memberRolesFromValues(values);
      // Reine Trainer/Betreuer haben keine Position
      const isPlayer = memberRoles.includes("Spieler");
      state.players.push({
        id: crypto.randomUUID(),
        name: values.name,
        position: isPlayer ? values.position : "",
        phone: values.phone,
        role: values.role,
        group: groups[0],
        groups,
        notes: values.notes,
        memberRoles,
        password: DEFAULT_PASSWORD,
        photo: "",
        alternatePositions: [],
        availability: defaultAvailability(),
        performance: defaultPerformance()
      });
      event.currentTarget.reset();
      saveState();
    });

    $("#eventForm").addEventListener("submit", (event) => {
      event.preventDefault();
      if (!canManage()) return;
      const values = formValues(event.currentTarget);
      if (values.eventId) {
        const existing = state.events.find((item) => item.id === values.eventId);
        if (!existing) return;
        Object.assign(existing, normalizeEvent({
          ...existing,
          type: values.type,
          title: values.title,
          date: values.date,
          time: values.time,
          location: values.location,
          details: values.details,
          coach: values.coach,
          focus: values.trainingFocus,
          remark: values.remark
        }));
      } else {
        state.events.push(...createEventsFromForm(values));
      }
      resetEventForm();
      saveState();
    });

    $("#pollForm").addEventListener("submit", (event) => {
      event.preventDefault();
      if (!canManage()) return;
      const values = formValues(event.currentTarget);
      state.polls.push({
        id: crypto.randomUUID(),
        question: values.question,
        group: values.group,
        endsAt: values.endsAt,
        options: values.options.split("\n").map((line) => line.trim()).filter(Boolean),
        votes: {}
      });
      event.currentTarget.reset();
      event.currentTarget.elements.options.value = "Ja\nNein";
      saveState();
    });

    $("#messageForm").addEventListener("submit", (event) => {
      event.preventDefault();
      const values = formValues(event.currentTarget);
      const groups = allowedMessageGroups();
      const group = groups.includes($("#messageGroup").value) ? $("#messageGroup").value : groups[0];
      const message = {
        id: crypto.randomUUID(),
        group,
        author: activeUser(),
        body: values.body,
        createdAt: new Date().toISOString()
      };
      state.messages.push(message);
      event.currentTarget.reset();
      saveState();
      sendPushForMessage(message);
    });

    $("#cashFineCatalog").addEventListener("change", () => {
      const fine = fineCatalogById($("#cashFineCatalog").value);
      if (!fine) return;
      $("#cashFineAmount").value = fine.amount;
    });

    $("#cashFineForm").addEventListener("submit", (event) => {
      event.preventDefault();
      if (!canManageCash()) return;
      const values = formValues(event.currentTarget);
      const catalog = fineCatalogById(values.catalog) || state.fineCatalog[0];
      state.cashFines = state.cashFines || [];
      state.cashFines.push(normalizeCashFine({
        id: crypto.randomUUID(),
        player: values.player,
        label: catalog.label,
        amount: values.amount,
        penalty: catalog.penalty,
        date: values.date,
        note: values.note || catalog.description,
        createdBy: activeUser(),
        createdAt: new Date().toISOString(),
        paid: false
      }));
      event.currentTarget.reset();
      saveState();
    });

    $("#donationForm").addEventListener("submit", (event) => {
      event.preventDefault();
      const values = formValues(event.currentTarget);
      const amount = Number(values.amount || 0);
      if (amount <= 0) return;
      state.cashFines = state.cashFines || [];
      state.cashFines.push(normalizeCashFine({
        id: crypto.randomUUID(),
        player: activeUser(),
        label: "Spende",
        amount,
        penalty: "",
        date: values.date || new Date().toISOString().slice(0, 10),
        note: values.note,
        createdBy: activeUser(),
        createdAt: new Date().toISOString(),
        paid: true,
        paidAt: new Date().toISOString()
      }));
      event.currentTarget.reset();
      saveState();
    });

    $("#selfTrainingForm").addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      const values = formValues(form);
      const file = form.elements.proofFile.files[0];
      if (!file) {
        window.alert("Bitte ein Bild als Nachweis hochladen.");
        return;
      }
      state.hallOfFame = normalizeHallOfFame(state.hallOfFame);
      state.hallOfFame.selfTrainings.push(normalizeSelfTraining({
        id: crypto.randomUUID(),
        player: activeUser(),
        date: values.date,
        note: values.note,
        proof: await readFileAsDataUrl(file),
        createdBy: activeUser(),
        createdAt: new Date().toISOString()
      }));
      form.reset();
      saveState();
    });

    $("#bonusPointForm").addEventListener("submit", (event) => {
      event.preventDefault();
      if (!canAwardFamePoints()) return;
      const values = formValues(event.currentTarget);
      state.hallOfFame = normalizeHallOfFame(state.hallOfFame);
      state.hallOfFame.bonusPoints.push(normalizeBonusPoint({
        id: crypto.randomUUID(),
        player: values.player,
        points: values.points,
        reason: values.reason,
        date: values.date,
        createdBy: activeUser(),
        createdAt: new Date().toISOString()
      }));
      event.currentTarget.reset();
      saveState();
    });

    $("#fineCatalogForm").addEventListener("submit", (event) => {
      event.preventDefault();
      if (!canManage()) return;
      const values = formValues(event.currentTarget);
      const fine = values.id ? fineCatalogById(values.id) : null;
      const payload = normalizeFineCatalogItem({
        id: values.id || crypto.randomUUID(),
        label: values.label,
        description: values.description,
        amount: values.amount,
        penalty: values.penalty
      });
      if (fine) {
        Object.assign(fine, payload);
      } else {
        state.fineCatalog.push(payload);
      }
      event.currentTarget.reset();
      saveState();
    });

    $("#newCatalogFineBtn").addEventListener("click", () => {
      $("#fineCatalogForm").reset();
      $("#fineCatalogForm").elements.id.value = "";
    });

    $("#settingsForm").addEventListener("submit", (event) => {
      event.preventDefault();
      if (!isSuperadmin()) return;
      settings = formValues(event.currentTarget);
      saveSettings();
      setStatus("Supabase-Konfiguration gespeichert.");
      syncWithSupabase();
    });

    $("#clubDesignForm").addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!canManage()) return;
      const values = formValues(event.currentTarget);
      const club = currentClub();
      club.name = values.name.trim() || club.name;
      club.color = normalizeHexColor(values.color);
      const file = $("#clubLogoFile").files[0];
      if (file) {
        club.logo = await readFileAsDataUrl(file);
        $("#clubLogoFile").value = "";
      } else if (values.logoUrl.trim()) {
        club.logo = values.logoUrl.trim();
      }
      touchClub(club);
      saveClubs();
      render();
    });

    $("#clearClubLogoBtn").addEventListener("click", () => {
      if (!canManage()) return;
      currentClub().logo = "";
      touchClub(currentClub());
      $("#clubLogoFile").value = "";
      saveClubs();
      render();
    });

    $("#closePlayerModalBtn").addEventListener("click", closePlayerModal);
    $("#playerModal").addEventListener("click", (event) => {
      if (event.target === $("#playerModal")) closePlayerModal();
    });

    $("#playerEditForm").addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const player = state.players.find((item) => item.id === $("#playerEditForm").elements.id.value);
      if (!player || !canManage()) return;
      if (target.id === "clearPlayerPhotoBtn") {
        player.photo = "";
        $("#playerEditForm").elements.photo.value = "";
        saveState();
        openPlayerModal(player.id);
      }
      if (target.id === "generatePlayerPasswordBtn") {
        const password = generateTempPassword();
        $("#playerEditForm").elements.password.value = password;
        setStatus(`Temp-Passwort fuer ${player.name}: ${password}`);
        window.alert(`Temp-Passwort fuer ${player.name}: ${password}`);
      }
    });

    $("#playerEditForm").addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!canManagePlayers()) return;
      const form = event.currentTarget;
      const values = formValues(form);
      const player = state.players.find((item) => item.id === values.id);
      if (!player) return;
      const nextName = values.name.trim() || player.name;
      if (hasPlayerName(nextName, player.id)) {
        setStatus(`Spieler "${nextName}" existiert bereits.`);
        return;
      }

      player.name = nextName;
      player.phone = values.phone.trim();
      player.groups = groupsFromValues(values);
      player.group = player.groups[0];
      // Berechtigungsrolle und Mitgliedsrollen darf nur Admin/Superadmin aendern
      if (canManage()) {
        player.role = values.role;
        player.memberRoles = memberRolesFromValues(values);
      }
      // Position nur fuer Spieler; bei reinen Trainern/Betreuern leeren
      // (nach memberRoles-Update, damit Rollenwechsel sofort greift)
      player.position = hasMemberRole(player, "Spieler") ? values.position : "";
      player.notes = values.notes.trim();
      // Passwort darf nur Admin/Superadmin aendern
      if (canManage()) {
        player.password = values.password.trim() || DEFAULT_PASSWORD;
      }
      player.availability = availabilityFromValues(values);
      player.alternatePositions = hasMemberRole(player, "Spieler")
        ? (values.alternatePositions || "").split(",").map((value) => value.trim()).filter(Boolean)
        : [];
      // Performance-/Bewertungsdaten nur fuer Admin/Superadmin
      if (canManage()) {
        player.performance = {
          ...defaultPerformance(),
          ...Object.fromEntries(GRADE_FIELDS.map((field) => [field, values[field] || ""])),
          strengths: (values.strengths || "").trim(),
          weaknesses: (values.weaknesses || "").trim(),
          talks: (values.talks || "").trim()
        };
      }

      const photoFile = form.elements.photoFile.files[0];
      if (photoFile) {
        player.photo = await readFileAsDataUrl(photoFile);
      } else if (values.photo.trim()) {
        player.photo = values.photo.trim();
      }

      if (player.name.trim().toLowerCase() === activeUser().trim().toLowerCase()) {
        $("#currentUser").value = player.name;
        localStorage.setItem(LOGIN_USER_KEY, player.name);
        saveLoginPrefill(currentClubId, player.name, player.password);
        updateRoleFromUser();
      }

      setStatus(`Spieler ${player.name} wurde gespeichert.`);
      closePlayerModal();
      saveState();
    });

    document.body.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;

      const playerId = target.dataset.deletePlayer;
      const eventId = target.dataset.deleteEvent;
      const pollId = target.dataset.deletePoll;
      const rsvpId = target.dataset.rsvp;
      const voteId = target.dataset.vote;
      const openPlayerId = target.dataset.openPlayer;
      const toggleFineId = target.dataset.toggleFine;
      const editCatalogFineId = target.dataset.editCatalogFine;
      const editEventId = target.dataset.editEvent;
      const famePlayer = target.dataset.famePlayer;
      const deleteSelfTrainingId = target.dataset.deleteSelfTraining;
      const deleteBonusPointId = target.dataset.deleteBonusPoint;
      const toggleEventDetailsId = target.closest("[data-toggle-event-details]")?.dataset.toggleEventDetails;
      const calendarEventId = target.closest("[data-calendar-event]")?.dataset.calendarEvent;

      if (toggleEventDetailsId) {
        expandedEventId = expandedEventId === toggleEventDetailsId ? "" : toggleEventDetailsId;
        renderEvents();
        return;
      }
      if (calendarEventId) {
        expandedEventId = calendarEventId;
        renderEvents();
        $("#eventList").scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      if (openPlayerId && canManagePlayers()) openPlayerModal(openPlayerId);
      if (famePlayer) {
        selectedFamePlayer = famePlayer;
        renderFame();
        return;
      }
      if (editEventId && canManage()) {
        editEvent(editEventId);
        return;
      }
      if (playerId && canManage()) state.players = state.players.filter((player) => player.id !== playerId);
      if (eventId && canManage()) {
        state.events = state.events.filter((item) => item.id !== eventId);
        if ($("#eventForm")?.elements.namedItem("eventId").value === eventId) resetEventForm();
      }
      if (pollId && canManage()) state.polls = state.polls.filter((poll) => poll.id !== pollId);
      if (editCatalogFineId && canManage()) {
        const fine = fineCatalogById(editCatalogFineId);
        const form = $("#fineCatalogForm");
        if (fine && form) {
          form.elements.id.value = fine.id;
          form.elements.label.value = fine.label;
          form.elements.description.value = fine.description;
          form.elements.amount.value = fine.amount;
          form.elements.penalty.value = fine.penalty;
        }
      }
      if (toggleFineId && canManage()) {
        toggleFinePaid(toggleFineId);
      }
      if (deleteSelfTrainingId && canManage()) {
        state.hallOfFame = normalizeHallOfFame(state.hallOfFame);
        state.hallOfFame.selfTrainings = state.hallOfFame.selfTrainings.filter((entry) => entry.id !== deleteSelfTrainingId);
      }
      if (deleteBonusPointId && canManage()) {
        state.hallOfFame = normalizeHallOfFame(state.hallOfFame);
        state.hallOfFame.bonusPoints = state.hallOfFame.bonusPoints.filter((entry) => entry.id !== deleteBonusPointId);
      }
      if (rsvpId) {
        const item = state.events.find((eventItem) => eventItem.id === rsvpId);
        const player = playerByName(activeUser());
        if (!item || !player || !hasMemberRole(player, "Spieler") || !eventSupportsRsvp(item)) return;
        const status = target.dataset.status;
        if (status === "yes" && playerUnavailableForEvent(player, item)) {
          window.alert("Der Spieler ist fuer diesen Zeitraum als Urlaub, verletzt oder nicht verfuegbar markiert.");
          return;
        }
        let reason = "";
        if (status === "no") {
          reason = window.prompt("Warum sagst du ab?")?.trim() || "";
          if (!reason) {
            window.alert("Bitte einen Grund fuer die Absage eingeben.");
            return;
          }
        }
        item.rsvps = item.rsvps || {};
        const oldRecord = rsvpRecord(item, player.name);
        const fine = status === "no" && isLateAbsence(item) ? 10 : 0;
        item.rsvps[player.name] = {
          status,
          updatedAt: new Date().toISOString(),
          fine: fine || (status === "no" ? oldRecord?.fine || 0 : 0),
          reason
        };
        if (item.rsvps[player.name].fine) {
          setStatus(`Spaete Absage: 10 EUR Strafe fuer ${player.name}.`);
        }
      }
      if (voteId) {
        const poll = state.polls.find((pollItem) => pollItem.id === voteId);
        poll.votes = poll.votes || {};
        poll.votes[activeUser()] = target.dataset.option;
      }
      if ((canManage() && (playerId || eventId || pollId || toggleFineId || deleteSelfTrainingId || deleteBonusPointId)) || rsvpId || voteId) saveState();
    });

    $("#playerSearch").addEventListener("input", renderPlayers);
    $$(".calendar-mode [data-calendar-mode]").forEach((button) => {
      button.addEventListener("click", () => {
        if (!canManage()) return;
        calendarMode = button.dataset.calendarMode || "week";
        renderCalendar();
        renderEvents();
      });
    });
    $("#cancelEventEditBtn").addEventListener("click", resetEventForm);
    $("#exportEventsBtn").addEventListener("click", () => {
      if (canManage()) exportEventsCsv();
    });
    $("#prevCalendarBtn").addEventListener("click", () => {
      const date = new Date(`${calendarDate}T00:00`);
      if (calendarMode === "month" && canManage()) date.setMonth(date.getMonth() - 1);
      else date.setDate(date.getDate() - 7);
      calendarDate = isoDate(date);
      renderCalendar();
      renderEvents();
      renderAllEventsList();
      renderFines();
    });
    $("#nextCalendarBtn").addEventListener("click", () => {
      const date = new Date(`${calendarDate}T00:00`);
      if (calendarMode === "month" && canManage()) date.setMonth(date.getMonth() + 1);
      else date.setDate(date.getDate() + 7);
      calendarDate = isoDate(date);
      renderCalendar();
      renderEvents();
      renderAllEventsList();
      renderFines();
    });
    $("#calendarGrid").addEventListener("dblclick", (event) => {
      if (!canManage()) return;
      const day = event.target.closest("[data-calendar-date]");
      if (!day) return;
      const form = $("#eventForm");
      form.elements.date.value = day.dataset.calendarDate;
      form.elements.title.focus();
    });
    $("#calendarGrid").addEventListener("dragstart", (event) => {
      if (!canManage()) return event.preventDefault();
      const item = event.target.closest("[data-calendar-event]");
      if (!item) return;
      event.dataTransfer.setData("text/plain", item.dataset.calendarEvent);
      event.dataTransfer.effectAllowed = "move";
    });
    $("#calendarGrid").addEventListener("dragover", (event) => {
      if (!canManage()) return;
      if (!event.target.closest("[data-calendar-date]")) return;
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
    });
    $("#calendarGrid").addEventListener("drop", (event) => {
      if (!canManage()) return;
      const day = event.target.closest("[data-calendar-date]");
      const eventId = event.dataTransfer.getData("text/plain");
      const calendarEvent = state.events.find((item) => item.id === eventId);
      if (!day || !calendarEvent) return;
      event.preventDefault();
      calendarEvent.date = day.dataset.calendarDate;
      calendarDate = calendarEvent.date;
      saveState();
    });
    $("#messageGroup").addEventListener("change", renderMessages);
    $("#currentUser").addEventListener("input", () => {
      localStorage.setItem(LOGIN_USER_KEY, $("#currentUser").value);
      selectedFamePlayer = $("#currentUser").value;
      updateRoleFromUser();
      render();
    });
    function changeClub(clubId) {
      currentClubId = clubId;
      localStorage.setItem(CURRENT_CLUB_KEY, currentClubId);
      state = loadState();
      render();
      syncWithSupabase({ silent: true });
    }

    $("#clubSelect").addEventListener("change", () => changeClub($("#clubSelect").value));
    $("#loginClubSelect").addEventListener("change", () => {
      currentClubId = $("#loginClubSelect").value;
      state = loadState();
      renderClubSelect();
      renderLoginUsers();
    });
    $("#loginUser").addEventListener("change", fillSavedLoginPassword);
    $("#loginForm").addEventListener("submit", (event) => {
      event.preventDefault();
      currentClubId = $("#loginClubSelect").value;
      state = loadState();
      const userName = $("#loginUser").value;
      const player = playerByName(userName);
      const password = $("#loginPassword").value;
      if (!player || (player.password || DEFAULT_PASSWORD) !== password) {
        $("#loginError").textContent = "Name oder Passwort ist falsch.";
        return;
      }
      $("#currentUser").value = userName;
      localStorage.setItem(LOGIN_USER_KEY, $("#currentUser").value);
      localStorage.setItem(CURRENT_CLUB_KEY, currentClubId);
      saveLoginPrefill(currentClubId, userName, password);
      if ($("#rememberLogin").checked) {
        localStorage.setItem(LOGIN_KEY, "true");
        localStorage.setItem(LOGIN_USER_KEY, $("#currentUser").value);
        localStorage.setItem(CURRENT_CLUB_KEY, currentClubId);
        sessionStorage.removeItem(LOGIN_KEY);
      } else {
        sessionStorage.setItem(LOGIN_KEY, "true");
        localStorage.removeItem(LOGIN_KEY);
      }
      $("#loginError").textContent = "";
      updateRoleFromUser();
      ensureSeenDefaults();
      setLoginVisible(false);
      render();
      syncWithSupabase({ silent: true });
    });
    $("#logoutBtn").addEventListener("click", () => {
      localStorage.removeItem(LOGIN_KEY);
      sessionStorage.removeItem(LOGIN_KEY);
      updateAppBadge(0);
      renderLoginUsers();
      renderClubSelect();
      setLoginVisible(true);
    });
    $("#addClubBtn").addEventListener("click", () => {
      if (!canManage()) return;
      const name = $("#newClubName").value.trim();
      if (!name) return;
      const club = touchClub({ id: crypto.randomUUID(), name, color: normalizeHexColor(currentClub().color), logo: "" });
      clubs.push(club);
      currentClubId = club.id;
      state = loadState();
      $("#newClubName").value = "";
      saveClubs();
      render();
    });
    $("#exportBtn").addEventListener("click", () => {
      const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "soccer-dtr-export.json";
      link.click();
      URL.revokeObjectURL(url);
    });

    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      deferredInstallPrompt = event;
      renderInstallPanel();
    });

    window.addEventListener("appinstalled", () => {
      deferredInstallPrompt = null;
      localStorage.setItem(INSTALL_DISMISSED_KEY, "true");
      renderInstallPanel();
    });

    $("#installAppBtn").addEventListener("click", async () => {
      if (!deferredInstallPrompt) return;
      deferredInstallPrompt.prompt();
      await deferredInstallPrompt.userChoice.catch(() => {});
      deferredInstallPrompt = null;
      renderInstallPanel();
    });

    $("#dismissInstallBtn").addEventListener("click", () => {
      localStorage.setItem(INSTALL_DISMISSED_KEY, "true");
      renderInstallPanel();
    });
    $("#enablePushBtn").addEventListener("click", enablePushNotifications);

    $("#currentUser").value = localStorage.getItem(LOGIN_USER_KEY) || "Max Reitz";
    const restoredLogin = restoreLogin();
    if (!restoredLogin) updateRoleFromUser();
    renderClubSelect();
    renderLoginUsers();
    $("#settingsForm").elements.url.value = settings.url;
    $("#settingsForm").elements.key.value = settings.key;
    $("#settingsForm").elements.table.value = settings.table;
    render();
    setLoginVisible(!restoredLogin);
    if (restoredLogin && location.hash === "#messages") {
      switchView("messages");
    }
    syncWithSupabase({ silent: true });

    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("service-worker.js").catch(() => {});
      });
    }
  
