// FuhrparkPro - Fleet Management Application
// Supabase Backend

// ============================================
// Translations
// ============================================
const translations = {
    en: {
        // Navigation
        'nav.dashboard': 'Dashboard',
        'nav.vehicles': 'Vehicles',
        'nav.documents': 'Documents',
        'nav.maintenance': 'Maintenance',
        'nav.settings': 'Settings',

        // Sidebar
        'sidebar.localMode': 'Local Storage Mode',
        'sidebar.dataSaved': 'Data saved locally',

        // Header
        'header.search': 'Search vehicles...',
        'header.addVehicle': 'Add Vehicle',

        // Dashboard
        'dashboard.totalVehicles': 'Total Vehicles',
        'dashboard.active': 'Active',
        'dashboard.inMaintenance': 'In Maintenance',
        'dashboard.alerts': 'Alerts',
        'dashboard.recentVehicles': 'Recent Vehicles',
        'dashboard.upcomingMaintenance': 'Upcoming Maintenance',
        'dashboard.fleetByStatus': 'Fleet by Status',
        'dashboard.viewAll': 'View All',
        'dashboard.noVehicles': 'No vehicles added yet',
        'dashboard.noMaintenance': 'No maintenance scheduled',
        'dashboard.addVehiclesStats': 'Add vehicles to see statistics',
        'dashboard.maintenance': 'Maintenance',
        'dashboard.inactive': 'Inactive',

        // Vehicles
        'vehicles.allStatus': 'All Status',
        'vehicles.active': 'Active',
        'vehicles.inMaintenance': 'In Maintenance',
        'vehicles.inactive': 'Inactive',
        'vehicles.allTypes': 'All Types',
        'vehicles.car': 'Car',
        'vehicles.truck': 'Truck',
        'vehicles.van': 'Van',
        'vehicles.motorcycle': 'Motorcycle',
        'vehicles.noVehicles': 'No vehicles yet',
        'vehicles.noMatching': 'No matching vehicles',
        'vehicles.addFirst': 'Add your first vehicle to get started',
        'vehicles.adjustFilters': 'Try adjusting your filters',
        'vehicles.addVehicle': 'Add Vehicle',
        'vehicles.edit': 'Edit',
        'vehicles.delete': 'Delete',
        'vehicles.unknownVehicle': 'Unknown vehicle',

        // Documents
        'documents.allVehicles': 'All Vehicles',
        'documents.allTypes': 'All Types',
        'documents.registration': 'Registration',
        'documents.insurance': 'Insurance',
        'documents.inspection': 'Inspection',
        'documents.receipt': 'Receipt',
        'documents.other': 'Other',
        'documents.upload': 'Upload Document',
        'documents.noDocuments': 'No documents yet',
        'documents.noMatching': 'No matching documents',
        'documents.uploadFirst': 'Upload documents for your vehicles',
        'documents.inspectionCertificate': 'Inspection Certificate',
        'documents.receiptInvoice': 'Receipt/Invoice',
        'documents.noDocsForVehicle': 'No documents for this vehicle',
        'documents.expires': 'Expires',
        'documents.selectFile': 'Click to select file',
        'documents.fileTypes': 'PDF, Images, or Documents',

        // Maintenance
        'maintenance.allStatus': 'All Status',
        'maintenance.scheduled': 'Scheduled',
        'maintenance.inProgress': 'In Progress',
        'maintenance.completed': 'Completed',
        'maintenance.overdue': 'Overdue',
        'maintenance.schedule': 'Schedule Maintenance',
        'maintenance.noRecords': 'No maintenance records',
        'maintenance.noMatching': 'No matching records',
        'maintenance.scheduleFirst': 'Schedule maintenance for your vehicles',
        'maintenance.noRecordsForVehicle': 'No maintenance records for this vehicle',

        // Maintenance Types
        'maintType.oil-change': 'Oil Change',
        'maintType.tire-rotation': 'Tire Rotation',
        'maintType.brake-service': 'Brake Service',
        'maintType.inspection': 'General Inspection',
        'maintType.tuv': 'TÜV/Safety Inspection',
        'maintType.repair': 'Repair',
        'maintType.other': 'Other',

        // Settings
        'settings.dataManagement': 'Data Management',
        'settings.exportData': 'Export Data',
        'settings.exportDesc': 'Download all your fleet data as JSON',
        'settings.export': 'Export',
        'settings.importData': 'Import Data',
        'settings.importDesc': 'Restore data from a backup file',
        'settings.import': 'Import',
        'settings.clearData': 'Clear All Data',
        'settings.clearDesc': 'Permanently delete all fleet data',
        'settings.clear': 'Clear Data',
        'settings.displaySettings': 'Display Settings',
        'settings.theme': 'Theme',
        'settings.themeDesc': 'Choose your preferred color scheme',
        'settings.light': 'Light',
        'settings.dark': 'Dark',
        'settings.currency': 'Currency',
        'settings.currencyDesc': 'Set your preferred currency',
        'settings.distance': 'Distance Unit',
        'settings.distanceDesc': 'Set your preferred distance unit',
        'settings.kilometers': 'Kilometers (km)',
        'settings.miles': 'Miles (mi)',
        'settings.language': 'Language',
        'settings.languageDesc': 'Choose your preferred language',
        'settings.about': 'About',
        'settings.version': 'Version 1.0.0',
        'settings.description': 'A modern fleet management solution',
        'settings.storageUsed': 'Storage used',

        // Vehicle Modal
        'vehicleModal.addTitle': 'Add New Vehicle',
        'vehicleModal.editTitle': 'Edit Vehicle',
        'vehicleModal.licensePlate': 'License Plate',
        'vehicleModal.vehicleType': 'Vehicle Type',
        'vehicleModal.selectType': 'Select type',
        'vehicleModal.make': 'Make',
        'vehicleModal.model': 'Model',
        'vehicleModal.year': 'Year',
        'vehicleModal.color': 'Color',
        'vehicleModal.vin': 'VIN',
        'vehicleModal.vinPlaceholder': 'Vehicle Identification Number',
        'vehicleModal.mileage': 'Current Mileage',
        'vehicleModal.fuelType': 'Fuel Type',
        'vehicleModal.selectFuel': 'Select fuel type',
        'vehicleModal.petrol': 'Petrol',
        'vehicleModal.diesel': 'Diesel',
        'vehicleModal.electric': 'Electric',
        'vehicleModal.hybrid': 'Hybrid',
        'vehicleModal.lpg': 'LPG',
        'vehicleModal.status': 'Status',
        'vehicleModal.purchaseDate': 'Purchase Date',
        'vehicleModal.purchasePrice': 'Purchase Price',
        'vehicleModal.insuranceExpiry': 'Insurance Expiry',
        'vehicleModal.inspectionExpiry': 'Inspection Expiry (TÜV)',
        'vehicleModal.notes': 'Notes',
        'vehicleModal.notesPlaceholder': 'Additional notes about the vehicle',
        'vehicleModal.image': 'Vehicle Image',
        'vehicleModal.uploadImage': 'Click to upload image',
        'vehicleModal.cancel': 'Cancel',
        'vehicleModal.save': 'Save Vehicle',

        // Document Modal
        'documentModal.title': 'Upload Document',
        'documentModal.vehicle': 'Vehicle',
        'documentModal.selectVehicle': 'Select vehicle',
        'documentModal.type': 'Document Type',
        'documentModal.selectType': 'Select type',
        'documentModal.name': 'Document Name',
        'documentModal.date': 'Document Date',
        'documentModal.expiry': 'Expiry Date',
        'documentModal.file': 'File',
        'documentModal.notes': 'Notes',
        'documentModal.notesPlaceholder': 'Additional notes',
        'documentModal.cancel': 'Cancel',
        'documentModal.save': 'Save Document',

        // Maintenance Modal
        'maintenanceModal.addTitle': 'Schedule Maintenance',
        'maintenanceModal.editTitle': 'Edit Maintenance',
        'maintenanceModal.vehicle': 'Vehicle',
        'maintenanceModal.selectVehicle': 'Select vehicle',
        'maintenanceModal.type': 'Maintenance Type',
        'maintenanceModal.selectType': 'Select type',
        'maintenanceModal.description': 'Description',
        'maintenanceModal.scheduledDate': 'Scheduled Date',
        'maintenanceModal.status': 'Status',
        'maintenanceModal.mileage': 'Mileage at Service',
        'maintenanceModal.mileagePlaceholder': 'Current mileage',
        'maintenanceModal.cost': 'Cost',
        'maintenanceModal.provider': 'Service Provider',
        'maintenanceModal.notes': 'Notes',
        'maintenanceModal.notesPlaceholder': 'Additional notes',
        'maintenanceModal.cancel': 'Cancel',
        'maintenanceModal.save': 'Save',

        // Vehicle Detail
        'vehicleDetail.title': 'Vehicle Details',
        'vehicleDetail.information': 'Information',
        'vehicleDetail.documents': 'Documents',
        'vehicleDetail.maintenance': 'Maintenance',
        'vehicleDetail.year': 'Year',
        'vehicleDetail.type': 'Type',
        'vehicleDetail.mileage': 'Mileage',
        'vehicleDetail.fuelType': 'Fuel Type',
        'vehicleDetail.color': 'Color',
        'vehicleDetail.vin': 'VIN',
        'vehicleDetail.purchaseDate': 'Purchase Date',
        'vehicleDetail.purchasePrice': 'Purchase Price',
        'vehicleDetail.insuranceExpiry': 'Insurance Expiry',
        'vehicleDetail.inspectionExpiry': 'Inspection Expiry (TÜV)',
        'vehicleDetail.notes': 'Notes',

        // Confirm Dialog
        'confirm.title': 'Confirm Action',
        'confirm.message': 'Are you sure you want to proceed?',
        'confirm.cancel': 'Cancel',
        'confirm.confirm': 'Confirm',
        'confirm.deleteVehicle': 'Delete Vehicle',
        'confirm.deleteVehicleMsg': 'Are you sure you want to delete this vehicle? This action cannot be undone.',
        'confirm.deleteDocument': 'Delete Document',
        'confirm.deleteDocumentMsg': 'Are you sure you want to delete this document?',
        'confirm.deleteMaintenance': 'Delete Maintenance Record',
        'confirm.deleteMaintenanceMsg': 'Are you sure you want to delete this maintenance record?',
        'confirm.clearAll': 'Clear All Data',
        'confirm.clearAllMsg': 'This will permanently delete all vehicles, documents, and maintenance records. This action cannot be undone.',

        // Toast Messages
        'toast.errorLoading': 'Error loading data',
        'toast.vehicleUpdated': 'Vehicle updated successfully',
        'toast.vehicleAdded': 'Vehicle added successfully',
        'toast.vehicleSaveError': 'Error saving vehicle',
        'toast.vehicleDeleted': 'Vehicle deleted successfully',
        'toast.vehicleDeleteError': 'Error deleting vehicle',
        'toast.imageUploadError': 'Error uploading image',
        'toast.selectFile': 'Please select a file',
        'toast.documentUploaded': 'Document uploaded successfully',
        'toast.documentUploadError': 'Error uploading document',
        'toast.documentDeleted': 'Document deleted successfully',
        'toast.documentDeleteError': 'Error deleting document',
        'toast.maintenanceUpdated': 'Maintenance record updated',
        'toast.maintenanceScheduled': 'Maintenance scheduled',
        'toast.maintenanceSaveError': 'Error saving maintenance',
        'toast.maintenanceDeleted': 'Maintenance record deleted',
        'toast.maintenanceDeleteError': 'Error deleting maintenance',
        'toast.dataExported': 'Data exported successfully',
        'toast.importComingSoon': 'Import feature coming soon - use Supabase dashboard for bulk imports',
        'toast.importError': 'Error importing data. Invalid file format.',
        'toast.dataCleared': 'All data cleared',
        'toast.clearError': 'Error clearing data',

        // General
        'general.unknown': 'Unknown',
        'general.cloudStorage': 'Cloud Storage'
    },
    de: {
        // Navigation
        'nav.dashboard': 'Übersicht',
        'nav.vehicles': 'Fahrzeuge',
        'nav.documents': 'Dokumente',
        'nav.maintenance': 'Wartung',
        'nav.settings': 'Einstellungen',

        // Sidebar
        'sidebar.localMode': 'Lokaler Speichermodus',
        'sidebar.dataSaved': 'Daten lokal gespeichert',

        // Header
        'header.search': 'Fahrzeuge suchen...',
        'header.addVehicle': 'Fahrzeug hinzufügen',

        // Dashboard
        'dashboard.totalVehicles': 'Fahrzeuge gesamt',
        'dashboard.active': 'Aktiv',
        'dashboard.inMaintenance': 'In Wartung',
        'dashboard.alerts': 'Warnungen',
        'dashboard.recentVehicles': 'Neueste Fahrzeuge',
        'dashboard.upcomingMaintenance': 'Anstehende Wartung',
        'dashboard.fleetByStatus': 'Flotte nach Status',
        'dashboard.viewAll': 'Alle anzeigen',
        'dashboard.noVehicles': 'Noch keine Fahrzeuge hinzugefügt',
        'dashboard.noMaintenance': 'Keine Wartung geplant',
        'dashboard.addVehiclesStats': 'Fahrzeuge hinzufügen um Statistiken zu sehen',
        'dashboard.maintenance': 'Wartung',
        'dashboard.inactive': 'Inaktiv',

        // Vehicles
        'vehicles.allStatus': 'Alle Status',
        'vehicles.active': 'Aktiv',
        'vehicles.inMaintenance': 'In Wartung',
        'vehicles.inactive': 'Inaktiv',
        'vehicles.allTypes': 'Alle Typen',
        'vehicles.car': 'PKW',
        'vehicles.truck': 'LKW',
        'vehicles.van': 'Transporter',
        'vehicles.motorcycle': 'Motorrad',
        'vehicles.noVehicles': 'Noch keine Fahrzeuge',
        'vehicles.noMatching': 'Keine passenden Fahrzeuge',
        'vehicles.addFirst': 'Fügen Sie Ihr erstes Fahrzeug hinzu',
        'vehicles.adjustFilters': 'Versuchen Sie die Filter anzupassen',
        'vehicles.addVehicle': 'Fahrzeug hinzufügen',
        'vehicles.edit': 'Bearbeiten',
        'vehicles.delete': 'Löschen',
        'vehicles.unknownVehicle': 'Unbekanntes Fahrzeug',

        // Documents
        'documents.allVehicles': 'Alle Fahrzeuge',
        'documents.allTypes': 'Alle Typen',
        'documents.registration': 'Zulassung',
        'documents.insurance': 'Versicherung',
        'documents.inspection': 'Prüfung',
        'documents.receipt': 'Quittung',
        'documents.other': 'Sonstiges',
        'documents.upload': 'Dokument hochladen',
        'documents.noDocuments': 'Noch keine Dokumente',
        'documents.noMatching': 'Keine passenden Dokumente',
        'documents.uploadFirst': 'Laden Sie Dokumente für Ihre Fahrzeuge hoch',
        'documents.inspectionCertificate': 'Prüfbescheinigung',
        'documents.receiptInvoice': 'Quittung/Rechnung',
        'documents.noDocsForVehicle': 'Keine Dokumente für dieses Fahrzeug',
        'documents.expires': 'Läuft ab',
        'documents.selectFile': 'Klicken um Datei auszuwählen',
        'documents.fileTypes': 'PDF, Bilder oder Dokumente',

        // Maintenance
        'maintenance.allStatus': 'Alle Status',
        'maintenance.scheduled': 'Geplant',
        'maintenance.inProgress': 'In Bearbeitung',
        'maintenance.completed': 'Abgeschlossen',
        'maintenance.overdue': 'Überfällig',
        'maintenance.schedule': 'Wartung planen',
        'maintenance.noRecords': 'Keine Wartungseinträge',
        'maintenance.noMatching': 'Keine passenden Einträge',
        'maintenance.scheduleFirst': 'Planen Sie Wartungen für Ihre Fahrzeuge',
        'maintenance.noRecordsForVehicle': 'Keine Wartungseinträge für dieses Fahrzeug',

        // Maintenance Types
        'maintType.oil-change': 'Ölwechsel',
        'maintType.tire-rotation': 'Reifenwechsel',
        'maintType.brake-service': 'Bremsenservice',
        'maintType.inspection': 'Allgemeine Inspektion',
        'maintType.tuv': 'TÜV/Hauptuntersuchung',
        'maintType.repair': 'Reparatur',
        'maintType.other': 'Sonstiges',

        // Settings
        'settings.dataManagement': 'Datenverwaltung',
        'settings.exportData': 'Daten exportieren',
        'settings.exportDesc': 'Alle Flottendaten als JSON herunterladen',
        'settings.export': 'Exportieren',
        'settings.importData': 'Daten importieren',
        'settings.importDesc': 'Daten aus einer Sicherungsdatei wiederherstellen',
        'settings.import': 'Importieren',
        'settings.clearData': 'Alle Daten löschen',
        'settings.clearDesc': 'Alle Flottendaten dauerhaft löschen',
        'settings.clear': 'Daten löschen',
        'settings.displaySettings': 'Anzeigeeinstellungen',
        'settings.theme': 'Design',
        'settings.themeDesc': 'Wählen Sie Ihr bevorzugtes Farbschema',
        'settings.light': 'Hell',
        'settings.dark': 'Dunkel',
        'settings.currency': 'Währung',
        'settings.currencyDesc': 'Stellen Sie Ihre bevorzugte Währung ein',
        'settings.distance': 'Entfernungseinheit',
        'settings.distanceDesc': 'Stellen Sie Ihre bevorzugte Entfernungseinheit ein',
        'settings.kilometers': 'Kilometer (km)',
        'settings.miles': 'Meilen (mi)',
        'settings.language': 'Sprache',
        'settings.languageDesc': 'Wählen Sie Ihre bevorzugte Sprache',
        'settings.about': 'Über',
        'settings.version': 'Version 1.0.0',
        'settings.description': 'Eine moderne Fuhrparkverwaltungslösung',
        'settings.storageUsed': 'Speicher verwendet',

        // Vehicle Modal
        'vehicleModal.addTitle': 'Neues Fahrzeug hinzufügen',
        'vehicleModal.editTitle': 'Fahrzeug bearbeiten',
        'vehicleModal.licensePlate': 'Kennzeichen',
        'vehicleModal.vehicleType': 'Fahrzeugtyp',
        'vehicleModal.selectType': 'Typ auswählen',
        'vehicleModal.make': 'Hersteller',
        'vehicleModal.model': 'Modell',
        'vehicleModal.year': 'Baujahr',
        'vehicleModal.color': 'Farbe',
        'vehicleModal.vin': 'FIN',
        'vehicleModal.vinPlaceholder': 'Fahrzeug-Identifizierungsnummer',
        'vehicleModal.mileage': 'Aktueller Kilometerstand',
        'vehicleModal.fuelType': 'Kraftstoffart',
        'vehicleModal.selectFuel': 'Kraftstoff auswählen',
        'vehicleModal.petrol': 'Benzin',
        'vehicleModal.diesel': 'Diesel',
        'vehicleModal.electric': 'Elektro',
        'vehicleModal.hybrid': 'Hybrid',
        'vehicleModal.lpg': 'Autogas',
        'vehicleModal.status': 'Status',
        'vehicleModal.purchaseDate': 'Kaufdatum',
        'vehicleModal.purchasePrice': 'Kaufpreis',
        'vehicleModal.insuranceExpiry': 'Versicherung läuft ab',
        'vehicleModal.inspectionExpiry': 'HU/TÜV läuft ab',
        'vehicleModal.notes': 'Notizen',
        'vehicleModal.notesPlaceholder': 'Zusätzliche Notizen zum Fahrzeug',
        'vehicleModal.image': 'Fahrzeugbild',
        'vehicleModal.uploadImage': 'Klicken um Bild hochzuladen',
        'vehicleModal.cancel': 'Abbrechen',
        'vehicleModal.save': 'Fahrzeug speichern',

        // Document Modal
        'documentModal.title': 'Dokument hochladen',
        'documentModal.vehicle': 'Fahrzeug',
        'documentModal.selectVehicle': 'Fahrzeug auswählen',
        'documentModal.type': 'Dokumenttyp',
        'documentModal.selectType': 'Typ auswählen',
        'documentModal.name': 'Dokumentname',
        'documentModal.date': 'Dokumentdatum',
        'documentModal.expiry': 'Ablaufdatum',
        'documentModal.file': 'Datei',
        'documentModal.notes': 'Notizen',
        'documentModal.notesPlaceholder': 'Zusätzliche Notizen',
        'documentModal.cancel': 'Abbrechen',
        'documentModal.save': 'Dokument speichern',

        // Maintenance Modal
        'maintenanceModal.addTitle': 'Wartung planen',
        'maintenanceModal.editTitle': 'Wartung bearbeiten',
        'maintenanceModal.vehicle': 'Fahrzeug',
        'maintenanceModal.selectVehicle': 'Fahrzeug auswählen',
        'maintenanceModal.type': 'Wartungsart',
        'maintenanceModal.selectType': 'Art auswählen',
        'maintenanceModal.description': 'Beschreibung',
        'maintenanceModal.scheduledDate': 'Geplantes Datum',
        'maintenanceModal.status': 'Status',
        'maintenanceModal.mileage': 'Kilometerstand bei Service',
        'maintenanceModal.mileagePlaceholder': 'Aktueller Kilometerstand',
        'maintenanceModal.cost': 'Kosten',
        'maintenanceModal.provider': 'Dienstleister',
        'maintenanceModal.notes': 'Notizen',
        'maintenanceModal.notesPlaceholder': 'Zusätzliche Notizen',
        'maintenanceModal.cancel': 'Abbrechen',
        'maintenanceModal.save': 'Speichern',

        // Vehicle Detail
        'vehicleDetail.title': 'Fahrzeugdetails',
        'vehicleDetail.information': 'Informationen',
        'vehicleDetail.documents': 'Dokumente',
        'vehicleDetail.maintenance': 'Wartung',
        'vehicleDetail.year': 'Baujahr',
        'vehicleDetail.type': 'Typ',
        'vehicleDetail.mileage': 'Kilometerstand',
        'vehicleDetail.fuelType': 'Kraftstoffart',
        'vehicleDetail.color': 'Farbe',
        'vehicleDetail.vin': 'FIN',
        'vehicleDetail.purchaseDate': 'Kaufdatum',
        'vehicleDetail.purchasePrice': 'Kaufpreis',
        'vehicleDetail.insuranceExpiry': 'Versicherung läuft ab',
        'vehicleDetail.inspectionExpiry': 'HU/TÜV läuft ab',
        'vehicleDetail.notes': 'Notizen',

        // Confirm Dialog
        'confirm.title': 'Aktion bestätigen',
        'confirm.message': 'Sind Sie sicher, dass Sie fortfahren möchten?',
        'confirm.cancel': 'Abbrechen',
        'confirm.confirm': 'Bestätigen',
        'confirm.deleteVehicle': 'Fahrzeug löschen',
        'confirm.deleteVehicleMsg': 'Möchten Sie dieses Fahrzeug wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.',
        'confirm.deleteDocument': 'Dokument löschen',
        'confirm.deleteDocumentMsg': 'Möchten Sie dieses Dokument wirklich löschen?',
        'confirm.deleteMaintenance': 'Wartungseintrag löschen',
        'confirm.deleteMaintenanceMsg': 'Möchten Sie diesen Wartungseintrag wirklich löschen?',
        'confirm.clearAll': 'Alle Daten löschen',
        'confirm.clearAllMsg': 'Dadurch werden alle Fahrzeuge, Dokumente und Wartungseinträge dauerhaft gelöscht. Diese Aktion kann nicht rückgängig gemacht werden.',

        // Toast Messages
        'toast.errorLoading': 'Fehler beim Laden der Daten',
        'toast.vehicleUpdated': 'Fahrzeug erfolgreich aktualisiert',
        'toast.vehicleAdded': 'Fahrzeug erfolgreich hinzugefügt',
        'toast.vehicleSaveError': 'Fehler beim Speichern des Fahrzeugs',
        'toast.vehicleDeleted': 'Fahrzeug erfolgreich gelöscht',
        'toast.vehicleDeleteError': 'Fehler beim Löschen des Fahrzeugs',
        'toast.imageUploadError': 'Fehler beim Hochladen des Bildes',
        'toast.selectFile': 'Bitte wählen Sie eine Datei aus',
        'toast.documentUploaded': 'Dokument erfolgreich hochgeladen',
        'toast.documentUploadError': 'Fehler beim Hochladen des Dokuments',
        'toast.documentDeleted': 'Dokument erfolgreich gelöscht',
        'toast.documentDeleteError': 'Fehler beim Löschen des Dokuments',
        'toast.maintenanceUpdated': 'Wartungseintrag aktualisiert',
        'toast.maintenanceScheduled': 'Wartung geplant',
        'toast.maintenanceSaveError': 'Fehler beim Speichern der Wartung',
        'toast.maintenanceDeleted': 'Wartungseintrag gelöscht',
        'toast.maintenanceDeleteError': 'Fehler beim Löschen der Wartung',
        'toast.dataExported': 'Daten erfolgreich exportiert',
        'toast.importComingSoon': 'Import-Funktion kommt bald - nutzen Sie das Supabase-Dashboard für Massenimporte',
        'toast.importError': 'Fehler beim Importieren der Daten. Ungültiges Dateiformat.',
        'toast.dataCleared': 'Alle Daten gelöscht',
        'toast.clearError': 'Fehler beim Löschen der Daten',

        // General
        'general.unknown': 'Unbekannt',
        'general.cloudStorage': 'Cloud-Speicher'
    }
};

// Translation helper function
function t(key) {
    const lang = state.settings.language || 'en';
    return translations[lang][key] || translations['en'][key] || key;
}

// Apply translations to DOM elements with data-i18n attribute
function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        el.title = t(key);
    });

    // Update page title based on current page
    const activePage = document.querySelector('.nav-item.active');
    if (activePage) {
        const pageName = activePage.dataset.page;
        document.getElementById('pageTitle').textContent = t(`nav.${pageName}`);
    }
}

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
        distanceUnit: 'km',
        language: 'en'
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
    return t(`maintType.${type}`) || type;
}

function getMaintenanceStatusLabel(status) {
    const statusMap = {
        'scheduled': 'maintenance.scheduled',
        'in-progress': 'maintenance.inProgress',
        'completed': 'maintenance.completed',
        'overdue': 'maintenance.overdue'
    };
    return t(statusMap[status]) || status;
}

function getVehicleStatusLabel(status) {
    const statusMap = {
        'active': 'vehicles.active',
        'maintenance': 'vehicles.inMaintenance',
        'inactive': 'vehicles.inactive'
    };
    return t(statusMap[status]) || status;
}

function getVehicleTypeLabel(type) {
    const typeMap = {
        'car': 'vehicles.car',
        'truck': 'vehicles.truck',
        'van': 'vehicles.van',
        'motorcycle': 'vehicles.motorcycle'
    };
    return t(typeMap[type]) || type;
}

function getFuelTypeLabel(fuelType) {
    const fuelMap = {
        'petrol': 'vehicleModal.petrol',
        'diesel': 'vehicleModal.diesel',
        'electric': 'vehicleModal.electric',
        'hybrid': 'vehicleModal.hybrid',
        'lpg': 'vehicleModal.lpg'
    };
    return t(fuelMap[fuelType]) || fuelType;
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
        showToast(t('toast.errorLoading'), 'error');
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
        distanceUnit: s.distance_unit || 'km',
        language: s.language || 'en'
    };
}

function mapSettingsToDB(s) {
    return {
        theme: s.theme,
        currency: s.currency,
        distance_unit: s.distanceUnit,
        language: s.language || 'en',
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

            pageTitle.textContent = t(`nav.${pageName}`);

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
        recentVehiclesList.innerHTML = `<p class="empty-state">${t('dashboard.noVehicles')}</p>`;
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
                <span class="vehicle-status status-${v.status}">${getVehicleStatusLabel(v.status)}</span>
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
        upcomingMaintenance.innerHTML = `<p class="empty-state">${t('dashboard.noMaintenance')}</p>`;
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
                        <p>${vehicle ? `${vehicle.make} ${vehicle.model}` : t('vehicles.unknownVehicle')}</p>
                    </div>
                    <span class="maintenance-badge ${m.status}">${getMaintenanceStatusLabel(m.status)}</span>
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
                <p>${t('dashboard.addVehiclesStats')}</p>
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
                    <div class="label">${t('dashboard.active')}</div>
                </div>
                <div class="chart-bar">
                    <div class="bar maintenance" style="height: ${(maintenanceVehicles / maxCount) * 150}px"></div>
                    <div class="count">${maintenanceVehicles}</div>
                    <div class="label">${t('dashboard.maintenance')}</div>
                </div>
                <div class="chart-bar">
                    <div class="bar inactive" style="height: ${(inactiveVehicles / maxCount) * 150}px"></div>
                    <div class="count">${inactiveVehicles}</div>
                    <div class="label">${t('dashboard.inactive')}</div>
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
                <h3>${state.vehicles.length === 0 ? t('vehicles.noVehicles') : t('vehicles.noMatching')}</h3>
                <p>${state.vehicles.length === 0 ? t('vehicles.addFirst') : t('vehicles.adjustFilters')}</p>
                ${state.vehicles.length === 0 ? `
                    <button class="btn btn-primary" onclick="openVehicleModal()">
                        <i class="fas fa-plus"></i> ${t('vehicles.addVehicle')}
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
                    <span class="vehicle-status status-${v.status}">${getVehicleStatusLabel(v.status)}</span>
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
                <span class="vehicle-status status-${v.status}">${getVehicleStatusLabel(v.status)}</span>
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
        title.textContent = t('vehicleModal.editTitle');
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
        title.textContent = t('vehicleModal.addTitle');
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
            showToast(t('toast.imageUploadError'), 'error');
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
            showToast(t('toast.vehicleUpdated'), 'success');
        } else {
            const { error } = await supabaseClient
                .from('vehicles')
                .insert([dbData]);

            if (error) throw error;
            showToast(t('toast.vehicleAdded'), 'success');
        }

        await loadAllData();
        closeVehicleModal();
        renderVehicles();
        updateDashboard();
        updateVehicleSelects();
    } catch (error) {
        console.error('Error saving vehicle:', error);
        showToast(t('toast.vehicleSaveError'), 'error');
    }
}

function editVehicle(id) {
    const vehicle = state.vehicles.find(v => v.id === id);
    if (vehicle) {
        openVehicleModal(vehicle);
    }
}

async function deleteVehicle(id) {
    showConfirmDialog(t('confirm.deleteVehicle'), t('confirm.deleteVehicleMsg'), async () => {
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
            showToast(t('toast.vehicleDeleted'), 'success');
        } catch (error) {
            console.error('Error deleting vehicle:', error);
            showToast(t('toast.vehicleDeleteError'), 'error');
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
                <span class="vehicle-status status-${vehicle.status}">${getVehicleStatusLabel(vehicle.status)}</span>
                <div class="detail-grid">
                    <div class="detail-item">
                        <span class="label">${t('vehicleDetail.year')}</span>
                        <span class="value">${vehicle.year || '-'}</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">${t('vehicleDetail.type')}</span>
                        <span class="value">${vehicle.type ? getVehicleTypeLabel(vehicle.type) : '-'}</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">${t('vehicleDetail.mileage')}</span>
                        <span class="value">${formatMileage(vehicle.mileage)}</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">${t('vehicleDetail.fuelType')}</span>
                        <span class="value">${vehicle.fuelType ? getFuelTypeLabel(vehicle.fuelType) : '-'}</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">${t('vehicleDetail.color')}</span>
                        <span class="value">${vehicle.color || '-'}</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">${t('vehicleDetail.vin')}</span>
                        <span class="value">${vehicle.vin || '-'}</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="vehicle-detail-tabs">
            <button class="detail-tab active" onclick="switchDetailTab(this, 'info')">${t('vehicleDetail.information')}</button>
            <button class="detail-tab" onclick="switchDetailTab(this, 'docs')">${t('vehicleDetail.documents')} (${vehicleDocs.length})</button>
            <button class="detail-tab" onclick="switchDetailTab(this, 'maint')">${t('vehicleDetail.maintenance')} (${vehicleMaint.length})</button>
        </div>

        <div class="tab-content active" id="tab-info">
            <div class="detail-grid">
                <div class="detail-item">
                    <span class="label">${t('vehicleDetail.purchaseDate')}</span>
                    <span class="value">${formatDate(vehicle.purchaseDate)}</span>
                </div>
                <div class="detail-item">
                    <span class="label">${t('vehicleDetail.purchasePrice')}</span>
                    <span class="value">${formatCurrency(vehicle.purchasePrice)}</span>
                </div>
                <div class="detail-item">
                    <span class="label">${t('vehicleDetail.insuranceExpiry')}</span>
                    <span class="value ${isDateExpired(vehicle.insuranceExpiry) ? 'text-danger' : isDateExpiringSoon(vehicle.insuranceExpiry) ? 'text-warning' : ''}">${formatDate(vehicle.insuranceExpiry)}</span>
                </div>
                <div class="detail-item">
                    <span class="label">${t('vehicleDetail.inspectionExpiry')}</span>
                    <span class="value ${isDateExpired(vehicle.inspectionExpiry) ? 'text-danger' : isDateExpiringSoon(vehicle.inspectionExpiry) ? 'text-warning' : ''}">${formatDate(vehicle.inspectionExpiry)}</span>
                </div>
            </div>
            ${vehicle.notes ? `
                <div style="margin-top: 16px;">
                    <span class="label">${t('vehicleDetail.notes')}</span>
                    <p style="margin-top: 8px; color: var(--text-secondary);">${vehicle.notes}</p>
                </div>
            ` : ''}
        </div>

        <div class="tab-content" id="tab-docs">
            ${vehicleDocs.length === 0 ? `
                <p class="empty-state">${t('documents.noDocsForVehicle')}</p>
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
                <p class="empty-state">${t('maintenance.noRecordsForVehicle')}</p>
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
                                <span class="maintenance-badge ${m.status}">${getMaintenanceStatusLabel(m.status)}</span>
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
                <h3>${state.documents.length === 0 ? t('documents.noDocuments') : t('documents.noMatching')}</h3>
                <p>${state.documents.length === 0 ? t('documents.uploadFirst') : t('vehicles.adjustFilters')}</p>
                ${state.documents.length === 0 ? `
                    <button class="btn btn-primary" onclick="openDocumentModal()">
                        <i class="fas fa-upload"></i> ${t('documents.upload')}
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
                        ${vehicle ? `${vehicle.make} ${vehicle.model}` : t('general.unknown')}
                    </div>
                    ${d.expiry ? `<p class="${isDateExpired(d.expiry) ? 'text-danger' : isDateExpiringSoon(d.expiry) ? 'text-warning' : ''}">${t('documents.expires')}: ${formatDate(d.expiry)}</p>` : ''}
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
        <span>${t('documents.selectFile')}</span>
        <small>${t('documents.fileTypes')}</small>
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
        showToast(t('toast.selectFile'), 'error');
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
        showToast(t('toast.documentUploaded'), 'success');
    } catch (error) {
        console.error('Error uploading document:', error);
        showToast(t('toast.documentUploadError'), 'error');
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
    showConfirmDialog(t('confirm.deleteDocument'), t('confirm.deleteDocumentMsg'), async () => {
        try {
            const { error } = await supabaseClient
                .from('documents')
                .delete()
                .eq('id', id);

            if (error) throw error;

            await loadAllData();
            renderDocuments();
            showToast(t('toast.documentDeleted'), 'success');
        } catch (error) {
            console.error('Error deleting document:', error);
            showToast(t('toast.documentDeleteError'), 'error');
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
                <h3>${state.maintenance.length === 0 ? t('maintenance.noRecords') : t('maintenance.noMatching')}</h3>
                <p>${state.maintenance.length === 0 ? t('maintenance.scheduleFirst') : t('vehicles.adjustFilters')}</p>
                ${state.maintenance.length === 0 ? `
                    <button class="btn btn-primary" onclick="openMaintenanceModal()">
                        <i class="fas fa-plus"></i> ${t('maintenance.schedule')}
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
                        ${vehicle ? `${vehicle.make} ${vehicle.model} (${vehicle.licensePlate})` : t('vehicles.unknownVehicle')}
                        ${m.cost ? ` • ${formatCurrency(m.cost)}` : ''}
                        ${m.provider ? ` • ${m.provider}` : ''}
                    </p>
                </div>
                <span class="maintenance-badge ${m.displayStatus}">${getMaintenanceStatusLabel(m.displayStatus)}</span>
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
        title.textContent = t('maintenanceModal.editTitle');
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
        title.textContent = t('maintenanceModal.addTitle');
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
            showToast(t('toast.maintenanceUpdated'), 'success');
        } else {
            const { error } = await supabaseClient
                .from('maintenance')
                .insert([dbData]);

            if (error) throw error;
            showToast(t('toast.maintenanceScheduled'), 'success');
        }

        await loadAllData();
        closeMaintenanceModal();
        renderMaintenance();
        updateDashboard();
    } catch (error) {
        console.error('Error saving maintenance:', error);
        showToast(t('toast.maintenanceSaveError'), 'error');
    }
}

function editMaintenance(id) {
    const maintenance = state.maintenance.find(m => m.id === id);
    if (maintenance) {
        openMaintenanceModal(maintenance);
    }
}

async function deleteMaintenance(id) {
    showConfirmDialog(t('confirm.deleteMaintenance'), t('confirm.deleteMaintenanceMsg'), async () => {
        try {
            const { error } = await supabaseClient
                .from('maintenance')
                .delete()
                .eq('id', id);

            if (error) throw error;

            await loadAllData();
            renderMaintenance();
            updateDashboard();
            showToast(t('toast.maintenanceDeleted'), 'success');
        } catch (error) {
            console.error('Error deleting maintenance:', error);
            showToast(t('toast.maintenanceDeleteError'), 'error');
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
    document.getElementById('languageSelect').value = state.settings.language || 'en';
    document.getElementById('storageUsed').textContent = t('general.cloudStorage');
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

async function setLanguage(lang) {
    state.settings.language = lang;
    document.documentElement.setAttribute('lang', lang);
    await saveSettingsToSupabase();
    applyTranslations();
    // Re-render all dynamic content with new language
    updateDashboard();
    renderVehicles();
    renderDocuments();
    renderMaintenance();
    updateSettingsPage();
    updateVehicleSelects();
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

    showToast(t('toast.dataExported'), 'success');
}

async function importData(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async function(e) {
        try {
            const data = JSON.parse(e.target.result);
            showToast(t('toast.importComingSoon'), 'warning');
        } catch (error) {
            showToast(t('toast.importError'), 'error');
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

function clearAllData() {
    showConfirmDialog(t('confirm.clearAll'), t('confirm.clearAllMsg'), async () => {
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

            showToast(t('toast.dataCleared'), 'success');
        } catch (error) {
            console.error('Error clearing data:', error);
            showToast(t('toast.clearError'), 'error');
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
                ? `<option value="">${t('documents.allVehicles')}</option>`
                : `<option value="">${t('documentModal.selectVehicle')}</option>`;

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

    // Apply saved language
    if (state.settings.language) {
        document.documentElement.setAttribute('lang', state.settings.language);
    }

    // Apply translations to static elements
    applyTranslations();

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
