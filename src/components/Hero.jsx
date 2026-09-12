"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronRight, Server, GraduationCap, Cpu, Globe } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalData } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="hero" className="pt-8 sm:pt-14 pb-12 sm:pb-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-7 max-w-4xl"
      >
        {/* Availability Beacon */}
        <div className="inline-flex items-center gap-2 text-xs font-sans px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-400">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-medium">{personalData.status}</span>
        </div>

        {/* Primary Heading */}
        <div className="space-y-2.5">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-950 dark:text-white leading-tight">
            {personalData.name}
          </h1>
          <p className="text-xl sm:text-2xl text-[#d95700] dark:text-[#ff6b00] font-semibold tracking-tight">
            {personalData.title}
          </p>
        </div>

        {/* Editorial Bio */}
        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans max-w-2xl">
          {personalData.bio}
        </p>

        {/* Action & Social Links Row */}
        <div className="flex flex-wrap items-center gap-4 pt-1 text-sm font-medium">
          <a
            href="#projects"
            className="px-5 py-2.5 rounded-xl bg-[#0a0a0a] dark:bg-white text-white dark:text-[#0a0c10] hover:bg-[#222] dark:hover:bg-slate-200 transition-all duration-150 flex items-center gap-1.5 font-semibold text-xs sm:text-sm shadow-md shadow-black/10 hover:shadow-lg active:scale-[0.99]"
          >
            <span>View Projects</span>
            <ChevronRight size={16} />
          </a>

          <a
            href={`mailto:${personalData.email}`}
            className="px-5 py-2.5 rounded-xl border border-neutral-300 dark:border-white/[0.1] bg-white dark:bg-white/[0.04] text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-white/[0.08] hover:border-neutral-400 transition-all duration-150 flex items-center gap-1.5 text-xs sm:text-sm shadow-sm"
          >
            <span>Contact Directly</span>
            <ArrowUpRight size={15} className="text-neutral-500 dark:text-neutral-400" />
          </a>

          <div className="flex items-center gap-2 pl-2 sm:pl-3 border-l border-neutral-300 dark:border-white/[0.1] text-neutral-600 dark:text-neutral-400">
            <a
              href={personalData.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg hover:bg-neutral-200/60 dark:hover:bg-white/[0.08] hover:text-neutral-950 dark:hover:text-white transition-colors"
              title="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg hover:bg-neutral-200/60 dark:hover:bg-white/[0.08] hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              title="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>

        {/* Open Editorial Specs Ledger Strip (Clean & Unboxed) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-neutral-200/80 dark:border-white/[0.08] text-xs">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-neutral-500 dark:text-neutral-400 text-[11px] uppercase tracking-wider font-mono">
              <Server size={13} className="text-[#ff6b00]" />
              <span>Specialization</span>
            </div>
            <div className="text-neutral-900 dark:text-white font-semibold text-xs sm:text-sm">Linux &amp; Backend</div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-neutral-500 dark:text-neutral-400 text-[11px] uppercase tracking-wider font-mono">
              <GraduationCap size={13} className="text-blue-600 dark:text-blue-400" />
              <span>Education</span>
            </div>
            <div className="text-neutral-900 dark:text-white font-semibold text-xs sm:text-sm">SMKN 1 Cibinong (SIJA)</div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-neutral-500 dark:text-neutral-400 text-[11px] uppercase tracking-wider font-mono">
              <Cpu size={13} className="text-emerald-600 dark:text-emerald-400" />
              <span>Core Stack</span>
            </div>
            <div className="text-neutral-900 dark:text-white font-semibold text-xs sm:text-sm">Docker, Go, Node, SQL</div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-neutral-500 dark:text-neutral-400 text-[11px] uppercase tracking-wider font-mono">
              <Globe size={13} className="text-purple-600 dark:text-purple-400" />
              <span>Location</span>
            </div>
            <div className="text-neutral-900 dark:text-white font-semibold text-xs sm:text-sm">{personalData.location}</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
