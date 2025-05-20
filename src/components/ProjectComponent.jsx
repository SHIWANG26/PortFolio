// components/ProjectComponent.jsx
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase my projects and skills.",
  },
  {
    title: "Weather App",
    description: "A real-time weather forecast app using OpenWeatherMap API.",
  },
];

export default function ProjectComponent() {
  return (
    <motion.div
      className="p-6 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {projects.map((project, index) => (
        <Card key={index} className="bg-[#1f1f1f] text-white shadow-lg rounded-2xl">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-teal-400 mb-2">{project.title}</h3>
            <p className="text-gray-300">{project.description}</p>
          </CardContent>
        </Card>
      ))}
    </motion.div>
  );
}
