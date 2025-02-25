import React, { useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGithub, FaNodeJs
} from "react-icons/fa";
import {
  SiTailwindcss, SiAngular, SiAdobeillustrator, SiAdobephotoshop,
  SiAdobeindesign, SiAdobexd, SiFigma, SiMysql, SiMongodb, SiFirebase
} from "react-icons/si";

function About() {
  const scrollToNextSection = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      <motion.section
        id="about"
        className="about-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* About Text with Scroll Effect */}
        <div className="about-text">
          {["Strategic Design.", "Brand-Focused.", "Purpose-Driven.", "Visually Compelling."].map((text, index) => (
            <TextSpan key={index} text={text} delay={0.2 * (index + 1)} />
          ))}
        </div>

        {/* Technologies Section */}
        <div id="technologies" className="technologies">
          <p className="sub-title">Technologies I Use</p>

          <TechCategory title="Languages">
            <TechIcon Icon={FaHtml5} label="HTML" />
            <TechIcon Icon={FaCss3Alt} label="CSS" />
            <TechIcon Icon={FaJs} label="JavaScript" />
          </TechCategory>

          <TechCategory title="Frameworks & Libraries">
            <TechIcon Icon={FaBootstrap} label="Bootstrap" />
            <TechIcon Icon={SiTailwindcss} label="Tailwind CSS" />
            <TechIcon Icon={FaNodeJs} label="Node.js" />
            <TechIcon Icon={SiAngular} label="Angular.js" />
            <TechIcon Icon={FaReact} label="React" />
          </TechCategory>

          <TechCategory title="Tools">
            <TechIcon Icon={SiAdobeillustrator} label="Illustrator" />
            <TechIcon Icon={SiAdobephotoshop} label="Photoshop" />
            <TechIcon Icon={SiAdobeindesign} label="InDesign" />
            <TechIcon Icon={SiAdobexd} label="Adobe XD" />
            <TechIcon Icon={SiFigma} label="Figma" />
            <TechIcon Icon={FaGithub} label="Git & GitHub" />
          </TechCategory>

          <TechCategory title="Databases">
            <TechIcon Icon={SiMysql} label="MySQL" />
            <TechIcon Icon={SiMongodb} label="MongoDB" />
            <TechIcon Icon={SiFirebase} label="Firebase" />
          </TechCategory>
        </div>

        {/* Scroll Down Button */}
        <motion.button
          onClick={scrollToNextSection}
          className="scroll-down-btn"
          aria-label="Scroll Down"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <ChevronDown size={28} />
        </motion.button>
      </motion.section>
    </AnimatePresence>
  );
}

// Text Span with Scroll Motion Effect
const TextSpan = ({ text, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }) || false;

  return (
    <motion.span
      ref={ref}
      className="text-span"
      initial={{ rotateX: -90, opacity: 0, y: 30 }}
      animate={isInView ? { rotateX: 0, opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {text}
    </motion.span>
  );
};

// Tech Icon Component
const TechIcon = ({ Icon, label }) => (
  <motion.div
    className="tech-icon"
    whileHover={{ scale: 1.1, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}
    transition={{ duration: 0.3 }}
  >
    <Icon />
    <span>{label}</span>
  </motion.div>
);

// Tech Category Component
const TechCategory = ({ title, children }) => (
  <motion.div
    className="tech-category"
    whileInView={{ opacity: 1, x: 0 }}
    initial={{ opacity: 0, x: -50 }}
    transition={{ duration: 0.6 }}
  >
    <h4>{title}</h4>
    <div className="tech-icons">{children}</div>
  </motion.div>
);

export default About;
