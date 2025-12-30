import clients from './clients.js';

// --- Configuration ---
const CONFIG = {
    // Default to empty, will load from localStorage
    get WHATSAPP_PHONE() {
        return localStorage.getItem('roturas_target_phone') || '';
    }
};

// --- State ---
let state = {
    orderNumber: '',
    selectedClient: null,
    items: [],
    isSettingsOpen: false
};

// --- Global DOM Elements Reference ---
// Define 'els' at the top level so it is accessible to all functions.
// Using var to avoid Temporal Dead Zone issues in bundled script
var els;

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
        // Settings elements
        settingsBtn: document.getElementById('settingsBtn'),
        settingsModal: document.getElementById('settingsModal'),
        closeSettingsBtn: document.getElementById('closeSettingsBtn'),
        saveSettingsBtn: document.getElementById('saveSettingsBtn'),
        phoneInput: document.getElementById('phoneInput'),
        currentPhoneDisplay: document.getElementById('currentPhoneDisplay'),
        changePhoneBtn: document.getElementById('changePhoneBtn')
    };

    // 2. Attach Event Listeners
    if (els.orderInput) els.orderInput.addEventListener('input', (e) => state.orderNumber = e.target.value);

    // Settings
    if (els.settingsBtn) els.settingsBtn.addEventListener('click', openSettings);
    if (els.closeSettingsBtn) els.closeSettingsBtn.addEventListener('click', closeSettings);
    if (els.saveSettingsBtn) els.saveSettingsBtn.addEventListener('click', saveSettings);
    if (els.changePhoneBtn) els.changePhoneBtn.addEventListener('click', openSettings);

    // Client Search
    if (els.clientSearchData) els.clientSearchData.addEventListener('input', handleClientSearch);
    if (els.clearClientBtn) els.clearClientBtn.addEventListener('click', clearSelectedClient);

    // Auto-clear item comment & Capitalize
    if (els.itemCommentInput) {
        els.itemCommentInput.addEventListener('focus', () => {
            els.itemCommentInput.value = '';
        });

        // Shortcuts on Enter or when focus leaves (so 'Go' button works too)
        const checkAutocomplete = (e) => {
            const val = e.target.value.trim().toUpperCase();
            if (val === 'R') {
                e.preventDefault && e.preventDefault();
                e.target.value = 'Rotura';
            } else if (val === 'D') {
                e.preventDefault && e.preventDefault();
                e.target.value = 'Devolución';
            }
        };

        els.itemCommentInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.keyCode === 13) {
                checkAutocomplete(e);
            }
        });

        // Also check on blur/change for mobile keyboards that might trigger 'Go'
        els.itemCommentInput.addEventListener('change', checkAutocomplete);

        els.itemCommentInput.addEventListener('input', (e) => {
            const val = e.target.value;
            if (val.length > 0) {
                // Only capitalize if first char is lowercase
                if (val.charAt(0) !== val.charAt(0).toUpperCase()) {
                    const start = e.target.selectionStart;
                    const end = e.target.selectionEnd;
                    e.target.value = val.charAt(0).toUpperCase() + val.slice(1);
                    e.target.setSelectionRange(start, end);
                }
            }
        });
    }

    // Items
    if (els.addItemBtn) els.addItemBtn.addEventListener('click', addItem);

    // Send
    if (els.sendBtn) els.sendBtn.addEventListener('click', sendWhatsApp);

    // 3. Initial Render
    updatePhoneDisplay();

    // Log init success
    console.log('App Initialized. Clients loaded:', clients ? clients.length : 0);
}

// Check state to ensure init
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

// --- Functions ---

function handleClientSearch(e) {
    if (!els || !els.clientSuggestions) return; // Safety check

    const query = e.target.value.toLowerCase();

    if (query.length < 2) {
        els.clientSuggestions.classList.add('hidden');
        return;
    }

    // Filter clients (max 20 to avoid lag)
    // Check if clients exists
    if (!clients) {
        console.error('Clients database not loaded');
        return;
    }

    const matches = clients.filter(c =>
        (c.name && c.name.toLowerCase().includes(query)) ||
        (c.code && c.code.toLowerCase().includes(query))
    ).slice(0, 20);

    renderSuggestions(matches);
}

function renderSuggestions(matches) {
    if (!els || !els.clientSuggestions) return;

    els.clientSuggestions.innerHTML = '';

    if (matches.length === 0) {
        els.clientSuggestions.classList.add('hidden');
        return;
    }

    matches.forEach(client => {
        const div = document.createElement('div');
        div.className = 'suggestion-item';
        div.innerHTML = `<span class="suggestion-code">${client.code}</span> ${client.name}`;
        div.onclick = () => selectClient(client);
        els.clientSuggestions.appendChild(div);
    });

    els.clientSuggestions.classList.remove('hidden');
}

function selectClient(client) {
    state.selectedClient = client;

    // UI Updates
    if (els.selectedClientName) els.selectedClientName.textContent = `${client.code} - ${client.name}`;
    if (els.selectedClientDisplay) els.selectedClientDisplay.classList.remove('hidden');
    if (els.clientSearchData) {
        els.clientSearchData.classList.add('hidden');
        els.clientSearchData.value = '';
    }
    if (els.clientSuggestions) els.clientSuggestions.classList.add('hidden');
}

function clearSelectedClient() {
    state.selectedClient = null;
    if (els.selectedClientDisplay) els.selectedClientDisplay.classList.add('hidden');
    if (els.clientSearchData) {
        els.clientSearchData.classList.remove('hidden');
        els.clientSearchData.focus();
    }
}

function addItem() {
    if (!els) return;
    const code = els.itemCodeInput.value.trim();
    const qty = els.itemQtyInput.value.trim();
    const comment = els.itemCommentInput.value.trim();

    if (!code) {
        alert('Por favor, ingresa un código de artículo.');
        return;
    }

    state.items.push({ code, qty: qty || '1', comment });
    renderItems();

    // Reset inputs
    els.itemCodeInput.value = '';
    els.itemQtyInput.value = ''; // Reset to empty as requested
    els.itemCommentInput.value = '';

    // Focus back to Item Code
    els.itemCodeInput.focus();
}

function removeFromList(index) {
    state.items.splice(index, 1);
    renderItems();
}

function editItem(index) {
    const item = state.items[index];

    // Populate inputs
    if (els.itemCodeInput) els.itemCodeInput.value = item.code;
    if (els.itemQtyInput) els.itemQtyInput.value = item.qty;
    if (els.itemCommentInput) els.itemCommentInput.value = item.comment || '';

    // Remove from list
    removeFromList(index);

    // Focus
    if (els.itemCodeInput) els.itemCodeInput.focus();
}

function renderItems() {
    if (!els.itemsList) return;
    els.itemsList.innerHTML = '';
    state.items.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'item-card';
        div.onclick = (e) => {
            // If clicking the delete button, don't trigger edit
            if (e.target.closest('.delete-btn')) return;
            editItem(index);
        };

        div.innerHTML = `
            <div class="item-info">
                <div>
                    <span class="item-code">${item.code}</span> <span class="item-qty">x${item.qty}</span>
                </div>
                ${item.comment ? `<div class="item-comment-preview">${item.comment}</div>` : ''}
            </div>
            <button class="icon-btn delete-btn" onclick="document.dispatchEvent(new CustomEvent('removeItem', {detail: ${index}}))">
                &times;
            </button>
        `;
        els.itemsList.appendChild(div);
    });
}

// Global listener for dynamic delete buttons
document.addEventListener('removeItem', (e) => removeFromList(e.detail));

function sendWhatsApp() {
    if (!CONFIG.WHATSAPP_PHONE) {
        alert('⚠️ Por favor, configura el número de teléfono en Ajustes (icono de engranaje) antes de enviar.');
        openSettings();
        return;
    }

    if (!state.selectedClient) {
        alert('Por favor, selecciona un Cliente.');
        return;
    }
    if (state.items.length === 0) {
        alert('Por favor, añade al menos un artículo.');
        return;
    }

    // Build Message
    let message = `*ROTURAS${state.orderNumber ? ' Factura ' + state.orderNumber : ''}*\n\n`;
    message += `*Cliente:* ${state.selectedClient.code} ${state.selectedClient.name}\n\n`;
    message += `*Artículos:*\n\n`;

    state.items.forEach(item => {
        // Format: Código - Cant - Texto
        message += `- *${item.code}* - ${item.qty}`;
        if (item.comment) message += ` - ${item.comment}`;
        message += `\n`;
    });

    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${CONFIG.WHATSAPP_PHONE}?text=${encodedMessage}`;

    window.open(url, '_blank');
}

// --- Settings Functions ---
function openSettings() {
    if (!els) return;
    els.phoneInput.value = CONFIG.WHATSAPP_PHONE;
    els.settingsModal.classList.remove('hidden');
}

function closeSettings() {
    if (els && els.settingsModal) els.settingsModal.classList.add('hidden');
}

function saveSettings() {
    if (!els) return;
    const phone = els.phoneInput.value.trim().replace(/\+/g, ''); // Remove + if present
    if (!phone) {
        alert('Por favor introduce un número de teléfono.');
        return;
    }
    localStorage.setItem('roturas_target_phone', phone);
    closeSettings();
    updatePhoneDisplay();
    alert('Configuración guardada.');
}

function updatePhoneDisplay() {
    // Robust check for els existence
    if (typeof els !== 'undefined' && els && els.currentPhoneDisplay) {
        const phone = CONFIG.WHATSAPP_PHONE;
        els.currentPhoneDisplay.textContent = phone ? phone : '(No configurado)';
    }
}
