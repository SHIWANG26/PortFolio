import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="my-8"
    >
      <h2 className="text-3xl font-bold border-b-2 border-[var(--primary-color)] pb-2">About Me</h2>
      <p className="mt-4 text-lg leading-relaxed">
        I am Shiwang Kumar Rai, a passionate Full Stack Developer skilled in building robust and scalable web applications.
        Proficient in Java, Node, Spring Boot, React, and databases like MySQL and MongoDB, I enjoy solving complex problems
        and creating user-friendly interfaces. My projects leverage modern frameworks and tools to deliver high-quality solutions with a focus on performance and maintainability.
        I thrive in collaborative environments and am always eager to learn new technologies to enhance my skill set.
        Let's connect and explore how I can contribute to your next project!
      </p>
    </motion.section>
  );
};

export default About;
