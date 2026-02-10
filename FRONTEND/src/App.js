import React, { useState, useEffect } from 'react';
import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Programs from './components/Programs/Programs';
import Results from './components/Results/Results';
import Events from './components/Events/Events';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Needs from './components/Needs/Needs';
import './App.css';

function App() {
  const [showLanding, setShowLanding] = useState(true);
  
  useEffect(() => {
    // check if user has visited before
    const hasVisited = localStorage.getItem('hasVisitedMagodo');
    if(hasVisited) {
      setShowLanding(false);
    }
  }, []);

  const handleEnterSite = () => {
    localStorage.setItem('hasVisitedMagodo','true');
    setShowLanding(false);
  };

  if (showLanding) {
    return <Landing onEnter={handleEnterSite} />;
  }
  
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Results />
      <Events />
      <Contact />
      <Needs />
      <Footer />
    </>
  );
}

export default App;
