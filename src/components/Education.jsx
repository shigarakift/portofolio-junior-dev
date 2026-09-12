"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";

export default function Education() {
  // Store expanded education cards.
  const [expandedEdu, setExpandedEdu] = useState([1]);

  const toggleEdu = (id) => {
    setExpandedEdu((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="education" className="scroll-mt-24 py-10 sm:py-14 border-t border-neutral-200/80 dark:border-white/[0.08]">
      {/* Section Header */}
      <div className="mb-8 sm:mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-mono text-[#d95700] dark:text-[#ff6b00] uppercase tracking-wider font-semibold">
            ACADEMIC TRACK
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-white tracking-tight mt-1">
            Formal Education &amp; Training
          </h2>
        </div>
        <p className="text-xs text-neutral-600 dark:text-neutral-400 font-sans max-w-sm">
          Hands-on vocational curriculum focusing on computer systems, networking, and application engineering.
        </p>
      </div>

      {/* Open Editorial Academic Timeline Row (No Bulky Box) */}
      <div className="border-y border-neutral-200/80 dark:border-white/[0.08] divide-y divide-neutral-200/80 dark:divide-white/[0.08]">
        {education.map((item) => {
          const isExpanded = expandedEdu.includes(item.id);

          return (
            <div
              key={item.id}
              className="py-6 sm:py-8 transition-colors"
            >
              {/* Header Row / Trigger */}
              <div
                onClick={() => toggleEdu(item.id)}
                className="cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleEdu(item.id);
                  }
                }}
                aria-expanded={isExpanded}
              >
                <div className="flex items-start sm:items-center gap-3.5">
                  <div className="p-2 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5 sm:mt-0">
                    <GraduationCap size={22} />
                  </div>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-lg sm:text-xl font-bold text-neutral-950 dark:text-white tracking-tight">
                        {item.school}
                      </h3>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-500/20 text-[11px] font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
                        <span>{item.status}</span>
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#d95700] dark:text-[#ff6b00] font-semibold font-sans">
                      {item.major}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 pt-1 sm:pt-0">
                  <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400 font-medium">
                    {item.duration}
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleEdu(item.id);
                    }}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 cursor-pointer ${
                      isExpanded
                        ? "bg-[#ff6b00]/10 text-[#d95700] dark:text-[#ff6b00] font-semibold"
                        : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white"
                    }`}
                  >
                    <span>{isExpanded ? "Hide Details" : "Curriculum"}</span>
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

              {/* In-Line Expandable Drawer */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    key={`edu-content-${item.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 mt-4 border-t border-neutral-200/70 dark:border-white/[0.06] grid grid-cols-1 lg:grid-cols-12 gap-8 text-neutral-700 dark:text-neutral-300 font-sans">
                      <div className="lg:col-span-7 space-y-2">
                        <div className="text-[11px] uppercase tracking-wider font-mono text-neutral-500 dark:text-neutral-400 font-semibold">
                          Program Overview
                        </div>
                        <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans">
                          {item.description}
                        </p>
                      </div>

                      <div className="lg:col-span-5 space-y-2.5">
                        <div className="text-[11px] uppercase tracking-wider font-mono text-neutral-500 dark:text-neutral-400 font-semibold">
                          Curriculum &amp; Lab Focus
                        </div>
                        <div className="space-y-2 text-xs text-neutral-700 dark:text-neutral-300">
                          {item.highlights.map((hl, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <Check size={14} className="text-[#ff6b00] shrink-0 mt-0.5" />
                              <span className="leading-snug">{hl}</span>
                            </div>
                          ))}
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
