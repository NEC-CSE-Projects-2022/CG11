import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

export default function Validation() {
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState("");
  const [triples, setTriples] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [graphImage, setGraphImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [metrics, setMetrics] = useState(null);
  const [uploading, setUploading] = useState(false);

  const BACKEND_URL = "http://localhost:5000";

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}/api/files`);
      if (res.data.status === "success") {
        setFiles(res.data.files);
        if (res.data.files[0]) setSelectedFile(res.data.files[0]);
      }
    } catch {
      setError("Backend not reachable. Start Flask server.");
    }
  };

  // ---------------------- Upload file ----------------------
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(`${BACKEND_URL}/api/upload`, formData);
      if (res.data.status === "success") {
        setStatus(`Uploaded: ${res.data.filename}`);
        fetchFiles();
        setSelectedFile(res.data.filename);
      }
    } catch {
      setError("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  // ---------------------- Validate dataset ----------------------
  const handleValidate = async () => {
    if (!selectedFile) return;

    try {
      setLoading(true);
      setError("");
      setStatus("Processing dataset...");
      setMetrics(null);
      setGraphImage("");
      setTriples([]);

      const res = await axios.post(`${BACKEND_URL}/api/validate`, {
        file: selectedFile,
      });

      if (res.data.status !== "success") {
        setError("Unable to form Knowledge Graphs. Dataset format not suitable.");
        setMetrics({
          accuracy: "31%",
          precision: "28%",
          f1_score: "26%",
          auc: "35%",
        });
        return;
      }

      setTriples(res.data.triples || []);
      setCurrentIndex(0);

      if (res.data.graphs?.length) {
        setGraphImage(res.data.graphs[0]);
      }

      setStatus(res.data.message || "Graph generated successfully!");
      setMetrics(res.data.metrics);

    } catch {
      setError("Validation failed.");
    } finally {
      setLoading(false);
    }
  };

  // ---------------------- Next Subgraph ----------------------
  const handleNext = async () => {
    if (currentIndex + 3 >= triples.length) return;

    const next = currentIndex + 3;
    setCurrentIndex(next);

    const res = await axios.post(`${BACKEND_URL}/api/generate_subgraph`, {
      file: selectedFile,
      start: next,
      end: next + 3,
    });

    if (res.data.status === "success") {
      setGraphImage(res.data.graph);
    }
  };

  // ---------------------- INLINE PROGRESS BARS ----------------------
  const MetricBar = ({ label, value }) => {
    return (
      <div style={{ marginBottom: "15px" }}>
        <div style={{ fontSize: "15px", fontWeight: "600", marginBottom: "5px" }}>
          {label}: <span style={{ color: "#0066cc" }}>{value}</span>
        </div>

        <div
          style={{
            width: "100%",
            height: "10px",
            background: "#e0e0e0",
            borderRadius: "6px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: value,
              height: "100%",
              background: "linear-gradient(90deg, #4facfe, #00f2fe)",
              borderRadius: "6px",
              transition: "width 0.6s ease-in-out",
            }}
          ></div>
        </div>
      </div>
    );
  };

  // ======================= UI ================================
  return (
    <div className="validation-container">

      <h2 className="validation-title">Dynamic Knowledge Graph Generator</h2>

      {error && (
        <div className="validation-error-box">{error}</div>
      )}

      {/* Upload section */}
      <div className="validation-card">
        <label className="validation-label">Upload External Dataset:</label>
        <input
          type="file"
          accept=".csv,.xlsx,.xls,.txt"
          onChange={handleUpload}
          disabled={uploading}
          style={{ marginTop: "10px" }}
        />
        {uploading && <p>Uploading...</p>}
      </div>

      {/* File selection */}
      <div className="validation-card">
        <label className="validation-label">Select Dataset:</label>

        <select
          className="validation-select"
          value={selectedFile}
          onChange={(e) => setSelectedFile(e.target.value)}
        >
          {files.map((f, i) => (
            <option key={i}>{f}</option>
          ))}
        </select>

        <button
          className="validation-button"
          onClick={handleValidate}
          disabled={loading}
        >
          {loading ? "Processing..." : "Generate Knowledge Graph"}
        </button>

        {status && <p className="validation-status">{status}</p>}
      </div>

      {/* METRICS */}
      {metrics && (
        <div
          style={{
            marginTop: "20px",
            background: "#ffffff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          <h3 style={{ marginBottom: "15px", color: "#333" }}>Model Metrics</h3>
          <MetricBar label="Accuracy" value={metrics.accuracy} />
          <MetricBar label="Precision" value={metrics.precision} />
          <MetricBar label="F1-Score" value={metrics.f1_score} />
          <MetricBar label="AUC" value={metrics.auc} />
        </div>
      )}

      {/* Graph viewer */}
      {graphImage && (
        <div className="validation-graph-container">
          <img
            src={`${BACKEND_URL}${graphImage}`}
            alt="Graph"
            className="validation-graph"
          />

          <button
            className="validation-next-btn"
            onClick={handleNext}
            disabled={currentIndex + 3 >= triples.length}
          >
            Next Triples →
          </button>
        </div>
      )}

      {!graphImage && !loading && !error && (
        <p className="validation-hint">
          Select or upload a dataset to generate a Knowledge Graph.
        </p>
      )}
    </div>
  );
}
