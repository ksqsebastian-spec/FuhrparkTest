// FuhrparkPro - Fleet Management Application
// Supabase Backend

// ============================================
// Supabase Configuration
// ============================================
const SUPABASE_URL = 'https://uhrjpofsrxnsugnmogok.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_aT4-e31_wNRItXtevixhKg_VjhXEEpa';

// Initialize Supabase client
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ============================================
// Application State
// ============================================
let state = {
    vehicles: [],
    documents: [],
    maintenance: [],
    settings: {
        theme: 'light',
        currency: 'EUR',
        distanceUnit: 'km'
    },
    currentView: 'grid',
    loading: false
};

// ============================================
// Utility Functions
// ============================================
function generateId() {
    return crypto.randomUUID();
}

function formatDate(dateString) {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function formatCurrency(amount) {
    if (!amount) return '-';
    const symbols = { EUR: '€', USD: '$', GBP: '£', CHF: 'Fr.' };
    return `${symbols[state.settings.currency] || '€'}${parseFloat(amount).toLocaleString('de-DE', { minimumFractionDigits: 2 })}`;
}

function formatMileage(value) {
    if (!value) return '-';
    const unit = state.settings.distanceUnit;
    return `${parseInt(value).toLocaleString('de-DE')} ${unit}`;
}

function getVehicleIcon(type) {
    const icons = {
        car: 'fa-car',
        truck: 'fa-truck',
        van: 'fa-shuttle-van',
        motorcycle: 'fa-motorcycle'
    };
    return icons[type] || 'fa-car';
}

function getDocumentIcon(filename) {
    const ext = filename?.split('.').pop()?.toLowerCase();
    if (['pdf'].includes(ext)) return { icon: 'fa-file-pdf', class: 'pdf' };
    if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext)) return { icon: 'fa-file-image', class: 'image' };
    if (['doc', 'docx'].includes(ext)) return { icon: 'fa-file-word', class: 'doc' };
    return { icon: 'fa-file', class: '' };
}

function getMaintenanceTypeLabel(type) {
    const labels = {
        'oil-change': 'Oil Change',
        'tire-rotation': 'Tire Rotation',
        'brake-service': 'Brake Service',
        'inspection': 'General Inspection',
        'tuv': 'TÜV/Safety Inspection',
        'repair': 'Repair',
        'other': 'Other'
    };
    return labels[type] || type;
}

function isDateExpiringSoon(dateString, daysThreshold = 30) {
    if (!dateString) return false;
    const date = new Date(dateString);
    const now = new Date();
    const diffDays = Math.ceil((date - now) / (1000 * 60 * 60 * 24));
    return diffDays <= daysThreshold && diffDays >= 0;
}

function isDateExpired(dateString) {
    if (!dateString) return false;
    const date = new Date(dateString);
    const now = new Date();
    return date < now;
}

function showLoading(show) {
    state.loading = show;
    // Could add a loading spinner here
}

// ============================================
// Supabase Data Functions
// ============================================
async function loadAllData() {
    showLoading(true);
    try {
        const [vehiclesRes, documentsRes, maintenanceRes, settingsRes] = await Promise.all([
            supabaseClient.from('vehicles').select('*').order('created_at', { ascending: false }),
            supabaseClient.from('documents').select('*').order('created_at', { ascending: false }),
            supabaseClient.from('maintenance').select('*').order('date', { ascending: true }),
            supabaseClient.from('settings').select('*').limit(1)
        ]);

        if (vehiclesRes.data) state.vehicles = vehiclesRes.data.map(mapVehicleFromDB);
        if (documentsRes.data) state.documents = documentsRes.data.map(mapDocumentFromDB);
        if (maintenanceRes.data) state.maintenance = maintenanceRes.data.map(mapMaintenanceFromDB);
        if (settingsRes.data && settingsRes.data[0]) {
            state.settings = mapSettingsFromDB(settingsRes.data[0]);
        }
    } catch (error) {
        console.error('Error loading data:', error);
        showToast('Error loading data', 'error');
    }
    showLoading(false);
}

// Map database fields to app fields (snake_case to camelCase)
function mapVehicleFromDB(v) {
    return {
        id: v.id,
        licensePlate: v.license_plate,
        type: v.type,
        make: v.make,
        model: v.model,
        year: v.year,
        color: v.color,
        vin: v.vin,
        mileage: v.mileage,
        fuelType: v.fuel_type,
        status: v.status,
        purchaseDate: v.purchase_date,
        purchasePrice: v.purchase_price,
        insuranceExpiry: v.insurance_expiry,
        inspectionExpiry: v.inspection_expiry,
        notes: v.notes,
        image: v.image_url,
        customFields: v.custom_fields,
        createdAt: v.created_at,
        updatedAt: v.updated_at
    };
}

function mapVehicleToDB(v) {
    return {
        license_plate: v.licensePlate,
        type: v.type,
        make: v.make,
        model: v.model,
        year: v.year ? parseInt(v.year) : null,
        color: v.color || null,
        vin: v.vin || null,
        mileage: v.mileage ? parseInt(v.mileage) : null,
        fuel_type: v.fuelType || null,
        status: v.status || 'active',
        purchase_date: v.purchaseDate || null,
        purchase_price: v.purchasePrice ? parseFloat(v.purchasePrice) : null,
        insurance_expiry: v.insuranceExpiry || null,
        inspection_expiry: v.inspectionExpiry || null,
        notes: v.notes || null,
        image_url: v.image || null,
        custom_fields: v.customFields || {},
        updated_at: new Date().toISOString()
    };
}

function mapDocumentFromDB(d) {
    return {
        id: d.id,
        vehicleId: d.vehicle_id,
        type: d.type,
        name: d.name,
        date: d.date,
        expiry: d.expiry,
        notes: d.notes,
        fileName: d.file_name,
        filePath: d.file_path,
        fileType: d.file_type,
        createdAt: d.created_at
    };
}

function mapDocumentToDB(d) {
    return {
        vehicle_id: d.vehicleId,
        type: d.type,
        name: d.name,
        date: d.date || null,
        expiry: d.expiry || null,
        notes: d.notes || null,
        file_name: d.fileName,
        file_path: d.filePath,
        file_type: d.fileType
    };
}

function mapMaintenanceFromDB(m) {
    return {
        id: m.id,
        vehicleId: m.vehicle_id,
        type: m.type,
        description: m.description,
        date: m.date,
        status: m.status,
        mileage: m.mileage,
        cost: m.cost,
        provider: m.provider,
        notes: m.notes,
        createdAt: m.created_at,
        updatedAt: m.updated_at
    };
}

function mapMaintenanceToDB(m) {
    return {
        vehicle_id: m.vehicleId,
        type: m.type,
        description: m.description,
        date: m.date,
        status: m.status || 'scheduled',
        mileage: m.mileage ? parseInt(m.mileage) : null,
        cost: m.cost ? parseFloat(m.cost) : null,
        provider: m.provider || null,
        notes: m.notes || null,
        updated_at: new Date().toISOString()
    };
}

function mapSettingsFromDB(s) {
    return {
        id: s.id,
        theme: s.theme || 'light',
        currency: s.currency || 'EUR',
        distanceUnit: s.distance_unit || 'km'
    };
}

function mapSettingsToDB(s) {
    return {
        theme: s.theme,
        currency: s.currency,
        distance_unit: s.distanceUnit,
        updated_at: new Date().toISOString()
    };
}

// ============================================
// Toast Notifications
// ============================================
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        warning: 'fa-exclamation-triangle'
    };

    toast.innerHTML = `
        <i class="fas ${icons[type]}"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'toastSlide 0.3s ease reverse';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ============================================
// Navigation
// ============================================
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const pages = document.querySelectorAll('.page');
    const pageTitle = document.getElementById('pageTitle');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const pageName = item.dataset.page;

            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            pages.forEach(page => {
                page.classList.remove('active');
                if (page.id === pageName) {
                    page.classList.add('active');
                }
            });

            const titles = {
                dashboard: 'Dashboard',
                vehicles: 'Vehicles',
                documents: 'Documents',
                maintenance: 'Maintenance',
                settings: 'Settings'
            };
            pageTitle.textContent = titles[pageName] || pageName;

            document.querySelector('.sidebar').classList.remove('open');
            refreshCurrentPage(pageName);
        });
    });

    document.querySelectorAll('.view-all').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageName = link.dataset.page;
            document.querySelector(`.nav-item[data-page="${pageName}"]`).click();
        });
    });

    const menuToggle = document.getElementById('menuToggle');
    menuToggle.addEventListener('click', () => {
        document.querySelector('.sidebar').classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
        const sidebar = document.querySelector('.sidebar');
        const menuToggle = document.getElementById('menuToggle');
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove('open');
        }
    });
}

function refreshCurrentPage(pageName) {
    switch (pageName) {
        case 'dashboard':
            updateDashboard();
            break;
        case 'vehicles':
            renderVehicles();
            break;
        case 'documents':
            renderDocuments();
            break;
        case 'maintenance':
            renderMaintenance();
            break;
        case 'settings':
            updateSettingsPage();
            break;
    }
}

// ============================================
// Dashboard
// ============================================
function updateDashboard() {
    const totalVehicles = state.vehicles.length;
    const activeVehicles = state.vehicles.filter(v => v.status === 'active').length;
    const maintenanceVehicles = state.vehicles.filter(v => v.status === 'maintenance').length;

    let alerts = 0;
    state.vehicles.forEach(v => {
        if (isDateExpiringSoon(v.insuranceExpiry) || isDateExpired(v.insuranceExpiry)) alerts++;
        if (isDateExpiringSoon(v.inspectionExpiry) || isDateExpired(v.inspectionExpiry)) alerts++;
    });
    state.maintenance.forEach(m => {
        if (m.status !== 'completed' && isDateExpired(m.date)) alerts++;
    });

    document.getElementById('totalVehicles').textContent = totalVehicles;
    document.getElementById('activeVehicles').textContent = activeVehicles;
    document.getElementById('maintenanceVehicles').textContent = maintenanceVehicles;
    document.getElementById('alertsCount').textContent = alerts;

    // Recent vehicles
    const recentVehiclesList = document.getElementById('recentVehiclesList');
    const recentVehicles = [...state.vehicles].slice(0, 5);

    if (recentVehicles.length === 0) {
        recentVehiclesList.innerHTML = '<p class="empty-state">No vehicles added yet</p>';
    } else {
        recentVehiclesList.innerHTML = recentVehicles.map(v => `
            <div class="vehicle-mini-item" onclick="showVehicleDetail('${v.id}')">
                <div class="vehicle-mini-icon">
                    <i class="fas ${getVehicleIcon(v.type)}"></i>
                </div>
                <div class="vehicle-mini-info">
                    <h4>${v.make} ${v.model}</h4>
                    <p>${v.licensePlate}</p>
                </div>
                <span class="vehicle-status status-${v.status}">${v.status}</span>
            </div>
        `).join('');
    }

    // Upcoming maintenance
    const upcomingMaintenance = document.getElementById('upcomingMaintenance');
    const upcoming = state.maintenance
        .filter(m => m.status !== 'completed')
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, 5);

    if (upcoming.length === 0) {
        upcomingMaintenance.innerHTML = '<p class="empty-state">No maintenance scheduled</p>';
    } else {
        upcomingMaintenance.innerHTML = upcoming.map(m => {
            const date = new Date(m.date);
            const vehicle = state.vehicles.find(v => v.id === m.vehicleId);
            return `
                <div class="maint-mini-item">
                    <div class="maint-mini-date">
                        <div class="day">${date.getDate()}</div>
                        <div class="month">${date.toLocaleString('default', { month: 'short' })}</div>
                    </div>
                    <div class="maint-mini-info">
                        <h4>${m.description}</h4>
                        <p>${vehicle ? `${vehicle.make} ${vehicle.model}` : 'Unknown vehicle'}</p>
                    </div>
                    <span class="maintenance-badge ${m.status}">${m.status}</span>
                </div>
            `;
        }).join('');
    }

    // Status chart
    const statusChart = document.getElementById('statusChart');
    if (totalVehicles === 0) {
        statusChart.innerHTML = `
            <div class="chart-placeholder">
                <i class="fas fa-chart-pie"></i>
                <p>Add vehicles to see statistics</p>
            </div>
        `;
    } else {
        const inactiveVehicles = state.vehicles.filter(v => v.status === 'inactive').length;
        const maxCount = Math.max(activeVehicles, maintenanceVehicles, inactiveVehicles, 1);

        statusChart.innerHTML = `
            <div class="chart-bars">
                <div class="chart-bar">
                    <div class="bar active" style="height: ${(activeVehicles / maxCount) * 150}px"></div>
                    <div class="count">${activeVehicles}</div>
                    <div class="label">Active</div>
                </div>
                <div class="chart-bar">
                    <div class="bar maintenance" style="height: ${(maintenanceVehicles / maxCount) * 150}px"></div>
                    <div class="count">${maintenanceVehicles}</div>
                    <div class="label">Maintenance</div>
                </div>
                <div class="chart-bar">
                    <div class="bar inactive" style="height: ${(inactiveVehicles / maxCount) * 150}px"></div>
                    <div class="count">${inactiveVehicles}</div>
                    <div class="label">Inactive</div>
                </div>
            </div>
        `;
    }
}

// ============================================
// Vehicles
// ============================================
function renderVehicles() {
    const container = document.getElementById('vehiclesContainer');
    const statusFilter = document.getElementById('statusFilter').value;
    const typeFilter = document.getElementById('typeFilter').value;
    const searchQuery = document.getElementById('globalSearch').value.toLowerCase();

    let filtered = [...state.vehicles];

    if (statusFilter) {
        filtered = filtered.filter(v => v.status === statusFilter);
    }
    if (typeFilter) {
        filtered = filtered.filter(v => v.type === typeFilter);
    }
    if (searchQuery) {
        filtered = filtered.filter(v =>
            v.licensePlate?.toLowerCase().includes(searchQuery) ||
            v.make?.toLowerCase().includes(searchQuery) ||
            v.model?.toLowerCase().includes(searchQuery)
        );
    }

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state-large">
                <i class="fas fa-car"></i>
                <h3>${state.vehicles.length === 0 ? 'No vehicles yet' : 'No matching vehicles'}</h3>
                <p>${state.vehicles.length === 0 ? 'Add your first vehicle to get started' : 'Try adjusting your filters'}</p>
                ${state.vehicles.length === 0 ? `
                    <button class="btn btn-primary" onclick="openVehicleModal()">
                        <i class="fas fa-plus"></i> Add Vehicle
                    </button>
                ` : ''}
            </div>
        `;
        return;
    }

    if (state.currentView === 'grid') {
        container.className = 'vehicles-grid';
        container.innerHTML = filtered.map(v => `
            <div class="vehicle-card" onclick="showVehicleDetail('${v.id}')">
                <div class="vehicle-image">
                    ${v.image ? `<img src="${v.image}" alt="${v.make} ${v.model}">` : `<i class="fas ${getVehicleIcon(v.type)}"></i>`}
                    <span class="vehicle-status status-${v.status}">${v.status}</span>
                </div>
                <div class="vehicle-info">
                    <h3>${v.make} ${v.model}</h3>
                    <div class="vehicle-plate">${v.licensePlate}</div>
                    <div class="vehicle-meta">
                        <span><i class="fas fa-calendar"></i> ${v.year || '-'}</span>
                        <span><i class="fas fa-tachometer-alt"></i> ${formatMileage(v.mileage)}</span>
                        <span><i class="fas fa-gas-pump"></i> ${v.fuelType || '-'}</span>
                        <span><i class="fas fa-palette"></i> ${v.color || '-'}</span>
                    </div>
                </div>
                <div class="vehicle-actions" onclick="event.stopPropagation()">
                    <button class="edit" onclick="editVehicle('${v.id}')" title="Edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="delete" onclick="deleteVehicle('${v.id}')" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');
    } else {
        container.className = 'vehicles-list';
        container.innerHTML = filtered.map(v => `
            <div class="vehicle-list-item" onclick="showVehicleDetail('${v.id}')">
                <div class="vehicle-list-image">
                    ${v.image ? `<img src="${v.image}" alt="${v.make} ${v.model}">` : `<i class="fas ${getVehicleIcon(v.type)}"></i>`}
                </div>
                <div class="vehicle-list-info">
                    <h4>${v.make} ${v.model} (${v.year || '-'})</h4>
                    <p>${v.licensePlate} • ${formatMileage(v.mileage)} • ${v.fuelType || 'N/A'}</p>
                </div>
                <span class="vehicle-status status-${v.status}">${v.status}</span>
                <div class="vehicle-actions" onclick="event.stopPropagation()">
                    <button class="edit" onclick="editVehicle('${v.id}')" title="Edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="delete" onclick="deleteVehicle('${v.id}')" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }
}

function openVehicleModal(vehicle = null) {
    const modal = document.getElementById('vehicleModal');
    const form = document.getElementById('vehicleForm');
    const title = document.getElementById('vehicleModalTitle');

    form.reset();
    document.getElementById('vehicleId').value = '';
    document.getElementById('imagePreview').style.backgroundImage = '';
    document.getElementById('imagePreview').classList.remove('has-image');

    if (vehicle) {
        title.textContent = 'Edit Vehicle';
        document.getElementById('vehicleId').value = vehicle.id;
        document.getElementById('licensePlate').value = vehicle.licensePlate || '';
        document.getElementById('vehicleType').value = vehicle.type || '';
        document.getElementById('make').value = vehicle.make || '';
        document.getElementById('model').value = vehicle.model || '';
        document.getElementById('year').value = vehicle.year || '';
        document.getElementById('color').value = vehicle.color || '';
        document.getElementById('vin').value = vehicle.vin || '';
        document.getElementById('mileage').value = vehicle.mileage || '';
        document.getElementById('fuelType').value = vehicle.fuelType || '';
        document.getElementById('vehicleStatus').value = vehicle.status || 'active';
        document.getElementById('purchaseDate').value = vehicle.purchaseDate || '';
        document.getElementById('purchasePrice').value = vehicle.purchasePrice || '';
        document.getElementById('insuranceExpiry').value = vehicle.insuranceExpiry || '';
        document.getElementById('inspectionExpiry').value = vehicle.inspectionExpiry || '';
        document.getElementById('notes').value = vehicle.notes || '';

        if (vehicle.image) {
            document.getElementById('imagePreview').style.backgroundImage = `url(${vehicle.image})`;
            document.getElementById('imagePreview').classList.add('has-image');
        }
    } else {
        title.textContent = 'Add New Vehicle';
    }

    modal.classList.add('active');
}

function closeVehicleModal() {
    document.getElementById('vehicleModal').classList.remove('active');
}

function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById('imagePreview');
            preview.style.backgroundImage = `url(${e.target.result})`;
            preview.classList.add('has-image');
        };
        reader.readAsDataURL(file);
    }
}

async function saveVehicle(event) {
    event.preventDefault();

    const id = document.getElementById('vehicleId').value;
    const imageInput = document.getElementById('vehicleImage');
    let imageUrl = null;

    // Handle image upload
    if (imageInput.files[0]) {
        const file = imageInput.files[0];
        const fileExt = file.name.split('.').pop();
        const fileName = `${generateId()}.${fileExt}`;

        const { data: uploadData, error: uploadError } = await supabaseClientClient.storage
            .from('documents')
            .upload(`vehicle-images/${fileName}`, file);

        if (uploadError) {
            console.error('Error uploading image:', uploadError);
            showToast('Error uploading image', 'error');
        } else {
            const { data: urlData } = supabaseClient.storage
                .from('documents')
                .getPublicUrl(`vehicle-images/${fileName}`);
            imageUrl = urlData.publicUrl;
        }
    } else if (id) {
        // Keep existing image
        const existing = state.vehicles.find(v => v.id === id);
        imageUrl = existing?.image || null;
    }

    const vehicleData = {
        licensePlate: document.getElementById('licensePlate').value.toUpperCase(),
        type: document.getElementById('vehicleType').value,
        make: document.getElementById('make').value,
        model: document.getElementById('model').value,
        year: document.getElementById('year').value,
        color: document.getElementById('color').value,
        vin: document.getElementById('vin').value,
        mileage: document.getElementById('mileage').value,
        fuelType: document.getElementById('fuelType').value,
        status: document.getElementById('vehicleStatus').value,
        purchaseDate: document.getElementById('purchaseDate').value,
        purchasePrice: document.getElementById('purchasePrice').value,
        insuranceExpiry: document.getElementById('insuranceExpiry').value,
        inspectionExpiry: document.getElementById('inspectionExpiry').value,
        notes: document.getElementById('notes').value,
        image: imageUrl
    };

    const dbData = mapVehicleToDB(vehicleData);

    try {
        if (id) {
            const { error } = await supabaseClient
                .from('vehicles')
                .update(dbData)
                .eq('id', id);

            if (error) throw error;
            showToast('Vehicle updated successfully', 'success');
        } else {
            const { error } = await supabaseClient
                .from('vehicles')
                .insert([dbData]);

            if (error) throw error;
            showToast('Vehicle added successfully', 'success');
        }

        await loadAllData();
        closeVehicleModal();
        renderVehicles();
        updateDashboard();
        updateVehicleSelects();
    } catch (error) {
        console.error('Error saving vehicle:', error);
        showToast('Error saving vehicle', 'error');
    }
}

function editVehicle(id) {
    const vehicle = state.vehicles.find(v => v.id === id);
    if (vehicle) {
        openVehicleModal(vehicle);
    }
}

async function deleteVehicle(id) {
    showConfirmDialog('Delete Vehicle', 'Are you sure you want to delete this vehicle? This action cannot be undone.', async () => {
        try {
            const { error } = await supabaseClient
                .from('vehicles')
                .delete()
                .eq('id', id);

            if (error) throw error;

            await loadAllData();
            renderVehicles();
            updateDashboard();
            updateVehicleSelects();
            showToast('Vehicle deleted successfully', 'success');
        } catch (error) {
            console.error('Error deleting vehicle:', error);
            showToast('Error deleting vehicle', 'error');
        }
    });
}

function showVehicleDetail(id) {
    const vehicle = state.vehicles.find(v => v.id === id);
    if (!vehicle) return;

    const modal = document.getElementById('vehicleDetailModal');
    const title = document.getElementById('vehicleDetailTitle');
    const content = document.getElementById('vehicleDetailContent');

    title.textContent = `${vehicle.make} ${vehicle.model}`;

    const vehicleDocs = state.documents.filter(d => d.vehicleId === id);
    const vehicleMaint = state.maintenance.filter(m => m.vehicleId === id);

    content.innerHTML = `
        <div class="vehicle-detail-header">
            <div class="vehicle-detail-image">
                ${vehicle.image ? `<img src="${vehicle.image}" alt="${vehicle.make} ${vehicle.model}">` : `<i class="fas ${getVehicleIcon(vehicle.type)}"></i>`}
            </div>
            <div class="vehicle-detail-main">
                <h2>${vehicle.make} ${vehicle.model}</h2>
                <div class="plate">${vehicle.licensePlate}</div>
                <span class="vehicle-status status-${vehicle.status}">${vehicle.status}</span>
                <div class="detail-grid">
                    <div class="detail-item">
                        <span class="label">Year</span>
                        <span class="value">${vehicle.year || '-'}</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">Type</span>
                        <span class="value">${vehicle.type || '-'}</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">Mileage</span>
                        <span class="value">${formatMileage(vehicle.mileage)}</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">Fuel Type</span>
                        <span class="value">${vehicle.fuelType || '-'}</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">Color</span>
                        <span class="value">${vehicle.color || '-'}</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">VIN</span>
                        <span class="value">${vehicle.vin || '-'}</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="vehicle-detail-tabs">
            <button class="detail-tab active" onclick="switchDetailTab(this, 'info')">Information</button>
            <button class="detail-tab" onclick="switchDetailTab(this, 'docs')">Documents (${vehicleDocs.length})</button>
            <button class="detail-tab" onclick="switchDetailTab(this, 'maint')">Maintenance (${vehicleMaint.length})</button>
        </div>

        <div class="tab-content active" id="tab-info">
            <div class="detail-grid">
                <div class="detail-item">
                    <span class="label">Purchase Date</span>
                    <span class="value">${formatDate(vehicle.purchaseDate)}</span>
                </div>
                <div class="detail-item">
                    <span class="label">Purchase Price</span>
                    <span class="value">${formatCurrency(vehicle.purchasePrice)}</span>
                </div>
                <div class="detail-item">
                    <span class="label">Insurance Expiry</span>
                    <span class="value ${isDateExpired(vehicle.insuranceExpiry) ? 'text-danger' : isDateExpiringSoon(vehicle.insuranceExpiry) ? 'text-warning' : ''}">${formatDate(vehicle.insuranceExpiry)}</span>
                </div>
                <div class="detail-item">
                    <span class="label">Inspection Expiry (TÜV)</span>
                    <span class="value ${isDateExpired(vehicle.inspectionExpiry) ? 'text-danger' : isDateExpiringSoon(vehicle.inspectionExpiry) ? 'text-warning' : ''}">${formatDate(vehicle.inspectionExpiry)}</span>
                </div>
            </div>
            ${vehicle.notes ? `
                <div style="margin-top: 16px;">
                    <span class="label">Notes</span>
                    <p style="margin-top: 8px; color: var(--text-secondary);">${vehicle.notes}</p>
                </div>
            ` : ''}
        </div>

        <div class="tab-content" id="tab-docs">
            ${vehicleDocs.length === 0 ? `
                <p class="empty-state">No documents for this vehicle</p>
            ` : `
                <div class="documents-grid">
                    ${vehicleDocs.map(d => {
                        const iconInfo = getDocumentIcon(d.fileName);
                        return `
                            <div class="document-card">
                                <div class="document-icon ${iconInfo.class}">
                                    <i class="fas ${iconInfo.icon}"></i>
                                </div>
                                <div class="document-info">
                                    <h4>${d.name}</h4>
                                    <p>${d.type} • ${formatDate(d.date)}</p>
                                </div>
                                <div class="document-actions">
                                    <button onclick="viewDocument('${d.id}')" title="View">
                                        <i class="fas fa-eye"></i>
                                    </button>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            `}
        </div>

        <div class="tab-content" id="tab-maint">
            ${vehicleMaint.length === 0 ? `
                <p class="empty-state">No maintenance records for this vehicle</p>
            ` : `
                <div class="maintenance-list">
                    ${vehicleMaint.sort((a, b) => new Date(b.date) - new Date(a.date)).map(m => {
                        const date = new Date(m.date);
                        return `
                            <div class="maintenance-item">
                                <div class="maintenance-date">
                                    <div class="day">${date.getDate()}</div>
                                    <div class="month">${date.toLocaleString('default', { month: 'short' })}</div>
                                </div>
                                <div class="maintenance-info">
                                    <h4>${m.description}</h4>
                                    <p>${getMaintenanceTypeLabel(m.type)} ${m.cost ? `• ${formatCurrency(m.cost)}` : ''}</p>
                                </div>
                                <span class="maintenance-badge ${m.status}">${m.status}</span>
                            </div>
                        `;
                    }).join('')}
                </div>
            `}
        </div>
    `;

    modal.classList.add('active');
}

function switchDetailTab(button, tabId) {
    document.querySelectorAll('.detail-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

    button.classList.add('active');
    document.getElementById(`tab-${tabId}`).classList.add('active');
}

function closeVehicleDetailModal() {
    document.getElementById('vehicleDetailModal').classList.remove('active');
}

// ============================================
// Documents
// ============================================
function renderDocuments() {
    const container = document.getElementById('documentsContainer');
    const vehicleFilter = document.getElementById('docVehicleFilter').value;
    const typeFilter = document.getElementById('docTypeFilter').value;

    let filtered = [...state.documents];

    if (vehicleFilter) {
        filtered = filtered.filter(d => d.vehicleId === vehicleFilter);
    }
    if (typeFilter) {
        filtered = filtered.filter(d => d.type === typeFilter);
    }

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state-large">
                <i class="fas fa-folder-open"></i>
                <h3>${state.documents.length === 0 ? 'No documents yet' : 'No matching documents'}</h3>
                <p>${state.documents.length === 0 ? 'Upload documents for your vehicles' : 'Try adjusting your filters'}</p>
                ${state.documents.length === 0 ? `
                    <button class="btn btn-primary" onclick="openDocumentModal()">
                        <i class="fas fa-upload"></i> Upload Document
                    </button>
                ` : ''}
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(d => {
        const vehicle = state.vehicles.find(v => v.id === d.vehicleId);
        const iconInfo = getDocumentIcon(d.fileName);
        return `
            <div class="document-card">
                <div class="document-icon ${iconInfo.class}">
                    <i class="fas ${iconInfo.icon}"></i>
                </div>
                <div class="document-info">
                    <h4>${d.name}</h4>
                    <p>${d.type} • ${formatDate(d.date)}</p>
                    <div class="vehicle-name">
                        <i class="fas fa-car"></i>
                        ${vehicle ? `${vehicle.make} ${vehicle.model}` : 'Unknown'}
                    </div>
                    ${d.expiry ? `<p class="${isDateExpired(d.expiry) ? 'text-danger' : isDateExpiringSoon(d.expiry) ? 'text-warning' : ''}">Expires: ${formatDate(d.expiry)}</p>` : ''}
                </div>
                <div class="document-actions">
                    <button onclick="viewDocument('${d.id}')" title="View">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button onclick="downloadDocument('${d.id}')" title="Download">
                        <i class="fas fa-download"></i>
                    </button>
                    <button onclick="deleteDocument('${d.id}')" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function openDocumentModal() {
    const modal = document.getElementById('documentModal');
    const form = document.getElementById('documentForm');

    form.reset();
    document.getElementById('documentId').value = '';
    document.getElementById('filePreview').innerHTML = `
        <i class="fas fa-cloud-upload-alt"></i>
        <span>Click to select file</span>
        <small>PDF, Images, or Documents</small>
    `;
    document.getElementById('filePreview').classList.remove('has-file');

    updateVehicleSelects();
    modal.classList.add('active');
}

function closeDocumentModal() {
    document.getElementById('documentModal').classList.remove('active');
}

function previewDocument(event) {
    const file = event.target.files[0];
    if (file) {
        const preview = document.getElementById('filePreview');
        preview.innerHTML = `
            <i class="fas fa-file"></i>
            <span>${file.name}</span>
            <small>${(file.size / 1024).toFixed(2)} KB</small>
        `;
        preview.classList.add('has-file');
    }
}

async function saveDocument(event) {
    event.preventDefault();

    const fileInput = document.getElementById('docFile');
    const file = fileInput.files[0];

    if (!file) {
        showToast('Please select a file', 'error');
        return;
    }

    try {
        // Upload file to Supabase Storage
        const fileExt = file.name.split('.').pop();
        const fileName = `${generateId()}.${fileExt}`;

        const { data: uploadData, error: uploadError } = await supabaseClient.storage
            .from('documents')
            .upload(`files/${fileName}`, file);

        if (uploadError) throw uploadError;

        const { data: urlData } = supabaseClient.storage
            .from('documents')
            .getPublicUrl(`files/${fileName}`);

        const docData = {
            vehicleId: document.getElementById('docVehicle').value,
            type: document.getElementById('docType').value,
            name: document.getElementById('docName').value,
            date: document.getElementById('docDate').value,
            expiry: document.getElementById('docExpiry').value,
            notes: document.getElementById('docNotes').value,
            fileName: file.name,
            filePath: urlData.publicUrl,
            fileType: file.type
        };

        const { error } = await supabaseClient
            .from('documents')
            .insert([mapDocumentToDB(docData)]);

        if (error) throw error;

        await loadAllData();
        closeDocumentModal();
        renderDocuments();
        showToast('Document uploaded successfully', 'success');
    } catch (error) {
        console.error('Error uploading document:', error);
        showToast('Error uploading document', 'error');
    }
}

function viewDocument(id) {
    const doc = state.documents.find(d => d.id === id);
    if (doc && doc.filePath) {
        window.open(doc.filePath, '_blank');
    }
}

function downloadDocument(id) {
    const doc = state.documents.find(d => d.id === id);
    if (doc && doc.filePath) {
        const link = document.createElement('a');
        link.href = doc.filePath;
        link.download = doc.fileName;
        link.target = '_blank';
        link.click();
    }
}

async function deleteDocument(id) {
    showConfirmDialog('Delete Document', 'Are you sure you want to delete this document?', async () => {
        try {
            const { error } = await supabaseClient
                .from('documents')
                .delete()
                .eq('id', id);

            if (error) throw error;

            await loadAllData();
            renderDocuments();
            showToast('Document deleted successfully', 'success');
        } catch (error) {
            console.error('Error deleting document:', error);
            showToast('Error deleting document', 'error');
        }
    });
}

// ============================================
// Maintenance
// ============================================
function renderMaintenance() {
    const container = document.getElementById('maintenanceContainer');
    const vehicleFilter = document.getElementById('maintVehicleFilter').value;
    const statusFilter = document.getElementById('maintStatusFilter').value;

    let filtered = [...state.maintenance];

    filtered = filtered.map(m => {
        if (m.status !== 'completed' && isDateExpired(m.date)) {
            return { ...m, displayStatus: 'overdue' };
        }
        return { ...m, displayStatus: m.status };
    });

    if (vehicleFilter) {
        filtered = filtered.filter(m => m.vehicleId === vehicleFilter);
    }
    if (statusFilter) {
        filtered = filtered.filter(m => m.displayStatus === statusFilter || m.status === statusFilter);
    }

    filtered.sort((a, b) => new Date(a.date) - new Date(b.date));

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="empty-state-large">
                <i class="fas fa-wrench"></i>
                <h3>${state.maintenance.length === 0 ? 'No maintenance records' : 'No matching records'}</h3>
                <p>${state.maintenance.length === 0 ? 'Schedule maintenance for your vehicles' : 'Try adjusting your filters'}</p>
                ${state.maintenance.length === 0 ? `
                    <button class="btn btn-primary" onclick="openMaintenanceModal()">
                        <i class="fas fa-plus"></i> Schedule Maintenance
                    </button>
                ` : ''}
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map(m => {
        const date = new Date(m.date);
        const vehicle = state.vehicles.find(v => v.id === m.vehicleId);
        return `
            <div class="maintenance-item">
                <div class="maintenance-date">
                    <div class="day">${date.getDate()}</div>
                    <div class="month">${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}</div>
                </div>
                <div class="maintenance-info">
                    <h4>${m.description}</h4>
                    <p>
                        ${vehicle ? `${vehicle.make} ${vehicle.model} (${vehicle.licensePlate})` : 'Unknown vehicle'}
                        ${m.cost ? ` • ${formatCurrency(m.cost)}` : ''}
                        ${m.provider ? ` • ${m.provider}` : ''}
                    </p>
                </div>
                <span class="maintenance-badge ${m.displayStatus}">${m.displayStatus}</span>
                <div class="maintenance-actions">
                    <button onclick="editMaintenance('${m.id}')" title="Edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button onclick="deleteMaintenance('${m.id}')" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function openMaintenanceModal(maintenance = null) {
    const modal = document.getElementById('maintenanceModal');
    const form = document.getElementById('maintenanceForm');
    const title = document.getElementById('maintenanceModalTitle');

    form.reset();
    document.getElementById('maintenanceId').value = '';

    updateVehicleSelects();

    if (maintenance) {
        title.textContent = 'Edit Maintenance';
        document.getElementById('maintenanceId').value = maintenance.id;
        document.getElementById('maintVehicle').value = maintenance.vehicleId;
        document.getElementById('maintType').value = maintenance.type;
        document.getElementById('maintDescription').value = maintenance.description;
        document.getElementById('maintDate').value = maintenance.date;
        document.getElementById('maintStatus').value = maintenance.status;
        document.getElementById('maintMileage').value = maintenance.mileage || '';
        document.getElementById('maintCost').value = maintenance.cost || '';
        document.getElementById('maintProvider').value = maintenance.provider || '';
        document.getElementById('maintNotes').value = maintenance.notes || '';
    } else {
        title.textContent = 'Schedule Maintenance';
        document.getElementById('maintDate').value = new Date().toISOString().split('T')[0];
    }

    modal.classList.add('active');
}

function closeMaintenanceModal() {
    document.getElementById('maintenanceModal').classList.remove('active');
}

async function saveMaintenance(event) {
    event.preventDefault();

    const id = document.getElementById('maintenanceId').value;

    const maintData = {
        vehicleId: document.getElementById('maintVehicle').value,
        type: document.getElementById('maintType').value,
        description: document.getElementById('maintDescription').value,
        date: document.getElementById('maintDate').value,
        status: document.getElementById('maintStatus').value,
        mileage: document.getElementById('maintMileage').value,
        cost: document.getElementById('maintCost').value,
        provider: document.getElementById('maintProvider').value,
        notes: document.getElementById('maintNotes').value
    };

    const dbData = mapMaintenanceToDB(maintData);

    try {
        if (id) {
            const { error } = await supabaseClient
                .from('maintenance')
                .update(dbData)
                .eq('id', id);

            if (error) throw error;
            showToast('Maintenance record updated', 'success');
        } else {
            const { error } = await supabaseClient
                .from('maintenance')
                .insert([dbData]);

            if (error) throw error;
            showToast('Maintenance scheduled', 'success');
        }

        await loadAllData();
        closeMaintenanceModal();
        renderMaintenance();
        updateDashboard();
    } catch (error) {
        console.error('Error saving maintenance:', error);
        showToast('Error saving maintenance', 'error');
    }
}

function editMaintenance(id) {
    const maintenance = state.maintenance.find(m => m.id === id);
    if (maintenance) {
        openMaintenanceModal(maintenance);
    }
}

async function deleteMaintenance(id) {
    showConfirmDialog('Delete Maintenance Record', 'Are you sure you want to delete this maintenance record?', async () => {
        try {
            const { error } = await supabaseClient
                .from('maintenance')
                .delete()
                .eq('id', id);

            if (error) throw error;

            await loadAllData();
            renderMaintenance();
            updateDashboard();
            showToast('Maintenance record deleted', 'success');
        } catch (error) {
            console.error('Error deleting maintenance:', error);
            showToast('Error deleting maintenance', 'error');
        }
    });
}

// ============================================
// Settings
// ============================================
function updateSettingsPage() {
    document.getElementById('themeSelect').value = state.settings.theme;
    document.getElementById('currencySelect').value = state.settings.currency;
    document.getElementById('distanceSelect').value = state.settings.distanceUnit;
    document.getElementById('storageUsed').textContent = 'Cloud Storage';
}

async function setTheme(theme) {
    state.settings.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    await saveSettingsToSupabase();
}

async function setCurrency(currency) {
    state.settings.currency = currency;
    await saveSettingsToSupabase();
    updateDashboard();
}

async function setDistanceUnit(unit) {
    state.settings.distanceUnit = unit;
    await saveSettingsToSupabase();
    renderVehicles();
}

async function saveSettingsToSupabase() {
    try {
        const dbData = mapSettingsToDB(state.settings);

        if (state.settings.id) {
            await supabaseClient
                .from('settings')
                .update(dbData)
                .eq('id', state.settings.id);
        } else {
            const { data } = await supabaseClient
                .from('settings')
                .insert([dbData])
                .select()
                .single();

            if (data) state.settings.id = data.id;
        }
    } catch (error) {
        console.error('Error saving settings:', error);
    }
}

async function exportData() {
    const data = {
        vehicles: state.vehicles,
        documents: state.documents,
        maintenance: state.maintenance,
        settings: state.settings,
        exportedAt: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `fuhrparkpro-backup-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);

    showToast('Data exported successfully', 'success');
}

async function importData(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async function(e) {
        try {
            const data = JSON.parse(e.target.result);
            showToast('Import feature coming soon - use Supabase dashboard for bulk imports', 'warning');
        } catch (error) {
            showToast('Error importing data. Invalid file format.', 'error');
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

function clearAllData() {
    showConfirmDialog('Clear All Data', 'This will permanently delete all vehicles, documents, and maintenance records. This action cannot be undone.', async () => {
        try {
            await Promise.all([
                supabaseClient.from('maintenance').delete().neq('id', '00000000-0000-0000-0000-000000000000'),
                supabaseClient.from('documents').delete().neq('id', '00000000-0000-0000-0000-000000000000'),
                supabaseClient.from('vehicles').delete().neq('id', '00000000-0000-0000-0000-000000000000')
            ]);

            await loadAllData();
            updateDashboard();
            renderVehicles();
            renderDocuments();
            renderMaintenance();
            updateVehicleSelects();

            showToast('All data cleared', 'success');
        } catch (error) {
            console.error('Error clearing data:', error);
            showToast('Error clearing data', 'error');
        }
    });
}

// ============================================
// Confirm Dialog
// ============================================
let confirmCallback = null;

function showConfirmDialog(title, message, callback) {
    const modal = document.getElementById('confirmModal');
    document.getElementById('confirmTitle').textContent = title;
    document.getElementById('confirmMessage').textContent = message;
    confirmCallback = callback;
    modal.classList.add('active');
}

function closeConfirmModal() {
    document.getElementById('confirmModal').classList.remove('active');
    confirmCallback = null;
}

document.getElementById('confirmBtn').addEventListener('click', () => {
    if (confirmCallback) {
        confirmCallback();
    }
    closeConfirmModal();
});

// ============================================
// Update Vehicle Selects
// ============================================
function updateVehicleSelects() {
    const selects = [
        document.getElementById('docVehicle'),
        document.getElementById('docVehicleFilter'),
        document.getElementById('maintVehicle'),
        document.getElementById('maintVehicleFilter')
    ];

    selects.forEach(select => {
        if (select) {
            const currentValue = select.value;
            const isFilter = select.id.includes('Filter');

            select.innerHTML = isFilter
                ? '<option value="">All Vehicles</option>'
                : '<option value="">Select vehicle</option>';

            state.vehicles.forEach(v => {
                const option = document.createElement('option');
                option.value = v.id;
                option.textContent = `${v.make} ${v.model} (${v.licensePlate})`;
                select.appendChild(option);
            });

            if (currentValue && state.vehicles.find(v => v.id === currentValue)) {
                select.value = currentValue;
            }
        }
    });
}

// ============================================
// Event Listeners
// ============================================
function initEventListeners() {
    document.getElementById('addVehicleBtn').addEventListener('click', () => openVehicleModal());

    document.getElementById('globalSearch').addEventListener('input', () => {
        renderVehicles();
    });

    document.getElementById('statusFilter').addEventListener('change', renderVehicles);
    document.getElementById('typeFilter').addEventListener('change', renderVehicles);
    document.getElementById('docVehicleFilter').addEventListener('change', renderDocuments);
    document.getElementById('docTypeFilter').addEventListener('change', renderDocuments);
    document.getElementById('maintVehicleFilter').addEventListener('change', renderMaintenance);
    document.getElementById('maintStatusFilter').addEventListener('change', renderMaintenance);

    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.currentView = btn.dataset.view;
            renderVehicles();
        });
    });

    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.active').forEach(modal => {
                modal.classList.remove('active');
            });
        }
    });
}

// ============================================
// Initialization
// ============================================
async function init() {
    // Apply default theme
    document.documentElement.setAttribute('data-theme', state.settings.theme);

    // Initialize navigation
    initNavigation();

    // Initialize event listeners
    initEventListeners();

    // Load data from Supabase
    await loadAllData();

    // Apply saved theme
    if (state.settings.theme) {
        document.documentElement.setAttribute('data-theme', state.settings.theme);
    }

    // Update all views
    updateDashboard();
    renderVehicles();
    renderDocuments();
    renderMaintenance();
    updateSettingsPage();
    updateVehicleSelects();
}

// Start the application
document.addEventListener('DOMContentLoaded', init);
