"use client";

import React from "react";
import { Terminal, Server, Cpu } from "lucide-react";
import { skills } from "@/data/portfolio";
import TechBadge from "@/components/TechBadge";
import Reveal from "@/components/Reveal";

const iconMap = [
  { icon: Terminal, color: "text-[#d95700] dark:text-[#ff6b00]" },
  { icon: Server, color: "text-blue-600 dark:text-blue-400" },
  { icon: Cpu, color: "text-cyan-600 dark:text-cyan-400" },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-10 sm:py-14 border-t border-neutral-200/80 dark:border-white/[0.08]">
      {/* Section Header */}
      <Reveal className="mb-8 sm:mb-10">
        <span className="text-xs font-mono text-[#d95700] dark:text-[#ff6b00] uppercase tracking-wider font-semibold">
          TECHNICAL CAPABILITIES
        </span>
        <h2 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-neutral-950 dark:text-white mt-1">
          Core Engineering Competencies
        </h2>
      </Reveal>

      {/* Minimal Grid: icon + name + tags */}
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-200/80 dark:divide-white/[0.08] border-y border-neutral-200/80 dark:border-white/[0.08]">
          {skills.map((skill, idx) => {
            const { icon: Icon, color } = iconMap[idx];
            return (
              <div
                key={idx}
                className={`group py-6 md:py-8 space-y-4 transition-transform duration-300 hover:-translate-y-0.5 ${
                  idx === 0 ? "md:pr-8" : idx === 1 ? "md:px-8" : "md:pl-8"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-semibold">
                    {skill.category}
                  </span>
                  <div className={`p-1.5 ${color} transition-transform duration-300 group-hover:scale-110`}>
                    <Icon size={18} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-neutral-950 dark:text-white tracking-tight">
                  {skill.name}
                </h3>

                <div className="flex flex-wrap gap-1.5">
                  {skill.tags.map((tag, i) => (
                    <TechBadge key={i} name={tag} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
