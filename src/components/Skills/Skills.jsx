const skills = [
  { name: "CCNA Networking", level: 90 },
  { name: "Desktop Support", level: 95 },
  { name: "Windows Administration", level: 90 },
  { name: "Hardware Troubleshooting", level: 95 },
  { name: "Printer Maintenance", level: 95 },
  { name: "CCTV Installation", level: 90 },
  { name: "Microsoft 365", level: 80 },
  { name: "PowerShell Automation", level: 75 },
  { name: "HTML / CSS / React", level: 70 },
  { name: "Git & GitHub", level: 75 },
];

function Skills() {
  return (
    <section id="skills" className="bg-[#050817] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-center uppercase tracking-[6px] text-cyan-400">Skills</p>
        <h2 className="mt-4 text-center text-4xl font-bold text-white sm:text-5xl">Technical Skills</h2>
        <p className="mx-auto mt-6 max-w-2xl text-center leading-7 text-gray-300">
          A practical blend of desktop support, infrastructure, network, and automation skills.
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {skills.map((skill) => (
            <article key={skill.name} className="rounded-2xl border border-cyan-500/20 bg-[#0d1228] p-6 transition duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-semibold text-white">{skill.name}</h3>
                <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm font-bold text-cyan-300">{skill.level}%</span>
              </div>
              <div className="mt-5 h-2.5 overflow-hidden rounded-full bg-[#1a2138]" role="progressbar" aria-label={`${skill.name} proficiency`} aria-valuemin="0" aria-valuemax="100" aria-valuenow={skill.level}>
                <div className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-300" style={{ width: `${skill.level}%` }} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
