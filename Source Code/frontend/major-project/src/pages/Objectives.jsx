
import React from 'react';
import { motion } from 'framer-motion';

export default function Objectives() {

  const objectives = [
    "Introduce a review-enriched GNN framework to overcome limitations of traditional Knowledge Graph models.",
    "Align graph structure and review semantics using a contrastive learning objective.",
    "Implement a hybrid GAT + R-GCN architecture for capturing localized importance and heterogeneous relations.",
    "Improve entity representations by maximizing agreement between structural and semantic views.",
    "Evaluate model performance using dimensionality reduction and tree-based classifiers, achieving higher accuracy and F1-scores."
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        maxWidth: "800px",
        margin: "40px auto",
        padding: "20px",
        background: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <h2
        style={{
          fontSize: "22px",
          fontWeight: 600,
          marginBottom: "15px",
          color: "#4b2bb3",
          textAlign: "center"
        }}
      >
        Project Objectives
      </h2>

      <ul style={{ paddingLeft: "20px", margin: 0 }}>
        {objectives.map((item, index) => (
          <li
            key={index}
            style={{
              marginBottom: "12px",
              fontSize: "15px",
              lineHeight: "1.5",
              color: "#333",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
