"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Server, Box, Database } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function About() {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      id: "infra",
      name: "Linux Infrastructure",
      icon: Server,
      tag: "Server Core",
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
      <Reveal>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
        {/* Left Column: Metadata */}
        <div className="lg:col-span-4 space-y-3">
          <span className="text-xs font-mono text-[#d95700] dark:text-[#ff6b00] uppercase tracking-wider font-semibold">
            ENGINEERING APPROACH
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-neutral-950 dark:text-white">
            Systems &amp; Architecture
          </h2>

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

        {/* Right Column: Interactive Competency Switcher */}
        <div className="lg:col-span-8">
          {/* Tabs Row */}
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

          {/* Details Panel */}
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
      </Reveal>
    </section>
  );
}
