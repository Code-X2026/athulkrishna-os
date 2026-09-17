const certificates = [
  {
    id: 1,
    title: "Cisco Certified Network Associate (CCNA)",
    issuer: "Cisco Systems",
    issueDate: "June 23, 2026",
    issued: "23 June 2026",
    validUntil: "June 23, 2029",
    valid: "23 June 2029",
    credentialId: "CSCO15240575",
    verificationUrl: "https://www.cisco.com/go/verifycertificate",
    description:
      "Validates core networking competencies including IP connectivity, routing protocols, Ethernet switching, VLANs, network security fundamentals, and IP services.",
    icon: "🌐",
    isOfficial: true,
    badge: "Official Cisco Certification",
    type: "certification"
  },
  {
    id: 2,
    title: "Laptop Hardware Diagnostics & Servicing (Practical Training)",
    issuer: "L-One Chip Level Solutions",
    issued: "05 May 2026",
    valid: "Verified Training Certificate",
    credentialId: "L-ONE/EXP/2026",
    description:
      "Intensive hands-on practical training covering laptop chassis disassembly, component-level fault isolation, thermal servicing, RAM/SSD upgrades, and hardware burn-in testing.",
    icon: "🛠️",
    isOfficial: true,
    badge: "Verified Training Certificate",
    type: "training",
    pdfUrl: "/certificates/l_one_chip_level_experience_certificate.pdf",
    previewImg: "/certificates/l_one_chip_level_experience_certificate.webp"
  },
  {
    id: 3,
    title: "IT Support — 4 Years Service (Junior → Senior → Lead)",
    issuer: "Grand Infotech",
    issued: "2022 – Apr 2026",
    valid: "Verified Experience Certificate",
    credentialId: "GI/EXP/2026",
    description:
      "4 years of continuous service with three formal promotions — from IT Support Technician to Senior Technician to IT Support Lead & Service Coordinator. Covered hardware repair, customer support, team coordination, and service desk operations.",
    icon: "🏢",
    isOfficial: true,
    badge: "Verified Experience Certificate",
    type: "experience",
    pdfUrl: "/certificates/grand_infotech_experience_certificate.pdf",
    previewImg: "/certificates/grand_infotech_experience_certificate.webp"
  },
  {
    id: 4,
    title: "IT Infrastructure Support Assistant",
    issuer: "Wings IT Solutions",
    issued: "Jun 2026 – Aug 2026",
    valid: "Verified Experience Certificate",
    credentialId: "WINGS/NET/2026",
    description:
      "3 months of field experience assisting the lead engineer with CCTV camera installations, structured Cat6 cabling, patch panel termination, and basic network equipment setup at commercial client sites.",
    icon: "🔌",
    isOfficial: true,
    badge: "Verified Experience Certificate",
    type: "experience",
    pdfUrl: "/certificates/wings_it_experience_certificate.pdf",
    previewImg: "/certificates/wings_it_experience_certificate.webp"
  }
];

export default certificates;