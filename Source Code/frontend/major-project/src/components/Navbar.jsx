import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/objectives', label: 'Objectives' },
  { to: '/procedure', label: 'Procedure' },
  { to: '/results', label: 'Results' },
  { to: '/validation', label: 'Validation' },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        width: "100%",
        background: "linear-gradient(90deg, #0a6bff, #4db8ff)",
        padding: "16px 0",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 200,
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
      }}
    >
      <ul
        style={{
          margin: 0,
          padding: 0,
          listStyle: "none",
          display: "flex",
          justifyContent: "center",
          gap: "24px",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {links.map((l) => (
          <li key={l.to}>
            <NavLink
              to={l.to}
              style={({ isActive }) => ({
                position: "relative",
                color: isActive ? "#ffffff" : "rgba(255,255,255,0.85)",
                fontWeight: isActive ? 700 : 500,
                textDecoration: "none",
                padding: "8px 14px",
                borderRadius: "6px",
                backgroundColor: isActive ? "rgba(255,255,255,0.15)" : "transparent",
                transition: "all 0.25s ease-in-out",
                fontSize: "15px",

                // underline effect
                borderBottom: isActive ? "2px solid #ffffff" : "2px solid transparent",
              })}
            >
              {l.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
