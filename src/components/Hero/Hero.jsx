import { useRef } from "react";
import profile from "../../Data/profile";
import "./Hero.css";

function Hero({ onOpenResume }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = (-y / (rect.height / 2)) * 6;
    const rotateY = (x / (rect.width / 2)) * 6;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-grid">

          {/* Left Column: Copy & Actions */}
          <div className="hero-text-col">
            <div className="hero-eyebrow-group">
              <span className="hero-cred-pill">CISCO CCNA #CSCO15240575</span>
              <span className="hero-region-badge">
                <span className="telemetry-pulse" aria-hidden="true" /> Baniyas West, Abu Dhabi &bull; Available In-Country
              </span>
            </div>

            <h1 className="hero-title">{profile.name}</h1>

            {/* Authoritative Static Role & Executive Subtitle */}
            <div className="hero-role-wrapper">
              <span className="hero-primary-role">IT Support &amp; Network Engineer</span>
              <span className="hero-role-subline">
                Enterprise Desktop Support &bull; Active Directory (AD DS) &bull; Cisco LAN/WLAN &bull; Service Desk SLA
              </span>
            </div>

            <p className="hero-summary">
              {profile.summary}
            </p>

            <div className="hero-availability">
              <span className="availability-dot" aria-hidden="true" />
              <span>Currently in Baniyas West, Abu Dhabi, UAE &bull; Ready for Immediate Joining &amp; Visa Transfer (0 Days Notice)</span>
            </div>


            {/* Primary CTAs (Recruiter-First) */}
            <div className="hero-actions">
              <a
                href={profile.pdfResumeUrl}
                download="Athul_Krishna_OS_Resume.pdf"
                className="hero-primary-action"
                title="Download verified resume PDF"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href="https://wa.me/971564357994?text=Hi%20Athul,%20I%20reviewed%20your%20IT%20support%20portfolio%20and%20would%20like%20to%20connect%20regarding%20UAE%20opportunities%20in%20Abu%20Dhabi%20or%20Dubai."
                target="_blank"
                rel="noopener noreferrer"
                className="hero-whatsapp-action"
                title="Chat directly on WhatsApp"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>WhatsApp Direct</span>
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="hero-text-action"
                title="View ATS Plaintext Resume"
              >
                View ATS Summary
              </button>
            </div>

            {/* Secondary Profile Anchors */}
            <div className="hero-secondary-links">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn Profile</span>
              </a>

              <span className="hero-social-sep" aria-hidden="true">•</span>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Executive Card with Official Cisco Link */}
          <div className="hero-visual-col">
            <div
              className="hero-avatar-wrapper"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="hero-avatar-glow" aria-hidden="true" />

              <div ref={cardRef} className="hero-avatar-card">
                {/* Official Cisco Verification Header */}
                <div className="avatar-hud-header">
                  <a
                    href={profile.ccnaVerificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hud-code-link"
                    title="Verify Cisco Credential on official Cisco portal"
                  >
                    Cisco Credential ID: #CSCO15240575 ↗
                  </a>
                  <span className="hud-status">
                    <span className="hud-dot" /> Verified
                  </span>
                </div>

                <div className="hero-image-frame">
                  <img
                    src={profile.avatarUrl}
                    alt={`${profile.name} - ${profile.title}`}
                    className="hero-avatar-img"
                    width="420"
                    height="420"
                    loading="eager"
                  />
                  <div className="hero-image-overlay" aria-hidden="true" />
                </div>

                {/* Bottom Credential Ribbon */}
                <a
                  href={profile.ccnaVerificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="avatar-hud-footer"
                  title="Verify Official Cisco CCNA Credential"
                >
                  <div className="hud-cred-info">
                    <span className="hud-cred-title">CISCO CCNA CERTIFIED ↗</span>
                    <span className="hud-cred-sub">Enterprise Routing &amp; Switching • Valid 2026–2029</span>
                  </div>
                  <span className="hud-check-badge" title="Official Verified Badge">✓</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Executive Track Record Metrics */}
        <div className="hero-highlights">
          {profile.highlights.map((item) => (
            <div key={item.label} className="hero-highlight-card">
              <span className="highlight-tag">VERIFIED TRACK RECORD</span>
              <p>{item.value}</p>
              <span className="highlight-label">{item.label}</span>
              <span className="highlight-detail">{item.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
