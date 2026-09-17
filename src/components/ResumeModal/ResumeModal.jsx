import { useState, useEffect, useRef } from "react";
import profile from "../../Data/profile";
import experience from "../../Data/experience";
import certificates from "../../Data/certificates";
import projects from "../../Data/projects";
import skillGroups from "../../Data/skills";
import "./ResumeModal.css";

function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      setTimeout(() => {
        if (modalRef.current) {
          const closeBtn = modalRef.current.querySelector(".resume-modal-close");
          if (closeBtn) closeBtn.focus();
        }
      }, 50);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyText = async () => {
    const textToCopy = `
ATHUL KRISHNA O S
${profile.title}
Location: ${profile.location}
Notice Period: Immediate | Visa Status: Ready for UAE Employment Visa Processing
Phone: ${profile.phone} | Email: ${profile.email}
LinkedIn: ${profile.linkedin} | Portfolio: ${profile.portfolio}

PROFESSIONAL SUMMARY:
${profile.summary}

TECHNICAL COMPETENCIES:
Hands-on Experience:
${skillGroups.find((g) => g.type === "hands-on")?.skills.map((s) => `• ${s.name}: ${s.detail}`).join("\n")}

Working Knowledge:
${skillGroups.find((g) => g.type === "working-knowledge")?.skills.map((s) => `• ${s.name}: ${s.detail}`).join("\n")}

WORK EXPERIENCE:
${experience.map((e) => `${e.role.toUpperCase()} — ${e.company} (${e.period})\n` + e.responsibilities.map((r) => `• ${r}`).join("\n")).join("\n\n")}

SELECTED PROJECTS (STAR METHODOLOGY):
${projects.map((p) => `${p.title} (${p.type})\n• Metric: ${p.metric}\n• Problem: ${p.problem}\n• Actions: ${p.whatIDid}\n• Evidence: ${p.evidence}\n• Result: ${p.result}`).join("\n\n")}

CERTIFICATIONS & CREDENTIALS:
${certificates.map((c) => `• ${c.title} — ${c.issuer} (Credential ID: ${c.credentialId}${c.validUntil ? `, Valid Until: ${c.validUntil}` : ""})`).join("\n")}

LANGUAGES:
English (Professional Working Proficiency) | Malayalam (Native) | Hindi (Conversational)

CURRENT LOCATION & RECRUITER DATA:
• Current Location: Abu Dhabi, UAE
• Visa Status: Visit Visa (Immediate In-Country Visa Transfer)
• Notice Period: Immediate (0 Days)
• Target Emirates: Abu Dhabi & Dubai (UAE)
• Nationality: Indian
• References: Available upon request
    `.trim();

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(textToCopy);
        setCopied(true);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        setCopied(true);
      }
    } catch {
      setCopied(true);
    }
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      className="resume-modal-overlay"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-modal-title"
        className="resume-modal-content text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Actions */}
        <div className="resume-modal-header">
          <div>
            <span className="resume-modal-badge">ATS RESUME DOCUMENT PREVIEW</span>
            <h2 id="resume-modal-title">{profile.name}</h2>
            <p>{profile.title}</p>
          </div>

          <div className="resume-modal-actions">
            <a
              href={profile.pdfResumeUrl}
              download="Athul_Krishna_OS_Resume.pdf"
              className="resume-modal-btn primary"
              title="Download Original PDF Resume"
            >
              📥 Download PDF
            </a>
            <button
              type="button"
              className="resume-modal-btn secondary"
              onClick={handleCopyText}
            >
              {copied ? "✓ Copied!" : "📋 Copy Plaintext"}
            </button>
            <button
              type="button"
              className="resume-modal-close"
              onClick={onClose}
              aria-label="Close resume preview"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Printable Resume Document */}
        <div className="printable-resume">
          {/* Header */}
          <div className="resume-doc-header text-center">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">{profile.name}</h1>
            <p className="text-xs sm:text-sm text-cyan-300 mt-1.5 font-medium">
              {profile.location} &nbsp;|&nbsp; Indian Nationality &nbsp;|&nbsp; {profile.phone}
            </p>
            <p className="text-xs text-gray-300 mt-1">
              {profile.email} &nbsp;|&nbsp; {profile.linkedin}
            </p>
          </div>

          <hr className="resume-divider" />

          {/* Summary */}
          <section className="resume-doc-section">
            <h3>PROFESSIONAL SUMMARY</h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{profile.summary}</p>
          </section>

          {/* Skills */}
          <section className="resume-doc-section">
            <h3>TECHNICAL COMPETENCIES</h3>
            <div className="space-y-3 text-xs sm:text-sm text-gray-300">
              <div>
                <strong className="text-cyan-300 block mb-1">Hands-on Experience:</strong>
                <p className="leading-relaxed">
                  Windows 10/11 system provisioning, desktop/laptop hardware diagnostics &amp; component break-fix, RAM/NVMe storage upgrades, thermal repasting, network multifunction printers, Cat6 cable termination (T568B), unmanaged &amp; Gigabit switches, CCTV/NVR IP surveillance, Dev Soft Ticketing, PowerShell 7, WinGet CLI.
                </p>
              </div>
              <div>
                <strong className="text-cyan-300 block mb-1">Working Knowledge:</strong>
                <p className="leading-relaxed">
                  Active Directory (ADUC) user management &amp; domain join, DHCP &amp; DNS basics, Group Policy (GPO), 802.1Q VLAN concepts, Cisco IOS fundamentals, basic Windows Server administration.
                </p>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="resume-doc-section">
            <h3>PROFESSIONAL EXPERIENCE</h3>
            <div className="resume-experience-list">
              {experience.map((exp) => (
                <div key={`${exp.company}-${exp.role}-${exp.period}`} className="resume-exp-item">
                  <div className="resume-exp-top flex flex-wrap justify-between items-center gap-1">
                    <h4 className="font-bold text-white uppercase text-sm sm:text-base">{exp.role}</h4>
                    <span className="resume-exp-period text-xs text-cyan-400 font-semibold">{exp.period}</span>
                  </div>
                  <p className="resume-exp-company text-xs sm:text-sm text-cyan-300 font-medium">
                    {exp.company} &nbsp;·&nbsp; {exp.location}
                  </p>
                  <ul className="mt-2 space-y-1.5 text-xs text-gray-300 list-disc list-outside pl-4">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="resume-doc-section">
            <h3>VERIFIED CERTIFICATIONS &amp; TRAINING</h3>
            <div className="space-y-2">
              {certificates.map((cert) => (
                <div key={cert.title} className="resume-cert-item">
                  <h4 className="font-bold text-white text-xs sm:text-sm">{cert.title} — {cert.issuer}</h4>
                  <p className="text-xs text-cyan-300 font-mono">
                    Credential ID: {cert.credentialId} {cert.validUntil && `(Valid Until: ${cert.validUntil})`}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section className="resume-doc-section">
            <h3>LANGUAGES</h3>
            <p className="text-xs text-gray-300">
              English (Professional Working Proficiency) &nbsp;·&nbsp; Malayalam (Native) &nbsp;·&nbsp; Hindi (Conversational)
            </p>
          </section>

          {/* Location & Recruiter Data */}
          <section className="resume-doc-section">
            <h3>AVAILABILITY &amp; RECRUITER DATA</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
              <div><strong>Current Location:</strong> Abu Dhabi, UAE</div>
              <div><strong>Notice Period:</strong> <span className="text-emerald-400 font-semibold">Immediate (0 Days)</span></div>
              <div><strong>Target Locations:</strong> Abu Dhabi &amp; Dubai (UAE)</div>
              <div><strong>Visa Status:</strong> Visit Visa (Immediate Transfer)</div>
              <div><strong>Availability:</strong> Immediate In-Person &amp; Joining</div>
              <div><strong>References:</strong> Available upon request</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ResumeModal;
