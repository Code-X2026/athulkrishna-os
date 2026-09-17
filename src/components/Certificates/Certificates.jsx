import { useState, useEffect, useRef } from "react";
import certificates from "../../Data/certificates";
import ccnaAthulDoc from "../../assets/images/certificates/athul_krishna_ccna_official.svg";

function Certificates() {
  const [activeCert, setActiveCert] = useState(null);
  const triggerRef = useRef(null);
  const modalRef = useRef(null);

  // Close modal on Escape key press and return focus
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && activeCert) {
        setActiveCert(null);
      }
    };
    if (activeCert) {
      window.addEventListener("keydown", handleKeyDown);
      if (modalRef.current) {
        const closeBtn = modalRef.current.querySelector("button");
        if (closeBtn) closeBtn.focus();
      }
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (!activeCert && triggerRef.current) {
        triggerRef.current.focus();
      }
    };
  }, [activeCert]);

  const handleOpenPreview = (cert, e) => {
    triggerRef.current = e.currentTarget;
    setActiveCert(cert);
  };

  const handleClosePreview = () => {
    setActiveCert(null);
    if (triggerRef.current) {
      triggerRef.current.focus();
    }
  };

  return (
    <section id="certificates" className="bg-[#050817] py-20 px-4 sm:px-6 border-t border-cyan-500/10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <span className="rounded-full bg-cyan-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300 border border-cyan-400/25">
            Verified Credentials &amp; Experience
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
            Official Certifications &amp; <span className="text-cyan-400">Employer Letters</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-gray-300 text-sm sm:text-base">
            Verified industry credentials and authenticated employer service certificates available for direct inspection and recruiter verification.
          </p>
        </div>

        <div className="mt-10 space-y-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className={`bg-[#0d1228] border rounded-2xl p-6 sm:p-7 transition duration-200 ${
                cert.type === "certification"
                  ? "border-cyan-400/40 shadow-lg shadow-cyan-500/5"
                  : "border-cyan-500/20"
              }`}
            >
              {/* Certificate Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-cyan-500/15">
                <div className="flex items-center gap-3">
                  <span className="text-2xl" aria-hidden="true">{cert.icon}</span>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                      {cert.badge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white">{cert.title}</h3>
                  </div>
                </div>

                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400 border border-emerald-500/25">
                  {cert.type === "certification" ? "ACTIVE Cisco Credential" : "VERIFIED Service Document"}
                </span>
              </div>

              {/* Key Details Grid */}
              <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm text-gray-300 bg-[#06091c] p-4 rounded-xl border border-cyan-500/10">
                <div>
                  <span className="block text-xs text-gray-400 uppercase font-medium">Issuer / Organization</span>
                  <strong className="text-white text-sm font-semibold">{cert.issuer}</strong>
                </div>
                <div>
                  <span className="block text-xs text-gray-400 uppercase font-medium">Period / Issued</span>
                  <strong className="text-cyan-300 text-sm">{cert.issued}</strong>
                </div>
                <div>
                  <span className="block text-xs text-gray-400 uppercase font-medium">
                    {cert.validUntil ? "Valid Until" : "Status"}
                  </span>
                  <strong className="text-cyan-300 text-sm">{cert.validUntil || cert.valid}</strong>
                </div>
                <div>
                  <span className="block text-xs text-gray-400 uppercase font-medium">Credential / Ref ID</span>
                  <strong className="text-white text-sm font-mono">{cert.credentialId}</strong>
                </div>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-gray-300 leading-relaxed">
                {cert.description}
              </p>

              {/* Action Buttons */}
              <div className="mt-5 flex flex-wrap gap-3 items-center pt-2">
                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold px-5 py-2.5 rounded-xl transition duration-150 text-xs sm:text-sm shadow-sm"
                  >
                    <span>Verify on Cisco Portal</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                )}

                <button
                  type="button"
                  onClick={(e) => handleOpenPreview(cert, e)}
                  className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 font-semibold px-4 py-2.5 rounded-xl transition duration-150 text-xs sm:text-sm"
                >
                  <span>View Official Document</span>
                </button>

                {cert.pdfUrl && (
                  <a
                    href={cert.pdfUrl}
                    download
                    className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white font-medium underline transition"
                  >
                    <span>Download PDF</span>
                    <span aria-hidden="true">↓</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accessible Certificate Modal Lightbox */}
      {activeCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
          onClick={handleClosePreview}
        >
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cert-modal-title"
            className="relative max-w-4xl w-full rounded-2xl border border-cyan-500/30 bg-[#0d1228] p-5 sm:p-6 shadow-2xl text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-cyan-500/15">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Official Document Preview</span>
                <h3 id="cert-modal-title" className="text-lg sm:text-xl font-bold text-white">
                  {activeCert.title} &mdash; {activeCert.issuer}
                </h3>
              </div>

              <button
                type="button"
                onClick={handleClosePreview}
                aria-label="Close certificate preview"
                className="text-gray-300 hover:text-white h-9 w-9 flex items-center justify-center rounded-lg bg-slate-800 border border-slate-700 font-bold text-base flex-shrink-0"
              >
                ✕
              </button>
            </div>

            <div className="mt-4 rounded-xl overflow-hidden bg-[#06091c] p-2 border border-slate-700 max-h-[70vh] flex items-center justify-center">
              <img
                src={activeCert.previewImg || ccnaAthulDoc}
                alt={`Official Certificate document for ${activeCert.title}`}
                className="w-full max-h-[66vh] object-contain rounded"
                loading="lazy"
              />
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-gray-400 font-mono">Reference: {activeCert.credentialId}</span>
              <div className="flex items-center gap-4">
                {activeCert.pdfUrl && (
                  <a
                    href={activeCert.pdfUrl}
                    download
                    className="text-cyan-300 hover:underline font-semibold flex items-center gap-1"
                  >
                    <span>Download Original PDF</span>
                    <span>↓</span>
                  </a>
                )}
                {activeCert.verificationUrl && (
                  <a
                    href={activeCert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300 hover:underline font-semibold"
                  >
                    Verify on Cisco.com ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificates;
