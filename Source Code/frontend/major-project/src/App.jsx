import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TitleBar from './components/TitleBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Objectives from './pages/Objectives';
import Procedure from './pages/Procedure';
import Results from './pages/Results';
import Validation from './pages/Validation';
import './App.css';

export default function App() {
  return (
    <div className="app-wrapper flex flex-col min-h-screen bg-white">

      {/* Navbar */}
      <Navbar />

      {/* TitleBar (NOT sticky) */}
      <TitleBar />

      {/* Main Content (FIXED!) */}
      <main className="flex-1 w-full px-6 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/objectives" element={<Objectives />} />
          <Route path="/procedure" element={<Procedure />} />
          <Route path="/results" element={<Results />} />
          <Route path="/validation" element={<Validation />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
