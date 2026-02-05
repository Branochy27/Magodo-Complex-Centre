import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    number: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // TODO: Connect to backend API
    // fetch('http://localhost:5000/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // });

    setFormStatus('Message sent successfully!');
    setFormData({ username: '', email: '', number: '', message: '' });
    setTimeout(() => setFormStatus(''), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h3 className="form-title">Message Us</h3>
      
      <form onSubmit={handleSubmit} className="form-fields">
        <input
          type="text"
          name="username"
          placeholder="Your Name"
          value={formData.username}
          onChange={handleChange}
          required
          className="form-input"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="form-input"
        />

        <input
          type="tel"
          name="number"
          placeholder="Your Phone Number"
          value={formData.number}
          onChange={handleChange}
          required
          className="form-input"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="form-input"
        />

        <button type="submit" className="submit-button">
          <Send size={20} className="button-icon" />
          Send Message
        </button>

        {formStatus && (
          <p className="form-status">{formStatus}</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;