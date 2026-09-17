import os
from reportlab.lib.pagesizes import A4
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Image, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors

def draw_background(canvas, doc):
    canvas.saveState()
    # Draw navy blue sidebar background covering the entire left side
    canvas.setFillColor(colors.HexColor("#0f172a"))
    canvas.rect(0, 0, 190, 842, fill=1, stroke=0)
    canvas.restoreState()

def generate_pdf(output_path, photo_path):
    # Standard A4: 595.27 x 841.89 pt
    # Left margin 0 so the table can stretch edge-to-edge for the background
    doc = SimpleDocTemplate(
        output_path,
        pagesize=A4,
        rightMargin=20,
        leftMargin=0,
        topMargin=15,
        bottomMargin=15
    )

    styles = getSampleStyleSheet()

    navy = colors.HexColor("#0f172a")
    cyan = colors.HexColor("#0284c7")
    dark = colors.HexColor("#1e293b")
    gray = colors.HexColor("#475569")
    white = colors.white

    # Left Column Styles
    left_title = ParagraphStyle('LeftTitle', fontName='Helvetica-Bold', fontSize=12, leading=14, textColor=cyan, spaceBefore=14, spaceAfter=4)
    left_text = ParagraphStyle('LeftText', fontName='Helvetica', fontSize=9, leading=13, textColor=white, spaceAfter=4)
    left_bullet = ParagraphStyle('LeftBullet', fontName='Helvetica', fontSize=9, leading=13, textColor=white, leftIndent=10, firstLineIndent=-5, spaceAfter=2)
    
    # Right Column Styles
    name_style = ParagraphStyle('Name', fontName='Helvetica-Bold', fontSize=26, leading=28, textColor=navy, spaceAfter=2)
    title_style = ParagraphStyle('Title', fontName='Helvetica-Bold', fontSize=11, leading=13, textColor=cyan, spaceAfter=10)
    
    right_sec_title = ParagraphStyle('RightSecTitle', fontName='Helvetica-Bold', fontSize=12, leading=14, textColor=navy, spaceBefore=10, spaceAfter=2)
    
    comp_name = ParagraphStyle('CompName', fontName='Helvetica-Bold', fontSize=10.5, leading=12, textColor=navy, spaceBefore=6, spaceAfter=1)
    comp_role = ParagraphStyle('CompRole', fontName='Helvetica-Bold', fontSize=9.5, leading=11, textColor=dark, spaceAfter=1)
    comp_meta = ParagraphStyle('CompMeta', fontName='Helvetica-Oblique', fontSize=9, leading=10, textColor=cyan, spaceAfter=3)
    
    body = ParagraphStyle('Body', fontName='Helvetica', fontSize=9.5, leading=13, textColor=dark, spaceAfter=4)
    bullet = ParagraphStyle('Bullet', fontName='Helvetica', fontSize=9, leading=12, textColor=dark, leftIndent=10, firstLineIndent=-5, spaceAfter=1)

    # --- LEFT COLUMN FLOWABLES ---
    left_flow = []
    
    # Photo
    try:
        photo = Image(photo_path)
        photo.drawWidth = 105
        photo.drawHeight = 125
        left_flow.append(photo)
        left_flow.append(Spacer(1, 10))
    except Exception as e:
        print("Photo error:", e)

    # Contact
    left_flow.append(Paragraph("CONTACT", left_title))
    left_flow.append(HRFlowable(width="100%", thickness=1, color=cyan, spaceBefore=0, spaceAfter=6))
    left_flow.append(Paragraph("<b>Phone:</b><br/>+971 56 435 7994", left_text))
    left_flow.append(Paragraph("<b>Email:</b><br/>athulkrishna.os.work<br/>@gmail.com", left_text))
    left_flow.append(Paragraph("<b>Location:</b><br/>Abu Dhabi, UAE<br/>(Visit Visa - Immediate)", left_text))
    left_flow.append(Paragraph("<b>Portfolio:</b><br/>athulkrishna-it.netlify.app", left_text))
    left_flow.append(Paragraph("<b>LinkedIn:</b><br/>linkedin.com/in/<br/>athulkrishna-os", left_text))

    # Core Competencies
    left_flow.append(Paragraph("CORE SKILLS", left_title))
    left_flow.append(HRFlowable(width="100%", thickness=1, color=cyan, spaceBefore=0, spaceAfter=6))
    skills = [
        "Windows 10/11 OS",
        "PC/Laptop Repair",
        "Hardware Upgrades",
        "Custom PC Assembly",
        "Network Printers",
        "Cat6 Cabling (T568B)",
        "LAN Troubleshooting",
        "IP CCTV (Assisted)",
        "Dev Soft Ticketing",
        "Active Directory (Basic)",
        "PowerShell & WinGet",
        "AI-Assisted Scripting"
    ]
    for skill in skills:
        left_flow.append(Paragraph(f"&bull; {skill}", left_bullet))

    # Languages
    left_flow.append(Paragraph("LANGUAGES", left_title))
    left_flow.append(HRFlowable(width="100%", thickness=1, color=cyan, spaceBefore=0, spaceAfter=6))
    left_flow.append(Paragraph("&bull; English (Professional)", left_bullet))
    left_flow.append(Paragraph("&bull; Malayalam (Native)", left_bullet))
    left_flow.append(Paragraph("&bull; Hindi (Conversational)", left_bullet))

    # --- RIGHT COLUMN FLOWABLES ---
    right_flow = []
    right_flow.append(Paragraph("ATHUL KRISHNA O S", name_style))
    right_flow.append(Paragraph("IT Support Technician &amp; Hardware Specialist &bull; CCNA Certified", title_style))
    
    right_flow.append(Paragraph("PROFESSIONAL SUMMARY", right_sec_title))
    right_flow.append(HRFlowable(width="100%", thickness=1.5, color=navy, spaceBefore=0, spaceAfter=6))
    right_flow.append(Paragraph("CCNA-certified IT Support Technician with 4 years of hands-on experience in desktop/laptop hardware repair, PC assembly, Windows OS configuration, and customer-facing support. Progressed through three formal promotions over 4 continuous years at Grand Infotech. Hands-on exposure to CCTV camera installation, Cat6 cabling, and basic network setup through a field role at Wings IT Solutions. Built AI-assisted automation scripts that improved service desk workflows. Verified original credentials. Available for immediate onboarding.", body))

    right_flow.append(Paragraph("PROFESSIONAL EXPERIENCE", right_sec_title))
    right_flow.append(HRFlowable(width="100%", thickness=1.5, color=navy, spaceBefore=0, spaceAfter=6))

    # Grand Infotech
    right_flow.append(Paragraph("GRAND INFOTECH &mdash; Kerala, India", comp_name))
    right_flow.append(Paragraph("4 Years Continuous Service &amp; 3 Formal Promotions", comp_meta))
    
    right_flow.append(Paragraph("IT Support Lead &amp; Service Coordinator", comp_role))
    right_flow.append(Paragraph("Jan 2025 &ndash; Apr 2026", comp_meta))
    right_flow.append(Paragraph("&bull; Managed repair job intake, customer communication, and service tracking across ~30+ weekly tickets using Dev Soft.", bullet))
    right_flow.append(Paragraph("&bull; Coordinated 3 junior technicians &mdash; managed job assignments, handled escalations, and maintained delivery timelines.", bullet))
    right_flow.append(Paragraph("&bull; Built Helious Pro, an AI-assisted WhatsApp-integrated repair tracking tool to automate customer notifications.", bullet))
    right_flow.append(Spacer(1, 3))

    right_flow.append(Paragraph("Senior IT Support Technician", comp_role))
    right_flow.append(Paragraph("2023 &ndash; 2025", comp_meta))
    right_flow.append(Paragraph("&bull; Diagnosed and resolved hardware/OS faults daily &mdash; screen/keyboard replacements, RAM/SSD upgrades, virus removal.", bullet))
    right_flow.append(Paragraph("&bull; Generated Nexus Prime via AI (ChatGPT/Gemini), a PowerShell/WinGet script for software deployment on 20+ PCs.", bullet))
    right_flow.append(Paragraph("&bull; Led a 10-PC accounting firm deployment &mdash; assembled custom desktops, installed Windows 11, configured printers.", bullet))
    right_flow.append(Spacer(1, 3))

    right_flow.append(Paragraph("IT Support Technician", comp_role))
    right_flow.append(Paragraph("2022 &ndash; 2023", comp_meta))
    right_flow.append(Paragraph("&bull; Assembled and bench-tested custom desktop PCs for commercial clients &mdash; BIOS setup, OS partitioning.", bullet))
    
    # Wings IT
    right_flow.append(Spacer(1, 3))
    right_flow.append(Paragraph("WINGS IT SOLUTIONS &mdash; Kerala, India", comp_name))
    right_flow.append(Paragraph("IT Infrastructure Support Assistant", comp_role))
    right_flow.append(Paragraph("Jun 2026 &ndash; Aug 2026", comp_meta))
    right_flow.append(Paragraph("&bull; Assisted lead engineer installing IP CCTV &mdash; mounted cameras, pulled Cat6 cables, connected to PoE switches.", bullet))
    right_flow.append(Paragraph("&bull; Terminated RJ45 connectors and punched down cables into patch panels following T568B standards.", bullet))
    right_flow.append(Paragraph("&bull; Configured static IPs on cameras (Lead handled NVR, VPN, and advanced network settings).", bullet))
    
    # Certifications
    right_flow.append(Paragraph("CERTIFICATIONS &amp; CREDENTIALS", right_sec_title))
    right_flow.append(HRFlowable(width="100%", thickness=1.5, color=navy, spaceBefore=0, spaceAfter=6))
    right_flow.append(Paragraph("&bull; <b>Cisco CCNA</b> &mdash; Cisco Systems | Credential: CSCO15240575", bullet))
    right_flow.append(Paragraph("&bull; <b>IT Support 4-Year Service</b> &mdash; Grand Infotech (Verified)", bullet))
    right_flow.append(Paragraph("&bull; <b>IT Infrastructure Support</b> &mdash; Wings IT (Verified)", bullet))
    right_flow.append(Paragraph("&bull; <b>Laptop Hardware Diagnostics</b> &mdash; L-One Chip Level (Verified)", bullet))

    # Construct the master table
    # Total width = 595 - 20(rightMargin) = 575
    # Left Col = 190. Right Col = 385.
    master_table = Table([[left_flow, right_flow]], colWidths=[190, 385])
    master_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        
        # Left column padding
        ('LEFTPADDING', (0,0), (0,0), 20),
        ('RIGHTPADDING', (0,0), (0,0), 15),
        ('TOPPADDING', (0,0), (0,0), 5),
        ('BOTTOMPADDING', (0,0), (0,0), 5),
        
        # Right column padding
        ('LEFTPADDING', (1,0), (1,0), 20),
        ('RIGHTPADDING', (1,0), (1,0), 0),
        ('TOPPADDING', (1,0), (1,0), 5),
        ('BOTTOMPADDING', (1,0), (1,0), 5),
    ]))
    
    story = [master_table]
    
    # Use onFirstPage and onLaterPages to draw the background
    doc.build(story, onFirstPage=draw_background, onLaterPages=draw_background)
    print("Generated PERFECT Drop-in Resume PDF at:", output_path)

if __name__ == "__main__":
    script_dir = os.path.dirname(os.path.abspath(__file__))
    project_root = os.path.abspath(os.path.join(script_dir, ".."))
    
    docs_dir = os.path.join(project_root, "11_Documents")
    if not os.path.exists(docs_dir):
        os.makedirs(docs_dir)
        
    # Remove old file if it exists to ensure fresh generation
    output_pdf = os.path.join(docs_dir, "Drop_in_Resume.pdf")
    if os.path.exists(output_pdf):
        try:
            os.remove(output_pdf)
        except:
            pass
            
    photo_path = os.path.join(script_dir, "src", "assets", "images", "profile", "athul_krishna.jpg")
    
    generate_pdf(output_pdf, photo_path)
