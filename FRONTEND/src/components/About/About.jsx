import React from 'react';
import { schoolInfo } from '../../data/schoolData';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">About Us</h2>
        
        <div className="about-description">
          <p>{schoolInfo.about}</p>
        </div>

        <div className="vision-mission-grid">
          <div className="card vision-card">
            <h3>Our Vision</h3>
            <p>{schoolInfo.vision}</p>
          </div>

          <div className="card mission-card">
            <h3>Our Mission</h3>
            <p>{schoolInfo.mission}</p>
          </div>
        </div>

        <div className="core-values-section">
          <h3 className="subsection-title">Core Values</h3>
          <div className="values-grid">
            {schoolInfo.coreValues.map((value, index) => (
              <div key={index} className="value-item">
                <p>{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="strengths-section">
          <h3 className="subsection-title">Our Strengths</h3>
          <div className="strengths-grid">
            {schoolInfo.strengths.map((strength, index) => (
              <p key={index}>{strength}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;