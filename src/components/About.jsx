// src/components/About.jsx
import React from 'react';
import { ChevronDown } from "lucide-react"; // Importing down arrow icon

function About() {
  // Function to smoothly scroll to the #blog section
  const scrollToNextSection = () => {
    const blogSection = document.getElementById("blog");
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="relative text-center py-16">
      <h2 className="text-3xl font-bold">About Me</h2>
      <p className="mt-4 text-lg text-gray-700">
        Welcome to my portfolio! I am a passionate web developer.
      </p>

      {/* Cute Circular Scroll Down Button */}
      <button 
        onClick={scrollToNextSection}
        className="scroll-down-btn absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
        aria-label="Scroll Down"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}

export default About;
