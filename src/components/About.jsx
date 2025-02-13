import React from 'react';
import { ChevronDown } from "lucide-react";  
function About() {

  const scrollToNextSection = () => {
    const blogSection = document.getElementById("projects");
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="relative text-center py-16">
      <h2 className="text-3xl font-bold">About Me</h2>
      <div className="about-card">
  <p >
    I’ve always loved digital design as it introduced me to the world of technology, specifically Web Development.  I enjoy creating clean, responsive designs that are both functional and visually appealing. I’m excited to use my skills in web development and graphic design while learning, growing, and collaborating in a creative environment. ᡣ𐭩ྀི
  </p>
</div>
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
