import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        width: "100%",
        padding: "12px 0",
        textAlign: "center",
        fontFamily: "Inter, sans-serif",
        fontSize: "14px",
        backgroundColor: "#ffffffff",
        color: "#444",
        borderTop: "1px solid #e6e6e6",
        position: "fixed",
        bottom: 0,
        left: 0,
        zIndex: 100,
      }}
    >
      <span style={{ fontWeight: 400 }}>
        © Dept of CSE,{" "}
        <span style={{ color: "#0b76ff", fontWeight: 600 }}>NEC</span>, A.P., India.
      </span>
    </motion.footer>
  );
}
