// --- Configuration ---
const CONFIG = {
    DEFAULT_PHONE: '34686227744', // Número por defecto
    get WHATSAPP_PHONE() {
        const saved = localStorage.getItem('roturas_target_phone');
        return (saved && saved.trim() !== '') ? saved : this.DEFAULT_PHONE;
    }
};

// --- State ---
let state = {
    orderNumber: '',
    selectedClient: null,
    items: [],
    isSettingsOpen: false
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
        settingsBtn: document.getElementById('settingsBtn'),
        settingsModal: document.getElementById('settingsModal'),
        closeSettingsBtn: document.getElementById('closeSettingsBtn'),
        saveSettingsBtn: document.getElementById('saveSettingsBtn'),
        phoneInput: document.getElementById('phoneInput'),
        currentPhoneDisplay: document.getElementById('currentPhoneDisplay'),
        changePhoneBtn: document.getElementById('changePhoneBtn')
    };

    // 2. Attach Event Listeners
    setupEventListeners();

    // 3. Initial Render
    updatePhoneDisplay();
    
    console.log('Luxe App Initialized. Clients:', clients?.length);
}

function setupEventListeners() {
    // Order info
    els.orderInput?.addEventListener('input', (e) => state.orderNumber = e.target.value);

    // Settings
    els.settingsBtn?.addEventListener('click', openSettings);
    els.closeSettingsBtn?.addEventListener('click', closeSettings);
    els.saveSettingsBtn?.addEventListener('click', saveSettings);
    els.changePhoneBtn?.addEventListener('click', openSettings);

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

    if (!clients) return;

    const matches = clients.filter(c =>
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
        div.innerHTML = `<span class="suggestion-code">${client.code}</span> ${client.name}`;
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
    const phone = CONFIG.WHATSAPP_PHONE;
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

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// --- Settings ---
function openSettings() {
    els.phoneInput.value = CONFIG.WHATSAPP_PHONE;
    els.settingsModal.classList.remove('hidden');
    els.phoneInput.focus();
}

function closeSettings() {
    els.settingsModal.classList.add('hidden');
}

function saveSettings() {
    const phone = els.phoneInput.value.trim().replace(/\+/g, '');
    if (!phone) {
        alert('Introduce un número válido.');
        return;
    }
    localStorage.setItem('roturas_target_phone', phone);
    closeSettings();
    updatePhoneDisplay();
}

function updatePhoneDisplay() {
    if (els.currentPhoneDisplay) {
        const phone = CONFIG.WHATSAPP_PHONE;
        els.currentPhoneDisplay.textContent = phone || '(No configurado)';
    }
}

// Boot
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}




