import React from 'react';
import ProgramCard from './ProgramCard';
import { schoolInfo } from '../../data/schoolData';
import './Programs.css';

const Programs = () => {
  return (
    <section id="programs" className="programs-section">
      <div className="programs-container">
        <h2 className="section-title">Programs Offered</h2>
        
        <div className="programs-grid">
          {schoolInfo.programs.map((program) => (
            <ProgramCard
              key={program.id}
              title={program.title}
              description={program.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;