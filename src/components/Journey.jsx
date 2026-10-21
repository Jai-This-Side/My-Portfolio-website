import React from 'react';
import * as skillsData from '../data/skills';

const Journey = () => {
  const timelineList = skillsData.timeline || skillsData.journey || [];

  if (!Array.isArray(timelineList) || timelineList.length === 0) {
    return null;
  }

  return (
    <section className="section" id="journey">
      <div className="container">
        <div className="section-header-row">
          <div>
            <span className="section-index">04 // CHRONOLOGY</span>
            <h2 className="section-title">Development Log</h2>
          </div>
        </div>

        <div className="journey-list">
          {timelineList.map((item, index) => (
            <div key={index} className="journey-row">
              <div className="journey-year">
                {item.year || item.date}
                {item.tag && (
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-emerald)', marginTop: '0.25rem' }}>
                    [{item.tag}]
                  </div>
                )}
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;