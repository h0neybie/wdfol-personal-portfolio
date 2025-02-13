import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/main.css";
import "./styles/_navbar.scss";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutPage from "./components/pages/AboutPage"
import ProjectsPage from "./components/pages/ProjectsPage"
import BlogPage from "./components/pages/BlogPage"
import ContactPage from "./components/pages/ContactPage"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "./script.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Router>
      <div className={isDarkMode ? "dark" : ""}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
