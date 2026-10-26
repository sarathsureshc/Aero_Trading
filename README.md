# Dubai Customs Control & Logistics Inventory Management Portal

A live, production-grade enterprise inventory management portal designed specifically for UAE and Dubai Customs compliance, modeled directly after the **Logistics Customs Control** interface.

---

## 🌟 Key Capabilities

### 1. Dubai Customs Declaration Ingestion (PDF & Form)
Reads, parses, and stores official UAE Customs Declarations with exact field mapping:
- **Port Type**: Land, Sea, Air (e.g. `LAND`, `AIR`, `SEA`)
- **Declaration Type**: Transit (`FZ Transit Between Dubai based FZ`), Import, Export, Warehouse Transfer
- **Declaration Date**: e.g. `01/01/2026`
- **Declaration / BOE Number**: e.g. `000-00000000-00`, `DWC-IMP-2026-03041`
- **Gross Weight**: In kilograms (e.g. `3,583 (kg)`)
- **Importer / Exporter**: e.g. `AE-1000001 - SAMPLE AEROTECH FZE (F-0000)`
- **Exported To / Consignee**: e.g. `AE-1000002 - SAMPLE TRADING DWC-LLC`
- **Location**: e.g. `LOC: JEBEL ALI`, `DWC Al Maktoum Airport`, `DAFZA Cargo Gate 3`
- **Line Items / Goods Specification**:
  - Item Number
  - HS Code (e.g. `84091000`, `88073000`, `85073000`, `83100080`, `06033000`, `40113000`, `84119900`)
  - Goods Description (e.g. `FILTER HEAT EXCHANGER`, `AIRCRAFT PARTS`, `FMGEC SPARE PARTS`)
  - Unit of Measurement (UOM: `KG`, `PCS`)
  - Gross Weight (kg)
  - Quantity

### 2. Source-Linked Stock Deduction (Outgoing Movements)
- **Strict Source BOE Linking**: Outgoing dispatches cannot be generic. Every outgoing clearance requires specifying the exact incoming **Source BOE** and **HS Code line item**.
- **No Cross-Unit Mixing**: Different units (`PCS` vs `KG`) are never combined. Balances are maintained strictly per UOM.
- **Overdraw Protection**: Real-time validation prevents deducting more than the remaining available balance in that specific Source BOE line.
- **Formula**: `Remaining Balance = Original Quantity - Deducted Outgoing Quantity`.
- **Live Re-calculation**: When an outgoing declaration is saved, the system automatically deducts stock, updates the live database counter, records the movement in the Outgoing HS Summary, adds an audit entry, and refreshes the KPI dashboard.

---

## 📋 Core Modules

1. **Dashboard (`Operations / Dashboard`)**:
   - 6 KPI Mini Cards: Incoming Declarations, Outgoing Declarations, Incoming Line Items, Outgoing Line Items, Pending Review, Completed Documents.
   - **Declaration Activity Bar Chart**: Monthly trends of incoming vs outgoing declarations.
   - **Stock by Unit**: Separate progress meters for `PCS` and `KG` showing total remaining balances across source BOEs.
   - **Current Customs Inventory**: Live bonded balances linked to source declarations.
   - **Inventory Alerts**: Real-time exceptions and low-stock alerts.
   - **Recently Uploaded Documents**: Recent Bills of Entry with line counts and statuses.

2. **Incoming BOE Register**:
   - Master list of all registered customs declarations.
   - **Drag-and-Drop PDF Upload**: Instant parser for UAE Customs Declaration forms.
   - **"Load Attached Dubai Customs PDF Demo" Button**: 1-click loading of the exact attached sample PDF (`000-00000000-00` with 5 aircraft and filter heat exchanger lines).
   - Item details view with full breakdown.

3. **Outgoing HS Summary**:
   - Audit of all dispatched and cleared movements.
   - **Process Outgoing Goods Form**: Dynamic dropdown showing real-time available balances per Source BOE and HS code.

4. **Customs Stock Inventory**:
   - Complete inventory matrix by HS Code, Goods Description, Source BOE, Location, UOM, Original Qty, Deducted Qty, Remaining Qty, and Status.
   - Filters for UOM (`All`, `PCS`, `KG`) and Status (`Available`, `Low Stock`, `Depleted`).
   - One-click **Export to CSV**.

5. **Admin & Access Log**:
   - Automatic security trail of every incoming registration, stock deduction, and system activity with timestamp and operator name (`Logistics operator`).

---

## 🚀 How to Run the Demo

Open [index.html](file:///d:/Demo%20inventory%20management/index.html) in any modern browser:
- Works 100% offline with zero dependencies.
- Persistent local storage preserves all changes across browser refreshes.
- Click **"Demo Data"** at the top right at any time to reset to the clean benchmark database.
