"use client";

import React from "react";
import { Check } from "lucide-react";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-10 sm:py-14 border-t border-white/[0.08]">
      {/* Section Header */}
      <div className="mb-10 sm:mb-12">
        <span className="text-xs font-mono text-[#3b82f6] uppercase tracking-wider">
          04 / Education
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
          Academic Track
        </h2>
      </div>

      <div className="space-y-8">
        {education.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 pb-8 border-b border-white/[0.08]"
          >
            {/* Column 1: Timeline & Status */}
            <div className="lg:col-span-3 space-y-2">
              <div className="text-sm font-semibold text-white font-sans">
                {item.duration}
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>{item.status}</span>
              </div>
            </div>

            {/* Column 2: Institution & Major */}
            <div className="lg:col-span-5 space-y-2">
              <h3 className="text-xl font-bold text-white tracking-tight">
                {item.school}
              </h3>
              <p className="text-sm text-[#3b82f6] font-medium font-sans">
                {item.major}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans pt-1">
                {item.description}
              </p>
            </div>

            {/* Column 3: Focus Areas */}
            <div className="lg:col-span-4 space-y-2.5">
              <div className="text-xs text-slate-500 uppercase tracking-wider font-mono">
                Curriculum Focus
              </div>
              <div className="space-y-1.5 text-xs text-slate-300 font-sans">
                {item.highlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check size={14} className="text-[#3b82f6] shrink-0 mt-0.5" />
                    <span>{hl}</span>
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
