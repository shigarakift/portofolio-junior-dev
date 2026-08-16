"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Terminal as TerminalIcon, ArrowUpRight } from "lucide-react";
import HeroSysWidget from "@/components/HeroSysWidget";
import { personalData } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="hero" className="min-h-[65vh] sm:min-h-[72vh] flex flex-col justify-center">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Content Column */}
        <motion.div
          className="lg:col-span-7 space-y-6 min-w-0"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Availability Beacon Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/25 text-[#0066FF] text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-[#0066FF] animate-pulse shrink-0"></span>
            <span className="font-medium truncate">{personalData.status}</span>
          </div>

          {/* Headline */}
          <div className="space-y-2.5">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              {personalData.name}
            </h1>
            <p className="text-base sm:text-xl font-mono text-[#0066FF] font-medium flex items-center gap-2">
              <TerminalIcon size={19} className="shrink-0 text-[#0066FF]" />
              <span>{personalData.title}</span>
            </p>
          </div>

          {/* Bio Summary */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-400 leading-relaxed max-w-xl font-sans">
            {personalData.bio}
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium">
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-xl bg-[#0066FF] text-white hover:bg-[#0052CC] transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#0066FF]/25 font-semibold text-center shrink-0"
            >
              <span>View Projects</span>
              <ChevronRight size={18} />
            </a>
            <a
              href="#contact"
              className="px-6 py-3.5 rounded-xl border border-white/[0.1] bg-[#0d1320]/90 text-slate-300 hover:text-white hover:border-[#0066FF]/50 hover:bg-[#121b2e] transition-all duration-200 flex items-center justify-center gap-2 text-center shrink-0"
            >
              <span>Contact Me</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>

        {/* Right Telemetry Node Widget */}
        <motion.div
          className="lg:col-span-5 w-full min-w-0"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <HeroSysWidget />
        </motion.div>
      </div>
    </section>
  );
}
