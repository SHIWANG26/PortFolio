// components/AboutComponent.jsx
import React from "react";
import { motion } from "framer-motion";

export default function AboutComponent() {
  return (
    <motion.div
      className="max-w-3xl mx-auto p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-semibold text-teal-400 mb-4">About Me</h2>
      <p className="text-gray-300 leading-relaxed">
        I’m a software developer with experience in building modern web apps using React,
        Tailwind CSS, and Node.js. I enjoy creating sleek UIs and intuitive user experiences.
      </p>
    </motion.div>
  );
}
