"use client";

import React from "react";
import { GraduationCap, Check } from "lucide-react";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 sm:scroll-mt-28">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8 sm:mb-10">
        <div className="p-2.5 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/20 text-[#0066FF]">
          <GraduationCap size={20} />
        </div>
        <div>
          <span className="text-[11px] font-mono text-[#0066FF] uppercase tracking-wider font-semibold">
            03. Academic Background
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Education</h2>
        </div>
      </div>

      <div className="space-y-6">
        {education.map((item) => (
          <div key={item.id} className="p-6 sm:p-8 rounded-2xl glass-tile relative overflow-hidden min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.06] mb-6">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-2">
                  {item.status}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">{item.school}</h3>
                <p className="text-sm sm:text-base text-[#0066FF] font-mono font-medium mt-0.5">{item.major}</p>
              </div>
              <div className="font-mono text-xs sm:text-sm text-slate-300 px-3.5 py-1.5 rounded-xl bg-[#080c14] border border-white/[0.08] self-start sm:self-auto">
                {item.duration}
              </div>
            </div>

            <p className="text-slate-400 font-sans leading-relaxed text-xs sm:text-base mb-6">
              {item.description}
            </p>

            <div className="space-y-2.5 font-mono text-xs">
              <div className="text-slate-500 text-[10px] uppercase tracking-wider">Focus Curriculum</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                {item.highlights.map((hl, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#080c14] border border-white/[0.05] text-white text-xs min-w-0">
                    <Check size={14} className="text-[#0066FF] shrink-0" />
                    <span className="truncate">{hl}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
