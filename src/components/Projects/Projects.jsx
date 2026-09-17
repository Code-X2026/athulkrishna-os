import { useState, useEffect, useRef } from "react";
import "./Projects.css";
import projects from "../../Data/projects";

function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const triggerRef = useRef(null);
  const modalRef = useRef(null);

  const handleCloseModal = () => {
    setActiveProject(null);
    if (triggerRef.current) {
      triggerRef.current.focus();
    }
  };

  const handleOpenModal = (project, e) => {
    triggerRef.current = e.currentTarget;
    setActiveProject(project);
  };

  // Accessible Escape key listener and focus management
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && activeProject) {
        handleCloseModal();
      }
    };

    if (activeProject) {
      window.addEventListener("keydown", handleKeyDown);
      setTimeout(() => {
        if (modalRef.current) {
          const closeBtn = modalRef.current.querySelector("button");
          if (closeBtn) closeBtn.focus();
        }
      }, 50);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProject]);

  const handleCardKeyDown = (e, project) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleOpenModal(project, e);
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        {/* Section Header */}
        <div className="projects-heading">
          <div className="projects-title-wrapper">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-950/30 px-3.5 py-1 rounded-full border border-sky-500/20 mb-2">
              <span>CASE STUDIES &amp; WORK EVIDENCE</span>
            </div>
            <h2>
              Featured <span className="projects-gradient-text">IT Implementations</span>
            </h2>
            <p className="mt-3 text-zinc-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              Real-world automation toolkits, service desk workflows, and verified onsite hardware and networking deployments.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.number}
              role="button"
              tabIndex={0}
              aria-haspopup="dialog"
              aria-label={`View project details for ${project.title}`}
              onClick={(e) => handleOpenModal(project, e)}
              onKeyDown={(e) => handleCardKeyDown(e, project)}
              className="project-card group cursor-pointer text-left"
            >
              {/* Card Header Strip */}
              <div className="project-terminal-strip">
                <span className="terminal-strip-id">PROJECT {project.number}</span>
                <span className="terminal-strip-status">
                  <span className="terminal-strip-dot" /> VERIFIED IMPLEMENTATION
                </span>
              </div>

              {project.coverImage && (
                <div className="project-cover-wrap">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="project-cover-img"
                    loading="lazy"
                    width="600"
                    height="335"
                  />
                  <div className="project-cover-overlay" />
                  <span className="project-cover-badge">
                    {project.badge}
                  </span>
                </div>
              )}

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {project.logo ? (
                        <img
                          src={project.logo}
                          alt=""
                          aria-hidden="true"
                          className="w-7 h-7 rounded-md object-cover bg-black/60 p-0.5 border border-zinc-700"
                          loading="lazy"
                          width="28"
                          height="28"
                        />
                      ) : (
                        <div className="project-number-badge">
                          <span>{project.number}</span>
                        </div>
                      )}
                      <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">{project.type}</span>
                    </div>

                    {project.metric && (
                      <span className="project-metric-pill font-mono">{project.metric}</span>
                    )}
                  </div>

                  <div className="mt-3">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-300 text-xs sm:text-sm mt-2 line-clamp-3 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="project-tags">
                    {project.toolsAndEnvironment.slice(0, 4).map((tech) => (
                      <span key={tech} className="project-tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-action-row">
                    <span>View Case Study &amp; Verification</span>
                    <span className="project-action-arrow" aria-hidden="true">→</span>
                  </div>
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>

      {/* Accessible Project Modal Lightbox */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
          onClick={handleCloseModal}
        >
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-2xl border border-cyan-500/30 bg-[#0d1228] p-6 sm:p-7 shadow-2xl text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-cyan-500/15">
              <div className="flex items-center gap-3">
                {activeProject.logo ? (
                  <img
                    src={activeProject.logo}
                    alt=""
                    aria-hidden="true"
                    className="w-10 h-10 rounded-lg object-cover border border-cyan-400/30 bg-black/50 p-0.5"
                    width="40"
                    height="40"
                  />
                ) : (
                  <span className="text-2xl" aria-hidden="true">{activeProject.icon}</span>
                )}
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-cyan-300">{activeProject.type}</span>
                  <h3 id="project-modal-title" className="text-xl sm:text-2xl font-bold text-white">{activeProject.title}</h3>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCloseModal}
                aria-label="Close project details"
                className="text-gray-300 hover:text-white h-9 w-9 flex items-center justify-center rounded-lg bg-slate-800 border border-slate-700 font-bold text-base shrink-0"
              >
                ✕
              </button>
            </div>

            {/* On-Site Verification Photo Banner */}
            {activeProject.image && (
              <div className="mt-4 rounded-xl overflow-hidden bg-black/80 border border-cyan-500/20 max-h-72 flex items-center justify-center relative">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full max-h-72 object-cover"
                  loading="lazy"
                />
                <span className="absolute bottom-2.5 right-2.5 rounded bg-black/85 px-2.5 py-1 text-[11px] font-sans font-semibold text-cyan-300 border border-cyan-500/30">
                  ✓ Authentic On-Site Evidence
                </span>
              </div>
            )}

            {/* Visual 4-Step Architecture Pipeline */}
            {activeProject.architectureSteps && (
              <div className="mt-4 rounded-xl bg-[#06091c] border border-cyan-500/15 p-4">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 mb-3 flex items-center gap-1.5">
                  <span>📐</span> Implementation Architecture &amp; Workflow
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                  {activeProject.architectureSteps.map((stepItem) => (
                    <div key={stepItem.step} className="p-3 rounded-lg bg-slate-900/90 border border-slate-800">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
                          STEP {stepItem.step}
                        </span>
                        <span className="text-xs font-bold text-white truncate">{stepItem.title}</span>
                      </div>
                      <p className="text-[11px] text-gray-300 leading-normal">{stepItem.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Structured 5-Part Content */}
            <div className="mt-4 space-y-3.5 text-xs sm:text-sm text-gray-300">
              {/* Problem */}
              <div className="rounded-xl bg-[#06091c] border border-cyan-500/15 p-4">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-1 flex items-center gap-1.5">
                  <span>⚠️</span> Problem Statement
                </h4>
                <p className="leading-relaxed text-gray-200">{activeProject.problem}</p>
              </div>

              {/* What I Did */}
              <div className="rounded-xl bg-[#06091c] border border-cyan-500/15 p-4">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-1 flex items-center gap-1.5">
                  <span>🛠️</span> What I Did (Technical Execution)
                </h4>
                <p className="leading-relaxed text-gray-200">{activeProject.whatIDid}</p>
              </div>

              {/* Tools & Environment */}
              <div className="rounded-xl bg-[#06091c] border border-cyan-500/15 p-4">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-300 mb-2 flex items-center gap-1.5">
                  <span>⚙️</span> Tools &amp; Environment
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeProject.toolsAndEnvironment.map((tool) => (
                    <span key={tool} className="text-xs bg-slate-800/90 border border-slate-700 text-cyan-200 px-2.5 py-1 rounded-md font-mono">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Evidence */}
              <div className="rounded-xl bg-[#06091c] border border-cyan-500/15 p-4">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-1 flex items-center gap-1.5">
                  <span>📋</span> Verifiable Evidence
                </h4>
                <p className="leading-relaxed text-gray-200">{activeProject.evidence}</p>
                {activeProject.evidenceLabel && (
                  <p className="mt-2 text-xs font-mono font-semibold text-emerald-400">
                    ✓ {activeProject.evidenceLabel}
                  </p>
                )}
              </div>

              {/* Result */}
              <div className="rounded-xl bg-emerald-950/20 border border-emerald-500/25 p-4">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-1 flex items-center gap-1.5">
                  <span>✅</span> Defensible Business Impact
                </h4>
                <p className="leading-relaxed text-gray-200">{activeProject.result}</p>
              </div>
            </div>

            {/* Action Links */}
            <div className="mt-6 pt-4 border-t border-cyan-500/15 flex flex-wrap items-center justify-between gap-3">
              {activeProject.githubUrl ? (
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 px-4 py-2 text-xs font-bold transition-colors"
                >
                  <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>View Project Source Code</span>
                  <span aria-hidden="true">↗</span>
                </a>
              ) : activeProject.documentationUrl ? (
                <a
                  href={activeProject.documentationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 px-4 py-2 text-xs font-bold transition-colors"
                >
                  <span>Read Field Playbook Runbook</span>
                  <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <span className="text-xs text-cyan-300 font-medium">
                  Field evidence verified in gallery below
                </span>
              )}

              <button
                type="button"
                onClick={handleCloseModal}
                className="text-xs text-zinc-400 hover:text-white px-3.5 py-1.5 rounded-lg border border-zinc-700 font-medium"
              >
                Close Details
              </button>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
