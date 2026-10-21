import * as skillsData from '../data/skills';

const Skills = () => {
  const categories = skillsData.skillCategories || skillsData.skills || skillsData.default || [];

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header-row">
          <div>
            <span className="section-index">02 // CAPABILITIES</span>
            <h2 className="section-title">Technical Specification</h2>
          </div>
        </div>

        <div className="skills-ledger">
          {Array.isArray(categories) && categories.map((cat, idx) => (
            <div key={idx} className="skill-box border-emerald hard-shadow">
              <div className="skill-box-header">
                <h3>{cat.title || cat.category || `Domain 0${idx + 1}`}</h3>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 700 }}>
                  0{idx + 1}
                </span>
              </div>

              <div className="skill-list">
                {Array.isArray(cat.skills || cat.items) && (cat.skills || cat.items).map((skill, sIdx) => (
                  <div key={sIdx} className="skill-row">
                    <span>{typeof skill === 'string' ? skill : skill.name}</span>
                    {skill.level && (
                      <div className="skill-bar-track">
                        <div
                          className="skill-bar-fill"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;