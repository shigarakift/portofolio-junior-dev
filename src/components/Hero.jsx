"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalData } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="hero" className="pt-10 sm:pt-16 pb-12 sm:pb-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-8 max-w-4xl"
      >
        {/* Availability Beacon */}
        <div className="inline-flex items-center gap-2 text-xs text-slate-300 font-sans">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-slate-400">{personalData.status}</span>
        </div>

        {/* Primary Heading */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
            {personalData.name}
          </h1>
          <p className="text-xl sm:text-2xl text-[#3b82f6] font-medium tracking-tight">
            {personalData.title}
          </p>
        </div>

        {/* Editorial Bio */}
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-2xl">
          {personalData.bio}
        </p>

        {/* Action & Social Links Row */}
        <div className="flex flex-wrap items-center gap-4 pt-2 text-sm font-medium">
          <a
            href="#projects"
            className="px-5 py-2.5 rounded-lg bg-white text-[#0a0c10] hover:bg-slate-200 transition-colors duration-150 flex items-center gap-1.5 font-semibold text-xs sm:text-sm"
          >
            <span>View Projects</span>
            <ChevronRight size={16} />
          </a>

          <a
            href={`mailto:${personalData.email}`}
            className="px-5 py-2.5 rounded-lg border border-white/[0.1] hover:border-white/[0.2] bg-white/[0.03] text-white transition-colors duration-150 flex items-center gap-1.5 text-xs sm:text-sm"
          >
            <span>Contact Directly</span>
            <ArrowUpRight size={15} className="text-slate-400" />
          </a>

          <div className="flex items-center gap-3 pl-2 sm:pl-4 border-l border-white/[0.1] text-slate-400">
            <a
              href={personalData.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
              title="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
              title="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>

        {/* Minimalist Specs Ledger Strip (Clean Row, Not a Chunky Box) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/[0.08] text-xs">
          <div>
            <div className="text-slate-500 text-[11px] uppercase tracking-wider font-mono">Specialization</div>
            <div className="text-slate-200 font-medium mt-1">Linux &amp; Backend</div>
          </div>
          <div>
            <div className="text-slate-500 text-[11px] uppercase tracking-wider font-mono">Education</div>
            <div className="text-slate-200 font-medium mt-1">SMKN 1 Cibinong (SIJA)</div>
          </div>
          <div>
            <div className="text-slate-500 text-[11px] uppercase tracking-wider font-mono">Core Stack</div>
            <div className="text-slate-200 font-medium mt-1">Docker, Go, Node, SQL</div>
          </div>
          <div>
            <div className="text-slate-500 text-[11px] uppercase tracking-wider font-mono">Location</div>
            <div className="text-slate-200 font-medium mt-1">{personalData.location}</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
