function About() {
  return (
    <section id="about" className="bg-[#040817] px-6 py-20 border-t border-cyan-500/10">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-start gap-2 reveal">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
            About Me
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Delivering Dependable IT Infrastructure &amp; Support
          </h2>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-12 items-start">
          {/* Main Description */}
          <div className="lg:col-span-8 space-y-5 rounded-2xl border border-cyan-500/15 bg-[#0a0f26] p-8 text-gray-300 text-base sm:text-lg leading-relaxed reveal delay-1">
            <p>
              I am an experienced IT Support Specialist &amp; Network Engineer with over 4 years of hands-on expertise in desktop support, computer networking, Windows administration, and field IT infrastructure.
            </p>

            <p>
              Throughout my career at Grand Infotech—progressing from Junior Technician to Senior Support Specialist and Service Coordinator—I have focused on keeping systems reliable, resolving technical issues quickly, and ensuring high customer satisfaction.
            </p>

            <p>
              My background includes Cisco networking (CCNA certified), hardware repair, CCTV surveillance installation, printer maintenance, and practical PowerShell automation for routine system setups.
            </p>

            <p className="pt-3 text-cyan-300 font-medium border-t border-cyan-500/10 text-base">
              Actively seeking IT Support Engineer, Desktop Support, or Network Administrator roles in the UAE. Available for immediate joining and relocation.
            </p>
          </div>

          {/* Quick Metrics / Highlights Grid */}
          <div className="lg:col-span-4 grid sm:grid-cols-2 lg:grid-cols-1 gap-4 reveal delay-2">
            <div className="interactive-card rounded-xl border border-cyan-500/20 bg-[#0d1228] p-5 flex items-center gap-4 transition duration-300 hover:border-cyan-400">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-cyan-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Cisco Certified (CCNA)</h3>
                <p className="text-xs text-gray-400 mt-0.5 leading-normal">Routing &amp; Switching Fundamentals</p>
              </div>
            </div>

            <div className="interactive-card rounded-xl border border-cyan-500/20 bg-[#0d1228] p-5 flex items-center gap-4 transition duration-300 hover:border-cyan-400">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-cyan-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">4+ Years Experience</h3>
                <p className="text-xs text-gray-400 mt-0.5 leading-normal">Desktop, Network &amp; Field Support</p>
              </div>
            </div>

            <div className="interactive-card rounded-xl border border-cyan-500/20 bg-[#0d1228] p-5 flex items-center gap-4 sm:col-span-2 lg:col-span-1 transition duration-300 hover:border-cyan-400">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-cyan-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a2.5 2.5 0 002.5-2.5V11a2 2 0 012-2h1.065M12 2a10 10 0 100 20 10 10 0 000-20z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Open for Opportunities</h3>
                <p className="text-xs text-gray-400 mt-0.5 leading-normal">Ready for Immediate UAE Relocation</p>
              </div>
            </div>

            <div className="interactive-card rounded-xl border border-cyan-500/20 bg-[#0d1228] p-5 flex items-center gap-4 sm:col-span-2 lg:col-span-1 transition duration-300 hover:border-cyan-400">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-400/20 text-cyan-300">
                <span className="text-xl">🗣️</span>
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Languages</h3>
                <p className="text-xs text-gray-400 mt-0.5 leading-normal">English (Fluent) · Hindi · Malayalam (Native)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;