    const STORE_KEY = "soccer-dtr-club-state";
    const CLUBS_KEY = "soccer-dtr-clubs";
    const CURRENT_CLUB_KEY = "soccer-dtr-current-club";
    const LOGIN_KEY = "soccer-dtr-logged-in";
    const LOGIN_USER_KEY = "soccer-dtr-current-user";
    const LOGIN_PREFILL_KEY = "soccer-dtr-login-prefill";
    const SUPERADMIN_OVERRIDE_KEY = "soccer-dtr-superadmin-override";
    const SUPERADMIN_OVERRIDE_USER_KEY = "soccer-dtr-superadmin-override-user";
    const SETTINGS_KEY = "soccer-dtr-supabase-settings";
    const SEEN_PREFIX = "soccer-dtr-seen";
    const PUSH_PUBLIC_KEY = "BMzLO4YI3nJQ2J6OPpj22v7-S8XOuMTq7Ftm5L62CihAq-gNemRJPWAqhn3xzolyq97jJZ6x5KIrrgpdur7Hb8E";
    const PUSH_FUNCTION_NAME = "send-push";
    const PAYPAL_SETTINGS_FUNCTION = "paypal-settings";
    const PAYPAL_CREATE_ORDER_FUNCTION = "paypal-create-order";
    const PAYPAL_CAPTURE_ORDER_FUNCTION = "paypal-capture-order";
    const DOC_ID = "club-state";
    const DEFAULT_CLUB_ID = "default-club";
    const DEFAULT_PASSWORD = "fussball";
    const CLUB_URL_PARAM = "club";
    const PUBLIC_APP_URL = "https://cncandi.github.io/Soccer-DTR/";
    const ROLE_LEVELS = { Spieler: 1, Admin: 2, Superadmin: 3 };
    const MEMBER_FUNCTIONS = ["Spieler", "Trainer", "Betreuer"];
    const TEAM_GROUPS = ["Mannschaft", "Mannschaftsrat", "Kasse", "Trainer", "Betreuer"];
    const TRIAL_DAYS = 21;
    const FULL_LICENSE_DAYS = 365;
    const LICENSE_WARNING_DAYS = 5;
    const EXPIRED_LICENSE_VIEWS = new Set(["players", "events", "fame", "settings"]);
    const CLUB_LEAGUES = ["Bundesliga", "2. Bundesliga", "3. Liga", "Regionalliga", "Oberliga", "Verbandsliga", "Gruppenliga", "Kreisoberliga", "Kreisliga A", "Kreisliga B", "Kreisliga C", "Kreisliga D", "Jugendliga", "Freizeitliga", "Sonstiges"];
    const FEDERAL_STATES = ["Baden-Wuerttemberg", "Bayern", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hessen", "Mecklenburg-Vorpommern", "Niedersachsen", "Nordrhein-Westfalen", "Rheinland-Pfalz", "Saarland", "Sachsen", "Sachsen-Anhalt", "Schleswig-Holstein", "Thueringen"];
    const NATIONALITIES = [
      ["DE", "🇩🇪", "Deutschland"],
      ["TR", "🇹🇷", "Tuerkei"],
      ["SY", "🇸🇾", "Syrien"],
      ["AF", "🇦🇫", "Afghanistan"],
      ["UA", "🇺🇦", "Ukraine"],
      ["PL", "🇵🇱", "Polen"],
      ["IT", "🇮🇹", "Italien"],
      ["ES", "🇪🇸", "Spanien"],
      ["FR", "🇫🇷", "Frankreich"],
      ["NL", "🇳🇱", "Niederlande"],
      ["BE", "🇧🇪", "Belgien"],
      ["AT", "🇦🇹", "Oesterreich"],
      ["CH", "🇨🇭", "Schweiz"],
      ["PT", "🇵🇹", "Portugal"],
      ["GR", "🇬🇷", "Griechenland"],
      ["HR", "🇭🇷", "Kroatien"],
      ["RS", "🇷🇸", "Serbien"],
      ["BA", "🇧🇦", "Bosnien und Herzegowina"],
      ["XK", "🇽🇰", "Kosovo"],
      ["AL", "🇦🇱", "Albanien"],
      ["MA", "🇲🇦", "Marokko"],
      ["TN", "🇹🇳", "Tunesien"],
      ["DZ", "🇩🇿", "Algerien"],
      ["EG", "🇪🇬", "Aegypten"],
      ["NG", "🇳🇬", "Nigeria"],
      ["GH", "🇬🇭", "Ghana"],
      ["GM", "🇬🇲", "Gambia"],
      ["US", "🇺🇸", "USA"],
      ["BR", "🇧🇷", "Brasilien"],
      ["AR", "🇦🇷", "Argentinien"],
      ["OTHER", "🏳️", "Sonstiges"]
    ];
    const MESSAGE_GROUP_CLASSES = {
      Mannschaft: "group-mannschaft",
      Mannschaftsrat: "group-mannschaftsrat",
      Kasse: "group-kasse",
      Trainer: "group-trainer",
      Betreuer: "group-betreuer"
    };
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
    const defaultState = {
      players: [],
      events: [],
      tacticBoards: [],
      cashFines: [],
      fineCatalog: [],
      polls: [],
      messages: [],
      hallOfFame: { selfTrainings: [], bonusPoints: [] }
    };

    let clubs = loadClubs();
    let requestedClubId = new URLSearchParams(location.search).get(CLUB_URL_PARAM) || "";
    let currentClubId = loadCurrentClubId();
    let state = loadState();
    let settings = loadSettings();
    let paypalSettings = null;
    let paypalSdkKey = "";
    let paypalLoading = null;
    let calendarDate = isoDate(new Date());
    let calendarMode = "week";
    let expandedEventId = "";
    let selectedFamePlayer = "";
    let selectedTacticBoardId = "";
    let selectedTacticElementId = "";
    let tacticPointer = null;
    let tacticUndoStack = [];
    let tacticRedoStack = [];
    let tacticClipboard = null;
    let tactic3dSaveTimer = null;
    let deferredInstallPrompt = null;
    let syncTimer = null;
    let syncInProgress = false;
    let pendingCloudSync = false;
    let loginDirectory = [];
    let loginDirectoryLoaded = false;

    const TACTIC_VIEW = { x: -5, y: -3, width: 130, height: 74 };
    const TACTIC_PITCH = { x: 0, y: 0, width: 100, height: 68 };

    const titles = {
      dashboard: ["Uebersicht", "Alles Wichtige fuer Mannschaft, Training, Spiele und Gruppen."],
      players: ["Spieler", "Kader, Gruppen und Kontaktdaten verwalten."],
      events: ["Training & Spiele", "Termine erstellen und Zu- oder Absagen erfassen."],
      polls: ["Abstimmungen", "Schnelle Entscheidungen fuer Mannschaft, Mannschaftsrat und Kasse."],
      messages: ["Mitteilungen", "Gruppen-Kommunikation im Stil eines Team-Chats."],
      tactics: ["Taktikboard", "Spielsituationen fuer Training und Spiel zeichnen."],
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
      const status = normalizeLicenseStatus(club.licenseStatus || club.license_status);
      const activatedAt = validIsoDateTime(club.licenseActivatedAt || club.license_activated_at) || new Date().toISOString();
      const expiresAt = validIsoDateTime(club.licenseExpiresAt || club.license_expires_at) || defaultLicenseExpiresAt(status, activatedAt);
      return {
        id: club.id || crypto.randomUUID(),
        name: club.name || "Mein Verein",
        color: club.color || "#155e3b",
        logo: club.logo || "",
        league: club.league || club.liga || "",
        federalState: club.federalState || club.federal_state || club.bundesland || "",
        licenseKey: club.licenseKey || club.license_key || generateLicenseKey(),
        licenseStatus: status,
        licenseActivatedAt: activatedAt,
        licenseExpiresAt: expiresAt,
        licenseAutoRenew: Boolean(club.licenseAutoRenew ?? club.license_auto_renew),
        updatedAt: club.updatedAt || ""
      };
    }

    function generateLicenseKey() {
      const randomPart = crypto.randomUUID().replace(/-/g, "").slice(0, 12).toUpperCase();
      return `KAD-${randomPart.slice(0, 4)}-${randomPart.slice(4, 8)}-${randomPart.slice(8, 12)}`;
    }

    function normalizeLicenseStatus(status) {
      return ["trial", "active", "blocked"].includes(status) ? status : "trial";
    }

    function validIsoDateTime(value) {
      if (!value) return "";
      const time = Date.parse(value);
      return Number.isFinite(time) ? new Date(time).toISOString() : "";
    }

    function addDaysIso(value, days) {
      const date = new Date(value);
      date.setDate(date.getDate() + days);
      return date.toISOString();
    }

    function defaultLicenseExpiresAt(status, activatedAt = new Date().toISOString()) {
      if (status === "active") return addDaysIso(activatedAt, FULL_LICENSE_DAYS);
      if (status === "trial") return addDaysIso(activatedAt, TRIAL_DAYS);
      return activatedAt;
    }

    function licenseStatusLabel(status) {
      return {
        trial: "Testlizenz",
        active: "Aktiv",
        blocked: "Gesperrt"
      }[normalizeLicenseStatus(status)];
    }

    function clubLicenseAllowsAccess(club = currentClub()) {
      return normalizeLicenseStatus(club?.licenseStatus) !== "blocked";
    }

    function licenseDaysLeft(club = currentClub()) {
      const expiresAt = Date.parse(club?.licenseExpiresAt || "");
      if (!Number.isFinite(expiresAt)) return null;
      return Math.ceil((expiresAt - Date.now()) / 86400000);
    }

    function licenseIsExpired(club = currentClub()) {
      if (!club || normalizeLicenseStatus(club.licenseStatus) === "blocked") return true;
      if (club.licenseAutoRenew && normalizeLicenseStatus(club.licenseStatus) === "active") return false;
      const days = licenseDaysLeft(club);
      return days !== null && days < 0;
    }

    function licenseLimitsFeatures(club = currentClub()) {
      return licenseIsExpired(club);
    }

    function licenseFeatureAllowed(viewName) {
      return !licenseLimitsFeatures() || EXPIRED_LICENSE_VIEWS.has(viewName);
    }

    function formatLicenseDate(value) {
      const date = Date.parse(value || "");
      return Number.isFinite(date) ? new Date(date).toLocaleDateString("de-DE") : "-";
    }

    function licenseBadgeText(club = currentClub()) {
      const status = normalizeLicenseStatus(club?.licenseStatus);
      if (status === "blocked") return "Lizenz gesperrt";
      const days = licenseDaysLeft(club);
      const label = licenseStatusLabel(status);
      if (club?.licenseAutoRenew && status === "active") {
        return `${label} · automatische Verlaengerung · bis ${formatLicenseDate(club.licenseExpiresAt)}`;
      }
      if (days === null) return label;
      if (days < 0) return `${label} abgelaufen seit ${Math.abs(days)} Tagen`;
      return `${label} · noch ${days} Tage · bis ${formatLicenseDate(club.licenseExpiresAt)}`;
    }

    function licenseLoginWarningText(club = currentClub()) {
      if (!canManage()) return "";
      const status = normalizeLicenseStatus(club?.licenseStatus);
      if (status === "blocked") return "Die Lizenz dieses Vereins ist gesperrt.";
      if (club?.licenseAutoRenew && status === "active") return "";
      const days = licenseDaysLeft(club);
      if (days === null) return "";
      if (days < 0) return "Die Lizenz ist abgelaufen. Zurzeit stehen nur Spieler, Training & Spiele, Hall of Fame und Einstellungen zur Verfügung.";
      if (days <= LICENSE_WARNING_DAYS) {
        return `Die Lizenz laeuft in ${days} Tagen ab und sollte erneuert werden, damit alle Funktionen erhalten bleiben.`;
      }
      return "";
    }

    function loadCurrentClubId() {
      if (requestedClubId && clubs.some((club) => club.id === requestedClubId)) return requestedClubId;
      const stored = localStorage.getItem(CURRENT_CLUB_KEY);
      const selectable = selectableClubs();
      return selectable.some((club) => club.id === stored) ? stored : (selectable[0] || clubs[0]).id;
    }

    function selectableClubs() {
      return clubs.filter((club) => normalizeLicenseStatus(club.licenseStatus) !== "blocked");
    }

    function stateKey(clubId = currentClubId) {
      return `${STORE_KEY}:${clubId}`;
    }

    function loadState() {
      const stored = localStorage.getItem(stateKey());
      const legacyStored = currentClubId === DEFAULT_CLUB_ID ? localStorage.getItem(STORE_KEY) : null;
      const source = stored || legacyStored;
      const loadedState = source ? JSON.parse(source) : structuredClone(defaultState);
      return normalizeState(loadedState);
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
        password: player.password || DEFAULT_PASSWORD,
        role: player.role || "Spieler",
        memberRoles,
        groups: normalizeGroups(player),
        group: normalizeGroups(player)[0],
        photo: player.photo || "",
        jerseyNumber: player.jerseyNumber || "",
        birthDate: player.birthDate || "",
        nationality: player.nationality || "",
        memberSince: player.memberSince || "",
        captainRole: player.captainRole || "",
        trainingFocusShort: player.trainingFocusShort || "",
        trainingFocusLong: player.trainingFocusLong || "",
        // Reine Trainer/Betreuer ohne Spieler-Rolle haben keine Position
        position: isPlayerMember ? (player.position || "") : "",
        alternatePositions: isPlayerMember && Array.isArray(player.alternatePositions) ? player.alternatePositions : [],
        availability: normalizeAvailability(player.availability),
        performance: { ...defaultPerformance(), ...(player.performance || {}) },
        transfer: player.transfer && typeof player.transfer === "object" ? player.transfer : null,
        transferHistory: Array.isArray(player.transferHistory) ? player.transferHistory : []
      };
    }

    function mergePlayersByName(a = [], b = []) {
      const map = new Map();
      [...a, ...b].forEach((player) => {
        const normalized = normalizePlayer(player);
        const key = playerNameKey(normalized.name);
        if (!key) return;
        const existing = map.get(key);
        map.set(key, existing ? { ...existing, ...normalized, id: existing.id || normalized.id } : normalized);
      });
      return [...map.values()];
    }

    function hasPlayerName(name, exceptId = "") {
      const key = playerNameKey(name);
      return Boolean(key) && state.players.some((player) => player.id !== exceptId && playerNameKey(player.name) === key);
    }

    function deletePlayer(playerId) {
      if (!canManage()) return;
      const player = state.players.find((item) => item.id === playerId);
      if (!player) return;
      if (activeIncomingTemporaryTransfer(player)) {
        window.alert("Temporaer uebernommene Spieler koennen nicht geloescht werden. Bitte den Spieler zurueckgeben.");
        return;
      }
      if (!window.confirm(`${player.name} wirklich entfernen?`)) return;
      state.players = state.players.filter((item) => item.id !== playerId);
      state.events = (state.events || []).map((eventItem) => {
        if (!eventItem.rsvps?.[player.name]) return eventItem;
        const rsvps = { ...eventItem.rsvps };
        delete rsvps[player.name];
        return { ...eventItem, rsvps };
      });
      if ($("#playerEditForm")?.elements.id?.value === playerId) closePlayerModal();
      saveState();
    }

    function transferHalfYear(dateValue = new Date().toISOString().slice(0, 10)) {
      const date = new Date(`${dateValue}T00:00`);
      const year = Number.isFinite(date.getTime()) ? date.getFullYear() : new Date().getFullYear();
      const month = Number.isFinite(date.getTime()) ? date.getMonth() + 1 : new Date().getMonth() + 1;
      return month >= 7 ? `${year}-hinrunde` : `${year}-rueckrunde`;
    }

    function temporaryTransferCount(player, halfYear = transferHalfYear()) {
      return (player.transferHistory || [])
        .filter((entry) => entry.type === "temporary" && transferHalfYear(entry.fromDate || entry.createdAt) === halfYear)
        .length;
    }

    function transferWarningActive(player) {
      return temporaryTransferCount(player) > 6;
    }

    function pendingIncomingTransfer(player) {
      return player.transfer?.status === "pending" && player.transfer?.targetClubId === currentClubId;
    }

    function activeIncomingTemporaryTransfer(player) {
      return player.transfer?.type === "temporary"
        && player.transfer?.status === "accepted"
        && player.transfer?.originClubId
        && player.transfer.originClubId !== currentClubId;
    }

    function transferHistoryText(player) {
      const total = (player.transferHistory || []).filter((entry) => entry.type === "temporary").length;
      const current = temporaryTransferCount(player);
      const transfer = player.transfer?.type === "temporary"
        ? `Aktuell temporaer bei ${clubNameById(player.transfer.targetClubId || currentClubId)} bis ${formatDate(player.transfer.untilDate)}. `
        : "";
      return `${transfer}Temporaere Wechsel: ${total} gesamt, ${current} in dieser Halbserie.`;
    }

    function pureTransferPlayer(player) {
      return normalizePlayer({
        id: player.id,
        name: player.name,
        password: player.password || DEFAULT_PASSWORD,
        role: "Spieler",
        memberRoles: ["Spieler"],
        groups: ["Mannschaft"],
        group: "Mannschaft",
        position: player.position || "",
        phone: player.phone || "",
        notes: "",
        photo: player.photo || "",
        jerseyNumber: player.jerseyNumber || "",
        birthDate: player.birthDate || "",
        nationality: player.nationality || "",
        captainRole: "",
        trainingFocusShort: "",
        trainingFocusLong: "",
        memberSince: player.memberSince || "",
        alternatePositions: Array.isArray(player.alternatePositions) ? player.alternatePositions : [],
        availability: defaultAvailability(),
        performance: defaultPerformance(),
        transferHistory: player.transferHistory || []
      });
    }

    function transferTargetClubIdFromInput(value) {
      const key = String(value || "").trim().toLowerCase();
      return clubs.find((club) => club.id !== currentClubId && club.name.trim().toLowerCase() === key)?.id || "";
    }

    function playerRowPayload(player, clubId, now = new Date().toISOString()) {
      const normalized = normalizePlayer(player);
      return {
        club_id: clubId,
        name: normalized.name,
        password: normalized.password || DEFAULT_PASSWORD,
        role: normalized.role || "Spieler",
        member_roles: normalizeMemberRoles(normalized),
        groups: normalizeGroups(normalized),
        position: normalized.position || "",
        phone: normalized.phone || "",
        notes: normalized.notes || "",
        photo: normalized.photo || "",
        alternate_positions: normalized.alternatePositions || [],
        availability: normalized.availability || {},
        performance: normalized.performance || {},
        active: true,
        data: normalized,
        updated_at: now
      };
    }

    async function returnTransferredPlayer(player, reason = "returned") {
      const client = getSupabaseClient();
      if (!client) throw new Error(supabaseMissingReason());
      const transfer = player.transfer;
      if (!transfer?.originClubId) throw new Error("Ursprungsverein fehlt.");
      const restored = normalizePlayer({
        ...(transfer.originPlayerData || player),
        id: player.id,
        transfer: null,
        transferHistory: player.transferHistory || []
      });
      const { error } = await client
        .from("players")
        .update(playerRowPayload(restored, transfer.originClubId))
        .eq("id", player.id);
      if (error) throw error;
      state.players = state.players.filter((item) => item.id !== player.id);
      closePlayerModal();
      setStatus(`${player.name} wurde an ${transfer.originClubName || "den Ursprungsverein"} zurueckgegeben.`);
      saveState();
    }

    async function acceptIncomingTransfer(player) {
      const client = getSupabaseClient();
      if (!client) throw new Error(supabaseMissingReason());
      const transfer = { ...(player.transfer || {}), status: "accepted", acceptedAt: new Date().toISOString(), acceptedBy: activeUser() };
      if (transfer.type === "permanent") delete transfer.originPlayerData;
      const accepted = normalizePlayer({ ...player, transfer });
      const { error } = await client
        .from("players")
        .update(playerRowPayload(accepted, currentClubId))
        .eq("id", player.id);
      if (error) throw error;
      const index = state.players.findIndex((item) => item.id === player.id);
      if (index >= 0) state.players[index] = accepted;
      saveState();
    }

    async function handleIncomingTransferPrompts() {
      if (!canManage()) return;
      const pending = state.players.filter(pendingIncomingTransfer);
      for (const player of pending) {
        const transfer = player.transfer || {};
        const question = `${player.name} wurde von ${transfer.originClubName || "einem anderen Verein"} an ${currentClub().name} uebergeben.\n\nSoll der Spieler uebernommen werden?`;
        if (window.confirm(question)) {
          await acceptIncomingTransfer(player);
        } else {
          await returnTransferredPlayer(player, "rejected");
        }
      }
      if (pending.length) {
        await syncWithSupabase({ silent: true });
      }
    }

    function normalizeState(loadedState = {}) {
      return {
      players: mergePlayersByName(loadedState.players || []),
      events: (loadedState.events || []).map(normalizeEvent),
      tacticBoards: (loadedState.tacticBoards || []).map(normalizeTacticBoard),
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
      return Array.isArray(catalog)
        ? catalog.map(normalizeFineCatalogItem)
        : [];
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
        paidAt: fine.paidAt || "",
        paidComment: fine.paidComment || "",
        paymentStatus: fine.paymentStatus || (fine.paid ? "paid" : "open"),
        paypalOrderId: fine.paypalOrderId || "",
        paypalCaptureId: fine.paypalCaptureId || ""
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
        createdAt: entry.createdAt || new Date().toISOString(),
        approved: Boolean(entry.approved),
        approvedBy: entry.approvedBy || "",
        approvedAt: entry.approvedAt || ""
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
        gameVenue: event.gameVenue || "",
        gameCategory: event.gameCategory || "",
        meetingPoint: event.meetingPoint || "",
        meetingTime: event.meetingTime || "",
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

    function normalizeTacticBoard(board = {}) {
      return {
        id: board.id || crypto.randomUUID(),
        title: board.title || "Neue Taktik",
        eventId: board.eventId || "",
        teamColor: board.teamColor || currentClub()?.color || "#155e3b",
        elements: Array.isArray(board.elements) ? board.elements : [],
        threeData: board.threeData || null,
        createdAt: board.createdAt || new Date().toISOString(),
        updatedAt: board.updatedAt || new Date().toISOString()
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
      state = normalizeState(state);
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
        user: prefill.user || localStorage.getItem(LOGIN_USER_KEY) || state.players[0]?.name || "",
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
      if (superadminOverrideActive()) return "Superadmin";
      return $("#currentRole").value || "Spieler";
    }

    function superadminOverrideActive() {
      return sessionStorage.getItem(SUPERADMIN_OVERRIDE_KEY) === "true";
    }

    function clearSuperadminOverride() {
      sessionStorage.removeItem(SUPERADMIN_OVERRIDE_KEY);
      sessionStorage.removeItem(SUPERADMIN_OVERRIDE_USER_KEY);
    }

    function setSuperadminOverride(name) {
      sessionStorage.setItem(SUPERADMIN_OVERRIDE_KEY, "true");
      sessionStorage.setItem(SUPERADMIN_OVERRIDE_USER_KEY, name);
      sessionStorage.setItem(LOGIN_KEY, "true");
      $("#currentUser").value = name;
      $("#currentRole").value = "Superadmin";
    }

    function roleForUser(name) {
      if (superadminOverrideActive()) return "Superadmin";
      const player = playerByName(name);
      return player ? player.role || "Spieler" : "Spieler";
    }

    function playerByName(name) {
      return state.players.find((player) => player.name.trim().toLowerCase() === name.trim().toLowerCase());
    }

    function generateTempPassword() {
      return "tmp-" + Math.random().toString(36).slice(2, 8);
    }

    function sanitizeRole(role) {
      if (role === "Superadmin") return isSuperadmin() ? "Superadmin" : "Admin";
      return role === "Admin" ? "Admin" : "Spieler";
    }

    function updateRoleFromUser() {
      $("#currentRole").value = superadminOverrideActive() ? "Superadmin" : roleForUser(activeUser());
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
      return canManage();
    }

    function canJoinHallOfFame(name = activeUser()) {
      const player = playerByName(name);
      return Boolean(player && hasMemberRole(player, "Spieler"));
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

    function clubNameById(clubId) {
      return clubs.find((club) => club.id === clubId)?.name || clubId || "Verein";
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

    function normalizedSchemaUnavailable(error) {
      const message = error?.message || String(error || "");
      return message.includes("Could not find the table")
        || message.includes("Could not find the")
        || message.includes("schema cache")
        || message.includes("relation ")
        || message.includes("does not exist");
    }

    async function refreshLoginDirectory() {
      const client = getSupabaseClient();
      if (!client) return;
      const { data, error } = await client
        .from("players")
        .select("id,club_id,name,password,role,data");
      if (error) {
        if (!normalizedSchemaUnavailable(error)) throw error;
        return;
      }
      loginDirectory = (data || []).filter((row) => row.club_id && row.name);
      loginDirectoryLoaded = true;
      renderClubSelect();
      renderLoginUsers();
    }

    function loginDirectoryRowsForUser(name) {
      const key = playerNameKey(name);
      if (!key) return [];
      return loginDirectory.filter((row) => playerNameKey(row.name) === key);
    }

    function loginUserIsSuperadmin(name) {
      const key = playerNameKey(name);
      if (!key) return false;
      if (loginDirectory.some((row) => playerNameKey(row.name) === key && row.role === "Superadmin")) return true;
      return state.players.some((player) => playerNameKey(player.name) === key && player.role === "Superadmin");
    }

    function clubFromRow(row) {
      return normalizeClub({
        id: row.id,
        name: row.name,
        color: row.color,
        logo: row.logo,
        league: row.league,
        federalState: row.federal_state,
        licenseKey: row.license_key,
        licenseStatus: row.license_status,
        licenseActivatedAt: row.license_activated_at,
        licenseExpiresAt: row.license_expires_at,
        licenseAutoRenew: row.license_auto_renew,
        updatedAt: row.updated_at || row.created_at || ""
      });
    }

    async function loadRemoteClubsFromTable(client) {
      const withLicense = await client
        .from("clubs")
        .select("id,name,color,logo,league,federal_state,license_key,license_status,license_activated_at,license_expires_at,license_auto_renew,created_at,updated_at");
      if (!withLicense.error) return (withLicense.data || []).map(clubFromRow);

      const message = withLicense.error.message || "";
      const missingOptionalClubColumn = ["license_activated_at", "license_expires_at", "license_auto_renew", "league", "federal_state"]
        .some((column) => message.includes(column));
      if (!missingOptionalClubColumn) {
        if (normalizedSchemaUnavailable(withLicense.error)) return [];
        throw withLicense.error;
      }

      const fallback = await client
        .from("clubs")
        .select("id,name,color,logo,license_key,license_status,created_at,updated_at");
      if (fallback.error) {
        if (normalizedSchemaUnavailable(fallback.error)) return [];
        throw fallback.error;
      }
      return (fallback.data || []).map(clubFromRow);
    }

    async function processExpiredTemporaryTransfers(client) {
      const today = new Date().toISOString().slice(0, 10);
      const { data, error } = await client.from("players").select("*");
      if (error) {
        if (normalizedSchemaUnavailable(error)) return;
        throw error;
      }
      const expired = (data || []).filter((row) => {
        const transfer = rowData(row).transfer;
        return transfer?.type === "temporary"
          && transfer.originClubId
          && transfer.untilDate
          && transfer.untilDate < today
          && row.club_id !== transfer.originClubId;
      });
      for (const row of expired) {
        const transfer = rowData(row).transfer;
        const restored = normalizePlayer({
          ...(transfer.originPlayerData || rowData(row)),
          id: row.id,
          transfer: null,
          transferHistory: rowData(row).transferHistory || []
        });
        const now = new Date().toISOString();
        const { error: restoreError } = await client
          .from("players")
          .update(playerRowPayload(restored, transfer.originClubId, now))
          .eq("id", row.id);
        if (restoreError) throw restoreError;
      }
    }

    async function transferPlayer(player, values) {
      const client = getSupabaseClient();
      if (!client) throw new Error(supabaseMissingReason());
      const targetClubId = values.transferClubId;
      if (!targetClubId || targetClubId === currentClubId) throw new Error("Bitte einen anderen Zielverein auswaehlen.");
      const mode = values.transferMode || "temporary";
      const fromDate = values.transferFromDate || new Date().toISOString().slice(0, 10);
      const untilDate = values.transferUntilDate || "";
      if (mode === "temporary" && !untilDate) throw new Error("Bitte ein Bis-Datum fuer den temporaeren Wechsel angeben.");
      if (mode === "temporary" && untilDate < fromDate) throw new Error("Das Bis-Datum darf nicht vor dem Ab-Datum liegen.");

      const now = new Date().toISOString();
      const purePlayer = pureTransferPlayer(player);
      const historyEntry = {
        id: crypto.randomUUID(),
        type: mode,
        fromClubId: currentClubId,
        fromClubName: currentClub().name,
        targetClubId,
        targetClubName: clubNameById(targetClubId),
        fromDate,
        untilDate,
        createdAt: now
      };
      const transferred = normalizePlayer({
        ...purePlayer,
        transferHistory: mode === "temporary"
          ? [...(player.transferHistory || []), historyEntry]
          : (player.transferHistory || []),
        transfer: mode === "temporary" ? {
          type: "temporary",
          status: "pending",
          originClubId: currentClubId,
          originClubName: currentClub().name,
          targetClubId,
          targetClubName: clubNameById(targetClubId),
          fromDate,
          untilDate,
          originPlayerData: normalizePlayer(player)
        } : {
          type: "permanent",
          status: "pending",
          originClubId: currentClubId,
          originClubName: currentClub().name,
          targetClubId,
          targetClubName: clubNameById(targetClubId),
          fromDate,
          originPlayerData: normalizePlayer(player)
        }
      });
      const { error } = await client
        .from("players")
        .update(playerRowPayload(transferred, targetClubId, now))
        .eq("id", player.id);
      if (error) throw error;

      state.players = state.players.filter((item) => item.id !== player.id);
      state.events = (state.events || []).map((eventItem) => {
        if (!eventItem.rsvps?.[player.name]) return eventItem;
        const rsvps = { ...eventItem.rsvps };
        delete rsvps[player.name];
        return { ...eventItem, rsvps };
      });
      closePlayerModal();
      setStatus(`${player.name} wurde ${mode === "temporary" ? "temporaer" : "dauerhaft"} an ${clubNameById(targetClubId)} uebergeben.`);
      saveState();
    }

    function rowData(row, fallback = {}) {
      return row && row.data && typeof row.data === "object" && !Array.isArray(row.data)
        ? row.data
        : fallback;
    }

    function ensureEntityId(entity) {
      if (!entity.id) entity.id = crypto.randomUUID();
      return entity.id;
    }

    function normalizedEventType(type) {
      if (type === "Sonstiges") return "Event";
      return eventTypeForForm(type);
    }

    function playerIdByNameMap(players = state.players) {
      return new Map(players.map((player) => [playerNameKey(player.name), player.id]).filter(([key, id]) => key && id));
    }

    async function loadNormalizedState(client) {
      const clubResult = await client.from("clubs").select("*").eq("id", currentClubId).maybeSingle();
      if (clubResult.error) throw clubResult.error;

      const [playersResult, eventsResult, cashResult, catalogResult, pollsResult, messagesResult, fameResult] = await Promise.all([
        client.from("players").select("*").eq("club_id", currentClubId),
        client.from("events").select("*").eq("club_id", currentClubId),
        client.from("cash_entries").select("*").eq("club_id", currentClubId),
        client.from("fine_catalog").select("*").eq("club_id", currentClubId),
        client.from("polls").select("*").eq("club_id", currentClubId),
        client.from("messages").select("*").eq("club_id", currentClubId),
        client.from("hall_of_fame_entries").select("*").eq("club_id", currentClubId)
      ]);
      const results = [playersResult, eventsResult, cashResult, catalogResult, pollsResult, messagesResult, fameResult];
      const failed = results.find((result) => result.error);
      if (failed) throw failed.error;

      const playerRows = playersResult.data || [];
      const eventRows = eventsResult.data || [];
      let tacticRows = [];
      try {
        const tacticResult = await client.from("tactic_boards").select("*").eq("club_id", currentClubId);
        if (tacticResult.error) throw tacticResult.error;
        tacticRows = tacticResult.data || [];
      } catch (tacticError) {
        if (!normalizedSchemaUnavailable(tacticError)) throw tacticError;
      }
      const hasRows = Boolean(clubResult.data)
        || results.some((result) => (result.data || []).length)
        || tacticRows.length;
      if (!hasRows) return null;

      const players = playerRows.map((row) => normalizePlayer({
        id: row.id,
        name: row.name,
        password: row.password || DEFAULT_PASSWORD,
        role: row.role || "Spieler",
        memberRoles: row.member_roles || undefined,
        groups: row.groups || undefined,
        position: row.position || "",
        phone: row.phone || "",
        notes: row.notes || "",
        photo: row.photo || "",
        alternatePositions: row.alternate_positions || [],
        availability: row.availability || {},
        performance: row.performance || {},
        ...rowData(row)
      }));

      const playerNamesById = new Map(players.map((player) => [player.id, player.name]));
      const events = eventRows.map((row) => normalizeEvent({
        id: row.id,
        type: normalizedEventType(row.type),
        title: row.title,
        date: row.date,
        time: row.time,
        location: row.location,
        gameVenue: row.home_away || row.game_venue || "",
        gameCategory: row.game_type || row.game_category || "",
        meetingPoint: row.meeting_place || "",
        meetingTime: row.meeting_time || "",
        details: row.details || "",
        coach: row.coach || "",
        focus: row.focus || "",
        remark: row.remark || "",
        createdAt: row.created_at || "",
        ...rowData(row)
      }));

      if (events.length) {
        const rsvpResult = await client.from("event_rsvps").select("*").in("event_id", events.map((event) => event.id));
        if (rsvpResult.error) throw rsvpResult.error;
        const eventsById = new Map(events.map((event) => [event.id, event]));
        (rsvpResult.data || []).forEach((rsvp) => {
          const eventItem = eventsById.get(rsvp.event_id);
          const playerName = playerNamesById.get(rsvp.player_id);
          if (!eventItem || !playerName) return;
          eventItem.rsvps = eventItem.rsvps || {};
          eventItem.rsvps[playerName] = {
            ...(eventItem.rsvps[playerName] || {}),
            status: rsvp.status,
            note: rsvp.note || "",
            transport: rsvp.transport || "",
            updatedAt: rsvp.updated_at || ""
          };
        });
      }

      return normalizeState({
        players,
        events,
        tacticBoards: tacticRows.map((row) => normalizeTacticBoard({
          id: row.id,
          title: row.title,
          eventId: row.event_id || "",
          teamColor: row.team_color || "",
          createdAt: row.created_at || "",
          updatedAt: row.updated_at || "",
          ...rowData(row)
        })),
        cashFines: (cashResult.data || []).map((row) => normalizeCashFine({
          id: row.id,
          player: row.player_name || "",
          label: row.label,
          amount: row.amount,
          date: row.date,
          note: row.note,
          paid: row.paid,
          createdAt: row.created_at || "",
          ...rowData(row)
        })),
        fineCatalog: (catalogResult.data || []).map((row) => normalizeFineCatalogItem({
          id: row.id,
          label: row.label,
          description: row.description,
          amount: row.amount,
          penalty: row.penalty,
          ...rowData(row)
        })),
        polls: (pollsResult.data || []).map((row) => ({
          id: row.id,
          question: row.question,
          group: row.group_name || "Mannschaft",
          options: row.options || [],
          votes: row.votes || {},
          ...rowData(row)
        })),
        messages: (messagesResult.data || []).map((row) => ({
          id: row.id,
          group: row.group_name || "Mannschaft",
          title: row.title || "",
          body: row.body || "",
          author: row.author || "",
          createdAt: row.created_at || "",
          ...rowData(row)
        })),
        hallOfFame: {
          selfTrainings: (fameResult.data || [])
            .filter((row) => row.category === "selfTraining")
            .map((row) => normalizeSelfTraining({ id: row.id, player: row.player_name || "", ...(row.meta || {}), ...rowData(row) })),
          bonusPoints: (fameResult.data || [])
            .filter((row) => row.category === "bonusPoint")
            .map((row) => normalizeBonusPoint({ id: row.id, player: row.player_name || "", points: row.value, ...(row.meta || {}), ...rowData(row) }))
        }
      });
    }

    async function deleteMissingRows(client, table, ids) {
      let query = client.from(table).delete().eq("club_id", currentClubId);
      if (ids.length) query = query.not("id", "in", `(${ids.join(",")})`);
      const result = await query;
      if (result.error) throw result.error;
    }

    async function saveNormalizedState(client) {
      state = normalizeState(state);
      const now = new Date().toISOString();
      const normalizedClubs = clubs.map(normalizeClub);
      const clubRows = normalizedClubs.map((club) => ({
        id: club.id,
        name: club.name,
        color: normalizeHexColor(club.color || "#155e3b"),
        logo: club.logo || "",
        league: club.league || "",
        federal_state: club.federalState || "",
        license_key: club.licenseKey || generateLicenseKey(),
        license_status: normalizeLicenseStatus(club.licenseStatus),
        license_activated_at: club.licenseActivatedAt,
        license_expires_at: club.licenseExpiresAt,
        license_auto_renew: Boolean(club.licenseAutoRenew),
        updated_at: club.updatedAt || now
      }));
      let clubUpsert = await client.from("clubs").upsert(clubRows);
      if (clubUpsert.error && ["league", "federal_state"].some((column) => (clubUpsert.error.message || "").includes(column))) {
        const legacyClubRows = clubRows.map(({ league, federal_state, ...row }) => row);
        clubUpsert = await client.from("clubs").upsert(legacyClubRows);
      }
      if (clubUpsert.error) throw clubUpsert.error;

      state.players.forEach(ensureEntityId);
      state.events.forEach(ensureEntityId);
      (state.tacticBoards || []).forEach(ensureEntityId);
      (state.cashFines || []).forEach(ensureEntityId);
      (state.fineCatalog || []).forEach(ensureEntityId);
      (state.polls || []).forEach(ensureEntityId);
      (state.messages || []).forEach(ensureEntityId);
      const fame = normalizeHallOfFame(state.hallOfFame);
      fame.selfTrainings.forEach(ensureEntityId);
      fame.bonusPoints.forEach(ensureEntityId);
      state.hallOfFame = fame;

      const playerIds = playerIdByNameMap();
      const playerRows = state.players.map((player) => ({
        id: player.id,
        club_id: currentClubId,
        name: player.name,
        password: player.password || DEFAULT_PASSWORD,
        role: player.role || "Spieler",
        member_roles: normalizeMemberRoles(player),
        groups: normalizeGroups(player),
        position: player.position || "",
        phone: player.phone || "",
        notes: player.notes || "",
        photo: player.photo || "",
        alternate_positions: player.alternatePositions || [],
        availability: player.availability || {},
        performance: player.performance || {},
        active: true,
        data: player,
        updated_at: now
      }));
      if (playerRows.length) {
        const result = await client.from("players").upsert(playerRows);
        if (result.error) throw result.error;
      }
      await deleteMissingRows(client, "players", playerRows.map((row) => row.id));

      const eventRows = state.events.map((eventItem) => ({
        id: eventItem.id,
        club_id: currentClubId,
        type: normalizedEventType(eventItem.type),
        title: eventItem.title || normalizedEventType(eventItem.type),
        date: eventItem.date,
        time: eventItem.time || "",
        location: eventItem.location || "",
        opponent: eventItem.type === "Spiel" ? eventItem.title || "" : "",
        home_away: eventItem.gameVenue || "",
        field_address: eventItem.location || "",
        game_type: eventItem.gameCategory || "",
        meeting_place: eventItem.meetingPoint || "",
        meeting_time: eventItem.meetingTime || "",
        on_site_time: eventItem.meetingTime || "",
        repeat: eventItem.repeat || "",
        repeat_until: null,
        coach: eventItem.coach || "",
        focus: eventItem.focus || "",
        details: eventItem.details || "",
        remark: eventItem.remark || "",
        data: eventItem,
        updated_at: now
      }));
      if (eventRows.length) {
        const result = await client.from("events").upsert(eventRows);
        if (result.error) throw result.error;
      }
      await deleteMissingRows(client, "events", eventRows.map((row) => row.id));

      const rsvpEventIds = state.events.map((eventItem) => eventItem.id);
      if (rsvpEventIds.length) {
        const deleteRsvps = await client.from("event_rsvps").delete().in("event_id", rsvpEventIds);
        if (deleteRsvps.error) throw deleteRsvps.error;
      }
      const rsvpRows = state.events.flatMap((eventItem) => Object.entries(eventItem.rsvps || {}).map(([name, value]) => {
        const rsvp = typeof value === "string" ? { status: value } : value || {};
        const playerId = playerIds.get(playerNameKey(name));
        if (!playerId) return null;
        return {
          event_id: eventItem.id,
          player_id: playerId,
          status: rsvp.status || value || "yes",
          note: rsvp.note || "",
          transport: rsvp.transport || "",
          updated_at: rsvp.updatedAt || now
        };
      }).filter(Boolean));
      if (rsvpRows.length) {
        const result = await client.from("event_rsvps").insert(rsvpRows);
        if (result.error) throw result.error;
      }

      const tacticRows = (state.tacticBoards || []).map((board) => ({
        id: board.id,
        club_id: currentClubId,
        event_id: board.eventId || null,
        title: board.title || "Taktik",
        team_color: board.teamColor || currentClub().color || "#155e3b",
        data: board,
        updated_at: now
      }));
      try {
        if (tacticRows.length) {
          const result = await client.from("tactic_boards").upsert(tacticRows);
          if (result.error) throw result.error;
        }
        await deleteMissingRows(client, "tactic_boards", tacticRows.map((row) => row.id));
      } catch (tacticError) {
        if (!normalizedSchemaUnavailable(tacticError)) throw tacticError;
      }

      const cashRows = (state.cashFines || []).map((fine) => ({
        id: fine.id,
        club_id: currentClubId,
        player_id: playerIds.get(playerNameKey(fine.player)) || null,
        player_name: fine.player || "",
        label: fine.label || "Strafe",
        amount: Number(fine.amount || 0),
        date: fine.date || null,
        note: fine.note || "",
        paid: Boolean(fine.paid),
        data: fine,
        updated_at: now
      }));
      if (cashRows.length) {
        const result = await client.from("cash_entries").upsert(cashRows);
        if (result.error) throw result.error;
      }
      await deleteMissingRows(client, "cash_entries", cashRows.map((row) => row.id));

      const catalogRows = (state.fineCatalog || []).map((fine) => ({
        id: fine.id,
        club_id: currentClubId,
        label: fine.label || "Strafe",
        description: fine.description || "",
        amount: Number(fine.amount || 0),
        penalty: fine.penalty || "",
        data: fine,
        updated_at: now
      }));
      if (catalogRows.length) {
        const result = await client.from("fine_catalog").upsert(catalogRows);
        if (result.error) throw result.error;
      }
      await deleteMissingRows(client, "fine_catalog", catalogRows.map((row) => row.id));

      const pollRows = (state.polls || []).map((poll) => ({
        id: poll.id,
        club_id: currentClubId,
        question: poll.question || "",
        options: poll.options || [],
        votes: poll.votes || {},
        group_name: poll.group || "Mannschaft",
        data: poll,
        updated_at: now
      }));
      if (pollRows.length) {
        const result = await client.from("polls").upsert(pollRows);
        if (result.error) throw result.error;
      }
      await deleteMissingRows(client, "polls", pollRows.map((row) => row.id));

      const messageRows = (state.messages || []).map((message) => ({
        id: message.id,
        club_id: currentClubId,
        group_name: message.group || "Mannschaft",
        title: message.title || "",
        body: message.body || "",
        author: message.author || "",
        data: message,
        updated_at: now
      }));
      if (messageRows.length) {
        const result = await client.from("messages").upsert(messageRows);
        if (result.error) throw result.error;
      }
      await deleteMissingRows(client, "messages", messageRows.map((row) => row.id));

      const fameRows = [
        ...fame.selfTrainings.map((entry) => ({
          id: entry.id,
          club_id: currentClubId,
          player_id: playerIds.get(playerNameKey(entry.player)) || null,
          player_name: entry.player || "",
          category: "selfTraining",
          value: entry.approved ? 1 : 0,
          meta: entry,
          data: entry,
          updated_at: now
        })),
        ...fame.bonusPoints.map((entry) => ({
          id: entry.id,
          club_id: currentClubId,
          player_id: playerIds.get(playerNameKey(entry.player)) || null,
          player_name: entry.player || "",
          category: "bonusPoint",
          value: Number(entry.points || 0),
          meta: entry,
          data: entry,
          updated_at: now
        }))
      ];
      if (fameRows.length) {
        const result = await client.from("hall_of_fame_entries").upsert(fameRows);
        if (result.error) throw result.error;
      }
      await deleteMissingRows(client, "hall_of_fame_entries", fameRows.map((row) => row.id));
    }

    function openClubSignupModal() {
      const modal = $("#clubSignupModal");
      if (!modal) return;
      $("#clubSignupForm").reset();
      $("#clubSignupStatus").textContent = "";
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      $("#clubSignupForm").elements.clubName.focus();
    }

    function closeClubSignupModal() {
      const modal = $("#clubSignupModal");
      if (!modal) return;
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
    }

    function slugifyClubName(name) {
      return String(name || "")
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")
        .slice(0, 48);
    }

    function newClubState() {
      return normalizeState(structuredClone(defaultState));
    }

    async function verifyGlobalSuperadminPassword(password) {
      const value = String(password || "");
      if (!value) return null;
      const localMatch = state.players.find((player) => player.role === "Superadmin" && (player.password || DEFAULT_PASSWORD) === value);
      if (localMatch) return localMatch;
      const client = getSupabaseClient();
      if (!client) return null;
      const { data, error } = await client.from("players").select("id,name,password,role").eq("role", "Superadmin");
      if (error) throw error;
      return (data || []).find((player) => (player.password || DEFAULT_PASSWORD) === value) || null;
    }

    async function requestSuperadminOverride() {
      const password = window.prompt("Superadmin-Passwort");
      if (password === null) return false;
      try {
        const superadmin = await verifyGlobalSuperadminPassword(password);
        if (!superadmin) {
          window.alert("Superadmin-Passwort ist falsch.");
          return false;
        }
        setSuperadminOverride(superadmin.name);
        localStorage.setItem(CURRENT_CLUB_KEY, currentClubId);
        setLoginVisible(false);
        render();
        switchView("settings");
        setStatus(`Superadmin-Zugriff fuer ${superadmin.name} aktiviert.`);
        return true;
      } catch (error) {
        window.alert("Superadmin-Zugriff konnte nicht geprueft werden: " + (error.message || String(error)));
        return false;
      }
    }

    async function registerClub(values) {
      const client = getSupabaseClient();
      if (!client) throw new Error(supabaseMissingReason());
      const clubName = values.clubName.trim();
      const adminName = values.adminName.trim();
      const password = values.adminPassword;
      if (!clubName || !adminName || !password) throw new Error("Bitte Vereinsname, Ansprechpartner und Passwort ausfuellen.");
      if (password !== values.adminPasswordRepeat) throw new Error("Die Passwoerter stimmen nicht ueberein.");

      const now = new Date().toISOString();
      const club = touchClub({
        id: crypto.randomUUID(),
        name: clubName,
        color: "#155e3b",
        logo: "",
        league: "",
        federalState: "",
        licenseKey: generateLicenseKey(),
        licenseStatus: "trial",
        licenseActivatedAt: now,
        licenseExpiresAt: addDaysIso(now, TRIAL_DAYS),
        licenseAutoRenew: false
      });
      const player = normalizePlayer({
        id: crypto.randomUUID(),
        name: adminName,
        password,
        role: "Admin",
        memberRoles: ["Trainer"],
        groups: ["Trainer", "Mannschaft"],
        group: "Trainer",
        position: "",
        phone: "",
        notes: values.adminEmail
          ? `E-Mail: ${values.adminEmail.trim()}${values.note.trim() ? `\n${values.note.trim()}` : ""}`
          : values.note.trim(),
        photo: "",
        alternatePositions: [],
        availability: defaultAvailability(),
        performance: defaultPerformance()
      });

      const clubPayload = {
        id: club.id,
        name: club.name,
        slug: `${slugifyClubName(club.name) || "verein"}-${club.id.slice(0, 8)}`,
        color: club.color,
        logo: club.logo,
        league: club.league || "",
        federal_state: club.federalState || "",
        license_key: club.licenseKey,
        license_status: club.licenseStatus,
        license_activated_at: club.licenseActivatedAt,
        license_expires_at: club.licenseExpiresAt,
        license_auto_renew: club.licenseAutoRenew,
        updated_at: now
      };
      let clubInsert = await client.from("clubs").insert(clubPayload);
      if (clubInsert.error && normalizedSchemaUnavailable(clubInsert.error)) {
        const { license_activated_at, license_expires_at, license_auto_renew, ...legacyClubPayload } = clubPayload;
        clubInsert = await client.from("clubs").insert(legacyClubPayload);
      }
      if (clubInsert.error && ["league", "federal_state"].some((column) => (clubInsert.error.message || "").includes(column))) {
        const { league, federal_state, ...legacyClubPayload } = clubPayload;
        clubInsert = await client.from("clubs").insert(legacyClubPayload);
      }
      if (clubInsert.error) throw clubInsert.error;

      const playerInsert = await client.from("players").insert({
        id: player.id,
        club_id: club.id,
        name: player.name,
        password: player.password,
        role: "Admin",
        member_roles: player.memberRoles,
        groups: player.groups,
        position: "",
        phone: "",
        notes: player.notes,
        photo: "",
        alternate_positions: [],
        availability: player.availability,
        performance: player.performance,
        active: true,
        data: player,
        updated_at: now
      });
      if (playerInsert.error) throw playerInsert.error;

      const createdState = normalizeState({ ...newClubState(), players: [player] });
      const stateDocument = await client.from(settings.table).upsert({ id: `${DOC_ID}:${club.id}`, document: createdState, updated_at: now });
      if (stateDocument.error) throw stateDocument.error;

      clubs = mergeClubs([...clubs, club], []);
      const clubsDocument = await client.from(settings.table).upsert({
        id: clubsDocumentId(),
        document: { clubs },
        updated_at: now
      });
      if (clubsDocument.error) throw clubsDocument.error;
      currentClubId = club.id;
      requestedClubId = club.id;
      state = createdState;
      saveClubs({ sync: false });
      localStorage.setItem(stateKey(), JSON.stringify(state));
      renderClubSelect();
      renderLoginUsers();
      renderInstallPanel();
      return { club, player };
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
        await processExpiredTemporaryTransfers(client);
        const clubChanged = await syncClubs(client, options);
        if (clubChanged) {
          state = loadState();
          updateRoleFromUser();
        }
        const { data, error } = await client.from(settings.table).select("document").eq("id", clubDocumentId()).maybeSingle();
        if (error) {
          setStatus("Supabase-Fehler: " + error.message);
          return;
        }

        let normalizedReady = true;
        let migratedFromLegacy = false;
        if (!options.preferLocal) {
          try {
            const normalizedState = await loadNormalizedState(client);
            if (normalizedState) {
              state = normalizedState;
            } else if (data && data.document) {
              state = normalizeState(data.document);
              migratedFromLegacy = true;
            }
          } catch (normalizedError) {
            if (!normalizedSchemaUnavailable(normalizedError)) throw normalizedError;
            normalizedReady = false;
            if (data && data.document) state = normalizeState(data.document);
          }
        }

        if (normalizedReady) {
          try {
            await saveNormalizedState(client);
          } catch (normalizedError) {
            if (!normalizedSchemaUnavailable(normalizedError)) throw normalizedError;
            normalizedReady = false;
          }
        }

        const payload = { id: clubDocumentId(), document: state, updated_at: new Date().toISOString() };
        const result = await client.from(settings.table).upsert(payload);
        if (result.error) {
          setStatus("Supabase-Fehler: " + result.error.message);
          return;
        }

        localStorage.setItem(stateKey(), JSON.stringify(state));
        const syncMode = normalizedReady
          ? (migratedFromLegacy ? "Migriert und synchronisiert" : "Synchronisiert")
          : "Synchronisiert mit Dokument-Speicher";
        setStatus(`${syncMode}: ${new Date().toLocaleTimeString("de-DE")}`);
        render();
      } catch (error) {
        setStatus(supabaseErrorMessage(error));
      } finally {
        syncInProgress = false;
        refreshLoginDirectory().catch(() => {});
        if (pendingCloudSync) {
          pendingCloudSync = false;
          queueCloudSync();
        }
      }
    }

    async function syncClubs(client, options = {}) {
      const previousClubId = currentClubId;
      const previousClubs = clubs.map(normalizeClub);
      const [tableClubs, documentResult] = await Promise.all([
        loadRemoteClubsFromTable(client),
        client.from(settings.table).select("document,updated_at").eq("id", clubsDocumentId()).maybeSingle()
      ]);
      const { data, error } = documentResult;
      if (error) throw new Error(error.message);
      let documentClubs = [];
      if (data && data.document && Array.isArray(data.document.clubs)) {
        documentClubs = data.document.clubs.map((club) => normalizeClub({ ...club, updatedAt: club.updatedAt || data.updated_at || "" }));
      }

      const remoteClubs = tableClubs.length ? tableClubs : documentClubs;
      if (remoteClubs.length) {
        clubs = options.preferLocal ? mergeClubs(remoteClubs, clubs) : remoteClubs;
        if (clubs.length && !clubs.some((club) => club.id === currentClubId)) {
          currentClubId = clubs[0].id;
        }
        if (requestedClubId && clubs.some((club) => club.id === requestedClubId)) {
          currentClubId = requestedClubId;
        }
        saveClubs({ sync: false });
      } else {
        clubs = previousClubs;
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
      const license = club ? ` - ${licenseStatusLabel(club.licenseStatus)}` : "";
      setStatus(`${club ? club.name : "Verein"}${license} - ${mode}`);
    }

    function installHintText() {
      const standalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone;
      if (standalone) return "";
      const isiOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
      return isiOS ? "Auf dem iPhone: Teilen antippen und Zum Home-Bildschirm waehlen." : "Als App auf dem Home-Bildschirm speichern.";
    }

    function renderInstallPanel() {
      const panel = $("#installPanel");
      if (!panel) return;
      const standalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone;
      const hint = installHintText();
      panel.hidden = standalone || !hint;
      $("#installHint").textContent = hint;
      $("#installAppBtn").hidden = !deferredInstallPrompt;
      $("#installAppBtn").parentElement.hidden = !deferredInstallPrompt;
      renderClubShare();
    }

    function clubInstallUrl(clubId = currentClubId) {
      const url = new URL(PUBLIC_APP_URL);
      url.searchParams.set(CLUB_URL_PARAM, clubId);
      return url.toString();
    }

    function renderClubShare() {
      const link = $("#clubInstallLink");
      const qr = $("#clubQrCode");
      if (!link || !qr) return;
      const url = clubInstallUrl();
      link.href = url;
      link.textContent = url;
      qr.src = `https://api.qrserver.com/v1/create-qr-code/?size=172x172&margin=8&data=${encodeURIComponent(url)}`;
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

    function edgeFunctionUrl(name) {
      return settings.url ? `${settings.url.replace(/\/$/, "")}/functions/v1/${name}` : "";
    }

    function edgeHeaders() {
      return {
        "Content-Type": "application/json",
        apikey: settings.key,
        Authorization: `Bearer ${settings.key}`
      };
    }

    function paypalConfigured() {
      return Boolean(paypalSettings?.paypal_enabled && paypalSettings?.paypal_client_id && settings.url && settings.key);
    }

    async function loadPaypalSettings() {
      if (!settings.url || !settings.key || !edgeFunctionUrl(PAYPAL_SETTINGS_FUNCTION)) {
        paypalSettings = null;
        renderPaypalSettingsForm();
        return;
      }
      try {
        const response = await fetch(`${edgeFunctionUrl(PAYPAL_SETTINGS_FUNCTION)}?clubId=${encodeURIComponent(currentClubId)}`, {
          headers: edgeHeaders()
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || "PayPal-Einstellungen konnten nicht geladen werden.");
        paypalSettings = data;
        renderPaypalSettingsForm();
        renderCash();
      } catch (error) {
        paypalSettings = null;
        const status = $("#paypalStatus");
        if (status) status.textContent = "PayPal nicht verbunden: " + (error.message || error);
      }
    }

    function renderPaypalSettingsForm() {
      const form = $("#paypalSettingsForm");
      const status = $("#paypalStatus");
      if (!form || !status) return;
      const data = paypalSettings || {};
      form.elements.paypal_enabled.checked = Boolean(data.paypal_enabled);
      form.elements.paypal_mode.value = data.paypal_mode || "sandbox";
      form.elements.paypal_client_id.value = data.paypal_client_id || "";
      form.elements.paypal_client_secret.value = "";
      form.elements.paypal_receiver_email.value = data.paypal_receiver_email || "";
      form.elements.paypal_webhook_id.value = data.paypal_webhook_id || "";
      status.textContent = data.paypal_enabled && data.paypal_client_id
        ? `Verbunden (${data.paypal_mode === "live" ? "Live" : "Sandbox"})`
        : "PayPal ist nicht verbunden.";
    }

    async function savePaypalSettings(event) {
      event.preventDefault();
      if (!settings.url || !settings.key) {
        window.alert("PayPal braucht zuerst die Supabase-Verbindung.");
        return;
      }
      const values = formValues(event.currentTarget);
      const response = await fetch(`${edgeFunctionUrl(PAYPAL_SETTINGS_FUNCTION)}?clubId=${encodeURIComponent(currentClubId)}`, {
        method: "POST",
        headers: edgeHeaders(),
        body: JSON.stringify({
          paypal_enabled: values.paypal_enabled === "on",
          paypal_mode: values.paypal_mode,
          paypal_client_id: values.paypal_client_id,
          paypal_client_secret: values.paypal_client_secret,
          paypal_receiver_email: values.paypal_receiver_email,
          paypal_webhook_id: values.paypal_webhook_id
        })
      });
      const data = await response.json();
      if (!response.ok) {
        $("#paypalStatus").textContent = "PayPal-Fehler: " + (data.error || "Speichern fehlgeschlagen.");
        return;
      }
      paypalSettings = data;
      renderPaypalSettingsForm();
      renderCash();
      setStatus("PayPal-Konfiguration gespeichert.");
    }

    async function loadPaypalSdk() {
      if (!paypalConfigured()) throw new Error("PayPal ist fuer diesen Verein nicht aktiv.");
      const key = `${paypalSettings.paypal_client_id}:${paypalSettings.paypal_mode}`;
      if (window.paypal && paypalSdkKey === key) return;
      if (paypalLoading) return paypalLoading;
      delete window.paypal;
      paypalSdkKey = key;
      paypalLoading = new Promise((resolve, reject) => {
        const existing = $("#paypalSdkScript");
        if (existing) existing.remove();
        const script = document.createElement("script");
        script.id = "paypalSdkScript";
        script.src = `https://www.paypal.com/sdk/js?client-id=${encodeURIComponent(paypalSettings.paypal_client_id)}&currency=EUR&intent=capture`;
        script.onload = resolve;
        script.onerror = () => reject(new Error("PayPal SDK konnte nicht geladen werden."));
        document.head.appendChild(script);
      }).finally(() => { paypalLoading = null; });
      await paypalLoading;
    }

    function renderPaypalButtons() {
      if (!paypalConfigured()) return;
      $$(".paypal-box").forEach(async (box) => {
        if (box.dataset.rendered === "true") return;
        const penaltyId = box.dataset.penaltyId;
        const status = box.querySelector(".paypal-status");
        try {
          await loadPaypalSdk();
          box.dataset.rendered = "true";
          window.paypal.Buttons({
            style: { layout: "vertical", height: 38, tagline: false },
            createOrder: async () => {
              status.textContent = "PayPal-Order wird erstellt ...";
              const response = await fetch(edgeFunctionUrl(PAYPAL_CREATE_ORDER_FUNCTION), {
                method: "POST",
                headers: edgeHeaders(),
                body: JSON.stringify({ clubId: currentClubId, penaltyId })
              });
              const data = await response.json();
              if (!response.ok) throw new Error(data.error || "Order konnte nicht erstellt werden.");
              status.textContent = "PayPal geoeffnet ...";
              return data.id;
            },
            onApprove: async (data) => {
              status.textContent = "Zahlung wird bestaetigt ...";
              const response = await fetch(edgeFunctionUrl(PAYPAL_CAPTURE_ORDER_FUNCTION), {
                method: "POST",
                headers: edgeHeaders(),
                body: JSON.stringify({ clubId: currentClubId, penaltyId, orderId: data.orderID })
              });
              const result = await response.json();
              if (!response.ok) throw new Error(result.error || "Capture fehlgeschlagen.");
              status.textContent = "Bezahlt. Daten werden aktualisiert ...";
              await syncWithSupabase({ silent: true });
              render();
            },
            onCancel: () => {
              status.textContent = "Zahlung abgebrochen. Die Strafe bleibt offen.";
            },
            onError: (error) => {
              status.textContent = "PayPal-Fehler: " + (error.message || String(error));
            }
          }).render(box.querySelector(".paypal-button-host"));
        } catch (error) {
          status.textContent = "PayPal nicht verfuegbar: " + (error.message || String(error));
        }
      });
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
      renderLicenseBadge();
      applyPermissions();
      renderClubSelect();
      renderLoginUsers();
      renderClubDesignForm();
      renderPlayerCreateFormOptions();
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
      renderTacticBoard();
      renderFines();
      renderCash();
      renderFame();
      renderPolls();
      renderMessages();
      renderDashboard();
      renderNotificationBadges();
      renderPushPanel();
      renderPaypalSettingsForm();
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
      $$(".fame-player-only").forEach((el) => {
        el.style.display = canJoinHallOfFame() ? "" : "none";
      });
      $$(".nav button").forEach((button) => {
        button.hidden = !canAccess(button.dataset.minRole) || !licenseFeatureAllowed(button.dataset.view);
      });
      $("#exportBtn").hidden = !canManage() || licenseLimitsFeatures();

      const activeButton = $(".nav button.active:not([hidden])");
      if (!activeButton) {
        const firstAllowed = $(".nav button:not([hidden])");
        if (firstAllowed) switchView(firstAllowed.dataset.view);
      }
    }

    function renderLicenseBadge() {
      const badge = $("#licenseBadge");
      if (!badge) return;
      const club = currentClub();
      badge.textContent = licenseBadgeText(club);
      badge.classList.toggle("expired", licenseIsExpired(club));
      badge.classList.toggle("warning", !licenseIsExpired(club) && (licenseDaysLeft(club) ?? 99) <= LICENSE_WARNING_DAYS);
    }

    function renderClubSelect() {
      const visibleClubs = selectableClubs();
      if (visibleClubs.length && !visibleClubs.some((club) => club.id === currentClubId)) {
        currentClubId = visibleClubs[0].id;
        localStorage.setItem(CURRENT_CLUB_KEY, currentClubId);
      }
      const options = visibleClubs
        .map((club) => `<option value="${club.id}">${escapeHtml(club.name)}</option>`)
        .join("");
      const clubSelect = $("#clubSelect");
      if (clubSelect) {
        clubSelect.innerHTML = options;
        clubSelect.value = currentClubId;
      }
      renderLoginClubOptionsForUser();
    }

    function renderLoginClubOptionsForUser() {
      const select = $("#loginClubSelect");
      if (!select) return;
      const visibleClubs = selectableClubs();
      const selectedUser = $("#loginUser")?.value || loginPrefillFor().user;
      let allowedClubIds = new Set(visibleClubs.map((club) => club.id));
      if (loginDirectoryLoaded && selectedUser && !loginUserIsSuperadmin(selectedUser)) {
        allowedClubIds = new Set(loginDirectoryRowsForUser(selectedUser).map((row) => row.club_id));
      }
      const options = visibleClubs.filter((club) => allowedClubIds.has(club.id));
      const fallback = options.length ? options : visibleClubs.filter((club) => club.id === currentClubId);
      const loginClubs = fallback.length ? fallback : visibleClubs;
      select.innerHTML = loginClubs
        .map((club) => `<option value="${club.id}">${escapeHtml(club.name)}</option>`)
        .join("");
      if (!loginClubs.some((club) => club.id === currentClubId)) {
        currentClubId = loginClubs[0]?.id || currentClubId;
        localStorage.setItem(CURRENT_CLUB_KEY, currentClubId);
      }
      select.value = currentClubId;
    }

    function renderClubDesignForm() {
      const form = $("#clubDesignForm");
      if (!form) return;
      const club = currentClub();
      if (form.elements.league) form.elements.league.innerHTML = optionListWithEmpty(CLUB_LEAGUES, club.league || "");
      if (form.elements.federalState) form.elements.federalState.innerHTML = optionListWithEmpty(FEDERAL_STATES, club.federalState || "");
      form.elements.name.value = club.name;
      form.elements.color.value = normalizeHexColor(club.color || "#155e3b");
      form.elements.logoUrl.value = club.logo && !club.logo.startsWith("data:") ? club.logo : "";
      if (form.elements.licenseKey) form.elements.licenseKey.value = club.licenseKey || "";
      if (form.elements.licenseStatus) form.elements.licenseStatus.value = normalizeLicenseStatus(club.licenseStatus);
      if (form.elements.licenseActivatedAt) form.elements.licenseActivatedAt.value = formatLicenseDate(club.licenseActivatedAt);
      if (form.elements.licenseExpiresAt) form.elements.licenseExpiresAt.value = formatLicenseDate(club.licenseExpiresAt);
      if (form.elements.licenseAutoRenew) form.elements.licenseAutoRenew.checked = Boolean(club.licenseAutoRenew);
    }

    function renderPlayerCreateFormOptions() {
      const form = $("#playerForm");
      if (!form?.elements.nationality) return;
      const selected = form.elements.nationality.value || "";
      form.elements.nationality.innerHTML = nationalityOptions(selected);
    }

    function renderLoginUsers() {
      const selected = loginPrefillFor().user;
      const sourceNames = loginDirectoryLoaded && loginDirectory.length
        ? loginDirectory.map((row) => row.name)
        : state.players.filter((player) => !pendingIncomingTransfer(player)).map((player) => player.name);
      const names = [...new Set(sourceNames)]
        .sort((a, b) => a.localeCompare(b, "de"));
      $("#loginUser").innerHTML = names
        .map((name) => `<option value="${escapeAttr(name)}">${escapeHtml(name)}</option>`)
        .join("");
      $("#loginUser").value = names.includes(selected) ? selected : names[0] || "";
      renderLoginClubOptionsForUser();
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
      const roster = state.players.filter((player) => hasMemberRole(player, "Spieler") && !pendingIncomingTransfer(player));
      if (!roster.length) return empty(list, "Noch keine Spieler angelegt.");
      const query = ($("#playerSearch")?.value || "").trim().toLowerCase();
      const players = roster
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name, "de"))
        .filter((player) => !query || playerSearchText(player).includes(query));
      if (!players.length) return empty(list, "Kein Spieler passt zur Suche.");
      players
        .forEach((player) => {
          const isTemporaryGuest = activeIncomingTemporaryTransfer(player);
          list.appendChild(item(`
            <div class="item-head ${isTemporaryGuest ? "temporary-transfer" : ""}">
              <div class="player-summary">
                <div class="player-photo">${player.photo ? `<img src="${escapeAttr(player.photo)}" alt="${escapeAttr(player.name)}">` : escapeHtml(initials(player.name))}</div>
                <div>
                  <div class="player-title-row">
                    <p class="item-title">${player.jerseyNumber ? `<span class="chip">#${escapeHtml(player.jerseyNumber)}</span> ` : ""}${escapeHtml(player.name)}</p>
                    ${renderAvailabilityBadges(player)}
                  </div>
                  <div class="meta"><span>${escapeHtml(displayPosition(player))}</span>${captainRoleLabel(player.captainRole) ? `<span>${escapeHtml(captainRoleLabel(player.captainRole))}</span>` : ""}${player.birthDate ? `<span>Geb. ${escapeHtml(formatShortDate(player.birthDate))}</span>` : ""}${nationalityLabel(player.nationality) ? `<span>${escapeHtml(nationalityLabel(player.nationality))}</span>` : ""}<span>${escapeHtml(memberRoleLabels(player))}</span><span>${escapeHtml(player.role || "Spieler")}</span><span>${escapeHtml(player.memberSince ? `Im Verein seit ${formatShortDate(player.memberSince)}` : "Eintritt offen")}</span><span>${escapeHtml(player.phone || "Keine Telefonnummer")}</span></div>
                </div>
              </div>
              <span class="chip">${isTemporaryGuest ? "Temporaer" : escapeHtml(groupLabels(player))}</span>
            </div>
            ${isTemporaryGuest ? `<p class="meta transfer-note">Temporaer von ${escapeHtml(player.transfer.originClubName || "anderem Verein")} bis ${escapeHtml(formatShortDate(player.transfer.untilDate))}. Kann sich normal einloggen, aber hier nicht bearbeitet oder geloescht werden.</p>` : ""}
            ${renderAvailabilityLine(player)}
            ${(player.trainingFocusShort || player.trainingFocusLong) ? `<div class="meta"><span>Kurzfristig: ${escapeHtml(player.trainingFocusShort || "-")}</span><span>Langfristig: ${escapeHtml(player.trainingFocusLong || "-")}</span></div>` : ""}
            ${renderPlayerCalendarStats(player)}
            ${player.notes ? `<p class="meta">${escapeHtml(player.notes)}</p>` : ""}
            ${canManage() && !isTemporaryGuest ? renderPerformanceSummary(player) : ""}
            ${canManagePlayers() && !isTemporaryGuest ? `
              <div class="row-actions"><button class="mini" data-open-player="${escapeAttr(player.id)}">Spieler bearbeiten</button></div>
              ${canManage() ? `<div class="row-actions">
                <button class="mini no" data-delete-player="${escapeAttr(player.id)}">Entfernen</button>
              </div>` : ""}
            ` : ""}
            ${canManage() && isTemporaryGuest ? `<div class="row-actions"><button class="mini" data-return-transfer="${escapeAttr(player.id)}">Vorzeitig zurueckgeben</button></div>` : ""}
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
      updateEventFormState();
    }

    function visibleEventFields(type) {
      const fields = {
        Spiel: ["title", "date", "gameVenue", "location", "gameCategory", "meetingPoint", "time", "meetingTime", "remark"],
        Training: ["date", "time", "repeat", "repeatUntil", "location", "coach", "trainingFocus", "details", "remark"],
        Event: ["date", "time", "location", "remark"]
      };
      return new Set(fields[type] || fields.Training);
    }

    function eventFieldOrder(type) {
      return [...visibleEventFields(type)].reduce((order, field, index) => {
        order[field] = index + 1;
        return order;
      }, {});
    }

    function eventTypeForForm(type) {
      if (type === "Sonstiges") return "Event";
      return ["Training", "Spiel", "Event"].includes(type) ? type : "Event";
    }

    function updateEventTypeFields() {
      const form = $("#eventForm");
      if (!form) return;
      const type = eventTypeForForm(form.elements.type.value || "Training");
      const visibleFields = visibleEventFields(type);
      const fieldOrder = eventFieldOrder(type);
      const editing = Boolean(form.elements.namedItem("eventId").value);
      form.querySelectorAll("[data-event-field]").forEach((field) => {
        const name = field.dataset.eventField;
        const visible = visibleFields.has(name);
        field.hidden = !visible;
        field.style.order = visible ? fieldOrder[name] : "";
        field.querySelectorAll("input, select, textarea").forEach((input) => {
          input.disabled = !visible;
        });
      });
      form.querySelector(".row-actions").style.order = "99";
      const title = form.elements.title;
      const location = form.elements.location;
      if (title) {
        title.required = type === "Spiel";
        title.placeholder = type === "Spiel" ? "Gegner eintragen" : "";
      }
      if (location) {
        location.closest("[data-event-field]")?.querySelector("label")?.replaceChildren(type === "Spiel" ? "Adresse Sportplatz" : "Ort");
      }
      $("#eventFormTitle").textContent = editing ? `${type} bearbeiten` : `Neues ${type}`;
    }

    function eventValuesForSave(values) {
      const type = eventTypeForForm(values.type || "Training");
      return {
        type,
        title: type === "Spiel" ? (values.title || "Spiel") : type,
        date: values.date,
        time: values.time,
        location: values.location || "",
        gameVenue: type === "Spiel" ? (values.gameVenue || "home") : "",
        gameCategory: type === "Spiel" ? (values.gameCategory || "Punktspiel") : "",
        meetingPoint: type === "Spiel" ? (values.meetingPoint || "") : "",
        meetingTime: type === "Spiel" ? (values.meetingTime || "") : "",
        details: type === "Training" ? (values.details || "") : "",
        coach: type === "Training" ? (values.coach || "") : "",
        trainingFocus: type === "Training" ? (values.trainingFocus || "") : "",
        remark: values.remark || "",
        repeat: type === "Training" ? (values.repeat || "") : "",
        repeatUntil: type === "Training" ? (values.repeatUntil || "") : ""
      };
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
      if (typeof raw === "string") return { status: raw, updatedAt: "", fine: 0, reason: "", noShow: false, noShowAt: "", noShowBy: "", paid: false, paidAt: "", paidComment: "", transport: "" };
      return {
        status: raw.status || "yes",
        updatedAt: raw.updatedAt || "",
        fine: Number(raw.fine || 0),
        reason: raw.reason || "",
        noShow: Boolean(raw.noShow),
        noShowAt: raw.noShowAt || "",
        noShowBy: raw.noShowBy || "",
        paid: Boolean(raw.paid),
        paidAt: raw.paidAt || "",
        paidComment: raw.paidComment || "",
        transport: raw.transport || ""
      };
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
      if (record?.noShow) return "no";
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
      return calendarMode === "month" ? currentMonthRange() : currentWeekRange();
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
      return calendarMode === "month" ? monthLabel() : weekLabel();
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
      const absent = [];
      players.forEach((player) => {
        const record = rsvpRecord(event, player.name);
        const unavailable = playerUnavailableForEvent(player, event);
        const status = effectiveRsvp(event, player);
        const entry = {
          name: player.name,
          reason: record?.reason || (unavailable ? "Status: nicht verfuegbar" : ""),
          explicit: Boolean(record),
          noShow: Boolean(record?.noShow),
          noShowBy: record?.noShowBy || "",
          fine: Number(record?.fine || 0),
          transport: record?.transport || ""
        };
        if (entry.noShow) absent.push(entry);
        else if (status === "no") no.push(entry);
        else yes.push(entry);
      });
      return { yes, no, absent };
    }

    function renderRsvpDetails(event) {
      const details = rsvpDetails(event);
      const yesItems = details.yes.map((entry) => `<span class="attendee yes ${transportClass(entry.transport)}">${escapeHtml(entry.name)}${entry.explicit ? "" : " (automatisch)"}${entry.transport ? ` - ${escapeHtml(transportLabel(entry.transport))}` : ""}${canManage() ? `<button class="attendee-x" type="button" data-mark-noshow="${escapeAttr(event.id)}" data-player="${escapeAttr(entry.name)}" title="Angemeldet, aber nicht da">x</button>` : ""}</span>`).join("");
      const noItems = details.no.map((entry) => `<span class="attendee no">${escapeHtml(entry.name)}${entry.reason ? ` - ${escapeHtml(entry.reason)}` : ""}</span>`).join("");
      const absentItems = details.absent.map((entry) => `<span class="attendee absent">${escapeHtml(entry.name)}${canManage() ? `<button class="attendee-x undo" type="button" data-clear-noshow="${escapeAttr(event.id)}" data-player="${escapeAttr(entry.name)}" title="Markierung entfernen">undo</button>` : ""}</span>`).join("");
      return `
        <div class="attendance-panel">
          <div>
            <strong>Zusagen (${details.yes.length})</strong>
            <div class="attendee-list">${yesItems || "<span class=\"meta\">Keine Zusagen.</span>"}</div>
            ${renderTransportLegend(event)}
          </div>
          <div>
            <strong>Absagen (${details.no.length})</strong>
            <div class="attendee-list">${noItems || "<span class=\"meta\">Keine Absagen.</span>"}</div>
          </div>
          <div>
            <strong>Angemeldet, nicht da (${details.absent.length})</strong>
            <div class="attendee-list">${absentItems || "<span class=\"meta\">Keine Eintraege.</span>"}</div>
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
      weekLabelEl.textContent = calendarLabel();
      grid.innerHTML = "";
      grid.classList.toggle("month-mode", calendarMode === "month");
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
      const start = calendarMode === "month" ? weekStart(monthRange.start) : weekStart(calendarDate);
      const dayCount = calendarMode === "month"
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
          calendarMode === "month" && !dateInPeriod(dateStr, monthRange.start, monthRange.end) ? "outside" : "",
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
      if (event.type === "Spiel" && event.gameVenue) items.push(event.gameVenue === "away" ? "Auswaertsspiel" : "Heimspiel");
      if (event.type === "Spiel" && event.gameCategory) items.push(event.gameCategory);
      if (event.type === "Spiel" && event.meetingPoint) items.push(`Treffpunkt Ort: ${event.meetingPoint}`);
      if (event.type === "Spiel" && event.meetingTime) items.push(`Treffpunkt vor Ort: ${event.meetingTime}`);
      if (event.type === "Training" && event.coach) items.push(`Trainer: ${event.coach}`);
      if (event.type === "Training" && event.focus) items.push(`Schwerpunkt: ${event.focus}`);
      if (event.remark) items.push(`Bemerkung: ${event.remark}`);
      return items.length ? `<div class="meta">${items.map((text) => `<span>${escapeHtml(text)}</span>`).join("")}</div>` : "";
    }

    function isAwayGame(event) {
      return event.type === "Spiel" && event.gameVenue === "away";
    }

    function transportLabel(value) {
      return {
        self: "Selbstfahrer",
        offer: "Fahrer",
        passenger: "Mitfahrer"
      }[value] || "";
    }

    function transportClass(value) {
      return {
        self: "transport-self",
        offer: "transport-offer",
        passenger: "transport-passenger"
      }[value] || "";
    }

    function renderTransportLegend(event) {
      if (!isAwayGame(event)) return "";
      return `
        <div class="transport-legend" aria-label="Fahrten-Legende">
          <span><i class="legend-dot transport-self"></i>Selbstfahrer</span>
          <span><i class="legend-dot transport-offer"></i>Fahrer</span>
          <span><i class="legend-dot transport-passenger"></i>Mitfahrer</span>
        </div>
      `;
    }

    function renderTransportControls(event, player, record) {
      if (!isAwayGame(event) || !player || !hasMemberRole(player, "Spieler")) return "";
      const current = record?.transport || "";
      const options = [
        ["self", "Selbstfahrer"],
        ["offer", "Biete Mitfahrgelegenheit"],
        ["passenger", "Mitfahrer"]
      ];
      return `
        <div class="transport-panel">
          <strong>Fahrt zum Auswaertsspiel</strong>
          <div class="row-actions">
            ${options.map(([value, label]) => `<button class="mini ${current === value ? "yes" : ""}" type="button" data-transport="${escapeAttr(event.id)}" data-transport-value="${value}">${label}</button>`).join("")}
          </div>
          ${current ? `<p class="meta">Aktuell: ${escapeHtml(transportLabel(current))}</p>` : `<p class="meta">Bitte Fahrstatus auswaehlen.</p>`}
        </div>
      `;
    }

    function renderEvents() {
      const list = $("#eventList");
      list.innerHTML = "";
      const events = visibleCalendarEvents();
      if (!events.length) return empty(list, calendarMode === "month" ? "Keine Termine in diesem Monat." : "Keine Termine in dieser Woche.");
      events
        .forEach((event) => {
          const attendance = rsvpDetails(event);
          const yes = attendance.yes.length;
          const no = attendance.no.length;
          const absent = attendance.absent.length;
          const player = playerByName(activeUser());
          const myStatus = player && hasMemberRole(player, "Spieler") ? effectiveRsvp(event, player) : "none";
          const myRecord = player ? rsvpRecord(event, player.name) : null;
          const deadline = eventSupportsRsvp(event) ? eventDeadline(event).toLocaleString("de-DE", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" }) : "";
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
            ${eventSupportsRsvp(event) ? `<div class="meta"><span>${yes} Zusagen</span><span>${no} Absagen</span>${absent ? `<span>${absent} nicht da</span>` : ""}<span>Absagefrist: ${deadline}</span></div>` : ""}
            <div class="row-actions">
              ${eventSupportsRsvp(event) && player && hasMemberRole(player, "Spieler") ? `
                <button class="mini yes" data-rsvp="${event.id}" data-status="yes" ${myStatus === "yes" ? "disabled" : ""}>Zusage</button>
                <button class="mini no" data-rsvp="${event.id}" data-status="no">Absage</button>
              ` : ""}
              ${eventSupportsRsvp(event) ? `<button class="mini" data-toggle-event-details="${event.id}">${expanded ? "Teilnehmer ausblenden" : "Teilnehmer anzeigen"}</button>` : ""}
              ${canManage() ? `<button class="mini" data-edit-event="${escapeAttr(event.id)}">Bearbeiten</button>` : ""}
              ${canManage() ? `<button class="mini no" data-delete-event="${escapeAttr(event.id)}">Loeschen</button>` : ""}
            </div>
            ${myStatus === "yes" ? renderTransportControls(event, player, myRecord) : ""}
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
        .filter((entry) => entry.approved && playerNameKey(entry.player) === playerNameKey(player.name))
        .forEach((entry) => entries.push({
          id: entry.id,
          type: "self",
          date: entry.date,
          title: "Eigenes Training",
          text: entry.note || "Training mit Bildnachweis",
          proof: entry.proof,
          createdBy: entry.approvedBy ? `bestaetigt von ${entry.approvedBy}` : "",
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

    function pendingSelfTrainingsForPlayer(playerName) {
      return (state.hallOfFame?.selfTrainings || [])
        .filter((entry) => !entry.approved && playerNameKey(entry.player) === playerNameKey(playerName))
        .sort((a, b) => `${b.date}${b.createdAt}`.localeCompare(`${a.date}${a.createdAt}`));
    }

    function fameRows() {
      return rosterPlayers()
        .map((player) => {
          const entries = fameEntriesForPlayer(player);
          const transportStats = transportStatsForPlayer(player);
          const trainingPoints = entries
            .filter((entry) => entry.type === "training" || entry.type === "self")
            .reduce((sum, entry) => sum + Number(entry.points || 0), 0);
          const gamePoints = entries
            .filter((entry) => entry.type === "squad")
            .reduce((sum, entry) => sum + Number(entry.points || 0), 0);
          const bonusPoints = entries
            .filter((entry) => entry.type === "bonus")
            .reduce((sum, entry) => sum + Number(entry.points || 0), 0);
          return {
            player,
            entries,
            trainingPoints,
            gamePoints,
            bonusPoints,
            transportStats,
            total: trainingPoints + gamePoints + bonusPoints
          };
        })
        .sort((a, b) => b.total - a.total || a.player.name.localeCompare(b.player.name, "de"));
    }

    function transportStatsForPlayer(player) {
      const now = new Date();
      return state.events.reduce((stats, event) => {
        if (!isAwayGame(event) || eventDateTime(event) > now) return stats;
        const record = rsvpRecord(event, player.name);
        if (record?.transport === "self") stats.self += 1;
        if (record?.transport === "offer") stats.offer += 1;
        if (record?.transport === "passenger") stats.passenger += 1;
        return stats;
      }, { self: 0, offer: 0, passenger: 0 });
    }

    function transportStatsText(stats) {
      return `S:${stats.self} B:${stats.offer} M:${stats.passenger}`;
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
      return canJoinHallOfFame(name) && (canManage() || playerNameKey(name) === playerNameKey(activeUser()));
    }

    function renderSelfTrainingApprovals() {
      const list = $("#selfTrainingApprovalList");
      if (!list) return;
      list.innerHTML = "";
      const pending = (state.hallOfFame?.selfTrainings || [])
        .filter((entry) => !entry.approved)
        .sort((a, b) => `${b.date}${b.createdAt}`.localeCompare(`${a.date}${a.createdAt}`));
      if (!pending.length) return empty(list, "Keine offenen Eigentrainings.");
      pending.forEach((entry) => list.appendChild(item(`
        <div class="item-head">
          <div>
            <p class="item-title">${escapeHtml(entry.player)}</p>
            <div class="meta"><span>${formatShortDate(entry.date)}</span><span>${escapeHtml(entry.note || "Ohne Bemerkung")}</span></div>
          </div>
          <span class="chip">offen</span>
        </div>
        ${entry.proof ? `<img class="proof-image" src="${escapeAttr(entry.proof)}" alt="Bildnachweis eigenes Training">` : ""}
        <div class="row-actions">
          <button class="mini yes" data-approve-self-training="${escapeAttr(entry.id)}">Bestaetigen</button>
          <button class="mini no" data-delete-self-training="${escapeAttr(entry.id)}">Entfernen</button>
        </div>
      `)));
    }

    function renderFame() {
      const ranking = $("#fameRanking");
      const details = $("#fameDetails");
      if (!ranking || !details) return;
      renderFameForm();
      renderSelfTrainingApprovals();
      const rows = fameRows();
      const activeName = activeUser();
      if (!canManage() && canJoinHallOfFame(activeName)) selectedFamePlayer = activeName;
      if (!selectedFamePlayer || !rows.some((row) => playerNameKey(row.player.name) === playerNameKey(selectedFamePlayer))) {
        selectedFamePlayer = canJoinHallOfFame(activeName) && rows.some((row) => playerNameKey(row.player.name) === playerNameKey(activeName)) ? activeName : rows[0]?.player.name || "";
      }

      ranking.innerHTML = "";
      if (!rows.length) {
        ranking.innerHTML = `<tr><td colspan="7">Noch keine Spieler vorhanden.</td></tr>`;
      }
      rows.forEach((row, index) => {
        const selected = playerNameKey(row.player.name) === playerNameKey(selectedFamePlayer);
        const tr = document.createElement("tr");
        tr.className = selected ? "selected" : "";
        tr.dataset.famePlayer = row.player.name;
        tr.innerHTML = `
          <td>${index + 1}</td>
          <td><button class="link-button" type="button" data-fame-player="${escapeAttr(row.player.name)}">${escapeHtml(row.player.name)}</button></td>
          <td>${row.trainingPoints}</td>
          <td>${row.gamePoints}</td>
          <td>${row.bonusPoints}</td>
          <td><span title="Selbstfahrer / bietet Plaetze / Mitfahrer">${transportStatsText(row.transportStats)}</span></td>
          <td><strong>${row.total}</strong></td>
        `;
        ranking.appendChild(tr);
      });

      const selectedRow = rows.find((row) => playerNameKey(row.player.name) === playerNameKey(selectedFamePlayer));
      const selectedIsMe = selectedRow && playerNameKey(selectedRow.player.name) === playerNameKey(activeName);
      $("#fameDetailTitle").textContent = selectedRow && canManage() && !selectedIsMe ? `Details: ${selectedRow.player.name}` : "Details meiner Punkte";
      details.innerHTML = "";
      if (!selectedRow) return empty(details, "Bitte einen Spieler auswaehlen.");
      if (!canViewFameDetails(selectedRow.player.name)) {
        return empty(details, "Details sind nur fuer den eigenen Namen sichtbar.");
      }
      const pendingOwn = pendingSelfTrainingsForPlayer(selectedRow.player.name);
      details.appendChild(item(`
        <div class="item-head">
          <div>
            <p class="item-title">Auswaertsfahrten</p>
            <div class="meta">
              <span>Selbstfahrer: ${selectedRow.transportStats.self}</span>
              <span>Bietet Mitfahrgelegenheit: ${selectedRow.transportStats.offer}</span>
              <span>Mitfahrer: ${selectedRow.transportStats.passenger}</span>
            </div>
          </div>
          <span class="chip">${transportStatsText(selectedRow.transportStats)}</span>
        </div>
      `));
      if (!selectedRow.entries.length && !pendingOwn.length) return empty(details, "Noch keine Punkte vorhanden.");
      pendingOwn.forEach((entry) => {
        details.appendChild(item(`
          <div class="item-head">
            <div>
              <p class="item-title">Eigenes Training</p>
              <div class="meta"><span>${formatShortDate(entry.date)}</span><span>${escapeHtml(entry.note || "Training mit Bildnachweis")}</span></div>
            </div>
            <span class="chip">wartet</span>
          </div>
          ${entry.proof ? `<img class="proof-image" src="${escapeAttr(entry.proof)}" alt="Bildnachweis eigenes Training">` : ""}
          ${canAwardFamePoints() ? `<div class="row-actions"><button class="mini yes" data-approve-self-training="${escapeAttr(entry.id)}">Bestaetigen</button><button class="mini no" data-delete-self-training="${escapeAttr(entry.id)}">Entfernen</button></div>` : ""}
        `));
      });
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
          ${canAwardFamePoints() && entry.type === "self" ? `<div class="row-actions"><button class="mini no" data-delete-self-training="${escapeAttr(entry.id)}">Eigentraining entfernen</button></div>` : ""}
          ${canAwardFamePoints() && entry.type === "bonus" ? `<div class="row-actions"><button class="mini no" data-delete-bonus-point="${escapeAttr(entry.id)}">Sonderpunkte entfernen</button></div>` : ""}
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
        paidAt: fine.paidAt || "",
        paidComment: fine.paidComment || "",
        paymentStatus: fine.paymentStatus || (fine.paid ? "paid" : "open"),
        paypalOrderId: fine.paypalOrderId || "",
        paypalCaptureId: fine.paypalCaptureId || ""
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
            label: `${record.noShow ? "Angemeldet, nicht da" : "Spaete Absage"}: ${event.title}`,
            amount: Number(record.fine || 0),
            date: (record.updatedAt || event.date).slice(0, 10),
            note: `${event.type} am ${formatDate(event.date, event.time)}`,
            createdBy: record.noShowBy || "Kalender",
            paid: Boolean(record.paid),
            paidAt: record.paidAt || "",
            paidComment: record.paidComment || "",
            paymentStatus: record.paymentStatus || (record.paid ? "paid" : "open"),
            paypalOrderId: record.paypalOrderId || "",
            paypalCaptureId: record.paypalCaptureId || ""
          });
        });
      });
      return [...manual, ...automatic].sort((a, b) => `${b.date}${b.label}`.localeCompare(`${a.date}${a.label}`));
    }

    function renderCash() {
      if (!$("#cashTotal")) return;
      const allRows = allFineRows();
      const personalView = !canManageCash();
      const rows = personalView
        ? allRows.filter((fine) => playerNameKey(fine.player) === playerNameKey(activeUser()))
        : allRows;
      const total = rows.reduce((sum, fine) => sum + fine.amount, 0);
      const paid = rows.filter((fine) => fine.paid).reduce((sum, fine) => sum + fine.amount, 0);
      const open = total - paid;
      $("#cashTotal").textContent = formatCurrency(total);
      $("#cashPaid").textContent = formatCurrency(paid);
      $("#cashOpen").textContent = formatCurrency(open);
      $("#cashTotalLabel").textContent = personalView ? "Meine Betraege EUR" : "Kassenstand EUR";
      $("#cashPaidLabel").textContent = personalView ? "Von mir bezahlt EUR" : "Bezahlt EUR";
      $("#cashOpenLabel").textContent = personalView ? "Von mir offen EUR" : "Offen EUR";
      $("#cashOpenTitle").textContent = personalView ? "Meine offenen Betraege" : "Noch nicht bezahlt";
      $("#cashFineTitle").textContent = personalView ? "Meine bezahlten Betraege" : "Alle Kassenbewegungen";
      renderCashForm();
      renderDonationForm();
      renderFineRows($("#cashOpenList"), rows.filter((fine) => !fine.paid), "Keine offenen Betraege.");
      renderFineRows($("#cashFineList"), personalView ? rows.filter((fine) => fine.paid) : rows, personalView ? "Noch keine bezahlten Betraege." : "Noch keine Kassenbewegungen.");
      renderFineCatalog();
      renderPaypalButtons();
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
      if (selected && !amountInput.value) amountInput.value = selected.amount;
    }

    function renderFineRows(container, rows, emptyText) {
      if (!container) return;
      container.innerHTML = "";
      if (!rows.length) return empty(container, emptyText);
      rows.forEach((fine) => {
        const paidInfo = fine.paid
          ? `<div class="meta"><span>Bezahlt am ${fine.paidAt ? new Date(fine.paidAt).toLocaleString("de-DE") : "unbekannt"}</span>${fine.paidComment ? `<span>Kommentar: ${escapeHtml(fine.paidComment)}</span>` : ""}${fine.paypalCaptureId ? `<span>PayPal: ${escapeHtml(fine.paypalCaptureId)}</span>` : ""}</div>`
          : "";
        const paypalBox = !fine.paid && !fine.penalty && Number(fine.amount || 0) > 0 && paypalConfigured()
          ? `<div class="paypal-box" data-penalty-id="${escapeAttr(fine.id)}">
              <div class="paypal-button-host"></div>
              <div class="paypal-status">Bereit fuer PayPal-Zahlung.</div>
            </div>`
          : "";
        container.appendChild(item(`
          <div class="item-head">
            <div>
              <p class="item-title">${escapeHtml(fine.player)}</p>
              <div class="meta"><span>${escapeHtml(fine.label)}</span><span>${formatShortDate(fine.date)}</span><span>${escapeHtml(fine.createdBy || "")}</span>${fine.note ? `<span>${escapeHtml(fine.note)}</span>` : ""}</div>
              ${paidInfo}
            </div>
            <div class="row-actions">
              ${fine.paid ? `<span class="paid-check" title="Bezahlt bestaetigt">&#10003;</span>` : ""}
              <span class="chip ${fine.paid ? "blue" : "red"}">${fine.penalty ? escapeHtml(fine.penalty) : `${formatCurrency(fine.amount)} EUR`}</span>
            </div>
          </div>
          ${paypalBox}
          ${canManage() ? `<div class="row-actions">
            <button class="mini ${fine.paid ? "" : "yes"}" data-toggle-fine="${escapeAttr(fine.id)}">${fine.paid ? "Als offen markieren" : "Bezahlt bestaetigen"}</button>
            ${fine.source === "manual" ? `<button class="mini" data-edit-cash-fine="${escapeAttr(fine.id)}">Bearbeiten</button><button class="mini no" data-delete-cash-fine="${escapeAttr(fine.id)}">Entfernen</button>` : ""}
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
            <button class="mini no" data-delete-catalog-fine="${escapeAttr(fine.id)}">Entfernen</button>
          </div>
        `));
      });
    }

    function fineCatalogById(id) {
      return (state.fineCatalog || []).find((fine) => fine.id === id);
    }

    function toggleFinePaid(id) {
      let paidComment = "";
      if (id.includes("::")) {
        const [eventId, name] = id.split("::");
        const event = state.events.find((item) => item.id === eventId);
        const record = event ? rsvpRecord(event, name) : null;
        if (!event || !record) return;
        const paid = !record.paid;
        if (paid) paidComment = window.prompt("Kommentar zur Zahlung (optional):", record.paidComment || "") || "";
        event.rsvps[name] = {
          ...record,
          paid,
          paidAt: paid ? new Date().toISOString() : "",
          paidComment: paid ? paidComment : "",
          paymentStatus: paid ? "paid" : "open",
          paypalOrderId: paid ? record.paypalOrderId || "" : "",
          paypalCaptureId: paid ? record.paypalCaptureId || "" : ""
        };
        return;
      }
      const fine = (state.cashFines || []).find((item) => item.id === id);
      if (!fine) return;
      const paid = !fine.paid;
      if (paid) paidComment = window.prompt("Kommentar zur Zahlung (optional):", fine.paidComment || "") || "";
      fine.paid = paid;
      fine.paidAt = fine.paid ? new Date().toISOString() : "";
      fine.paidComment = fine.paid ? paidComment : "";
      fine.paymentStatus = fine.paid ? "paid" : "open";
      if (!fine.paid) {
        fine.paypalOrderId = "";
        fine.paypalCaptureId = "";
      }
    }

    function renderCashFineEditPlayers(selected = "") {
      const select = $("#cashFineEditPlayer");
      if (!select) return;
      const names = rosterPlayers().map((player) => player.name).sort((a, b) => a.localeCompare(b, "de"));
      select.innerHTML = names.map((name) => `<option value="${escapeAttr(name)}">${escapeHtml(name)}</option>`).join("");
      select.value = names.includes(selected) ? selected : names[0] || "";
    }

    function openCashFineModal(id) {
      const fine = (state.cashFines || []).find((item) => item.id === id);
      if (!fine || !canManage()) return;
      const form = $("#cashFineEditForm");
      renderCashFineEditPlayers(fine.player);
      form.elements.id.value = fine.id;
      form.elements.player.value = fine.player;
      form.elements.label.value = fine.label;
      form.elements.amount.value = fine.amount;
      form.elements.date.value = fine.date;
      form.elements.note.value = fine.note || "";
      form.elements.paid.checked = Boolean(fine.paid);
      $("#cashFineModal").classList.add("open");
      $("#cashFineModal").setAttribute("aria-hidden", "false");
    }

    function closeCashFineModal() {
      $("#cashFineModal").classList.remove("open");
      $("#cashFineModal").setAttribute("aria-hidden", "true");
      $("#cashFineEditForm").reset();
    }

    function markNoShow(eventId, playerName) {
      const eventItem = state.events.find((item) => item.id === eventId);
      if (!eventItem || !canManage()) return;
      const player = playerByName(playerName);
      if (!player || !hasMemberRole(player, "Spieler")) return;
      const oldRecord = rsvpRecord(eventItem, player.name) || { status: "yes", fine: 0, reason: "" };
      const reason = window.prompt("Bemerkung fuer nicht erschienen:", oldRecord.reason || "Angemeldet, nicht da");
      if (reason === null) return;
      let fine = 0;
      if (window.confirm("Soll eine Strafe wegen unabgemeldet/nicht erschienen erfasst werden?")) {
        const amountText = window.prompt("Betrag EUR:", String(oldRecord.fine || 10));
        if (amountText === null) return;
        fine = Number(String(amountText).replace(",", ".") || 0);
        if (Number.isNaN(fine) || fine < 0) {
          window.alert("Bitte einen gueltigen Betrag eingeben.");
          return;
        }
      }
      eventItem.rsvps = eventItem.rsvps || {};
      eventItem.rsvps[player.name] = {
        ...oldRecord,
        status: "yes",
        updatedAt: new Date().toISOString(),
        reason: reason.trim() || "Angemeldet, nicht da",
        noShow: true,
        noShowAt: new Date().toISOString(),
        noShowBy: activeUser(),
        fine,
        paid: fine > 0 ? Boolean(oldRecord.paid) : false,
        paidAt: fine > 0 ? oldRecord.paidAt || "" : ""
      };
      setStatus(`${player.name} wurde als nicht erschienen markiert.`);
    }

    function clearNoShow(eventId, playerName) {
      const eventItem = state.events.find((item) => item.id === eventId);
      if (!eventItem || !canManage()) return;
      const oldRecord = rsvpRecord(eventItem, playerName);
      if (!oldRecord) return;
      eventItem.rsvps[playerName] = {
        ...oldRecord,
        status: "yes",
        updatedAt: new Date().toISOString(),
        reason: "",
        noShow: false,
        noShowAt: "",
        noShowBy: "",
        fine: 0,
        paid: false,
        paidAt: ""
      };
      setStatus(`No-Show-Markierung fuer ${playerName} entfernt.`);
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
      feed.className = `message-feed ${MESSAGE_GROUP_CLASSES[group] || ""}`.trim();
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
          bubble.className = `bubble ${MESSAGE_GROUP_CLASSES[group] || ""}${message.author === activeUser() ? " mine" : ""}`;
          bubble.innerHTML = `<strong>${escapeHtml(message.author)} <span class="meta">${new Date(message.createdAt).toLocaleString("de-DE")}</span></strong><p>${escapeHtml(message.body)}</p>`;
          feed.appendChild(bubble);
        });
      scrollMessagesToBottom();
    }

    function scrollMessagesToBottom() {
      const feed = $("#messageFeed");
      if (!feed) return;
      requestAnimationFrame(() => {
        feed.scrollTop = feed.scrollHeight;
      });
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

    function nationalityOptions(selected) {
      return [
        ["", "", "Keine Angabe"],
        ...NATIONALITIES
      ].map(([code, flag, label]) => `<option value="${escapeAttr(code)}" ${code === selected ? "selected" : ""}>${escapeHtml(`${flag ? `${flag} ` : ""}${label}`)}</option>`).join("");
    }

    function nationalityLabel(code) {
      const country = NATIONALITIES.find(([value]) => value === code);
      return country ? `${country[1]} ${country[2]}` : "";
    }

    function captainRoleOptions(selected) {
      return [
        ["", "Keine"],
        ["captain", "Kapitän"],
        ["deputy1", "Stellv. Kapitän 1"],
        ["deputy2", "Stellv. Kapitän 2"],
        ["deputy3", "Stellv. Kapitän 3"]
      ].map(([value, label]) => `<option value="${escapeAttr(value)}" ${value === selected ? "selected" : ""}>${escapeHtml(label)}</option>`).join("");
    }

    function captainRoleLabel(value) {
      return {
        captain: "Kapitän",
        deputy1: "Stellv. Kapitän 1",
        deputy2: "Stellv. Kapitän 2",
        deputy3: "Stellv. Kapitän 3"
      }[value] || "";
    }

    function enforceCaptainRole(playerId, role) {
      if (!role) return;
      state.players.forEach((player) => {
        if (player.id !== playerId && player.captainRole === role) player.captainRole = "";
      });
    }

    function optionListWithEmpty(options, selected) {
      return optionList(["", ...options], selected || "");
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
      const roles = isSuperadmin() ? ["Spieler", "Admin", "Superadmin"] : ["Spieler", "Admin"];
      return optionList(roles, sanitizeRole(selected));
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
        player.jerseyNumber,
        player.birthDate,
        nationalityLabel(player.nationality),
        player.memberSince,
        captainRoleLabel(player.captainRole),
        player.trainingFocusShort,
        player.trainingFocusLong,
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

    function renderTransferControls(player) {
      const targets = clubs
        .filter((club) => club.id !== currentClubId && normalizeLicenseStatus(club.licenseStatus) !== "blocked")
        .sort((a, b) => a.name.localeCompare(b.name, "de"));
      if (!targets.length) {
        return `<div class="field full"><p class="meta">Kein weiterer Verein fuer eine Uebergabe vorhanden.</p></div>`;
      }
      const today = new Date().toISOString().slice(0, 10);
      const options = targets.map((club) => `<option value="${escapeAttr(club.name)}">${escapeHtml(club.name)}</option>`).join("");
      const temporaryClass = transferWarningActive(player) ? "btn-danger" : "btn-secondary";
      return `
        <details class="form-details field full transfer-box">
          <summary>Spieler an anderen Verein uebergeben</summary>
          <div class="form-grid">
            <div class="field full"><p class="meta">${escapeHtml(transferHistoryText(player))}</p></div>
            <div class="field full">
              <label>Zielverein suchen</label>
              <input name="transferClubName" list="transferClubOptions" placeholder="Verein eingeben">
              <datalist id="transferClubOptions">${options}</datalist>
            </div>
            <div class="field"><label>Dauerhaft ab Datum</label><input name="transferFromDate" type="date" value="${today}"></div>
            <div class="field"><label>Temporaer bis Datum</label><input name="transferUntilDate" type="date"></div>
            <div class="field full row-actions">
              <button class="btn-secondary" id="transferPermanentBtn" type="button">Dauerhaft uebergeben</button>
              <button class="${temporaryClass}" id="transferTemporaryBtn" type="button">Wechsel temporaer</button>
            </div>
          </div>
        </details>
      `;
    }

    function editablePeopleForModal(player) {
      const isRosterPlayer = hasMemberRole(player, "Spieler");
      return state.players
        .filter((item) => !pendingIncomingTransfer(item) && !activeIncomingTemporaryTransfer(item))
        .filter((item) => hasMemberRole(item, "Spieler") === isRosterPlayer)
        .sort((a, b) => a.name.localeCompare(b.name, "de"));
    }

    function updatePlayerModalNavigation(player) {
      const people = editablePeopleForModal(player);
      const index = people.findIndex((item) => item.id === player.id);
      const hasNavigation = people.length > 1 && index >= 0;
      const prev = hasNavigation ? people[(index - 1 + people.length) % people.length] : null;
      const next = hasNavigation ? people[(index + 1) % people.length] : null;
      const prevButton = $("#prevPlayerBtn");
      const nextButton = $("#nextPlayerBtn");
      if (prevButton) {
        prevButton.disabled = !prev;
        prevButton.dataset.playerNav = prev?.id || "";
      }
      if (nextButton) {
        nextButton.disabled = !next;
        nextButton.dataset.playerNav = next?.id || "";
      }
      const saveButton = $("#savePlayerModalBtn");
      if (saveButton) saveButton.hidden = activeIncomingTemporaryTransfer(player);
    }

    function openPlayerModal(playerId) {
      const player = state.players.find((item) => item.id === playerId);
      if (!player || !canManagePlayers()) return;
      const isRosterPlayer = hasMemberRole(player, "Spieler");
      const fullAccess = canManage();
      $("#playerModalTitle").textContent = `${player.name} bearbeiten`;
      updatePlayerModalNavigation(player);
      if (activeIncomingTemporaryTransfer(player)) {
        $("#playerEditForm").innerHTML = `
          <input type="hidden" name="id" value="${escapeAttr(player.id)}">
          <div class="field full">
            <p class="meta">${escapeHtml(player.name)} ist temporaer von ${escapeHtml(player.transfer.originClubName || "einem anderen Verein")} uebernommen bis ${escapeHtml(formatShortDate(player.transfer.untilDate))}.</p>
            <p class="meta">Der Spieler kann hier nicht bearbeitet oder geloescht werden.</p>
          </div>
          <div class="field full"><button class="btn-primary" id="returnTemporaryTransferBtn" type="button">Vorzeitig zurueckgeben</button></div>
        `;
        $("#playerModal").classList.add("open");
        $("#playerModal").setAttribute("aria-hidden", "false");
        return;
      }
      $("#playerEditForm").innerHTML = `
        <input type="hidden" name="id" value="${escapeAttr(player.id)}">
        <div class="player-tabs">
          <button class="mini active" type="button" data-player-tab="general">Allgemein</button>
          <button class="mini" type="button" data-player-tab="details">Details</button>
          ${isRosterPlayer && fullAccess ? `<button class="mini" type="button" data-player-tab="performance">Leistungsdaten</button>` : ""}
        </div>
        <div class="player-tab-panel form-grid active" data-player-tab-panel="general">
        <div class="field"><label>Name</label><input name="name" value="${escapeAttr(player.name)}" required></div>
        ${isRosterPlayer ? `<div class="field"><label>Position</label><select name="position">${positionOptions(player.position)}</select></div>` : ""}
        ${isRosterPlayer ? `<div class="field"><label>Rueckennummer</label><input name="jerseyNumber" type="number" min="0" max="999" value="${escapeAttr(player.jerseyNumber || "")}" inputmode="numeric"></div>` : ""}
        ${isRosterPlayer ? `<div class="field"><label>Geboren am</label><input name="birthDate" type="date" value="${escapeAttr(player.birthDate || "")}"></div>` : ""}
        ${isRosterPlayer ? `<div class="field"><label>Nationalitaet</label><select name="nationality">${nationalityOptions(player.nationality || "")}</select></div>` : ""}
        <div class="field"><label>Telefon</label><input name="phone" value="${escapeAttr(player.phone || "")}" inputmode="tel"></div>
        <div class="field"><label>Im Verein seit</label><input name="memberSince" type="date" value="${escapeAttr(player.memberSince || "")}"></div>
        ${isRosterPlayer && fullAccess ? `<div class="field"><label>Kapitänsrolle</label><select name="captainRole">${captainRoleOptions(player.captainRole || "")}</select></div>` : ""}
        ${fullAccess ? `<div class="field"><label>Berechtigung</label><select name="role">${roleOptions(player.role || "Spieler")}</select></div>` : ""}
        <div class="field full"><label>Gruppen</label><div class="inline-checks">${groupEditor(player)}</div></div>
        ${fullAccess ? `<div class="field full"><label>Funktion</label><div class="inline-checks">${memberRoleEditor(player)}</div></div>` : ""}
        ${fullAccess ? `<div class="field"><label>Passwort</label><input name="password" type="text" value="${escapeAttr(player.password || DEFAULT_PASSWORD)}" autocomplete="off"></div>` : ""}
        ${fullAccess ? `<div class="field"><label>Aktion</label><button class="mini" id="generatePlayerPasswordBtn" type="button">Temp-Passwort erzeugen</button></div>` : ""}
        ${isRosterPlayer && fullAccess ? renderTransferControls(player) : ""}
        </div>
        <div class="player-tab-panel form-grid" data-player-tab-panel="details">
        <div class="field"><label>Spielerbild</label><input type="file" name="photoFile" accept="image/*"></div>
        <div class="field full"><label>Bild als URL</label><input name="photo" value="${escapeAttr(player.photo && !player.photo.startsWith("data:") ? player.photo : "")}" placeholder="https://..."></div>
        <div class="field"><button class="btn-secondary" id="clearPlayerPhotoBtn" type="button">Bild entfernen</button></div>
        ${isRosterPlayer && fullAccess ? `<div class="field full"><label>Trainingsschwerpunkt kurzfristig</label><input name="trainingFocusShort" value="${escapeAttr(player.trainingFocusShort || "")}"></div>
        <div class="field full"><label>Trainingsschwerpunkt langfristig</label><input name="trainingFocusLong" value="${escapeAttr(player.trainingFocusLong || "")}"></div>` : ""}
        <div class="field full"><label>Notizen</label><textarea name="notes">${escapeHtml(player.notes || "")}</textarea></div>
        <div class="field full">
          <label>Status</label>
          <div class="availability-grid">${availabilityEditor(player)}</div>
        </div>
        </div>
        ${isRosterPlayer && fullAccess ? `<div class="player-tab-panel form-grid" data-player-tab-panel="performance">
            <div class="field full"><label>Alternativpositionen</label><input name="alternatePositions" value="${escapeAttr((player.alternatePositions || []).join(", "))}" placeholder="z.B. Abwehr, Sturm"></div>
            ${GRADE_FIELDS.map((field) => `
              <div class="field"><label>${PERFORMANCE_LABELS[field]}</label><select name="${field}">${gradeOptions(player.performance?.[field])}</select></div>
            `).join("")}
            <div class="field full"><label>Staerken</label><textarea name="strengths">${escapeHtml(player.performance?.strengths || "")}</textarea></div>
            <div class="field full"><label>Schwaechen</label><textarea name="weaknesses">${escapeHtml(player.performance?.weaknesses || "")}</textarea></div>
            <div class="field full"><label>Gespraeche</label><textarea name="talks">${escapeHtml(player.performance?.talks || "")}</textarea></div>
        </div>` : ""}
        ${fullAccess ? `<div class="field"><button class="btn-danger" id="deletePlayerFromModalBtn" type="button">Spieler entfernen</button></div>` : ""}
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
      const cleanValues = eventValuesForSave(values);
      const repeat = cleanValues.repeat || "";
      const repeatUntil = cleanValues.repeatUntil || cleanValues.date;
      const repeatGroup = repeat ? crypto.randomUUID() : "";
      const createdAt = new Date().toISOString();
      const dates = [];
      let cursor = new Date(`${cleanValues.date}T00:00`);
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
        type: cleanValues.type,
        title: cleanValues.title,
        date,
        time: cleanValues.time,
        location: cleanValues.location,
        gameVenue: cleanValues.gameVenue,
        gameCategory: cleanValues.gameCategory,
        meetingPoint: cleanValues.meetingPoint,
        meetingTime: cleanValues.meetingTime,
        details: cleanValues.details,
        coach: cleanValues.coach,
        focus: cleanValues.trainingFocus,
        remark: cleanValues.remark,
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
      updateEventTypeFields();
      if (editing) {
        form.elements.repeat.disabled = true;
        form.elements.repeatUntil.disabled = true;
      }
    }

    function openEventModal(type = "Training") {
      const form = $("#eventForm");
      if (!form) return;
      renderEventForm();
      form.reset();
      form.elements.namedItem("eventId").value = "";
      form.elements.type.value = eventTypeForForm(type);
      updateEventFormState();
      $("#eventModal").classList.add("open");
      $("#eventModal").setAttribute("aria-hidden", "false");
      const firstInput = form.querySelector("[data-event-field]:not([hidden]) input, [data-event-field]:not([hidden]) select, [data-event-field]:not([hidden]) textarea");
      (firstInput || form.elements.date)?.focus();
    }

    function closeEventModal() {
      $("#eventModal").classList.remove("open");
      $("#eventModal").setAttribute("aria-hidden", "true");
    }

    function resetEventForm() {
      const form = $("#eventForm");
      if (!form) return;
      form.reset();
      form.elements.namedItem("eventId").value = "";
      updateEventFormState();
      renderEventForm();
      closeEventModal();
    }

    function editEvent(eventId) {
      const eventItem = state.events.find((item) => item.id === eventId);
      const form = $("#eventForm");
      if (!eventItem || !form || !canManage()) return;
      $("#eventModal").classList.add("open");
      $("#eventModal").setAttribute("aria-hidden", "false");
      renderEventForm();
      form.elements.namedItem("eventId").value = eventItem.id;
      form.elements.type.value = eventTypeForForm(eventItem.type);
      form.elements.title.value = eventItem.title;
      form.elements.date.value = eventItem.date;
      form.elements.time.value = eventItem.time;
      form.elements.repeat.value = "";
      form.elements.repeatUntil.value = "";
      form.elements.location.value = eventItem.location || "";
      form.elements.gameVenue.value = eventItem.gameVenue || "";
      form.elements.gameCategory.value = eventItem.gameCategory || "Punktspiel";
      form.elements.meetingPoint.value = eventItem.meetingPoint || "";
      form.elements.meetingTime.value = eventItem.meetingTime || "";
      form.elements.coach.value = eventItem.coach || "";
      form.elements.namedItem("trainingFocus").value = eventItem.focus || "";
      form.elements.details.value = eventItem.details || "";
      form.elements.remark.value = eventItem.remark || "";
      updateEventFormState();
      (form.querySelector("[data-event-field]:not([hidden]) input, [data-event-field]:not([hidden]) select, [data-event-field]:not([hidden]) textarea") || form.elements.date)?.focus();
    }

    function csvValue(value) {
      return `"${String(value || "").replace(/"/g, '""')}"`;
    }

    function exportEventsCsv() {
      const rows = [
        ["Typ", "Titel", "Datum", "Treffpunkt-Uhrzeit", "Ort", "Spielort", "Spielart", "Treffpunkt-Ort", "Treffpunkt vor Ort", "Trainer", "Schwerpunkt", "Bemerkung", "Details", "Zusagen", "Absagen"],
        ...state.events
          .slice()
          .sort((a, b) => `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`))
          .map((event) => [
            event.type,
            event.title,
            event.date,
            event.time,
            event.location,
            event.gameVenue === "away" ? "Auswaertsspiel" : event.gameVenue === "home" ? "Heimspiel" : "",
            event.gameCategory,
            event.meetingPoint,
            event.meetingTime,
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

    function trainerReportRows(events) {
      return events
        .slice()
        .sort((a, b) => `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`))
        .map((eventItem) => `
          <tr>
            <td>${escapeHtml(formatShortDate(eventItem.date))}</td>
            <td>${escapeHtml(eventItem.time || "")}</td>
            <td>${escapeHtml(eventItem.type)}</td>
            <td>${escapeHtml(eventItem.title || "")}</td>
            <td>${escapeHtml(eventItem.location || "")}</td>
            <td>${escapeHtml(eventItem.coach || "")}</td>
            <td>${escapeHtml(eventItem.focus || "")}</td>
            <td>${countRsvp(eventItem, "yes")}</td>
            <td>${countRsvp(eventItem, "no")}</td>
          </tr>
        `).join("");
    }

    function printTrainerReport() {
      const today = new Date().toISOString().slice(0, 10);
      const events = state.events || [];
      const trainings = events.filter((eventItem) => eventItem.type === "Training");
      const upcomingGames = events.filter((eventItem) => eventItem.type === "Spiel" && eventItem.date >= today);
      const upcomingTrainings = trainings.filter((eventItem) => eventItem.date >= today);
      const fame = normalizeHallOfFame(state.hallOfFame);
      const fameRows = rosterPlayers()
        .map((player) => {
          const approvedTrainings = fame.selfTrainings.filter((entry) => entry.player === player.name && entry.approved).length;
          const bonus = fame.bonusPoints.filter((entry) => entry.player === player.name).reduce((sum, entry) => sum + Number(entry.points || 0), 0);
          return { player, approvedTrainings, bonus, total: approvedTrainings + bonus };
        })
        .sort((a, b) => b.total - a.total || a.player.name.localeCompare(b.player.name, "de"))
        .slice(0, 20);
      const focusRows = rosterPlayers()
        .filter((player) => player.trainingFocusShort || player.trainingFocusLong)
        .map((player) => `<tr><td>${escapeHtml(player.name)}</td><td>${escapeHtml(player.trainingFocusShort || "")}</td><td>${escapeHtml(player.trainingFocusLong || "")}</td></tr>`)
        .join("");
      const html = `<!doctype html>
        <html lang="de"><head><meta charset="utf-8"><title>Trainerbericht ${escapeHtml(currentClub().name)}</title>
        <style>
          body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:#102119;margin:28px;line-height:1.35}
          h1{font-size:28px;margin:0 0 4px} h2{font-size:18px;margin:24px 0 8px}.meta{color:#647267;margin-bottom:18px}
          .stats{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:18px 0}.stat{border:1px solid #d9e5dd;border-radius:10px;padding:12px}.stat strong{display:block;font-size:24px}
          table{width:100%;border-collapse:collapse;margin-bottom:16px;font-size:12px}th,td{border:1px solid #d9e5dd;padding:7px;text-align:left;vertical-align:top}th{background:#edf4ef}
          @media print{body{margin:12mm}.no-print{display:none}.stat{break-inside:avoid}table{break-inside:auto}tr{break-inside:avoid}}
        </style></head><body>
          <button class="no-print" onclick="window.print()">Drucken</button>
          <h1>Trainerbericht ${escapeHtml(currentClub().name)}</h1>
          <div class="meta">Stand: ${escapeHtml(new Date().toLocaleDateString("de-DE"))}</div>
          <div class="stats">
            <div class="stat"><strong>${trainings.length}</strong>Trainingseinheiten gesamt</div>
            <div class="stat"><strong>${upcomingTrainings.length}</strong>Kommende Trainings</div>
            <div class="stat"><strong>${upcomingGames.length}</strong>Kommende Spiele</div>
          </div>
          <h2>Alle Termine</h2>
          <table><thead><tr><th>Datum</th><th>Zeit</th><th>Typ</th><th>Titel</th><th>Ort</th><th>Trainer</th><th>Schwerpunkt</th><th>Zu</th><th>Ab</th></tr></thead><tbody>${trainerReportRows(events) || `<tr><td colspan="9">Keine Termine.</td></tr>`}</tbody></table>
          <h2>Kommende Spiele</h2>
          <table><thead><tr><th>Datum</th><th>Zeit</th><th>Typ</th><th>Gegner</th><th>Ort</th><th>Trainer</th><th>Schwerpunkt</th><th>Zu</th><th>Ab</th></tr></thead><tbody>${trainerReportRows(upcomingGames) || `<tr><td colspan="9">Keine kommenden Spiele.</td></tr>`}</tbody></table>
          <h2>Kommende Trainings mit Schwerpunkten</h2>
          <table><thead><tr><th>Datum</th><th>Zeit</th><th>Typ</th><th>Titel</th><th>Ort</th><th>Trainer</th><th>Schwerpunkt</th><th>Zu</th><th>Ab</th></tr></thead><tbody>${trainerReportRows(upcomingTrainings) || `<tr><td colspan="9">Keine kommenden Trainings.</td></tr>`}</tbody></table>
          <h2>Spieler-Schwerpunkte</h2>
          <table><thead><tr><th>Spieler</th><th>Kurzfristig</th><th>Langfristig</th></tr></thead><tbody>${focusRows || `<tr><td colspan="3">Keine Spieler-Schwerpunkte hinterlegt.</td></tr>`}</tbody></table>
          <h2>Hall of Fame</h2>
          <table><thead><tr><th>Spieler</th><th>Eigen-Training</th><th>Bonus</th><th>Gesamt</th></tr></thead><tbody>${fameRows.map((row) => `<tr><td>${escapeHtml(row.player.name)}</td><td>${row.approvedTrainings}</td><td>${row.bonus}</td><td>${row.total}</td></tr>`).join("") || `<tr><td colspan="4">Keine Hall-of-Fame-Daten.</td></tr>`}</tbody></table>
        </body></html>`;
      const printWindow = window.open("", "_blank");
      if (!printWindow) {
        window.alert("Druckfenster konnte nicht geoeffnet werden. Bitte Pop-up-Blocker pruefen.");
        return;
      }
      printWindow.document.open();
      printWindow.document.write(html);
      printWindow.document.close();
      printWindow.focus();
    }

    function currentTacticBoard() {
      if (!state.tacticBoards.length) {
        state.tacticBoards.push(normalizeTacticBoard({ title: "Freie Taktik" }));
      }
      if (!selectedTacticBoardId || !state.tacticBoards.some((board) => board.id === selectedTacticBoardId)) {
        selectedTacticBoardId = state.tacticBoards[0].id;
      }
      return state.tacticBoards.find((board) => board.id === selectedTacticBoardId);
    }

    function tacticElementsSnapshot(board = currentTacticBoard()) {
      return JSON.stringify(board.elements || []);
    }

    function restoreTacticElements(snapshot) {
      const board = currentTacticBoard();
      board.elements = JSON.parse(snapshot || "[]");
      board.updatedAt = new Date().toISOString();
      selectedTacticElementId = "";
      saveState();
    }

    function rememberTacticBoard(board = currentTacticBoard()) {
      tacticUndoStack.push(tacticElementsSnapshot(board));
      if (tacticUndoStack.length > 50) tacticUndoStack.shift();
      tacticRedoStack = [];
    }

    function undoTacticBoard() {
      if (!tacticUndoStack.length) return;
      tacticRedoStack.push(tacticElementsSnapshot());
      restoreTacticElements(tacticUndoStack.pop());
    }

    function redoTacticBoard() {
      if (!tacticRedoStack.length) return;
      tacticUndoStack.push(tacticElementsSnapshot());
      restoreTacticElements(tacticRedoStack.pop());
    }

    function cloneTacticElement(element, offset = 3) {
      const clone = JSON.parse(JSON.stringify(element));
      clone.id = crypto.randomUUID();
      if (clone.type === "line") {
        clone.x1 = clampTacticX(Number(clone.x1 || 0) + offset);
        clone.y1 = clampTacticY(Number(clone.y1 || 0) + offset);
        clone.x2 = clampTacticX(Number(clone.x2 || 0) + offset);
        clone.y2 = clampTacticY(Number(clone.y2 || 0) + offset);
      } else {
        clone.x = clampTacticX(Number(clone.x || 50) + offset);
        clone.y = clampTacticY(Number(clone.y || 34) + offset);
      }
      return clone;
    }

    function selectedTacticElement() {
      return currentTacticBoard().elements.find((element) => element.id === selectedTacticElementId) || null;
    }

    function clampTacticX(value) {
      return Math.max(TACTIC_VIEW.x, Math.min(TACTIC_VIEW.x + TACTIC_VIEW.width, Number(value || 0)));
    }

    function clampTacticY(value) {
      return Math.max(TACTIC_VIEW.y, Math.min(TACTIC_VIEW.y + TACTIC_VIEW.height, Number(value || 0)));
    }

    function copySelectedTacticElement(cut = false) {
      const board = currentTacticBoard();
      const element = selectedTacticElement();
      if (!element) return;
      tacticClipboard = JSON.parse(JSON.stringify(element));
      if (cut) {
        rememberTacticBoard(board);
        board.elements = board.elements.filter((item) => item.id !== element.id);
        selectedTacticElementId = "";
        saveState();
      }
    }

    function pasteTacticElement() {
      if (!tacticClipboard) return;
      const board = currentTacticBoard();
      rememberTacticBoard(board);
      const clone = cloneTacticElement(tacticClipboard);
      board.elements.push(clone);
      selectedTacticElementId = clone.id;
      saveState();
    }

    function resetTacticBoardView() {
      selectedTacticElementId = "";
      $("#tacticBoardSvg")?.scrollIntoView({ behavior: "smooth", block: "center" });
      $(".tactic-board-wrap")?.scrollTo({ left: 0, top: 0, behavior: "smooth" });
      renderTacticBoard();
    }

    function resetTacticBoardElements() {
      if (!canManage()) return;
      if (!window.confirm("Taktikgrafik wirklich auf ein leeres Spielfeld zuruecksetzen?")) return;
      const board = currentTacticBoard();
      rememberTacticBoard(board);
      board.elements = [];
      selectedTacticElementId = "";
      saveState();
    }

    function exportTacticBoardImage() {
      const svg = $("#tacticBoardSvg");
      if (!svg) return;
      const clone = svg.cloneNode(true);
      const style = document.createElementNS("http://www.w3.org/2000/svg", "style");
      style.textContent = `
        .field-margin{fill:#08751e}.field-bg{fill:#129429}.field-stripe-a{fill:#008414}.field-stripe-b{fill:#1fa435}.field-line{fill:none;stroke:rgba(255,255,255,.95);stroke-width:.76}.field-dot{fill:rgba(255,255,255,.95)}
        .tactic-player circle,.tactic-player-icon circle{stroke:#fff;stroke-width:.45}.tactic-player text,.tactic-text,.tactic-player-icon text{fill:#fff;font-size:2.3px;font-weight:800;text-anchor:middle;paint-order:stroke;stroke:rgba(0,0,0,.55);stroke-width:.35}
        .tactic-cone{fill:#f97316;stroke:#fff;stroke-width:.25}.tactic-pole{fill:#facc15;stroke:#7c2d12;stroke-width:.18}
      `;
      clone.insertBefore(style, clone.firstChild);
      clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      const svgText = new XMLSerializer().serializeToString(clone);
      const image = new Image();
      const blob = new Blob([svgText], { type: "image/svg+xml;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      image.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = 1950;
        canvas.height = 1110;
        const context = canvas.getContext("2d");
        context.fillStyle = "#08751e";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        URL.revokeObjectURL(url);
        const link = document.createElement("a");
        const title = (currentTacticBoard().title || "taktikboard").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "taktikboard";
        link.download = `${title}.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
      };
      image.onerror = () => {
        URL.revokeObjectURL(url);
        window.alert("Bild konnte nicht erzeugt werden.");
      };
      image.src = url;
    }

    function tacticEventOptions(selected = "") {
      const options = [`<option value="">Spiel oder Training auswaehlen</option>`]
        .concat(state.events
          .slice()
          .filter((eventItem) => eventItem.type === "Spiel" || eventItem.type === "Training")
          .sort((a, b) => `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`))
          .map((eventItem) => `<option value="${escapeAttr(eventItem.id)}" ${eventItem.id === selected ? "selected" : ""}>${escapeHtml(`${formatShortDate(eventItem.date)} ${eventItem.time || ""} - ${eventItem.type}: ${eventItem.title}`)}</option>`));
      return options.join("");
    }

    function tacticPlayersForBoard(board) {
      const eventItem = state.events.find((item) => item.id === board.eventId);
      return rosterPlayers()
        .filter((player) => hasMemberRole(player, "Spieler"))
        .filter((player) => !eventItem || effectiveRsvp(eventItem, player) === "yes");
    }

    function tacticPlayerId(player, index) {
      return `home_${String(player.id || player.name || index).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || index}`;
    }

    function tactic3dPlayersForBoard(board) {
      return tacticPlayersForBoard(board).map((player, index) => ({
        id: tacticPlayerId(player, index),
        team: "home",
        num: Number(player.number || player.jerseyNumber || player.shirtNumber || index + 1),
        name: player.name,
        pos: player.position || "",
        onField: index < 11,
        vestColor: null
      }));
    }

    function tactic3dPayload(board = currentTacticBoard()) {
      const eventItem = state.events.find((item) => item.id === board.eventId);
      const players = tactic3dPlayersForBoard(board);
      return {
        type: "kadrivo:tactic-load",
        boardId: board.id,
        title: board.title || "Taktik",
        mode: eventItem?.type === "Training" ? "training" : "spiel",
        event: eventItem ? {
          id: eventItem.id,
          type: eventItem.type,
          title: eventItem.title,
          date: eventItem.date,
          time: eventItem.time,
          location: eventItem.location || eventItem.address || ""
        } : null,
        players,
        saved: board.threeData || null,
        teamColor: board.teamColor || currentClub().color || "#155e3b"
      };
    }

    function sendTactic3dPayload() {
      const payload = tactic3dPayload();
      try {
        localStorage.setItem(`kadrivo:tactic:${payload.boardId}`, JSON.stringify(payload));
      } catch (error) {
        console.warn("Taktik-Payload konnte nicht lokal gespeichert werden.", error);
      }
      ["#tactic3dFrame", "#tactic3dModalFrame"].forEach((selector) => {
        const frame = $(selector);
        if (frame?.contentWindow) frame.contentWindow.postMessage(payload, window.location.origin);
      });
    }

    function scheduleTactic3dSave(data) {
      const board = currentTacticBoard();
      if (!board || data.boardId !== board.id) return;
      board.threeData = data.state || null;
      board.updatedAt = new Date().toISOString();
      clearTimeout(tactic3dSaveTimer);
      tactic3dSaveTimer = setTimeout(() => saveState(), 600);
    }

    function flushTactic3dSave() {
      if (!tactic3dSaveTimer) return;
      clearTimeout(tactic3dSaveTimer);
      tactic3dSaveTimer = null;
      saveState();
    }

    function openTactic3dModal() {
      const modal = $("#tactic3dModal");
      if (!modal) return;
      const board = currentTacticBoard();
      const eventItem = state.events.find((item) => item.id === board.eventId);
      const url = `taktikboard-3d.html?v=101&board=${encodeURIComponent(board.id)}`;
      const frame = $("#tactic3dModalFrame");
      if (frame && !frame.src.includes(`board=${encodeURIComponent(board.id)}`)) frame.src = url;
      $("#tactic3dModalTitle").textContent = board.title || "3D Taktiktafel";
      $("#tactic3dModalMeta").textContent = eventItem
        ? `${eventItem.type}: ${eventItem.title} - Aenderungen werden automatisch gespeichert.`
        : "Bitte zuerst ein Spiel oder Training auswaehlen.";
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");
      requestAnimationFrame(sendTactic3dPayload);
    }

    function closeTactic3dModal() {
      const modal = $("#tactic3dModal");
      if (!modal) return;
      flushTactic3dSave();
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
      sendTactic3dPayload();
    }

    function defaultTacticPlayers(board) {
      const positions = [
        [8, 34], [22, 16], [22, 30], [22, 42], [22, 56],
        [43, 20], [43, 34], [43, 48], [64, 18], [64, 34], [64, 50]
      ];
      const subPositions = [[108, 7], [108, 15], [108, 23], [108, 31], [108, 39], [108, 47], [108, 55], [108, 63], [117, 15], [117, 23], [117, 31], [117, 39], [117, 47], [117, 55]];
      return tacticPlayersForBoard(board).map((player, index) => {
        const [x, y] = index < 11 ? positions[index] : subPositions[index - 11] || [117, 63];
        return {
          id: crypto.randomUUID(),
          type: "player",
          x,
          y,
          name: player.name,
          color: board.teamColor || currentClub().color || "#155e3b",
          sub: index >= 11
        };
      });
    }

    function ensureTacticPlayers(board) {
      if (!board.elements.some((element) => element.type === "player")) {
        board.elements.push(...defaultTacticPlayers(board));
      }
    }

    function tacticSvgPoint(event) {
      const svg = $("#tacticBoardSvg");
      const rect = svg.getBoundingClientRect();
      return {
        x: clampTacticX(TACTIC_VIEW.x + ((event.clientX - rect.left) / rect.width) * TACTIC_VIEW.width),
        y: clampTacticY(TACTIC_VIEW.y + ((event.clientY - rect.top) / rect.height) * TACTIC_VIEW.height)
      };
    }

    function tacticChoiceValue(setting, fallback) {
      return $(`[data-tactic-setting="${setting}"].active`)?.dataset.value || fallback;
    }

    function tacticOptions() {
      return {
        lineCurve: tacticChoiceValue("lineCurve", "straight"),
        lineStyle: tacticChoiceValue("lineStyle", "solid"),
        lineEnd: tacticChoiceValue("lineEnd", "arrow"),
        lineColor: $("#tacticLineColor")?.value || "#ffffff",
        lineWidth: Number($("#tacticLineWidth")?.value || 2),
        arrowSize: Number($("#tacticArrowSize")?.value || 5),
        textStyle: tacticChoiceValue("textStyle", "normal"),
        textSize: Number($("#tacticTextSize")?.value || 14),
        textColor: $("#tacticTextColor")?.value || "#ffffff",
        fillColor: $("#tacticFillColor")?.value || "#000000",
        strokeColor: $("#tacticStrokeColor")?.value || "#ffffff",
        strokeWidth: Number($("#tacticStrokeWidth")?.value || 1),
        shapeStrokeStyle: tacticChoiceValue("shapeStrokeStyle", "solid"),
        playerIcon: tacticChoiceValue("playerIcon", "run"),
        accessoryType: tacticChoiceValue("accessoryType", "goal")
      };
    }

    function updateTacticOptionPanels() {
      const tool = $("#tacticTool")?.value || "select";
      $$("[data-tactic-options]").forEach((panel) => {
        const key = panel.dataset.tacticOptions;
        panel.hidden = !(
          (key === "line" && tool === "line")
          || (key === "text" && tool === "text")
          || (key === "shape" && (tool === "polygon" || tool === "circle"))
          || key === tool
        );
      });
    }

    function setTacticChoice(setting, value) {
      $$(`[data-tactic-setting="${setting}"]`).forEach((item) => {
        item.classList.toggle("active", item.dataset.value === String(value));
      });
    }

    function loadTacticElementOptions(element) {
      if (!element) return;
      if (element.type === "line") {
        $("#tacticTool").value = "line";
        setTacticChoice("lineCurve", element.curve || "straight");
        setTacticChoice("lineStyle", element.lineStyle || "solid");
        setTacticChoice("lineEnd", element.end || "arrow");
        $("#tacticLineColor").value = element.color || "#ffffff";
        $("#tacticLineWidth").value = Number(element.width || 4);
        $("#tacticArrowSize").value = Number(element.arrowSize || 8);
      } else if (element.type === "text") {
        $("#tacticTool").value = "text";
        setTacticChoice("textStyle", element.textStyle || "normal");
        $("#tacticTextSize").value = Number(element.size || 18);
        $("#tacticTextColor").value = element.color || "#ffffff";
      } else if (element.type === "polygon" || element.type === "circle") {
        $("#tacticTool").value = element.type;
        setTacticChoice("shapeStrokeStyle", element.strokeStyle || "solid");
        $("#tacticFillColor").value = element.fillColor || "#000000";
        $("#tacticStrokeColor").value = element.strokeColor || "#ffffff";
        $("#tacticStrokeWidth").value = Number(element.strokeWidth || 3);
      } else if (element.type === "playerIcon") {
        $("#tacticTool").value = "playerIcon";
        setTacticChoice("playerIcon", element.icon || "run");
      } else if (element.type === "accessory") {
        $("#tacticTool").value = "accessory";
        setTacticChoice("accessoryType", element.accessoryType || "goal");
      } else {
        $("#tacticTool").value = "select";
      }
      updateTacticOptionPanels();
    }

    function updateSelectedTacticElementFromOptions() {
      const element = selectedTacticElement();
      if (!element) return false;
      const options = tacticOptions();
      if (element.type === "line") {
        element.curve = options.lineCurve;
        element.lineStyle = options.lineStyle;
        element.end = options.lineEnd;
        element.color = options.lineColor;
        element.width = options.lineWidth;
        element.arrowSize = options.arrowSize;
      } else if (element.type === "text") {
        element.textStyle = options.textStyle;
        element.size = options.textSize;
        element.color = options.textColor;
      } else if (element.type === "polygon" || element.type === "circle") {
        element.fillColor = options.fillColor;
        element.strokeColor = options.strokeColor;
        element.strokeWidth = options.strokeWidth;
        element.strokeStyle = options.shapeStrokeStyle;
      } else if (element.type === "playerIcon") {
        element.icon = options.playerIcon;
      } else if (element.type === "accessory") {
        element.accessoryType = options.accessoryType;
      } else {
        return false;
      }
      element.updatedAt = new Date().toISOString();
      return true;
    }

    function lineD(element) {
      if (element.lineStyle === "wavy") {
        const dx = element.x2 - element.x1;
        const dy = element.y2 - element.y1;
        const length = Math.max(1, Math.hypot(dx, dy));
        const nx = -dy / length;
        const ny = dx / length;
        const steps = 10;
        let d = `M ${element.x1} ${element.y1}`;
        for (let i = 1; i <= steps; i += 1) {
          const t = i / steps;
          const wave = Math.sin(t * Math.PI * 6) * 1.2;
          d += ` L ${element.x1 + dx * t + nx * wave} ${element.y1 + dy * t + ny * wave}`;
        }
        return d;
      }
      if (element.curve === "curved") {
        const mx = (element.x1 + element.x2) / 2;
        const my = (element.y1 + element.y2) / 2;
        const dx = element.x2 - element.x1;
        const dy = element.y2 - element.y1;
        const length = Math.max(1, Math.hypot(dx, dy));
        const offset = Math.min(12, length / 4);
        return `M ${element.x1} ${element.y1} Q ${mx - (dy / length) * offset} ${my + (dx / length) * offset} ${element.x2} ${element.y2}`;
      }
      return `M ${element.x1} ${element.y1} L ${element.x2} ${element.y2}`;
    }

    function accessoryMarkup(element, selected) {
      const x = Number(element.x || 50);
      const y = Number(element.y || 34);
      const id = escapeAttr(element.id);
      const type = element.accessoryType || "goal";
      const hit = `<circle class="tactic-hit-fill" data-tactic-id="${id}" cx="${x}" cy="${y}" r="6"></circle>`;
      if (type === "goal" || type === "miniGoal" || type === "hallGoal" || type === "goalTilted") {
        const w = type === "goal" ? 9 : 6;
        const h = type === "goal" ? 4 : 3;
        const rotate = type === "goalTilted" ? ` transform="rotate(-8 ${x} ${y})"` : "";
        const net = type === "hallGoal" ? "#86efac" : "#f8fafc";
        return `<g class="tactic-el tactic-accessory${selected}" data-tactic-id="${id}"${rotate}>${hit}<rect x="${x - w / 2}" y="${y - h / 2}" width="${w}" height="${h}" fill="none" stroke="#f8fafc" stroke-width=".45"></rect><line x1="${x - w / 2}" y1="${y}" x2="${x + w / 2}" y2="${y}" stroke="${net}" stroke-width=".25"></line>${Array.from({ length: 5 }).map((_, i) => `<line x1="${x - w / 2 + (i + 1) * w / 6}" y1="${y - h / 2}" x2="${x - w / 2 + (i + 1) * w / 6}" y2="${y + h / 2}" stroke="${net}" stroke-width=".12"></line>`).join("")}</g>`;
      }
      if (type === "ball") {
        return `<g class="tactic-el tactic-accessory${selected}" data-tactic-id="${id}">${hit}<circle cx="${x}" cy="${y}" r="2.1" fill="#fff" stroke="#111" stroke-width=".25"></circle><path d="M ${x - 1.4} ${y} H ${x + 1.4} M ${x} ${y - 1.4} V ${y + 1.4}" stroke="#111" stroke-width=".2"></path></g>`;
      }
      if (type === "cone" || type === "pylon") {
        if (type === "cone") {
          return `${hit}<path class="tactic-el tactic-cone${selected}" data-tactic-id="${id}" d="M ${x} ${y - 1.4} L ${x - 2.3} ${y + 1.7} Q ${x} ${y + 2.4} ${x + 2.3} ${y + 1.7} Z"></path>`;
        }
        return `${hit}<path class="tactic-el tactic-cone${selected}" data-tactic-id="${id}" d="M ${x} ${y - 2.8} L ${x - 2.2} ${y + 2.4} L ${x + 2.2} ${y + 2.4} Z"></path>`;
      }
      if (type === "dummy") {
        return `<g class="tactic-el tactic-accessory${selected}" data-tactic-id="${id}">${hit}<circle cx="${x}" cy="${y - 2.3}" r="1.1" fill="#f97316"></circle><path d="M ${x} ${y - 1.1} C ${x - 2} ${y} ${x - 1.6} ${y + 3} ${x} ${y + 3.6} C ${x + 1.6} ${y + 3} ${x + 2} ${y} ${x} ${y - 1.1}" fill="#f97316" stroke="#9a3412" stroke-width=".2"></path></g>`;
      }
      if (type === "ladder") {
        return `<g class="tactic-el tactic-accessory${selected}" data-tactic-id="${id}">${hit}<rect x="${x - 5}" y="${y - 1}" width="10" height="2" fill="none" stroke="#fb923c" stroke-width=".35"></rect>${Array.from({ length: 7 }).map((_, i) => `<line x1="${x - 4 + i * 1.35}" y1="${y - 1}" x2="${x - 4 + i * 1.35}" y2="${y + 1}" stroke="#fb923c" stroke-width=".25"></line>`).join("")}</g>`;
      }
      if (type === "pole") {
        return `${hit}<rect class="tactic-el tactic-pole${selected}" data-tactic-id="${id}" x="${x - .35}" y="${y - 4}" width=".7" height="8" rx=".25"></rect>`;
      }
      if (type === "ring") {
        return `${hit}<ellipse class="tactic-el tactic-accessory${selected}" data-tactic-id="${id}" cx="${x}" cy="${y}" rx="3.4" ry="2.1" fill="none" stroke="#f97316" stroke-width=".65"></ellipse>`;
      }
      if (type === "mat") {
        return `${hit}<rect class="tactic-el tactic-accessory${selected}" data-tactic-id="${id}" x="${x - 4}" y="${y - 2.4}" width="8" height="4.8" fill="#0284c7" stroke="#075985" stroke-width=".3"></rect>`;
      }
      if (type === "flag" || type === "flagBase") {
        const base = type === "flagBase" ? `<ellipse cx="${x}" cy="${y + 4.2}" rx="1.2" ry=".45" fill="#f97316" stroke="#92400e" stroke-width=".2"></ellipse>` : "";
        return `<g class="tactic-el tactic-accessory${selected}" data-tactic-id="${id}">${hit}<line x1="${x}" y1="${y - 4}" x2="${x}" y2="${y + 4}" stroke="#92400e" stroke-width=".35"></line><path d="M ${x} ${y - 4} L ${x + 3} ${y - 3} L ${x} ${y - 2} Z" fill="#f97316"></path>${base}</g>`;
      }
      if (type === "bench") {
        return `<g class="tactic-el tactic-accessory${selected}" data-tactic-id="${id}">${hit}<rect x="${x - 4.8}" y="${y - 1}" width="9.6" height="1.8" fill="#facc15" stroke="#92400e" stroke-width=".25"></rect><line x1="${x - 3.5}" y1="${y + .8}" x2="${x - 3.5}" y2="${y + 2}" stroke="#92400e" stroke-width=".25"></line><line x1="${x + 3.5}" y1="${y + .8}" x2="${x + 3.5}" y2="${y + 2}" stroke="#92400e" stroke-width=".25"></line></g>`;
      }
      return "";
    }

    function fieldSvgMarkup() {
      const stripes = Array.from({ length: 12 }).map((_, index) => {
        const stripeWidth = TACTIC_PITCH.width / 12;
        return `<rect class="${index % 2 ? "field-stripe-b" : "field-stripe-a"}" x="${index * stripeWidth}" y="0" width="${stripeWidth}" height="68"></rect>`;
      }).join("");
      return `
        <defs>
          <marker id="tacticArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#ffffff"></path>
          </marker>
        </defs>
        <rect class="field-margin" x="${TACTIC_VIEW.x}" y="${TACTIC_VIEW.y}" width="${TACTIC_VIEW.width}" height="${TACTIC_VIEW.height}"></rect>
        <rect class="field-bg" x="0" y="0" width="100" height="68"></rect>
        ${stripes}
        <rect class="field-line" x="0" y="0" width="100" height="68"></rect>
        <line class="field-line" x1="50" y1="0" x2="50" y2="68"></line>
        <circle class="field-line" cx="50" cy="34" r="9.15"></circle>
        <circle class="field-dot" cx="50" cy="34" r=".45"></circle>
        <rect class="field-line" x="0" y="13.84" width="16.5" height="40.32"></rect>
        <rect class="field-line" x="83.5" y="13.84" width="16.5" height="40.32"></rect>
        <rect class="field-line" x="0" y="24.84" width="5.5" height="18.32"></rect>
        <rect class="field-line" x="94.5" y="24.84" width="5.5" height="18.32"></rect>
        <circle class="field-dot" cx="11" cy="34" r=".45"></circle>
        <circle class="field-dot" cx="89" cy="34" r=".45"></circle>
        <path class="field-line" d="M 16.5 26.7 A 9.15 9.15 0 0 1 16.5 41.3"></path>
        <path class="field-line" d="M 83.5 26.7 A 9.15 9.15 0 0 0 83.5 41.3"></path>
        <path class="field-line" d="M 0 0 A 2.4 2.4 0 0 1 2.4 2.4"></path>
        <path class="field-line" d="M 100 0 A 2.4 2.4 0 0 0 97.6 2.4"></path>
        <path class="field-line" d="M 0 68 A 2.4 2.4 0 0 0 2.4 65.6"></path>
        <path class="field-line" d="M 100 68 A 2.4 2.4 0 0 1 97.6 65.6"></path>
      `;
    }

    function tacticElementMarkup(element, board) {
      const selected = element.id === selectedTacticElementId ? " selected" : "";
      if (element.type === "line") {
        const color = element.color || "#ffffff";
        const width = Math.max(Number(element.width || 4), 3) * .35;
        const markerId = `arrow-${element.id}`;
        const marker = element.end === "none" ? "" : `<defs><marker id="${escapeAttr(markerId)}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="${Number(element.arrowSize || 5)}" markerHeight="${Number(element.arrowSize || 5)}" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="${escapeAttr(color)}"></path></marker></defs>`;
        const dash = element.lineStyle === "dashed" ? 'stroke-dasharray="2.4 1.8"' : "";
        return `${marker}<path class="tactic-hit" data-tactic-id="${escapeAttr(element.id)}" d="${lineD(element)}" stroke-width="5"></path><path class="tactic-el tactic-line${selected}" data-tactic-id="${escapeAttr(element.id)}" d="${lineD(element)}" stroke="${escapeAttr(color)}" stroke-width="${width}" fill="none" ${dash} ${element.end === "none" ? "" : `marker-end="url(#${escapeAttr(markerId)})"`}></path>`;
      }
      if (element.type === "text") {
        const style = element.textStyle === "italic" ? "font-style:italic;" : element.textStyle === "bold" ? "font-weight:950;" : "";
        const fontSize = Number(element.size || 18) / 5;
        const hitWidth = Math.max(8, String(element.text || "Text").length * fontSize * .9);
        return `<g class="tactic-el tactic-text-wrap${selected}" data-tactic-id="${escapeAttr(element.id)}"><rect class="tactic-hit-fill" x="${element.x - hitWidth / 2}" y="${element.y - fontSize * 1.25}" width="${hitWidth}" height="${fontSize * 1.8}" rx="1"></rect><text class="tactic-text${selected}" x="${element.x}" y="${element.y}" fill="${escapeAttr(element.color || "#ffffff")}" style="font-size:${fontSize}px;${style}">${escapeHtml(element.text || "Text")}</text></g>`;
      }
      if (element.type === "polygon") {
        const points = [
          [element.x, element.y - 4],
          [element.x - 4.5, element.y + 3],
          [element.x + 4.5, element.y + 3]
        ].map((point) => point.join(",")).join(" ");
        return `<polygon class="tactic-hit-fill" data-tactic-id="${escapeAttr(element.id)}" points="${points}"></polygon><polygon class="tactic-el tactic-shape${selected}" data-tactic-id="${escapeAttr(element.id)}" points="${points}" fill="${escapeAttr(element.fillColor || "#000000")}" stroke="${escapeAttr(element.strokeColor || "#ffffff")}" stroke-width="${Math.max(Number(element.strokeWidth || 3), 2) * .35}" ${element.strokeStyle === "dashed" ? 'stroke-dasharray="2.4 1.8"' : ""}></polygon>`;
      }
      if (element.type === "circle") {
        const radius = Number(element.radius || 4);
        return `<circle class="tactic-hit-fill" data-tactic-id="${escapeAttr(element.id)}" cx="${element.x}" cy="${element.y}" r="${radius + 3}"></circle><circle class="tactic-el tactic-shape${selected}" data-tactic-id="${escapeAttr(element.id)}" cx="${element.x}" cy="${element.y}" r="${radius}" fill="${escapeAttr(element.fillColor || "transparent")}" stroke="${escapeAttr(element.strokeColor || "#ffffff")}" stroke-width="${Math.max(Number(element.strokeWidth || 3), 2) * .35}" ${element.strokeStyle === "dashed" ? 'stroke-dasharray="2.4 1.8"' : ""}></circle>`;
      }
      if (element.type === "playerIcon") {
        const label = { run: "🏃", pass: "↗", stand: "●", jump: "↟", keeper: "🧤" }[element.icon] || "●";
        return `<g class="tactic-el tactic-player-icon${selected}" data-tactic-id="${escapeAttr(element.id)}"><circle class="tactic-hit-fill" cx="${element.x}" cy="${element.y}" r="5.6"></circle><circle cx="${element.x}" cy="${element.y}" r="3.1" fill="${escapeAttr(element.color || board.teamColor || "#155e3b")}"></circle><text x="${element.x}" y="${element.y + 1.1}">${escapeHtml(label)}</text></g>`;
      }
      if (element.type === "accessory") {
        return accessoryMarkup(element, selected);
      }
      if (element.type === "cone") {
        return `<circle class="tactic-hit-fill" data-tactic-id="${escapeAttr(element.id)}" cx="${element.x}" cy="${element.y}" r="4.8"></circle><path class="tactic-el tactic-cone${selected}" data-tactic-id="${escapeAttr(element.id)}" d="M ${element.x} ${element.y - 1.7} L ${element.x - 1.7} ${element.y + 1.6} L ${element.x + 1.7} ${element.y + 1.6} Z"></path>`;
      }
      if (element.type === "poleV") {
        return `<rect class="tactic-hit-fill" data-tactic-id="${escapeAttr(element.id)}" x="${element.x - 2.6}" y="${element.y - 4.6}" width="5.2" height="9.2" rx="1"></rect><rect class="tactic-el tactic-pole${selected}" data-tactic-id="${escapeAttr(element.id)}" x="${element.x - .45}" y="${element.y - 3}" width=".9" height="6" rx=".3"></rect>`;
      }
      if (element.type === "poleH") {
        return `<rect class="tactic-hit-fill" data-tactic-id="${escapeAttr(element.id)}" x="${element.x - 4.6}" y="${element.y - 2.6}" width="9.2" height="5.2" rx="1"></rect><rect class="tactic-el tactic-pole${selected}" data-tactic-id="${escapeAttr(element.id)}" x="${element.x - 3}" y="${element.y - .45}" width="6" height=".9" rx=".3"></rect>`;
      }
      if (element.type === "player") {
        const fill = element.color || board.teamColor || currentClub().color || "#155e3b";
        return `<g class="tactic-el tactic-player${selected} ${element.sub ? "sub" : ""}" data-tactic-id="${escapeAttr(element.id)}">
          <circle class="tactic-hit-fill" cx="${element.x}" cy="${element.y}" r="${element.sub ? 4.8 : 5.4}"></circle>
          <circle cx="${element.x}" cy="${element.y}" r="${element.sub ? 1.8 : 2.25}" fill="${escapeAttr(fill)}"></circle>
          <text x="${element.x}" y="${element.y + 4.4}">${escapeHtml(element.name || "Spieler")}</text>
        </g>`;
      }
      return "";
    }

    function renderTacticBoard() {
      if (!$("#tacticBoardForm")) return;
      const board = currentTacticBoard();
      $("#tacticBoardTitle").textContent = board.title || "Taktikboard";
      $("#tacticBoardHint").textContent = board.eventId ? "Beim Termin gespeichert" : "Termin auswaehlen";
      $("#tacticBoardSelect").innerHTML = state.tacticBoards.map((item) => `<option value="${escapeAttr(item.id)}">${escapeHtml(item.title)}</option>`).join("");
      $("#tacticBoardSelect").value = board.id;
      $("#tacticEventSelect").innerHTML = tacticEventOptions(board.eventId);
      $("#tacticBoardForm").elements.title.value = board.title;
      $("#tacticBoardForm").elements.eventId.value = board.eventId || "";
      const eventItem = state.events.find((item) => item.id === board.eventId);
      const tacticPlayers = tacticPlayersForBoard(board);
      $("#tactic3dMeta").textContent = eventItem
        ? `${eventItem.type}: ${eventItem.title} am ${formatShortDate(eventItem.date)} ${eventItem.time || ""} - ${tacticPlayers.length} zugesagte Spieler`
        : "Bitte Spiel oder Training auswaehlen. Danach werden nur zugesagte Spieler geladen.";
      const openUrl = `taktikboard-3d.html?v=101&board=${encodeURIComponent(board.id)}`;
      ["#tactic3dFrame", "#tactic3dModalFrame"].forEach((selector) => {
        const frame = $(selector);
        if (frame && !frame.src.includes("taktikboard-3d.html")) frame.src = openUrl;
      });
      $("#tacticBoardList").innerHTML = state.tacticBoards.map((item) => {
        const linkedEvent = state.events.find((eventItem) => eventItem.id === item.eventId);
        return `<article class="item ${item.id === board.id ? "selected-item" : ""}"><button class="mini" type="button" data-open-tactic="${escapeAttr(item.id)}">${escapeHtml(item.title)}</button><span class="meta">${escapeHtml(linkedEvent ? `${linkedEvent.type}: ${linkedEvent.title}` : "Kein Termin zugeordnet")}</span></article>`;
      }).join("");
      requestAnimationFrame(sendTactic3dPayload);
    }

    function addTacticBoard() {
      const nextEvent = state.events
        .filter((eventItem) => eventItem.type === "Spiel" || eventItem.type === "Training")
        .sort((a, b) => `${a.date}${a.time}`.localeCompare(`${b.date}${b.time}`))[0];
      const board = normalizeTacticBoard({
        title: nextEvent ? `Taktik ${nextEvent.title}` : `Taktik ${state.tacticBoards.length + 1}`,
        eventId: nextEvent?.id || "",
        teamColor: currentClub().color || "#155e3b"
      });
      state.tacticBoards.unshift(board);
      selectedTacticBoardId = board.id;
      selectedTacticElementId = "";
      saveState();
    }

    function addTacticElement(type, point) {
      const board = currentTacticBoard();
      const options = tacticOptions();
      rememberTacticBoard(board);
      const element = {
        id: crypto.randomUUID(),
        type,
        x: point.x,
        y: point.y
      };
      if (type === "text") {
        element.text = window.prompt("Text auf dem Feld")?.trim() || "Text";
        element.textStyle = options.textStyle;
        element.size = options.textSize;
        element.color = options.textColor;
      }
      if (type === "polygon" || type === "circle") {
        element.fillColor = options.fillColor;
        element.strokeColor = options.strokeColor;
        element.strokeWidth = options.strokeWidth;
        element.strokeStyle = options.shapeStrokeStyle;
        if (type === "circle") element.radius = 4;
      }
      if (type === "playerIcon") {
        element.icon = options.playerIcon;
        element.color = board.teamColor || currentClub().color || "#155e3b";
      }
      if (type === "accessory") {
        element.accessoryType = options.accessoryType;
      }
      board.elements.push(element);
      selectedTacticElementId = element.id;
      saveState();
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
      if (viewName === "messages") scrollMessagesToBottom();
    }

    setupNavLabels();

    $$(".nav button").forEach((button) => {
      button.addEventListener("click", async (event) => {
        if (button.dataset.view === "settings" && event.shiftKey && (event.ctrlKey || event.metaKey)) {
          event.preventDefault();
          await requestSuperadminOverride();
          return;
        }
        switchView(button.dataset.view);
      });
    });

    $("#eventForm").elements.type.addEventListener("change", updateEventFormState);
    $$("[data-new-event-type]").forEach((button) => {
      button.addEventListener("click", () => {
        openEventModal(button.dataset.newEventType);
      });
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
      const player = {
        id: crypto.randomUUID(),
        name: values.name,
        position: isPlayer ? values.position : "",
        jerseyNumber: isPlayer ? (values.jerseyNumber || "") : "",
        birthDate: isPlayer ? (values.birthDate || "") : "",
        nationality: isPlayer ? (values.nationality || "") : "",
        phone: values.phone,
        memberSince: values.memberSince || "",
        role: sanitizeRole(values.role),
        captainRole: isPlayer ? (values.captainRole || "") : "",
        trainingFocusShort: isPlayer ? (values.trainingFocusShort || "").trim() : "",
        trainingFocusLong: isPlayer ? (values.trainingFocusLong || "").trim() : "",
        group: groups[0],
        groups,
        notes: values.notes,
        memberRoles,
        password: DEFAULT_PASSWORD,
        photo: "",
        alternatePositions: [],
        availability: defaultAvailability(),
        performance: defaultPerformance()
      };
      enforceCaptainRole(player.id, player.captainRole);
      state.players.push(player);
      event.currentTarget.reset();
      saveState();
    });

    $("#eventForm").addEventListener("submit", (event) => {
      event.preventDefault();
      if (!canManage()) return;
      const values = formValues(event.currentTarget);
      const cleanValues = eventValuesForSave(values);
      if (values.eventId) {
        const existing = state.events.find((item) => item.id === values.eventId);
        if (!existing) return;
        Object.assign(existing, normalizeEvent({
          ...existing,
          type: cleanValues.type,
          title: cleanValues.title,
          date: cleanValues.date,
          time: cleanValues.time,
          location: cleanValues.location,
          gameVenue: cleanValues.gameVenue,
          gameCategory: cleanValues.gameCategory,
          meetingPoint: cleanValues.meetingPoint,
          meetingTime: cleanValues.meetingTime,
          details: cleanValues.details,
          coach: cleanValues.coach,
          focus: cleanValues.trainingFocus,
          remark: cleanValues.remark
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

    $$(".emoji-row button").forEach((button) => {
      button.addEventListener("click", () => {
        const textarea = $("#messageForm textarea[name='body']");
        const emoji = button.dataset.emoji || "";
        const start = textarea.selectionStart ?? textarea.value.length;
        const end = textarea.selectionEnd ?? textarea.value.length;
        const before = textarea.value.slice(0, start);
        const after = textarea.value.slice(end);
        const spacer = before && !before.endsWith(" ") ? " " : "";
        textarea.value = `${before}${spacer}${emoji}${after}`;
        const caret = before.length + spacer.length + emoji.length;
        textarea.focus();
        textarea.setSelectionRange(caret, caret);
      });
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
      const catalog = fineCatalogById(values.catalog) || state.fineCatalog[0] || { label: "Strafe", amount: values.amount, penalty: "", description: "" };
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

    $("#cashFineEditForm").addEventListener("submit", (event) => {
      event.preventDefault();
      if (!canManage()) return;
      const values = formValues(event.currentTarget);
      const fine = (state.cashFines || []).find((item) => item.id === values.id);
      if (!fine) return;
      fine.player = values.player;
      fine.label = values.label;
      fine.amount = Number(values.amount || 0);
      fine.date = values.date;
      fine.note = values.note;
      const nextPaid = values.paid === "on";
      if (nextPaid && !fine.paid) {
        fine.paidComment = window.prompt("Kommentar zur Zahlung (optional):", fine.paidComment || "") || "";
      }
      if (!nextPaid) fine.paidComment = "";
      fine.paid = nextPaid;
      fine.paidAt = fine.paid ? fine.paidAt || new Date().toISOString() : "";
      closeCashFineModal();
      saveState();
    });

    $("#deleteCashFineBtn").addEventListener("click", () => {
      if (!canManage()) return;
      const id = $("#cashFineEditForm").elements.id.value;
      if (!id || !window.confirm("Diese Strafe wirklich entfernen?")) return;
      state.cashFines = (state.cashFines || []).filter((fine) => fine.id !== id);
      closeCashFineModal();
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
      if (!canJoinHallOfFame()) {
        window.alert("Nur Spieler koennen eigenes Training einreichen.");
        return;
      }
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
        createdAt: new Date().toISOString(),
        approved: false
      }));
      form.reset();
      setStatus("Eigentraining eingereicht. Punkte werden nach Bestaetigung gutgeschrieben.");
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
      $("#fineCatalogPanel").hidden = false;
      $("#toggleFineCatalogBtn").textContent = "Ausblenden";
      $("#fineCatalogForm").reset();
      $("#fineCatalogForm").elements.id.value = "";
    });

    $("#toggleFineCatalogBtn").addEventListener("click", () => {
      const panel = $("#fineCatalogPanel");
      panel.hidden = !panel.hidden;
      $("#toggleFineCatalogBtn").textContent = panel.hidden ? "Anzeigen" : "Ausblenden";
    });

    $("#settingsForm").addEventListener("submit", (event) => {
      event.preventDefault();
      if (!isSuperadmin()) return;
      settings = formValues(event.currentTarget);
      saveSettings();
      setStatus("Supabase-Konfiguration gespeichert.");
      syncWithSupabase();
      loadPaypalSettings();
    });

    $("#paypalSettingsForm")?.addEventListener("submit", savePaypalSettings);
    $("#paypalTestBtn")?.addEventListener("click", async () => {
      await loadPaypalSettings();
      $("#paypalStatus").textContent = paypalConfigured()
        ? "Sandbox-Test bereit: Eine offene Strafe kann jetzt mit PayPal getestet werden."
        : "PayPal ist noch nicht vollstaendig konfiguriert.";
    });

    $("#clubDesignForm").addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!canManage()) return;
      const values = formValues(event.currentTarget);
      const club = currentClub();
      club.name = values.name.trim() || club.name;
      club.league = values.league || "";
      club.federalState = values.federalState || "";
      club.color = normalizeHexColor(values.color);
      if (isSuperadmin() && values.licenseStatus) {
        const nextStatus = normalizeLicenseStatus(values.licenseStatus);
        if (nextStatus !== club.licenseStatus) {
          club.licenseStatus = nextStatus;
          club.licenseActivatedAt = new Date().toISOString();
          club.licenseExpiresAt = defaultLicenseExpiresAt(nextStatus, club.licenseActivatedAt);
        }
        club.licenseAutoRenew = values.licenseAutoRenew === "on";
      }
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

    $("#showClubSignupBtn")?.addEventListener("click", openClubSignupModal);
    $("#closeClubSignupBtn")?.addEventListener("click", closeClubSignupModal);
    $("#cancelClubSignupBtn")?.addEventListener("click", closeClubSignupModal);
    $("#clubSignupModal")?.addEventListener("click", (event) => {
      if (event.target.id === "clubSignupModal") closeClubSignupModal();
    });
    $("#clubSignupForm")?.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      const status = $("#clubSignupStatus");
      const submit = form.querySelector('button[type="submit"]');
      submit.disabled = true;
      status.textContent = "Verein wird angelegt ...";
      try {
        const { club, player } = await registerClub(formValues(form));
        status.textContent = `Verein angelegt. Lizenz: ${club.licenseKey}`;
        $("#loginClubSelect").value = club.id;
        $("#loginUser").value = player.name;
        $("#loginPassword").value = player.password;
        saveLoginPrefill(club.id, player.name, player.password);
        closeClubSignupModal();
        $("#loginError").textContent = "Verein angelegt. Du kannst dich jetzt als Vereins-Admin anmelden.";
      } catch (error) {
        status.textContent = error.message || String(error);
      } finally {
        submit.disabled = false;
      }
    });

    $("#closeEventModalBtn").addEventListener("click", closeEventModal);
    $("#eventModal").addEventListener("click", (event) => {
      if (event.target === $("#eventModal")) closeEventModal();
    });
    $("#closePlayerModalBtn").addEventListener("click", closePlayerModal);
    $("#savePlayerModalBtn")?.addEventListener("click", () => {
      $("#playerEditForm")?.requestSubmit();
    });
    $$(".player-nav-btn").forEach((button) => {
      button.addEventListener("click", () => {
        const playerId = button.dataset.playerNav;
        if (playerId) openPlayerModal(playerId);
      });
    });
    $("#playerModal").addEventListener("click", (event) => {
      if (event.target === $("#playerModal")) closePlayerModal();
    });
    $("#closeCashFineModalBtn").addEventListener("click", closeCashFineModal);
    $("#cashFineModal").addEventListener("click", (event) => {
      if (event.target === $("#cashFineModal")) closeCashFineModal();
    });

    $("#playerEditForm").addEventListener("click", async (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const tabButton = target.closest("[data-player-tab]");
      if (tabButton) {
        const tab = tabButton.dataset.playerTab;
        $$("[data-player-tab]").forEach((button) => button.classList.toggle("active", button === tabButton));
        $$("[data-player-tab-panel]").forEach((panel) => panel.classList.toggle("active", panel.dataset.playerTabPanel === tab));
        return;
      }
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
      if (target.id === "deletePlayerFromModalBtn") {
        deletePlayer(player.id);
      }
      if (target.id === "returnTemporaryTransferBtn") {
        if (!window.confirm(`${player.name} wirklich vorzeitig an ${player.transfer?.originClubName || "den Ursprungsverein"} zurueckgeben?`)) return;
        target.disabled = true;
        try {
          await returnTransferredPlayer(player, "early");
        } catch (error) {
          window.alert("Rueckgabe fehlgeschlagen: " + (error.message || String(error)));
        } finally {
          target.disabled = false;
        }
      }
      if (target.id === "transferPermanentBtn" || target.id === "transferTemporaryBtn") {
        const form = $("#playerEditForm");
        const targetClubId = transferTargetClubIdFromInput(form.elements.transferClubName?.value);
        if (!targetClubId) {
          window.alert("Bitte einen Zielverein aus der Liste auswaehlen.");
          return;
        }
        if (target.id === "transferPermanentBtn") {
          const confirmation = window.prompt('Soll der Spieler wirklich dauerhaft den Verein wechseln? In der Regel ist dies verbunden mit Entschaedigungen an den Verein\n\nBitte exakt eingeben: Wechsel akzeptiert');
          if (confirmation !== "Wechsel akzeptiert") {
            window.alert('Dauerhafter Wechsel wurde abgebrochen. Bitte exakt "Wechsel akzeptiert" eingeben.');
            return;
          }
        }
        target.disabled = true;
        try {
          await transferPlayer(player, {
            transferMode: target.id === "transferTemporaryBtn" ? "temporary" : "permanent",
            transferClubId: targetClubId,
            transferFromDate: form.elements.transferFromDate?.value,
            transferUntilDate: form.elements.transferUntilDate?.value
          });
        } catch (error) {
          window.alert("Uebergabe fehlgeschlagen: " + (error.message || String(error)));
        } finally {
          target.disabled = false;
        }
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
      player.memberSince = values.memberSince || "";
      player.groups = groupsFromValues(values);
      player.group = player.groups[0];
      // Berechtigungsrolle und Mitgliedsrollen darf nur Admin/Superadmin aendern
      if (canManage()) {
        player.role = sanitizeRole(values.role);
        player.memberRoles = memberRolesFromValues(values);
      }
      // Position nur fuer Spieler; bei reinen Trainern/Betreuern leeren
      // (nach memberRoles-Update, damit Rollenwechsel sofort greift)
      player.position = hasMemberRole(player, "Spieler") ? values.position : "";
      player.jerseyNumber = hasMemberRole(player, "Spieler") ? (values.jerseyNumber || "") : "";
      player.birthDate = hasMemberRole(player, "Spieler") ? (values.birthDate || "") : "";
      player.nationality = hasMemberRole(player, "Spieler") ? (values.nationality || "") : "";
      if (canManage()) {
        player.captainRole = hasMemberRole(player, "Spieler") ? (values.captainRole || "") : "";
        player.trainingFocusShort = hasMemberRole(player, "Spieler") ? (values.trainingFocusShort || "").trim() : "";
        player.trainingFocusLong = hasMemberRole(player, "Spieler") ? (values.trainingFocusLong || "").trim() : "";
        enforceCaptainRole(player.id, player.captainRole);
      }
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
      const deleteCatalogFineId = target.dataset.deleteCatalogFine;
      const editCashFineId = target.dataset.editCashFine;
      const deleteCashFineId = target.dataset.deleteCashFine;
      const editEventId = target.dataset.editEvent;
      const famePlayer = target.dataset.famePlayer;
      const approveSelfTrainingId = target.dataset.approveSelfTraining;
      const deleteSelfTrainingId = target.dataset.deleteSelfTraining;
      const deleteBonusPointId = target.dataset.deleteBonusPoint;
      const markNoShowId = target.dataset.markNoshow;
      const clearNoShowId = target.dataset.clearNoshow;
      const returnTransferId = target.dataset.returnTransfer;
      const attendancePlayer = target.dataset.player;
      const transportEventId = target.dataset.transport;
      const toggleEventDetailsId = target.closest("[data-toggle-event-details]")?.dataset.toggleEventDetails;
      const calendarEventId = target.closest("[data-calendar-event]")?.dataset.calendarEvent;

      if (playerId) {
        deletePlayer(playerId);
        return;
      }

      if (returnTransferId && canManage()) {
        const player = state.players.find((item) => item.id === returnTransferId);
        if (!player || !activeIncomingTemporaryTransfer(player)) return;
        if (!window.confirm(`${player.name} wirklich vorzeitig an ${player.transfer?.originClubName || "den Ursprungsverein"} zurueckgeben?`)) return;
        returnTransferredPlayer(player, "early").catch((error) => window.alert("Rueckgabe fehlgeschlagen: " + (error.message || String(error))));
        return;
      }

      if (transportEventId) {
        const item = state.events.find((eventItem) => eventItem.id === transportEventId);
        const player = playerByName(activeUser());
        if (!item || !player || !isAwayGame(item)) return;
        item.rsvps = item.rsvps || {};
        const oldRecord = rsvpRecord(item, player.name) || { status: "yes" };
        item.rsvps[player.name] = {
          ...oldRecord,
          status: oldRecord.status === "no" ? "yes" : oldRecord.status || "yes",
          updatedAt: new Date().toISOString(),
          transport: target.dataset.transportValue || ""
        };
        saveState();
        return;
      }

      if (markNoShowId && attendancePlayer && canManage()) {
        markNoShow(markNoShowId, attendancePlayer);
        saveState();
        return;
      }
      if (clearNoShowId && attendancePlayer && canManage()) {
        clearNoShow(clearNoShowId, attendancePlayer);
        saveState();
        return;
      }
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
        if (!canViewFameDetails(famePlayer)) return;
        selectedFamePlayer = famePlayer;
        renderFame();
        return;
      }
      if (editEventId && canManage()) {
        editEvent(editEventId);
        return;
      }
      if (editCashFineId && canManage()) {
        openCashFineModal(editCashFineId);
        return;
      }
      if (deleteCashFineId && canManage()) {
        if (window.confirm("Diese Strafe wirklich entfernen?")) {
          state.cashFines = (state.cashFines || []).filter((fine) => fine.id !== deleteCashFineId);
          saveState();
        }
        return;
      }
      if (eventId && canManage()) {
        state.events = state.events.filter((item) => item.id !== eventId);
        if ($("#eventForm")?.elements.namedItem("eventId").value === eventId) resetEventForm();
      }
      if (pollId && canManage()) state.polls = state.polls.filter((poll) => poll.id !== pollId);
      if (editCatalogFineId && canManage()) {
        const fine = fineCatalogById(editCatalogFineId);
        const form = $("#fineCatalogForm");
        if (fine && form) {
          $("#fineCatalogPanel").hidden = false;
          $("#toggleFineCatalogBtn").textContent = "Ausblenden";
          form.elements.id.value = fine.id;
          form.elements.label.value = fine.label;
          form.elements.description.value = fine.description;
          form.elements.amount.value = fine.amount;
          form.elements.penalty.value = fine.penalty;
        }
      }
      if (deleteCatalogFineId && canManage()) {
        if (window.confirm("Diesen Katalogeintrag wirklich entfernen?")) {
          state.fineCatalog = (state.fineCatalog || []).filter((fine) => fine.id !== deleteCatalogFineId);
        }
      }
      if (toggleFineId && canManage()) {
        toggleFinePaid(toggleFineId);
      }
      if (approveSelfTrainingId && canAwardFamePoints()) {
        state.hallOfFame = normalizeHallOfFame(state.hallOfFame);
        const training = state.hallOfFame.selfTrainings.find((entry) => entry.id === approveSelfTrainingId);
        if (training) {
          training.approved = true;
          training.approvedBy = activeUser();
          training.approvedAt = new Date().toISOString();
        }
      }
      if (deleteSelfTrainingId && canAwardFamePoints()) {
        state.hallOfFame = normalizeHallOfFame(state.hallOfFame);
        state.hallOfFame.selfTrainings = state.hallOfFame.selfTrainings.filter((entry) => entry.id !== deleteSelfTrainingId);
      }
      if (deleteBonusPointId && canAwardFamePoints()) {
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
          reason,
          noShow: false,
          noShowAt: "",
          noShowBy: "",
          paid: false,
          paidAt: "",
          transport: status === "yes" ? oldRecord?.transport || "" : ""
        };
        if (item.rsvps[player.name].fine) setStatus(`Absage fuer ${player.name} erfasst.`);
      }
      if (voteId) {
        const poll = state.polls.find((pollItem) => pollItem.id === voteId);
        poll.votes = poll.votes || {};
        poll.votes[activeUser()] = target.dataset.option;
      }
      if ((canManage() && (eventId || pollId || toggleFineId || deleteCatalogFineId || approveSelfTrainingId || deleteSelfTrainingId || deleteBonusPointId)) || rsvpId || voteId) saveState();
    });

    $("#playerSearch").addEventListener("input", renderPlayers);
    $$(".calendar-mode [data-calendar-mode]").forEach((button) => {
      button.addEventListener("click", () => {
        calendarMode = button.dataset.calendarMode || "week";
        renderCalendar();
        renderEvents();
      });
    });
    $("#cancelEventEditBtn").addEventListener("click", resetEventForm);
    $("#exportEventsBtn").addEventListener("click", () => {
      if (canManage()) exportEventsCsv();
    });
    $("#printTrainerReportBtn")?.addEventListener("click", () => {
      if (canManage()) printTrainerReport();
    });
    $("#newTacticBoardBtn")?.addEventListener("click", addTacticBoard);
    $("#tacticBoardSelect")?.addEventListener("change", () => {
      selectedTacticBoardId = $("#tacticBoardSelect").value;
      selectedTacticElementId = "";
      tacticUndoStack = [];
      tacticRedoStack = [];
      renderTacticBoard();
    });
    $("#tactic3dFrame")?.addEventListener("load", () => {
      sendTactic3dPayload();
    });
    $("#tactic3dModalFrame")?.addEventListener("load", () => {
      sendTactic3dPayload();
    });
    $("#openTactic3dBtn")?.addEventListener("click", openTactic3dModal);
    $("#closeTactic3dModalBtn")?.addEventListener("click", closeTactic3dModal);
    $("#tactic3dModal")?.addEventListener("click", (event) => {
      if (event.target.id === "tactic3dModal") closeTactic3dModal();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && $("#tactic3dModal")?.classList.contains("open")) closeTactic3dModal();
    });
    $("#tacticEventSelect")?.addEventListener("change", () => {
      if (!canManage()) return;
      const board = currentTacticBoard();
      board.eventId = $("#tacticEventSelect").value || "";
      board.threeData = null;
      board.updatedAt = new Date().toISOString();
      saveState();
    });
    window.addEventListener("message", (event) => {
      if (event.origin !== window.location.origin) return;
      if (event.data?.type === "kadrivo:tactic-save") scheduleTactic3dSave(event.data);
    });
    $("#tacticTool")?.addEventListener("change", () => {
      updateTacticOptionPanels();
      renderTacticBoard();
    });
    $("#tacticBoardForm")?.addEventListener("click", (event) => {
      const button = event.target.closest("[data-tactic-setting]");
      if (!button) return;
      const setting = button.dataset.tacticSetting;
      $$(`[data-tactic-setting="${setting}"]`).forEach((item) => item.classList.toggle("active", item === button));
      if (selectedTacticElementId) {
        rememberTacticBoard();
        if (updateSelectedTacticElementFromOptions()) {
          saveState();
          return;
        }
      }
      renderTacticBoard();
    });
    ["tacticLineColor", "tacticLineWidth", "tacticArrowSize", "tacticTextSize", "tacticTextColor", "tacticFillColor", "tacticStrokeColor", "tacticStrokeWidth"].forEach((id) => {
      $("#" + id)?.addEventListener("change", () => {
        if (selectedTacticElementId) {
          rememberTacticBoard();
          if (updateSelectedTacticElementFromOptions()) {
            saveState();
            return;
          }
        }
        renderTacticBoard();
      });
    });
    $("#tacticUndoBtn")?.addEventListener("click", undoTacticBoard);
    $("#tacticRedoBtn")?.addEventListener("click", redoTacticBoard);
    $("#tacticFieldBtn")?.addEventListener("click", resetTacticBoardView);
    $("#tacticCutBtn")?.addEventListener("click", () => copySelectedTacticElement(true));
    $("#tacticCopyBtn")?.addEventListener("click", () => copySelectedTacticElement(false));
    $("#tacticPasteBtn")?.addEventListener("click", pasteTacticElement);
    $("#tacticResetBtn")?.addEventListener("click", resetTacticBoardElements);
    $("#tacticExportImageBtn")?.addEventListener("click", exportTacticBoardImage);
    $("#tacticBoardForm")?.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!canManage()) return;
      const board = currentTacticBoard();
      const values = formValues(event.currentTarget);
      board.title = values.title.trim() || "Taktik";
      board.eventId = values.eventId || "";
      board.teamColor = currentClub().color || "#155e3b";
      board.updatedAt = new Date().toISOString();
      saveState();
    });
    $("#resetTacticPlayersBtn")?.addEventListener("click", () => {
      if (!canManage()) return;
      const board = currentTacticBoard();
      if (!window.confirm("Angemeldete Spieler fuer diese Taktik neu aus dem Termin laden? Die aktuelle 3D-Aufstellung wird zurueckgesetzt.")) return;
      board.threeData = null;
      board.updatedAt = new Date().toISOString();
      saveState();
    });
    $("#deleteTacticElementBtn")?.addEventListener("click", () => {
      if (!canManage() || !selectedTacticElementId) return;
      const board = currentTacticBoard();
      rememberTacticBoard(board);
      board.elements = board.elements.filter((element) => element.id !== selectedTacticElementId);
      selectedTacticElementId = "";
      saveState();
    });
    $("#clearTacticBoardBtn")?.addEventListener("click", () => {
      if (!canManage()) return;
      if (!window.confirm("Alle Elemente dieser Taktikgrafik loeschen?")) return;
      const board = currentTacticBoard();
      rememberTacticBoard(board);
      board.elements = [];
      selectedTacticElementId = "";
      saveState();
    });
    $("#tacticBoardList")?.addEventListener("click", (event) => {
      const button = event.target.closest("[data-open-tactic]");
      if (!button) return;
      selectedTacticBoardId = button.dataset.openTactic;
      selectedTacticElementId = "";
      tacticUndoStack = [];
      tacticRedoStack = [];
      renderTacticBoard();
    });
    $("#tacticBoardSvg")?.addEventListener("pointerdown", (event) => {
      if (!canManage()) return;
      const board = currentTacticBoard();
      const point = tacticSvgPoint(event);
      const tool = $("#tacticTool").value || "select";
      const options = tacticOptions();
      const target = event.target.closest?.("[data-tactic-id]");
      if (tool === "select") {
        if (!target) {
          selectedTacticElementId = "";
          renderTacticBoard();
          return;
        }
        selectedTacticElementId = target.dataset.tacticId;
        const element = board.elements.find((item) => item.id === selectedTacticElementId);
        loadTacticElementOptions(element);
        if (element) rememberTacticBoard(board);
        tacticPointer = element ? { mode: "move", id: element.id, start: point, original: { ...element } } : null;
        event.currentTarget.setPointerCapture?.(event.pointerId);
        renderTacticBoard();
        return;
      }
      if (tool === "line") {
        rememberTacticBoard(board);
        const element = {
          id: crypto.randomUUID(),
          type: "line",
          x1: point.x,
          y1: point.y,
          x2: point.x,
          y2: point.y,
          curve: options.lineCurve,
          lineStyle: options.lineStyle,
          end: options.lineEnd,
          color: options.lineColor,
          width: options.lineWidth,
          arrowSize: options.arrowSize
        };
        board.elements.push(element);
        selectedTacticElementId = element.id;
        tacticPointer = { mode: "line", id: element.id };
        event.currentTarget.setPointerCapture?.(event.pointerId);
        renderTacticBoard();
        return;
      }
      addTacticElement(tool, point);
    });
    $("#tacticBoardSvg")?.addEventListener("pointermove", (event) => {
      if (!tacticPointer) return;
      const board = currentTacticBoard();
      const point = tacticSvgPoint(event);
      const element = board.elements.find((item) => item.id === tacticPointer.id);
      if (!element) return;
      if (tacticPointer.mode === "line") {
        element.x2 = point.x;
        element.y2 = point.y;
      } else if (tacticPointer.mode === "move") {
        const dx = point.x - tacticPointer.start.x;
        const dy = point.y - tacticPointer.start.y;
        if (element.type === "line") {
          element.x1 = clampTacticX(tacticPointer.original.x1 + dx);
          element.y1 = clampTacticY(tacticPointer.original.y1 + dy);
          element.x2 = clampTacticX(tacticPointer.original.x2 + dx);
          element.y2 = clampTacticY(tacticPointer.original.y2 + dy);
        } else {
          element.x = clampTacticX(tacticPointer.original.x + dx);
          element.y = clampTacticY(tacticPointer.original.y + dy);
        }
      }
      renderTacticBoard();
    });
    $("#tacticBoardSvg")?.addEventListener("pointerup", () => {
      if (!tacticPointer) return;
      tacticPointer = null;
      currentTacticBoard().updatedAt = new Date().toISOString();
      saveState();
    });
    $("#prevCalendarBtn").addEventListener("click", () => {
      const date = new Date(`${calendarDate}T00:00`);
      if (calendarMode === "month") date.setMonth(date.getMonth() - 1);
      else date.setDate(date.getDate() - 7);
      calendarDate = isoDate(date);
      renderCalendar();
      renderEvents();
      renderAllEventsList();
      renderFines();
    });
    $("#nextCalendarBtn").addEventListener("click", () => {
      const date = new Date(`${calendarDate}T00:00`);
      if (calendarMode === "month") date.setMonth(date.getMonth() + 1);
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
      openEventModal("Training");
      const form = $("#eventForm");
      form.elements.date.value = day.dataset.calendarDate;
      form.elements.time.focus();
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
      requestedClubId = clubId;
      localStorage.setItem(CURRENT_CLUB_KEY, currentClubId);
      state = loadState();
      render();
      syncWithSupabase({ silent: true });
      loadPaypalSettings();
    }

    $("#clubSelect").addEventListener("change", () => changeClub($("#clubSelect").value));
    $("#loginClubSelect").addEventListener("change", () => {
      currentClubId = $("#loginClubSelect").value;
      requestedClubId = currentClubId;
      state = loadState();
      renderClubSelect();
      renderLoginUsers();
      renderInstallPanel();
      loadPaypalSettings();
    });
    $("#loginUser").addEventListener("change", () => {
      renderLoginClubOptionsForUser();
      fillSavedLoginPassword();
    });
    $("#loginForm").addEventListener("submit", async (event) => {
      event.preventDefault();
      currentClubId = $("#loginClubSelect").value;
      state = loadState();
      if (!clubLicenseAllowsAccess()) {
        $("#loginError").textContent = "Die Lizenz fuer diesen Verein ist gesperrt.";
        return;
      }
      const userName = $("#loginUser").value;
      const directoryRow = loginDirectoryRowsForUser(userName).find((row) => row.club_id === currentClubId);
      let player = playerByName(userName);
      if (!player && directoryRow) {
        await syncWithSupabase({ silent: true });
        player = playerByName(userName);
      }
      const password = $("#loginPassword").value;
      const directoryPassword = directoryRow ? (directoryRow.password || rowData(directoryRow).password || DEFAULT_PASSWORD) : "";
      const expectedPassword = player ? (player.password || DEFAULT_PASSWORD) : directoryPassword;
      if ((!player && !directoryRow) || expectedPassword !== password) {
        $("#loginError").textContent = "Name oder Passwort ist falsch.";
        return;
      }
      clearSuperadminOverride();
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
      const licenseWarning = licenseLoginWarningText();
      if (licenseWarning) window.alert(licenseWarning);
      await syncWithSupabase({ silent: true });
      await handleIncomingTransferPrompts();
      loadPaypalSettings();
    });
    $("#logoutBtn").addEventListener("click", () => {
      localStorage.removeItem(LOGIN_KEY);
      sessionStorage.removeItem(LOGIN_KEY);
      clearSuperadminOverride();
      updateAppBadge(0);
      renderLoginUsers();
      renderClubSelect();
      setLoginVisible(true);
    });
    $("#addClubBtn")?.addEventListener("click", () => {
      if (!canManage()) return;
      const name = $("#newClubName").value.trim();
      if (!name) return;
      const now = new Date().toISOString();
      const club = touchClub({
        id: crypto.randomUUID(),
        name,
        color: normalizeHexColor(currentClub().color),
        logo: "",
        league: "",
        federalState: "",
        licenseKey: generateLicenseKey(),
        licenseStatus: "trial",
        licenseActivatedAt: now,
        licenseExpiresAt: addDaysIso(now, TRIAL_DAYS),
        licenseAutoRenew: false
      });
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
      renderInstallPanel();
    });

    $("#installAppBtn").addEventListener("click", async () => {
      if (!deferredInstallPrompt) return;
      deferredInstallPrompt.prompt();
      await deferredInstallPrompt.userChoice.catch(() => {});
      deferredInstallPrompt = null;
      renderInstallPanel();
    });

    $("#copyClubLinkBtn")?.addEventListener("click", async () => {
      const url = clubInstallUrl();
      await navigator.clipboard?.writeText(url).catch(() => {});
      setStatus("Vereinslink kopiert.");
    });

    $("#enablePushBtn")?.addEventListener("click", enablePushNotifications);

    $("#currentUser").value = localStorage.getItem(LOGIN_USER_KEY) || state.players[0]?.name || "";
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
    refreshLoginDirectory().catch(() => {});
    loadPaypalSettings();

    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("service-worker.js").catch(() => {});
      });
    }
  
