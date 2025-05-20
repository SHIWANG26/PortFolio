// components/ContactComponent.jsx
import React from "react";
import { motion } from "framer-motion";

export default function ContactComponent() {
  return (
    <motion.div
      className="max-w-2xl mx-auto p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-semibold text-teal-400 mb-4">Contact Me</h2>
      <p className="text-gray-300 mb-6">Feel free to reach out for collaborations or just a friendly hello!</p>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Name" className="p-3 rounded bg-[#1f1f1f] text-white" />
        <input type="email" placeholder="Email" className="p-3 rounded bg-[#1f1f1f] text-white" />
        <textarea placeholder="Message" className="p-3 rounded bg-[#1f1f1f] text-white h-32" />
        <button type="submit" className="bg-teal-400 text-black font-semibold py-2 rounded hover:bg-teal-300 transition">Send</button>
      </form>
    </motion.div>
  );
}
