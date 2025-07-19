import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'ResumeDataExtractor',
    description: 'A resume parsing engine built with Java (AWT, Swing, JDBC, MySQL) using MVC architecture. Integrated Apache OpenNLP for entity recognition and PDFBox for text extraction, capable of processing hundreds of resumes in batch.',
    technologies: ['Java', 'AWT', 'Swing', 'JDBC', 'MySQL', 'Apache OpenNLP', 'Apache PDFBox', 'MVC'],
    link: 'https://github.com/SHIWANG26/ResumeExtractor'
  },
  {
    name: 'BankManagementSystem',
    description: 'A Java-based banking system using JEE, Apache OpenNLP API, and Apache PDFBox. Features a GUI with MWTString and JOSO for database interactions, implementing MVC and OOP principles for modular and bug-free code.',
    technologies: ['Java JEE', 'Apache OpenNLP', 'Apache PDFBox', 'Tailwind CSS', 'Maven', 'MVC'],
    link: 'https://github.com/SHIWANG26/Bank-Management-System'
  },{
    name: 'vidSynth',
    description: 'A personal portfolio website showcasing my projects and skills, built with React, Tailwind CSS, and Framer Motion for animations. Features a responsive design and smooth transitions.',
    technologies: ['Next.js', 'Tailwind CSS', 'ImageKit Api', 'Context API', 'TypeScript'],
    link: 'https://github.com/SHIWANG26/vidSynth'
  }
];

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="my-8"
    >
      <h2 className="text-3xl font-bold border-b-2 border-[var(--primary-color)] pb-2">Projects</h2>
      <div className="mt-4 space-y-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md pop-effect"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="mt-2">{project.description}</p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Technologies: {project.technologies.join(', ')}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-[var(--primary-color)] hover:text-[var(--secondary-color)]"
            >
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
