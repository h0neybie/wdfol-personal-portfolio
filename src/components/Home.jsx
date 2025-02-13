import React from 'react';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Blog from './Blog';
import Contact from './Contact';

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Blog />
      <Contact />
    </div>
  );
}

export default Home;
