import React from 'react';
import { schoolInfo } from '../../data/schoolData';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {schoolInfo.name} {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;