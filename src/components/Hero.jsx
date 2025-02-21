import React from "react";
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


  return (
    <section className="hero flex flex-col items-center text-center min-h-screen justify-center">
      <img
        src="/media/profile.jpg"
        alt="Profile"
        className="profile-img rounded-full shadow-lg"
      />
      <h1 className="hero-head text-4xl font-bold mt-4 text-gray-800">
        Hello, I am Abby.
      </h1>
      <p className="text-lg text-gray-600 mt-2">
        I am an aspiring Web Developer passionate about creating user-friendly
        websites. I specialize in front-end technologies like HTML, CSS, and
        JavaScript, as well as crafting visually appealing graphics! ⋆˚✿˖°
      </p>

      {/* Download Button */}
      <DownloadButton />

  
    </section>
  );
};

export default Hero;
