import React from 'react';
import { ChevronDown } from "lucide-react"; // Importing down arrow icon

function Hero() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (  
    <section className="hero flex flex-col items-center text-center min-h-screen justify-center">
      <img src="/media/profile.jpg" alt="Profile" className="profile-img rounded-full shadow-lg" />
      <h1 className="hero-head text-4xl font-bold mt-4 text-gray-800">Hello, I am Abby</h1>
      <p className="text-lg text-gray-600 mt-2">I am an aspiring Web Developer.</p>
      
      {/* Cute Circular Scroll Down Button */}
      <button 
        onClick={scrollToNextSection}
        className="scroll-down-btn"
        aria-label="Scroll Down"
      >
        <ChevronDown size={28} className="text-white" />
      </button>
    </section>
  );
}

export default Hero;
