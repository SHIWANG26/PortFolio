// components/HomeComponent.jsx
import React from "react";
import { motion } from "framer-motion";

export default function HomeComponent() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-[80vh] text-center px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-teal-400">Welcome to My Portfolio</h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
        I'm a passionate developer creating beautiful, functional web applications.
      </p>
    </motion.div>
  );
}
