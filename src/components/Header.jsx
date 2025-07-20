import React from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle'; // Assuming ThemeToggle is imported here

const Header = ({ toggleTheme, theme }) => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 shadow-md py-4"
    >
      <div className="container mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between px-4">
        {/* Left Section - Profile */}
        <div className="flex items-center mb-4 sm:mb-0">
          <div
            className="w-16 h-16 rounded-full bg-center bg-cover border-4 border-[var(--primary-color)] shadow-md pop-effect"
            style={{ backgroundImage: "url('/images/profile.jpg')" }}
          ></div>
          <div className="ml-4">
            <h1 className="text-2xl font-bold text-[var(--primary-color)]">Shiwang Kumar Rai</h1>
            <p className="text-gray-600 dark:text-gray-300">Full Stack Developer</p>
          </div>
        </div>

        {/* Right Section - Links & Theme Toggle */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
          <div className="flex space-x-4 justify-center">
            <a
              href="https://www.linkedin.com/in/shiwang-kumar-rai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--primary-color)] hover:text-[var(--secondary-color)] pop-effect"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/SHIWANG26/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--primary-color)] hover:text-[var(--secondary-color)] pop-effect"
            >
              GitHub
            </a>
          </div>
          {/* Theme Toggle */}
          <div className="flex justify-center">
            <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
