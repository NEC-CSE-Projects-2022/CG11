import React from "react";
import { motion } from "framer-motion";

export default function Procedure() {
  const steps = [
    "Data Collection & Preprocessing: Gather and clean review and entity data from sources such as Amazon Books or Prime.",
    "Review Embedding Generation: Produce semantic review embeddings using a fine-tuned Transformer model like RoBERTa.",
    "Knowledge Graph Construction: Build a heterogeneous KG with users, items, reviews, and multi-type relations.",
    "Hybrid GNN Architecture: Use a combined GAT + R-GCN model to learn structural embeddings from the graph.",
    "Contrastive Alignment: Apply InfoNCE loss to align structural GNN embeddings with semantic review embeddings.",
    "Dimensionality Reduction & Classification: Reduce embeddings with PCA/t-SNE and classify using XGBoost for prediction."
  ];

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "900px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          fontSize: "24px",
          fontWeight: "600",
          marginBottom: "20px",
          textAlign: "center",
          color: "#4b2bb3",
        }}
      >
        Implementation Steps
      </motion.h2>

      {/* Steps List */}
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            style={{
              background: "#ffffff",
              padding: "15px 18px",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              borderLeft: "5px solid #6e44ff",
              fontSize: "15px",
              lineHeight: "1.5",
            }}
          >
            <strong style={{ color: "#6e44ff", marginRight: "6px" }}>
              Step {index + 1}:
            </strong>
            {step}
          </motion.div>
        ))}
      </div>

      {/* Architecture Section */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        style={{
          marginTop: "40px",
          textAlign: "center",
          padding: "15px",
          background: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h3
          style={{
            fontSize: "20px",
            fontWeight: "600",
            color: "#4b2bb3",
            marginBottom: "8px",
          }}
        >
          System Architecture
        </h3>

        <p style={{ marginTop: "5px", fontSize: "15px" }}>
          Contrastive Learning Knowledge Graph Framework Architecture
        </p>
        <p style={{ marginTop: "5px", fontSize: "14px", color: "#555" }}>
          A visual representation of the hybrid GNN and contrastive learning alignment.
        </p>

        <img
          src="/architecture.png"
          alt="architecture"
          style={{
            marginTop: "15px",
            width: "80%",
            borderRadius: "10px",
            boxShadow: "0 6px 15px rgba(0,0,0,0.12)",
          }}
        />
      </motion.div>
    </div>
  );
}
