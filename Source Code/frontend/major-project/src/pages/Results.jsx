import React from "react";
import { motion } from "framer-motion";

export default function Results() {
  const images = [
    { src: "img1.png", desc: null },
    { src: "img2.png", desc: "Performance improvement shown after contrastive alignment." },
    { src: "img3.png", desc: "Embeddings become more separable after hybrid GNN processing." }
  ];

  return (
    <div
      style={{
        textAlign: "center",
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
          marginBottom: "25px",
          color: "#4b2bb3",
        }}
      >
        Results
      </motion.h2>

      {/* Image Cards */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "35px",
          alignItems: "center",
        }}
      >
        {images.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            style={{
              background: "#ffffff",
              padding: "18px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              width: "85%",
              maxWidth: "700px",
            }}
          >
            {/* Medium Image */}
            <img
              src={`/${item.src}`}
              alt={`Result ${index + 1}`}
              style={{
                width: "85%",          // ⬆ Increased from 70% to medium size
                borderRadius: "10px",
                boxShadow: "0 6px 15px rgba(0,0,0,0.12)",
                display: "block",
                margin: "0 auto",
              }}
            />

            {/* Description (skip for first image) */}
            {item.desc && (
              <p
                style={{
                  marginTop: "12px",
                  fontSize: "15px",
                  color: "#555",
                  lineHeight: "1.5",
                }}
              >
                {item.desc}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
