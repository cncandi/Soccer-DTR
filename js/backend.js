const DEFAULT_SUPABASE_URL = "https://pihgvwnoznqhautudhlx.supabase.co";
const DEFAULT_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpaGd2d25vem5xaGF1dHVkaGx4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk2NDA0NjMsImV4cCI6MjA5NTIxNjQ2M30.7BSIzhcHNibC4Tkz0Id7AnNGxFJTtx9cxF5UFX6QiGA";
const BACKEND_SESSION_KEY = "kadrivo-backend-superadmin";
const BACKEND_SUPERADMIN_HASHES = new Set([
  "f0fcd7a64b3453653b139c45d04e1fd5f20e5b7c4fa95a5078af3d9c8c842fb1"
]);
const BACKEND_SUPERADMIN_PASSWORD_FALLBACK = "RiMjI21pbGw1NQ==";
const PUBLIC_APP_URL = "https://cncandi.github.io/Soccer-DTR/";
const CLUB_URL_PARAM = "club";
const TRIAL_DAYS = 21;
const FULL_LICENSE_DAYS = 365;
const CLUB_LEAGUES = ["Bundesliga", "2. Bundesliga", "3. Liga", "Regionalliga", "Oberliga", "Verbandsliga", "Gruppenliga", "Kreisoberliga", "Kreisliga A", "Kreisliga B", "Kreisliga C", "Kreisliga D", "Jugendliga", "Freizeitliga", "Sonstiges"];
const FEDERAL_STATES = ["Baden-Wuerttemberg", "Bayern", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hessen", "Mecklenburg-Vorpommern", "Niedersachsen", "Nordrhein-Westfalen", "Rheinland-Pfalz", "Saarland", "Sachsen", "Sachsen-Anhalt", "Schleswig-Holstein", "Thueringen"];
const FREE_MODULE_KEYS = new Set(["dashboard", "players", "events", "settings"]);
const PAID_MODULE_KEYS = new Set(["tactics", "messages", "polls", "cash", "fame"]);
const CLUB_MODULES = [
  ["dashboard", "Uebersicht", "free"],
  ["players", "Spieler", "free"],
  ["events", "Training & Spiele", "free"],
  ["scouting", "Scouting", "addon"],
  ["tactics", "Taktikboard", "paid"],
  ["messages", "Mitteilungen", "paid"],
  ["polls", "Abstimmungen", "paid"],
  ["cash", "Kasse", "paid"],
  ["fame", "Hall of Fame", "paid"],
  ["settings", "Einstellungen", "free"]
];

const $ = (selector) => document.querySelector(selector);

const client = window.supabase.createClient(DEFAULT_SUPABASE_URL, DEFAULT_SUPABASE_ANON_KEY);

let backend = {
  clubs: [],
  players: [],
  events: [],
  rsvps: [],
  cash: [],
  messages: [],
  polls: [],
  fame: [],
  paypal: [],
  licenseColumnsReady: true,
  selectedClubId: ""
};

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  }[char]));
}

function formatDate(value) {
  const date = Date.parse(value || "");
  return Number.isFinite(date) ? new Date(date).toLocaleDateString("de-DE") : "-";
}

function formatDateTime(value) {
  const date = Date.parse(value || "");
  return Number.isFinite(date) ? new Date(date).toLocaleString("de-DE") : "-";
}

function addDaysIso(value, days) {
  const date = new Date(value);
  date.setDate(date.getDate() + days);
  return date.toISOString();
}

function daysLeft(club) {
  const expiresAt = Date.parse(club.license_expires_at || "");
  if (!Number.isFinite(expiresAt)) return null;
  return Math.ceil((expiresAt - Date.now()) / 86400000);
}

function licenseExpired(club) {
  if (club.license_status === "blocked") return true;
  if (club.license_status === "active" && club.license_auto_renew) return false;
  const days = daysLeft(club);
  return days !== null && days < 0;
}

function licenseClass(club) {
  if (licenseExpired(club)) return "expired";
  return club.license_status || "trial";
}

function licenseLabel(club) {
  const status = {
    trial: "Testlizenz",
    active: "Vollversion",
    blocked: "Gesperrt"
  }[club.license_status] || "Testlizenz";
  const days = daysLeft(club);
  if (club.license_status === "active" && club.license_auto_renew) return `${status}, Auto-Verlaengerung`;
  if (days === null) return status;
  if (days < 0) return `${status}, abgelaufen`;
  return `${status}, ${days} Tage`;
}

function clubLink(club) {
  const url = new URL(PUBLIC_APP_URL);
  url.searchParams.set(CLUB_URL_PARAM, club.slug || club.id);
  return url.toString();
}

function formValues(form) {
  return Object.fromEntries(new FormData(form).entries());
}

function optionListWithEmpty(options, selected) {
  return ["", ...options]
    .map((option) => `<option value="${escapeHtml(option)}" ${option === selected ? "selected" : ""}>${escapeHtml(option)}</option>`)
    .join("");
}

function normalizeModules(value) {
  const raw = value && typeof value === "object" ? value : {};
  return Object.fromEntries(CLUB_MODULES.map(([key]) => [key, raw[key] !== false]));
}

function moduleTypeLabel(type) {
  return {
    free: "Kostenfrei",
    paid: "Kostenpflichtig",
    addon: "Zusatzmodul"
  }[type] || "Modul";
}

function withTimeout(promise, ms, message) {
  return Promise.race([
    promise,
    new Promise((_, reject) => window.setTimeout(() => reject(new Error(message)), ms))
  ]);
}

async function fetchJson(endpoint, options = {}) {
  const response = await fetch(`${DEFAULT_SUPABASE_URL}/rest/v1/${endpoint}`, {
    ...options,
    headers: {
      apikey: DEFAULT_SUPABASE_ANON_KEY,
      authorization: `Bearer ${DEFAULT_SUPABASE_ANON_KEY}`,
      ...(options.headers || {})
    }
  });
  const text = await response.text();
  const data = text ? JSON.parse(text) : null;
  if (!response.ok) throw new Error(data?.message || data?.error || `HTTP ${response.status}`);
  return data;
}

async function verifySuperadmin(password) {
  const value = String(password || "").trim();
  if (!value) return null;
  if (value === atob(BACKEND_SUPERADMIN_PASSWORD_FALLBACK)) return { name: "Superadmin" };
  if (window.crypto?.subtle) {
    const localHash = await sha256Hex(value);
    if (BACKEND_SUPERADMIN_HASHES.has(localHash)) return { name: "Superadmin" };
  }
  const data = await withTimeout(
    fetchJson("players?select=name,password,role&role=eq.Superadmin"),
    6000,
    "Supabase antwortet beim Login nicht. Bitte Verbindung pruefen und neu laden."
  );
  return (data || []).find((player) => String(player.password || "fussball").trim() === value) || null;
}

async function sha256Hex(value) {
  const bytes = new TextEncoder().encode(value);
  const hash = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(hash)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function fetchTable(table, select = "*", label = table) {
  const { data, error } = await withTimeout(
    client.from(table).select(select),
    8000,
    `${label} konnte nicht geladen werden.`
  );
  if (error) {
    if ((error.message || "").includes("Could not find") || (error.message || "").includes("schema cache")) return [];
    throw error;
  }
  return data || [];
}

async function fetchClubs() {
  const withLicense = await withTimeout(
    client
      .from("clubs")
      .select("id,name,slug,color,logo,sport,league,federal_state,modules,license_key,license_status,license_activated_at,license_expires_at,license_auto_renew,created_at,updated_at"),
    8000,
    "Vereine konnten nicht geladen werden."
  );
  if (!withLicense.error) {
    backend.licenseColumnsReady = true;
    return withLicense.data || [];
  }
  const message = withLicense.error.message || "";
  const missingOptionalClubColumn = ["slug", "license_activated_at", "license_expires_at", "license_auto_renew", "sport", "league", "federal_state", "modules"]
    .some((column) => message.includes(column));
  if (!missingOptionalClubColumn) {
    throw withLicense.error;
  }
  const fallback = await withTimeout(
    client
      .from("clubs")
      .select("id,name,color,logo,license_key,license_status,created_at,updated_at"),
    8000,
    "Vereine konnten nicht geladen werden."
  );
  if (fallback.error) throw fallback.error;
  backend.licenseColumnsReady = false;
  return (fallback.data || []).map((club) => ({
    ...club,
    license_activated_at: club.created_at || null,
    license_expires_at: null,
    license_auto_renew: false,
    modules: normalizeModules(null)
  }));
}

async function loadBackendData() {
  $("#backendStatus").textContent = "Daten werden geladen ...";
  const [clubs, players, events, rsvps, cash, messages, polls, fame, paypal] = await Promise.all([
    fetchClubs(),
    fetchTable("players", "id,club_id,name,password,role,groups,updated_at", "Spieler"),
    fetchTable("events", "id,club_id,date,type,title", "Termine"),
    fetchTable("event_rsvps", "event_id,player_id,status,updated_at", "Zu-/Absagen"),
    fetchTable("cash_entries", "id,club_id,player_id,player_name,paid,amount,date", "Kasse"),
    fetchTable("messages", "id,club_id,created_at", "Mitteilungen"),
    fetchTable("polls", "id,club_id", "Abstimmungen"),
    fetchTable("hall_of_fame_entries", "id,club_id,player_id,player_name,category,value", "Hall of Fame"),
    fetchTable("club_paypal_settings", "club_id,paypal_enabled,paypal_mode,paypal_receiver_email,updated_at", "PayPal")
  ]);
  backend = {
    ...backend,
    clubs: clubs
      .map((club) => ({ ...club, modules: normalizeModules(club.modules) }))
      .sort((a, b) => (a.name || "").localeCompare(b.name || "", "de")),
    players,
    events,
    rsvps,
    cash,
    messages,
    polls,
    fame,
    paypal
  };
  if (!backend.selectedClubId && backend.clubs[0]) backend.selectedClubId = backend.clubs[0].id;
  renderBackend();
  $("#backendStatus").textContent = `Aktualisiert: ${new Date().toLocaleTimeString("de-DE")}`;
}

function countsForClub(clubId) {
  const eventIds = new Set(backend.events.filter((event) => event.club_id === clubId).map((event) => event.id));
  const playerIds = new Set(backend.players.filter((player) => player.club_id === clubId).map((player) => player.id));
  return {
    players: playerIds.size,
    admins: backend.players.filter((player) => player.club_id === clubId && ["Admin", "Superadmin"].includes(player.role)).length,
    events: eventIds.size,
    rsvps: backend.rsvps.filter((rsvp) => eventIds.has(rsvp.event_id)).length,
    cash: backend.cash.filter((entry) => entry.club_id === clubId).length,
    messages: backend.messages.filter((message) => message.club_id === clubId).length,
    polls: backend.polls.filter((poll) => poll.club_id === clubId).length,
    fame: backend.fame.filter((entry) => entry.club_id === clubId).length
  };
}

function renderBackend() {
  renderStats();
  renderClubList();
  renderDetails();
}

function renderStats() {
  const active = backend.clubs.filter((club) => club.license_status === "active").length;
  const trial = backend.clubs.filter((club) => club.license_status === "trial").length;
  const expired = backend.clubs.filter(licenseExpired).length;
  const auto = backend.clubs.filter((club) => club.license_auto_renew).length;
  $("#backendStats").innerHTML = [
    ["Vereine", backend.clubs.length],
    ["Testlizenz", trial],
    ["Vollversion", active],
    ["Abgelaufen", expired],
    ["Auto-Verlaengerung", auto]
  ].map(([label, value]) => `<article class="stat"><strong>${value}</strong><span>${label}</span></article>`).join("");
}

function renderClubList() {
  const query = ($("#clubSearch").value || "").trim().toLowerCase();
  const clubs = backend.clubs.filter((club) => !query || (club.name || "").toLowerCase().includes(query));
  $("#backendClubList").innerHTML = clubs.map((club) => {
    const counts = countsForClub(club.id);
    return `
      <button class="club-button ${club.id === backend.selectedClubId ? "active" : ""}" data-club-id="${escapeHtml(club.id)}" type="button">
        <strong>${escapeHtml(club.name)}</strong>
        <span class="meta">${escapeHtml(club.id)}</span>
        <span class="pill-row">
          <span class="pill ${licenseClass(club)}">${escapeHtml(licenseLabel(club))}</span>
          <span class="pill">${counts.players} Personen</span>
          <span class="pill">${counts.events} Termine</span>
        </span>
      </button>
    `;
  }).join("") || `<div class="empty">Keine Vereine gefunden.</div>`;
}

function selectedClub() {
  return backend.clubs.find((club) => club.id === backend.selectedClubId) || backend.clubs[0] || null;
}

function renderDetails() {
  const club = selectedClub();
  if (!club) {
    $("#backendDetails").innerHTML = `<div class="empty">Noch keine Vereine vorhanden.</div>`;
    return;
  }
  const counts = countsForClub(club.id);
  const admins = backend.players.filter((player) => player.club_id === club.id && ["Admin", "Superadmin"].includes(player.role));
  const players = backend.players.filter((player) => player.club_id === club.id);
  const paypal = backend.paypal.find((item) => item.club_id === club.id);
  const licenseWarning = backend.licenseColumnsReady ? "" : `
    <div class="warning-box">
      Die Lizenzspalten fehlen noch in Supabase. Vereine und Nutzung werden angezeigt, Lizenz-Aenderungen sind bis zur Migration gesperrt.
    </div>
  `;
  $("#backendDetails").innerHTML = `
    <div class="panel-head">
      <div>
        <span class="eyebrow">Verein</span>
        <h2>${escapeHtml(club.name)}</h2>
        <div class="pill-row">
          <span class="pill ${licenseClass(club)}">${escapeHtml(licenseLabel(club))}</span>
          ${club.license_auto_renew ? `<span class="pill auto">Automatische Verlaengerung</span>` : ""}
          <span class="pill">Ablauf: ${formatDate(club.license_expires_at)}</span>
        </div>
      </div>
    </div>

    <div class="section-grid">
      <section class="detail-card">
        <h3>Superadmin-Einstellungen</h3>
        ${licenseWarning}
        <form id="licenseForm" class="form-grid">
          <input type="hidden" name="clubId" value="${escapeHtml(club.id)}">
          <div class="field full"><label>Lizenznummer</label><input name="licenseKey" value="${escapeHtml(club.license_key || "")}" readonly></div>
          <div class="field full">
            <label>Vereinslink</label>
            <div class="copy-field">
              <input value="${escapeHtml(clubLink(club))}" readonly>
              <button class="btn-secondary" type="button" data-copy-club-link="${escapeHtml(club.id)}">Kopieren</button>
            </div>
          </div>
          <div class="field"><label>Lizenzstatus</label><select name="licenseStatus">
            ${["trial", "active", "blocked"].map((status) => `<option value="${status}" ${club.license_status === status ? "selected" : ""}>${escapeHtml({ trial: "Testlizenz", active: "Vollversion", blocked: "Gesperrt" }[status])}</option>`).join("")}
          </select></div>
          <div class="field"><label>Ablaufdatum</label><input name="licenseExpiresAt" type="date" value="${escapeHtml((club.license_expires_at || "").slice(0, 10))}"></div>
          <div class="field full"><label class="check-row"><input name="licenseAutoRenew" type="checkbox" ${club.license_auto_renew ? "checked" : ""}> Automatische Verlaengerung</label></div>
          <div class="field full">
            <label>Module fuer diesen Verein</label>
            ${renderModuleControls(club)}
            <p class="meta">Kostenfrei: Uebersicht, Spieler, Training & Spiele, Einstellungen. Kostenpflichtig: Taktikboard, Mitteilungen, Abstimmungen, Kasse, Hall of Fame.</p>
          </div>
          <div class="field full row-actions">
            <button class="btn-primary" type="submit" ${backend.licenseColumnsReady ? "" : "disabled"}>Lizenz speichern</button>
            <button class="btn-secondary" type="button" data-set-license="trial" ${backend.licenseColumnsReady ? "" : "disabled"}>Trial neu starten</button>
            <button class="btn-secondary" type="button" data-set-license="active" ${backend.licenseColumnsReady ? "" : "disabled"}>Vollversion 1 Jahr</button>
          </div>
        </form>
      </section>

      <section class="detail-card">
        <h3>Vereinsadmin-Einstellungen</h3>
        <form id="clubSettingsForm" class="form-grid">
          <input type="hidden" name="clubId" value="${escapeHtml(club.id)}">
          <div class="field full"><label>Vereinsname</label><input name="name" value="${escapeHtml(club.name || "")}" required></div>
          <div class="field"><label>Liga</label><select name="league">${optionListWithEmpty(CLUB_LEAGUES, club.league || "")}</select></div>
          <div class="field"><label>Bundesland</label><select name="federalState">${optionListWithEmpty(FEDERAL_STATES, club.federal_state || "")}</select></div>
          <div class="field"><label>Farbe</label><input name="color" type="color" value="${escapeHtml(club.color || "#155e3b")}"></div>
          <div class="field full"><label>Logo URL / Data URL</label><textarea name="logo">${escapeHtml(club.logo || "")}</textarea></div>
          <div class="field full"><button class="btn-primary" type="submit">Vereinsdaten speichern</button></div>
        </form>
        <div class="meta">
          PayPal: ${paypal ? `${paypal.paypal_enabled ? "aktiv" : "inaktiv"} · ${escapeHtml(paypal.paypal_mode || "sandbox")} · ${escapeHtml(paypal.paypal_receiver_email || "keine E-Mail")}` : "nicht eingerichtet"}
        </div>
      </section>

      <section class="detail-card">
        <h3>Nutzung Verein</h3>
        <table class="table">
          <tbody>
            ${Object.entries({
              Personen: counts.players,
              Admins: counts.admins,
              Termine: counts.events,
              Zusagen: counts.rsvps,
              Kasse: counts.cash,
              Mitteilungen: counts.messages,
              Abstimmungen: counts.polls,
              "Hall of Fame": counts.fame
            }).map(([label, value]) => `<tr><th>${escapeHtml(label)}</th><td>${value}</td></tr>`).join("")}
          </tbody>
        </table>
      </section>

      <section class="detail-card">
        <h3>Admins</h3>
        ${renderAdminTable(admins)}
      </section>

      <section class="detail-card full">
        <h3>Nutzung Spieler</h3>
        ${renderPlayerUsageTable(players, club.id)}
      </section>
    </div>
  `;
}

function renderModuleControls(club) {
  const modules = normalizeModules(club.modules);
  return `
    <div class="module-grid">
      ${CLUB_MODULES.map(([key, label, type]) => `
        <label class="module-toggle ${type}">
          <input type="checkbox" name="module_${escapeHtml(key)}" ${modules[key] !== false ? "checked" : ""}>
          <span>
            <strong>${escapeHtml(label)}</strong>
            <small>${escapeHtml(moduleTypeLabel(type))}</small>
          </span>
        </label>
      `).join("")}
    </div>
  `;
}

function renderAdminTable(admins) {
  if (!admins.length) return `<div class="empty">Keine Admins angelegt.</div>`;
  return `
    <table class="table">
      <thead><tr><th>Name</th><th>Rolle</th><th>Gruppen</th><th>Aktualisiert</th></tr></thead>
      <tbody>
        ${admins.map((admin) => `<tr><td>${escapeHtml(admin.name)}</td><td>${escapeHtml(admin.role)}</td><td>${escapeHtml((admin.groups || []).join(", "))}</td><td>${formatDateTime(admin.updated_at)}</td></tr>`).join("")}
      </tbody>
    </table>
  `;
}

function renderPlayerUsageTable(players, clubId) {
  if (!players.length) return `<div class="empty">Keine Spieler angelegt.</div>`;
  const eventIds = new Set(backend.events.filter((event) => event.club_id === clubId).map((event) => event.id));
  const rows = players
    .map((player) => {
      const rsvps = backend.rsvps.filter((rsvp) => rsvp.player_id === player.id && eventIds.has(rsvp.event_id));
      const yes = rsvps.filter((rsvp) => rsvp.status === "yes").length;
      const no = rsvps.filter((rsvp) => rsvp.status === "no").length;
      const cash = backend.cash.filter((entry) => entry.player_id === player.id || entry.player_name === player.name).length;
      const fame = backend.fame.filter((entry) => entry.player_id === player.id || entry.player_name === player.name).length;
      return { player, rsvps: rsvps.length, yes, no, cash, fame };
    })
    .sort((a, b) => b.rsvps - a.rsvps || a.player.name.localeCompare(b.player.name, "de"));
  return `
    <table class="table">
      <thead><tr><th>Name</th><th>Rolle</th><th>Zusagen</th><th>Absagen</th><th>Antworten</th><th>Kasse</th><th>Fame</th></tr></thead>
      <tbody>
        ${rows.map((row) => `<tr><td>${escapeHtml(row.player.name)}</td><td>${escapeHtml(row.player.role)}</td><td>${row.yes}</td><td>${row.no}</td><td>${row.rsvps}</td><td>${row.cash}</td><td>${row.fame}</td></tr>`).join("")}
      </tbody>
    </table>
  `;
}

async function updateClubDocument(club) {
  const { data } = await client.from("club_documents").select("document").eq("id", "club-state:clubs").maybeSingle();
  const existing = Array.isArray(data?.document?.clubs) ? data.document.clubs : [];
  const clubs = existing.map((item) => item.id === club.id ? {
    ...item,
    name: club.name,
    slug: club.slug || item.slug || "",
    color: club.color,
    logo: club.logo,
    league: club.league || "",
    federalState: club.federal_state || "",
    modules: normalizeModules(club.modules),
    licenseKey: club.license_key,
    licenseStatus: club.license_status,
    licenseActivatedAt: club.license_activated_at,
    licenseExpiresAt: club.license_expires_at,
    licenseAutoRenew: club.license_auto_renew
  } : item);
  if (!clubs.some((item) => item.id === club.id)) {
    clubs.push({
      id: club.id,
      name: club.name,
      slug: club.slug || "",
      color: club.color,
      logo: club.logo,
      league: club.league || "",
      federalState: club.federal_state || "",
      modules: normalizeModules(club.modules),
      licenseKey: club.license_key,
      licenseStatus: club.license_status,
      licenseActivatedAt: club.license_activated_at,
      licenseExpiresAt: club.license_expires_at,
      licenseAutoRenew: club.license_auto_renew
    });
  }
  await client.from("club_documents").upsert({
    id: "club-state:clubs",
    document: { clubs },
    updated_at: new Date().toISOString()
  });
}

async function saveLicense(values) {
  if (!backend.licenseColumnsReady) {
    window.alert("Bitte zuerst die Lizenz-Migration in Supabase ausfuehren.");
    return;
  }
  const now = new Date().toISOString();
  const expiresAt = values.licenseExpiresAt ? new Date(`${values.licenseExpiresAt}T23:59:59`).toISOString() : null;
  const payload = {
    license_status: values.licenseStatus,
    license_expires_at: expiresAt,
    license_auto_renew: values.licenseAutoRenew === "on",
    modules: Object.fromEntries(CLUB_MODULES.map(([key]) => [key, values[`module_${key}`] === "on"])),
    updated_at: now
  };
  const current = backend.clubs.find((club) => club.id === values.clubId);
  if (current && current.license_status !== values.licenseStatus) {
    payload.license_activated_at = now;
    if (!values.licenseExpiresAt) {
      payload.license_expires_at = addDaysIso(now, values.licenseStatus === "active" ? FULL_LICENSE_DAYS : TRIAL_DAYS);
    }
  }
  const { data, error } = await client.from("clubs").update(payload).eq("id", values.clubId).select().single();
  if (error) throw error;
  await updateClubDocument(data);
  await loadBackendData();
}

async function setLicense(clubId, status) {
  if (!backend.licenseColumnsReady) {
    window.alert("Bitte zuerst die Lizenz-Migration in Supabase ausfuehren.");
    return;
  }
  const now = new Date().toISOString();
  const { data, error } = await client.from("clubs").update({
    license_status: status,
    license_activated_at: now,
    license_expires_at: addDaysIso(now, status === "active" ? FULL_LICENSE_DAYS : TRIAL_DAYS),
    license_auto_renew: status === "active",
    updated_at: now
  }).eq("id", clubId).select().single();
  if (error) throw error;
  await updateClubDocument(data);
  await loadBackendData();
}

async function saveClubSettings(values) {
  const payload = {
    name: values.name.trim(),
    league: values.league || "",
    federal_state: values.federalState || "",
    color: values.color || "#155e3b",
    logo: values.logo || "",
    updated_at: new Date().toISOString()
  };
  let result = await client.from("clubs").update(payload).eq("id", values.clubId).select().single();
  if (result.error && ["league", "federal_state"].some((column) => (result.error.message || "").includes(column))) {
    const { league, federal_state, ...legacyPayload } = payload;
    result = await client.from("clubs").update(legacyPayload).eq("id", values.clubId).select().single();
  }
  const { data, error } = result;
  if (error) throw error;
  await updateClubDocument(data);
  await loadBackendData();
}

function showBackend() {
  $("#backendLogin").hidden = true;
  $("#backendApp").hidden = false;
}

$("#backendLoginForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const status = $("#backendLoginStatus");
  status.textContent = "Pruefe Zugriff ...";
  try {
    const superadmin = await verifySuperadmin(formValues(event.currentTarget).password);
    if (!superadmin) {
      status.textContent = "Passwort ist falsch.";
      return;
    }
    status.textContent = "Zugriff bestaetigt. Lade Backend-Daten ...";
    sessionStorage.setItem(BACKEND_SESSION_KEY, superadmin.name);
    showBackend();
    try {
      await loadBackendData();
    } catch (loadError) {
      $("#backendStatus").textContent = "Backend geoeffnet, aber Daten konnten nicht geladen werden: " + (loadError.message || String(loadError));
    }
  } catch (error) {
    status.textContent = error.message || String(error);
  }
});

$("#backendLogoutBtn").addEventListener("click", () => {
  sessionStorage.removeItem(BACKEND_SESSION_KEY);
  location.reload();
});

$("#refreshBackendBtn").addEventListener("click", loadBackendData);
$("#clubSearch").addEventListener("input", renderClubList);

document.addEventListener("click", async (event) => {
  const clubButton = event.target.closest("[data-club-id]");
  if (clubButton) {
    backend.selectedClubId = clubButton.dataset.clubId;
    renderBackend();
    return;
  }
  const licenseButton = event.target.closest("[data-set-license]");
  if (licenseButton) {
    const club = selectedClub();
    if (!club) return;
    licenseButton.disabled = true;
    try {
      await setLicense(club.id, licenseButton.dataset.setLicense);
    } finally {
      licenseButton.disabled = false;
    }
    return;
  }
  const copyButton = event.target.closest("[data-copy-club-link]");
  if (copyButton) {
    const club = backend.clubs.find((item) => item.id === copyButton.dataset.copyClubLink);
    if (!club) return;
    await navigator.clipboard?.writeText(clubLink(club)).catch(() => {});
    copyButton.textContent = "Kopiert";
    window.setTimeout(() => {
      copyButton.textContent = "Kopieren";
    }, 1200);
  }
});

document.addEventListener("submit", async (event) => {
  if (event.target.id === "licenseForm") {
    event.preventDefault();
    await saveLicense(formValues(event.target));
  }
  if (event.target.id === "clubSettingsForm") {
    event.preventDefault();
    await saveClubSettings(formValues(event.target));
  }
});

if (sessionStorage.getItem(BACKEND_SESSION_KEY)) {
  showBackend();
  loadBackendData();
}
