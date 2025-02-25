import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

// Download Button Component
const DownloadButton = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/media/Dizon_Abby.pdf"; 
    link.download = "Dizon_Abby.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload} className="download-button">
      Download Resume
    </button>
  );
};

// Hero Section Component
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(".hero");
      const rect = heroSection.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero flex flex-col items-center text-center min-h-screen justify-center">
      {/* Profile Image */}
      <div className="profile-wrapper">
        <img
          src="/media/profile.jpg"
          alt="Profile"
          className={`profile-img shadow-lg transition-transform duration-700 ${
            isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        />
      </div>

      {/* Headline */}
      <h1 className={`hero-head transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        Hello, I am Abby.
      </h1>

      {/* Description */}
      <p className={`hero-desc transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        An aspiring Web Developer focused on crafting user-friendly and visually appealing websites. Specializing in front-end development and graphic design. 
      </p>

      {/* Download Button */}
      <DownloadButton />
    </section>
  );
};

export default Hero;
