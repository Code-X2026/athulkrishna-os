import "./CareerDocuments.css";
import profile from "../../Data/profile";

function CareerDocuments({ onOpenResume }) {
  return (
    <section id="documents" className="documents-section">
      <div className="section-container">
        <div className="section-header text-center">
          <span className="section-eyebrow">Recruitment Documents</span>
          <h2 className="section-title">Resume &amp; Cover Letter</h2>
          <p className="section-subtitle">
            Download verified, ATS-optimized recruitment documents tailored for UAE and GCC IT hiring managers.
          </p>
        </div>

        <div className="documents-grid">
          {/* Document 1: Resume */}
          <div className="document-card">
            <div className="document-icon-badge">
              <span aria-hidden="true">📄</span>
            </div>
            <div className="document-content">
              <span className="document-type-tag">ATS-Optimized Format</span>
              <h3 className="document-title">Professional IT Support Resume</h3>
              <p className="document-description">
                Concise 2-page ATS resume formatted for corporate screening. Highlights 4+ years of hands-on desktop support, CCNA networking, hardware break-fix, and PowerShell automation.
              </p>

              <div className="document-specs">
                <span className="spec-pill">✓ 2-Page Clean ATS Layout</span>
                <span className="spec-pill">✓ Cisco CCNA (#CSCO15240575)</span>
                <span className="spec-pill">✓ In UAE (Abu Dhabi) • Immediate</span>
              </div>

              <div className="document-actions">
                <a
                  href={profile.pdfResumeUrl}
                  download="Athul_Krishna_OS_Resume.pdf"
                  className="doc-btn primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Download Resume (PDF)</span>
                </a>

                <button
                  type="button"
                  onClick={onOpenResume}
                  className="doc-btn secondary"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>Preview Text Resume</span>
                </button>
              </div>
            </div>
          </div>

          {/* Document 2: Cover Letter */}
          <div className="document-card">
            <div className="document-icon-badge cyan">
              <span aria-hidden="true">✉️</span>
            </div>
            <div className="document-content">
              <span className="document-type-tag cyan">Application Letter</span>
              <h3 className="document-title">UAE IT Support Cover Letter</h3>
              <p className="document-description">
                Tailored UAE cover letter detailing practical field experience, hardware troubleshooting, Cisco LAN switching, CCTV deployments, and immediate onboarding availability in Abu Dhabi &amp; Dubai.
              </p>

              <div className="document-specs">
                <span className="spec-pill">✓ UAE Recruiter Formatted</span>
                <span className="spec-pill">✓ Practical IT Support Scope</span>
                <span className="spec-pill">✓ Abu Dhabi / Dubai Onboarding</span>
              </div>

              <div className="document-actions">
                <a
                  href={profile.coverLetterPdfUrl}
                  download="Athul_Krishna_OS_Cover_Letter_UAE.pdf"
                  className="doc-btn primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Download Cover Letter (PDF)</span>
                </a>

                <a
                  href={profile.coverLetterPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="doc-btn secondary"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>View PDF Document</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerDocuments;
