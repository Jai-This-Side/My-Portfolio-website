import React from 'react';

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header-row">
          <div>
            <span className="section-index">01 // BIOGRAPHY</span>
            <h2 className="section-title">Background & Ethos</h2>
          </div>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p className="about-lead">
              I engineer reliable infrastructure, automated delivery pipelines, and resilient production systems.
            </p>
            <p>
              I am a 21-year-old Computer Applications graduate (BCA) from Jaypee Institute of Information Technology (JIIT), having completed my degree from July 2023 to September 2026. My core expertise is dedicated entirely to DevOps, Platform Engineering, and Site Reliability Engineering (SRE).
            </p>
            <p>
              My work centers on how systems behave under load—focusing on Linux systems administration, container orchestration with Docker, CI/CD pipeline automation, infrastructure provisioning, and robust system observability.
            </p>
          </div>

          <div>
            <table className="spec-table hard-shadow">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td>Jai Singh Bisht</td>
                </tr>
                <tr>
                  <th>Age</th>
                  <td>21 Years</td>
                </tr>
                <tr>
                  <th>Degree</th>
                  <td>Bachelor of Computer Applications (BCA)</td>
                </tr>
                <tr>
                  <th>Timeline</th>
                  <td>July 2023 – September 2026</td>
                </tr>
                <tr>
                  <th>Institution</th>
                  <td>Jaypee Institute of Information Technology (JIIT)</td>
                </tr>
                <tr>
                  <th>Target Roles</th>
                  <td>DevOps Engineer / Platform / SRE</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;