import { useState } from "react";
import "./TechMatrix.css";

const competenciesData = [
  // 1. Networking & Cisco
  {
    id: "cisco-ios",
    category: "networking",
    categoryLabel: "Cisco & CCNA",
    title: "Cisco IOS & Packet Tracer",
    badge: "CCNA CSCO15240575",
    badgeType: "cyan",
    icon: "🌐",
    detail: "Switch & router CLI navigation, interface configuration, routing fundamentals and topology simulations."
  },
  {
    id: "cat6-cabling",
    category: "networking",
    categoryLabel: "Cisco & CCNA",
    title: "Cat6 T568B Structured Cabling",
    badge: "100% Continuity Pass",
    badgeType: "cyan",
    icon: "🔌",
    detail: "Keystone punch-down termination, 24-port patch panel dressing, trunking, and line continuity testing."
  },
  {
    id: "vlans-trunking",
    category: "networking",
    categoryLabel: "Cisco & CCNA",
    title: "VLANs & 802.1Q Trunking",
    badge: "Traffic Segmentation",
    badgeType: "cyan",
    icon: "🔀",
    detail: "Access & trunk port tagging, isolating corporate workstations, guest Wi-Fi, and security cameras."
  },
  {
    id: "dhcp-dns",
    category: "networking",
    categoryLabel: "Cisco & CCNA",
    title: "DHCP Scopes & DNS Forwarders",
    badge: "Network Services",
    badgeType: "cyan",
    icon: "📡",
    detail: "Static IP allocations, DHCP scope reservations, DNS forwarders, and client resolution troubleshooting."
  },
  {
    id: "vpn-tunnels",
    category: "networking",
    categoryLabel: "Cisco & CCNA",
    title: "IPsec & OpenVPN Tunnels",
    badge: "Secure Remote Access",
    badgeType: "cyan",
    icon: "🔒",
    detail: "Enterprise VPN router provisioning, establishing encrypted site-to-site and client-to-site tunnels."
  },

  // 2. Hardware & Diagnostics
  {
    id: "hardware-breakfix",
    category: "hardware",
    categoryLabel: "Hardware Break-Fix",
    title: "Desktop & Laptop Diagnostics",
    badge: "Component-Level",
    badgeType: "emerald",
    icon: "🔧",
    detail: "Fault isolation across Dell, HP, Lenovo, and ASUS machines; motherboard diagnostics & DC jack repair."
  },
  {
    id: "ram-nvme",
    category: "hardware",
    categoryLabel: "Hardware Break-Fix",
    title: "DDR4/DDR5 RAM & NVMe SSD",
    badge: "Performance Upgrades",
    badgeType: "emerald",
    icon: "💾",
    detail: "High-speed memory expansion, NVMe M.2 storage replacements, OS cloning, and benchmark burn-in."
  },
  {
    id: "thermal-servicing",
    category: "hardware",
    categoryLabel: "Hardware Break-Fix",
    title: "Thermal Servicing & Heatsinks",
    badge: "Cooling Overhaul",
    badgeType: "emerald",
    icon: "❄️",
    detail: "Chassis teardown, motherboard thermal compound repasting, cooling fan overhaul, and throttle prevention."
  },
  {
    id: "10-pc-fleet",
    category: "hardware",
    categoryLabel: "Hardware Break-Fix",
    title: "10-PC Workstation Fleet Deployment",
    badge: "On-Site Assembly",
    badgeType: "emerald",
    icon: "🖥️",
    detail: "Custom desktop assembly, UEFI/BIOS optimization, OS staging, and shared peripheral configuration."
  },
  {
    id: "cctv-nvr",
    category: "hardware",
    categoryLabel: "Hardware Break-Fix",
    title: "16-Channel 4K IP CCTV & NVR",
    badge: "PoE Surveillance",
    badgeType: "emerald",
    icon: "📹",
    detail: "PoE/PoE+ switch power budgeting, Cat6 camera drops, NVR storage schedules, and P2P mobile monitoring."
  },

  // 3. Systems & Active Directory
  {
    id: "active-directory",
    category: "systems",
    categoryLabel: "Systems & AD",
    title: "Active Directory (AD DS)",
    badge: "Identity & Access",
    badgeType: "amber",
    icon: "👥",
    detail: "User onboarding/offboarding, OU structuring, security group assignments, and domain credential management."
  },
  {
    id: "domain-join-gpo",
    category: "systems",
    categoryLabel: "Systems & AD",
    title: "Workstation Domain Join & GPO",
    badge: "Baseline Enforcement",
    badgeType: "amber",
    icon: "🛡️",
    detail: "Enrolling client PCs to corporate Windows domains, mapping network drives, and applying GPO security."
  },
  {
    id: "windows-server",
    category: "systems",
    categoryLabel: "Systems & AD",
    title: "Windows Server 2019/2022",
    badge: "Host Administration",
    badgeType: "amber",
    icon: "🗄️",
    detail: "Dedicated application server configuration (hosting multi-user Tally Prime accounting platform)."
  },
  {
    id: "smb-shares",
    category: "systems",
    categoryLabel: "Systems & AD",
    title: "SMB File Shares & NTFS Security",
    badge: "Storage Access",
    badgeType: "amber",
    icon: "📁",
    detail: "Granular NTFS access controls, department network folder shares, automated scheduled backup routines."
  },

  // 4. Automation & Service Desk
  {
    id: "powershell-automation",
    category: "automation",
    categoryLabel: "Automation & SLA",
    title: "PowerShell 7 Automation (Nexus Prime)",
    badge: "82% Time Reduction",
    badgeType: "violet",
    icon: "⚡",
    detail: "Automated provisioning toolkit reducing Windows workstation staging time from 45 min to under 8 min."
  },
  {
    id: "winget-cli",
    category: "automation",
    categoryLabel: "Automation & SLA",
    title: "WinGet CLI Silent Package Deployment",
    badge: "Scripted Staging",
    badgeType: "violet",
    icon: "⚙️",
    detail: "Batch script orchestration installing standardized corporate software suites without technician intervention."
  },
  {
    id: "servicedesk-plus",
    category: "automation",
    categoryLabel: "Automation & SLA",
    title: "ManageEngine ServiceDesk Plus",
    badge: "Sub-24h SLA",
    badgeType: "violet",
    icon: "🎫",
    detail: "Daily incident ticket triage, team task coordination, escalation handling, and technical SLA reporting."
  },
  {
    id: "helious-tracker",
    category: "automation",
    categoryLabel: "Automation & SLA",
    title: "Helious Tracker (WhatsApp Workflow)",
    badge: "60% Fewer Calls",
    badgeType: "violet",
    icon: "💬",
    detail: "Custom repair tracking system with automated customer status notifications, eliminating manual call delays."
  }
];

const categoryTabs = [
  { id: "all", label: "All Competencies", count: 18 },
  { id: "networking", label: "Cisco & Networking", count: 5 },
  { id: "hardware", label: "Hardware Break-Fix", count: 5 },
  { id: "systems", label: "Systems & Active Directory", count: 4 },
  { id: "automation", label: "Automation & Service Desk", count: 4 }
];

function TechMatrix() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCompetencies =
    activeCategory === "all"
      ? competenciesData
      : competenciesData.filter((item) => item.category === activeCategory);

  return (
    <section id="tech-stack" className="tech-matrix-section" aria-label="Core Technical Stack Matrix">
      <div className="tech-matrix-container">
        {/* Section Header */}
        <div className="tech-matrix-header">
          <div className="matrix-badge-wrapper">
            <span className="matrix-system-tag">TECHNICAL EXPERTISE</span>
            <span className="matrix-telemetry-tag">
              <span className="matrix-pulse-dot" aria-hidden="true" />
              CCNA &amp; ENTERPRISE IT PROFICIENCY
            </span>
          </div>

          <h2 className="matrix-title">
            Technical <span className="matrix-title-accent">Competencies &amp; Skills</span>
          </h2>
          <p className="matrix-subtitle">
            Hands-on enterprise proficiencies across Cisco routing &amp; switching, desktop hardware diagnostics, Active Directory administration, and PowerShell automation.
          </p>

          {/* Interactive Category Filter Tabs */}
          <div className="matrix-tabs-wrapper" role="tablist" aria-label="Filter competencies by category">
            {categoryTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`matrix-tab-btn ${activeCategory === tab.id ? "active" : ""}`}
              >
                <span>{tab.label}</span>
                <span className="matrix-tab-count font-mono-tech">{tab.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 100% Visible Grid (Zero items hidden!) */}
        <div className="matrix-grid">
          {filteredCompetencies.map((item) => (
            <div key={item.id} className="matrix-card">
              <div className="matrix-card-top">
                <div className="matrix-card-icon-group">
                  <span className="matrix-card-icon" aria-hidden="true">{item.icon}</span>
                  <span className="matrix-card-category font-mono-tech">{item.categoryLabel}</span>
                </div>
                <span className={`matrix-card-badge font-mono-tech badge-${item.badgeType}`}>
                  {item.badge}
                </span>
              </div>

              <div className="matrix-card-body">
                <h3 className="matrix-card-title">{item.title}</h3>
                <p className="matrix-card-detail">{item.detail}</p>
              </div>

              <div className="matrix-card-footer font-mono-tech">
                <span className="footer-status-tag">
                  <span className="footer-status-dot" aria-hidden="true" /> Production Ready
                </span>
                <span className="footer-arrow" aria-hidden="true">▸</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TechMatrix;
