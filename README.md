# 💼 Athul Krishna O S — IT Support & Network Portfolio

> **High-Performance Executive Portfolio Website for UAE & GCC Recruitment**  
> Built with **React 19**, **Vite**, **Tailwind CSS**, and modern vanilla styling. Features interactive ATS resume previews, proof-of-work project lightboxes, authenticated Cisco CCNA credential verification, on-site field evidence gallery, and multi-channel recruiter contact actions.

---

## 📋 Table of Contents
1. [Executive Overview](#-executive-overview)
2. [Target Audience & Strategic Goal](#-target-audience--strategic-goal)
3. [Architecture & Technology Stack](#-architecture--technology-stack)
4. [Design System & UI Aesthetics](#-design-system--ui-aesthetics)
5. [Complete Breakdown of Every UI Section & Option](#-complete-breakdown-of-every-ui-section--option)
   - [0. Scroll Progress Bar (`ScrollProgress`)](#0-scroll-progress-bar-scrollprogress)
   - [1. Navigation Bar (`Navbar`)](#1-navigation-bar-navbar)
   - [2. Hero Section (`Hero`)](#2-hero-section-hero)
   - [3. Core Technical Skills (`Skills`)](#3-core-technical-skills-skills)
   - [4. Professional Experience (`Experience`)](#4-professional-experience-experience)
   - [5. Professional Certifications (`Certificates`)](#5-professional-certifications-certificates)
   - [6. Selected Proof of Work (`Projects`)](#6-selected-proof-of-work-projects)
   - [7. Authentic On-Site Work Photos (`Gallery`)](#7-authentic-on-site-work-photos-gallery)
   - [8. Recruitment Documents (`CareerDocuments`)](#8-recruitment-documents-careerdocuments)
   - [9. Recruiter Contact & Direct Email Modal (`Contact`)](#9-recruiter-contact--direct-email-modal-contact)
   - [10. Interactive ATS Resume Modal (`ResumeModal`)](#10-interactive-ats-resume-modal-resumemodal)
   - [11. Floating Scroll-to-Top Button (`ScrollTop`)](#11-floating-scroll-to-top-button-scrolltop)
   - [12. Site Footer (`Footer`)](#12-site-footer-footer)
6. [Data Layer & Modular Content Structure](#-data-layer--modular-content-structure)
7. [Python Automation Tooling (PDFs & Media)](#-python-automation-tooling-pdfs--media)
8. [Accessibility (a11y) & SEO Architecture](#-accessibility-a11y--seo-architecture)
9. [Local Development & Deployment Guide](#-local-development--deployment-guide)

---

## 🌟 Executive Overview

This portfolio website is a bespoke, enterprise-grade personal branding platform engineered for **Athul Krishna O S**, a **CCNA-Certified IT Support Engineer** with **4+ years of practical, on-site experience** in desktop and laptop break-fix diagnostics, Windows 10/11 system provisioning, structured Cat6 cabling, Cisco LAN switching, CCTV surveillance setups, and PowerShell/WinGet automation.

Unlike generic developer templates, this portfolio is specifically architected to satisfy the rigorous evaluation standards of **corporate hiring managers, IT directors, and recruitment agencies across Dubai and Abu Dhabi (UAE)**.

### Core Candidate Profile Highlights
* **Name**: Athul Krishna O S
* **Primary Roles**: IT Support Engineer | Desktop Support Engineer | Network Support Specialist
* **Key Certification**: Cisco Certified Network Associate (**CCNA #CSCO15240575**, Active 2026–2029)
* **Experience Baseline**: 4+ Years of progressive technical experience at Grand Infotech (promoted from Technician to Senior Tech to IT Support Lead) and specialized field roles at Wings IT Solutions & L-One Chip Level Solutions
* **Target Geography**: United Arab Emirates (Abu Dhabi, Dubai, Sharjah) — Currently in Abu Dhabi, available for immediate onboarding (0 Days Notice)

---

## 🎯 Target Audience & Strategic Goal

| Target Recruiter | What They Look For | How This Portfolio Answers It |
| :--- | :--- | :--- |
| **UAE Corporate HR & Talent Acquisition** | In-country availability, visit visa transfer, ATS compatibility, clear contact channels. | Prominent "Available in Abu Dhabi" badges, 1-click ATS resume preview, direct WhatsApp chat, and 1-click copy for email/phone. |
| **IT Managers & Technical Leads** | Defensible technical skills, practical experience vs. textbook claims, hardware break-fix abilities. | Strict separation between *Hands-on Daily Experience* and *Verified Working Knowledge*; comprehensive 5-part STAR project breakdowns. |
| **Enterprise Recruiters & Screening Agencies** | Credential authenticity, proof of previous work, referenceable projects. | Direct link to official Cisco verification portal (`CSCO15240575`), in-browser modal preview of the physical CCNA certificate, and verified photographic field evidence. |

---

## 💻 Architecture & Technology Stack

```
04_Portfolio/
├── public/                      # Static assets, favicon, downloadable PDFs
│   ├── Athul_Krishna_OS_Resume.pdf
│   ├── Athul_Krishna_OS_Cover_Letter_UAE.pdf
│   └── favicon.svg
├── src/
│   ├── assets/                  # Optimized WebP imagery, certificate SVGs
│   │   └── images/
│   │       ├── certificates/    # High-res certificate SVGs
│   │       ├── optimized/       # Compressed WebP gallery and project images (<120KB)
│   │       └── profile/         # Candidate executive portraits
│   ├── components/              # Modular React UI components
│   │   ├── CareerDocuments/     # Resume and Cover letter download cards
│   │   ├── Certificates/        # CCNA verification card & document modal
│   │   ├── Contact/             # Contact channels & interactive Email modal
│   │   ├── Experience/          # Vertical timeline with promotion indicators
│   │   ├── Footer/              # Navigation links and recruiter footer
│   │   ├── Gallery/             # 6-item on-site photo evidence & lightbox
│   │   ├── Hero/                # Executive portrait, fact cards, and primary CTAs
│   │   ├── Navbar/              # Sticky navigation with scroll spy & mobile menu
│   │   ├── Projects/            # Proof-of-work project cards & 5-part modals
│   │   ├── ResumeModal/         # In-browser ATS plain-text viewer & clipboard copy
│   │   ├── ScrollProgress/      # Viewport scroll percentage indicator bar
│   │   ├── ScrollTop/           # Floating back-to-top button
│   │   └── Skills/              # Categorized technical competency cards
│   ├── Data/                    # Single source of truth JavaScript data stores
│   │   ├── certificates.js      # Credentials, issuers, validity, and IDs
│   │   ├── experience.js        # Chronological work history and achievements
│   │   ├── profile.js           # Candidate metadata, phone, email, bio, links
│   │   ├── projects.js          # In-depth project case studies
│   │   └── skills.js            # Hands-on vs working knowledge skill catalog
│   ├── hooks/                   # Custom React hooks (e.g., useScrollReveal.js)
│   ├── App.jsx                  # Main application orchestrator & state host
│   ├── index.css                # Tailwind imports, design tokens, keyframe animations
│   └── main.jsx                 # React root renderer
├── generate_resume_pdf.py       # Python script generating the 2-page ATS Resume PDF
├── generate_cover_letter.py     # Python script generating the UAE Cover Letter PDF
├── optimize_portfolio_images.py # Python script batch-compressing raw media to WebP
└── package.json                 # Project dependencies & Vite scripts
```

### Core Technologies
* **Framework**: React 19 (`react`, `react-dom`)
* **Build Tool**: Vite 8 with Hot Module Replacement (HMR)
* **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`) + scoped Vanilla CSS files for complex modal layouts and micro-interactions
* **Typography**: Google Fonts — `Plus Jakarta Sans` (headings & titles) and `Inter` (body & technical descriptions)
* **Icons**: Inline scalable SVGs for zero dependency overhead and instant render times
* **Document Engine**: Python 3 + `ReportLab` for automated generation of ATS-compliant recruiter PDFs

---

## 🎨 Design System & UI Aesthetics

The user interface follows a **"Dark Executive Tech"** theme engineered to convey stability, technical authority, and modern professionalism:

* **Color Palette**:
  * **Deep Obsidian (`#020617` / `#050817`)**: Dominant page background; prevents eye fatigue and frames high-contrast text.
  * **Midnight Navy Card Surface (`#0d1228`)**: Raised surface container for cards and modal dialogs with subtle border borders (`rgba(6, 182, 212, 0.2)`).
  * **Electric Cyan (`#22d3ee` / `#06b6d4`)**: Primary accent color for actionable buttons, category badges, and active navigation indicators.
  * **Emerald Glow (`#34d399` / `#10b981`)**: Signals "Available In-Country / Ready to Join", verified credential status, and defensible project outcomes.
  * **Warm Amber (`#f59e0b`)**: Emphasizes problem statements and critical challenges in technical case studies.
* **Micro-Animations & GPU Acceleration**:
  * Hardware-accelerated transitions (`transform`, `opacity`) using custom cubic-bezier timing (`cubic-bezier(0.16, 1, 0.3, 1)`).
  * Subtle hover elevations (`translateY(-3px)`) with cyan ambient drop shadows.
  * Intersection Observer reveal animations triggered automatically as the user scrolls.

---

## 🔍 Complete Breakdown of Every UI Section & Option

### 0. Scroll Progress Bar (`ScrollProgress`)
* **Location**: Fixed at the absolute top of the browser window (`z-index: 100`).
* **How It Works**:
  * An event listener calculates `window.scrollY / (scrollHeight - innerHeight)`.
  * Renders a sleek 3px electric cyan gradient line that expands horizontally (`scaleX(0)` to `scaleX(1)`) as the user scrolls down the page.
  * Provides visual feedback on reading progress across the entire portfolio.

---

### 1. Navigation Bar (`Navbar`)
* **Location**: Fixed sticky header at the top of the screen.
* **Component Elements & Options**:
  1. **Brand Logo Badge (`AK`)**: Clicking jumps to top (`#home`).
  2. **Candidate Identity & Status Indicator**:
     - Shows "Athul Krishna" with a pulsing green status dot and **"Available in Abu Dhabi"** label.
  3. **Navigation Links**:
     - Links to `#skills`, `#experience`, `#certificates`, `#projects`, and `#contact`.
     - **Active Scroll Spy**: An `IntersectionObserver` monitors sections within the viewport and highlights the corresponding navigation tab in real-time.
  4. **LinkedIn Button**: Opens Athul's LinkedIn profile in a new browser tab (`target="_blank"` with `rel="noopener noreferrer"`).
  5. **Resume Button**: Directly triggers the full-screen interactive ATS Resume Modal (`ResumeModal.jsx`).
  6. **Mobile Hamburger Menu**:
     - On screens `< 768px`, navigation collapses into a responsive animated 3-line hamburger button.
     - Clicking opens a slide-down mobile menu drawer.
     - Automatically closes when any section link is tapped, clicking outside, or pressing the <kbd>Escape</kbd> key.

---

### 2. Hero Section (`Hero`)
* **Location**: First visible screen (`#home`).
* **Visual Presentation**: High-contrast two-column executive layout:
  * **Left Column**:
    * **Eyebrow Tag**: `"CCNA-CERTIFIED IT SUPPORT ENGINEER"` — Instantly establishes technical authority.
    * **Candidate Name**: Athul Krishna O S in bold `Plus Jakarta Sans`.
    * **Target Job Titles**: "IT Support Engineer | Desktop Support | Network Support".
    * **Executive Summary**: 4-line overview emphasizing 4+ years of hands-on break-fix, Windows provisioning, network troubleshooting, and immediate Abu Dhabi & Dubai onboarding.
    * **Availability Badge**: Pulsing indicator reading *"Currently in Abu Dhabi, UAE | Available for immediate joining"*.
    * **Primary Action Buttons**:
      * **"Download Resume" (Primary Cyan Button)**: Downloads the official `Athul_Krishna_OS_Resume.pdf` directly to the recruiter's computer.
      * **"Contact Me" (Secondary Outlined Button)**: Smoothly scrolls down to the `#contact` section.
      * **"View Text Summary" (Inline Text Link)**: Opens the interactive ATS Resume Modal for quick in-browser reading without downloading.
    * **Social Verification Links**:
      * LinkedIn Profile link (with official SVG icon).
      * GitHub Profile link (with official SVG icon).
  * **Right Column**:
    * **Executive Portrait Card**: Displays Athul's professional studio portrait with rounded corners, subtle dark overlay, and an ambient cyan glow backdrop.
  * **Bottom Stat Fact Cards (3 Maximum Verified Facts)**:
    1. **`4+ Years`**: Hands-on IT Support (Desktop diagnostics, hardware break-fix & service desk operations).
    2. **`CCNA`**: Cisco Certified (Routing, switching & network infrastructure `#CSCO15240575`).
    3. **`UAE Ready`**: In Abu Dhabi & Onboarding (Available immediately across Abu Dhabi/Dubai on visit visa).

---

### 3. Core Technical Skills (`Skills`)
* **Location**: `#skills`
* **Defensible Dual-Category Architecture**:
  To protect against tough interview questioning, skills are strictly separated into two distinct cards:
  1. **Hands-on Experience (Daily Field Practice)**:
     - Includes: Windows 10/11 system provisioning, desktop/laptop diagnostics & thermal repasting, RAM/NVMe upgrades, network printers & SMB share permissions, Cat6 structured cabling & T568B punch-down, CCTV/NVR PoE setups, Dev Soft ticketing system, and PowerShell 7 / WinGet automation.
     - Indicated by an **Emerald Green pulsing beacon**.
  2. **Working Knowledge (Lab Verified / Guided)**:
     - Includes: Active Directory user management & domain joining, DHCP scopes, DNS basics, Group Policy (GPO) deployment, 802.1Q VLAN segmentation, Cisco IOS CLI navigation, and Windows Server file-sharing.
     - Indicated by a **Cyan beacon**.
* **Each Skill Item**:
  - Displays a chevron indicator (`▸`), skill name in bold, and a concise 1-line clarification of real-world implementation.

---

### 4. Professional Experience (`Experience`)
* **Location**: `#experience`
* **Timeline Presentation**:
  - Connected by a continuous vertical cyan timeline guide.
  - Documents 4+ years of verified career growth across 5 chronological positions:
    1. **Wings IT Solutions (Jun 2026 – Aug 2026)**: Network & CCTV Infrastructure Specialist — 16-channel 4K IP CCTV, PoE switches, Cat6 patch panel punch-downs, Wi-Fi APs.
    2. **L-One Chip Level Solutions (Apr 2026 – May 2026)**: Laptop Servicing & Hardware Diagnostics Specialist (Practical Internship) — Motherboard component fault isolation, laptop chassis teardowns across Dell, HP, Lenovo, ASUS, thermal paste servicing.
    3. **Grand Infotech (Jan 2025 – Apr 2026)**: IT Support Lead & Service Coordinator — **Promotion Role**; managed team of 3 technicians, handled 30+ weekly tickets via Dev Soft, implemented Helious repair tracking.
    4. **Grand Infotech (2023 – 2025)**: Senior IT Support Technician — **Promotion Role**; Tier-2 hardware break-fix, automated Windows deployment with PowerShell/WinGet (Nexus Prime), commercial multi-PC rollouts.
    5. **Grand Infotech (2022 – 2023)**: IT Support Technician — Career foundation; desktop assembly, OS installations, baseline network cabling and printer troubleshooting.
* **Badges & Visual Cues**:
  - Green promotion tags (`↑ Promoted to Lead...`, `↑ Promoted from Desktop Support...`) prove reliability, loyalty, and career advancement.

---

### 5. Professional Certifications (`Certificates`)
* **Location**: `#certificates`
* **Credentials Displayed**:
  1. **Cisco Certified Network Associate (CCNA)**:
     - Issuer: Cisco Systems
     - Issued: June 23, 2026 | Valid Until: June 23, 2029
     - Credential ID: `CSCO15240575`
     - **Option: "Verify on Cisco Portal" Button**: Direct external link to Cisco's official verification portal (`cisco.com/go/verifycertificate`).
     - **Option: "View Official Certificate Document" Button**: Opens the **in-browser high-resolution SVG Certificate Lightbox Modal**, allowing recruiters to inspect the certificate immediately without leaving the page.
  2. **Laptop Servicing & Upgradation Practical Training**:
     - Issuer: L-One Chip Level Solutions (Completed intensive practical hardware program).
* **Modal Accessibility**: Focus-trapped dialog, dismissible via the `✕` button, clicking backdrop, or hitting <kbd>Escape</kbd>.

---

### 6. Selected Proof of Work (`Projects`)
* **Location**: `#projects`
* **Interactive Project Cards**:
  Every project card displays a high-resolution cover image, category badge, project title, concise summary, technology tags, and an invitation to inspect.
* **The 5 Featured Projects**:
  1. **Nexus Prime**: Automated Windows deployment toolkit written in PowerShell 7 with WinGet CLI. Cuts setup time from 45 min to <8 min per PC.
  2. **Helious Tracker**: Service desk repair coordination workflow with ticket lifecycle queues and automated WhatsApp customer notifications.
  3. **10-PC Accounting Firm Deployment**: On-site commercial deployment of 10 custom workstations, Cat6 cable management, Windows 11 setup, SMB share and printer mapping.
  4. **School IT Lab Network Rack Installation**: 6U wall cabinet installation, 24-port keystone patch panel termination adhering to T568B color codes, D-Link Gigabit switch patching.
  5. **Small Office Network and CCTV Deployment**: Complete office LAN rollout, PoE switch provisioning, Wi-Fi AP placement, and 16-channel 4K NVR IP camera installation.
* **Deep-Dive Modal Lightbox (The 5-Part STAR Method)**:
  Clicking any project opens an in-depth technical modal explaining:
  1. **⚠️ Problem Statement**: The exact business or operational challenge.
  2. **🛠️ What I Did**: Hands-on technical steps taken.
  3. **⚙️ Tools & Environment**: Tech stack tags (e.g., PowerShell 7, WinGet, Cat6, PoE).
  4. **📋 Verifiable Evidence**: Pointers to public GitHub code or field runbooks.
  5. **✅ Defensible Result**: Quantifiable outcomes (e.g., "reduced setup time to under 8 minutes", "restored connectivity across 30+ lab PCs").
* **Action Links Inside Modal**:
  - **"View Project Source Code"**: Direct link to the open-source repository on GitHub.
  - **"Read Field Playbook Runbook"**: Links to technical documentation runbooks.

---

### 7. Authentic On-Site Work Photos (`Gallery`)
* **Location**: `#gallery`
* **Why This Matters**: Proves physical on-site competence beyond code. Every photo is authentic, documented, and optimized to under 120KB WebP format.
* **The 6 Curated Field Evidence Items**:
  1. **10-PC Workstation Fleet Deployment**: Office desks, assembled PCs, and organized cabling.
  2. **School IT Lab Network Rack Cabling**: Mounted 6U rack, trunking, and 24-port patch panel.
  3. **D-Link 16-Port Gigabit Switch Setup**: Port diagnostics and link verification on rack-mounted hardware.
  4. **Laptop Hardware Diagnostics & Servicing**: Internal chassis disassembly, cooling fan cleaning, and thermal repasting.
  5. **Dedicated Tally Prime Multi-User Server**: Centralized Core i5 server setup, static IP binding, and automated backups.
  6. **Small Office Network & CCTV Infrastructure**: PoE switch termination, NVR configuration, and 4K IP camera installation.
* **Interactive Lightbox Modal**:
  - Clicking any card opens a distraction-free photo modal with full caption, client sector, and installation details.
  - Keyboard accessible (<kbd>Escape</kbd> to close).

---

### 8. Recruitment Documents (`CareerDocuments`)
* **Location**: `#documents`
* **Features 2 Clean Document Download Cards**:
  1. **Professional IT Support Resume**:
     - Summary of 2-page ATS format.
     - **Option: "Download Resume (PDF)"**: Downloads `Athul_Krishna_OS_Resume.pdf`.
     - **Option: "Preview Text Resume"**: Opens the ATS plaintext modal.
  2. **UAE IT Support Cover Letter**:
     - Targeted specifically for Dubai & Abu Dhabi hiring managers.
     - **Option: "Download Cover Letter (PDF)"**: Downloads `Athul_Krishna_OS_Cover_Letter_UAE.pdf`.
     - **Option: "View PDF Document"**: Opens the PDF in a new browser tab.

---

### 9. Recruiter Contact & Direct Email Modal (`Contact`)
* **Location**: `#contact`
* **Component Features**:
  1. **"Send Direct Email" Button (Primary Cyan CTA)**:
     - Clicking automatically copies `athulkrishna.os.work@gmail.com` to the user's clipboard and displays an **interactive email helper modal**:
       * **Option A: "Open System Mail App"**: Launches default client (Outlook, Apple Mail, etc.) via `mailto:` with pre-filled subject and body text.
       * **Option B: "Compose in Gmail (Browser Tab)"**: Opens a pre-filled compose window in `mail.google.com` (ideal for recruiters on shared/work laptops without default mail clients configured).
       * **Option C: "Prefer WhatsApp? Chat Directly"**: Launches WhatsApp Web / mobile app.
  2. **"Download Resume (PDF)" Button**: Instant direct download.
  3. **"Chat on WhatsApp" Button (Emerald CTA)**: Opens a direct WhatsApp chat to `+971 56 435 7994` with a pre-written introductory message.
  4. **Direct Channel Cards with 1-Click Copy**:
     - Email Card: Shows email with a **"📋 Copy"** button that changes to **"✓ Copied!"** on click.
     - Phone Card: Shows `+971 56 435 7994` with a **"📋 Copy"** button.
     - Target Relocation Card: Confirms Abu Dhabi & Dubai immediate availability (In Abu Dhabi).
     - Live Availability Status Badge.

---

### 10. Interactive ATS Resume Modal (`ResumeModal`)
* **Triggered by**:
  - Navbar "Resume" button
  - Hero "View Text Summary" link
  - Documents section "Preview Text Resume" button
* **What It Does**:
  - Displays a complete, cleanly formatted plaintext version of Athul's resume directly inside the browser.
  - **Option 1: "📥 Download PDF"**: Direct download of official PDF resume.
  - **Option 2: "📋 Copy Plaintext"**: Copies the entire resume structure (Contact, Summary, Skills, Experience, Projects, Certifications, Languages, UAE availability) formatted with bullet points into the recruiter's clipboard. Perfect for recruiters pasting into Applicant Tracking Systems (Workday, Taleo, Greenhouse) or email notes.
  - **Option 3: "✕" Close Button**: Closes modal and returns keyboard focus.

---

### 11. Floating Scroll-to-Top Button (`ScrollTop`)
* **Location**: Bottom-right floating icon (`z-index: 40`).
* **Behavior**:
  - Remains completely hidden when the user is at the top of the page.
  - Automatically fades in once the user scrolls beyond **500px**.
  - Clicking smoothly scrolls the viewport back to the top (`window.scrollTo({ top: 0, behavior: 'smooth' })`).

---

### 12. Site Footer (`Footer`)
* **Location**: Bottom of the page.
* **Content**:
  - Athul Krishna brand monogram and "Available in Abu Dhabi" live status.
  - One-line professional positioning statement.
  - Quick navigation links (`#skills`, `#experience`, `#certificates`, `#projects`, `#gallery`, `#contact`).
  - Recruiter inquiry block with email and phone.
  - Dynamic copyright year notice and "Back to top ↑" trigger.

---

## 🗄️ Data Layer & Modular Content Structure

All candidate content is decoupled from UI presentation and maintained in pure JavaScript modules under `src/Data/`:

| File | Purpose | Key Data Fields |
| :--- | :--- | :--- |
| `profile.js` | Core candidate metadata | Name, title, phone, email, LinkedIn, GitHub, bio summary, verified highlight statistics. |
| `skills.js` | Competency matrix | Divided into `hands-on` and `working-knowledge` arrays with technical details for each item. |
| `experience.js` | Work history | Company name, location, role, dates, progression notes, and bulleted technical responsibilities. |
| `certificates.js` | Industry credentials | Title, issuer, issue date, expiration date, credential ID, verification URL, official SVG asset. |
| `projects.js` | Proof of work studies | Project number, title, cover image, badge, summary, problem, what I did, tools, evidence, and results. |

> 💡 **To update content**: Simply edit the relevant file in `src/Data/`. All components automatically re-render with updated content without any UI modifications.

---

## 🐍 Python Automation Tooling (PDFs & Media)

The repository includes three automated Python scripts to maintain recruitment collateral:

### 1. `generate_resume_pdf.py`
* **Engine**: Python `reportlab` (uses `SimpleDocTemplate`, `Paragraph`, `HRFlowable`).
* **Output**: `public/Athul_Krishna_OS_Resume.pdf`
* **Features**:
  * Precision 2-page executive ATS layout.
  * Executive color palette: Slate navy (`#0f172a`), Cyan accent (`#0284c7`), Cool gray rules.
  * Includes CCNA credential ID (`CSCO15240575`), 4+ years of work history at Grand Infotech, structured cabling, and automation tooling.
* **Usage**:
  ```bash
  python generate_resume_pdf.py
  ```

### 2. `generate_cover_letter.py`
* **Engine**: Python `reportlab`.
* **Output**: `public/Athul_Krishna_OS_Cover_Letter_UAE.pdf`
* **Features**:
  * 1-page professional cover letter addressed to UAE IT Hiring Managers.
  * Highlights immediate availability in Dubai/Abu Dhabi and core desktop/networking capabilities.
* **Usage**:
  ```bash
  python generate_cover_letter.py
  ```

### 3. `optimize_portfolio_images.py`
* **Engine**: Python `Pillow` (PIL).
* **Output**: `src/assets/images/optimized/*.webp`
* **Features**:
  * Converts multi-megabyte DSLR and smartphone camera photos into high-fidelity WebP format.
  * Resizes and compresses images to under **120KB**, ensuring sub-second page loads and high Google Lighthouse performance scores.
* **Usage**:
  ```bash
  python optimize_portfolio_images.py
  ```

---

## ♿ Accessibility (a11y) & SEO Architecture

### Accessibility Highlights
* **Full Keyboard Navigation**: All interactive cards and dialogs support <kbd>Tab</kbd>, <kbd>Enter</kbd>, <kbd>Space</kbd>, and <kbd>Escape</kbd>.
* **Accessible Modal Dialogs**: Modals include `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, and automatic focus trapping on open with focus restoration on close.
* **Reduced Motion Support**: Included CSS `@media (prefers-reduced-motion: reduce)` rules that automatically disable animations for users with motion sensitivities.

### SEO & Recruiter Social Sharing
* **Descriptive Metadata**: Title, meta description, and keywords targeting IT support roles in Dubai/Abu Dhabi.
* **Open Graph & Twitter Cards**: Full `og:title`, `og:image`, `og:url` tags for rich preview cards when shared on LinkedIn, WhatsApp, or Microsoft Teams.
* **JSON-LD Schema Markup**: Embedded `schema.org/Person` structured data describing Athul Krishna O S, his job title, skills, credentials, and social links for search engine indexing.

---

## 🚀 Local Development & Deployment Guide

### Prerequisites
* **Node.js**: Version 18.x or higher
* **npm**: Version 9.x or higher
* **Python**: Version 3.10+ (optional, only if re-running PDF generators)

### Installation & Local Run
```bash
# 1. Navigate to the portfolio folder
cd 04_Portfolio

# 2. Install dependencies
npm install

# 3. Start the local development server
npm run dev
```
The site will be live at `http://localhost:5173`.

### Production Build
```bash
# Build optimized production bundle
npm run build

# Preview the production bundle locally
npm run preview
```
The output will be placed in the `dist/` directory ready for deployment on **Netlify**, **Vercel**, or **GitHub Pages**.

---

## 📄 License & Attribution

* **Code & Architecture**: MIT License.
* **Personal Profile & Work History**: © Athul Krishna O S. All rights reserved.
