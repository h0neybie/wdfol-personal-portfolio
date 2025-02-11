import React, { useState, useEffect } from 'react';
import { Sun, Moon } from "lucide-react"; // Importing cute icons

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark-mode");
    } else {
      setIsDarkMode(false);
      document.body.classList.remove("dark-mode");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prevState => !prevState);
    if (!isDarkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav className="flex justify-between items-center p-4">
      <div className="logo">
        <a href="#">
          <img src="/media/logo.PNG" alt="Your Logo" className="h-12" />
        </a>
      </div>

      <div className="nav-links flex space-x-4">
        <a href="#about" className="hover:text-gray-500">About</a>
        <a href="#blog" className="hover:text-gray-500">Blog</a>
        <a href="#contact" className="hover:text-gray-500">Contact</a>
      </div>

      {/* Theme Toggle Button */}
      <button 
        id="theme-toggle"
        className={`w-12 h-12 flex items-center justify-center rounded-full transition-all bg-gradient-to-r ${isDarkMode ? 'from-gray-800 to-gray-900' : 'from-pink-400 to-green-400'} shadow-lg hover:from-pink-500 hover:to-green-500`}
        onClick={toggleTheme}
      >
        {isDarkMode ? <Sun size={48} color="white" /> : <Moon size={48} color="white" />}
      </button>
    </nav>
  );
}

export default Navbar;
