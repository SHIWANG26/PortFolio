import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="my-8"
    >
      <h2 className="text-3xl font-bold border-b-2 border-[var(--primary-color)] pb-2">Contact</h2>
      <div className="mt-4">
        <p>Email: shiwangr@gmail.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/shiwang-kumar-rai-6b9b0a1b/" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-color)] hover:text-[var(--secondary-color)]">shiwang-kumar-rai</a></p>
        <p>GitHub: <a href="https://github.com/SHIWANG26" target="_blank" rel="noopener noreferrer" className="text-[var(--primary-color)] hover:text-[var(--secondary-color)]">shiwangrai</a></p>
      </div>
    </motion.section>
  );
};

export default Contact;
