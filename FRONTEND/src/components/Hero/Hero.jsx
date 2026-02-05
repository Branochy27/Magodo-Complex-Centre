import React from 'react';
import { scrollToSection } from '../../utils/scrollToSection';
import { schoolInfo } from '../../data/schoolData';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <h1 className="hero-title">{schoolInfo.name}</h1>
        <p className="hero-motto">{schoolInfo.motto}</p>
        <p className="hero-vision">{schoolInfo.vision}</p>
        <button 
          onClick={() => scrollToSection('contact')} 
          className="hero-button"
        >
          Enroll Now
        </button>
      </div>
    </section>
  );
};

export default Hero;