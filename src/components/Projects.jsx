"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-10 sm:py-14 border-t border-white/[0.08]">
      {/* Section Header */}
      <div className="mb-10 sm:mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-mono text-[#3b82f6] uppercase tracking-wider">
            03 / Selected Work
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
            Featured Projects
          </h2>
        </div>
        <p className="text-xs text-slate-400 font-sans max-w-sm">
          A selection of production-grade backends, network tools, and fullstack platforms.
        </p>
      </div>

      {/* Modern Interactive Project Index Rows (Not Clunky Boxes) */}
      <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 group hover:bg-white/[0.02] transition-colors px-2 sm:px-4 -mx-2 sm:-mx-4 rounded-xl"
          >
            {/* Column 1: Index & Category */}
            <div className="lg:col-span-3 space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-500">
                  0{idx + 1}
                </span>
                <span className="text-[11px] font-sans px-2.5 py-0.5 rounded-full bg-white/[0.05] text-slate-300 border border-white/[0.06]">
                  {project.badge}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#3b82f6] transition-colors tracking-tight">
                {project.title}
              </h3>

              <div className="text-xs text-slate-400 font-sans">
                {project.tagline}
              </div>
            </div>

            {/* Column 2: Narrative & Highlights */}
            <div className="lg:col-span-6 space-y-4">
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                {project.description}
              </p>

              <div className="space-y-1.5 text-xs text-slate-400 font-sans">
                {project.highlights.map((hl, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#3b82f6]"></span>
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: Tech Pills & Links */}
            <div className="lg:col-span-3 flex flex-col justify-between space-y-4">
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 text-xs text-slate-300 bg-white/[0.04] border border-white/[0.06] rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-2">
                {project.github && project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
                  >
                    <FaGithub size={15} />
                    <span>Source Code</span>
                  </a>
                )}
                {project.demo && project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-[#3b82f6] hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
