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
    
      {/* Animated Background */}
      
        
    
        {/* Logo Section */}
        
          
               
        

        {/* Main Content */}
        
          
            {schoolInfo.name}
          
          
          
            {schoolInfo.motto}
            
          

          
            {schoolInfo.vision}
          

          {/* Stats Section */}
          
            
              
              Quality Education
            
            
              
              Expert Teachers
            
            
              
              Care & Support
            
          

          {/* CTA Button */}
          
            Explore Our School
            
          

          {/* Location Badge */}
          
            📍 {schoolInfo.contact.address.location}
          
        
      

    
      
    
  );
};

export default Landing;
