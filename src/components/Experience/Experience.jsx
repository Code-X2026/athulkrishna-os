import experience from "../../Data/experience";

function Experience() {
  return (
    <section id="experience" className="bg-[#06091c] px-4 sm:px-6 py-20 border-t border-cyan-500/10">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <span className="rounded-full bg-cyan-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300 border border-cyan-400/25">
            Work History
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
            Professional <span className="text-cyan-400">Experience</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-gray-300 text-sm sm:text-base">
            Hands-on technical service history with proven internal progression at Grand Infotech, practical component-level diagnostics, and field networking deployments.
          </p>
        </div>

        <div className="relative mt-12 space-y-8 border-l-2 border-cyan-500/30 ml-4 sm:ml-8 pl-6 sm:pl-8">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.role}-${item.period}`}
              className="relative rounded-2xl border border-cyan-500/20 bg-[#0d1228] p-5 sm:p-7 transition duration-200 hover:border-cyan-400/50"
            >
              {/* Timeline indicator dot positioned safely */}
              <span
                className="absolute -left-7.75 sm:-left-9.75 top-6 h-3.5 w-3.5 rounded-full border-2 border-[#06091c] bg-cyan-400"
                aria-hidden="true"
              />

              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-cyan-500/10">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                    {item.period}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">{item.role}</h3>
                  <p className="text-sm font-semibold text-cyan-400">
                    {item.company} &nbsp;·&nbsp; <span className="text-gray-400 font-normal">{item.location}</span>
                  </p>
                </div>

                <div className="flex flex-col items-end gap-1.5">
                  {item.isPromoted ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-bold tracking-wider text-emerald-300 border border-emerald-500/35 shadow-[0_0_10px_rgba(16,185,129,0.15)]">
                      <span aria-hidden="true">★</span> {item.promotionTitle || "Internal Promotion"}
                    </span>
                  ) : item.badge && (
                    <span className="rounded-full bg-cyan-400/10 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-cyan-300 border border-cyan-400/30">
                      {item.badge}
                    </span>
                  )}
                  {item.progression && (
                    <span className="text-[11px] text-emerald-400 font-medium max-w-xs text-right">
                      ↑ {item.progression}
                    </span>
                  )}
                </div>
              </div>

              <ul className="mt-4 space-y-2.5 text-gray-300 text-xs sm:text-sm leading-relaxed list-disc list-outside pl-5">
                {item.responsibilities.map((resp, idx) => (
                  <li key={idx} className="pl-1">
                    {resp}
                  </li>
                ))}
              </ul>

              {item.certificatePdf && (
                <div className="mt-4 pt-3 border-t border-cyan-500/10 flex flex-wrap items-center justify-between gap-2">
                  <a
                    href={item.certificatePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition"
                  >
                    <span>📜 View Official Experience Certificate</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-2 py-0.5 rounded font-mono uppercase">
                    Authenticated Document
                  </span>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
