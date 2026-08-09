import "./Contact.css";

const contactDetails = [
  { label: "Email", value: "athulkrishna.os.work@gmail.com" },
  { label: "Location", value: "Kerala, India · Open to UAE roles" },
  { label: "Focus", value: "IT Support · Network Support · Infrastructure" },
];

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-intro">
          <p className="contact-eyebrow">Contact</p>
          <h2>Let’s build reliable IT together.</h2>
          <p>
            I’m actively seeking IT Support, Desktop Support, Network Support, and Infrastructure Engineer opportunities in the UAE.
          </p>
          <a className="contact-email-button" href="mailto:athulkrishna.os.work@gmail.com">Send an Email <span aria-hidden="true">→</span></a>
        </div>

        <div className="contact-details" aria-label="Contact details">
          {contactDetails.map((detail) => (
            <div key={detail.label} className="contact-detail-card">
              <p>{detail.label}</p>
              {detail.label === "Email" ? <a href={`mailto:${detail.value}`}>{detail.value}</a> : <span>{detail.value}</span>}
            </div>
          ))}
          <div className="contact-status"><span aria-hidden="true" />Available for new opportunities</div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
