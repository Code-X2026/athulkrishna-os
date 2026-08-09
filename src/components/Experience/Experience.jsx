const experience = [
  {
    role: "Networking & CCTV Technician",
    company: "Current Company",
    period: "2026 – Present",
    description: "Installing and troubleshooting computer networks, CCTV systems, DVR/NVR setups, switches, routers, structured cabling, and desktop support.",
  },
  {
    role: "Service Manager",
    company: "Grand Infotech",
    period: "2025 – 2026",
    description: "Managed service operations, coordinated technicians, handled customer support, inventory, and service workflow improvements.",
  },
  {
    role: "Senior Technician",
    company: "Grand Infotech",
    period: "2023 – 2025",
    description: "Performed desktop support, laptop repair, printer servicing, CCTV installations, networking, and customer technical support.",
  },
  {
    role: "Junior Technician",
    company: "Grand Infotech",
    period: "2022 – 2023",
    description: "Provided hardware repair, software installation, Windows troubleshooting, printer maintenance, and basic networking support.",
  },
];

function Experience() {
  return (
    <section id="experience" className="bg-[#06091c] px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-center uppercase tracking-[6px] text-cyan-400">Experience</p>
        <h2 className="mt-4 text-center text-4xl font-bold text-white sm:text-5xl">Professional Journey</h2>
        <p className="mx-auto mt-6 max-w-2xl text-center leading-7 text-gray-300">
          A hands-on career focused on dependable technology, responsive support, and practical solutions.
        </p>

        <div className="relative mt-14 space-y-8 border-l border-cyan-500/30 pl-7 sm:pl-10">
          {experience.map((item) => (
            <article key={`${item.company}-${item.role}`} className="relative rounded-2xl border border-cyan-500/20 bg-[#0d1228] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10 sm:p-8">
              <span className="absolute -left-[36px] top-8 h-4 w-4 rounded-full border-4 border-[#06091c] bg-cyan-400 sm:-left-[49px]" aria-hidden="true" />
              <p className="text-sm font-semibold uppercase tracking-[2px] text-cyan-300">{item.period}</p>
              <h3 className="mt-3 text-2xl font-bold text-white">{item.role}</h3>
              <p className="mt-1 text-lg font-medium text-cyan-400">{item.company}</p>
              <p className="mt-5 leading-8 text-gray-300">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
