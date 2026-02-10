import React, { useState, useEffect } from 'react';
import { ChevronDown, Award, Users, BookOpen, Heart } from 'lucide-react';
import { schoolInfo } from '../../data/schoolData';
import './Landing.css';

const Landing = ({ onEnter }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className={`landing-page ${isVisible ? 'visible' : ''}`}>
      {/* Animated Background */}
      <div className="landing-background">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
      </div>
      
      <div className="landing-content">
        {/* Logo Section */}
        <div className="landing-logo">
          <div className="logo-badge">
            <span className="logo-icon">🎓</span>
          </div>
        </div>

        {/* Main Content */}
        <h1 className="landing-title">
          {schoolInfo.name}
        </h1>
        
        <div className="landing-motto">
          <p className="motto-text">
            {schoolInfo.motto}
          </p>
          <div className="motto-underline"></div>
        </div>

        <p className="landing-vision">
          {schoolInfo.vision}
        </p>

        {/* Stats Section */}
        <div className="landing-stats">
          <div className="stat-item">
            <Award size={32} className="stat-icon" />
            <span className="stat-label">Quality Education</span>
          </div>
          <div className="stat-item">
            <Users size={32} className="stat-icon" />
            <span className="stat-label">Expert Teachers</span>
          </div>
          <div className="stat-item">
            <Heart size={32} className="stat-icon" />
            <span className="stat-label">Care & Support</span>
          </div>
        </div>

        {/* CTA Button */}
        <button className="landing-button" onClick={onEnter}>
          Explore Our School
          <ChevronDown size={20} className="button-icon" />
        </button>

        {/* Location Badge */}
        <div className="landing-location">
          📍 {schoolInfo.contact.address.location}
        </div>
      </div>
    </div>
  );
};

export default Landing;
