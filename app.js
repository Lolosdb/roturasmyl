// --- Configuration ---
const STORAGE_KEYS = {
    PHONE: 'roturas_target_phone',
    WA_APP: 'roturas_wa_app',
    THEME: 'roturas_theme',
    DRIVE_API_URL: 'roturas_drive_api_url',
    DRIVE_TOKEN: 'roturas_drive_token',
    CLIENTS_DB: 'roturas_clients_db',
    CLIENTS_SYNC_META: 'roturas_clients_sync_meta'
};

const CONFIG = {
    DEFAULT_PHONE: '34686227744', // Número por defecto
    get WHATSAPP_PHONE() {
        const saved = localStorage.getItem(STORAGE_KEYS.PHONE);
        return (saved && saved.trim() !== '') ? saved : this.DEFAULT_PHONE;
    },
    get WA_APP() {
        return 'business';
    },
    get THEME() {
        const saved = localStorage.getItem(STORAGE_KEYS.THEME);
        return (saved === 'light' || saved === 'dark') ? saved : 'auto';
    },
    get DRIVE_API_URL() {
        return (localStorage.getItem(STORAGE_KEYS.DRIVE_API_URL) || '').trim();
    },
    get DRIVE_TOKEN() {
        return (localStorage.getItem(STORAGE_KEYS.DRIVE_TOKEN) || '').trim();
    }
};

// Mapeo por cabecera normalizada (mayúsculas, sin tildes ni espacios extra)
const EXCEL_COLUMN_MAP = {
    'CODIGO': 'code',
    'TIENDA': 'name',
    'NIF': 'nif',
    'MAIL': 'mail',
    'DIRECCION': 'address',
    'CONTACTO': 'contact',
    'POBLACION': 'city',
    'PROVINCIA': 'province',
    'CP': 'postalCode',
    'TELEFONO': 'phone',
    'HORARIO': 'schedule',
    'NOTAS': 'notes',
    'ULTIMA VISITA': 'lastVisit',
    'NOTA VISITA': 'visitNote',
    'LATITUD': 'lat',
    'LONGITUD': 'lng',
    'TELEFONO 2': 'phone2'
};

// --- State ---
let clientsDB = [];
let syncStatusTimer = null;

let state = {
    orderNumber: '',
    selectedClient: null,
    items: [],
    isSettingsOpen: false,
    isSyncing: false
};

// --- DOM Elements ---
let els = {};

// --- Initialization ---
function initApp() {
    // 1. Capture DOM elements
    els = {
        orderInput: document.getElementById('orderNumber'),
        clientSearchData: document.getElementById('clientSearch'),
        clientSuggestions: document.getElementById('clientSuggestions'),
        selectedClientDisplay: document.getElementById('selectedClientDisplay'),
        selectedClientName: document.getElementById('selectedClientName'),
        clearClientBtn: document.getElementById('clearClientBtn'),
        itemCodeInput: document.getElementById('itemCode'),
        itemQtyInput: document.getElementById('itemQty'),
        itemCommentInput: document.getElementById('itemComment'),
        addItemBtn: document.getElementById('addItemBtn'),
        itemsList: document.getElementById('itemsList'),
        sendBtn: document.getElementById('sendBtn'),
        syncClientsBtn: document.getElementById('syncClientsBtn'),
        syncStatusBanner: document.getElementById('syncStatusBanner'),
        settingsBtn: document.getElementById('settingsBtn'),
        settingsModal: document.getElementById('settingsModal'),
        closeSettingsBtn: document.getElementById('closeSettingsBtn'),
        saveSettingsBtn: document.getElementById('saveSettingsBtn'),
        phoneInput: document.getElementById('phoneInput'),
        currentPhoneDisplay: document.getElementById('currentPhoneDisplay'),
        changePhoneBtn: document.getElementById('changePhoneBtn'),
        themeSelect: document.getElementById('themeSelect'),
        waAppSelect: document.getElementById('waAppSelect'),
        driveApiUrlInput: document.getElementById('driveApiUrlInput'),
        driveTokenInput: document.getElementById('driveTokenInput'),
        clientsDbInfo: document.getElementById('clientsDbInfo')
    };

    // 2. Load Clients DB (clients.js + localStorage) & Apply Theme
    applyTheme(CONFIG.THEME);
    clientsDB = loadClientsDatabase();

    // 3. Attach Event Listeners
    setupEventListeners();

    // 4. Initial Render
    updatePhoneDisplay();
    updateClientsDbInfo();

    console.log('Luxe App Initialized. Clients:', clientsDB.length);
}

function setupEventListeners() {
    // Order info
    els.orderInput?.addEventListener('input', (e) => state.orderNumber = e.target.value);

    // Settings & Sync
    els.syncClientsBtn?.addEventListener('click', syncClientsFromDrive);
    els.settingsBtn?.addEventListener('click', openSettings);
    els.closeSettingsBtn?.addEventListener('click', closeSettings);
    els.saveSettingsBtn?.addEventListener('click', saveSettings);
    els.changePhoneBtn?.addEventListener('click', openSettings);
    els.themeSelect?.addEventListener('change', (e) => applyTheme(e.target.value));

    // Client Search
    els.clientSearchData?.addEventListener('input', handleClientSearch);
    els.clearClientBtn?.addEventListener('click', clearSelectedClient);

    // Item Comment logic (Shortcuts & Capitalization)
    setupCommentLogic();

    // Items management
    els.addItemBtn?.addEventListener('click', addItem);
    
    // Manejo de Enter para saltar entre campos
    els.orderInput?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            els.clientSearchData.focus();
        }
    });

    els.itemCodeInput?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            els.itemQtyInput.focus();
        }
    });

    els.itemQtyInput?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            els.itemCommentInput.focus();
        }
    });

    els.itemCommentInput?.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            // En el último campo, primero aplicamos shortcuts y luego añadimos
            const val = e.target.value.trim().toUpperCase();
            if (val === 'R') e.target.value = 'Rotura';
            else if (val === 'D') e.target.value = 'Devolución';
            
            addItem();
        }
    });


    // Send WhatsApp
    els.sendBtn?.addEventListener('click', sendWhatsApp);

    // Global delete listener
    document.addEventListener('removeItem', (e) => removeFromList(e.detail));
}

function setupCommentLogic() {
    if (!els.itemCommentInput) return;

    // Auto-clear on focus
    els.itemCommentInput.addEventListener('focus', () => {
        els.itemCommentInput.value = '';
    });

    const checkShortcuts = (e) => {
        const val = e.target.value.trim().toUpperCase();
        if (val === 'R') {
            e.target.value = 'Rotura';
        } else if (val === 'D') {
            e.target.value = 'Devolución';
        }
    };

    els.itemCommentInput.addEventListener('blur', checkShortcuts);

    // Capitalize first letter
    els.itemCommentInput.addEventListener('input', (e) => {
        let val = e.target.value;
        if (val.length > 0) {
            if (val[0] !== val[0].toUpperCase()) {
                const start = e.target.selectionStart;
                const end = e.target.selectionEnd;
                e.target.value = val[0].toUpperCase() + val.slice(1);
                e.target.setSelectionRange(start, end);
            }
        }
    });
}

// --- Logic Functions ---

function handleClientSearch(e) {
    const query = e.target.value.toLowerCase();

    if (query.length < 2) {
        els.clientSuggestions?.classList.add('hidden');
        return;
    }

    if (!clientsDB || clientsDB.length === 0) return;

    const matches = clientsDB.filter(c =>
        (c.name?.toLowerCase().includes(query)) ||
        (c.code?.toLowerCase().includes(query))
    ).slice(0, 20);

    renderSuggestions(matches);
}

function renderSuggestions(matches) {
    if (!els.clientSuggestions) return;
    els.clientSuggestions.innerHTML = '';

    if (matches.length === 0) {
        els.clientSuggestions.classList.add('hidden');
        return;
    }

    matches.forEach(client => {
        const div = document.createElement('div');
        div.className = 'suggestion-item';

        const codeSpan = document.createElement('span');
        codeSpan.className = 'suggestion-code';
        codeSpan.textContent = client.code;

        div.appendChild(codeSpan);
        div.appendChild(document.createTextNode(' ' + client.name));
        div.onclick = () => selectClient(client);
        els.clientSuggestions.appendChild(div);
    });

    els.clientSuggestions.classList.remove('hidden');
}

function selectClient(client) {
    state.selectedClient = client;
    els.selectedClientName.textContent = `${client.code} - ${client.name}`;
    els.selectedClientDisplay.classList.remove('hidden');
    els.clientSearchData.classList.add('hidden');
    els.clientSuggestions.classList.add('hidden');
}

function clearSelectedClient() {
    state.selectedClient = null;
    els.selectedClientDisplay.classList.add('hidden');
    els.clientSearchData.classList.remove('hidden');
    els.clientSearchData.value = '';
    els.clientSearchData.focus();
}

function addItem() {
    const code = els.itemCodeInput.value.trim();
    const qty = els.itemQtyInput.value.trim() || '1';
    const comment = els.itemCommentInput.value.trim();

    if (!code) {
        els.itemCodeInput.focus();
        return;
    }

    state.items.unshift({ code, qty, comment }); // New items on top
    renderItems();

    // Reset and focus
    els.itemCodeInput.value = '';
    els.itemQtyInput.value = '';
    els.itemCommentInput.value = '';
    els.itemCodeInput.focus();
}

function removeFromList(index) {
    state.items.splice(index, 1);
    renderItems();
}

function editItem(index) {
    const item = state.items[index];
    els.itemCodeInput.value = item.code;
    els.itemQtyInput.value = item.qty;
    els.itemCommentInput.value = item.comment;
    
    removeFromList(index);
    els.itemCodeInput.focus();
}

function renderItems() {
    if (!els.itemsList) return;
    els.itemsList.innerHTML = '';

    state.items.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'item-card';
        div.style.animation = 'fadeIn 0.3s ease-out';
        
        div.onclick = (e) => {
            if (e.target.closest('.delete-btn')) return;
            editItem(index);
        };

        div.innerHTML = `
            <div class="item-info">
                <div class="item-main">
                    <span class="item-code">${item.code}</span>
                    <span class="item-qty">x${item.qty}</span>
                </div>
                ${item.comment ? `<div class="item-comment-preview">${item.comment}</div>` : ''}
            </div>
            <button class="delete-btn" onclick="document.dispatchEvent(new CustomEvent('removeItem', {detail: ${index}}))">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
        `;
        els.itemsList.appendChild(div);
    });
}

function sendWhatsApp() {
    const phone = String(CONFIG.WHATSAPP_PHONE || '').replace(/\D/g, '');
    if (!phone) {
        alert('⚠️ Por favor, configura el teléfono de destino en ajustes.');
        openSettings();
        return;
    }

    if (!state.selectedClient) {
        alert('Por favor, selecciona un cliente.');
        els.clientSearchData.focus();
        return;
    }

    if (state.items.length === 0) {
        alert('Añade al menos un artículo.');
        els.itemCodeInput.focus();
        return;
    }

    let message = `*ROTURAS${state.orderNumber ? ' Factura ' + state.orderNumber : ''}*\n\n`;
    
    // Truco: añadir un carácter invisible (\u200B) tras el primer dígito para evitar resaltado en WhatsApp
    const clientCode = String(state.selectedClient.code);
    const clientCodeFixed = clientCode[0] + '\u200B' + clientCode.slice(1);
    
    message += `*Cliente:* ${clientCodeFixed} ${state.selectedClient.name}\n\n`;
    message += `*Artículos:*\n`;

    state.items.forEach(item => {
        const itemCode = String(item.code);
        const itemCodeFixed = itemCode[0] + '\u200B' + itemCode.slice(1);
        
        message += `- *${itemCodeFixed}* - ${item.qty}`;
        if (item.comment) message += ` - ${item.comment}`;
        message += `\n`;
    });

    const encodedText = encodeURIComponent(message);
    const ua = navigator.userAgent || '';
    const isAndroid = /Android/i.test(ua) || (/Linux/i.test(ua) && navigator.maxTouchPoints > 0);
    const isIOS = /iPhone|iPad|iPod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    if (isAndroid) {
        // Forzar apertura exclusiva del paquete de WhatsApp Business (com.whatsapp.w4b) sin fallback al personal
        const intentUrl = `intent://send?phone=${phone}&text=${encodedText}#Intent;scheme=whatsapp;package=com.whatsapp.w4b;end;`;
        window.location.href = intentUrl;
        return;
    }

    if (isIOS) {
        // Esquema oficial exclusivo de WhatsApp Business en iOS
        window.location.href = `whatsapp-smb://send?phone=${phone}&text=${encodedText}`;
        return;
    }

    // Escritorio: abrir WhatsApp Web / Desktop
    window.open(`https://wa.me/${phone}?text=${encodedText}`, '_blank');
}

// --- Theme & Settings ---
function applyTheme(theme) {
    const root = document.documentElement;
    if (theme === 'light' || theme === 'dark') {
        root.setAttribute('data-theme', theme);
    } else {
        root.removeAttribute('data-theme');
    }
}

function openSettings() {
    els.phoneInput.value = CONFIG.WHATSAPP_PHONE;
    if (els.themeSelect) {
        els.themeSelect.value = CONFIG.THEME;
    }
    if (els.waAppSelect) {
        els.waAppSelect.value = CONFIG.WA_APP;
    }
    if (els.driveApiUrlInput) {
        els.driveApiUrlInput.value = CONFIG.DRIVE_API_URL;
    }
    if (els.driveTokenInput) {
        els.driveTokenInput.value = CONFIG.DRIVE_TOKEN;
    }
    updateClientsDbInfo();
    els.settingsModal.classList.remove('hidden');
    els.phoneInput.focus();
}

function closeSettings() {
    applyTheme(CONFIG.THEME);
    els.settingsModal.classList.add('hidden');
}

function saveSettings() {
    const phone = els.phoneInput.value.trim().replace(/\+/g, '');
    if (!phone) {
        alert('Introduce un número válido.');
        return;
    }

    const driveUrl = els.driveApiUrlInput ? els.driveApiUrlInput.value.trim() : '';
    const driveToken = els.driveTokenInput ? els.driveTokenInput.value.trim() : '';

    if (driveUrl && !isValidHttpUrl(driveUrl)) {
        alert('La URL del Google Apps Script debe empezar por https:// o http://.');
        els.driveApiUrlInput.focus();
        return;
    }

    localStorage.setItem(STORAGE_KEYS.PHONE, phone);
    localStorage.setItem(STORAGE_KEYS.WA_APP, 'business');

    if (els.themeSelect) {
        const selectedTheme = els.themeSelect.value;
        localStorage.setItem(STORAGE_KEYS.THEME, selectedTheme);
        applyTheme(selectedTheme);
    }

    if (els.driveApiUrlInput) {
        localStorage.setItem(STORAGE_KEYS.DRIVE_API_URL, driveUrl);
    }

    if (els.driveTokenInput) {
        localStorage.setItem(STORAGE_KEYS.DRIVE_TOKEN, driveToken);
    }

    closeSettings();
    updatePhoneDisplay();
}

function updatePhoneDisplay() {
    if (els.currentPhoneDisplay) {
        const phone = CONFIG.WHATSAPP_PHONE;
        els.currentPhoneDisplay.textContent = phone || '(No configurado)';
    }
}

// --- Client Database & Google Drive Read-Only Sync ---
function isValidHttpUrl(rawUrl) {
    try {
        const parsed = new URL(rawUrl);
        return parsed.protocol === 'https:' || parsed.protocol === 'http:';
    } catch {
        return false;
    }
}

function normalizeClientCode(code) {
    return String(code ?? '').trim();
}

function loadClientsDatabase() {
    const baseClients = (typeof clients !== 'undefined' && Array.isArray(clients))
        ? clients
        : [];

    let savedClients = [];
    try {
        const raw = localStorage.getItem(STORAGE_KEYS.CLIENTS_DB);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed)) {
                savedClients = parsed;
            }
        }
    } catch (err) {
        console.warn('No se pudo leer la base local de clientes, usando respaldo inicial:', err);
    }

    return mergeClientsDatabase(baseClients, savedClients).merged;
}

/**
 * Fusiona de forma segura la base actual con los clientes entrantes usando `code` (CODIGO) como clave única.
 * Conserva cualquier propiedad propia previa de cada registro y los clientes que no vengan en el lote entrante.
 */
function mergeClientsDatabase(currentList, incomingList) {
    const map = new Map();
    let added = 0;
    let updated = 0;

    (currentList || []).forEach(client => {
        const code = normalizeClientCode(client?.code);
        const name = String(client?.name ?? '').trim();
        if (!code || !name) return;
        map.set(code, { ...client, code, name });
    });

    (incomingList || []).forEach(incoming => {
        const code = normalizeClientCode(incoming?.code);
        const name = String(incoming?.name ?? '').trim();
        if (!code || !name) return;

        const existing = map.get(code);
        if (existing) {
            map.set(code, { ...existing, ...incoming, code, name });
            updated++;
        } else {
            map.set(code, { ...incoming, code, name });
            added++;
        }
    });

    return {
        merged: Array.from(map.values()),
        added,
        updated
    };
}

function updateClientsDbInfo() {
    if (!els.clientsDbInfo) return;

    let syncLine = 'Origen: base inicial (clients.js)';
    try {
        const metaRaw = localStorage.getItem(STORAGE_KEYS.CLIENTS_SYNC_META);
        if (metaRaw) {
            const meta = JSON.parse(metaRaw);
            if (meta?.syncedAt) {
                const dateStr = new Date(meta.syncedAt).toLocaleString('es-ES');
                syncLine = `Última actualización: ${dateStr}`;
            }
        }
    } catch {
        // Ignorar metadatos corruptos
    }

    els.clientsDbInfo.innerHTML = '';
    const countDiv = document.createElement('div');
    countDiv.textContent = `Clientes cargados: ${clientsDB.length}`;
    const dateDiv = document.createElement('div');
    dateDiv.textContent = syncLine;
    els.clientsDbInfo.appendChild(countDiv);
    els.clientsDbInfo.appendChild(dateDiv);
}

function showSyncStatus(message, type = 'info', autoHideMs = 6000) {
    if (!els.syncStatusBanner) return;

    if (syncStatusTimer) {
        clearTimeout(syncStatusTimer);
        syncStatusTimer = null;
    }

    els.syncStatusBanner.textContent = message;
    els.syncStatusBanner.className = `sync-status sync-status--${type}`;

    if (autoHideMs > 0) {
        syncStatusTimer = setTimeout(() => {
            els.syncStatusBanner?.classList.add('hidden');
        }, autoHideMs);
    }
}

function setSyncLoading(isLoading) {
    state.isSyncing = isLoading;
    if (!els.syncClientsBtn) return;

    els.syncClientsBtn.disabled = isLoading;
    els.syncClientsBtn.classList.toggle('is-loading', isLoading);
    const labelSpan = els.syncClientsBtn.querySelector('span');
    if (labelSpan) {
        labelSpan.textContent = isLoading ? 'Cargando...' : 'Clientes';
    }
}

function normalizeHeaderName(header) {
    return String(header ?? '')
        .trim()
        .toUpperCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\s+/g, ' ');
}

function decodeBase64ToUint8Array(base64) {
    const binaryStr = atob(base64);
    const len = binaryStr.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryStr.charCodeAt(i);
    }
    return bytes;
}

function parseClientesWorkbook(bytes) {
    if (typeof XLSX === 'undefined') {
        throw new Error('La librería lectora de Excel (SheetJS) no se ha cargado. Comprueba tu conexión.');
    }

    const workbook = XLSX.read(bytes, { type: 'array' });
    if (!workbook.SheetNames || workbook.SheetNames.length === 0) {
        throw new Error('El archivo Excel no contiene ninguna hoja.');
    }

    const targetSheetName = workbook.SheetNames.find(
        name => name.trim().toLowerCase() === 'clientes'
    ) || workbook.SheetNames[0];

    const sheet = workbook.Sheets[targetSheetName];
    const rows = XLSX.utils.sheet_to_json(sheet, {
        header: 1,
        raw: false,
        defval: ''
    });

    if (!rows || rows.length < 2) {
        throw new Error(`La hoja "${targetSheetName}" está vacía o no contiene filas de clientes.`);
    }

    // Fila 1 = cabeceras
    const headerRow = rows[0];
    const columnIndices = {};
    headerRow.forEach((cellValue, colIndex) => {
        const normalized = normalizeHeaderName(cellValue);
        const mappedField = EXCEL_COLUMN_MAP[normalized];
        if (mappedField && columnIndices[mappedField] === undefined) {
            columnIndices[mappedField] = colIndex;
        }
    });

    if (columnIndices.code === undefined || columnIndices.name === undefined) {
        throw new Error('El Excel debe incluir las columnas obligatorias CODIGO y TIENDA en la primera fila.');
    }

    const deduplicatedByCode = new Map();
    for (let r = 1; r < rows.length; r++) {
        const row = rows[r];
        if (!Array.isArray(row)) continue;

        const code = normalizeClientCode(row[columnIndices.code]);
        const name = String(row[columnIndices.name] ?? '').trim();

        // Saltar filas vacías o incompletas sin código y nombre
        if (!code || !name) continue;

        const record = { code, name };
        for (const [field, idx] of Object.entries(columnIndices)) {
            if (field === 'code' || field === 'name') continue;
            record[field] = String(row[idx] ?? '').trim();
        }

        deduplicatedByCode.set(code, record);
    }

    const parsedClients = Array.from(deduplicatedByCode.values());
    if (parsedClients.length === 0) {
        throw new Error('El archivo Excel no contiene clientes válidos (con CODIGO y TIENDA).');
    }

    return parsedClients;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchDrivePayloadWithRetry(apiUrl, token, maxAttempts = 3) {
    const requestUrl = new URL(apiUrl);
    requestUrl.searchParams.set('token', token);

    const retryableErrors = new Set(['TEMP_READ_ERROR', 'EMPTY_FILE']);
    let lastError = null;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            if (attempt > 1) {
                showSyncStatus(`Archivo ocupado en Drive, reintentando (${attempt}/${maxAttempts})...`, 'info', 0);
                await sleep(1200 * (attempt - 1));
            }

            const response = await fetch(requestUrl.toString(), {
                method: 'GET',
                cache: 'no-store'
            });

            if (!response.ok) {
                const err = new Error(`Error HTTP ${response.status} al consultar Drive.`);
                err.retryable = response.status >= 500;
                throw err;
            }

            const payload = await response.json();
            if (!payload || payload.ok !== true) {
                const err = new Error(payload?.message || 'Respuesta inválida del servidor de Drive.');
                err.retryable = retryableErrors.has(payload?.error);
                throw err;
            }

            if (typeof payload.base64 !== 'string' || payload.base64.length === 0) {
                const err = new Error('El servidor devolvió un archivo Excel vacío.');
                err.retryable = true;
                throw err;
            }

            return payload;
        } catch (err) {
            lastError = err;
            const isNetworkFailure = err instanceof TypeError;
            const shouldRetry = attempt < maxAttempts && (isNetworkFailure || err.retryable);
            if (!shouldRetry) {
                throw err;
            }
        }
    }

    throw lastError || new Error('No se pudo leer el archivo de Drive.');
}

async function syncClientsFromDrive() {
    if (state.isSyncing) return;

    const apiUrl = CONFIG.DRIVE_API_URL;
    const token = CONFIG.DRIVE_TOKEN;

    if (!apiUrl || !isValidHttpUrl(apiUrl)) {
        showSyncStatus('Configura primero la URL del Google Apps Script en Ajustes.', 'error');
        openSettings();
        els.driveApiUrlInput?.focus();
        return;
    }

    if (!token) {
        showSyncStatus('Introduce el token de acceso en Ajustes.', 'error');
        openSettings();
        els.driveTokenInput?.focus();
        return;
    }

    setSyncLoading(true);
    showSyncStatus('Consultando clientes en Google Drive (solo lectura)...', 'info', 0);

    try {
        const payload = await fetchDrivePayloadWithRetry(apiUrl, token);
        const bytes = decodeBase64ToUint8Array(payload.base64);
        const incomingClients = parseClientesWorkbook(bytes);

        const { merged, added, updated } = mergeClientsDatabase(clientsDB, incomingClients);

        // Guardar primero en localStorage antes de activar en memoria
        localStorage.setItem(STORAGE_KEYS.CLIENTS_DB, JSON.stringify(merged));
        localStorage.setItem(STORAGE_KEYS.CLIENTS_SYNC_META, JSON.stringify({
            syncedAt: new Date().toISOString(),
            fileLastUpdated: payload.lastUpdated || null,
            total: merged.length,
            importedRows: incomingClients.length,
            added,
            updated
        }));

        clientsDB = merged;

        // Refrescar el cliente actualmente seleccionado si recibió cambios
        if (state.selectedClient) {
            const refreshed = clientsDB.find(c => c.code === state.selectedClient.code);
            if (refreshed) {
                state.selectedClient = refreshed;
                els.selectedClientName.textContent = `${refreshed.code} - ${refreshed.name}`;
            }
        }

        // Si el usuario estaba buscando, refrescar sugerencias con la base actualizada
        if (els.clientSearchData && !els.clientSearchData.classList.contains('hidden') && els.clientSearchData.value.trim().length >= 2) {
            handleClientSearch({ target: els.clientSearchData });
        }

        updateClientsDbInfo();
        showSyncStatus(
            `Clientes actualizados: ${merged.length} en total (${added} nuevos, ${updated} actualizados).`,
            'success',
            8000
        );
    } catch (err) {
        console.error('Error al actualizar clientes:', err);
        showSyncStatus(
            `No se actualizaron los clientes (base actual intacta): ${err.message}`,
            'error',
            9000
        );
    } finally {
        setSyncLoading(false);
    }
}

// Boot
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}




