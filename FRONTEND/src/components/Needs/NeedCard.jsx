import React from 'react';
import { Building2, Users, BookOpen, Heart, Utensils } from 'lucide-react';

const iconMap = {
  building: Building2,
  users: Users,
  book: BookOpen,
  heart: Heart,
  utensils: Utensils
};

const NeedCard = ({ title, description, icon }) => {
  const IconComponent = iconMap[icon] || Building2;
  
  return (
    <div className="need-card">
      <div className="need-icon-wrapper">
        <IconComponent className="need-icon" size={24} />
      </div>
      <h3 className="need-title">{title}</h3>
      <p className="need-description">{description}</p>
    </div>
  );
};

export default NeedCard;