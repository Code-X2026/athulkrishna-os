# Script to generate the self-contained Athul_Krishna_Portfolio_Demo.html
$ErrorActionPreference = "Stop"

function Get-Base64Image($path, $mimeType) {
    if (Test-Path $path) {
        $bytes = [System.IO.File]::ReadAllBytes((Resolve-Path $path).Path)
        $b64 = [System.Convert]::ToBase64String($bytes)
        return "data:$mimeType;base64,$b64"
    }
    return ""
}

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$projectRoot = (Resolve-Path "$scriptDir\..\..").Path
Write-Output "Encoding portfolio assets from $projectRoot..."
$b64Profile = Get-Base64Image (Join-Path $projectRoot "04_Portfolio\src\assets\images\profile\athul_krishna.jpg") "image/jpeg"
$b64Nexus = Get-Base64Image (Join-Path $projectRoot "04_Portfolio\src\assets\images\optimized\nexus_prime.webp") "image/webp"
$b64Helious = Get-Base64Image (Join-Path $projectRoot "04_Portfolio\src\assets\images\optimized\helious_pro.webp") "image/webp"
$b64Accounting = Get-Base64Image (Join-Path $projectRoot "04_Portfolio\src\assets\images\optimized\pc_accounting_firm.webp") "image/webp"
$b64SchoolRack = Get-Base64Image (Join-Path $projectRoot "04_Portfolio\src\assets\images\optimized\school_it_rack.webp") "image/webp"
$b64OfficeCctv = Get-Base64Image (Join-Path $projectRoot "04_Portfolio\src\assets\images\optimized\small_office_network.webp") "image/webp"
$b64Tally = Get-Base64Image (Join-Path $projectRoot "04_Portfolio\src\assets\images\optimized\tally_server.webp") "image/webp"

Write-Output "Assets encoded. Generating HTML markup..."

$html = @"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Athul Krishna O S | CCNA-Certified IT Support & Network Engineer</title>
  <meta name="description" content="CCNA-certified IT Support Engineer with 4+ years of hands-on experience in desktop diagnostics, Windows Server Active Directory, Windows 10/11 fleet provisioning, Cisco LAN switching, and high-volume service desk operations. Currently in Baniyas West, Abu Dhabi, UAE — Available for immediate onboarding (0 Days Notice)." />
  <meta name="keywords" content="IT Support Engineer, Network Engineer, CCNA Certified, Baniyas West, Abu Dhabi IT Jobs, Dubai IT Jobs, Hardware Break-Fix, Active Directory, Windows 11 Deployment, Cisco Switching, Cat6 Cabling, ServiceDesk Plus" />
  <meta name="author" content="Athul Krishna O S" />
  
  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Athul Krishna O S | CCNA-Certified IT Support & Network Engineer" />
  <meta property="og:description" content="CCNA-certified IT Support Engineer with 4+ years of hands-on desktop diagnostics, Windows provisioning, Cisco LAN support, and field IT infrastructure experience. Immediately Available in UAE." />
  <meta property="og:url" content="https://athulkrishna-it.netlify.app" />

  <!-- Google Fonts: Plus Jakarta Sans, Inter, JetBrains Mono -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet" />

  <style>
    /* ==========================================================================
       RESET & ROOT VARIABLES
       ========================================================================== */
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    :root {
      --bg-dark: #060913;
      --bg-surface: #0b1124;
      --bg-card: rgba(15, 23, 42, 0.75);
      --bg-card-hover: rgba(23, 34, 61, 0.85);
      --border-subtle: rgba(255, 255, 255, 0.08);
      --border-accent: rgba(6, 182, 212, 0.35);
      
      --cyan-400: #22d3ee;
      --cyan-500: #06b6d4;
      --cyan-glow: rgba(6, 182, 212, 0.25);
      --emerald-400: #34d399;
      --emerald-500: #10b981;
      --emerald-glow: rgba(16, 185, 129, 0.25);
      --blue-500: #3b82f6;
      --amber-400: #fbbf24;
      --amber-500: #f59e0b;

      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --text-subtle: #64748b;

      --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
      --font-display: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
      --font-mono: 'JetBrains Mono', monospace;

      --radius-sm: 8px;
      --radius-md: 12px;
      --radius-lg: 16px;
      --radius-xl: 24px;
      --radius-full: 9999px;

      --shadow-card: 0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 1px 1px var(--border-subtle);
      --shadow-glow: 0 0 30px -5px var(--cyan-glow);
    }

    html {
      scroll-behavior: smooth;
      color-scheme: dark;
    }

    body {
      background-color: var(--bg-dark);
      color: var(--text-main);
      font-family: var(--font-sans);
      line-height: 1.6;
      overflow-x: hidden;
      background-image: 
        radial-gradient(circle at 15% 15%, rgba(6, 182, 212, 0.08) 0%, transparent 40%),
        radial-gradient(circle at 85% 35%, rgba(59, 130, 246, 0.07) 0%, transparent 40%),
        radial-gradient(circle at 50% 80%, rgba(16, 185, 129, 0.06) 0%, transparent 45%);
      background-attachment: fixed;
    }

    a {
      color: inherit;
      text-decoration: none;
      transition: all 0.2s ease;
    }

    button {
      font-family: inherit;
      cursor: pointer;
      border: none;
      background: none;
      transition: all 0.2s ease;
    }

    img {
      max-width: 100%;
      height: auto;
      display: block;
    }

    .container {
      width: 100%;
      max-width: 1240px;
      margin: 0 auto;
      padding: 0 24px;
    }

    /* Reading Progress Bar */
    #reading-progress {
      position: fixed;
      top: 0;
      left: 0;
      height: 3px;
      background: linear-gradient(90deg, var(--cyan-500), var(--blue-500), var(--emerald-400));
      z-index: 1000;
      width: 0%;
      transition: width 0.1s ease;
    }

    /* ==========================================================================
       TOP RECRUITER BAR
       ========================================================================== */
    .recruiter-bar {
      background: rgba(10, 16, 32, 0.95);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      font-size: 0.84rem;
      padding: 8px 0;
      position: sticky;
      top: 0;
      z-index: 90;
    }

    .recruiter-bar-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      flex-wrap: wrap;
    }

    .recruiter-status {
      display: flex;
      align-items: center;
      gap: 10px;
      color: #e2e8f0;
      font-size: 0.82rem;
    }

    .pulse-dot {
      width: 9px;
      height: 9px;
      background: var(--emerald-400);
      border-radius: 50%;
      position: relative;
      box-shadow: 0 0 10px var(--emerald-400);
    }
    .pulse-dot::after {
      content: '';
      position: absolute;
      inset: -4px;
      border-radius: 50%;
      border: 2px solid var(--emerald-400);
      animation: ripple 2s infinite cubic-bezier(0, 0.2, 0.8, 1);
    }

    @keyframes ripple {
      0% { transform: scale(0.6); opacity: 1; }
      100% { transform: scale(2.2); opacity: 0; }
    }

    .recruiter-actions {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .rec-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 5px 12px;
      border-radius: var(--radius-full);
      font-size: 0.78rem;
      font-weight: 600;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid var(--border-subtle);
      color: #e2e8f0;
    }
    .rec-btn:hover {
      background: rgba(255, 255, 255, 0.12);
      transform: translateY(-1px);
    }
    .rec-btn.whatsapp {
      background: rgba(16, 185, 129, 0.15);
      border-color: rgba(16, 185, 129, 0.35);
      color: #6ee7b7;
    }
    .rec-btn.whatsapp:hover {
      background: rgba(16, 185, 129, 0.25);
      box-shadow: 0 0 15px rgba(16, 185, 129, 0.3);
    }
    .rec-btn.resume {
      background: rgba(6, 182, 212, 0.15);
      border-color: rgba(6, 182, 212, 0.35);
      color: #67e8f9;
    }
    .rec-btn.resume:hover {
      background: rgba(6, 182, 212, 0.25);
      box-shadow: 0 0 15px rgba(6, 182, 212, 0.3);
    }

    /* ==========================================================================
       MAIN NAVBAR
       ========================================================================== */
    .navbar {
      background: rgba(6, 9, 19, 0.85);
      backdrop-filter: blur(16px);
      border-bottom: 1px solid var(--border-subtle);
      position: sticky;
      top: 41px;
      z-index: 80;
      padding: 14px 0;
    }

    .nav-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .brand-logo {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .logo-badge {
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, #0ea5e9, #06b6d4, #10b981);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-display);
      font-weight: 800;
      color: #060913;
      font-size: 1.15rem;
      box-shadow: 0 0 16px rgba(6, 182, 212, 0.35);
    }

    .brand-text {
      display: flex;
      flex-direction: column;
    }

    .brand-name {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: 1.05rem;
      color: #ffffff;
      letter-spacing: -0.02em;
    }

    .brand-tag {
      font-family: var(--font-mono);
      font-size: 0.68rem;
      color: var(--cyan-400);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 24px;
      list-style: none;
    }

    .nav-link {
      font-size: 0.88rem;
      font-weight: 500;
      color: var(--text-muted);
      position: relative;
    }
    .nav-link:hover, .nav-link.active {
      color: #ffffff;
    }
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -6px;
      left: 0;
      width: 0%;
      height: 2px;
      background: var(--cyan-400);
      transition: width 0.2s ease;
    }
    .nav-link:hover::after {
      width: 100%;
    }

    .nav-cta {
      padding: 8px 18px;
      border-radius: var(--radius-full);
      background: linear-gradient(135deg, var(--cyan-500), var(--blue-500));
      color: #060913;
      font-weight: 700;
      font-size: 0.85rem;
      box-shadow: 0 0 20px rgba(6, 182, 212, 0.3);
    }
    .nav-cta:hover {
      transform: translateY(-2px);
      box-shadow: 0 0 25px rgba(6, 182, 212, 0.5);
    }

    /* ==========================================================================
       HERO SECTION
       ========================================================================== */
    .hero {
      padding: 70px 0 60px;
      position: relative;
    }

    .hero-grid {
      display: grid;
      grid-template-columns: 1.15fr 0.85fr;
      gap: 48px;
      align-items: center;
    }

    .hero-eyebrows {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 20px;
    }

    .badge-ccna {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 14px;
      background: rgba(6, 182, 212, 0.12);
      border: 1px solid rgba(6, 182, 212, 0.35);
      border-radius: var(--radius-full);
      color: var(--cyan-400);
      font-family: var(--font-mono);
      font-size: 0.76rem;
      font-weight: 700;
      letter-spacing: 0.04em;
    }

    .badge-region {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 14px;
      background: rgba(16, 185, 129, 0.12);
      border: 1px solid rgba(16, 185, 129, 0.35);
      border-radius: var(--radius-full);
      color: #6ee7b7;
      font-size: 0.76rem;
      font-weight: 600;
    }

    .hero-title {
      font-family: var(--font-display);
      font-size: 3.2rem;
      font-weight: 800;
      letter-spacing: -0.03em;
      line-height: 1.1;
      margin-bottom: 16px;
      background: linear-gradient(135deg, #ffffff 40%, #94a3b8 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .hero-role-block {
      margin-bottom: 20px;
    }

    .hero-role {
      font-family: var(--font-display);
      font-size: 1.35rem;
      font-weight: 700;
      color: var(--cyan-400);
      display: block;
      margin-bottom: 6px;
    }

    .hero-subrole {
      font-size: 0.95rem;
      color: var(--text-muted);
      display: block;
    }

    .hero-summary {
      font-size: 1rem;
      color: #cbd5e1;
      line-height: 1.7;
      margin-bottom: 24px;
      max-width: 620px;
    }

    .hero-availability-box {
      display: flex;
      align-items: center;
      gap: 12px;
      background: rgba(16, 185, 129, 0.08);
      border: 1px solid rgba(16, 185, 129, 0.25);
      border-radius: var(--radius-md);
      padding: 10px 16px;
      margin-bottom: 28px;
      font-size: 0.86rem;
      color: #a7f3d0;
    }

    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 12px;
      margin-bottom: 28px;
    }

    .btn-primary {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: linear-gradient(135deg, var(--cyan-500), var(--blue-500));
      color: #060913;
      padding: 12px 24px;
      border-radius: var(--radius-md);
      font-weight: 700;
      font-size: 0.92rem;
      box-shadow: 0 0 25px rgba(6, 182, 212, 0.35);
    }
    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 0 30px rgba(6, 182, 212, 0.5);
    }

    .btn-secondary {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid var(--border-subtle);
      color: #ffffff;
      padding: 12px 20px;
      border-radius: var(--radius-md);
      font-weight: 600;
      font-size: 0.92rem;
    }
    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.12);
      border-color: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
    }

    .btn-whatsapp {
      background: rgba(16, 185, 129, 0.18);
      border: 1px solid rgba(16, 185, 129, 0.4);
      color: #6ee7b7;
    }
    .btn-whatsapp:hover {
      background: rgba(16, 185, 129, 0.28);
      box-shadow: 0 0 20px rgba(16, 185, 129, 0.35);
    }

    .hero-socials {
      display: flex;
      align-items: center;
      gap: 16px;
      font-size: 0.85rem;
      color: var(--text-muted);
    }
    .hero-social-link {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .hero-social-link:hover {
      color: var(--cyan-400);
    }

    /* 3D Tilt Card */
    .hero-visual {
      display: flex;
      justify-content: center;
      position: relative;
    }

    .tilt-card-container {
      perspective: 1000px;
      width: 100%;
      max-width: 380px;
    }

    .tilt-card {
      background: rgba(15, 23, 42, 0.8);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(6, 182, 212, 0.3);
      border-radius: var(--radius-xl);
      overflow: hidden;
      box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 35px -5px rgba(6, 182, 212, 0.25);
      transition: transform 0.15s ease-out;
      transform-style: preserve-3d;
    }

    .card-hud-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 18px;
      background: rgba(6, 182, 212, 0.08);
      border-bottom: 1px solid rgba(6, 182, 212, 0.15);
      font-size: 0.74rem;
      font-family: var(--font-mono);
    }

    .hud-cisco-id {
      color: var(--cyan-400);
      font-weight: 700;
    }

    .hud-verified-pill {
      display: flex;
      align-items: center;
      gap: 5px;
      color: #6ee7b7;
      font-weight: 600;
    }

    .hud-avatar-frame {
      position: relative;
      overflow: hidden;
      aspect-ratio: 1/1;
      background: #0b1329;
    }

    .hud-avatar-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center 20%;
      transition: transform 0.5s ease;
    }
    .tilt-card:hover .hud-avatar-img {
      transform: scale(1.03);
    }

    .card-hud-bottom {
      padding: 14px 18px;
      background: rgba(10, 16, 32, 0.95);
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid var(--border-subtle);
    }

    .hud-bottom-title {
      font-family: var(--font-display);
      font-size: 0.85rem;
      font-weight: 700;
      color: #ffffff;
      display: block;
    }

    .hud-bottom-sub {
      font-size: 0.72rem;
      color: var(--text-muted);
      display: block;
    }

    .hud-check-badge {
      width: 28px;
      height: 28px;
      background: rgba(16, 185, 129, 0.18);
      border: 1px solid rgba(16, 185, 129, 0.4);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #34d399;
      font-size: 0.85rem;
      font-weight: bold;
    }

    /* Metrics Grid */
    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      margin-top: 48px;
    }

    .metric-card {
      background: var(--bg-card);
      backdrop-filter: blur(12px);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-lg);
      padding: 20px;
      transition: all 0.2s ease;
    }
    .metric-card:hover {
      border-color: var(--border-accent);
      transform: translateY(-3px);
      box-shadow: var(--shadow-glow);
    }

    .metric-badge {
      font-family: var(--font-mono);
      font-size: 0.65rem;
      font-weight: 700;
      color: var(--cyan-400);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 8px;
      display: block;
    }

    .metric-val {
      font-family: var(--font-display);
      font-size: 2rem;
      font-weight: 800;
      color: #ffffff;
      line-height: 1.1;
      margin-bottom: 4px;
    }

    .metric-lbl {
      font-weight: 600;
      font-size: 0.9rem;
      color: #e2e8f0;
      display: block;
      margin-bottom: 4px;
    }

    .metric-det {
      font-size: 0.78rem;
      color: var(--text-muted);
      line-height: 1.4;
    }

    /* ==========================================================================
       SECTION HEADINGS
       ========================================================================== */
    .section-header {
      text-align: center;
      max-width: 700px;
      margin: 0 auto 48px;
    }

    .section-tag {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 12px;
      background: rgba(6, 182, 212, 0.1);
      border: 1px solid rgba(6, 182, 212, 0.25);
      border-radius: var(--radius-full);
      color: var(--cyan-400);
      font-family: var(--font-mono);
      font-size: 0.74rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: 12px;
    }

    .section-title {
      font-family: var(--font-display);
      font-size: 2.2rem;
      font-weight: 800;
      color: #ffffff;
      letter-spacing: -0.02em;
      margin-bottom: 12px;
    }

    .section-desc {
      font-size: 0.96rem;
      color: var(--text-muted);
      line-height: 1.6;
    }

    /* ==========================================================================
       TICKER MARQUEE
       ========================================================================== */
    .ticker-wrap {
      background: rgba(11, 17, 36, 0.6);
      border-top: 1px solid var(--border-subtle);
      border-bottom: 1px solid var(--border-subtle);
      padding: 14px 0;
      overflow: hidden;
      margin: 20px 0 70px;
    }

    .ticker-content {
      display: flex;
      gap: 40px;
      white-space: nowrap;
      animation: ticker 28s linear infinite;
    }

    @keyframes ticker {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    .ticker-item {
      display: flex;
      align-items: center;
      gap: 8px;
      font-family: var(--font-mono);
      font-size: 0.8rem;
      color: #cbd5e1;
    }
    .ticker-item span {
      color: var(--cyan-400);
    }

    /* ==========================================================================
       WORK EXPERIENCE TIMELINE
       ========================================================================== */
    .experience-section {
      padding: 60px 0;
    }

    .timeline {
      position: relative;
      max-width: 900px;
      margin: 0 auto;
      padding-left: 36px;
    }
    .timeline::before {
      content: '';
      position: absolute;
      left: 11px;
      top: 10px;
      bottom: 10px;
      width: 2px;
      background: linear-gradient(180deg, var(--cyan-400), var(--blue-500), rgba(255, 255, 255, 0.05));
    }

    .timeline-item {
      position: relative;
      margin-bottom: 40px;
    }

    .timeline-dot {
      position: absolute;
      left: -36px;
      top: 18px;
      width: 24px;
      height: 24px;
      background: #060913;
      border: 2px solid var(--cyan-400);
      border-radius: 50%;
      box-shadow: 0 0 12px var(--cyan-glow);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .timeline-dot::after {
      content: '';
      width: 8px;
      height: 8px;
      background: var(--cyan-400);
      border-radius: 50%;
    }

    .timeline-item.promoted .timeline-dot {
      border-color: var(--amber-400);
      box-shadow: 0 0 12px rgba(251, 191, 36, 0.3);
    }
    .timeline-item.promoted .timeline-dot::after {
      background: var(--amber-400);
    }

    .timeline-card {
      background: var(--bg-card);
      backdrop-filter: blur(12px);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-lg);
      padding: 24px 28px;
      transition: all 0.2s ease;
    }
    .timeline-card:hover {
      border-color: var(--border-accent);
      transform: translateX(4px);
    }

    .timeline-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 12px;
      flex-wrap: wrap;
      gap: 8px;
    }

    .timeline-title-group h3 {
      font-family: var(--font-display);
      font-size: 1.25rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 4px;
    }

    .timeline-company {
      font-size: 0.92rem;
      color: var(--cyan-400);
      font-weight: 600;
    }

    .timeline-badges {
      display: flex;
      gap: 8px;
      align-items: center;
      flex-wrap: wrap;
    }

    .badge-period {
      font-family: var(--font-mono);
      font-size: 0.74rem;
      padding: 4px 10px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: var(--radius-full);
      color: #cbd5e1;
    }

    .badge-lead {
      font-size: 0.72rem;
      font-weight: 700;
      padding: 4px 10px;
      background: rgba(245, 158, 11, 0.15);
      border: 1px solid rgba(245, 158, 11, 0.4);
      border-radius: var(--radius-full);
      color: #fcd34d;
    }

    .progression-banner {
      background: rgba(245, 158, 11, 0.08);
      border-left: 3px solid var(--amber-400);
      padding: 8px 14px;
      border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
      margin-bottom: 14px;
      font-size: 0.82rem;
      color: #fef08a;
    }

    .timeline-desc {
      font-size: 0.92rem;
      color: #94a3b8;
      margin-bottom: 14px;
      font-style: italic;
    }

    .timeline-tasks {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .timeline-tasks li {
      position: relative;
      padding-left: 20px;
      font-size: 0.88rem;
      color: #cbd5e1;
      line-height: 1.55;
    }
    .timeline-tasks li::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: var(--cyan-400);
      font-size: 1rem;
    }

    /* ==========================================================================
       CERTIFICATIONS SECTION
       ========================================================================== */
    .certs-section {
      padding: 60px 0;
    }

    .certs-grid {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 24px;
    }

    .cert-card {
      background: var(--bg-card);
      backdrop-filter: blur(12px);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-xl);
      padding: 32px;
      position: relative;
      overflow: hidden;
      transition: all 0.2s ease;
    }
    .cert-card.ccna {
      border-color: rgba(6, 182, 212, 0.4);
      box-shadow: 0 0 35px -10px rgba(6, 182, 212, 0.25);
    }
    .cert-card:hover {
      transform: translateY(-4px);
    }

    .cert-badge-top {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 12px;
      border-radius: var(--radius-full);
      font-size: 0.74rem;
      font-weight: 700;
      margin-bottom: 16px;
    }
    .cert-badge-top.cisco {
      background: rgba(6, 182, 212, 0.15);
      border: 1px solid rgba(6, 182, 212, 0.35);
      color: var(--cyan-400);
    }
    .cert-badge-top.lone {
      background: rgba(16, 185, 129, 0.15);
      border: 1px solid rgba(16, 185, 129, 0.35);
      color: var(--emerald-400);
    }

    .cert-title {
      font-family: var(--font-display);
      font-size: 1.5rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 6px;
    }

    .cert-issuer {
      font-size: 0.95rem;
      color: var(--text-muted);
      margin-bottom: 16px;
    }

    .cert-details-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
      margin-bottom: 20px;
      background: rgba(0, 0, 0, 0.25);
      padding: 14px;
      border-radius: var(--radius-md);
      font-size: 0.82rem;
    }

    .cert-det-lbl {
      color: var(--text-subtle);
      font-family: var(--font-mono);
      display: block;
      font-size: 0.72rem;
    }
    .cert-det-val {
      color: #ffffff;
      font-weight: 600;
      font-family: var(--font-mono);
    }

    .cert-desc {
      font-size: 0.88rem;
      color: #cbd5e1;
      line-height: 1.6;
      margin-bottom: 24px;
    }

    .cert-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 20px;
      border-radius: var(--radius-md);
      font-size: 0.86rem;
      font-weight: 600;
      background: rgba(6, 182, 212, 0.15);
      border: 1px solid rgba(6, 182, 212, 0.4);
      color: var(--cyan-400);
    }
    .cert-btn:hover {
      background: rgba(6, 182, 212, 0.25);
      box-shadow: 0 0 20px rgba(6, 182, 212, 0.3);
    }

    /* ==========================================================================
       PROJECTS SECTION & FILTERS
       ========================================================================== */
    .projects-section {
      padding: 60px 0;
    }

    .filter-tabs {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-bottom: 40px;
      flex-wrap: wrap;
    }

    .filter-btn {
      padding: 8px 20px;
      border-radius: var(--radius-full);
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--text-muted);
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--border-subtle);
    }
    .filter-btn:hover {
      color: #ffffff;
      background: rgba(255, 255, 255, 0.08);
    }
    .filter-btn.active {
      color: #060913;
      background: var(--cyan-400);
      border-color: var(--cyan-400);
      box-shadow: 0 0 20px rgba(6, 182, 212, 0.4);
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 32px;
    }

    .project-card {
      background: var(--bg-card);
      backdrop-filter: blur(14px);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-xl);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: all 0.25s ease;
    }
    .project-card:hover {
      border-color: var(--border-accent);
      transform: translateY(-4px);
      box-shadow: var(--shadow-glow);
    }

    .project-thumb-frame {
      position: relative;
      height: 230px;
      overflow: hidden;
      background: #0b1329;
    }

    .project-thumb {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transition: transform 0.4s ease;
    }
    .project-card:hover .project-thumb {
      transform: scale(1.05);
    }

    .project-metric-overlay {
      position: absolute;
      bottom: 12px;
      right: 12px;
      background: rgba(6, 9, 19, 0.85);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(16, 185, 129, 0.4);
      padding: 5px 12px;
      border-radius: var(--radius-full);
      font-family: var(--font-mono);
      font-size: 0.74rem;
      font-weight: 700;
      color: #6ee7b7;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    }

    .project-num-badge {
      position: absolute;
      top: 12px;
      left: 12px;
      background: rgba(6, 9, 19, 0.85);
      backdrop-filter: blur(8px);
      border: 1px solid var(--border-subtle);
      padding: 4px 10px;
      border-radius: var(--radius-md);
      font-family: var(--font-mono);
      font-size: 0.74rem;
      font-weight: 700;
      color: var(--cyan-400);
    }

    .project-body {
      padding: 24px;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }

    .project-title {
      font-family: var(--font-display);
      font-size: 1.28rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 8px;
    }

    .project-summary {
      font-size: 0.88rem;
      color: #cbd5e1;
      line-height: 1.6;
      margin-bottom: 16px;
    }

    .project-info-block {
      background: rgba(0, 0, 0, 0.2);
      border-radius: var(--radius-md);
      padding: 12px 16px;
      margin-bottom: 16px;
      font-size: 0.84rem;
    }
    .info-item {
      margin-bottom: 8px;
    }
    .info-item:last-child {
      margin-bottom: 0;
    }
    .info-lbl {
      color: var(--cyan-400);
      font-weight: 700;
      font-size: 0.78rem;
      display: block;
      margin-bottom: 2px;
      text-transform: uppercase;
      font-family: var(--font-mono);
    }
    .info-val {
      color: #cbd5e1;
      line-height: 1.45;
    }

    .project-steps {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 8px;
      margin-bottom: 20px;
    }

    .step-box {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-sm);
      padding: 8px;
      text-align: center;
    }
    .step-num {
      font-family: var(--font-mono);
      font-size: 0.65rem;
      color: var(--cyan-400);
      font-weight: 700;
      display: block;
    }
    .step-name {
      font-size: 0.72rem;
      font-weight: 600;
      color: #f1f5f9;
      display: block;
    }

    .project-tools {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-bottom: 20px;
    }

    .tool-chip {
      font-family: var(--font-mono);
      font-size: 0.72rem;
      padding: 3px 9px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-sm);
      color: #94a3b8;
    }

    .project-footer {
      margin-top: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 1px solid var(--border-subtle);
      padding-top: 14px;
    }

    .project-link-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 0.82rem;
      font-weight: 600;
      color: var(--cyan-400);
    }
    .project-link-btn:hover {
      text-decoration: underline;
    }

    /* ==========================================================================
       SKILLS MATRIX & DOMAINS
       ========================================================================== */
    .skills-section {
      padding: 60px 0;
    }

    .domains-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
      margin-bottom: 48px;
    }

    .domain-card {
      background: var(--bg-card);
      backdrop-filter: blur(12px);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-xl);
      padding: 28px;
      transition: all 0.2s ease;
    }
    .domain-card:hover {
      border-color: var(--border-accent);
      transform: translateY(-3px);
    }

    .domain-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }

    .domain-root-id {
      font-family: var(--font-mono);
      font-size: 0.72rem;
      color: var(--cyan-400);
      font-weight: 700;
      text-transform: uppercase;
    }

    .domain-badge {
      font-family: var(--font-mono);
      font-size: 0.72rem;
      padding: 3px 10px;
      border-radius: var(--radius-full);
      background: rgba(6, 182, 212, 0.12);
      border: 1px solid rgba(6, 182, 212, 0.3);
      color: var(--cyan-400);
    }

    .domain-title {
      font-family: var(--font-display);
      font-size: 1.25rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 8px;
    }

    .domain-summary {
      font-size: 0.86rem;
      color: var(--text-muted);
      margin-bottom: 20px;
      line-height: 1.5;
    }

    .domain-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .domain-item {
      display: flex;
      flex-direction: column;
      gap: 2px;
      padding-bottom: 8px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.04);
    }
    .domain-item:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }

    .domain-item-name {
      font-size: 0.88rem;
      font-weight: 600;
      color: #f1f5f9;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .domain-item-name::before {
      content: '✔';
      color: var(--emerald-400);
      font-size: 0.75rem;
    }

    .domain-item-desc {
      font-size: 0.8rem;
      color: #94a3b8;
      padding-left: 16px;
    }

    /* Hands-on vs Working Knowledge */
    .skills-breakdown-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
    }

    .breakdown-card {
      background: rgba(11, 17, 36, 0.7);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-lg);
      padding: 24px;
    }

    .breakdown-head {
      margin-bottom: 16px;
    }
    .breakdown-title {
      font-family: var(--font-display);
      font-size: 1.15rem;
      font-weight: 700;
      color: #ffffff;
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 4px;
    }
    .breakdown-subtitle {
      font-size: 0.8rem;
      color: var(--text-muted);
    }

    .skill-pills {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .skill-pill {
      font-size: 0.82rem;
      padding: 6px 12px;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-md);
      color: #cbd5e1;
    }
    .skill-pill.hands-on {
      border-left: 3px solid var(--cyan-400);
    }
    .skill-pill.working {
      border-left: 3px solid var(--emerald-400);
    }

    /* ==========================================================================
       CAREER DOCUMENTS
       ========================================================================== */
    .docs-section {
      padding: 60px 0;
    }

    .docs-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }

    .doc-card {
      background: var(--bg-card);
      backdrop-filter: blur(12px);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-xl);
      padding: 28px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: all 0.2s ease;
    }
    .doc-card:hover {
      border-color: var(--border-accent);
      transform: translateY(-3px);
    }

    .doc-icon {
      font-size: 2rem;
      margin-bottom: 16px;
      display: inline-block;
    }

    .doc-title {
      font-family: var(--font-display);
      font-size: 1.2rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 8px;
    }

    .doc-desc {
      font-size: 0.85rem;
      color: #94a3b8;
      line-height: 1.55;
      margin-bottom: 24px;
    }

    .doc-actions {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .doc-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 10px 16px;
      border-radius: var(--radius-md);
      font-size: 0.84rem;
      font-weight: 600;
    }
    .doc-btn.primary {
      background: linear-gradient(135deg, var(--cyan-500), var(--blue-500));
      color: #060913;
    }
    .doc-btn.secondary {
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid var(--border-subtle);
      color: #ffffff;
    }
    .doc-btn:hover {
      opacity: 0.92;
      transform: translateY(-1px);
    }

    /* ==========================================================================
       CONTACT & FAST-TRACK DISPATCH
       ========================================================================== */
    .contact-section {
      padding: 60px 0 80px;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
    }

    .contact-card {
      background: var(--bg-card);
      backdrop-filter: blur(14px);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-xl);
      padding: 32px;
    }

    .contact-lead {
      font-family: var(--font-display);
      font-size: 1.5rem;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 12px;
    }

    .contact-sub {
      font-size: 0.9rem;
      color: var(--text-muted);
      line-height: 1.6;
      margin-bottom: 24px;
    }

    .contact-details {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .contact-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-md);
    }

    .contact-item-left {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .contact-item-icon {
      font-size: 1.25rem;
    }

    .contact-item-title {
      font-size: 0.74rem;
      color: var(--text-subtle);
      text-transform: uppercase;
      font-family: var(--font-mono);
      display: block;
    }

    .contact-item-val {
      font-size: 0.92rem;
      font-weight: 600;
      color: #ffffff;
    }

    .copy-btn {
      padding: 5px 10px;
      border-radius: var(--radius-sm);
      background: rgba(255, 255, 255, 0.08);
      font-size: 0.75rem;
      color: var(--cyan-400);
      font-family: var(--font-mono);
    }
    .copy-btn:hover {
      background: rgba(6, 182, 212, 0.2);
    }

    .composer-form {
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .form-label {
      font-size: 0.8rem;
      font-weight: 600;
      color: #cbd5e1;
      font-family: var(--font-mono);
    }

    .form-input, .form-select, .form-textarea {
      width: 100%;
      background: rgba(11, 17, 36, 0.9);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-md);
      padding: 10px 14px;
      color: #ffffff;
      font-family: inherit;
      font-size: 0.88rem;
    }
    .form-input:focus, .form-select:focus, .form-textarea:focus {
      outline: none;
      border-color: var(--cyan-500);
      box-shadow: 0 0 12px rgba(6, 182, 212, 0.25);
    }

    /* ==========================================================================
       ATS RESUME MODAL
       ========================================================================== */
    .modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(10px);
      display: none;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      padding: 20px;
    }
    .modal-overlay.open {
      display: flex;
      animation: fadeIn 0.2s ease;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .modal-window {
      background: #0d1527;
      border: 1px solid var(--border-accent);
      border-radius: var(--radius-xl);
      width: 100%;
      max-width: 820px;
      max-height: 90vh;
      display: flex;
      flex-direction: column;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 40px rgba(6, 182, 212, 0.3);
      animation: slideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }

    @keyframes slideUp {
      from { transform: translateY(20px) scale(0.97); }
      to { transform: translateY(0) scale(1); }
    }

    .modal-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 18px 24px;
      border-bottom: 1px solid var(--border-subtle);
    }

    .modal-head-title {
      font-family: var(--font-display);
      font-size: 1.15rem;
      font-weight: 700;
      color: #ffffff;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .modal-head-actions {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .modal-close-btn {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.08);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #94a3b8;
      font-size: 1.1rem;
    }
    .modal-close-btn:hover {
      background: rgba(255, 255, 255, 0.15);
      color: #ffffff;
    }

    .modal-body {
      padding: 24px;
      overflow-y: auto;
      font-family: var(--font-mono);
      font-size: 0.82rem;
      line-height: 1.7;
      color: #cbd5e1;
      background: #080c18;
      user-select: text;
    }

    .modal-foot {
      padding: 16px 24px;
      border-top: 1px solid var(--border-subtle);
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #0b1120;
      border-radius: 0 0 var(--radius-xl) var(--radius-xl);
    }

    /* Toast */
    .toast {
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: #0d1a33;
      border: 1px solid var(--cyan-400);
      color: #ffffff;
      padding: 12px 20px;
      border-radius: var(--radius-md);
      font-size: 0.88rem;
      font-weight: 600;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5), 0 0 20px var(--cyan-glow);
      display: none;
      align-items: center;
      gap: 10px;
      z-index: 2000;
      animation: slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    @keyframes slideInRight {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }

    /* Footer */
    footer {
      border-top: 1px solid var(--border-subtle);
      padding: 40px 0;
      font-size: 0.85rem;
      color: var(--text-subtle);
      text-align: center;
      background: #04070e;
    }

    .footer-inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }

    /* ==========================================================================
       RESPONSIVE DESIGN
       ========================================================================== */
    @media (max-width: 1024px) {
      .hero-grid {
        grid-template-columns: 1fr;
        text-align: center;
      }
      .hero-eyebrows, .hero-actions, .hero-socials {
        justify-content: center;
      }
      .hero-summary {
        margin: 0 auto 24px;
      }
      .metrics-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      .projects-grid, .domains-grid, .certs-grid, .skills-breakdown-grid, .contact-grid {
        grid-template-columns: 1fr;
      }
      .docs-grid {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 768px) {
      .recruiter-bar-inner {
        flex-direction: column;
        align-items: flex-start;
      }
      .nav-links {
        display: none;
      }
      .hero-title {
        font-size: 2.3rem;
      }
      .metrics-grid {
        grid-template-columns: 1fr;
      }
    }

    /* Print styles */
    @media print {
      body {
        background: #ffffff !important;
        color: #000000 !important;
      }
      .recruiter-bar, .navbar, .hero-visual, .filter-tabs, .btn-primary, .btn-secondary, .ticker-wrap, footer {
        display: none !important;
      }
    }
  </style>
</head>
<body>
  <div id="reading-progress"></div>

  <!-- 1. TOP RECRUITER BAR -->
  <aside class="recruiter-bar" aria-label="Recruiter fast-track header">
    <div class="container recruiter-bar-inner">
      <div class="recruiter-status">
        <span class="pulse-dot" aria-hidden="true"></span>
        <span><strong>UAE Availability:</strong> In Baniyas West, Abu Dhabi • Immediately Available Across Abu Dhabi &amp; Dubai (0 Days Notice • Visit Visa Transfer)</span>
      </div>

      <div class="recruiter-actions">
        <a href="https://wa.me/971564357994?text=Hi%20Athul,%20I%20reviewed%20your%20IT%20support%20portfolio%20and%20would%20like%20to%20connect%20regarding%20UAE%20opportunities%20in%20Abu%20Dhabi%20or%20Dubai." target="_blank" rel="noopener noreferrer" class="rec-btn whatsapp" title="Chat directly on WhatsApp">
          <span>WhatsApp Direct</span>
        </a>
        <button type="button" class="rec-btn resume" onclick="openResumeModal()" title="Preview ATS Resume">
          <span>ATS Resume</span>
        </button>
        <a href="mailto:athulkrishna.os.work@gmail.com?subject=IT%20Support%20Opportunity%20-%20UAE" class="rec-btn" title="Send direct email">
          <span>Email</span>
        </a>
        <a href="tel:+971564357994" class="rec-btn" title="Call directly">
          <span>Call</span>
        </a>
      </div>
    </div>
  </aside>

  <!-- 2. MAIN NAVBAR -->
  <header class="navbar">
    <div class="container nav-inner">
      <a href="#home" class="brand-logo">
        <div class="logo-badge">AK</div>
        <div class="brand-text">
          <span class="brand-name">Athul Krishna O S</span>
          <span class="brand-tag">CCNA #CSCO15240575</span>
        </div>
      </a>

      <nav>
        <ul class="nav-links">
          <li><a href="#experience" class="nav-link">Experience</a></li>
          <li><a href="#certificates" class="nav-link">Certifications</a></li>
          <li><a href="#projects" class="nav-link">Projects</a></li>
          <li><a href="#skills" class="nav-link">Skills</a></li>
          <li><a href="#documents" class="nav-link">Documents</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
      </nav>

      <a href="#contact" class="nav-cta">Hire Immediately</a>
    </div>
  </header>

  <!-- 3. HERO SECTION -->
  <section id="home" class="hero">
    <div class="container">
      <div class="hero-grid">
        <!-- Left: Pitch & Creds -->
        <div class="hero-content">
          <div class="hero-eyebrows">
            <span class="badge-ccna">🌐 CISCO CCNA #CSCO15240575</span>
            <span class="badge-region">
              <span class="pulse-dot" style="width: 7px; height: 7px;" aria-hidden="true"></span>
              Baniyas West, Abu Dhabi &amp; Dubai (0 Days Notice)
            </span>
          </div>

          <h1 class="hero-title">Athul Krishna O S</h1>

          <div class="hero-role-block">
            <span class="hero-role">CCNA-Certified IT Support &amp; Network Engineer</span>
            <span class="hero-subrole">Desktop Break-Fix • Cisco Routing &amp; Switching • Windows Fleet Rollout • Service Desk SLA</span>
          </div>

          <p class="hero-summary">
            CCNA-certified IT Support Engineer with <strong>4+ years of hands-on experience</strong> across desktop and laptop hardware break-fix, Windows Server Active Directory administration, Windows 10/11 fleet provisioning, Cisco LAN switching, and high-volume service desk operations. Proven track record deploying 10-PC corporate workstations, terminating Cat6 cabling with 100% continuity, deploying 16-channel 4K CCTV/NVR networks, and cutting PC provisioning time from 45 to 8 minutes with PowerShell. Currently located in Baniyas West, Abu Dhabi on a Visit Visa with verified original credentials; ready for immediate on-site employment across Abu Dhabi and Dubai on 0 days notice.
          </p>

          <div class="hero-availability-box">
            <span class="pulse-dot" aria-hidden="true"></span>
            <span>Currently in Baniyas West, Abu Dhabi · Available for Immediate On-Site Roles &amp; In-Country Visa Transfer</span>
          </div>

          <div class="hero-actions">
            <button type="button" class="btn-primary" onclick="openResumeModal()">
              <span>View ATS Resume Summary</span>
            </button>
            <a href="https://wa.me/971564357994?text=Hi%20Athul,%20I%20reviewed%20your%20IT%20support%20portfolio%20and%20would%20like%20to%20connect%20regarding%20UAE%20opportunities%20in%20Abu%20Dhabi%20or%20Dubai." target="_blank" rel="noopener noreferrer" class="btn-secondary btn-whatsapp">
              <span>WhatsApp Direct</span>
            </a>
            <a href="mailto:athulkrishna.os.work@gmail.com" class="btn-secondary">
              <span>Email Directly</span>
            </a>
          </div>

          <div class="hero-socials">
            <a href="https://www.linkedin.com/in/athulkrishna-os" target="_blank" rel="noopener noreferrer" class="hero-social-link">
              <span>LinkedIn Profile ↗</span>
            </a>
            <span>•</span>
            <a href="https://github.com/Code-X2026/athulkrishna-os" target="_blank" rel="noopener noreferrer" class="hero-social-link">
              <span>GitHub Repository ↗</span>
            </a>
            <span>•</span>
            <a href="https://athulkrishna-it.netlify.app" target="_blank" rel="noopener noreferrer" class="hero-social-link">
              <span>Live Portfolio ↗</span>
            </a>
          </div>
        </div>

        <!-- Right: 3D Interactive Card with Embedded Real Photo -->
        <div class="hero-visual">
          <div class="tilt-card-container" id="tiltContainer">
            <div class="tilt-card" id="tiltCard">
              <div class="card-hud-top">
                <a href="https://www.cisco.com/go/verifycertificate" target="_blank" rel="noopener noreferrer" class="hud-cisco-id" title="Verify on official Cisco portal">
                  CISCO ID: #CSCO15240575 ↗
                </a>
                <span class="hud-verified-pill">
                  <span class="pulse-dot" style="width: 6px; height: 6px;"></span> Verified
                </span>
              </div>

              <div class="hud-avatar-frame">
                <img src="$b64Profile" alt="Athul Krishna O S" class="hud-avatar-img" />
              </div>

              <a href="https://www.cisco.com/go/verifycertificate" target="_blank" rel="noopener noreferrer" class="card-hud-bottom" title="Verify Official CCNA Credential">
                <div>
                  <span class="hud-bottom-title">CISCO CCNA CERTIFIED ↗</span>
                  <span class="hud-bottom-sub">Routing &amp; Switching • Valid 2026–2029</span>
                </div>
                <span class="hud-check-badge">✓</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Verified Metric Highlights -->
      <div class="metrics-grid">
        <div class="metric-card">
          <span class="metric-badge">VERIFIED TRACK RECORD</span>
          <div class="metric-val">4+ Years</div>
          <span class="metric-lbl">Hands-on IT Support</span>
          <p class="metric-det">Desktop diagnostics, hardware break-fix &amp; service desk operations</p>
        </div>

        <div class="metric-card">
          <span class="metric-badge">OFFICIAL CREDENTIAL</span>
          <div class="metric-val">CCNA</div>
          <span class="metric-lbl">Cisco Certified</span>
          <p class="metric-det">Routing, switching &amp; network infrastructure (#CSCO15240575)</p>
        </div>

        <div class="metric-card">
          <span class="metric-badge">UAE AVAILABILITY</span>
          <div class="metric-val">0 Days</div>
          <span class="metric-lbl">Immediate Notice Period</span>
          <p class="metric-det">Baniyas West, Abu Dhabi (MOHRE/Tasheel transfer ready)</p>
        </div>

        <div class="metric-card">
          <span class="metric-badge">SLA COMPLIANCE</span>
          <div class="metric-val">98%</div>
          <span class="metric-lbl">Service Desk Adherence</span>
          <p class="metric-det">Supervised 30+ weekly tickets with sub-24-hour average resolution</p>
        </div>
      </div>
    </div>
  </section>

  <!-- TECH TICKER MARQUEE -->
  <div class="ticker-wrap" aria-hidden="true">
    <div class="ticker-content">
      <div class="ticker-item"><span>✦</span> Cisco IOS &amp; CCNA Switching</div>
      <div class="ticker-item"><span>✦</span> Cat6 T568B Structured Cabling</div>
      <div class="ticker-item"><span>✦</span> Windows 10/11 Fleet Provisioning</div>
      <div class="ticker-item"><span>✦</span> Active Directory Domain Join &amp; GPO</div>
      <div class="ticker-item"><span>✦</span> PowerShell 7 &amp; WinGet Automation</div>
      <div class="ticker-item"><span>✦</span> 16-Channel 4K CCTV &amp; PoE Networks</div>
      <div class="ticker-item"><span>✦</span> ManageEngine ServiceDesk Plus (98% SLA)</div>
      <div class="ticker-item"><span>✦</span> Desktop &amp; Laptop Component Break-Fix</div>
      <div class="ticker-item"><span>✦</span> Dedicated Tally Prime Server Setup</div>
      <div class="ticker-item"><span>✦</span> Cisco IOS &amp; CCNA Switching</div>
      <div class="ticker-item"><span>✦</span> Cat6 T568B Structured Cabling</div>
      <div class="ticker-item"><span>✦</span> Windows 10/11 Fleet Provisioning</div>
      <div class="ticker-item"><span>✦</span> Active Directory Domain Join &amp; GPO</div>
      <div class="ticker-item"><span>✦</span> PowerShell 7 &amp; WinGet Automation</div>
    </div>
  </div>

  <!-- 4. WORK EXPERIENCE & PROGRESSION -->
  <section id="experience" class="experience-section">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Career History</span>
        <h2 class="section-title">Professional Experience &amp; Progression</h2>
        <p class="section-desc">4+ years of continuous hands-on field operations, internal promotions to leadership, and demonstrated service excellence.</p>
      </div>

      <div class="timeline">
        <!-- Item 1: Wings IT Solutions -->
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-card">
            <div class="timeline-header">
              <div class="timeline-title-group">
                <h3>Network &amp; CCTV Infrastructure Specialist</h3>
                <span class="timeline-company">Wings IT Solutions — Kerala, India</span>
              </div>
              <div class="timeline-badges">
                <span class="badge-period">Jun 2026 – Aug 2026</span>
                <span class="badge-period" style="color: var(--cyan-400);">Field Infrastructure</span>
              </div>
            </div>
            <p class="timeline-desc">On-site structured cabling, commercial IP surveillance grids, and network switch deployments.</p>
            <ul class="timeline-tasks">
              <li>Deployed and configured 16-channel 4K IP security cameras, PoE switches, and NVR storage schedules with 30-day retention and zero packet loss.</li>
              <li>Routed and terminated Cat6 structured cabling with 24-port patch panel punch-down adhering to T568B standards, verified with 100% tester pass rate.</li>
              <li>Mounted wireless access points with isolated SSIDs, configured static IP subnets, DHCP scope reservations, and gateway routing for business office LANs.</li>
            </ul>
          </div>
        </div>

        <!-- Item 2: L-One Chip Level Solutions -->
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-card">
            <div class="timeline-header">
              <div class="timeline-title-group">
                <h3>Laptop Servicing &amp; Hardware Diagnostics Specialist</h3>
                <span class="timeline-company">L-One Chip Level Solutions — Kerala, India</span>
              </div>
              <div class="timeline-badges">
                <span class="badge-period">Apr 2026 – May 2026</span>
                <span class="badge-period" style="color: var(--emerald-400);">Practical Program</span>
              </div>
            </div>
            <p class="timeline-desc">Intensive hands-on training in laptop teardowns, motherboard thermal servicing, and component fault isolation.</p>
            <ul class="timeline-tasks">
              <li>Conducted complete chassis teardowns, thermal compound repasting, and fan overhauls across 40+ laptops (Dell, HP, Lenovo, ASUS) resolving overheating faults.</li>
              <li>Executed DDR4/DDR5 RAM expansions and NVMe M.2 SSD installations, eliminating system bottlenecks and resolving storage boot failures.</li>
              <li>Performed clean Windows 10/11 OS provisioning, UEFI/BIOS optimization, driver staging, and 24-hour hardware burn-in stress tests.</li>
            </ul>
          </div>
        </div>

        <!-- Item 3: Grand Infotech - Lead -->
        <div class="timeline-item promoted">
          <div class="timeline-dot"></div>
          <div class="timeline-card">
            <div class="timeline-header">
              <div class="timeline-title-group">
                <h3>IT Support Lead &amp; Service Coordinator</h3>
                <span class="timeline-company">Grand Infotech — Kerala, India</span>
              </div>
              <div class="timeline-badges">
                <span class="badge-lead">PROMOTED TO TEAM LEAD</span>
                <span class="badge-period">Jan 2025 – Apr 2026</span>
              </div>
            </div>
            <div class="progression-banner">
              ★ <strong>Internal Career Progression:</strong> Promoted to Lead after delivering consistent 95%+ first-fix rate and superior client satisfaction as Senior Technician.
            </div>
            <p class="timeline-desc">Managed daily service desk operations, technician dispatch, SLA compliance, and customer escalations.</p>
            <ul class="timeline-tasks">
              <li>Supervised service desk operations managing 30+ weekly hardware and network tickets using ManageEngine ServiceDesk Plus with a 98% SLA adherence rate.</li>
              <li>Led a team of 3 technicians, balancing job queues, technical escalations, and turnaround times to maintain a sub-24-hour resolution average.</li>
              <li>Engineered Helious Tracker repair tracking workflows, cutting customer status follow-up calls by ~60% and providing real-time job visibility.</li>
            </ul>
          </div>
        </div>

        <!-- Item 4: Grand Infotech - Senior Tech -->
        <div class="timeline-item promoted">
          <div class="timeline-dot"></div>
          <div class="timeline-card">
            <div class="timeline-header">
              <div class="timeline-title-group">
                <h3>Senior IT Support Technician</h3>
                <span class="timeline-company">Grand Infotech — Kerala, India</span>
              </div>
              <div class="timeline-badges">
                <span class="badge-lead">PROMOTED TO SENIOR TECH</span>
                <span class="badge-period">2023 – 2025</span>
              </div>
            </div>
            <p class="timeline-desc">Tier-2 troubleshooting, hardware break-fix, workstation deployments, and automation scripting.</p>
            <ul class="timeline-tasks">
              <li>Diagnosed and resolved hardware, OS, and network faults across 15–20 customer systems weekly with a >90% first-contact resolution rate.</li>
              <li>Developed Nexus Prime PowerShell scripts utilizing WinGet, cutting routine workstation software provisioning time from 45 min to under 8 min per PC.</li>
              <li>Led 10-PC corporate office rollouts including custom workstation assembly, Windows 11 staging, domain join, SMB shares, and network printer mapping.</li>
            </ul>
          </div>
        </div>

        <!-- Item 5: Grand Infotech - Foundation -->
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-card">
            <div class="timeline-header">
              <div class="timeline-title-group">
                <h3>IT Support Technician</h3>
                <span class="timeline-company">Grand Infotech — Kerala, India</span>
              </div>
              <div class="timeline-badges">
                <span class="badge-period">2022 – 2023</span>
                <span class="badge-period">Career Foundation</span>
              </div>
            </div>
            <p class="timeline-desc">Custom desktop assembly, Windows OS installation, and on-site client technical support.</p>
            <ul class="timeline-tasks">
              <li>Assembled, bench-tested, and delivered 50+ custom desktop workstations for commercial and retail clients with zero out-of-box hardware defects.</li>
              <li>Installed and configured Windows operating systems, productivity software, antivirus, and device drivers according to client specifications.</li>
              <li>Assisted on-site with local Cat6 cabling, unmanaged switch connections, and multifunction network printer troubleshooting.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 5. CERTIFICATIONS -->
  <section id="certificates" class="certs-section">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Verified Credentials</span>
        <h2 class="section-title">Official Certifications &amp; Training</h2>
        <p class="section-desc">Industry-standard networking credentials verified via official vendor validation portals.</p>
      </div>

      <div class="certs-grid">
        <!-- Cisco CCNA Card -->
        <div class="cert-card ccna">
          <span class="cert-badge-top cisco">OFFICIAL CISCO CERTIFICATION</span>
          <h3 class="cert-title">Cisco Certified Network Associate (CCNA)</h3>
          <p class="cert-issuer">Cisco Systems • Credential ID: CSCO15240575</p>

          <div class="cert-details-grid">
            <div>
              <span class="cert-det-lbl">ISSUE DATE</span>
              <span class="cert-det-val">June 23, 2026</span>
            </div>
            <div>
              <span class="cert-det-lbl">VALID UNTIL</span>
              <span class="cert-det-val">June 23, 2029</span>
            </div>
            <div>
              <span class="cert-det-lbl">CISCO ID</span>
              <span class="cert-det-val">CSCO15240575</span>
            </div>
            <div>
              <span class="cert-det-lbl">VERIFICATION CODE</span>
              <span class="cert-det-val">1b57ceb3c4cd...</span>
            </div>
          </div>

          <p class="cert-desc">
            Validates core networking competencies including IP connectivity, routing protocols, Ethernet switching, VLANs (802.1Q), network security fundamentals, subnetting, DHCP/DNS services, and basic IPsec/VPN concepts.
          </p>

          <a href="https://www.cisco.com/go/verifycertificate" target="_blank" rel="noopener noreferrer" class="cert-btn">
            <span>Verify on Official Cisco Portal ↗</span>
          </a>
        </div>

        <!-- L-One Practical Card -->
        <div class="cert-card">
          <span class="cert-badge-top lone">HANDS-ON TECHNICAL TRAINING</span>
          <h3 class="cert-title">Laptop Servicing &amp; Upgradation Practical Training</h3>
          <p class="cert-issuer">L-One Chip Level Solutions • Completed May 2026</p>

          <div class="cert-details-grid">
            <div>
              <span class="cert-det-lbl">COMPLETION</span>
              <span class="cert-det-val">05 May 2026</span>
            </div>
            <div>
              <span class="cert-det-lbl">PROGRAM TYPE</span>
              <span class="cert-det-val">Hardware Lab</span>
            </div>
          </div>

          <p class="cert-desc">
            Intensive 1-month hands-on practical training covering laptop chassis disassembly, component-level fault isolation, motherboard thermal repasting, RAM/SSD upgrades, and 24-hour hardware burn-in stress testing across Dell, HP, Lenovo, and ASUS machines.
          </p>

          <span class="cert-badge-top lone" style="margin-top: 10px;">Verified Practical Competency</span>
        </div>
      </div>
    </div>
  </section>

  <!-- 6. VERIFIED PROJECTS GALLERY -->
  <section id="projects" class="projects-section">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Field Work</span>
        <h2 class="section-title">Featured IT Implementations &amp; Projects</h2>
        <p class="section-desc">Authentic on-site network installations, automation scripts, and workstation fleet deployments with documented architecture and measured outcomes.</p>
      </div>

      <!-- Filter Tabs -->
      <div class="filter-tabs">
        <button type="button" class="filter-btn active" onclick="filterProjects('all', this)">All Projects (6)</button>
        <button type="button" class="filter-btn" onclick="filterProjects('automation', this)">Automation Tools (2)</button>
        <button type="button" class="filter-btn" onclick="filterProjects('networking', this)">Networking &amp; CCTV (2)</button>
        <button type="button" class="filter-btn" onclick="filterProjects('systems', this)">Fleet &amp; Servers (2)</button>
      </div>

      <div class="projects-grid">
        <!-- Project 1: Nexus Prime -->
        <div class="project-card" data-category="automation">
          <div class="project-thumb-frame">
            <span class="project-num-badge">PROJECT 01 · AUTOMATION</span>
            <img src="$b64Nexus" alt="Nexus Prime Workstation Engine" class="project-thumb" />
            <span class="project-metric-overlay">⚡ 82% Setup Time Reduction</span>
          </div>
          <div class="project-body">
            <h3 class="project-title">Nexus Prime — Zero-Touch Workstation Engine</h3>
            <p class="project-summary">A modular PowerShell 7 automation toolkit that orchestrates the Windows Package Manager (WinGet) to silently install standardized software baselines and apply system configuration defaults without manual intervention.</p>
            
            <div class="project-info-block">
              <div class="info-item">
                <span class="info-lbl">The Problem:</span>
                <span class="info-val">Manual software installations and configurations on freshly imaged PCs took 45 minutes per workstation with repetitive manual downloads.</span>
              </div>
              <div class="info-item">
                <span class="info-lbl">What I Did:</span>
                <span class="info-val">Authored an auto-elevating PowerShell 7 deployment suite paired with a C# launcher that silently installs applications via WinGet CLI and outputs verified audit logs.</span>
              </div>
            </div>

            <div class="project-steps">
              <div class="step-box"><span class="step-num">01</span><span class="step-name">Elevation</span></div>
              <div class="step-box"><span class="step-num">02</span><span class="step-name">WinGet Ingest</span></div>
              <div class="step-box"><span class="step-num">03</span><span class="step-name">Silent Install</span></div>
              <div class="step-box"><span class="step-num">04</span><span class="step-name">Audit Log</span></div>
            </div>

            <div class="project-tools">
              <span class="tool-chip">PowerShell 7</span>
              <span class="tool-chip">WinGet CLI</span>
              <span class="tool-chip">Windows 11</span>
              <span class="tool-chip">C# Launcher</span>
              <span class="tool-chip">Batch Script</span>
            </div>

            <div class="project-footer">
              <span style="font-size: 0.78rem; color: var(--emerald-400);">✔ Cut setup from 45 to &lt;8 min</span>
              <a href="https://github.com/Code-X2026/athulkrishna-os/tree/main/05_GitHub/nexus-prime" target="_blank" rel="noopener noreferrer" class="project-link-btn">
                GitHub Repo ↗
              </a>
            </div>
          </div>
        </div>

        <!-- Project 2: Helious Tracker -->
        <div class="project-card" data-category="automation">
          <div class="project-thumb-frame">
            <span class="project-num-badge">PROJECT 02 · SERVICE DESK</span>
            <img src="$b64Helious" alt="Helious Tracker Service Desk" class="project-thumb" />
            <span class="project-metric-overlay">📊 60% Fewer Inquiry Calls</span>
          </div>
          <div class="project-body">
            <h3 class="project-title">Helious Tracker — Service Desk &amp; WhatsApp Dispatch</h3>
            <p class="project-summary">A centralized repair queue management and customer dispatch workflow developed for service desk operations to track repair stages, technician workloads, and automated milestone notifications.</p>

            <div class="project-info-block">
              <div class="info-item">
                <span class="info-lbl">The Problem:</span>
                <span class="info-val">Paper-based slips and manual telephone follow-ups led to queue confusion and frequent customer status check phone calls during multi-day repairs.</span>
              </div>
              <div class="info-item">
                <span class="info-lbl">What I Did:</span>
                <span class="info-val">Designed a central IT repair tracking dashboard mapping ticket lifecycles and integrated WhatsApp Business API webhook triggers for real-time customer status alerts.</span>
              </div>
            </div>

            <div class="project-steps">
              <div class="step-box"><span class="step-num">01</span><span class="step-name">Intake</span></div>
              <div class="step-box"><span class="step-num">02</span><span class="step-name">Queue Triage</span></div>
              <div class="step-box"><span class="step-num">03</span><span class="step-name">Webhook</span></div>
              <div class="step-box"><span class="step-num">04</span><span class="step-name">QA Handover</span></div>
            </div>

            <div class="project-tools">
              <span class="tool-chip">JavaScript/React</span>
              <span class="tool-chip">Node.js</span>
              <span class="tool-chip">WhatsApp API</span>
              <span class="tool-chip">ServiceDesk Plus</span>
            </div>

            <div class="project-footer">
              <span style="font-size: 0.78rem; color: var(--emerald-400);">✔ Notification delay &lt;30 min</span>
              <a href="https://github.com/Code-X2026/athulkrishna-os/tree/main/05_GitHub/helious-pro" target="_blank" rel="noopener noreferrer" class="project-link-btn">
                GitHub Repo ↗
              </a>
            </div>
          </div>
        </div>

        <!-- Project 3: 10-PC Accounting Firm Deployment -->
        <div class="project-card" data-category="systems">
          <div class="project-thumb-frame">
            <span class="project-num-badge">PROJECT 03 · FLEET ROLLOUT</span>
            <img src="$b64Accounting" alt="10-PC Accounting Firm Deployment" class="project-thumb" />
            <span class="project-metric-overlay">💻 0 Downtime · 10 Desks</span>
          </div>
          <div class="project-body">
            <h3 class="project-title">10-PC Corporate Accounting Firm Deployment</h3>
            <p class="project-summary">End-to-end hardware assembly, operating system provisioning, network integration, and shared resource mapping for a 10-seat corporate accounting office.</p>

            <div class="project-info-block">
              <div class="info-item">
                <span class="info-lbl">The Problem:</span>
                <span class="info-val">Accounting firm needed 10 high-reliability workstations assembled, on-site installed, and connected to shared printers/SMB without disrupting operations.</span>
              </div>
              <div class="info-item">
                <span class="info-lbl">What I Did:</span>
                <span class="info-val">Assembled 10 custom desktop PCs, performed clean Windows 11 staging, configured static IP subnets, routed Cat6 cabling, and mapped SMB shares and network printers.</span>
              </div>
            </div>

            <div class="project-steps">
              <div class="step-box"><span class="step-num">01</span><span class="step-name">Bench Assembly</span></div>
              <div class="step-box"><span class="step-num">02</span><span class="step-name">OS Staging</span></div>
              <div class="step-box"><span class="step-num">03</span><span class="step-name">Cat6 Routing</span></div>
              <div class="step-box"><span class="step-num">04</span><span class="step-name">SMB Mapping</span></div>
            </div>

            <div class="project-tools">
              <span class="tool-chip">Windows 11 Pro</span>
              <span class="tool-chip">Core i5 Hardware</span>
              <span class="tool-chip">Cat6 Cabling</span>
              <span class="tool-chip">SMB Shares</span>
              <span class="tool-chip">MFP Printers</span>
            </div>

            <div class="project-footer">
              <span style="font-size: 0.78rem; color: var(--emerald-400);">✔ Zero business downtime achieved</span>
              <a href="https://github.com/Code-X2026/athulkrishna-os/blob/main/07_Projects/01_Accounting_Firm_10PC_Deployment.md" target="_blank" rel="noopener noreferrer" class="project-link-btn">
                Runbook Docs ↗
              </a>
            </div>
          </div>
        </div>

        <!-- Project 4: School Rack Cabling -->
        <div class="project-card" data-category="networking">
          <div class="project-thumb-frame">
            <span class="project-num-badge">PROJECT 04 · STRUCTURED CABLING</span>
            <img src="$b64SchoolRack" alt="School IT Lab Network Rack" class="project-thumb" />
            <span class="project-metric-overlay">🔌 100% Continuity Pass</span>
          </div>
          <div class="project-body">
            <h3 class="project-title">School IT Lab Network Rack Cabling Installation</h3>
            <p class="project-summary">Rack mounting, structured Cat6 cabling, keystone patch panel termination, and Gigabit switch installation for an educational computer laboratory.</p>

            <div class="project-info-block">
              <div class="info-item">
                <span class="info-lbl">The Problem:</span>
                <span class="info-val">A school IT lab suffered from tangled, unlabelled Ethernet cables running across floors, causing intermittent link drops and physical trip hazards.</span>
              </div>
              <div class="info-item">
                <span class="info-lbl">What I Did:</span>
                <span class="info-val">Mounted a 6U wall cabinet, structured 24 Cat6 drops through PVC trunking, terminated keystone jacks on a 24-port patch panel adhering to T568B, and verified 100% continuity.</span>
              </div>
            </div>

            <div class="project-steps">
              <div class="step-box"><span class="step-num">01</span><span class="step-name">6U Wall Mount</span></div>
              <div class="step-box"><span class="step-num">02</span><span class="step-name">PVC Trunking</span></div>
              <div class="step-box"><span class="step-num">03</span><span class="step-name">T568B Punch</span></div>
              <div class="step-box"><span class="step-num">04</span><span class="step-name">Continuity QA</span></div>
            </div>

            <div class="project-tools">
              <span class="tool-chip">6U Wall Cabinet</span>
              <span class="tool-chip">24-Port Panel</span>
              <span class="tool-chip">Cat6 UTP</span>
              <span class="tool-chip">T568B Standards</span>
              <span class="tool-chip">Gigabit Switch</span>
            </div>

            <div class="project-footer">
              <span style="font-size: 0.78rem; color: var(--emerald-400);">✔ Restored 1Gbps wire-speed backbone</span>
              <a href="https://github.com/Code-X2026/athulkrishna-os/blob/main/05_GitHub/it-infrastructure-playbooks/02_Cat6_Structured_Cabling_Rack_Setup.md" target="_blank" rel="noopener noreferrer" class="project-link-btn">
                Cabling Playbook ↗
              </a>
            </div>
          </div>
        </div>

        <!-- Project 5: Small Office Network & CCTV -->
        <div class="project-card" data-category="networking">
          <div class="project-thumb-frame">
            <span class="project-num-badge">PROJECT 05 · SURVEILLANCE & LAN</span>
            <img src="$b64OfficeCctv" alt="Small Office Network and CCTV Deployment" class="project-thumb" />
            <span class="project-metric-overlay">📹 16 IP Cams · 30-Day Retention</span>
          </div>
          <div class="project-body">
            <h3 class="project-title">Small Office Network and CCTV Deployment</h3>
            <p class="project-summary">Complete on-site deployment of a local office network integrated with a 16-channel 4K IP security camera system and PoE switching.</p>

            <div class="project-info-block">
              <div class="info-item">
                <span class="info-lbl">The Problem:</span>
                <span class="info-val">Commercial office required reliable local network connectivity combined with 24/7 video surveillance covering entryways and server equipment storage.</span>
              </div>
              <div class="info-item">
                <span class="info-lbl">What I Did:</span>
                <span class="info-val">Mounted and focused 4K IP dome/bullet cameras, provisioned a PoE network switch, configured 16-channel NVR with H.265 schedules, and configured Wi-Fi APs.</span>
              </div>
            </div>

            <div class="project-steps">
              <div class="step-box"><span class="step-num">01</span><span class="step-name">Cam Mount</span></div>
              <div class="step-box"><span class="step-num">02</span><span class="step-name">PoE Budgeting</span></div>
              <div class="step-box"><span class="step-num">03</span><span class="step-name">NVR H.265</span></div>
              <div class="step-box"><span class="step-num">04</span><span class="step-name">Mobile P2P</span></div>
            </div>

            <div class="project-tools">
              <span class="tool-chip">16-Ch 4K NVR</span>
              <span class="tool-chip">PoE Switch</span>
              <span class="tool-chip">H.265 Storage</span>
              <span class="tool-chip">Wi-Fi AP</span>
              <span class="tool-chip">Cat6 RJ45</span>
            </div>

            <div class="project-footer">
              <span style="font-size: 0.78rem; color: var(--emerald-400);">✔ Zero packet loss over dedicated PoE</span>
              <a href="https://github.com/Code-X2026/athulkrishna-os/blob/main/05_GitHub/it-infrastructure-playbooks/04_CCTV_and_NVR_IP_Camera_Deployment.md" target="_blank" rel="noopener noreferrer" class="project-link-btn">
                CCTV Playbook ↗
              </a>
            </div>
          </div>
        </div>

        <!-- Project 6: Tally Server -->
        <div class="project-card" data-category="systems">
          <div class="project-thumb-frame">
            <span class="project-num-badge">PROJECT 06 · WINDOWS SERVER</span>
            <img src="$b64Tally" alt="Dedicated Tally Prime Multi-User Server" class="project-thumb" />
            <span class="project-metric-overlay">🗄️ 6 Active Clients · 0 Corruption</span>
          </div>
          <div class="project-body">
            <h3 class="project-title">Dedicated Tally Prime Multi-User Server</h3>
            <p class="project-summary">Centralized accounting data platform hosted on dedicated hardware to enable simultaneous multi-user accounting operations with automated backup routines.</p>

            <div class="project-info-block">
              <div class="info-item">
                <span class="info-lbl">The Problem:</span>
                <span class="info-val">A commercial business suffered from corrupted shared files and slow response times when multiple accountants accessed data stored on a standard workstation.</span>
              </div>
              <div class="info-item">
                <span class="info-lbl">What I Did:</span>
                <span class="info-val">Configured a dedicated server host with static IP binding, restricted SMB file share permissions with granular NTFS controls, and scheduled automated nightly backups.</span>
              </div>
            </div>

            <div class="project-steps">
              <div class="step-box"><span class="step-num">01</span><span class="step-name">Host Staging</span></div>
              <div class="step-box"><span class="step-num">02</span><span class="step-name">Gateway Svc</span></div>
              <div class="step-box"><span class="step-num">03</span><span class="step-name">NTFS &amp; SMB</span></div>
              <div class="step-box"><span class="step-num">04</span><span class="step-name">Auto-Backup</span></div>
            </div>

            <div class="project-tools">
              <span class="tool-chip">Windows Server</span>
              <span class="tool-chip">Tally Gateway</span>
              <span class="tool-chip">NTFS Security</span>
              <span class="tool-chip">SMB Port 9000</span>
              <span class="tool-chip">Task Scheduler</span>
            </div>

            <div class="project-footer">
              <span style="font-size: 0.78rem; color: var(--emerald-400);">✔ Zero corruption across 6 concurrent users</span>
              <a href="https://github.com/Code-X2026/athulkrishna-os/blob/main/07_Projects/05_Tally_Multiuser_Server_Setup.md" target="_blank" rel="noopener noreferrer" class="project-link-btn">
                Server Runbook ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 7. SKILLS MATRIX & DOMAINS -->
  <section id="skills" class="skills-section">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Competencies</span>
        <h2 class="section-title">Technical Skills &amp; Architecture Domains</h2>
        <p class="section-desc">Structured matrix of hands-on field experience and verified working knowledge.</p>
      </div>

      <!-- 4 Architecture Domains -->
      <div class="domains-grid">
        <!-- Domain 01 -->
        <div class="domain-card">
          <div class="domain-top">
            <span class="domain-root-id">Domain 01</span>
            <span class="domain-badge">CCNA #CSCO15240575</span>
          </div>
          <h3 class="domain-title">Network &amp; Cisco Infrastructure</h3>
          <p class="domain-summary">Cisco routing &amp; switching, structured Cat6 cabling, VLAN segmentation, and enterprise wireless deployments.</p>
          <ul class="domain-list">
            <li class="domain-item">
              <span class="domain-item-name">Cisco IOS &amp; Packet Tracer</span>
              <span class="domain-item-desc">Switch/router CLI navigation, interface configuration, routing fundamentals</span>
            </li>
            <li class="domain-item">
              <span class="domain-item-name">Cat6 T568B Structured Cabling</span>
              <span class="domain-item-desc">Keystone punch-down, 24-port patch panel termination, cable dressing</span>
            </li>
            <li class="domain-item">
              <span class="domain-item-name">VLANs &amp; 802.1Q Trunking</span>
              <span class="domain-item-desc">Traffic isolation between corporate, guest, and surveillance subnets</span>
            </li>
            <li class="domain-item">
              <span class="domain-item-name">Network Services &amp; VPN</span>
              <span class="domain-item-desc">DHCP scope reservations, static IP assignments, DNS, IPsec/OpenVPN tunnels</span>
            </li>
            <li class="domain-item">
              <span class="domain-item-name">PoE Switching &amp; Access Points</span>
              <span class="domain-item-desc">Power budgeting, PoE+ switch ports, multi-SSID wireless configuration</span>
            </li>
          </ul>
        </div>

        <!-- Domain 02 -->
        <div class="domain-card">
          <div class="domain-top">
            <span class="domain-root-id">Domain 02</span>
            <span class="domain-badge">Component Diagnostics</span>
          </div>
          <h3 class="domain-title">Workstation Fleet &amp; Hardware Break-Fix</h3>
          <p class="domain-summary">Component-level fault isolation, full chassis teardown, thermal repasting, and multi-PC workstation rollouts.</p>
          <ul class="domain-list">
            <li class="domain-item">
              <span class="domain-item-name">Desktop &amp; Laptop Diagnostics</span>
              <span class="domain-item-desc">Fault isolation across Dell, HP, Lenovo, and ASUS client machines</span>
            </li>
            <li class="domain-item">
              <span class="domain-item-name">Component Upgrades (RAM / NVMe SSD)</span>
              <span class="domain-item-desc">High-speed DDR4/DDR5 memory expansion, M.2 NVMe storage swaps</span>
            </li>
            <li class="domain-item">
              <span class="domain-item-name">Thermal Servicing &amp; Overheating Fixes</span>
              <span class="domain-item-desc">Motherboard thermal paste application, heatsink and fan maintenance</span>
            </li>
            <li class="domain-item">
              <span class="domain-item-name">10-PC Fleet Assembly &amp; Staging</span>
              <span class="domain-item-desc">Custom desktop assembly, UEFI/BIOS setup, burn-in stress testing</span>
            </li>
            <li class="domain-item">
              <span class="domain-item-name">Hardware Peripheral Support</span>
              <span class="domain-item-desc">Multifunction network printers, barcode scanners, display ribbons, DC jacks</span>
            </li>
          </ul>
        </div>

        <!-- Domain 03 -->
        <div class="domain-card">
          <div class="domain-top">
            <span class="domain-root-id">Domain 03</span>
            <span class="domain-badge">Active Directory &amp; Server</span>
          </div>
          <h3 class="domain-title">Systems Administration &amp; Identity</h3>
          <p class="domain-summary">Windows Server environments, Active Directory user provisioning, domain joins, and secure shared network storage.</p>
          <ul class="domain-list">
            <li class="domain-item">
              <span class="domain-item-name">Active Directory (AD DS) Management</span>
              <span class="domain-item-desc">User onboarding/offboarding, security group assignment, account unlocks</span>
            </li>
            <li class="domain-item">
              <span class="domain-item-name">Workstation Domain Join &amp; GPO</span>
              <span class="domain-item-desc">Enrolling endpoints to corporate domain, baseline security policy enforcement</span>
            </li>
            <li class="domain-item">
              <span class="domain-item-name">Windows Server 2019/2022 Setup</span>
              <span class="domain-item-desc">Dedicated application hosting (Tally Prime server for multi-user accounting)</span>
            </li>
            <li class="domain-item">
              <span class="domain-item-name">SMB File Shares &amp; NTFS Security</span>
              <span class="domain-item-desc">Granular folder permissions, department share mapping, automated backups</span>
            </li>
            <li class="domain-item">
              <span class="domain-item-name">Endpoint Operating Systems</span>
              <span class="domain-item-desc">Windows 10/11 Enterprise provisioning, image staging, debloating</span>
            </li>
          </ul>
        </div>

        <!-- Domain 04 -->
        <div class="domain-card">
          <div class="domain-top">
            <span class="domain-root-id">Domain 04</span>
            <span class="domain-badge">Sub-24h SLA Compliance</span>
          </div>
          <h3 class="domain-title">IT Automation &amp; Service Desk Operations</h3>
          <p class="domain-summary">PowerShell automation toolkits, Winget package orchestration, and high-volume IT service desk leadership.</p>
          <ul class="domain-list">
            <li class="domain-item">
              <span class="domain-item-name">PowerShell 7 &amp; WinGet Automation</span>
              <span class="domain-item-desc">Nexus Prime toolkit: cuts PC setup from 45 min to 8 min (82% reduction)</span>
            </li>
            <li class="domain-item">
              <span class="domain-item-name">ManageEngine ServiceDesk Plus</span>
              <span class="domain-item-desc">Daily incident ticket triage, SLA monitoring, 30+ weekly tickets resolved</span>
            </li>
            <li class="domain-item">
              <span class="domain-item-name">Custom WhatsApp Status Tracker</span>
              <span class="domain-item-desc">Helious Tracker: reduced customer repair delay calls by 60%</span>
            </li>
            <li class="domain-item">
              <span class="domain-item-name">Technical Documentation &amp; Runbooks</span>
              <span class="domain-item-desc">Field deployment playbooks, troubleshooting checklists, SOP guides</span>
            </li>
            <li class="domain-item">
              <span class="domain-item-name">Remote Support &amp; Incident Escalation</span>
              <span class="domain-item-desc">AnyDesk / TeamViewer diagnostics, Tier-2 escalation coordination</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Hands-on vs Working Knowledge -->
      <div class="skills-breakdown-grid">
        <div class="breakdown-card">
          <div class="breakdown-head">
            <h4 class="breakdown-title">⚡ Hands-on Daily Operations</h4>
            <span class="breakdown-subtitle">Supported by continuous daily field operations, hardware servicing, and service desk troubleshooting.</span>
          </div>
          <div class="skill-pills">
            <span class="skill-pill hands-on">Windows 10/11 fleet provisioning</span>
            <span class="skill-pill hands-on">Desktop/laptop diagnostics &amp; repair</span>
            <span class="skill-pill hands-on">Clean OS install &amp; driver staging</span>
            <span class="skill-pill hands-on">RAM/NVMe SSD upgrades</span>
            <span class="skill-pill hands-on">Thermal servicing &amp; fan overhauls</span>
            <span class="skill-pill hands-on">Cat6 cabling &amp; patch panel punch</span>
            <span class="skill-pill hands-on">16-Ch 4K CCTV/NVR &amp; PoE switches</span>
            <span class="skill-pill hands-on">ManageEngine ServiceDesk Plus</span>
            <span class="skill-pill hands-on">PowerShell 7 &amp; WinGet scripts</span>
            <span class="skill-pill hands-on">SMB share &amp; network printer mapping</span>
          </div>
        </div>

        <div class="breakdown-card">
          <div class="breakdown-head">
            <h4 class="breakdown-title">🌐 Working Knowledge &amp; Lab Admin</h4>
            <span class="breakdown-subtitle">Configured, verified, and administered in lab environments, CCNA training, or guided deployments.</span>
          </div>
          <div class="skill-pills">
            <span class="skill-pill working">Active Directory user &amp; group management</span>
            <span class="skill-pill working">Workstation domain join &amp; account unlocks</span>
            <span class="skill-pill working">Basic DNS forwarders &amp; DHCP scopes</span>
            <span class="skill-pill working">Baseline Group Policy Objects (GPO)</span>
            <span class="skill-pill working">VLAN concepts &amp; 802.1Q traffic segmentation</span>
            <span class="skill-pill working">Cisco IOS CLI &amp; Packet Tracer</span>
            <span class="skill-pill working">Windows Server administration (NTFS &amp; Tally)</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 8. CAREER DOCUMENTS -->
  <section id="documents" class="docs-section">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Verification Files</span>
        <h2 class="section-title">Career Documents &amp; Credentials</h2>
        <p class="section-desc">Download verified ATS-formatted resume, UAE tailored cover letter, and interview documents.</p>
      </div>

      <div class="docs-grid">
        <!-- Resume Card -->
        <div class="doc-card">
          <div>
            <span class="doc-icon">📄</span>
            <h3 class="doc-title">ATS Recruiter Resume</h3>
            <p class="doc-desc">2-page, high-signal ATS resume optimized for Abu Dhabi &amp; Dubai recruiter screeners, featuring verified metrics and CCNA credential ID.</p>
          </div>
          <div class="doc-actions">
            <button type="button" class="doc-btn primary" onclick="openResumeModal()">
              <span>View Plaintext Summary</span>
            </button>
            <a href="04_Portfolio/public/Athul_Krishna_OS_Resume.pdf" download="Athul_Krishna_OS_Resume.pdf" class="doc-btn secondary">
              <span>Download PDF File ⬇</span>
            </a>
          </div>
        </div>

        <!-- Cover Letter Card -->
        <div class="doc-card">
          <div>
            <span class="doc-icon">✉️</span>
            <h3 class="doc-title">UAE Tailored Cover Letter</h3>
            <p class="doc-desc">Targeted specifically for UAE IT Support and Network Administrator openings, highlighting Abu Dhabi in-country status and 0-day notice period.</p>
          </div>
          <div class="doc-actions">
            <a href="04_Portfolio/public/Athul_Krishna_OS_Cover_Letter_UAE.pdf" download="Athul_Krishna_OS_Cover_Letter_UAE.pdf" class="doc-btn primary">
              <span>Download Cover Letter PDF ⬇</span>
            </a>
          </div>
        </div>

        <!-- Interview Guide Card -->
        <div class="doc-card">
          <div>
            <span class="doc-icon">🎯</span>
            <h3 class="doc-title">Interview Q&amp;A Master Guide</h3>
            <p class="doc-desc">Comprehensive compilation of UAE enterprise IT interview scenarios covering Cisco routing, DHCP triage, hardware break-fix, and Active Directory.</p>
          </div>
          <div class="doc-actions">
            <a href="04_Portfolio/public/UAE_IT_Support_Interview_QnA_Master_Guide.pdf" download="UAE_IT_Support_Interview_QnA_Master_Guide.pdf" class="doc-btn primary">
              <span>Download Master Guide PDF ⬇</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 9. CONTACT & FAST-TRACK DISPATCH -->
  <section id="contact" class="contact-section">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Get in Touch</span>
        <h2 class="section-title">Direct Recruiter Contact &amp; Dispatch</h2>
        <p class="section-desc">Immediately available for in-person interviews and onboarding in Abu Dhabi or Dubai. Connect directly via WhatsApp, phone, or email.</p>
      </div>

      <div class="contact-grid">
        <!-- Contact Details -->
        <div class="contact-card">
          <h3 class="contact-lead">Direct Communication Channels</h3>
          <p class="contact-sub">Available 7 days a week for interview coordination, technical discussions, and offer negotiations.</p>

          <div class="contact-details">
            <div class="contact-item">
              <div class="contact-item-left">
                <span class="contact-item-icon">💬</span>
                <div>
                  <span class="contact-item-title">WhatsApp &amp; Direct Mobile</span>
                  <span class="contact-item-val">+971 56 435 7994</span>
                </div>
              </div>
              <button type="button" class="copy-btn" onclick="copyToClipboard('+971564357994', 'Phone / WhatsApp')">Copy</button>
            </div>

            <div class="contact-item">
              <div class="contact-item-left">
                <span class="contact-item-icon">✉️</span>
                <div>
                  <span class="contact-item-title">Direct Email</span>
                  <span class="contact-item-val">athulkrishna.os.work@gmail.com</span>
                </div>
              </div>
              <button type="button" class="copy-btn" onclick="copyToClipboard('athulkrishna.os.work@gmail.com', 'Email address')">Copy</button>
            </div>

            <div class="contact-item">
              <div class="contact-item-left">
                <span class="contact-item-icon">📍</span>
                <div>
                  <span class="contact-item-title">Current Location &amp; Mobility</span>
                  <span class="contact-item-val">Abu Dhabi &amp; Dubai, UAE (0 Days Notice)</span>
                </div>
              </div>
              <span style="font-size: 0.76rem; color: var(--emerald-400); font-weight: 600;">Visit Visa / In-Country</span>
            </div>

            <div class="contact-item">
              <div class="contact-item-left">
                <span class="contact-item-icon">🌐</span>
                <div>
                  <span class="contact-item-title">Cisco CCNA Verification</span>
                  <span class="contact-item-val">#CSCO15240575</span>
                </div>
              </div>
              <a href="https://www.cisco.com/go/verifycertificate" target="_blank" rel="noopener noreferrer" class="copy-btn">Verify ↗</a>
            </div>
          </div>
        </div>

        <!-- Quick Dispatch Message Form -->
        <div class="contact-card">
          <h3 class="contact-lead">Fast-Track Message Dispatch</h3>
          <p class="contact-sub">Select your inquiry type to open a pre-drafted direct message on WhatsApp or Email.</p>

          <form class="composer-form" onsubmit="handleDispatch(event)">
            <div class="form-group">
              <label class="form-label">Your Name / Organization</label>
              <input type="text" id="dispatchName" class="form-input" placeholder="e.g. Talent Acquisition Lead / Company" required />
            </div>

            <div class="form-group">
              <label class="form-label">Inquiry Subject</label>
              <select id="dispatchTopic" class="form-select">
                <option value="Abu Dhabi On-Site Interview">Interview Opportunity — Baniyas West / Abu Dhabi, UAE (Immediate)</option>
                <option value="Dubai On-Site Interview">Interview Opportunity — Dubai, UAE</option>
                <option value="Technical Discussion">Technical Inquiry regarding CCNA / Workstation Deployment</option>
                <option value="General Connection">General Networking &amp; Discussion</option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label">Quick Note</label>
              <textarea id="dispatchMsg" rows="3" class="form-textarea" placeholder="We would like to schedule a technical screening interview..."></textarea>
            </div>

            <div style="display: flex; gap: 10px; margin-top: 6px;">
              <button type="submit" class="btn-primary" style="flex: 1; justify-content: center;">
                <span>Send via WhatsApp ↗</span>
              </button>
              <button type="button" class="btn-secondary" onclick="handleEmailDispatch()" style="flex: 1; justify-content: center;">
                <span>Send via Email ↗</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <!-- 10. ATS RESUME MODAL -->
  <div class="modal-overlay" id="resumeModal" onclick="closeOnBackdrop(event)">
    <div class="modal-window">
      <div class="modal-head">
        <div class="modal-head-title">
          <span>📄</span>
          <span>ATS Plaintext Resume — Athul Krishna O S</span>
        </div>
        <div class="modal-head-actions">
          <button type="button" class="rec-btn resume" onclick="copyResumeText()">Copy Plaintext</button>
          <button type="button" class="rec-btn" onclick="window.print()">Print / Save PDF</button>
          <button type="button" class="modal-close-btn" onclick="closeResumeModal()" aria-label="Close modal">✕</button>
        </div>
      </div>

      <div class="modal-body" id="resumeContent">
================================================================================
ATHUL KRISHNA O S
CCNA-Certified IT Support & Network Engineer
Location: Baniyas West, Abu Dhabi, UAE | Visit Visa (Immediate In-Country Transfer) | 0 Days Notice
Phone & WhatsApp: +971 56 435 7994 | Email: athulkrishna.os.work@gmail.com
LinkedIn: linkedin.com/in/athulkrishna-os | GitHub: github.com/Code-X2026/athulkrishna-os
Portfolio: athulkrishna-it.netlify.app
================================================================================

PROFESSIONAL SUMMARY
--------------------------------------------------------------------------------
CCNA-certified IT Support Engineer with over 4 years of hands-on technical service
experience across desktop support, Active Directory (AD DS), hardware diagnostics,
Windows deployment, Cisco LAN/WLAN networking, CCTV surveillance installation,
and technical service operations. Proven expertise in resolving complex hardware,
software, and network connectivity issues while maintaining a 98% SLA compliance
rate across high-volume service desk environments. Skilled in Active Directory
user provisioning, Group Policy (GPO), Cat6 structured cabling, VPN routers,
and PowerShell deployment automation. Currently located in Baniyas West, Abu Dhabi
on a Visit Visa with verified original credentials; ready for immediate on-site onboarding
across Abu Dhabi and Dubai on 0 days notice.

CORE COMPETENCIES & CERTIFICATIONS
--------------------------------------------------------------------------------
* Cisco Certified Network Associate (CCNA) — Credential ID: CSCO15240575
* IT Support & Helpdesk: ServiceDesk Plus, Incident Triage, SLA Adherence (98%)
* Hardware & Break-Fix: Component-Level Repair, RAM/NVMe Upgrades, Thermal Repasting
* Operating Systems: Windows 10/11 Enterprise Fleet Rollout, Windows Server 2019/2022
* Cisco Networking: Cisco IOS, IPv4 Subnetting, DHCP, DNS, VLANs (802.1Q), Cat6 (T568B)
* Surveillance: 16-Channel 4K IP Camera Grids, PoE Switches, NVR Storage Schedules
* Process Automation: PowerShell 7, WinGet Package Orchestration, Automated Staging

PROFESSIONAL EXPERIENCE
--------------------------------------------------------------------------------
WINGS IT SOLUTIONS — Kerala, India
Network & CCTV Infrastructure Specialist | Jun 2026 – Aug 2026
* Installed and configured 16-channel 4K IP security camera systems and NVR units
  with 30-day continuous retention and zero packet loss.
* Routed and terminated Cat6 Ethernet cabling with 24-port patch panel punch-down
  strictly adhering to T568B standards, verified with 100% tester pass rate.
* Mounted wireless access points with isolated SSIDs, configured static IP subnets,
  DHCP scope reservations, and gateway routing for business office LANs.

L-ONE CHIP LEVEL SOLUTIONS — Kerala, India
Laptop Servicing & Hardware Diagnostics Specialist (Practical) | Apr 2026 – May 2026
* Conducted complete chassis teardowns, thermal compound repasting, and cooling fan
  overhauls across 40+ laptops (Dell, HP, Lenovo, ASUS) resolving overheating faults.
* Executed DDR4/DDR5 RAM expansions and NVMe M.2 SSD installations, eliminating system
  bottlenecks and resolving storage boot failures.
* Performed clean Windows 10/11 OS provisioning, UEFI/BIOS optimization, driver staging,
  and 24-hour hardware burn-in stress tests.

GRAND INFOTECH — Kerala, India (2022 – 2026: 4 Years Service & Double Promotion)
IT Support Lead & Service Coordinator | Jan 2025 – Apr 2026 [PROMOTED TO TEAM LEAD]
* Supervised service desk operations managing 30+ weekly hardware and network tickets
  using ManageEngine ServiceDesk Plus with a 98% SLA adherence rate.
* Led a team of 3 technicians, balancing job queues, technical escalations, and
  turnaround times to maintain a sub-24-hour average resolution time.
* Engineered Helious Tracker repair tracking workflows, cutting customer status
  follow-up calls by ~60% and providing real-time job visibility.

Senior IT Support Technician | 2023 – 2025 [PROMOTED TO SENIOR TECHNICIAN]
* Diagnosed and resolved hardware, OS, and network faults across 15–20 customer systems
  weekly with a >90% first-contact resolution rate.
* Developed Nexus Prime PowerShell scripts utilizing WinGet, cutting routine workstation
  software provisioning time from 45 min to under 8 min per PC (~82% speedup).
* Led 10-PC corporate office rollouts including custom workstation assembly, Windows 11
  staging, domain join, SMB shares, and network printer mapping.

IT Support Technician | 2022 – 2023 [CAREER FOUNDATION]
* Assembled, bench-tested, and delivered 50+ custom desktop workstations for commercial
  clients with zero out-of-box hardware defects.
* Installed and configured Windows operating systems, productivity software, antivirus,
  and device drivers according to client specifications.
* Assisted on-site with local Cat6 cabling, unmanaged switch connections, and multifunction
  network printer troubleshooting.

FEATURED VERIFIED IMPLEMENTATIONS
--------------------------------------------------------------------------------
1. Nexus Prime — Zero-Touch Workstation Provisioning Engine (PowerShell 7 + WinGet)
   Cut per-workstation setup time by 82% (45 min to <8 min) across 25+ deployed PCs.
2. Helious Tracker — Service Desk Queue & SLA Operations Platform
   Centralized ticket tracking with WhatsApp webhooks, reducing customer calls by 60%.
3. 10-PC Corporate Accounting Firm Deployment (Windows 11, SMB, Cat6)
   Completed entire setup within 6-hour weekend window with zero Monday business downtime.
4. School IT Lab Network Rack Cabling (6U Wall Rack, 24-Port Panel, Cat6 T568B)
   100% first-pass continuity verification across all 24 drops, eliminating wire hazards.
5. Small Office Network & CCTV (16-Ch 4K NVR, PoE Switch, Isolated Subnets)
   Zero packet loss video streaming and 30-day continuous H.265 storage retention.
6. Dedicated Tally Prime Multi-User Server (Windows Server, RAID, SMB Port 9000)
   Delivered reliable concurrent access for 6 accounting workstations with zero corruption.

EDUCATION & CREDENTIALS
--------------------------------------------------------------------------------
* Cisco Certified Network Associate (CCNA) — Cisco Systems (#CSCO15240575, 2026-2029)
* Laptop Servicing & Upgradation Practical Program — L-One Chip Level Solutions (2026)
* Higher Secondary Education (Commerce with Computer Application) — Kerala State Board
================================================================================
      </div>

      <div class="modal-foot">
        <span style="font-size: 0.78rem; color: var(--text-subtle);">Press ESC or click backdrop to close</span>
        <button type="button" class="btn-primary" onclick="closeResumeModal()">Close Window</button>
      </div>
    </div>
  </div>

  <!-- TOAST NOTIFICATION -->
  <div class="toast" id="toastNotification">
    <span>✔</span>
    <span id="toastMsg">Copied to clipboard!</span>
  </div>

  <!-- 11. FOOTER -->
  <footer>
    <div class="container footer-inner">
      <div style="display: flex; align-items: center; gap: 8px; font-weight: 600; color: #cbd5e1;">
        <span style="color: var(--cyan-400);">Athul Krishna O S</span>
        <span>•</span>
        <span>CCNA-Certified IT Support &amp; Network Engineer</span>
      </div>
      <p>Currently in Baniyas West, Abu Dhabi, UAE • Available Across Abu Dhabi &amp; Dubai • 0 Days Notice Period • Visit Visa Transfer</p>
      <p style="font-size: 0.76rem; color: #475569;">&copy; 2026 Athul Krishna O S. Verified Cisco Credential ID #CSCO15240575. Portfolio Demo.</p>
    </div>
  </footer>

  <!-- ==========================================================================
       JAVASCRIPT LOGIC
       ========================================================================== -->
  <script>
    // 1. Reading Progress Bar
    window.addEventListener('scroll', () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      document.getElementById('reading-progress').style.width = scrolled + '%';
    });

    // 2. 3D Tilt Card Interaction
    const tiltContainer = document.getElementById('tiltContainer');
    const tiltCard = document.getElementById('tiltCard');

    if (tiltContainer && tiltCard) {
      tiltContainer.addEventListener('mousemove', (e) => {
        const rect = tiltContainer.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const rotateX = (-y / (rect.height / 2)) * 8;
        const rotateY = (x / (rect.width / 2)) * 8;
        tiltCard.style.transform = 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-4px)';
      });

      tiltContainer.addEventListener('mouseleave', () => {
        tiltCard.style.transform = 'rotateX(0deg) rotateY(0deg) translateY(0px)';
      });
    }

    // 3. Project Category Filter
    function filterProjects(category, btn) {
      const cards = document.querySelectorAll('.project-card');
      const buttons = document.querySelectorAll('.filter-btn');

      buttons.forEach(b => b.classList.remove('active'));
      if (btn) btn.classList.add('active');

      cards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    }

    // 4. Modal Open/Close
    function openResumeModal() {
      const modal = document.getElementById('resumeModal');
      if (modal) {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    }

    function closeResumeModal() {
      const modal = document.getElementById('resumeModal');
      if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      }
    }

    function closeOnBackdrop(e) {
      if (e.target.id === 'resumeModal') {
        closeResumeModal();
      }
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeResumeModal();
      }
    });

    // 5. Toast & Clipboard Helpers
    function showToast(msg) {
      const toast = document.getElementById('toastNotification');
      const msgEl = document.getElementById('toastMsg');
      if (toast && msgEl) {
        msgEl.innerText = msg;
        toast.style.display = 'flex';
        setTimeout(() => {
          toast.style.display = 'none';
        }, 3000);
      }
    }

    function copyToClipboard(text, label) {
      navigator.clipboard.writeText(text).then(() => {
        showToast('Copied ' + label + ' to clipboard!');
      }).catch(() => {
        showToast('Could not copy automatically');
      });
    }

    function copyResumeText() {
      const content = document.getElementById('resumeContent').innerText;
      navigator.clipboard.writeText(content).then(() => {
        showToast('ATS Plaintext Resume copied to clipboard!');
      });
    }

    // 6. Fast-Track Dispatch Form Handler
    function handleDispatch(e) {
      e.preventDefault();
      const name = document.getElementById('dispatchName').value;
      const topic = document.getElementById('dispatchTopic').value;
      const msg = document.getElementById('dispatchMsg').value;

      const text = encodeURIComponent(
        'Hi Athul, my name is ' + name + '. I would like to connect regarding: ' + topic + '.\n' +
        (msg ? 'Note: ' + msg : '')
      );

      window.open('https://wa.me/971564357994?text=' + text, '_blank');
    }

    function handleEmailDispatch() {
      const name = document.getElementById('dispatchName').value || 'Recruiter';
      const topic = document.getElementById('dispatchTopic').value;
      const msg = document.getElementById('dispatchMsg').value;

      const subject = encodeURIComponent('IT Support Opportunity (' + topic + ') - ' + name);
      const body = encodeURIComponent(
        'Hi Athul,\n\nI reviewed your IT support & network engineering portfolio demo.\n' +
        'Inquiry Type: ' + topic + '\n\n' +
        (msg ? msg + '\n\n' : '') +
        'Best regards,\n' + name
      );

      window.location.href = 'mailto:athulkrishna.os.work@gmail.com?subject=' + subject + '&body=' + body;
    }
  </script>
</body>
</html>
"@

$outPath1 = Join-Path $projectRoot "04_Portfolio\Athul_Krishna_Portfolio_Demo.html"
$outPath2 = Join-Path $projectRoot "04_Portfolio\offline_demo\Athul_Krishna_Portfolio_Demo.html"

[System.IO.File]::WriteAllText($outPath1, $html, [System.Text.Encoding]::UTF8)
[System.IO.File]::WriteAllText($outPath2, $html, [System.Text.Encoding]::UTF8)

Write-Output "Demo HTML file generated successfully!"
Write-Output "File 1: $outPath1 ($((Get-Item $outPath1).Length) bytes)"
Write-Output "File 2: $outPath2 ($((Get-Item $outPath2).Length) bytes)"
