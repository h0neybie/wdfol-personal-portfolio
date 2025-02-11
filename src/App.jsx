import React, { useState, useEffect } from 'react';
import './styles.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import './script.js';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    // If script.js contains DOM manipulations or event listeners, ensure it runs once
    const script = document.createElement('script');
    script.src = './script.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <Navbar toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
