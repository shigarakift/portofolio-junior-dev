"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown, Check } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/portfolio";
import TechBadge from "@/components/TechBadge";

export default function Projects() {
  // Store expanded project IDs. Initialize with project id 2 open as visual cue.
  const [expandedIds, setExpandedIds] = useState([2]);

  const toggleProject = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="projects" className="scroll-mt-24 py-10 sm:py-14 border-t border-neutral-200/80 dark:border-white/[0.08]">
      {/* Section Header */}
      <div className="mb-8 sm:mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-mono text-[#d95700] dark:text-[#ff6b00] uppercase tracking-wider font-semibold">
            FEATURED PROJECTS
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-white tracking-tight mt-1">
            Production &amp; System Architectures
          </h2>
        </div>
        <p className="text-xs text-neutral-600 dark:text-neutral-400 font-sans max-w-sm">
          Click any project below to expand the architecture breakdown, system highlights, and repository code.
        </p>
      </div>

      {/* Open Editorial Index Ledger (Hairline Dividers, No Floating Boxes) */}
      <div className="divide-y divide-neutral-200/80 dark:divide-white/[0.08] border-y border-neutral-200/80 dark:border-white/[0.08]">
        {projects.map((project, idx) => {
          const isExpanded = expandedIds.includes(project.id);

          return (
            <div
              key={project.id}
              className="py-6 sm:py-8 transition-colors group"
            >
              {/* Clickable Open Summary Row */}
              <div
                onClick={() => toggleProject(project.id)}
                className="cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-4 select-none"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleProject(project.id);
                  }
                }}
                aria-expanded={isExpanded}
              >
                {/* Left: Index, Badge & Title */}
                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono text-neutral-400 dark:text-neutral-500 font-semibold">
                      0{idx + 1}
                    </span>
                    <span className="text-[11px] font-sans px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-white/[0.05] text-neutral-700 dark:text-slate-300 border border-neutral-200/80 dark:border-white/[0.06] font-medium">
                      {project.badge}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 dark:text-white group-hover:text-[#ff6b00] transition-colors tracking-tight">
                      {project.title}
                    </h3>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400 font-sans">
                      {project.tagline}
                    </span>
                  </div>
                </div>

                {/* Right: Tech Stack Pills & Open/Close Trigger */}
                <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-1 lg:pt-0">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, i) => (
                      <TechBadge key={i} name={t} />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleProject(project.id);
                    }}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 cursor-pointer ${
                      isExpanded
                        ? "bg-[#ff6b00]/10 text-[#d95700] dark:text-[#ff6b00] font-semibold"
                        : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
                    }`}
                    aria-label={isExpanded ? "Collapse project details" : "Expand project details"}
                  >
                    <span>{isExpanded ? "Collapse" : "Details"}</span>
                    <motion.span
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="inline-flex"
                    >
                      <ChevronDown size={14} />
                    </motion.span>
                  </button>
                </div>
              </div>

              {/* Seamless In-Line Expanded Drawer */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    key={`content-${project.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 mt-4 border-t border-neutral-200/70 dark:border-white/[0.06] grid grid-cols-1 lg:grid-cols-12 gap-8 text-neutral-700 dark:text-neutral-300 font-sans">
                      {/* Architecture narrative */}
                      <div className="lg:col-span-7 space-y-3">
                        <div className="text-[11px] uppercase tracking-wider font-mono text-neutral-500 dark:text-neutral-400 font-semibold">
                          Architecture &amp; Implementation
                        </div>
                        <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
                          {project.description}
                        </p>
                      </div>

                      {/* Technical highlights & Action buttons */}
                      <div className="lg:col-span-5 space-y-5">
                        <div>
                          <div className="text-[11px] uppercase tracking-wider font-mono text-neutral-500 dark:text-neutral-400 font-semibold mb-2.5">
                            Key Specifications
                          </div>
                          <div className="space-y-2 text-xs text-neutral-700 dark:text-neutral-300">
                            {project.highlights.map((hl, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <Check size={14} className="text-[#ff6b00] shrink-0 mt-0.5" />
                                <span className="leading-snug">{hl}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex items-center gap-3 pt-1">
                          {project.github && project.github !== "#" && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                              className="px-4 py-2 rounded-xl bg-neutral-100 dark:bg-white/[0.06] hover:bg-neutral-200 dark:hover:bg-white/[0.12] text-xs font-semibold text-neutral-800 dark:text-white border border-neutral-200/80 dark:border-white/[0.08] flex items-center gap-1.5 transition-colors"
                            >
                              <FaGithub size={14} />
                              <span>GitHub Repository</span>
                            </a>
                          )}
                          {project.demo && project.demo !== "#" && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noreferrer"
                              className="px-4 py-2 rounded-xl bg-[#0a0a0a] dark:bg-white text-white dark:text-[#0a0c10] hover:bg-[#222] dark:hover:bg-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
                            >
                              <span>Live Application</span>
                              <ArrowUpRight size={13} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
