import React, { useState } from 'react';
import { motion } from 'framer-motion';

const skills = [
  'Java (JSE, Java 8, JEE)', 'C/C++', 'JavaScript (ES6)', 'HTML5', 'CSS3', 'Spring Boot', 'Microservices',
  'Socket.io', 'React', 'Tailwind CSS', 'MySQL', 'MongoDB', 'GitHub', 'VS Code', 'IntelliJ IDEA',
  'NetBeans', 'Figma', 'DBMS', 'Networking', 'System Design'
];

const importantSkills = [
  'Java (JSE, Java 8, JEE)', 'JavaScript (ES6)', 'React', 'Spring Boot', 'MySQL', 'Node'
];

const Skills = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedSkills = showAll ? skills : importantSkills;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="my-8"
    >
      <h2 className="text-3xl font-bold border-b-2 border-[var(--primary-color)] pb-2">Skills</h2>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {displayedSkills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md pop-effect"
            whileHover={{ scale: 1.05 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-4 py-2 border border-[var(--primary-color)] rounded hover:bg-[var(--primary-color)] hover:text-white transition"
        >
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </motion.section>
  );
};

export default Skills;
