import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    const canvas = document.getElementById("kgCanvas");
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const brightColors = [
      "#b388ff",
      "#cfa1ff",
      "#e6c6ff",
      "#d5a3ff",
      "#bf7fff"
    ];

    const nodes = Array.from({ length: 35 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 2.5 + Math.random() * 2.5,
      color: brightColors[Math.floor(Math.random() * brightColors.length)],
      dx: -0.35 + Math.random() * 0.7,
      dy: -0.35 + Math.random() * 0.7
    }));

    let offsetX = 0;
    let offsetY = 0;

    function animate() {
      ctx.clearRect(0, 0, width, height);

      offsetX += 0.05;
      offsetY += 0.03;

      nodes.forEach((a, i) => {
        nodes.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);

          if (dist < 170) {
            ctx.strokeStyle = `rgba(150, 70, 255, ${(1 - dist / 170) * 0.75})`;
            ctx.lineWidth = 1.4;
            ctx.beginPath();
            ctx.moveTo(a.x + offsetX * 0.2, a.y + offsetY * 0.2);
            ctx.lineTo(b.x + offsetX * 0.2, b.y + offsetY * 0.2);
            ctx.stroke();
          }
        });
      });

      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x + offsetX * 0.2, n.y + offsetY * 0.2, n.r, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.globalAlpha = 0.95;
        ctx.fill();
        ctx.globalAlpha = 1.0;

        n.x += n.dx;
        n.y += n.dy;

        if (n.x < -200 || n.x > width + 200) n.dx *= -1;
        if (n.y < -200 || n.y > height + 200) n.dy *= -1;
      });

      if (offsetX > width || offsetY > height) {
        offsetX = 0;
        offsetY = 0;
      }

      requestAnimationFrame(animate);
    }

    animate();

    window.onresize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100vh",
        paddingTop: "90px", // moves heading down slightly from very top
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* CANVAS BACKGROUND */}
      <canvas
        id="kgCanvas"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 5,
          opacity: 0.42,
          filter: "blur(0.7px)"
        }}
      ></canvas>

      {/* TOP CENTERED HEADING */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          zIndex: 10,
          maxWidth: "900px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#4b2bb3",
            lineHeight: "1.4",
            marginBottom: "15px",
            textShadow: "0 0 6px rgba(150, 80, 255, 0.4)"
          }}
        >
          CONTRASTIVE LEARNING: A DEEP LEARNING FRAMEWORK FOR REVIEW-BASED
          KNOWLEDGE GRAPHS
        </h1>

        <p
          style={{
            fontSize: "17px",
            color: "#333",
            lineHeight: "1.6",
            textShadow: "0 0 4px rgba(255,255,255,0.3)"
          }}
        >
          A unified system that aligns user review semantics with knowledge-graph
          structure to generate richer and more meaningful entity representations.
        </p>
      </motion.div>
    </div>
  );
}
