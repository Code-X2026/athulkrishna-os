import "./Footer.css";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <a href="#home">Athul<span>.</span></a>
          <p>IT Support Engineer focused on reliable systems, practical support, and secure infrastructure.</p>
        </div>

        <nav className="footer-navigation" aria-label="Footer navigation">
          <p>Explore</p>
          <div>{footerLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}</div>
        </nav>

        <div className="footer-contact">
          <p>Get in touch</p>
          <a href="mailto:athulkrishna.os.work@gmail.com">athulkrishna.os.work@gmail.com</a>
          <span>Available for UAE opportunities</span>
        </div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Athul Krishna O S</span><a href="#home">Back to top ↑</a></div>
    </footer>
  );
}

export default Footer;
