import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import { Sun, Moon, Menu, X } from "lucide-react"; // Menu icons

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // Get current page location
  const navigate = useNavigate(); // For navigation

  const handleLogoClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    
    if (location.pathname === "/") {
      // Already on home page, just scroll smoothly to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to home page first, then scroll up
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.classList.add("dark-mode");
    } else {
      setIsDarkMode(false);
      document.body.classList.remove("dark-mode");
    }

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
  <Link to="/" className="logo" onClick={handleLogoClick}>
    <img src="/media/logo.PNG" alt="Your Logo" />
  </Link>

  <div className="nav-right">
    {/* Mobile Menu Toggle Button */}
    <button onClick={toggleMobileMenu} className="menu-toggle">
      {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
    </button>

    {/* Navigation Links */}
    <div className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
    </div>

    {/* Theme Toggle Button */}
    <button onClick={toggleTheme} className="theme-toggle">
      {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  </div>
</nav>

  );
}

export default Navbar;
