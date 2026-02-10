import React from 'react';

export default function About() {
  const text = `Graph-based learning has gained popularity as a robust solution for modeling entity recommendations and representations through a collection of nodes and edges that link entities together. Knowledge Graphs (KGs) provide a structured way to represent real-world entities and their relationships, which is highly beneficial for complex tasks like recommendation systems and link prediction.

Nevertheless, traditional models of knowledge graphs can suffer from noisy high-order relationships and ignore the rich contextual information found in user reviews. This research proposes a review-enriched Graph Neural Network (GNN) framework that connects structural knowledge and semantic cues through a contrastive learning objective.

A hybrid architecture, combining Graph Attention Networks (GAT) and Relational Graph Convolutional Networks (R-GCN), is designed to better capture heterogeneous relations and localized importance of nodes. Review embeddings (obtained from transformer-based models) and structural node representations are aligned and enhanced by the contrastive objective to improve the quality of the learned features. This multi-view approach leads to more robust and semantically meaningful entity representations.`;

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "20px 30px",
        lineHeight: "1.7",
        textAlign: "justify",
        color: "#222",
        background: "#ffffff"
      }}
    >
      <h2
        style={{
          fontSize: "28px",
          fontWeight: "600",
          marginBottom: "18px",
          textAlign: "center",
          color: "#3c1f71"
        }}
      >
        About the Project
      </h2>

      <p style={{ marginBottom: "18px", fontSize: "16px" }}>{text}</p>

      <p style={{ marginBottom: "18px", fontSize: "16px" }}>
        The backend provides validation endpoints which read datasets and recreate visualizations from
        the project's evaluation notebooks. Use the Validation page to run the dataset-based checks
        and generate graphs.
      </p>
    </div>
  );
}
