/**
 * Dubai Customs Control & Logistics Inventory Management Portal
 * Core Application Engine & State Controller
 */

// ==========================================================================
// Authentic Initial Sample Dataset (UAE & Dubai Customs)
// ==========================================================================
const DEFAULT_CUSTOMS_DATA = {
  // Incoming Declarations (BOEs)
  incomingDeclarations: [
    {
      id: "boe-1",
      decNo: "000-00000000-00",
      portType: "LAND",
      decType: "TRANSIT",
      decTypeFull: "FZ Transit Between Dubai based FZ",
      decDate: "2026-01-01",
      grossWeight: 3583.00,
      importer: "AE-1000001 - SAMPLE AEROTECH FZE (F-0000)",
      exportedTo: "AE-1000002 - SAMPLE TRADING DWC-LLC",
      location: "LOC: JEBEL ALI",
      status: "Released",
      uploadDate: "2026-01-01 14:32",
      lines: [
        { id: "line-1-1", hsCode: "84091000", goods: "FILTER HEAT EXCHANGER", uom: "KG", grossWeight: 51.5, originalQty: 51.5, deductedQty: 0, origin: "US" },
        { id: "line-1-2", hsCode: "88073000", goods: "AIRCRAFT PARTS", uom: "KG", grossWeight: 22.3, originalQty: 22.3, deductedQty: 0, origin: "US" },
        { id: "line-1-3", hsCode: "88073000", goods: "FMGEC SPARE PARTS", uom: "KG", grossWeight: 19.0, originalQty: 19.0, deductedQty: 0, origin: "US" },
        { id: "line-1-4", hsCode: "85073000", goods: "CONNECTOR ADAPTOR SHUM", uom: "KG", grossWeight: 0.9, originalQty: 0.9, deductedQty: 0, origin: "DE" },
        { id: "line-1-5", hsCode: "83100080", goods: "AIRCRAFT SPARE PARTS", uom: "KG", grossWeight: 0.7, originalQty: 0.7, deductedQty: 0, origin: "FR" }
      ]
    },
    {
      id: "boe-2",
      decNo: "DWC-IMP-2026-03041",
      portType: "AIR",
      decType: "IMPORT",
      decTypeFull: "Direct Import for Consumption",
      decDate: "2026-01-04",
      grossWeight: 1420.50,
      importer: "AE-2000411 - DUBAI AERO LOGISTICS LLC",
      exportedTo: "AE-2000411 - WAREHOUSE BOND 4",
      location: "DWC Al Maktoum Airport",
      status: "Released",
      uploadDate: "2026-01-04 09:15",
      lines: [
        { id: "line-2-1", hsCode: "06033000", goods: "Other parts of aeroplanes or helicopters", uom: "PCS", grossWeight: 45.0, originalQty: 15, deductedQty: 6, origin: "GB" },
        { id: "line-2-2", hsCode: "84119900", goods: "Parts of gas turbine aircraft engines", uom: "KG", grossWeight: 500.0, originalQty: 500, deductedQty: 200, origin: "FR" },
        { id: "line-2-3", hsCode: "40113000", goods: "New pneumatic tyres of rubber for aircraft", uom: "PCS", grossWeight: 180.0, originalQty: 20, deductedQty: 8, origin: "US" }
      ]
    },
    {
      id: "boe-3",
      decNo: "DWC-IMP-2026-03775",
      portType: "AIR",
      decType: "IMPORT",
      decTypeFull: "Customs Free Zone Clearance",
      decDate: "2026-01-08",
      grossWeight: 890.00,
      importer: "AE-3001889 - GULF AVIATION SPARES FZCO",
      exportedTo: "AE-3001889 - DAFZA CARGO TERMINAL",
      location: "Dubai International Cargo Gate 3",
      status: "Released",
      uploadDate: "2026-01-08 11:40",
      lines: [
        { id: "line-3-1", hsCode: "06033000", goods: "Other parts of aeroplanes or helicopters", uom: "PCS", grossWeight: 38.0, originalQty: 12, deductedQty: 4, origin: "DE" },
        { id: "line-3-2", hsCode: "40113000", goods: "New pneumatic tyres for aircraft gear", uom: "PCS", grossWeight: 95.0, originalQty: 16, deductedQty: 4, origin: "JP" },
        { id: "line-3-3", hsCode: "85044090", goods: "Static converters for aircraft avionics", uom: "PCS", grossWeight: 62.0, originalQty: 25, deductedQty: 0, origin: "US" }
      ]
    },
    {
      id: "boe-4",
      decNo: "JN-25-IMP-2026-00512",
      portType: "SEA",
      decType: "IMPORT",
      decTypeFull: "Port Customs Clearance",
      decDate: "2026-01-12",
      grossWeight: 12500.00,
      importer: "AE-4009210 - MIDDLE EAST TURBINE SERVICES",
      exportedTo: "AE-4009210 - JEBEL ALI FREE ZONE",
      location: "Jebel Ali Port Terminal 2",
      status: "Released",
      uploadDate: "2026-01-12 16:20",
      lines: [
        { id: "line-4-1", hsCode: "84119900", goods: "Parts of gas turbine aircraft engines", uom: "KG", grossWeight: 1800.0, originalQty: 1800, deductedQty: 850, origin: "US" },
        { id: "line-4-2", hsCode: "84821000", goods: "Precision ball bearings for jet engines", uom: "PCS", grossWeight: 110.0, originalQty: 40, deductedQty: 15, origin: "SE" },
        { id: "line-4-3", hsCode: "73181500", goods: "High tensile aircraft threaded bolts", uom: "KG", grossWeight: 450.0, originalQty: 450, deductedQty: 0, origin: "IT" }
      ]
    },
    {
      id: "boe-5",
      decNo: "306-00004888-24",
      portType: "LAND",
      decType: "TRANSIT",
      decTypeFull: "Inter-Emirate Customs Transit",
      decDate: "2026-01-15",
      grossWeight: 215.00,
      importer: "AE-5002133 - AERO ENGINEERING SOLUTIONS",
      exportedTo: "AE-1000002 - SAMPLE TRADING DWC-LLC",
      location: "LOC: JEBEL ALI",
      status: "Under Review",
      uploadDate: "2026-01-15 10:05",
      lines: [
        { id: "line-5-1", hsCode: "88073000", goods: "Aircraft hydraulic actuator seal assemblies", uom: "KG", grossWeight: 0.5, originalQty: 0.5, deductedQty: 0, origin: "US" },
        { id: "line-5-2", hsCode: "80142000", goods: "Specialized aircraft instrument panels", uom: "PCS", grossWeight: 1.0, originalQty: 1, deductedQty: 0, origin: "FR" }
      ]
    },
    {
      id: "boe-6",
      decNo: "306-00004888-25",
      portType: "LAND",
      decType: "TRANSIT",
      decTypeFull: "Inter-Emirate Customs Transit",
      decDate: "2026-01-18",
      grossWeight: 310.00,
      importer: "AE-5002133 - AERO ENGINEERING SOLUTIONS",
      exportedTo: "AE-1000002 - SAMPLE TRADING DWC-LLC",
      location: "LOC: JEBEL ALI",
      status: "Under Review",
      uploadDate: "2026-01-18 13:22",
      lines: [
        { id: "line-6-1", hsCode: "83100080", goods: "Aircraft cockpit warning sign plates", uom: "KG", grossWeight: 0.7, originalQty: 0.7, deductedQty: 0, origin: "FR" },
        { id: "line-6-2", hsCode: "84149000", goods: "Fan blades for cooling modules", uom: "KG", grossWeight: 120.0, originalQty: 120, deductedQty: 0, origin: "DE" }
      ]
    },
    {
      id: "boe-7",
      decNo: "306-00004888-26",
      portType: "LAND",
      decType: "TRANSIT",
      decTypeFull: "Inter-Emirate Customs Transit",
      decDate: "2026-01-20",
      grossWeight: 450.00,
      importer: "AE-5002133 - AERO ENGINEERING SOLUTIONS",
      exportedTo: "AE-1000002 - SAMPLE TRADING DWC-LLC",
      location: "LOC: JEBEL ALI",
      status: "Under Review",
      uploadDate: "2026-01-20 17:00",
      lines: [
        { id: "line-7-1", hsCode: "39269099", goods: "Moulded rubber cabin seals", uom: "KG", grossWeight: 0.8, originalQty: 0.8, deductedQty: 0, origin: "US" },
        { id: "line-7-2", hsCode: "84091000", goods: "Aircraft fuel line heat exchanger core", uom: "KG", grossWeight: 84.0, originalQty: 84, deductedQty: 0, origin: "US" },
        { id: "line-7-3", hsCode: "84713000", goods: "Ruggedized cockpit pilot tablets", uom: "PCS", grossWeight: 15.0, originalQty: 8, deductedQty: 0, origin: "TW" }
      ]
    }
  ],

  // Outgoing Processed Movements (Deductions pointing to source BOE)
  outgoingMovements: [
    {
      id: "out-1",
      dispatchRef: "OUT-DWC-2026-001",
      sourceBoe: "DWC-IMP-2026-03041",
      lineId: "line-2-1",
      hsCode: "06033000",
      goods: "Other parts of aeroplanes or helicopters",
      destination: "Emirates Engineering Hangar 4, DXB",
      deductedQty: 6,
      uom: "PCS",
      date: "2026-01-06",
      status: "Cleared",
      notes: "Clearance for urgent maintenance work order AOG-772"
    },
    {
      id: "out-2",
      dispatchRef: "OUT-DWC-2026-002",
      sourceBoe: "DWC-IMP-2026-03041",
      lineId: "line-2-2",
      hsCode: "84119900",
      goods: "Parts of gas turbine aircraft engines",
      destination: "GE Aviation Middle East Service Center",
      deductedQty: 200,
      uom: "KG",
      date: "2026-01-07",
      status: "Cleared",
      notes: "Dispatched under Customs Outward Gate Pass #GP-88102"
    },
    {
      id: "out-3",
      dispatchRef: "OUT-DWC-2026-003",
      sourceBoe: "DWC-IMP-2026-03775",
      lineId: "line-3-1",
      hsCode: "06033000",
      goods: "Other parts of aeroplanes or helicopters",
      destination: "FlyDubai Heavy Maintenance Bay",
      deductedQty: 4,
      uom: "PCS",
      date: "2026-01-10",
      status: "Cleared",
      notes: "Aircraft flap actuator link delivery"
    },
    {
      id: "out-4",
      dispatchRef: "OUT-JN-2026-004",
      sourceBoe: "JN-25-IMP-2026-00512",
      lineId: "line-4-1",
      hsCode: "84119900",
      goods: "Parts of gas turbine aircraft engines",
      destination: "Rolls-Royce Marine & Aero Middle East",
      deductedQty: 850,
      uom: "KG",
      date: "2026-01-16",
      status: "Cleared",
      notes: "Free Zone Transfer declaration FZ-TR-9901"
    }
  ],

  // Admin & Access Activity Log
  auditLog: [
    {
      id: "log-1",
      timestamp: "2026-01-20 17:05:12",
      operator: "Logistics operator",
      action: "Incoming BOE Registered",
      targetRef: "306-00004888-26",
      details: "Registered 3 line items (84.8 KG & 8 PCS)",
      severity: "Normal"
    },
    {
      id: "log-2",
      timestamp: "2026-01-18 13:25:40",
      operator: "Logistics operator",
      action: "Incoming BOE Registered",
      targetRef: "306-00004888-25",
      details: "Registered 2 line items (120.7 KG)",
      severity: "Normal"
    },
    {
      id: "log-3",
      timestamp: "2026-01-16 11:30:19",
      operator: "Logistics operator",
      action: "Outgoing HS Stock Deducted",
      targetRef: "OUT-JN-2026-004",
      details: "Deducted 850 KG of HS 84119900 from JN-25-IMP-2026-00512",
      severity: "Normal"
    },
    {
      id: "log-4",
      timestamp: "2026-01-15 10:10:02",
      operator: "Logistics operator",
      action: "Incoming BOE Registered",
      targetRef: "306-00004888-24",
      details: "Registered 2 line items (0.5 KG & 1 PCS)",
      severity: "Normal"
    },
    {
      id: "log-5",
      timestamp: "2026-01-12 16:25:31",
      operator: "Logistics operator",
      action: "Incoming BOE Registered",
      targetRef: "JN-25-IMP-2026-00512",
      details: "Port clearance approved at Jebel Ali Terminal 2",
      severity: "Normal"
    },
    {
      id: "log-6",
      timestamp: "2026-01-10 14:12:00",
      operator: "Logistics operator",
      action: "Outgoing HS Stock Deducted",
      targetRef: "OUT-DWC-2026-003",
      details: "Deducted 4 PCS of HS 06033000 from DWC-IMP-2026-03775",
      severity: "Normal"
    },
    {
      id: "log-7",
      timestamp: "2026-01-08 11:45:00",
      operator: "Logistics operator",
      action: "Incoming BOE Registered",
      targetRef: "DWC-IMP-2026-03775",
      details: "DAFZA Cargo Entry registered",
      severity: "Normal"
    },
    {
      id: "log-8",
      timestamp: "2026-01-07 15:40:22",
      operator: "Logistics operator",
      action: "Outgoing HS Stock Deducted",
      targetRef: "OUT-DWC-2026-002",
      details: "Deducted 200 KG of HS 84119900 from DWC-IMP-2026-03041",
      severity: "Normal"
    },
    {
      id: "log-9",
      timestamp: "2026-01-06 09:20:11",
      operator: "Logistics operator",
      action: "Outgoing HS Stock Deducted",
      targetRef: "OUT-DWC-2026-001",
      details: "Deducted 6 PCS of HS 06033000 from DWC-IMP-2026-03041",
      severity: "Normal"
    },
    {
      id: "log-10",
      timestamp: "2026-01-04 09:22:45",
      operator: "Logistics operator",
      action: "Incoming BOE Registered",
      targetRef: "DWC-IMP-2026-03041",
      details: "DWC Al Maktoum Cargo Manifest logged",
      severity: "Normal"
    },
    {
      id: "log-11",
      timestamp: "2026-01-01 14:40:00",
      operator: "Logistics operator",
      action: "Declaration PDF Uploaded & Parsed",
      targetRef: "000-00000000-00",
      details: "Dubai Customs FZ Transit form parsed: 5 items registered",
      severity: "Normal"
    }
  ]
};

// ==========================================================================
// Application Core Class
// ==========================================================================
class DubaiCustomsApp {
  constructor() {
    this.storageKey = "dubai_customs_inventory_live_v2";
    this.currentView = "dashboard";
    this.data = null;

    this.init();
  }

  init() {
    this.loadState();
    this.bindDOM();
    this.render();
  }

  loadState() {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored) {
        this.data = JSON.parse(stored);
      } else {
        this.resetToDefault();
      }
    } catch (e) {
      console.error("Failed to load customs state:", e);
      this.resetToDefault();
    }
  }

  saveState() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.data));
    } catch (e) {
      console.error("Failed to save state:", e);
    }
  }

  resetToDefault() {
    this.data = JSON.parse(JSON.stringify(DEFAULT_CUSTOMS_DATA));
    this.saveState();
  }

  // ==========================================================================
  // DOM Binding & Navigation
  // ==========================================================================
  bindDOM() {
    // Navigation items
    document.querySelectorAll(".nav-item").forEach(btn => {
      btn.addEventListener("click", () => {
        const view = btn.getAttribute("data-view");
        this.switchView(view);
      });
    });

    // Header buttons
    document.getElementById("btn-demo-data")?.addEventListener("click", () => {
      if (confirm("Reload authentic Dubai Customs dataset? Any custom additions will reset.")) {
        this.resetToDefault();
        this.render();
        this.showToast("Dubai Customs sample database reloaded", "success");
      }
    });

    // Quick navigation links
    document.getElementById("link-view-stock")?.addEventListener("click", () => this.switchView("inventory"));
    document.getElementById("link-all-inventory")?.addEventListener("click", () => this.switchView("inventory"));
    document.getElementById("link-open-register")?.addEventListener("click", () => this.switchView("incoming"));

    // Modal: New Record
    document.getElementById("btn-open-new-record")?.addEventListener("click", () => this.openNewRecordModal());
    document.getElementById("btn-incoming-new-manual")?.addEventListener("click", () => this.openNewRecordModal());
    document.getElementById("btn-inventory-add-line")?.addEventListener("click", () => this.openNewRecordModal());
    document.getElementById("btn-close-modal")?.addEventListener("click", () => this.closeNewRecordModal());
    document.getElementById("btn-cancel-modal")?.addEventListener("click", () => this.closeNewRecordModal());
    document.getElementById("new-record-form")?.addEventListener("submit", (e) => this.handleSaveNewRecord(e));
    document.getElementById("btn-add-form-item-line")?.addEventListener("click", () => this.addNewItemRow());

    // Modal: Process Outgoing Deduction
    document.getElementById("btn-process-outgoing-open")?.addEventListener("click", () => this.openOutgoingModal());
    document.getElementById("btn-close-outgoing-modal")?.addEventListener("click", () => this.closeOutgoingModal());
    document.getElementById("btn-cancel-outgoing-modal")?.addEventListener("click", () => this.closeOutgoingModal());
    document.getElementById("outgoing-deduct-form")?.addEventListener("submit", (e) => this.handleProcessOutgoing(e));
    document.getElementById("out-source-select")?.addEventListener("change", (e) => this.updateSelectedBalanceCard(e.target.value));

    // Modal: View Declaration Details
    document.getElementById("btn-close-view-boe-modal")?.addEventListener("click", () => this.closeViewBoeModal());
    document.getElementById("btn-close-view-boe-footer")?.addEventListener("click", () => this.closeViewBoeModal());

    // PDF Upload triggers
    const fileInput = document.getElementById("declaration-file-input");
    const dropzone = document.getElementById("pdf-dropzone");
    const uploadBtn = document.getElementById("btn-incoming-upload-pdf");
    const samplePdfBtn = document.getElementById("btn-load-sample-pdf");

    uploadBtn?.addEventListener("click", () => fileInput?.click());
    dropzone?.addEventListener("click", (e) => {
      if (e.target !== samplePdfBtn && !samplePdfBtn?.contains(e.target)) {
        fileInput?.click();
      }
    });

    samplePdfBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      this.simulateDubaiPdfExtraction();
    });

    fileInput?.addEventListener("change", (e) => {
      if (e.target.files.length > 0) {
        this.simulateDubaiPdfExtraction(e.target.files[0].name);
      }
    });

    // Drag and drop onto dropzone
    dropzone?.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropzone.style.borderColor = "#2563eb";
      dropzone.style.background = "#e0f2fe";
    });
    dropzone?.addEventListener("dragleave", () => {
      dropzone.style.borderColor = "#93c5fd";
      dropzone.style.background = "#f0f7ff";
    });
    dropzone?.addEventListener("drop", (e) => {
      e.preventDefault();
      dropzone.style.borderColor = "#93c5fd";
      dropzone.style.background = "#f0f7ff";
      if (e.dataTransfer.files.length > 0) {
        this.simulateDubaiPdfExtraction(e.dataTransfer.files[0].name);
      }
    });

    // Outgoing PDF Upload triggers
    const outFileInput = document.getElementById("outgoing-file-input");
    const outDropzone = document.getElementById("outgoing-dropzone");
    const outUploadBtn = document.getElementById("btn-outgoing-upload-pdf");
    const outSamplePdfBtn = document.getElementById("btn-load-sample-outgoing-pdf");

    outUploadBtn?.addEventListener("click", () => outFileInput?.click());
    outDropzone?.addEventListener("click", (e) => {
      if (e.target !== outSamplePdfBtn && !outSamplePdfBtn?.contains(e.target)) {
        outFileInput?.click();
      }
    });

    outSamplePdfBtn?.addEventListener("click", (e) => {
      e.stopPropagation();
      this.simulateOutgoingPdfDeduction();
    });

    outFileInput?.addEventListener("change", (e) => {
      if (e.target.files.length > 0) {
        this.simulateOutgoingPdfDeduction(e.target.files[0].name);
      }
    });

    outDropzone?.addEventListener("dragover", (e) => {
      e.preventDefault();
      outDropzone.style.borderColor = "#2563eb";
      outDropzone.style.background = "#e0f2fe";
    });
    outDropzone?.addEventListener("dragleave", () => {
      outDropzone.style.borderColor = "#93c5fd";
      outDropzone.style.background = "#f0f7ff";
    });
    outDropzone?.addEventListener("drop", (e) => {
      e.preventDefault();
      outDropzone.style.borderColor = "#93c5fd";
      outDropzone.style.background = "#f0f7ff";
      if (e.dataTransfer.files.length > 0) {
        this.simulateOutgoingPdfDeduction(e.dataTransfer.files[0].name);
      }
    });

    // Table search inputs
    document.getElementById("search-incoming-input")?.addEventListener("input", (e) => this.renderIncomingTable(e.target.value));
    document.getElementById("search-outgoing-input")?.addEventListener("input", (e) => this.renderOutgoingTable(e.target.value));
    document.getElementById("search-inventory-input")?.addEventListener("input", () => this.renderInventoryFullTable());
    document.getElementById("uom-filter")?.addEventListener("change", () => this.renderInventoryFullTable());
    document.getElementById("stock-status-filter")?.addEventListener("change", () => this.renderInventoryFullTable());

    // Export CSV
    document.getElementById("btn-export-inventory-csv")?.addEventListener("click", () => this.exportInventoryCSV());

    // Clear Audit
    document.getElementById("btn-clear-audit")?.addEventListener("click", () => {
      if (confirm("Clear all recorded admin access audit entries?")) {
        this.data.auditLog = [];
        this.saveState();
        this.renderAdminTable();
        this.showToast("Audit trail cleared", "info");
      }
    });

    // ESC key closes modals
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeNewRecordModal();
        this.closeOutgoingModal();
        this.closeViewBoeModal();
      }
    });
  }

  switchView(viewName) {
    this.currentView = viewName;

    // Update active nav item
    document.querySelectorAll(".nav-item").forEach(item => {
      item.classList.toggle("active", item.getAttribute("data-view") === viewName);
    });

    // Toggle pages
    const views = ["dashboard", "incoming", "outgoing", "inventory", "admin"];
    views.forEach(v => {
      const el = document.getElementById(`view-${v}`);
      if (el) el.style.display = v === viewName ? "flex" : "none";
    });

    // Update Breadcrumb
    const labels = {
      dashboard: "Dashboard",
      incoming: "Incoming BOE Register",
      outgoing: "Outgoing HS Summary",
      inventory: "Customs Stock Inventory",
      admin: "Admin & Access log"
    };
    const breadcrumb = document.getElementById("current-breadcrumb");
    if (breadcrumb) breadcrumb.textContent = labels[viewName] || "Dashboard";

    // Re-render specific view
    if (viewName === "dashboard") this.renderDashboard();
    if (viewName === "incoming") this.renderIncomingTable();
    if (viewName === "outgoing") this.renderOutgoingTable();
    if (viewName === "inventory") this.renderInventoryFullTable();
    if (viewName === "admin") this.renderAdminTable();
  }

  // ==========================================================================
  // Render Engine & Data Calculators
  // ==========================================================================
  render() {
    this.updateRecordCount();
    this.renderDashboard();
    this.renderIncomingTable();
    this.renderOutgoingTable();
    this.renderInventoryFullTable();
    this.renderAdminTable();
  }

  updateRecordCount() {
    // Total records = incoming boes + outgoing movements + line items
    let totalLines = 0;
    this.data.incomingDeclarations.forEach(d => totalLines += (d.lines ? d.lines.length : 0));
    const totalRecords = this.data.incomingDeclarations.length + this.data.outgoingMovements.length + totalLines;

    const countBadge = document.getElementById("header-records-count");
    if (countBadge) countBadge.textContent = totalRecords;
  }

  getAllInventoryLines() {
    const list = [];
    this.data.incomingDeclarations.forEach(dec => {
      if (dec.lines) {
        dec.lines.forEach(line => {
          const remaining = Math.max(0, line.originalQty - (line.deductedQty || 0));
          list.push({
            ...line,
            sourceBoe: dec.decNo,
            portType: dec.portType,
            decType: dec.decType,
            importer: dec.importer,
            location: dec.location,
            remainingQty: remaining,
            isDepleted: remaining <= 0,
            isLowStock: remaining > 0 && (remaining <= line.originalQty * 0.2 || remaining <= 2)
          });
        });
      }
    });
    return list;
  }

  renderDashboard() {
    const allLines = this.getAllInventoryLines();

    // 1. Calculate KPI Metrics
    const incomingDeclsCount = this.data.incomingDeclarations.length;
    const outgoingDeclsCount = this.data.outgoingMovements.length;
    const incomingLinesCount = allLines.length;
    const outgoingLinesCount = this.data.outgoingMovements.length;
    const pendingReviewCount = this.data.incomingDeclarations.filter(d => d.status === "Under Review").length;
    const completedDocsCount = this.data.incomingDeclarations.filter(d => d.status === "Released").length;

    document.getElementById("kpi-inc-decl").textContent = incomingDeclsCount;
    document.getElementById("kpi-out-decl").textContent = outgoingDeclsCount;
    document.getElementById("kpi-inc-lines").textContent = incomingLinesCount;
    document.getElementById("kpi-out-lines").textContent = outgoingLinesCount;
    document.getElementById("kpi-pending-rev").textContent = pendingReviewCount;
    document.getElementById("kpi-completed-docs").textContent = completedDocsCount;

    // 2. Declaration Activity Bar Chart
    this.renderActivityChart();

    // 3. Stock By Unit
    let totalPcs = 0;
    let pcsSourceCount = 0;
    let totalKg = 0;
    let kgSourceCount = 0;

    allLines.forEach(line => {
      if (line.uom === "PCS") {
        totalPcs += line.remainingQty;
        if (line.remainingQty > 0) pcsSourceCount++;
      } else if (line.uom === "KG") {
        totalKg += line.remainingQty;
        if (line.remainingQty > 0) kgSourceCount++;
      }
    });

    document.getElementById("uom-pcs-total").textContent = `${totalPcs.toLocaleString()} PCS`;
    document.getElementById("uom-pcs-sub").textContent = `${pcsSourceCount} source BOE balances`;
    document.getElementById("uom-pcs-fill").style.width = `${Math.min(100, Math.round((totalPcs / 300) * 100))}%`;

    document.getElementById("uom-kg-total").textContent = `${totalKg.toLocaleString("en-US", { maximumFractionDigits: 1 })} KG`;
    document.getElementById("uom-kg-sub").textContent = `${kgSourceCount} source BOE balances`;
    document.getElementById("uom-kg-fill").style.width = `${Math.min(100, Math.round((totalKg / 6000) * 100))}%`;

    // 4. Current Customs Inventory Table (Top 5 Active)
    const dashTbody = document.getElementById("dash-inventory-tbody");
    if (dashTbody) {
      dashTbody.innerHTML = "";
      const displayLines = allLines.slice(0, 5);
      displayLines.forEach(item => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>
            <span class="cell-primary-bold font-mono">${this.escapeHtml(item.hsCode)}</span>
            <span class="cell-secondary-sub">${this.escapeHtml(item.goods)}</span>
          </td>
          <td>
            <span class="font-mono" style="font-weight: 600;">${this.escapeHtml(item.sourceBoe)}</span>
          </td>
          <td>
            <span style="font-weight: 700; color: #475569;">${item.uom}</span>
          </td>
          <td>
            <span class="font-mono cell-primary-bold">${item.remainingQty} ${item.uom}</span>
          </td>
          <td>
            <span class="status-pill ${item.remainingQty > 0 ? "status-available" : "status-depleted"}">
              ${item.remainingQty > 0 ? "Available" : "Depleted"}
            </span>
          </td>
        `;
        dashTbody.appendChild(tr);
      });

      document.getElementById("dash-table-meta").innerHTML =
        `Showing 5 of ${allLines.length} source-linked balances &bull; Live database records`;
    }

    // 5. Inventory Alerts (Low stock exceptions)
    const alertsContainer = document.getElementById("alerts-list-container");
    if (alertsContainer) {
      alertsContainer.innerHTML = "";
      const lowStockAlerts = allLines.filter(i => i.isLowStock || (i.remainingQty <= 2 && i.remainingQty > 0));

      const alertCountBadge = document.getElementById("alerts-badge-count");
      if (alertCountBadge) alertCountBadge.textContent = lowStockAlerts.length;

      if (lowStockAlerts.length === 0) {
        alertsContainer.innerHTML = `<div style="font-size: 0.78rem; color: #64748b; padding: 1rem 0;">No current exceptions or depleted items.</div>`;
      } else {
        lowStockAlerts.slice(0, 5).forEach(alert => {
          const div = document.createElement("div");
          div.className = "alert-item";
          div.innerHTML = `
            <span class="alert-icon">⚠️</span>
            <span class="alert-text">
              <strong>Low stock:</strong> ${this.escapeHtml(alert.hsCode)} - ${this.escapeHtml(alert.sourceBoe)} /
              <span class="font-mono">${alert.remainingQty} ${alert.uom}</span> remaining of ${alert.originalQty} ${alert.uom} original
            </span>
          `;
          alertsContainer.appendChild(div);
        });
      }
    }

    // 6. Recently Uploaded Documents
    const recentTbody = document.getElementById("recent-docs-tbody");
    if (recentTbody) {
      recentTbody.innerHTML = "";
      this.data.incomingDeclarations.slice(0, 5).forEach(doc => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>
            <span class="cell-primary-bold font-mono">${this.escapeHtml(doc.decNo)}</span>
            <span class="cell-secondary-sub">${this.escapeHtml(doc.importer)}</span>
          </td>
          <td>
            <span style="font-weight: 600;">${this.escapeHtml(doc.portType)} &bull; ${this.escapeHtml(doc.decType)}</span>
          </td>
          <td>
            <span style="font-weight: 700;">${doc.lines ? doc.lines.length : 0} lines</span>
          </td>
          <td>
            <span style="color: #64748b;">${doc.uploadDate || doc.decDate}</span>
          </td>
          <td>
            <span class="status-pill ${doc.status === "Released" ? "status-available" : "status-low"}">${doc.status}</span>
          </td>
          <td>
            <button class="link-btn btn-view-doc" data-id="${doc.id}">View Details</button>
          </td>
        `;
        tr.querySelector(".btn-view-doc").addEventListener("click", () => this.openViewBoeModal(doc));
        recentTbody.appendChild(tr);
      });
    }
  }

  renderActivityChart() {
    const container = document.getElementById("bar-chart-container");
    if (!container) return;

    // Monthly declaration activity representation
    const months = [
      { month: "May", incoming: 0, outgoing: 0 },
      { month: "Jun", incoming: 4, outgoing: 2 },
      { month: "Jul", incoming: 2, outgoing: 1 },
      { month: "Aug", incoming: 35, outgoing: 5 },
      { month: "Sep", incoming: 50, outgoing: 70 },
      { month: "Oct", incoming: 120, outgoing: 90 }
    ];

    container.innerHTML = "";
    months.forEach(m => {
      const group = document.createElement("div");
      group.className = "chart-bar-group";

      const hIn = Math.min(130, Math.max(m.incoming > 0 ? 8 : 2, Math.round((m.incoming / 120) * 125)));
      const hOut = Math.min(130, Math.max(m.outgoing > 0 ? 8 : 2, Math.round((m.outgoing / 120) * 125)));

      group.innerHTML = `
        <div class="bar-pair">
          <div class="chart-bar bar-incoming" style="height: ${hIn}px;" title="${m.month} Incoming: ${m.incoming}"></div>
          <div class="chart-bar bar-outgoing" style="height: ${hOut}px;" title="${m.month} Outgoing: ${m.outgoing}"></div>
        </div>
        <span class="chart-month-label">${m.month}</span>
      `;
      container.appendChild(group);
    });
  }

  // ==========================================================================
  // VIEW 2: Incoming BOE Register
  // ==========================================================================
  renderIncomingTable(filterQuery = "") {
    const tbody = document.getElementById("incoming-table-tbody");
    if (!tbody) return;
    tbody.innerHTML = "";

    const query = filterQuery.toLowerCase().trim();
    const filtered = this.data.incomingDeclarations.filter(d => {
      if (!query) return true;
      return d.decNo.toLowerCase().includes(query) ||
             d.importer.toLowerCase().includes(query) ||
             (d.location && d.location.toLowerCase().includes(query));
    });

    document.getElementById("incoming-count").textContent = filtered.length;

    filtered.forEach(doc => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>
          <span class="cell-primary-bold font-mono">${this.escapeHtml(doc.decNo)}</span>
          <span class="cell-secondary-sub">${this.escapeHtml(doc.location || "LOC: JEBEL ALI")}</span>
        </td>
        <td>
          <span style="font-weight: 700; color: #1e293b;">${this.escapeHtml(doc.portType)}</span>
          <span class="cell-secondary-sub">${this.escapeHtml(doc.decType)}</span>
        </td>
        <td>
          <span style="font-weight: 600; color: #0f172a;">${this.escapeHtml(doc.importer)}</span>
        </td>
        <td>
          <span style="color: #475569;">${doc.decDate}</span>
        </td>
        <td>
          <span style="font-weight: 700;">${doc.lines ? doc.lines.length : 0} items</span>
        </td>
        <td>
          <span class="font-mono" style="font-weight: 600;">${doc.grossWeight.toLocaleString()} kg</span>
        </td>
        <td>
          <span class="status-pill ${doc.status === "Released" ? "status-available" : "status-low"}">${doc.status}</span>
        </td>
        <td>
          <button class="btn-sm btn-secondary-white btn-view-boe" data-id="${doc.id}">View Lines</button>
        </td>
      `;
      tr.querySelector(".btn-view-boe").addEventListener("click", () => this.openViewBoeModal(doc));
      tbody.appendChild(tr);
    });
  }

  // ==========================================================================
  // VIEW 3: Outgoing HS Summary
  // ==========================================================================
  renderOutgoingTable(filterQuery = "") {
    const tbody = document.getElementById("outgoing-table-tbody");
    if (!tbody) return;
    tbody.innerHTML = "";

    const query = filterQuery.toLowerCase().trim();
    const filtered = this.data.outgoingMovements.filter(m => {
      if (!query) return true;
      return m.dispatchRef.toLowerCase().includes(query) ||
             m.sourceBoe.toLowerCase().includes(query) ||
             m.hsCode.toLowerCase().includes(query) ||
             m.destination.toLowerCase().includes(query);
    });

    document.getElementById("outgoing-count").textContent = filtered.length;

    filtered.forEach(m => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>
          <span class="cell-primary-bold font-mono">${this.escapeHtml(m.dispatchRef)}</span>
          <span class="cell-secondary-sub">${this.escapeHtml(m.notes || "")}</span>
        </td>
        <td>
          <span class="font-mono" style="font-weight: 700; color: #2563eb;">${this.escapeHtml(m.sourceBoe)}</span>
        </td>
        <td>
          <span class="cell-primary-bold font-mono">${this.escapeHtml(m.hsCode)}</span>
          <span class="cell-secondary-sub">${this.escapeHtml(m.goods)}</span>
        </td>
        <td>
          <span style="font-weight: 600;">${this.escapeHtml(m.destination)}</span>
        </td>
        <td>
          <span class="font-mono" style="font-weight: 800; color: #dc2626;">-${m.deductedQty}</span>
        </td>
        <td>
          <span style="font-weight: 700; color: #475569;">${m.uom}</span>
        </td>
        <td>
          <span style="color: #64748b;">${m.date}</span>
        </td>
        <td>
          <span class="status-pill status-completed">${m.status}</span>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }

  // ==========================================================================
  // VIEW 4: Customs Stock Inventory
  // ==========================================================================
  renderInventoryFullTable() {
    const tbody = document.getElementById("inventory-full-tbody");
    if (!tbody) return;
    tbody.innerHTML = "";

    const searchInput = document.getElementById("search-inventory-input")?.value.toLowerCase().trim() || "";
    const uomFilter = document.getElementById("uom-filter")?.value || "all";
    const statusFilter = document.getElementById("stock-status-filter")?.value || "all";

    const allLines = this.getAllInventoryLines();

    const filtered = allLines.filter(line => {
      // Search
      if (searchInput) {
        const matchHs = line.hsCode.toLowerCase().includes(searchInput);
        const matchGoods = line.goods.toLowerCase().includes(searchInput);
        const matchBoe = line.sourceBoe.toLowerCase().includes(searchInput);
        if (!matchHs && !matchGoods && !matchBoe) return false;
      }
      // UOM
      if (uomFilter !== "all" && line.uom !== uomFilter) {
        return false;
      }
      // Status
      if (statusFilter === "Available" && (line.remainingQty <= 0 || line.isLowStock)) return false;
      if (statusFilter === "Low Stock" && !line.isLowStock) return false;
      if (statusFilter === "Depleted" && line.remainingQty > 0) return false;

      return true;
    });

    filtered.forEach(item => {
      const tr = document.createElement("tr");

      let statusPill = `<span class="status-pill status-available">Available</span>`;
      if (item.remainingQty <= 0) {
        statusPill = `<span class="status-pill status-depleted">Depleted</span>`;
      } else if (item.isLowStock) {
        statusPill = `<span class="status-pill status-low">Low Stock</span>`;
      }

      tr.innerHTML = `
        <td>
          <span class="cell-primary-bold font-mono">${this.escapeHtml(item.hsCode)}</span>
          <span class="cell-secondary-sub">${this.escapeHtml(item.goods)}</span>
        </td>
        <td>
          <span class="font-mono" style="font-weight: 700; color: #1e40af;">${this.escapeHtml(item.sourceBoe)}</span>
        </td>
        <td>
          <span style="font-size: 0.76rem; color: #475569;">${this.escapeHtml(item.location)}</span>
        </td>
        <td>
          <span style="font-weight: 800; color: #334155;">${item.uom}</span>
        </td>
        <td>
          <span class="font-mono">${item.originalQty}</span>
        </td>
        <td>
          <span class="font-mono" style="color: #dc2626;">-${item.deductedQty || 0}</span>
        </td>
        <td>
          <span class="font-mono" style="font-weight: 800; font-size: 0.95rem; color: #0f172a;">${item.remainingQty} ${item.uom}</span>
        </td>
        <td>
          ${statusPill}
        </td>
      `;

      tbody.appendChild(tr);
    });
  }

  exportInventoryCSV() {
    const allLines = this.getAllInventoryLines();
    let csv = "HS Code,Goods Description,Source BOE,UOM,Original Qty,Deducted Qty,Remaining Qty,Location,Port Type\n";

    allLines.forEach(item => {
      csv += `"${item.hsCode}","${item.goods.replace(/"/g, '""')}","${item.sourceBoe}","${item.uom}",${item.originalQty},${item.deductedQty || 0},${item.remainingQty},"${item.location}","${item.portType}"\n`;
    });

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `dubai_customs_inventory_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    this.showToast("Exported Customs Inventory to CSV", "success");
  }

  // ==========================================================================
  // VIEW 5: Admin & Access Log
  // ==========================================================================
  renderAdminTable() {
    const tbody = document.getElementById("audit-table-tbody");
    if (!tbody) return;
    tbody.innerHTML = "";

    if (this.data.auditLog.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding: 2rem; color: #94a3b8;">No logged security audit entries.</td></tr>`;
      return;
    }

    this.data.auditLog.forEach(log => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><span class="font-mono" style="color: #64748b;">${log.timestamp}</span></td>
        <td><span style="font-weight: 700;">${this.escapeHtml(log.operator)}</span></td>
        <td><span class="cell-primary-bold">${this.escapeHtml(log.action)}</span></td>
        <td><span class="font-mono" style="font-weight: 600; color: #2563eb;">${this.escapeHtml(log.targetRef)}</span></td>
        <td><span style="color: #475569;">${this.escapeHtml(log.details)}</span></td>
        <td><span class="status-pill status-completed">${log.severity}</span></td>
      `;
      tbody.appendChild(tr);
    });
  }

  // ==========================================================================
  // MODAL: + New Record (Incoming BOE Registration)
  // ==========================================================================
  openNewRecordModal() {
    const modal = document.getElementById("new-record-modal");
    document.getElementById("new-record-form").reset();

    // Default today's date
    document.getElementById("input-dec-date").value = new Date().toISOString().slice(0, 10);
    document.getElementById("input-location").value = "LOC: JEBEL ALI";

    // Reset items table to 1 row
    const tbody = document.getElementById("modal-items-tbody");
    tbody.innerHTML = `
      <tr class="item-input-row">
        <td class="row-num">1</td>
        <td><input type="text" class="item-hs font-mono" required placeholder="84091000"></td>
        <td><input type="text" class="item-goods" required placeholder="FILTER HEAT EXCHANGER"></td>
        <td>
          <select class="item-uom">
            <option value="KG">KG</option>
            <option value="PCS">PCS</option>
          </select>
        </td>
        <td><input type="number" step="any" class="item-gross" placeholder="51.5"></td>
        <td><input type="number" step="any" min="0.01" class="item-qty" required placeholder="51.5"></td>
        <td><button type="button" class="btn-remove-row" title="Remove">&times;</button></td>
      </tr>
    `;
    this.bindRowRemovers();

    modal.style.display = "flex";
  }

  closeNewRecordModal() {
    document.getElementById("new-record-modal").style.display = "none";
  }

  addNewItemRow(prefill = null) {
    const tbody = document.getElementById("modal-items-tbody");
    const count = tbody.querySelectorAll(".item-input-row").length + 1;
    const tr = document.createElement("tr");
    tr.className = "item-input-row";

    const hs = prefill ? prefill.hsCode : "";
    const goods = prefill ? prefill.goods : "";
    const uom = prefill ? prefill.uom : "KG";
    const gross = prefill ? prefill.grossWeight : "";
    const qty = prefill ? prefill.originalQty : "";

    tr.innerHTML = `
      <td class="row-num">${count}</td>
      <td><input type="text" class="item-hs font-mono" required placeholder="HS Code" value="${hs}"></td>
      <td><input type="text" class="item-goods" required placeholder="Goods Description" value="${goods}"></td>
      <td>
        <select class="item-uom">
          <option value="KG" ${uom === "KG" ? "selected" : ""}>KG</option>
          <option value="PCS" ${uom === "PCS" ? "selected" : ""}>PCS</option>
        </select>
      </td>
      <td><input type="number" step="any" class="item-gross" placeholder="Gross (kg)" value="${gross}"></td>
      <td><input type="number" step="any" min="0.01" class="item-qty" required placeholder="Quantity" value="${qty}"></td>
      <td><button type="button" class="btn-remove-row" title="Remove">&times;</button></td>
    `;
    tbody.appendChild(tr);
    this.bindRowRemovers();
  }

  bindRowRemovers() {
    document.querySelectorAll(".btn-remove-row").forEach(btn => {
      btn.onclick = (e) => {
        const tbody = document.getElementById("modal-items-tbody");
        if (tbody.querySelectorAll(".item-input-row").length <= 1) {
          this.showToast("At least one product line is required.", "warning");
          return;
        }
        e.target.closest("tr").remove();
        // renumber
        tbody.querySelectorAll(".item-input-row").forEach((r, idx) => {
          r.querySelector(".row-num").textContent = idx + 1;
        });
      };
    });
  }

  handleSaveNewRecord(e) {
    e.preventDefault();

    const decNo = document.getElementById("input-dec-no").value.trim().toUpperCase();
    const portType = document.getElementById("input-port-type").value;
    const decType = document.getElementById("input-dec-type").value;
    const decDate = document.getElementById("input-dec-date").value;
    const grossWeight = parseFloat(document.getElementById("input-gross-weight").value) || 0;
    const location = document.getElementById("input-location").value.trim() || "LOC: JEBEL ALI";
    const importer = document.getElementById("input-importer").value.trim();
    const exportedTo = document.getElementById("input-exported-to").value.trim();

    // Check duplicate BOE No
    const exists = this.data.incomingDeclarations.find(d => d.decNo === decNo);
    if (exists) {
      this.showToast(`Declaration No. ${decNo} is already registered in the system.`, "error");
      return;
    }

    // Collect product rows
    const rows = document.querySelectorAll("#modal-items-tbody .item-input-row");
    const lines = [];

    rows.forEach((r, idx) => {
      const hsCode = r.querySelector(".item-hs").value.trim();
      const goods = r.querySelector(".item-goods").value.trim();
      const uom = r.querySelector(".item-uom").value;
      const gross = parseFloat(r.querySelector(".item-gross").value) || 0;
      const qty = parseFloat(r.querySelector(".item-qty").value) || 0;

      if (hsCode && goods && qty > 0) {
        lines.push({
          id: `line-${Date.now()}-${idx}`,
          hsCode,
          goods,
          uom,
          grossWeight: gross,
          originalQty: qty,
          deductedQty: 0,
          origin: "AE"
        });
      }
    });

    if (lines.length === 0) {
      this.showToast("Please enter at least one valid line item.", "warning");
      return;
    }

    const newBoe = {
      id: "boe-" + Date.now(),
      decNo,
      portType,
      decType,
      decTypeFull: `${portType} ${decType} Clearance`,
      decDate,
      grossWeight,
      importer,
      exportedTo,
      location,
      status: "Released",
      uploadDate: new Date().toISOString().replace("T", " ").slice(0, 16),
      lines
    };

    this.data.incomingDeclarations.unshift(newBoe);

    // Audit Entry
    this.addAuditLog(
      "Incoming BOE Registered",
      decNo,
      `Registered ${lines.length} items (${grossWeight.toLocaleString()} kg total gross)`
    );

    this.saveState();
    this.closeNewRecordModal();
    this.render();

    this.showToast(`Declaration ${decNo} registered with ${lines.length} items!`, "success");
  }

  // ==========================================================================
  // AI Extraction Simulator (Dubai Customs PDF)
  // ==========================================================================
  simulateDubaiPdfExtraction(fileName = "Dubai_Customs_Declaration.pdf") {
    this.showToast(`Parsing "${fileName}" via Dubai Customs OCR Engine...`, "info");

    setTimeout(() => {
      this.openNewRecordModal();

      // Pre-fill header data matching the exact attached PDF:
      document.getElementById("input-dec-no").value = "000-00000000-00";
      document.getElementById("input-port-type").value = "LAND";
      document.getElementById("input-dec-type").value = "TRANSIT";
      document.getElementById("input-dec-date").value = "2026-01-01";
      document.getElementById("input-gross-weight").value = "3583.00";
      document.getElementById("input-location").value = "LOC: JEBEL ALI";
      document.getElementById("input-importer").value = "AE-1000001 - SAMPLE AEROTECH FZE (F-0000)";
      document.getElementById("input-exported-to").value = "AE-1000002 - SAMPLE TRADING DWC-LLC";

      // Populate all 5 product lines extracted from the demo PDF:
      const tbody = document.getElementById("modal-items-tbody");
      tbody.innerHTML = "";

      const sampleLines = [
        { hsCode: "84091000", goods: "FILTER HEAT EXCHANGER", uom: "KG", grossWeight: 51.5, originalQty: 51.5 },
        { hsCode: "88073000", goods: "AIRCRAFT PARTS", uom: "KG", grossWeight: 22.3, originalQty: 22.3 },
        { hsCode: "88073000", goods: "FMGEC SPARE PARTS", uom: "KG", grossWeight: 19.0, originalQty: 19.0 },
        { hsCode: "85073000", goods: "CONNECTOR ADAPTOR SHUM", uom: "KG", grossWeight: 0.9, originalQty: 0.9 },
        { hsCode: "83100080", goods: "AIRCRAFT SPARE PARTS", uom: "KG", grossWeight: 0.7, originalQty: 0.7 }
      ];

      sampleLines.forEach(item => {
        this.addNewItemRow(item);
      });

      this.showToast(`Extracted 5 line items from UAE Dubai Customs Declaration form!`, "success");
    }, 400);
  }

  // ==========================================================================
  // AI Extraction Simulator (Outgoing Customs Declaration Form)
  // ==========================================================================
  simulateOutgoingPdfDeduction(fileName = "Outgoing_Declaration_Form.pdf") {
    this.showToast(`Parsing "${fileName}" for automated outgoing stock deduction...`, "info");

    setTimeout(() => {
      // Find source BOE line that has available balance
      const allLines = this.getAllInventoryLines();
      const availableLine = allLines.find(i => i.remainingQty >= 10 && i.sourceBoe === "000-00000000-00") || allLines.find(i => i.remainingQty > 0);

      if (!availableLine) {
        this.showToast("No available stock lines found in Source BOEs to deduct.", "warning");
        return;
      }

      const deductQty = Math.min(20, Math.floor(availableLine.remainingQty / 2) || 1);
      const dispatchRef = `OUT-EXP-2026-${Math.floor(100 + Math.random() * 900)}`;
      const destination = "Emirates Engineering Center, Dubai Airport";
      const movementDate = new Date().toISOString().slice(0, 10);

      // Pre-fill the outgoing modal with the parsed data from the uploaded form
      this.openOutgoingModal(availableLine);
      document.getElementById("out-dispatch-ref").value = dispatchRef;
      document.getElementById("out-destination").value = destination;
      document.getElementById("out-movement-date").value = movementDate;
      document.getElementById("out-quantity").value = deductQty;
      document.getElementById("out-notes").value = `Auto-extracted from ${fileName} (Source BOE: ${availableLine.sourceBoe})`;

      this.showToast(`Extracted Outgoing Clearance ${dispatchRef} for ${deductQty} ${availableLine.uom} of HS ${availableLine.hsCode}! Review and confirm deduction.`, "success");
    }, 450);
  }

  // ==========================================================================
  // MODAL: Process Outgoing Declaration (Stock Deduction)
  // ==========================================================================
  openOutgoingModal(preselectedItem = null) {
    const modal = document.getElementById("outgoing-deduct-modal");
    document.getElementById("outgoing-deduct-form").reset();

    // Default today
    document.getElementById("out-movement-date").value = new Date().toISOString().slice(0, 10);
    document.getElementById("out-dispatch-ref").value = `OUT-DWC-2026-${Math.floor(100 + Math.random() * 900)}`;

    // Populate source select with every available line item
    const select = document.getElementById("out-source-select");
    select.innerHTML = `<option value="">-- Choose available source inventory balance --</option>`;

    const allLines = this.getAllInventoryLines();
    const availableLines = allLines.filter(i => i.remainingQty > 0);

    if (availableLines.length === 0) {
      this.showToast("No stock available in any Source BOE to deduct.", "warning");
      return;
    }

    availableLines.forEach(item => {
      const opt = document.createElement("option");
      opt.value = `${item.sourceBoe}|${item.id}`;
      opt.textContent = `[BOE: ${item.sourceBoe}] HS: ${item.hsCode} — ${item.goods} (Avail: ${item.remainingQty} ${item.uom})`;
      if (preselectedItem && preselectedItem.id === item.id && preselectedItem.sourceBoe === item.sourceBoe) {
        opt.selected = true;
      }
      select.appendChild(opt);
    });

    if (preselectedItem) {
      this.updateSelectedBalanceCard(`${preselectedItem.sourceBoe}|${preselectedItem.id}`);
    } else {
      document.getElementById("selected-balance-box").style.display = "none";
    }

    modal.style.display = "flex";
  }

  closeOutgoingModal() {
    document.getElementById("outgoing-deduct-modal").style.display = "none";
  }

  updateSelectedBalanceCard(val) {
    const card = document.getElementById("selected-balance-box");
    if (!val) {
      card.style.display = "none";
      return;
    }

    const [sourceBoe, lineId] = val.split("|");
    const allLines = this.getAllInventoryLines();
    const line = allLines.find(i => i.sourceBoe === sourceBoe && i.id === lineId);

    if (line) {
      document.getElementById("disp-avail-qty").textContent = line.remainingQty;
      document.getElementById("disp-avail-uom").textContent = line.uom;
      document.getElementById("disp-source-meta").textContent =
        `HS Code: ${line.hsCode} • BOE: ${line.sourceBoe} • Port: ${line.location || "Jebel Ali"}`;
      card.style.display = "block";

      const qtyInput = document.getElementById("out-quantity");
      qtyInput.max = line.remainingQty;
      qtyInput.placeholder = `Max available: ${line.remainingQty}`;
    }
  }

  handleProcessOutgoing(e) {
    e.preventDefault();

    const dispatchRef = document.getElementById("out-dispatch-ref").value.trim().toUpperCase();
    const movementDate = document.getElementById("out-movement-date").value;
    const selectVal = document.getElementById("out-source-select").value;
    const deductQty = parseFloat(document.getElementById("out-quantity").value);
    const destination = document.getElementById("out-destination").value.trim();
    const notes = document.getElementById("out-notes").value.trim();

    if (!selectVal) {
      this.showToast("Please choose a source BOE line item.", "warning");
      return;
    }

    const [sourceBoeNo, lineId] = selectVal.split("|");
    const boe = this.data.incomingDeclarations.find(d => d.decNo === sourceBoeNo);
    if (!boe) {
      this.showToast("Source BOE declaration not found.", "error");
      return;
    }

    const line = boe.lines.find(l => l.id === lineId);
    if (!line) {
      this.showToast("Target HS code line not found in Source BOE.", "error");
      return;
    }

    const currentRemaining = Math.max(0, line.originalQty - (line.deductedQty || 0));

    if (deductQty <= 0) {
      this.showToast("Deduction quantity must be greater than zero.", "warning");
      return;
    }

    if (deductQty > currentRemaining) {
      this.showToast(`Cannot deduct ${deductQty} ${line.uom}. Only ${currentRemaining} ${line.uom} available in Source BOE ${sourceBoeNo}.`, "error");
      return;
    }

    // Deduct stock server-side
    line.deductedQty = (line.deductedQty || 0) + deductQty;
    const newRemaining = line.originalQty - line.deductedQty;

    // Create Outgoing Movement Record
    const movement = {
      id: "out-" + Date.now(),
      dispatchRef,
      sourceBoe: sourceBoeNo,
      lineId: line.id,
      hsCode: line.hsCode,
      goods: line.goods,
      destination,
      deductedQty: deductQty,
      uom: line.uom,
      date: movementDate,
      status: "Cleared",
      notes: notes || `Direct deduction against Source BOE ${sourceBoeNo}`
    };

    this.data.outgoingMovements.unshift(movement);

    // Add Audit Log
    this.addAuditLog(
      "Outgoing HS Stock Deducted",
      dispatchRef,
      `Deducted ${deductQty} ${line.uom} of HS ${line.hsCode} from BOE ${sourceBoeNo} (Remaining: ${newRemaining} ${line.uom})`
    );

    this.saveState();
    this.closeOutgoingModal();
    this.render();

    this.showToast(`Deducted ${deductQty} ${line.uom} from ${sourceBoeNo}. Balance: ${newRemaining} ${line.uom}`, "success");
  }

  // ==========================================================================
  // MODAL: View Declaration Details
  // ==========================================================================
  openViewBoeModal(doc) {
    const modal = document.getElementById("view-boe-modal");
    document.getElementById("view-boe-title").textContent = `Declaration: ${doc.decNo}`;
    document.getElementById("view-boe-subtitle").textContent = `${doc.portType} • ${doc.decTypeFull || doc.decType}`;

    const metaGrid = document.getElementById("view-boe-meta-grid");
    metaGrid.innerHTML = `
      <div class="meta-field">
        <span class="meta-field-label">Port Type</span>
        <span class="meta-field-value">${doc.portType}</span>
      </div>
      <div class="meta-field">
        <span class="meta-field-label">Declaration Date</span>
        <span class="meta-field-value">${doc.decDate}</span>
      </div>
      <div class="meta-field">
        <span class="meta-field-label">Gross Weight</span>
        <span class="meta-field-value font-mono">${doc.grossWeight.toLocaleString()} kg</span>
      </div>
      <div class="meta-field">
        <span class="meta-field-label">Clearance Status</span>
        <span class="meta-field-value">${doc.status}</span>
      </div>
      <div class="meta-field" style="grid-column: span 2;">
        <span class="meta-field-label">Importer / Exporter</span>
        <span class="meta-field-value">${this.escapeHtml(doc.importer)}</span>
      </div>
      <div class="meta-field" style="grid-column: span 2;">
        <span class="meta-field-label">Location</span>
        <span class="meta-field-value">${this.escapeHtml(doc.location || "LOC: JEBEL ALI")}</span>
      </div>
    `;

    const linesTbody = document.getElementById("view-boe-lines-tbody");
    linesTbody.innerHTML = "";

    if (doc.lines) {
      doc.lines.forEach((line, idx) => {
        const remaining = Math.max(0, line.originalQty - (line.deductedQty || 0));
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td><strong>${idx + 1}</strong></td>
          <td><span class="font-mono" style="font-weight: 700; color: #2563eb;">${line.hsCode}</span></td>
          <td><span style="font-weight: 600;">${this.escapeHtml(line.goods)}</span></td>
          <td><strong>${line.uom}</strong></td>
          <td><span class="font-mono">${line.grossWeight || "-"}</span></td>
          <td><span class="font-mono">${line.originalQty}</span></td>
          <td><span class="font-mono" style="font-weight: 800; color: ${remaining > 0 ? "#15803d" : "#64748b"};">${remaining} ${line.uom}</span></td>
          <td>
            <span class="status-pill ${remaining > 0 ? "status-available" : "status-depleted"}">
              ${remaining > 0 ? "In Stock" : "Depleted"}
            </span>
          </td>
        `;
        linesTbody.appendChild(tr);
      });
    }

    modal.style.display = "flex";
  }

  closeViewBoeModal() {
    document.getElementById("view-boe-modal").style.display = "none";
  }

  // ==========================================================================
  // Helper: Audit Logging
  // ==========================================================================
  addAuditLog(action, targetRef, details, severity = "Normal") {
    const entry = {
      id: "log-" + Date.now(),
      timestamp: new Date().toISOString().replace("T", " ").slice(0, 19),
      operator: "Logistics operator",
      action,
      targetRef,
      details,
      severity
    };
    this.data.auditLog.unshift(entry);
    if (this.data.auditLog.length > 50) this.data.auditLog.pop();
  }

  // ==========================================================================
  // Toast Notification System
  // ==========================================================================
  showToast(message, type = "info") {
    const toast = document.getElementById("toast");
    if (!toast) return;

    toast.className = `toast toast-${type} show`;
    let icon = "ℹ️";
    if (type === "success") icon = "✓";
    if (type === "warning") icon = "⚠️";
    if (type === "error") icon = "✕";

    toast.innerHTML = `<span style="font-size: 1.1rem;">${icon}</span> <span>${this.escapeHtml(message)}</span>`;

    setTimeout(() => {
      toast.className = "toast";
    }, 3500);
  }

  escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}

// Instantiate on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  window.customsApp = new DubaiCustomsApp();
});
