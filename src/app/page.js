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
    <main className="min-h-screen bg-[#0a0c10] relative text-[#f1f5f9] overflow-x-hidden selection:bg-[#3b82f6]/25 selection:text-white">
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[350px] bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.06),transparent_70%)] pointer-events-none z-0"></div>

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
