import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('SENDING...');

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_id',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_id',
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key'
      )
      .then(() => {
        setStatus('TRANSMISSION COMPLETE.');
        formRef.current.reset();
      })
      .catch(() => {
        setStatus('ERROR: USE DIRECT EMAIL.');
      });
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header-row">
          <div>
            <span className="section-index">06 // DISPATCH</span>
            <h2 className="section-title">Initiate Contact</h2>
          </div>
        </div>

        <div className="contact-grid">
          <div>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
              Available for DevOps, Platform & SRE roles.
            </h3>
            <p style={{ marginBottom: '2rem' }}>
              Looking for an engineer who understands Linux systems, CI/CD automation, and production reliability? Reach out directly.
            </p>

            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div><strong>DIRECT EMAIL:</strong> jaisinghbisht05@gmail.com</div>
              <div><strong>PHONE:</strong> <a href="tel:+91 8287816248" className="text-accent">+91 8126135835 ↗</a></div>
              <div><strong>INSTITUTION:</strong> JIIT Noida (BCA Graduate, Sept 2026)</div>
              <div><strong>GITHUB:</strong> <a href="https://github.com/Jai-This-Side" target="_blank" rel="noreferrer" className="text-accent">github.com/Jai-This-Side ↗</a></div>
              <div><strong>LINKEDIN:</strong> <a href="https://www.linkedin.com/in/jai-singh-bisht-b28b29289/" target="_blank" rel="noreferrer" className="text-accent">linkedin.com/in/jai-singh-bisht-b28b29289/ ↗</a></div>
              <div><strong>MEDIUM:</strong> <a href="https://medium.com/@jaisinghbisht" target="_blank" rel="noreferrer" className="text-accent">medium.com/@jaisinghbisht ↗</a></div>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="skill-box border-emerald hard-shadow">
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input type="text" name="user_name" required className="form-input" placeholder="e.g. Rohan Sharma" />
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input type="email" name="user_email" required className="form-input" placeholder="name@company.com" />
            </div>
            <div className="form-group">
              <label className="form-label">Role / Inquiry Details</label>
              <textarea name="message" rows="4" required className="form-textarea" placeholder="Tell me about the DevOps / SRE / Platform role..." />
            </div>
            <button type="submit" className="btn-primary hard-shadow" style={{ width: '100%', justifyContent: 'center' }}>
              {status || 'Send Message ↗'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;