import React from 'react';
import * as projectData from '../data/projects';

const Projects = () => {
  const projectList = projectData.projects || projectData.default || [];

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header-row">
          <div>
            <span className="section-index">03 // ARCHIVE</span>
            <h2 className="section-title">Infrastructure & Builds</h2>
          </div>
        </div>

        <div className="project-grid">
          {projectList.map((proj, index) => {
            const isMedium = proj.github?.includes('medium.com');
            return (
              <article key={proj.id || index} className="brutal-card border-emerald hard-shadow">
                <div className="card-header">
                  <div className="card-meta">
                    <span>{proj.file ? `FILE // ${proj.file}` : `SYSTEM // 0${index + 1}`}</span>
                    <span className="text-accent">[{proj.status || 'PRODUCTION'}]</span>
                  </div>
                  <h3>{proj.title}</h3>
                </div>

                <div className="card-body">
                  <div>
                    <p style={{ fontWeight: 500 }}>{proj.description}</p>
                    {Array.isArray(proj.features) && (
                      <ul className="feature-list">
                        {proj.features.map((feat, idx) => (
                          <li key={idx}>{feat}</li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="tags">
                    {(proj.tech || proj.tags || []).map((item, i) => (
                      <span key={i} className="tag border-emerald">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="card-footer">
                  {proj.github && proj.github !== '#' && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-link"
                    >
                      {isMedium ? 'Read Technical Guide (Medium) ↗' : 'Repository & Pipeline ↗'}
                    </a>
                  )}
                  {(proj.live || proj.demo) && (
                    <a
                      href={proj.live || proj.demo}
                      target={proj.live?.startsWith('#') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className="card-link text-accent"
                    >
                      Live Deployment ↗
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;