// src/components/Blog.jsx
import React from 'react';
import { ChevronDown } from "lucide-react"; // Importing down arrow icon

function Projects() {
  // Function to smoothly scroll to the #contact section
  const scrollToNextSection = () => {
    const contactSection = document.getElementById("blog");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="relative text-center py-16">
      <h2 className="text-3xl font-bold">My Works</h2>
      <p>
      ⋆ ˚｡⋆୨୧˚ Explore my works! This is my showcase of Projects and Personal works currently as a Third Year Web Development student.⋆ ˚｡⋆୨୧˚ </p>

      {/* Scroll Down Button */}
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

export default Projects;
