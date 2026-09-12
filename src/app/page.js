"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f4f2] dark:bg-[#0e1117] relative text-[#0a0a0a] dark:text-[#f8fafc] overflow-x-hidden selection:bg-[#ff6b00]/20 selection:text-[#0a0a0a] transition-colors duration-200">
      {/* Taste Skill Tactile Noise Texture */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Subtle Warm Ambient Radial Lighting (Taste Skill signature glow) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[450px] bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,107,0,0.07),transparent_65%)] dark:bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,107,0,0.08),transparent_65%)] pointer-events-none z-0" />

      <Navbar />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-16 relative z-10">
        {/* 1. HERO */}
        <Hero />

        {/* 2. ABOUT & PHILOSOPHY */}
        <About />

        {/* 3. TECHNICAL CAPABILITIES */}
        <Skills />

        {/* 4. FEATURED WORK */}
        <Projects />

        {/* 5. ACADEMIC TRACK */}
        <Education />

        {/* 6. DIRECT CONTACT */}
        <Contact />
      </div>

      {/* 7. FOOTER */}
      <Footer />
    </main>
  );
}
