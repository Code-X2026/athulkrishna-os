import { useState } from "react";
import profile from "../../Data/profile";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    senderName: "",
    senderEmail: "",
    company: "",
    roleRequirement: ""
  });
  const [copied, setCopied] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyContact = () => {
    const textToCopy = `Athul Krishna O S | IT Support & Network Engineer
Email: ${profile.email}
Phone / WhatsApp: ${profile.phone}
LinkedIn: ${profile.linkedin}
Current Location: Baniyas West, Abu Dhabi, UAE
Availability: Immediate In-Person Interviews & Joining (0 Days Notice / Visit Visa / MOHRE Ready)
Target Region: Abu Dhabi & Dubai, UAE
Cisco CCNA ID: #CSCO15240575`;

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
    formData.roleRequirement
      ? `Interview Inquiry: ${formData.roleRequirement} - ${formData.company || "Enterprise"}`
      : `IT Support Opportunity - ${formData.company || "UAE Enterprise"}`
  )}&body=${encodeURIComponent(
    `Hi Athul,\n\nI reviewed your portfolio and would like to connect regarding an opportunity.\n\nName: ${formData.senderName || "[Recruiter Name]"}\nCompany: ${formData.company || "[Company Name]"}\nContact: ${formData.senderEmail || "[Email]"}\nRole Details: ${formData.roleRequirement || "[Details]"}\n\nBest regards,\n${formData.senderName || ""}`
  )}`;

  const whatsappMessage = encodeURIComponent(
    `Hi Athul, I am ${formData.senderName || "a recruiter"}${
      formData.company ? ` from ${formData.company}` : ""
    }. I reviewed your IT portfolio and would like to discuss an opportunity in Abu Dhabi / Dubai.`
  );

  return (
    <section id="contact" className="contact-section" aria-label="Direct Recruiter Contact">
      <div className="contact-section-header">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-950/30 px-3.5 py-1 rounded-full border border-sky-500/20 mb-3">
          <span>GET IN TOUCH</span>
        </div>
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
          Schedule an <span className="text-sky-400">Interview or Discussion</span>
        </h2>

        <p className="mt-3 max-w-xl mx-auto text-sm sm:text-base text-zinc-400 leading-relaxed">
          Actively interviewing for IT Support Engineer, Cisco Network Specialist, and Systems Administrator roles across Abu Dhabi and Dubai.
        </p>
      </div>

      <div className="contact-container">
        {/* Left Column: Direct Channels & Fast Copy Card */}
        <div className="contact-channel-card">
          <div>
            <div className="channel-card-header">
              <span className="channel-pulse-dot" aria-hidden="true" />
              <span className="channel-header-title">Direct Recruitment Channels</span>
            </div>

            <p className="channel-card-desc">
              Direct access to Athul Krishna O S. Reach out via email, WhatsApp, or phone for interviews and immediate on-site deployment in Dubai &amp; Abu Dhabi.
            </p>

            {/* Structured Direct Channels */}
            <div className="channel-list">
              <div className="channel-item">
                <div className="channel-item-left">
                  <span className="channel-item-label">Direct Email</span>
                  <a href={`mailto:${profile.email}`} className="channel-item-value">
                    {profile.email}
                  </a>
                </div>
                <a
                  href={`mailto:${profile.email}`}
                  className="channel-item-btn"
                  title="Send email"
                >
                  Email ↗
                </a>
              </div>

              <div className="channel-item">
                <div className="channel-item-left">
                  <span className="channel-item-label">WhatsApp Channel</span>
                  <a
                    href={`https://wa.me/971564357994?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-item-value"
                  >
                    +971 56 435 7994 (Direct Active)
                  </a>
                </div>
                <a
                  href={`https://wa.me/971564357994?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-item-btn channel-item-btn-wa"
                  title="Chat on WhatsApp"
                >
                  WhatsApp ↗
                </a>
              </div>

              <div className="channel-item">
                <div className="channel-item-left">
                  <span className="channel-item-label">Location &amp; Availability</span>
                  <span className="channel-item-value text-zinc-300">
                    Abu Dhabi &amp; Dubai (0 Days Notice)
                  </span>
                </div>
                <span className="channel-item-pill text-emerald-400">Visit Visa / In-Country</span>
              </div>

              <div className="channel-item">
                <div className="channel-item-left">
                  <span className="channel-item-label">Cisco Credential ID</span>
                  <a
                    href={profile.ccnaVerificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-item-value text-sky-400 font-mono-tech"
                  >
                    #CSCO15240575 (Official CCNA) ↗
                  </a>
                </div>
                <span className="channel-item-pill text-emerald-400">Active Credential</span>
              </div>
            </div>
          </div>

          {/* Clean 1-Click Copy All Contact Info Button */}
          <div className="channel-card-footer">
            <button
              type="button"
              onClick={handleCopyContact}
              className="copy-all-btn"
            >
              {copied ? (
                <>
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Contact Details Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                  <span>Copy Full Recruiter Brief &amp; Contact Info</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Column: Clean Corporate Inquiry Form */}
        <div className="contact-form-wrapper">
          <form className="form-card" onSubmit={(e) => e.preventDefault()}>
            <div>
              <h3 className="form-title">Send Direct Message</h3>
              <p className="form-subtitle">
                Fill out the details below to dispatch an email or WhatsApp inquiry directly.
              </p>

              <div className="mt-5 space-y-4">
                <div>
                  <label htmlFor="senderName" className="field-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="senderName"
                    name="senderName"
                    value={formData.senderName}
                    onChange={handleInputChange}
                    placeholder="e.g. Sarah Jenkins"
                    className="field-input"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="senderEmail" className="field-label">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="senderEmail"
                      name="senderEmail"
                      value={formData.senderEmail}
                      onChange={handleInputChange}
                      placeholder="e.g. hr@company.ae"
                      className="field-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="field-label">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="e.g. Dubai Commercial Bank / IT Solutions"
                      className="field-input"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="roleRequirement" className="field-label">
                    Role / Opportunity Details
                  </label>
                  <textarea
                    id="roleRequirement"
                    name="roleRequirement"
                    rows={4}
                    value={formData.roleRequirement}
                    onChange={handleInputChange}
                    placeholder="Tell me about the role, location (Abu Dhabi/Dubai), or schedule an interview..."
                    className="field-input resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 space-y-2.5">
              <a href={mailtoUrl} className="btn-send-primary">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Dispatch Email Message</span>
              </a>

              <a
                href={`https://wa.me/971564357994?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-send-whatsapp"
              >
                <span>💬 Quick Chat on WhatsApp</span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
