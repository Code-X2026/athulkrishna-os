import nexusPrimeCover from "../assets/images/optimized/nexus_prime_cover.webp";
import nexusPrimeLogo from "../assets/images/optimized/nexus_prime_logo.webp";
import nexusPrimeImg from "../assets/images/optimized/nexus_prime.webp";

import heliousProCover from "../assets/images/optimized/helious_pro_cover.webp";
import heliousProLogo from "../assets/images/optimized/helious_pro_logo.webp";
import heliousProImg from "../assets/images/optimized/helious_pro.webp";

import pcAccountingFirmImg from "../assets/images/optimized/pc_accounting_firm.webp";
import schoolRackImg from "../assets/images/optimized/school_it_rack.webp";
import smallOfficeNetImg from "../assets/images/optimized/small_office_network.webp";
import tallyServerImg from "../assets/images/optimized/tally_server_setup.webp";

const projects = [
  {
    number: "01",
    type: "Client Project — Grand Infotech",
    title: "10-Seat Corporate Workstation Fleet Deployment",
    icon: "💻",
    coverImage: pcAccountingFirmImg,
    image: pcAccountingFirmImg,
    badge: "Windows 11 · 10-Desk Rollout",
    metric: "10 Desks Deployed in One Weekend",
    githubUrl: null,
    evidenceLabel: "On-Site Work Photograph",
    documentationUrl: "https://github.com/Code-X2026/athulkrishna-os/blob/main/07_Projects/01_Accounting_Firm_10PC_Deployment.md",
    projectLabel: "Client Project",
    summary:
      "End-to-end hardware assembly, Windows 11 installation, Cat6 cabling, shared folder setup, and network printer configuration for a 10-seat accounting firm office.",
    problem:
      "A local accounting firm needed 10 new desktop workstations assembled, installed on-site, connected to the office network, and ready for staff use without disrupting business operations.",
    whatIDid:
      "I assembled 10 custom desktop PCs, performed clean Windows 11 installations with business software, routed Cat6 cables to each desk, connected them to an unmanaged switch, configured a network printer with static IP, and set up shared folders for the accounting team. I used the Nexus Prime automation script (AI-assisted) to speed up software installations.",
    toolsAndEnvironment: [
      "Windows 11 Pro",
      "Intel Core i5 Workstations",
      "Cat6 Network Cabling",
      "Unmanaged Gigabit Switch",
      "Network Printer (Static IP)",
      "Nexus Prime Script (AI-Assisted)"
    ],
    architectureSteps: [
      { step: "01", title: "Hardware Assembly", desc: "Assembled 10 desktops with burn-in testing and BIOS configuration" },
      { step: "02", title: "OS & Software", desc: "Clean Windows 11 install with Nexus Prime script for business software deployment" },
      { step: "03", title: "Physical Cabling", desc: "Routed Cat6 cables to each desk and connected to central switch" },
      { step: "04", title: "Network Setup", desc: "Configured shared folders, network printer, and verified connectivity" }
    ],
    evidence:
      "On-site deployment photograph showing the completed workstation setup at the client office.",
    result:
      "Completed full assembly, imaging, and network setup within a weekend. All 10 workstations were operational with shared printer and folder access on Monday morning."
  },
  {
    number: "02",
    type: "Client Project — Grand Infotech",
    title: "Core i9 High-End Workstation Build & Cable Management",
    icon: "🖥️",
    coverImage: null,
    image: null,
    badge: "i9 CPU · 128GB DDR5 RAM",
    metric: "Custom Build for Video Editing Client",
    githubUrl: null,
    evidenceLabel: "Build Photos & Video",
    projectLabel: "Client Project",
    summary:
      "Custom high-performance workstation assembly with Intel Core i9, 128GB DDR5 RAM, 360mm liquid cooler, and professional cable management for a video editing client.",
    problem:
      "A client needed a high-performance workstation capable of handling professional video editing and rendering workloads without thermal throttling.",
    whatIDid:
      "I assembled the entire system from components — installed the CPU, 128GB DDR5 RAM kit, NVMe SSD, and 360mm AIO liquid cooler. Mounted the GPU with anti-sag bracket, routed all cables behind the motherboard tray for clean airflow, installed Windows 11 Pro with all drivers, and ran stress tests to verify thermal stability.",
    toolsAndEnvironment: [
      "Intel Core i9 CPU",
      "128GB DDR5 RAM (4×32GB)",
      "360mm AIO Liquid Cooler",
      "2TB NVMe M.2 SSD",
      "Windows 11 Pro",
      "Anti-Static Mat & Tools"
    ],
    architectureSteps: [
      { step: "01", title: "Bench Test", desc: "CPU, RAM, and SSD installed on motherboard outside chassis — verified POST and BIOS" },
      { step: "02", title: "Chassis Build", desc: "Mounted motherboard, liquid cooler radiator, GPU with anti-sag bracket" },
      { step: "03", title: "Cable Management", desc: "Routed all power cables behind motherboard tray for clean airflow" },
      { step: "04", title: "OS & Testing", desc: "Windows 11 Pro installed, drivers updated, stress tested for thermal stability" }
    ],
    evidence:
      "Build photos and video showing component assembly, cable management, and completed workstation.",
    result:
      "Delivered a stable workstation running at peak performance with clean cable management. CPU temperatures stayed under 75°C during stress testing."
  },
  {
    number: "03",
    type: "Client Project (Assisted) — Wings IT",
    title: "School IT Lab Network Rack & Structured Cabling",
    icon: "🔌",
    coverImage: schoolRackImg,
    image: schoolRackImg,
    badge: "Cat6 T568B · Patch Panel",
    metric: "24 Cable Terminations",
    githubUrl: null,
    evidenceLabel: "On-Site Work Photograph",
    projectLabel: "Client Project (Assisted)",
    summary:
      "Structured Cat6 cabling and patch panel termination for a school IT lab. The lead engineer set up the wall rack and switch; I performed cable terminations and punch-downs.",
    problem:
      "A school computer lab had loose, unlabelled Ethernet cables running across floors, causing intermittent connectivity and safety hazards.",
    whatIDid:
      "I terminated Cat6 cables with RJ45 connectors, punched down keystone jacks on the 24-port patch panel following T568B color standards, and tested cable continuity with a network tester. The lead engineer mounted the wall rack, installed the switch, and handled switch configuration.",
    leadDid: "The lead engineer mounted the wall rack cabinet, installed and configured the D-Link Gigabit switch, and handled network settings.",
    toolsAndEnvironment: [
      "24-Port Cat6 Keystone Patch Panel",
      "Cat6 UTP Cabling",
      "T568B Punch-Down Tool",
      "RJ45 Connectors & Crimper",
      "Network Continuity Tester",
      "D-Link Gigabit Switch (configured by lead)"
    ],
    architectureSteps: [
      { step: "01", title: "Cable Prep", desc: "Stripped cable jackets and arranged pairs per T568B pinout" },
      { step: "02", title: "Punch-Down", desc: "Terminated 24 Cat6 runs on keystone patch panel" },
      { step: "03", title: "RJ45 Crimping", desc: "Crimped RJ45 connectors on desk-end cables" },
      { step: "04", title: "Testing", desc: "Verified continuity on all 24 terminated runs with network tester" }
    ],
    evidence:
      "On-site photograph of the completed wall rack showing patch panel and switch installation.",
    result:
      "All 24 Cat6 cable runs passed continuity testing. Lab workstations had stable gigabit connectivity after the project."
  },
  {
    number: "04",
    type: "Client Project (Assisted) — Wings IT",
    title: "Commercial Office LAN & 16-Channel IP CCTV System",
    icon: "📹",
    coverImage: smallOfficeNetImg,
    image: smallOfficeNetImg,
    badge: "16 IP Cameras · PoE Switch",
    metric: "16 Cameras Installed",
    githubUrl: null,
    evidenceLabel: "On-Site Work Photograph",
    projectLabel: "Client Project (Assisted)",
    summary:
      "Assisted the lead engineer in deploying a commercial office network with a 16-channel IP CCTV surveillance system. I handled physical camera installation, cabling, and basic IP configuration.",
    problem:
      "A commercial office required reliable LAN connectivity combined with 24/7 video surveillance covering entryways, workspace areas, and storage.",
    whatIDid:
      "I physically mounted IP cameras on walls and ceilings, pulled and routed Cat6 cables from camera locations to the equipment room, terminated RJ45 connectors, connected cameras to the PoE switch, punched down cables into patch panels, and configured static IP addresses on cameras using the SADP discovery tool. The lead engineer handled NVR configuration, recording schedules, storage setup, remote viewing app setup, and VPN configuration.",
    leadDid: "The lead engineer configured the NVR (recording schedules, storage, H.265+ compression), set up remote P2P mobile viewing, configured VPN and wireless access points, and handled all advanced network configuration.",
    toolsAndEnvironment: [
      "IP Cameras (multiple brands)",
      "PoE Network Switch",
      "Cat6 Cabling & RJ45 Crimping",
      "SADP Discovery Tool",
      "Patch Panel & Punch-Down Tool",
      "NVR (configured by lead)"
    ],
    architectureSteps: [
      { step: "01", title: "Camera Mounting", desc: "Physically installed IP cameras at planned positions on walls and ceilings" },
      { step: "02", title: "Cable Routing", desc: "Pulled Cat6 cable runs from each camera back to equipment room" },
      { step: "03", title: "PoE Connection", desc: "Terminated cables and connected to PoE switch ports" },
      { step: "04", title: "IP Configuration", desc: "Assigned static IPs to cameras via SADP tool; lead configured NVR and remote access" }
    ],
    evidence:
      "On-site photograph showing network and camera installation at the commercial office.",
    result:
      "All 16 cameras were physically installed and connected with PoE power. Cameras received IP addresses and were visible to the NVR for the lead engineer to complete configuration."
  },
  {
    number: "05",
    type: "Client Project (Assisted) — Wings IT",
    title: "Tally Prime Multi-User Server Setup for 6 Clients",
    icon: "🗄️",
    coverImage: tallyServerImg,
    image: tallyServerImg,
    badge: "Tally Server · 6 Client Terminals",
    metric: "6 Active Accounting Terminals",
    githubUrl: null,
    evidenceLabel: "On-Site Work Photograph",
    projectLabel: "Client Project (Assisted)",
    summary:
      "Assisted with setting up a dedicated Tally Prime multi-user server for an accounting business, connecting 6 client workstations for concurrent database access.",
    problem:
      "An accounting business experienced slow performance and file corruption when multiple users accessed Tally data from a shared workstation.",
    whatIDid:
      "I assisted with the physical server hardware setup, configured the static IP address on the server, helped install Tally Prime Server software, configured Windows Firewall rules for the Tally data port, and connected 6 client workstations to the server. The lead handled advanced server hardening and backup configuration.",
    leadDid: "The lead engineer handled server OS hardening, advanced backup scripting, and RAID storage configuration.",
    toolsAndEnvironment: [
      "Intel Core i5 Server Host",
      "Windows (Server/Pro)",
      "Tally Prime Multi-User License",
      "Static IP Configuration",
      "Windows Firewall Rules"
    ],
    architectureSteps: [
      { step: "01", title: "Server Setup", desc: "Set up server hardware and configured static IP address" },
      { step: "02", title: "Tally Install", desc: "Installed Tally Prime Server and activated multi-user license" },
      { step: "03", title: "Firewall Rules", desc: "Configured Windows Firewall inbound rules for Tally port 9000" },
      { step: "04", title: "Client Connection", desc: "Configured 6 client workstations to connect to server on port 9000" }
    ],
    evidence:
      "On-site photograph of the server setup with client terminals.",
    result:
      "6 accounting workstations successfully connected to the dedicated server for concurrent multi-user Tally access."
  },
  {
    number: "06",
    type: "AI-Assisted Automation",
    title: "Nexus Prime — Automated Windows Software Provisioning Script",
    icon: "⚡",
    logo: nexusPrimeLogo,
    coverImage: nexusPrimeCover,
    image: nexusPrimeImg,
    badge: "PowerShell · WinGet CLI",
    metric: "Used on 20+ Client PCs",
    githubUrl: "https://github.com/Code-X2026/athulkrishna-os/tree/main/05_GitHub/nexus-prime",
    evidenceLabel: "Open-Source Script on GitHub",
    projectLabel: "AI-Assisted Tool",
    aiDisclosure: "Script code was generated using ChatGPT/Gemini. I defined the requirements, tested the script, and deployed it on real client machines.",
    summary:
      "PowerShell automation script using WinGet CLI to install standard business software on freshly imaged Windows PCs. AI-generated code, tested and deployed by me on real client machines.",
    problem:
      "Installing browsers, utilities, and business software on freshly imaged PCs required 30-45 minutes of repetitive manual downloads and clicks per machine.",
    whatIDid:
      "I identified the need for automation, defined what software should be installed, used ChatGPT and Gemini to generate the PowerShell script, tested it on client machines, and deployed it across 20+ real PC setups at Grand Infotech. I understand the overall script flow but the code was AI-generated.",
    toolsAndEnvironment: [
      "PowerShell 7",
      "WinGet CLI",
      "Windows 10/11",
      "ChatGPT & Gemini (code generation)"
    ],
    architectureSteps: [
      { step: "01", title: "Elevation Check", desc: "Auto-elevates to Administrator with execution policy bypass" },
      { step: "02", title: "Software List", desc: "Reads list of standard business software packages" },
      { step: "03", title: "Silent Install", desc: "Installs all packages via WinGet in silent/unattended mode" },
      { step: "04", title: "Audit Log", desc: "Generates a log file of what was installed and any errors" }
    ],
    evidence:
      "Full source code available on GitHub. Script has been used on 20+ real client PCs at Grand Infotech.",
    result:
      "Reduced repetitive software installation time from approximately 30-45 minutes to under 10 minutes per PC. Used on 20+ real client machines at Grand Infotech."
  },
  {
    number: "07",
    type: "AI-Assisted Internal Tool",
    title: "Helious Pro — WhatsApp Repair Tracking & Customer Notification",
    icon: "📊",
    logo: heliousProLogo,
    coverImage: heliousProCover,
    image: heliousProImg,
    badge: "Service Desk · WhatsApp Alerts",
    metric: "Used Alongside Dev Soft at Grand Infotech",
    githubUrl: "https://github.com/Code-X2026/athulkrishna-os/tree/main/05_GitHub/helious-pro",
    evidenceLabel: "Documented Codebase on GitHub",
    projectLabel: "AI-Assisted Tool",
    aiDisclosure: "Application code was generated using ChatGPT/Gemini. I defined the workflow requirements and used the tool daily to track repairs and notify customers.",
    summary:
      "A repair tracking and customer notification tool that I used alongside Grand Infotech's Dev Soft ticketing system. Built with AI assistance (ChatGPT/Gemini) to automate WhatsApp status notifications to customers during the repair lifecycle.",
    problem:
      "Customers frequently called Grand Infotech to ask about repair status. Manual phone follow-ups were time-consuming and paper-based tracking led to missed updates.",
    whatIDid:
      "I identified the need for automated customer notifications, used ChatGPT and Gemini to help build a tracking dashboard with WhatsApp notification capability. I used this tool daily at Grand Infotech alongside the official Dev Soft system to send status updates to customers without manual calls.",
    toolsAndEnvironment: [
      "React (AI-generated frontend)",
      "Node.js (AI-generated backend)",
      "WhatsApp messaging",
      "ChatGPT & Gemini (code generation)"
    ],
    architectureSteps: [
      { step: "01", title: "Job Intake", desc: "Record device and customer contact details for each repair" },
      { step: "02", title: "Status Tracking", desc: "Track repair progress through stages (Intake → Diagnosis → Repair → Ready)" },
      { step: "03", title: "Auto Notification", desc: "Send WhatsApp messages to customers when status changes" },
      { step: "04", title: "Completion", desc: "Mark job complete and notify customer for pickup" }
    ],
    evidence:
      "GitHub repository with documented codebase. Full code upload is in progress.",
    result:
      "Reduced customer status inquiry calls by automating WhatsApp notifications. Used daily at Grand Infotech alongside the Dev Soft ticketing system."
  }
];

export default projects;
