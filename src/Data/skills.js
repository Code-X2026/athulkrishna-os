export const architectureDomains = [
  {
    rootId: "Domain 01",
    domain: "IT Support & Hardware Repair",
    badge: "4 Years Hands-On Experience",
    accent: "emerald",
    summary: "Daily desktop and laptop hardware repair, OS installation, customer support, and service desk operations at Grand Infotech.",
    competencies: [
      { name: "Desktop & Laptop Diagnostics", detail: "Component fault isolation, screen/keyboard replacement, DC jack repair across Dell, HP, Lenovo, ASUS — 4 years daily experience" },
      { name: "Hardware Upgrades", detail: "DDR4/DDR5 RAM, NVMe M.2 SSD replacements, thermal paste application, fan maintenance" },
      { name: "Windows 10/11 Installation & Configuration", detail: "Clean OS installs, driver setup, BIOS/UEFI configuration, software deployment" },
      { name: "Custom PC Assembly", detail: "Full desktop builds from components including i9/128GB DDR5 workstations, bench testing, cable management" },
      { name: "Printer & Peripheral Setup", detail: "Network printer configuration (static IP, TCP/IP port), shared folders, scanner setup for small offices" },
      { name: "Customer Communication", detail: "Explaining technical faults in plain language, managing repair timelines, handling escalations" }
    ]
  },
  {
    rootId: "Domain 02",
    domain: "Networking Fundamentals",
    badge: "CCNA Certified #CSCO15240575",
    accent: "cyan",
    summary: "CCNA-certified networking theory combined with basic hands-on router/switch setup and structured cabling experience.",
    competencies: [
      { name: "Cat6 Structured Cabling (T568B)", detail: "RJ45 crimping, patch panel punch-down, cable routing — done hands-on at Wings IT" },
      { name: "Basic Router & Switch Setup", detail: "ISP router configuration, Wi-Fi password setup, unmanaged switch connections at Grand Infotech" },
      { name: "LAN Troubleshooting", detail: "Ping, ipconfig, tracert — daily troubleshooting for customer connectivity issues" },
      { name: "Basic DHCP/DNS Settings", detail: "Static IP assignment, basic DHCP checks, DNS troubleshooting on routers" },
      { name: "CCNA Theory Knowledge", detail: "TCP/IP, IPv4 subnetting, VLAN concepts, routing fundamentals, Cisco IOS — from CCNA study and Packet Tracer" }
    ]
  },
  {
    rootId: "Domain 03",
    domain: "CCTV & Surveillance (Assistant Level)",
    badge: "3 Months Field Experience",
    accent: "cyan",
    summary: "Hands-on CCTV camera installation experience at Wings IT — physical mounting, cabling, and basic IP configuration under lead engineer supervision.",
    competencies: [
      { name: "IP Camera Physical Installation", detail: "Mounting cameras on walls/ceilings, adjusting angles — done independently at Wings IT" },
      { name: "PoE Switch Connections", detail: "Connecting camera cables to PoE switch ports, verifying power delivery" },
      { name: "Camera IP Configuration", detail: "Assigning static IPs via SADP discovery tool" },
      { name: "Cable Termination for CCTV", detail: "RJ45 termination, patch panel punch-down for camera cable runs" },
      { name: "NVR & Remote Viewing (Exposure)", detail: "Observed and assisted lead engineer with NVR setup and P2P mobile app configuration" }
    ]
  },
  {
    rootId: "Domain 04",
    domain: "Service Desk & AI-Assisted Automation",
    badge: "Automation & Workflow Tools",
    accent: "emerald",
    summary: "Service desk operations, repair tracking, and AI-assisted automation tools to improve daily IT workflows.",
    competencies: [
      { name: "Repair Job Tracking (Dev Soft)", detail: "Daily ticket management, customer communication, and service documentation at Grand Infotech" },
      { name: "AI-Assisted Scripting (ChatGPT/Gemini)", detail: "Used AI tools to generate PowerShell/batch scripts for Windows setup automation — tested and deployed on real PCs" },
      { name: "Helious Pro (AI-Assisted Tool)", detail: "Built a WhatsApp notification tracker with AI assistance to automate customer status updates" },
      { name: "Remote Support", detail: "AnyDesk and TeamViewer for remote diagnosis and troubleshooting" },
      { name: "Basic Active Directory User Management", detail: "Created user accounts, reset passwords in ADUC, domain-joined PCs for clients — basic level only" }
    ]
  }
];

export const skillGroups = [
  {
    type: "hands-on",
    title: "Hands-On Daily Experience",
    subtitle: "Skills used regularly in daily work across 4+ years of IT support and field projects.",
    skills: [
      { name: "Windows 10/11 installation and configuration", detail: "Clean installs, driver setup, BIOS/UEFI configuration — done daily for 4 years" },
      { name: "Desktop & laptop hardware repair", detail: "Screen, keyboard, RAM, SSD, thermal paste, DC jack — 4 years at Grand Infotech + L-One training" },
      { name: "Custom PC assembly & bench testing", detail: "Full builds including i9/128GB DDR5 workstations — component selection to stress testing" },
      { name: "Network printer & peripheral setup", detail: "Static IP, TCP/IP port, driver install, shared printing for offices" },
      { name: "Cat6 cable crimping & patch panel termination", detail: "T568B standard, RJ45 crimping, patch panel punch-down — at Wings IT" },
      { name: "IP camera physical installation", detail: "Mounting, cabling, basic IP config via SADP — at Wings IT (assistant role)" },
      { name: "Customer communication & ticket management", detail: "Walk-in and on-site support, repair explanations, status tracking" },
      { name: "AI-assisted automation (ChatGPT/Gemini)", detail: "Generated and deployed PowerShell scripts for Windows setup tasks on 20+ real PCs" }
    ]
  },
  {
    type: "working-knowledge",
    title: "Working Knowledge",
    subtitle: "Skills from CCNA study, supervised field work, or occasional use — not daily independent practice.",
    skills: [
      { name: "Basic Active Directory user management", detail: "User account creation, password resets, domain join — done for real clients but basic level" },
      { name: "Basic router & switch setup", detail: "ISP router config, Wi-Fi setup, unmanaged switch connections — at Grand Infotech" },
      { name: "Basic DHCP/DNS settings", detail: "Static IP, DHCP checks, DNS troubleshooting on routers — basic level" },
      { name: "VLAN concepts (CCNA theory)", detail: "Understands 802.1Q from CCNA study — not independently configured in production" },
      { name: "Cisco IOS & Packet Tracer", detail: "CCNA-level CLI, routing & switching concepts, topology simulation" },
      { name: "NVR configuration (assisted)", detail: "Observed and assisted lead engineer with NVR setup — not independent" },
      { name: "VPN & AP setup (supervised)", detail: "Assisted lead engineer under supervision — not configured independently" }
    ]
  }
];

export default skillGroups;
