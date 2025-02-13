// src/components/Blog.jsx
import React from 'react';
import { ChevronDown } from "lucide-react"; // Importing down arrow icon

function Blog() {
//smooth scroll
  const scrollToNextSection = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="blog" className="relative text-center py-16">
      <h2 className="text-3xl font-bold">Blog</h2>
      <p className="mt-4 text-lg text-gray-700">
      ⋅°₊• ୨୧ ‧₊° Explore more on my journey in Web Development and Design.⋅°₊•୨୧ ‧₊°⋅
      </p>

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

export default Blog;
