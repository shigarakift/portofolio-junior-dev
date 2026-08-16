"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 sm:scroll-mt-28">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8 sm:mb-10">
        <div className="p-2.5 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/20 text-[#0066FF]">
          <Sparkles size={20} />
        </div>
        <div>
          <span className="text-[11px] font-mono text-[#0066FF] uppercase tracking-wider font-semibold">
            04. Portfolio Work
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Featured Projects
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-6 rounded-2xl glass-tile shimmer-hover flex flex-col justify-between group min-w-0"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="px-2.5 py-1 rounded-md bg-[#0066FF]/10 border border-[#0066FF]/25 text-[#0066FF] text-xs font-mono font-medium">
                  {project.badge}
                </span>
                <div className="flex items-center space-x-3 text-slate-400">
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-white transition-colors"
                      title="Source Repository"
                    >
                      <FaGithub size={18} />
                    </a>
                  )}
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-[#0066FF] transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#0066FF] transition-colors mb-1">
                {project.title}
              </h3>
              <div className="text-[11px] sm:text-xs font-mono text-slate-500 mb-4">
                {project.tagline}
              </div>

              <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="space-y-2 mb-6">
                {project.highlights.map((hl, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] shrink-0"></span>
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-2.5 py-0.5 rounded text-[10px] sm:text-[11px] font-mono bg-[#080c14] text-slate-400 border border-white/[0.05]"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
