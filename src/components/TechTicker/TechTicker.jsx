import "./TechTicker.css";

const networkingRow = [
  { label: "Cisco IOS", tag: "CCNA Core", icon: "🌐" },
  { label: "Cat6 T568B Cabling", tag: "Structured Cable", icon: "🔌" },
  { label: "Active Directory (AD DS)", tag: "Identity & Access", icon: "👥" },
  { label: "PowerShell 7 Automation", tag: "Scripting", icon: "⚡" },
  { label: "VLANs & 802.1Q Trunking", tag: "Traffic Isolation", icon: "🔀" },
  { label: "Dev Soft Ticketing", tag: "30+ Weekly Tickets", icon: "🎫" },
  { label: "DHCP & DNS Scopes", tag: "Network Services", icon: "📡" },
  { label: "IPsec & OpenVPN Gateways", tag: "Site-to-Site VPN", icon: "🔒" },
  { label: "Windows 11 / Server 2022", tag: "Enterprise OS", icon: "💻" }
];

const hardwareRow = [
  { label: "16-Channel 4K IP CCTV", tag: "NVR Surveillance", icon: "📹" },
  { label: "Hardware Diagnostics & Repair", tag: "Component Level", icon: "🔧" },
  { label: "D-Link Gigabit Switches", tag: "Rack & Patching", icon: "🖧" },
  { label: "WinGet & PowerShell Staging", tag: "Automated Setup", icon: "⚙️" },
  { label: "DDR4 / DDR5 RAM Expansion", tag: "Hardware Upgrades", icon: "💾" },
  { label: "Motherboard Thermal Servicing", tag: "Cooling & Repaste", icon: "❄️" },
  { label: "SMB Shares & File Security", tag: "Storage Access", icon: "📁" },
  { label: "Group Policy Objects (GPO)", tag: "Endpoint Baseline", icon: "🛡️" },
  { label: "PoE / PoE+ Power Budgeting", tag: "Switch Power", icon: "🔋" }
];

function TechTicker() {
  return (
    <section className="tech-ticker-section" aria-label="Technical tools and infrastructure ticker">
      <div className="tech-ticker-header">
        <div className="ticker-badge-wrapper">
          <span className="ticker-system-tag">INFRASTRUCTURE TELEMETRY</span>
          <span className="ticker-telemetry-pill">
            <span className="ticker-pulse" aria-hidden="true" />
            ENTERPRISE IT INFRASTRUCTURE &amp; CCNA NETWORKING
          </span>
        </div>

      </div>

      <div className="ticker-container">
        {/* Row 1: Leftwards Marquee */}
        <div className="ticker-row-wrapper">
          <div className="ticker-track ticker-move-left">
            {[...networkingRow, ...networkingRow].map((item, idx) => (
              <div key={`row1-${item.label}-${idx}`} className="ticker-pill">
                <span className="ticker-pill-icon" aria-hidden="true">{item.icon}</span>
                <span className="ticker-pill-name">{item.label}</span>
                <span className="ticker-pill-badge">{item.tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Rightwards Marquee */}
        <div className="ticker-row-wrapper mt-3">
          <div className="ticker-track ticker-move-right">
            {[...hardwareRow, ...hardwareRow].map((item, idx) => (
              <div key={`row2-${item.label}-${idx}`} className="ticker-pill secondary">
                <span className="ticker-pill-icon" aria-hidden="true">{item.icon}</span>
                <span className="ticker-pill-name">{item.label}</span>
                <span className="ticker-pill-badge secondary">{item.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechTicker;
