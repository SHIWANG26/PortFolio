// components/Navbar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUser, FaCode, FaHome, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const location = useLocation();
  const navLinks = [
    { to: "/", label: "Home", icon: <FaHome /> },
    { to: "/about", label: "About", icon: <FaUser /> },
    { to: "/projects", label: "Projects", icon: <FaCode /> },
    { to: "/contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav className="flex justify-center py-4 bg-[#121212] shadow-md sticky top-0 z-50">
      <ul className="flex space-x-6 text-sm sm:text-base">
        {navLinks.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 hover:bg-[#1f1f1f] ${
                location.pathname === link.to ? "bg-[#1f1f1f] text-teal-400" : "text-white"
              }`}
            >
              {link.icon}
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}