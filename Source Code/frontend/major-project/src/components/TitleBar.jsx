import React from 'react';
import { motion } from 'framer-motion';

export default function TitleBar() {
  const logo = '/logo.png';

  return (
    <motion.header
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        width: "100%",
        backgroundColor: "#fff",
        padding: "25px 40px 30px 40px",   // adds equal left & right padding
        borderBottom: "1px solid #e3e3e3",
        marginTop: "80px",
        fontFamily: "Inter, sans-serif",
        boxSizing: "border-box",          // ensures perfect edge alignment
      }}
    >
      {/* TOP ROW - LOGO + HEADING */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          width: "100%",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{
            width: "70px",
            height: "70px",
            objectFit: "contain",
          }}
        />

        <h1
          style={{
            fontSize: "22px",
            fontWeight: 700,
            lineHeight: "1.4",
            color: "#003366",
            flex: 1,
            margin: 0,
          }}
        >
          CONTRASTIVE LEARNING: A DEEP LEARNING FRAMEWORK FOR REVIEW-BASED KNOWLEDGE GRAPHS
        </h1>
      </div>

      {/* BOTTOM SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          textAlign: "center",
          marginTop: "25px",
        }}
      >
        <p
          style={{
            fontSize: "15px",
            color: "#444",
            marginBottom: "10px",
          }}
        >
          <strong>Project by:</strong>{" "}
          <span style={{ fontWeight: 600 }}>M.Rajeswari (22471A05H0)</span>,{" "}
          <span style={{ fontWeight: 600 }}>B.Pushpa Sivaleelavathi (22471A05E6)</span>,{" "}
          <span style={{ fontWeight: 600 }}>Sk.Sumaya (22471A05J4)</span>
        </p>

        <p
          style={{
            fontSize: "15px",
            color: "#444",
            marginTop: "10px",
            marginBottom: 0,
          }}
        >
          <strong>Under the esteemed guidance of:</strong> <br />
          <span style={{ fontWeight: 600 }}>
            Dr. K. Soma Sekhar, B.Tech., M.Tech., Ph.D., Associate Professor
          </span>
        </p>
      </motion.div>
    </motion.header>
  );
}
