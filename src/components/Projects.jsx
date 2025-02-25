import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Caution Coffee",
    description: "A full-fledged online store with cart functionality and payment integration.",
    image: "/media/caution.png",
    link: "https://caution-coffee.onrender.com/"
  },
  {
    id: 2,
    title: "Honeybiemech Blogs",
    description: "A personal blog site made utilizing CMS.",
    image: "/media/honeybiem.png",
    link: "https://honeybiemech.wordpress.com/"  
  },
  {
    id: 3,
    title: "Cookie Corner",
    description: "An ecommerce website displaying products made with Angular.",
    image: "/media/cookie-corner.png",
    link: "https://cookie-corner.netlify.app/"
  },
];

function Projects() {
  function scrollToNextSection() {
    const blogSection = document.getElementById("blog");
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section id="projects" className="projects">
      <motion.h2 
        className="projects-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Works
      </motion.h2>

      <motion.p 
        className="projects-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        ⋆ ˚｡⋆୨୧˚ Explore my projects as a Third Year Web Development student. ⋆ ˚｡⋆୨୧˚
      </motion.p>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={project.id} className="project-item">
            {/* Project Image with Link */}
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <motion.img
                src={project.image}
                alt={project.title}
                className="project-image"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </a>

            {/* Project Info */}
            <motion.div
              className="project-info"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </motion.div>

            {/* Separator Line */}
            {index !== projects.length - 1 && <div className="project-divider" />}
          </div>
        ))}
      </div>

      {/* Scroll Down Button */}
      <motion.button
        onClick={scrollToNextSection}
        className="scroll-down-btn"
        aria-label="Scroll Down"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  );
}

export default Projects;
