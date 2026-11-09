"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronRight, Server, GraduationCap, Cpu, Globe } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalData } from "@/data/portfolio";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="pt-14 sm:pt-20 pb-12 sm:pb-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="space-y-10 sm:space-y-14 max-w-4xl">
        {/* Name label + availability */}
        <motion.div variants={itemVariants}>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <span className="font-display text-lg sm:text-xl font-medium tracking-tight text-neutral-950 dark:text-white">
              {personalData.name}
            </span>
            <span className="text-xs text-neutral-400 dark:text-neutral-500 font-mono">
              / {personalData.username}
            </span>
            <span className="inline-flex items-center gap-2 text-xs font-sans px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-medium">Available</span>
            </span>
          </div>
        </motion.div>

        {/* Role statement — the hero element */}
        <motion.h1 variants={itemVariants} className="font-display text-3xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.03em] leading-[1.05] text-neutral-950 dark:text-white">
          <span className="relative inline-block">
            Linux Administration
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.9, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-1.5 left-0 w-1/3 h-1 bg-[#ff6b00] rounded-full origin-left"
            />
          </span>
          <br />
          <span className="text-neutral-400 dark:text-neutral-500">
            &amp; Backend Development
          </span>
        </motion.h1>

        {/* Action & Social Links Row */}
        <motion.div variants={itemVariants}>
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
            <a
              href="#projects"
              className="group px-5 py-2.5 rounded-xl bg-[#0a0a0a] dark:bg-white text-white dark:text-[#0a0c10] hover:bg-[#222] dark:hover:bg-slate-200 transition-all duration-150 flex items-center gap-1.5 font-semibold text-xs sm:text-sm shadow-md shadow-black/10 hover:shadow-lg active:scale-[0.99]"
            >
              <span>View Projects</span>
              <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={`mailto:${personalData.email}`}
              className="group relative px-5 py-2.5 rounded-xl border border-neutral-300 dark:border-white/[0.1] bg-white dark:bg-white/[0.04] text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-white/[0.08] hover:border-neutral-400 transition-all duration-150 flex items-center gap-1.5 text-xs sm:text-sm shadow-sm"
            >
              <span>Contact Directly</span>
              <ArrowUpRight size={15} className="text-neutral-500 dark:text-neutral-400 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
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
        </motion.div>

        {/* Spec Ledger Strip */}
        <motion.div variants={itemVariants}>
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
      </div>
    </motion.section>
  );
}
