import "./Projects.css";

const projects = [
  {
    number: "01",
    type: "Automation Toolkit",
    title: "Nexus Prime",
    description: "An AI-assisted Windows deployment toolkit that automates software installation through Winget and Chocolatey, helping reduce new-system setup time.",
    technologies: ["PowerShell", "Winget", "Chocolatey", "Windows", "AI"],
  },
  {
    number: "02",
    type: "Service Operations",
    title: "Helious Tracker",
    description: "A custom tracking system for organizing service records, monitoring repair status, and improving day-to-day IT operations workflow.",
    technologies: ["Excel", "Automation", "AI", "Reporting"],
  },
  {
    number: "03",
    type: "Deployment Support",
    title: "Automated Deployment Matrix",
    description: "A deployment assistant that helps technicians install and configure Windows software consistently across newly prepared systems.",
    technologies: ["PowerShell", "Windows", "Automation"],
  },
  {
    number: "04",
    type: "Field Infrastructure",
    title: "IT Infrastructure Projects",
    description: "Hands-on desktop deployments, structured cabling, network installations, CCTV systems, printer setup, and hardware troubleshooting.",
    technologies: ["Networking", "CCTV", "Desktop Support", "Hardware"],
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-heading">
          <div><p>Selected Work</p><h2>Practical IT projects.</h2></div>
          <span>Built around reliable support, repeatable systems, and everyday technical problem-solving.</span>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.number} className="project-card">
              <div className="project-card-top"><span>{project.number}</span><p>{project.type}</p></div>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
