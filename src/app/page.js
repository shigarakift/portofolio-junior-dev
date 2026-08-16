"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080c14] bg-tech-pattern relative text-[#f8fafc] overflow-x-hidden selection:bg-[#0066FF]/30 selection:text-white">
      {/* Hero Ambient Radial Layer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] hero-glow-layer pointer-events-none z-0"></div>
      <div className="absolute top-72 right-0 w-[450px] h-[450px] secondary-glow-layer pointer-events-none z-0"></div>

      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-24 sm:pb-32 space-y-28 sm:space-y-36 relative z-10">
        {/* 1. HERO SECTION */}
        <Hero />

        {/* Section Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"></div>

        {/* 2. ABOUT SECTION */}
        <About />

        {/* Section Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"></div>

        {/* 3. CORE SKILLS SECTION */}
        <Skills />

        {/* Section Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"></div>

        {/* 4. EDUCATION SECTION */}
        <Education />

        {/* Section Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"></div>

        {/* 5. FEATURED PROJECTS SECTION */}
        <Projects />

        {/* Section Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"></div>

        {/* 6. CONTACT SECTION */}
        <Contact />
      </div>

      {/* 7. FOOTER */}
      <Footer />
    </main>
  );
}
