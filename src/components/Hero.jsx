const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-editorial-header">
          <span className="issue-tag">PORTFOLIO // EDITION 2026</span>
          <span className="issue-tag">JIIT // NOIDA, IN</span>
          <span className="issue-tag text-accent">● OPEN FOR DEVOPS / SRE / PLATFORM ROLES</span>
        </div>

        <div className="hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">
              Jai Singh <br />
              <span className="text-accent">Bisht.</span>
            </h1>
            <p className="hero-subtitle">
              DevOps, Platform & Site Reliability Engineering professional. Specialized in cloud-native infrastructure, CI/CD automation, containerization, and production system reliability.
            </p>

            <div className="hero-buttons">
              <a
                href="/JaiSinghBisht_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary hard-shadow"
              >
                Download Resume (PDF) ↗
              </a>
              <a href="#projects" className="btn-secondary hard-shadow">
                Explore Work
              </a>
            </div>

            <div className="hero-metrics">
              <div className="metric-item">
                <span className="metric-num">BCA</span>
                <span className="metric-label">JIIT Graduate (2026)</span>
              </div>
              <div className="metric-item">
                <span className="metric-num">SRE</span>
                <span className="metric-label">Infrastructure & Reliability</span>
              </div>
              <div className="metric-item">
                <span className="metric-num">99.9%</span>
                <span className="metric-label">Uptime Mindset</span>
              </div>
            </div>
          </div>

          <div className="hero-Portrait-wrapper">
            <div className="portrait-frame border-emerald hard-shadow">
              <img
                src="/profile.jpeg"
                alt="Jai Singh Bisht"
                className="hero-image"
              />
              <div className="portrait-caption">
                <span>FIG 01. JAI SINGH BISHT</span>
                <span>BCA // JIIT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;