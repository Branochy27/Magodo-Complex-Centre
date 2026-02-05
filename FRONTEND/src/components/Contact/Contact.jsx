import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';
import { schoolInfo } from '../../data/schoolData';
import './Contact.css';

const Contact = () => {
  const { email, phones, address } = schoolInfo.contact;

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Contact Us</h2>
        
        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="info-title">Get In Touch</h3>
            
            <div className="info-items">
              <div className="info-item">
                <Mail className="info-icon" size={24} />
                <div>
                  <p className="info-label">Email</p>
                  <a href={`mailto:${email}`} className="info-link">
                    {email}
                  </a>
                </div>
              </div>

              <div className="info-item">
                <Phone className="info-icon" size={24} />
                <div>
                  <p className="info-label">Phone</p>
                  {phones.map((phone, index) => (
                    <p key={index} className="info-text">{phone}</p>
                  ))}
                </div>
              </div>

              <div className="info-item">
                <MapPin className="info-icon" size={24} />
                <div>
                  <p className="info-label">Visit Us</p>
                  <p className="info-text">{address.name}</p>
                  <p className="info-text">{address.location}</p>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;