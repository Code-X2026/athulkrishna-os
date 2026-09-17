import { useState } from "react";
import "./Skills.css";

const competenciesData = [
  // 1. Networking & Cisco
  {
    id: "cisco-ios",
    category: "networking",
    categoryLabel: "Cisco & CCNA",
    title: "Cisco IOS & Packet Tracer",
    badge: "CCNA #CSCO15240575",
    badgeType: "cyan",
    proficiency: "Certified Competency",
    icon: "🌐",
    detail: "Switch & router CLI navigation, interface configuration, routing fundamentals, and simulated enterprise topology design."
  },
  {
    id: "cat6-cabling",
    category: "networking",
    categoryLabel: "Cisco & CCNA",
    title: "Cat6 T568B Structured Cabling",
    badge: "100% Continuity Pass",
    badgeType: "cyan",
    proficiency: "Hands-on Field Verified",
    icon: "🔌",
    detail: "Keystone punch-down termination, 24-port patch panel dressing, protective trunking, and continuity wire testing."
  },
  {
    id: "vlans-trunking",
    category: "networking",
    categoryLabel: "Cisco & CCNA",
    title: "VLANs & 802.1Q Trunking",
    badge: "Traffic Segmentation",
    badgeType: "cyan",
    proficiency: "Hands-on Field Verified",
    icon: "🔀",
    detail: "Access & trunk port tagging, isolating corporate office workstations, guest Wi-Fi, and IP security camera streams."
  },
  {
    id: "dhcp-dns",
    category: "networking",
    categoryLabel: "Cisco & CCNA",
    title: "DHCP Scopes & DNS Services",
    badge: "Network Services",
    badgeType: "cyan",
    proficiency: "Hands-on Field Verified",
    icon: "📡",
    detail: "Static IP allocations, DHCP scope reservations, DNS forwarders, and client resolution troubleshooting."
  },
  {
    id: "vpn-tunnels",
    category: "networking",
    categoryLabel: "Cisco & CCNA",
    title: "IPsec & OpenVPN Gateways",
    badge: "Secure Remote Access",
    badgeType: "cyan",
    proficiency: "Working Knowledge",
    icon: "🔒",
    detail: "Enterprise VPN router configuration, establishing encrypted site-to-site and client-to-gateway access tunnels."
  },

  // 2. Hardware & Diagnostics
  {
    id: "hardware-breakfix",
    category: "hardware",
    categoryLabel: "Hardware Break-Fix",
    title: "Desktop & Laptop Diagnostics",
    badge: "Component Break-Fix",
    badgeType: "emerald",
    proficiency: "Hands-on Field Verified",
    icon: "🔧",
    detail: "Fault isolation across Dell, HP, Lenovo, and ASUS machines; motherboard diagnostics, thermal servicing, and DC jack repair."
  },
  {
    id: "ram-nvme",
    category: "hardware",
    categoryLabel: "Hardware Break-Fix",
    title: "DDR4/DDR5 RAM & NVMe SSD",
    badge: "Performance Upgrades",
    badgeType: "emerald",
    proficiency: "Hands-on Field Verified",
    icon: "💾",
    detail: "High-speed memory expansion, NVMe M.2 storage replacements, OS cloning, and benchmark burn-in stress testing."
  },
  {
    id: "thermal-servicing",
    category: "hardware",
    categoryLabel: "Hardware Break-Fix",
    title: "Thermal Servicing & Overhaul",
    badge: "Cooling Maintenance",
    badgeType: "emerald",
    proficiency: "Hands-on Field Verified",
    icon: "❄️",
    detail: "Chassis teardown, motherboard thermal compound repasting, cooling fan maintenance, and thermal throttle elimination."
  },
  {
    id: "10-pc-fleet",
    category: "hardware",
    categoryLabel: "Hardware Break-Fix",
    title: "10-PC Workstation Fleet Deployment",
    badge: "On-Site Rollout",
    badgeType: "emerald",
    proficiency: "Hands-on Field Verified",
    icon: "🖥️",
    detail: "Custom desktop assembly, UEFI/BIOS optimization, Windows 11 staging, domain join, and shared printer configuration."
  },
  {
    id: "cctv-nvr",
    category: "hardware",
    categoryLabel: "Hardware Break-Fix",
    title: "16-Channel 4K IP CCTV & NVR",
    badge: "PoE Surveillance",
    badgeType: "emerald",
    proficiency: "Hands-on Field Verified",
    icon: "📹",
    detail: "PoE/PoE+ switch power budgeting, Cat6 camera drops, NVR storage schedules with 30-day retention, and mobile client monitoring."
  },

  // 3. Systems & Active Directory
  {
    id: "active-directory",
    category: "systems",
    categoryLabel: "Systems & AD",
    title: "Active Directory (AD DS)",
    badge: "Identity & Access",
    badgeType: "amber",
    proficiency: "Working Knowledge",
    icon: "👥",
    detail: "User onboarding/offboarding, OU structuring, security group assignments, password resets, and account unlock procedures."
  },
  {
    id: "domain-join-gpo",
    category: "systems",
    categoryLabel: "Systems & AD",
    title: "Domain Join & Group Policy",
    badge: "Baseline Enforcement",
    badgeType: "amber",
    proficiency: "Working Knowledge",
    icon: "🛡️",
    detail: "Enrolling client PCs into corporate Windows domains, mapping shared network drives, and applying desktop security restrictions."
  },
  {
    id: "windows-server",
    category: "systems",
    categoryLabel: "Systems & AD",
    title: "Windows Server 2019/2022 Host",
    badge: "Host Administration",
    badgeType: "amber",
    proficiency: "Hands-on Field Verified",
    icon: "🗄️",
    detail: "Dedicated application server configuration hosting multi-user Tally Prime accounting data platform for client workstations."
  },
  {
    id: "smb-shares",
    category: "systems",
    categoryLabel: "Systems & AD",
    title: "SMB File Shares & NTFS Security",
    badge: "Storage Access",
    badgeType: "amber",
    proficiency: "Hands-on Field Verified",
    icon: "📁",
    detail: "Granular NTFS access controls, department network folder shares, automated scheduled backup routines, and permissions audits."
  },

  // 4. Automation & Service Desk
  {
    id: "powershell-automation",
    category: "automation",
    categoryLabel: "Automation & SLA",
    title: "PowerShell 7 Automation (Nexus Prime)",
    badge: "82% Time Reduction",
    badgeType: "violet",
    proficiency: "Hands-on Field Verified",
    icon: "⚡",
    detail: "Automated provisioning toolkit reducing Windows workstation staging time from 45 min to under 8 min per PC."
  },
  {
    id: "winget-cli",
    category: "automation",
    categoryLabel: "Automation & SLA",
    title: "WinGet CLI Silent Package Deployment",
    badge: "Scripted Staging",
    badgeType: "violet",
    proficiency: "Hands-on Field Verified",
    icon: "⚙️",
    detail: "Batch script orchestration installing standardized corporate software suites without manual technician intervention."
  },
  {
    id: "servicedesk-plus",
    category: "automation",
    categoryLabel: "Automation & SLA",
    title: "Dev Soft Ticketing System",
    badge: "Sub-24h SLA",
    badgeType: "violet",
    proficiency: "Hands-on Field Verified",
    icon: "🎫",
    detail: "Daily incident ticket triage, team task coordination, escalation handling, and technical SLA performance reporting."
  },
  {
    id: "helious-tracker",
    category: "automation",
    categoryLabel: "Automation & SLA",
    title: "Helious Tracker (WhatsApp Workflow)",
    badge: "60% Fewer Calls",
    badgeType: "violet",
    proficiency: "Hands-on Field Verified",
    icon: "💬",
    detail: "Custom repair tracking system with automated customer status notifications, eliminating manual telephone inquiry delays."
  }
];

const categoryTabs = [
  { id: "all", label: "All Competencies", count: 18 },
  { id: "networking", label: "Cisco & Networking", count: 5 },
  { id: "hardware", label: "Hardware Break-Fix", count: 5 },
  { id: "systems", label: "Systems & Active Directory", count: 4 },
  { id: "automation", label: "Automation & Service Desk", count: 4 }
];

function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCompetencies =
    activeCategory === "all"
      ? competenciesData
      : competenciesData.filter((item) => item.category === activeCategory);

  return (
    <section id="skills" className="skills-matrix-section" aria-label="Core Technical Skills Matrix">
      <div className="skills-matrix-container">
        {/* Section Header */}
        <div className="skills-matrix-header">
          <div className="matrix-badge-wrapper">
            <span className="matrix-system-tag">ENTERPRISE IT COMPETENCIES</span>
            <span className="matrix-telemetry-tag">
              <span className="matrix-pulse-dot" aria-hidden="true" />
              CISCO CCNA &amp; HARDWARE BREAK-FIX PROFICIENCY
            </span>
          </div>

          <h2 className="matrix-title">
            Technical <span className="matrix-title-accent">Skills &amp; Domain Expertise</span>
          </h2>
          <p className="matrix-subtitle">
            Hands-on enterprise competencies across Cisco routing &amp; switching, desktop hardware break-fix, Windows Server environments, and PowerShell automation.
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
                <span className="matrix-tab-count font-mono">{tab.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 100% Visible Grid */}
        <div className="matrix-grid">
          {filteredCompetencies.map((item) => (
            <div key={item.id} className="matrix-card">
              <div className="matrix-card-top">
                <div className="matrix-card-icon-group">
                  <span className="matrix-card-icon" aria-hidden="true">{item.icon}</span>
                  <span className="matrix-card-category font-mono">{item.categoryLabel}</span>
                </div>
                <span className={`matrix-card-badge font-mono badge-${item.badgeType}`}>
                  {item.badge}
                </span>
              </div>

              <div className="matrix-card-body">
                <h3 className="matrix-card-title">{item.title}</h3>
                <p className="matrix-card-detail">{item.detail}</p>
              </div>

              <div className="matrix-card-footer">
                <span className="footer-status-tag">
                  <span className="footer-status-dot" aria-hidden="true" /> {item.proficiency}
                </span>
                <span className="footer-arrow" aria-hidden="true">✓</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
