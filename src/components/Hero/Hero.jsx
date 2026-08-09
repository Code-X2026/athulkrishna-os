import "./Hero.css";

const highlights = [
  { value: "4+", label: "Years of IT experience" },
  { value: "CCNA", label: "Cisco certified" },
  { value: "UAE", label: "Open to opportunities" },
];

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-content">
        <p className="hero-eyebrow">IT Infrastructure Portfolio</p>
        <h1>Athul Krishna O S</h1>
        <p className="hero-role">IT Support Engineer <span>·</span> Network &amp; Desktop Support Specialist</p>

        <p className="hero-summary">
          Hands-on IT support professional experienced in desktop support, networking, Windows administration, printer maintenance, CCTV systems, and technical troubleshooting. I use practical automation to make support work faster and more reliable.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="hero-primary-action">Contact Me</a>
          <a href="#projects" className="hero-secondary-action">View Projects</a>
        </div>

        <div className="hero-highlights">
          {highlights.map((item) => (
            <div key={item.label} className="hero-highlight-card">
              <p>{item.value}</p>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
