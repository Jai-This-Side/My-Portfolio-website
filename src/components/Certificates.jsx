import * as certData from '../data/certificates';

const Certificates = () => {
  const certList = certData.certificates || certData.default || [];

  return (
    <section className="section" id="certificates">
      <div className="container">
        <div className="section-header-row">
          <div>
            <span className="section-index">05 // CREDENTIALS</span>
            <h2 className="section-title">Verified Certifications</h2>
          </div>
        </div>

        <div className="cert-grid">
          {Array.isArray(certList) && certList.map((cert, idx) => (
            <div key={cert.id || idx} className="cert-card border-emerald hard-shadow">
              {cert.image && (
                <div className="cert-img-wrapper">
                  <img src={cert.image} alt={cert.title} className="cert-img" />
                </div>
              )}
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700 }} className="text-accent">
                {cert.issuer} {cert.date ? `// ${cert.date}` : ''}
              </span>
              <h3 style={{ fontSize: '1.25rem', margin: '0.4rem 0' }}>{cert.title}</h3>
              <p style={{ fontSize: '0.9rem' }}>{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;