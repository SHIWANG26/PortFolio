import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeToggle = ({ toggleTheme, theme }) => {
  return (
    <motion.button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full border border-[var(--primary-color)] flex items-center justify-center shadow-md bg-white dark:bg-gray-700"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95, rotate: 20 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <AnimatePresence mode='wait'>
        {theme === 'light' ? (
          <motion.svg
            key="sun"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-[var(--primary-color)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M7.05 16.95l-1.414 1.414M16.95 16.95l1.414 1.414M7.05 7.05L5.636 5.636M12 8a4 4 0 100 8 4 4 0 000-8z"
            />
          </motion.svg>
        ) : (
          <motion.svg
            key="moon"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-[var(--primary-color)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
            />
          </motion.svg>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;
