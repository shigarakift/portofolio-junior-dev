"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 sm:scroll-mt-28">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8 sm:mb-10">
        <div className="p-2.5 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/20 text-[#0066FF]">
          <Layers size={20} />
        </div>
        <div>
          <span className="text-[11px] font-mono text-[#0066FF] uppercase tracking-wider font-semibold">
            02. Technical Competencies
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Core Stack &amp; Skills
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((skill, idx) => {
          const IconComponent = skill.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl glass-tile shimmer-hover flex flex-col justify-between group min-w-0"
            >
              <div>
                <div className="flex justify-between items-start mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#12192a] border border-white/[0.08] flex items-center justify-center text-[#0066FF] group-hover:border-[#0066FF]/50 group-hover:bg-[#0066FF]/10 transition-colors">
                    <IconComponent size={22} />
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/[0.05] text-slate-400 border border-white/[0.05]">
                    {skill.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#0066FF] transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed mb-6">
                  {skill.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06] font-mono text-xs">
                {skill.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-[#080c14] border border-white/[0.06] text-slate-300 text-[10px] sm:text-[11px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
