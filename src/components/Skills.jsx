"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, Terminal, Server, Cpu } from "lucide-react";
import { skills } from "@/data/portfolio";
import TechBadge from "@/components/TechBadge";

export default function Skills() {
  const [expandedSkills, setExpandedSkills] = useState([]);

  const toggleSkill = (index) => {
    setExpandedSkills((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const skillDetails = [
    {
      ...skills[0],
      icon: Terminal,
      iconColor: "text-[#d95700] dark:text-[#ff6b00]",
      checklist: [
        "Systemd daemon orchestration & service supervision",
        "SSH hardening, key-based authentication & UFW policies",
        "Nginx reverse proxy, TLS 1.3 configuration & caching",
        "Bash automation scripts & cron scheduled maintenance"
      ]
    },
    {
      ...skills[1],
      icon: Server,
      iconColor: "text-blue-600 dark:text-blue-400",
      checklist: [
        "RESTful API design with structured request validation",
        "PostgreSQL & MySQL connection pooling and indexes",
        "JWT authentication & role-based access control (RBAC)",
        "Database migrations & predictable error handling"
      ]
    },
    {
      ...skills[2],
      icon: Cpu,
      iconColor: "text-cyan-600 dark:text-cyan-400",
      checklist: [
        "Reproducible containerized development workflows",
        "Docker Compose multi-service orchestrations",
        "Multi-stage Dockerfiles for minimal image footprints",
        "Isolated bridge networks & persistent volume management"
      ]
    }
  ];

  return (
    <section id="skills" className="scroll-mt-24 py-10 sm:py-14 border-t border-neutral-200/80 dark:border-white/[0.08]">
      {/* Section Header */}
      <div className="mb-8 sm:mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-mono text-[#d95700] dark:text-[#ff6b00] uppercase tracking-wider font-semibold">
            TECHNICAL CAPABILITIES
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-white tracking-tight mt-1">
            Core Engineering Competencies
          </h2>
        </div>
        <p className="text-xs text-neutral-600 dark:text-neutral-400 font-sans max-w-sm">
          Vocational systems administration, resilient backend architectures, and containerized deployment pipelines.
        </p>
      </div>

      {/* Open Editorial Ledger Grid (Hairline Dividers, No Bulky Boxes) */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-200/80 dark:divide-white/[0.08] border-y border-neutral-200/80 dark:border-white/[0.08]">
        {skillDetails.map((skill, idx) => {
          const isExpanded = expandedSkills.includes(idx);
          const Icon = skill.icon;

          return (
            <div
              key={idx}
              className={`py-6 md:py-8 ${
                idx === 0
                  ? "md:pr-8"
                  : idx === 1
                  ? "md:px-8"
                  : "md:pl-8"
              } flex flex-col justify-between space-y-6`}
            >
              {/* Header & High-Level Summary */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-semibold">
                    {skill.category}
                  </span>
                  <div className={`p-1.5 ${skill.iconColor}`}>
                    <Icon size={18} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-neutral-950 dark:text-white tracking-tight">
                  {skill.name}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Interactive In-line Production Checklist (No Inner Clunky Box) */}
              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={() => toggleSkill(idx)}
                  className={`w-full flex items-center justify-between py-2 text-xs font-medium border-b transition-all duration-150 cursor-pointer ${
                    isExpanded
                      ? "border-[#ff6b00] text-[#d95700] dark:text-[#ff6b00] font-semibold"
                      : "border-neutral-200/80 dark:border-white/[0.08] text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white"
                  }`}
                  aria-expanded={isExpanded}
                >
                  <span>{isExpanded ? "Hide Checklist" : "Explore Methods"}</span>
                  <motion.span
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="inline-flex"
                  >
                    <ChevronDown size={14} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key={`skill-detail-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-2 space-y-2 border-l-2 border-[#ff6b00]/60 pl-3.5 my-1">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold mb-1">
                          Production Standards
                        </div>
                        {skill.checklist.map((item, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                            <Check size={13} className="text-[#ff6b00] shrink-0 mt-0.5" />
                            <span className="leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Tech Tags with Rich Branded Icons */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {skill.tags.map((tag, i) => (
                    <TechBadge key={i} name={tag} />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
