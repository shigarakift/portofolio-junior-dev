"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalData } from "@/data/portfolio";
import { Check, Server, Box, Database, ChevronDown } from "lucide-react";

export default function About() {
  const [activePillar, setActivePillar] = useState(0);
  const [isStoryExpanded, setIsStoryExpanded] = useState(false);

  const pillars = [
    {
      id: "infra",
      name: "Linux Infrastructure",
      icon: Server,
      tag: "Server Core",
      summary: "Prioritizing high uptime, hardened access, and reliable process supervision.",
      points: [
        "Systemd daemon orchestration & service control",
        "SSH hardening with key-only authentication",
        "Nginx reverse proxy with TLS 1.3 termination",
        "Automated maintenance scripts with Bash & cron"
      ],
      environment: "Ubuntu Server / Debian GNU/Linux"
    },
    {
      id: "containers",
      name: "Containerization",
      icon: Box,
      tag: "DevOps & Parity",
      summary: "Ensuring reproducible environments from development to production deployments.",
      points: [
        "Multi-stage Dockerfile builds for minimal footprint",
        "Docker Compose service networks & bridge isolation",
        "Non-root container user security practices",
        "Persistent volume management for databases"
      ],
      environment: "Docker Engine & Docker Compose"
    },
    {
      id: "backend",
      name: "Backend Architecture",
      icon: Database,
      tag: "API Engineering",
      summary: "Designing scalable, structured RESTful services with connection pooling & auth.",
      points: [
        "Clean REST API design with structured request validation",
        "PostgreSQL connection pooling and query optimization",
        "JWT token authentication with role-based access control",
        "Consistent error responses and request logging"
      ],
      environment: "Go, Node.js & PostgreSQL"
    }
  ];

  const current = pillars[activePillar];
  const CurrentIcon = current.icon;

  return (
    <section id="about" className="scroll-mt-24 py-10 sm:py-14 border-t border-neutral-200/80 dark:border-white/[0.08]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
        {/* Left Column: Metadata & Overview */}
        <div className="lg:col-span-4 space-y-3">
          <span className="text-xs font-mono text-[#d95700] dark:text-[#ff6b00] uppercase tracking-wider font-semibold">
            ENGINEERING APPROACH
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-white tracking-tight">
            Systems &amp; Architecture
          </h2>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed pt-1">
            Bridging vocational networking fundamentals with practical Linux server management and modern software engineering.
          </p>

          <div className="pt-4 space-y-2 text-xs text-neutral-600 dark:text-neutral-400 border-t border-neutral-200/70 dark:border-white/[0.06]">
            <div className="flex justify-between py-1">
              <span className="text-neutral-500">Education Track</span>
              <span className="text-neutral-900 dark:text-white font-semibold">SMKN 1 Cibinong (SIJA)</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-neutral-500">Program Duration</span>
              <span className="text-neutral-900 dark:text-white font-semibold">4-Year Vocational</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-neutral-500">Target Role</span>
              <span className="text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-200/60 dark:border-emerald-500/20 font-semibold">Internship / Part-Time</span>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative & Interactive Focus Switcher */}
        <div className="lg:col-span-8 space-y-6 text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed text-sm sm:text-base">
          {/* Concise primary overview */}
          <p className="text-neutral-800 dark:text-neutral-200 text-base sm:text-lg leading-relaxed font-normal">
            {personalData.about}
          </p>

          {/* Open Inline Collapsible Story (No Chunky Box Wrapper) */}
          <div className="space-y-2">
            <button
              type="button"
              onClick={() => setIsStoryExpanded(!isStoryExpanded)}
              className="inline-flex items-center gap-2 font-mono uppercase tracking-wider text-[11px] text-[#d95700] dark:text-[#ff6b00] font-semibold hover:opacity-80 transition-opacity cursor-pointer select-none"
              aria-expanded={isStoryExpanded}
            >
              <span>{isStoryExpanded ? "Hide Background Narrative" : "Read Vocational Background"}</span>
              <motion.span
                animate={{ rotate: isStoryExpanded ? 180 : 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="inline-flex text-neutral-500 dark:text-neutral-400"
              >
                <ChevronDown size={14} />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isStoryExpanded && (
                <motion.div
                  key="story-content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed border-l-2 border-[#ff6b00]/60 pl-3.5 my-2">
                    As a student in the{" "}
                    <strong className="text-neutral-900 dark:text-white font-semibold">
                      SIJA (Sistem Informatika, Jaringan, dan Aplikasi)
                    </strong>{" "}
                    vocational program at SMKN 1 Cibinong, my practical training focuses on understanding what happens beneath the application layer: how network packets route, how services daemonize through systemd, and how containerized backend APIs maintain reliability under concurrent load.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Interactive Core Competency Switcher */}
          <div className="pt-2 space-y-4">
            <div className="text-xs text-neutral-600 dark:text-neutral-400 font-semibold">
              Explore Core Competency Focus:
            </div>

            {/* Interactive Tabs Row */}
            <div className="flex flex-wrap gap-2">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                const isActive = activePillar === idx;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActivePillar(idx)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all duration-150 flex items-center gap-2 cursor-pointer ${
                      isActive
                        ? "bg-[#0a0a0a] dark:bg-white text-white dark:text-[#0a0c10] shadow-sm font-semibold"
                        : "bg-white/80 dark:bg-white/[0.04] text-neutral-700 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/[0.08] border border-neutral-200/90 dark:border-white/[0.06]"
                    }`}
                  >
                    <Icon size={14} className={isActive ? "text-[#ff6b00]" : "text-neutral-500"} />
                    <span>{pillar.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Open Details Panel (No Heavy Enclosing Box) */}
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="pt-4 border-t border-neutral-200/80 dark:border-white/[0.08] space-y-3.5"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="p-1 text-[#d95700] dark:text-[#ff6b00]">
                    <CurrentIcon size={18} />
                  </div>
                  <span className="text-neutral-950 dark:text-white font-bold text-sm">
                    {current.name}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-white/[0.04] px-2.5 py-0.5 rounded-md border border-neutral-200 dark:border-white/[0.06]">
                  {current.environment}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
                {current.summary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-neutral-700 dark:text-neutral-300">
                {current.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check size={14} className="text-[#ff6b00] shrink-0 mt-0.5" />
                    <span className="leading-snug">{pt}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
