import profile from "../../Data/profile";
import "./RecruiterBar.css";

function RecruiterBar() {
  const waText = encodeURIComponent(
    "Hi Athul, I reviewed your IT support & network engineering portfolio and would like to connect regarding an opportunity in Abu Dhabi / Dubai."
  );

  return (
    <aside className="recruiter-bar" aria-label="Recruiter fast-track header">
      <div className="recruiter-bar-container">
        {/* Left: Availability Status Pill */}
        <div className="recruiter-status-block">
          <span className="recruiter-pulse-dot" aria-hidden="true" />
          <span className="recruiter-status-text">
            <strong>UAE Availability:</strong> In Baniyas West, Abu Dhabi (Immediate Joining) | Ready for In-Country Visa Transfer &amp; Interviews
          </span>
        </div>

        {/* Right: Fast-Track 1-Click Actions */}
        <div className="recruiter-actions-group">
          {/* 1-Click WhatsApp */}
          <a
            href={`https://wa.me/971564357994?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="recruiter-action-btn recruiter-btn-whatsapp"
            title="Chat directly on WhatsApp (+971 56 435 7994)"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            <span>WhatsApp</span>
          </a>

          {/* 1-Click ATS Resume Download */}
          <a
            href={profile.pdfResumeUrl}
            download="Athul_Krishna_OS_Resume.pdf"
            className="recruiter-action-btn recruiter-btn-resume"
            title="Download ATS-Optimized Resume PDF"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Resume PDF</span>
          </a>

          {/* 1-Click UAE Cover Letter Download */}
          <a
            href={profile.coverLetterPdfUrl}
            download="Athul_Krishna_OS_Cover_Letter_UAE.pdf"
            className="recruiter-action-btn recruiter-btn-cover"
            title="Download UAE Tailored Cover Letter PDF"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="hidden md:inline">Cover Letter</span>
          </a>

          {/* Direct Email */}
          <a
            href={`mailto:${profile.email}?subject=IT%20Support%20Opportunity%20-%20UAE&body=Hi%20Athul,%20I%20reviewed%20your%20IT%20portfolio%20and%20would%20like%20to%20connect.`}
            className="recruiter-action-btn recruiter-btn-email"
            title={`Send direct email to ${profile.email}`}
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="hidden sm:inline">Email</span>
          </a>

          {/* Direct Phone / Call */}
          <a
            href={`tel:${profile.phone}`}
            className="recruiter-action-btn recruiter-btn-phone"
            title={`Direct phone call: ${profile.phone}`}
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="hidden sm:inline">Call</span>
          </a>
        </div>
      </div>
    </aside>
  );
}

export default RecruiterBar;
