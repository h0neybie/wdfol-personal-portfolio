import React from "react";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
// import Blog from "./Blog";
// import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      {/* <Blog />
      <Contact /> */}
      <Footer />
    </div>
  );
}

export default Home;