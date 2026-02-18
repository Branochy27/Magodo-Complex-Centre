import React from 'react';
import NeedCard from './NeedCard';
import { schoolInfo } from '../../data/schoolData';
import { scrollToSection } from '../../utils/scrollToSection';
import './Needs.css';

const Needs = () => {
  return (
    <section id="needs" className="needs-section">
      <div className="needs-container">
        <h2 className="needs-title">Support Our School</h2>
        
        <div className="needs-intro">
          <p className="needs-description">
            We are committed to providing quality education to all our students. However, we need 
            support in various areas to continue improving our services and reaching more children 
            in need. Your contribution can make a significant difference in the lives of our learners.
          </p>
        </div>

        <div className="needs-grid">
          {schoolInfo.needs.map((need) => (
            <NeedCard
              key={need.id || need.title} // Make sure each need has a unique identifier
              title={need.title}
              description={need.description}
              icon={need.icon}
            />
          ))}
        </div>

        <div className="needs-cta">
          <h3 className="needs-cta-title">Want to Make a Difference?</h3>
          <p className="needs-cta-text">
            Contact us to learn more about how you can support our school and our students.
          </p>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="needs-button"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Needs;