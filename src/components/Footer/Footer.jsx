import profile from "../../Data/profile";
import "./Footer.css";

const footerLinks = [
  { label: "Work History", href: "#experience" },
  { label: "Cisco CCNA Credentials", href: "#certificates" },
  { label: "Featured IT Projects", href: "#projects" },
  { label: "Technical Competencies", href: "#skills" },
  { label: "Recruiter Documents", href: "#documents" },
  { label: "Direct Contact", href: "#contact" },
];

function Footer() {
  return (
    <footer className="site-footer">
      {/* 3 Executive Summary Cards */}
      <div className="footer-telemetry-grid">
        <div className="footer-telemetry-card">
          <span className="telemetry-card-tag">CORE SPECIALIZATION</span>
          <h4 className="telemetry-card-title">Enterprise IT &amp; Network Support</h4>
          <p className="telemetry-card-sub">Cisco CCNA Certified • Routing, Switching &amp; Break-Fix</p>
        </div>

        <div className="footer-telemetry-card">
          <span className="telemetry-card-tag">UAE MOBILITY &amp; NOTICE</span>
          <div className="telemetry-status-row">
            <span className="dot-green" aria-hidden="true" />
            <h4 className="telemetry-card-title text-emerald-400">Available Immediately</h4>
          </div>
          <p className="telemetry-card-sub">0 Days Notice • In Abu Dhabi (Visit Visa Transfer)</p>
        </div>

        <div className="footer-telemetry-card">
          <span className="telemetry-card-tag">BASE &amp; DEPLOYMENTS</span>
          <h4 className="telemetry-card-title">Abu Dhabi &amp; Dubai</h4>
          <a
            href={profile.ccnaVerificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="telemetry-card-sub text-sky-400 hover:underline font-mono"
            title="Verify Cisco CCNA Credential"
          >
            Cisco CCNA Credential #CSCO15240575 ↗
          </a>
        </div>
      </div>

      {/* Architectural Watermark Brand */}
      <div className="footer-watermark-wrapper" aria-hidden="true">
        <span className="footer-watermark-text">ATHUL KRISHNA</span>
      </div>

      {/* Main Footer Navigation & Contact */}
      <div className="footer-content">
        <div className="footer-brand">
          <a className="logo-brand" href="#home">
            <div className="logo-badge">AK</div>
            <div className="logo-text-group">
              <span className="logo-name">Athul Krishna O S</span>
              <span className="logo-status">
                <span className="status-dot" aria-hidden="true" /> CCNA Certified IT Engineer
              </span>
            </div>
          </a>
          <p className="mt-3 text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed">
            Hands-on IT Support Engineer specializing in hardware break-fix, workstation deployment, structured Cat6 cabling, and PowerShell automation.
          </p>
        </div>

        <nav className="footer-navigation" aria-label="Footer navigation">
          <p className="font-mono-tech">Navigation Index</p>
          <div>{footerLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}</div>
        </nav>

        <div className="footer-contact">
          <p className="font-mono-tech">Direct Recruiter Channel</p>
          <a href={`mailto:${profile.email}`} className="footer-contact-link">

            {profile.email}
          </a>
          <span className="text-zinc-300 text-xs">+971 56 435 7994 · WhatsApp Active</span>
          <a
            href="https://wa.me/971564357994?text=Hi%20Athul,%20I%20reviewed%20your%20IT%20support%20portfolio%20and%20would%20like%20to%20connect!"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-wa-pill"
          >
            <span>💬 Direct WhatsApp Connect</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="font-mono-tech">© {new Date().getFullYear()} Athul Krishna O S · CCNA Verified IT Engineer</span>
        <a href="#home" className="footer-back-top">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default Footer;
