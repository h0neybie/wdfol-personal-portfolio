// src/components/Contact.jsx
import React from 'react';
import { ChevronDown } from "lucide-react"; // Importing down arrow icon


function Contact() {
  //smooth scroll
    const scrollToNextSection = () => {
      const contactSection = document.getElementById("footer");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    };
    return (
    <section id="contact">
      <h2>Contact</h2>
      <p>‧₊˚Let's connect! Reach out via email or follow me on social media.༉‧₊˚.</p>

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

export default Contact;
