import os
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors

def add_section_header(story, title_text, sec_style, rule_color):
    story.append(Paragraph(title_text, sec_style))
    story.append(HRFlowable(width="100%", thickness=0.6, color=rule_color, spaceBefore=2.5, spaceAfter=6.0))

def generate_pdf(output_path):
    # Standard Letter: 612 x 792 pt. Margins: 32pt horizontal, 26pt vertical
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        rightMargin=32,
        leftMargin=32,
        topMargin=26,
        bottomMargin=26
    )

    styles = getSampleStyleSheet()

    # Premium Executive Corporate Palette
    navy_color = colors.HexColor("#0f172a")
    cyan_color = colors.HexColor("#0284c7")
    dark_text = colors.HexColor("#1e293b")
    gray_text = colors.HexColor("#475569")
    rule_color = colors.HexColor("#cbd5e1")
    promo_color = colors.HexColor("#047857")

    name_style = ParagraphStyle(
        'Name',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=17,
        leading=20,
        textColor=navy_color,
        alignment=1
    )

    header_status = ParagraphStyle(
        'HeaderStatus',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.2,
        leading=11,
        textColor=promo_color,
        alignment=1
    )

    header_meta = ParagraphStyle(
        'HeaderMeta',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.0,
        leading=11,
        textColor=gray_text,
        alignment=1
    )

    sec_title = ParagraphStyle(
        'SecTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.0,
        leading=11.5,
        textColor=navy_color,
        spaceBefore=10.0,
        spaceAfter=1.0
    )

    company_header_style = ParagraphStyle(
        'CompanyHeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.8,
        leading=11.5,
        textColor=navy_color,
        spaceBefore=8.0,
        spaceAfter=2.0
    )

    job_title_style = ParagraphStyle(
        'JobTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.3,
        leading=11,
        textColor=dark_text,
        spaceBefore=6.0,
        spaceAfter=2.0
    )

    company_sub_style = ParagraphStyle(
        'CompanySub',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=7.8,
        leading=10,
        textColor=cyan_color,
        spaceAfter=3.0
    )

    body_style = ParagraphStyle(
        'Body',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.8,
        leading=11.5,
        textColor=dark_text,
        spaceAfter=3.0
    )

    bullet_style = ParagraphStyle(
        'Bullet',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=7.7,
        leading=11.5,
        textColor=dark_text,
        leftIndent=9,
        firstLineIndent=-6,
        spaceAfter=3.0
    )

    story = []

    # Header Section
    story.append(Paragraph("ATHUL KRISHNA O S", name_style))
    story.append(Spacer(1, 1.5))
    story.append(Paragraph("IT Support Technician | CCNA Certified", header_status))
    story.append(Paragraph("Location: Abu Dhabi, UAE (Visit Visa - Immediate Transfer, 0 Days Notice)", header_meta))
    story.append(Paragraph("Phone: +971 56 435 7994 | Email: athulkrishna.os.work@gmail.com", header_meta))
    story.append(Paragraph("LinkedIn: linkedin.com/in/athulkrishna-os | Portfolio: athulkrishna-it.netlify.app", header_meta))
    story.append(Spacer(1, 2.5))
    story.append(HRFlowable(width="100%", thickness=1.0, color=navy_color, spaceBefore=0, spaceAfter=2.5))

    # Professional Summary
    add_section_header(story, "PROFESSIONAL SUMMARY", sec_title, rule_color)
    story.append(Paragraph("CCNA-certified IT Support Technician with 4 years of progressive experience delivering PC diagnostics, custom workstation builds, and IT infrastructure deployments. Promoted three times over 4 continuous years at Grand Infotech by consistently resolving daily helpdesk tickets and automating software setups using AI-scripting. Transitioned to field operations at Wings IT Solutions to physically deploy IP CCTV systems and structured cabling. Verified credentials in hand; available for immediate onboarding across the UAE.", body_style))

    # Core Competencies
    add_section_header(story, "CORE COMPETENCIES", sec_title, rule_color)
    story.append(Paragraph("&bull; <b>Systems &amp; OS:</b> Desktop Diagnostics, Custom PC Assembly, Thermal Servicing, OS Troubleshooting.", body_style))
    story.append(Paragraph("&bull; <b>Networking:</b> Router/Switch Setup, LAN Troubleshooting, DHCP/DNS, Patch Panel Punch-Down.", body_style))
    story.append(Paragraph("&bull; <b>Service Desk:</b> Ticket Management, Customer Communication, Remote Support (AnyDesk).", body_style))
    story.append(Paragraph("&bull; <b>Directory Services:</b> Basic Active Directory (User Creation, Password Resets, Domain Join).", body_style))

    # Professional Experience
    add_section_header(story, "PROFESSIONAL EXPERIENCE", sec_title, rule_color)

    # Job 1: Wings IT
    story.append(Paragraph("<b>WINGS IT SOLUTIONS</b> &mdash; Kerala, India", company_header_style))
    story.append(Paragraph("IT Infrastructure Support Assistant | Jun 2026 &ndash; Aug 2026", company_sub_style))
    story.append(Paragraph("&bull; Mounted IP cameras and pulled Cat6 Ethernet cables across commercial sites to establish wired connectivity for a new small office setup.", bullet_style))
    story.append(Paragraph("&bull; Terminated RJ45 connectors and punched down cables into patch panels (T568B standard), linking all desk positions to a central Gigabit switch.", bullet_style))
    story.append(Paragraph("&bull; Configured static IP addresses on IP cameras using the SADP discovery tool, assisting the lead engineer in finalizing a shared printer and Wi-Fi access points.", bullet_style))

    # Job 2: L-One Chip Level
    story.append(Paragraph("<b>L-ONE CHIP LEVEL SOLUTIONS</b> &mdash; Kerala, India", company_header_style))
    story.append(Paragraph("Laptop Technician (Practical Training) | Apr 2026 &ndash; May 2026", company_sub_style))
    story.append(Paragraph("&bull; Repaired component faults across Dell, HP, Lenovo, and ASUS systems, specifically replacing DC power jacks, degraded batteries, and LCD ribbon cables.", bullet_style))
    story.append(Paragraph("&bull; Executed DDR4/DDR5 RAM upgrades and NVMe M.2 SSD replacements, followed by clean Windows 10/11 installations and component burn-in testing.", bullet_style))

    # Job 3: Grand Infotech
    story.append(Paragraph("<b>GRAND INFOTECH</b> &mdash; Kerala, India <font color='#047857'><b>(4 Years Continuous Service, 3 Formal Promotions)</b></font>", company_header_style))

    story.append(Paragraph("<b>IT Support Lead &amp; Service Coordinator</b> | Jan 2025 &ndash; Apr 2026", job_title_style))
    story.append(Paragraph("&bull; Managed repair job intake and coordinated 3 junior technicians via the Dev Soft ticketing system, maintaining delivery timelines for 30+ weekly tickets.", bullet_style))
    story.append(Paragraph("&bull; Built 'Helious Pro', an AI-assisted (ChatGPT/Gemini) WhatsApp tracking tool that automated customer status notifications and reduced manual follow-up calls.", bullet_style))

    story.append(Paragraph("<b>Senior IT Support Technician</b> | 2023 &ndash; 2025", job_title_style))
    story.append(Paragraph("&bull; Deployed a 10-PC workstation fleet over a single weekend for an accounting firm, provisioning business software and setting up shared folders without disrupting Monday operations.", bullet_style))
    story.append(Paragraph("&bull; Generated 'Nexus Prime', an AI-assisted PowerShell/WinGet automation script, deploying standard applications on 20+ real client machines to reduce setup time from 40 minutes to under 10.", bullet_style))
    story.append(Paragraph("&bull; Diagnosed daily desktop/laptop issues, resolving faults ranging from screen/keyboard replacements to virus removal.", bullet_style))

    story.append(Paragraph("<b>IT Support Technician</b> | 2022 &ndash; 2023", job_title_style))
    story.append(Paragraph("&bull; Assembled and bench-tested custom desktop PCs (including high-end i9/128GB builds) for commercial clients, handling BIOS configuration and OS partitioning.", bullet_style))
    story.append(Paragraph("&bull; Configured network printers and basic LAN routing for small businesses, providing walk-in and on-site technical support.", bullet_style))

    # Certifications
    add_section_header(story, "CERTIFICATIONS &amp; VERIFIED CREDENTIALS", sec_title, rule_color)
    story.append(Paragraph("&bull; <b>Cisco Certified Network Associate (CCNA)</b> &mdash; Cisco Systems | ID: CSCO15240575 (Active 2026&ndash;2029)", body_style))
    story.append(Paragraph("&bull; <b>Laptop Hardware Diagnostics &amp; Servicing</b> &mdash; L-One Chip Level Solutions (Verified Training Certificate)", body_style))
    story.append(Paragraph("&bull; <b>4-Year IT Support Service Progression</b> &mdash; Grand Infotech (Verified Experience Certificate)", body_style))
    story.append(Paragraph("&bull; <b>IT Infrastructure Support</b> &mdash; Wings IT Solutions (Verified Experience Certificate)", body_style))

    # Education
    add_section_header(story, "EDUCATION", sec_title, rule_color)
    story.append(Paragraph("&bull; <b>BBA Finance</b> &mdash; Foundational Coursework Completed", body_style))
    story.append(Paragraph("&bull; <b>Higher Secondary Education</b> &mdash; Commerce with Computer Application (Kerala State Board)", body_style))

    doc.build(story)
    print("Generated Corrected Resume PDF at:", output_path)

if __name__ == "__main__":
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.abspath(os.path.join(script_dir, ".."))
    public_pdf = os.path.join(script_dir, "public", "Athul_Krishna_OS_Resume.pdf")
    resume_pdf = os.path.join(project_root, "02_Resume", "Athul_Krishna_OS_Resume.pdf")
    generate_pdf(public_pdf)
    generate_pdf(resume_pdf)
