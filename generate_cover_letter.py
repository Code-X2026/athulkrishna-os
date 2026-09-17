import os
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors

script_dir = os.path.dirname(os.path.abspath(__file__))
project_root = os.path.abspath(os.path.join(script_dir, ".."))
public_pdf = os.path.join(script_dir, "public", "Athul_Krishna_OS_Cover_Letter_UAE.pdf")
cover_letter_pdf = os.path.join(project_root, "03_Cover_Letter", "Athul_Krishna_OS_Cover_Letter_UAE.pdf")

def generate_cover_letter_pdf(output_path):
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        rightMargin=42,
        leftMargin=42,
        topMargin=40,
        bottomMargin=40
    )

    styles = getSampleStyleSheet()

    # Custom Corporate Palette
    navy_color = colors.HexColor("#0f172a")
    cyan_color = colors.HexColor("#0284c7")
    dark_text = colors.HexColor("#1e293b")
    gray_text = colors.HexColor("#475569")
    status_color = colors.HexColor("#047857")

    name_style = ParagraphStyle(
        'CandidateName',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        textColor=navy_color
    )

    subtitle_style = ParagraphStyle(
        'CandidateSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=14.5,
        textColor=cyan_color
    )

    meta_style = ParagraphStyle(
        'CandidateMeta',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.8,
        leading=13,
        textColor=gray_text
    )

    status_style = ParagraphStyle(
        'StatusTag',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.8,
        leading=13,
        textColor=status_color
    )

    body_style = ParagraphStyle(
        'CoverBody',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=14.5,
        textColor=dark_text,
        spaceAfter=8.5
    )

    bullet_style = ParagraphStyle(
        'CoverBullet',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.2,
        leading=14,
        textColor=dark_text,
        leftIndent=14,
        spaceAfter=5.5
    )

    header_ref_style = ParagraphStyle(
        'HeaderRef',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=14.5,
        textColor=navy_color,
        spaceAfter=10
    )

    evidence_style = ParagraphStyle(
        'EvidenceCallout',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=9,
        leading=13.5,
        textColor=cyan_color,
        spaceAfter=8.5
    )

    story = []

    # Candidate Header Section
    story.append(Paragraph("ATHUL KRISHNA O S", name_style))
    story.append(Spacer(1, 2.5))
    story.append(Paragraph("CCNA-CERTIFIED IT SUPPORT &amp; NETWORK ENGINEER", subtitle_style))
    story.append(Spacer(1, 3))
    story.append(Paragraph("Email: athulkrishna.os.work@gmail.com | Phone &amp; WhatsApp: +971 56 435 7994", meta_style))
    story.append(Paragraph("LinkedIn: linkedin.com/in/athulkrishna-os | Portfolio: athulkrishna-it.netlify.app | GitHub: github.com/Code-X2026/athulkrishna-os", meta_style))
    story.append(Spacer(1, 2.5))
    story.append(Paragraph("Availability: In Baniyas West, Abu Dhabi, UAE on Visit Visa &bull; Verified Original Credentials (In-Country Visa Ready) &bull; 0 Days Notice", status_style))

    story.append(Spacer(1, 6))
    story.append(HRFlowable(width="100%", thickness=1.5, color=cyan_color, spaceBefore=0, spaceAfter=12))

    # Recruiter Addressing
    story.append(Paragraph("<b>To:</b> Hiring Manager / IT Talent Acquisition Team", header_ref_style))
    story.append(Paragraph("<b>Re:</b> Application for IT Support Engineer / Desktop Support / Network Support Position (UAE)", header_ref_style))

    story.append(Paragraph("Dear Hiring Manager,", body_style))

    story.append(Paragraph(
        "I am writing to express my enthusiastic interest in the IT Support Engineer / Network Support position within your organization in the UAE. As a Cisco Certified Network Associate (CCNA #CSCO15240575) with over 4 years of hands-on experience in desktop support, basic Active Directory user management, hardware diagnostics, LAN connectivity, and PowerShell automation, I am prepared to deliver immediate operational value to your IT team.",
        body_style
    ))

    story.append(Paragraph(
        "Throughout my 4-year career at Grand Infotech—progressing through merit-based promotions from Junior IT Support Technician to Senior Specialist and IT Support Lead & Service Coordinator—I have consistently maintained high first-contact resolution rates and successfully managed 30+ weekly hardware and network tickets. My background combines deep component-level hardware troubleshooting and Windows 10/11 administration with Active Directory user management, network multifunction printer maintenance, and structured Cat6 cabling.",
        body_style
    ))

    story.append(Paragraph(
        "<i>(Authentic photographic evidence of my on-site cabling, 10-PC corporate deployments, and official Cisco CCNA credentials can be inspected live on my portfolio: https://athulkrishna-it.netlify.app)</i>",
        evidence_style
    ))

    # Key Achievements Bullet Points
    story.append(Paragraph(
        "• <b>Corporate Workstation Deployments &amp; Active Directory:</b> Assembling, staging, and deploying 10-PC workstation environments in a single weekend with zero operational downtime; configuring Windows 11 Enterprise, Active Directory domain joins, SMB share permissions, and network printer fleets.",
        bullet_style
    ))

    story.append(Paragraph(
        "• <b>Cisco CCNA Networking &amp; Structured Cabling:</b> Configuring managed Cisco switches, routers, VLAN segmentation, Wi-Fi access points, and Cat6 cabling runs adhering to T568B standards with 100% cable continuity pass rates.",
        bullet_style
    ))

    story.append(Paragraph(
        "• <b>PowerShell Process Automation:</b> Authoring automated deployment script suites utilizing WinGet CLI to configure standardized software baselines silently, reducing per-machine setup time by ~82% (from 45 minutes to under 8 minutes).",
        bullet_style
    ))

    story.append(Paragraph(
        "• <b>Physical Security &amp; Service Desk Operations:</b> Assisting in the installation of 16-channel IP camera systems with PoE switching and managing service desk workflows using Dev Soft ticketing with automated WhatsApp status notifications.",
        bullet_style
    ))

    story.append(Spacer(1, 4))

    story.append(Paragraph(
        "I am currently based in Baniyas West, Abu Dhabi on a Visit Visa with verified original credentials, and I am available for <b>immediate in-person interviews and onboarding on 0 days notice</b>, fully prepared for immediate in-country employment visa issuance across Abu Dhabi, Dubai, or anywhere in the UAE. I welcome the opportunity to discuss how my technical skills, proactive work ethic, and dedication to high-availability IT services can support your organization's goals.",
        body_style
    ))

    story.append(Paragraph("Thank you for your time and consideration.", body_style))

    story.append(Spacer(1, 8))
    story.append(Paragraph("Sincerely,", body_style))
    story.append(Spacer(1, 3))
    story.append(Paragraph("<b>Athul Krishna O S</b>", ParagraphStyle('SignName', parent=body_style, fontName='Helvetica-Bold', fontSize=10.5, leading=14)))
    story.append(Paragraph("CCNA Certified IT Support &amp; Network Engineer (#CSCO15240575)", meta_style))

    doc.build(story)
    print("PDF Cover Letter Generated Successfully at:", output_path)

if __name__ == "__main__":
    generate_cover_letter_pdf(public_pdf)
    generate_cover_letter_pdf(cover_letter_pdf)
