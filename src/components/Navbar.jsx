import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react"; // Menu icons

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark-mode");
    } else {
      setIsDarkMode(false);
      document.body.classList.remove("dark-mode");
    }

    // Close menu when resizing to desktop
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMobileMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", isDarkMode ? "light" : "dark");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <a href="#">
          <img src="/media/logo.PNG" alt="Your Logo" />
        </a>
      </div>

      {/* Right Side */}
      <div className="nav-right">
        {/* Mobile Menu Button */}
        <button className="menu-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={32} className="icon" /> : <Menu size={32} className="icon" />}
        </button>

        {/* Navigation Links */}
        <div className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Theme Toggle */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? <Sun size={32} className="icon" /> : <Moon size={32} className="icon" />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
