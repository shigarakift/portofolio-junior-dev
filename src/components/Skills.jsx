"use client";

import React from "react";
import { Check } from "lucide-react";
import { skills } from "@/data/portfolio";

export default function Skills() {
  const linuxSkill = skills[0];
  const backendSkill = skills[1];
  const dockerSkill = skills[2];

  return (
    <section id="skills" className="scroll-mt-24 py-10 sm:py-14 border-t border-white/[0.08]">
      {/* Section Header */}
      <div className="mb-10 sm:mb-12">
        <span className="text-xs font-mono text-[#3b82f6] uppercase tracking-wider">
          02 / Capabilities
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
          Technical Stack &amp; Competencies
        </h2>
      </div>

      {/* Modern 3-Column Ledger Grid (Hairline Dividers, No Bulky Boxes) */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.08] border-y border-white/[0.08]">
        {/* Column 1: Systems & Infrastructure */}
        <div className="py-6 md:py-8 md:pr-8 space-y-6">
          <div>
            <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">
              01 — {linuxSkill.category}
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              {linuxSkill.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed mt-2">
              {linuxSkill.description}
            </p>
          </div>

          <div className="space-y-2 text-xs text-slate-300">
            <div className="flex items-start gap-2">
              <Check size={14} className="text-[#3b82f6] shrink-0 mt-0.5" />
              <span>Systemd daemon orchestration &amp; service control</span>
            </div>
            <div className="flex items-start gap-2">
              <Check size={14} className="text-[#3b82f6] shrink-0 mt-0.5" />
              <span>SSH hardening, key policies &amp; UFW firewall</span>
            </div>
            <div className="flex items-start gap-2">
              <Check size={14} className="text-[#3b82f6] shrink-0 mt-0.5" />
              <span>Nginx reverse proxy, TLS 1.3 &amp; caching</span>
            </div>
            <div className="flex items-start gap-2">
              <Check size={14} className="text-[#3b82f6] shrink-0 mt-0.5" />
              <span>Bash automation &amp; cron maintenance scripts</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-2">
            {linuxSkill.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-0.5 text-xs text-slate-300 bg-white/[0.04] border border-white/[0.06] rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Column 2: Backend Development */}
        <div className="py-6 md:py-8 md:px-8 space-y-6">
          <div>
            <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">
              02 — {backendSkill.category}
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              {backendSkill.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed mt-2">
              {backendSkill.description}
            </p>
          </div>

          <div className="space-y-2 text-xs text-slate-300">
            <div className="flex items-start gap-2">
              <Check size={14} className="text-[#3b82f6] shrink-0 mt-0.5" />
              <span>RESTful API design with structured validation</span>
            </div>
            <div className="flex items-start gap-2">
              <Check size={14} className="text-[#3b82f6] shrink-0 mt-0.5" />
              <span>PostgreSQL &amp; MySQL connection pooling</span>
            </div>
            <div className="flex items-start gap-2">
              <Check size={14} className="text-[#3b82f6] shrink-0 mt-0.5" />
              <span>JWT authentication &amp; role-based access control</span>
            </div>
            <div className="flex items-start gap-2">
              <Check size={14} className="text-[#3b82f6] shrink-0 mt-0.5" />
              <span>Database schema migrations &amp; query optimization</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-2">
            {backendSkill.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-0.5 text-xs text-slate-300 bg-white/[0.04] border border-white/[0.06] rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Column 3: Containers & DevOps */}
        <div className="py-6 md:py-8 md:pl-8 space-y-6">
          <div>
            <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">
              03 — {dockerSkill.category}
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              {dockerSkill.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed mt-2">
              {dockerSkill.description}
            </p>
          </div>

          <div className="space-y-2 text-xs text-slate-300">
            <div className="flex items-start gap-2">
              <Check size={14} className="text-[#3b82f6] shrink-0 mt-0.5" />
              <span>Reproducible local &amp; production environments</span>
            </div>
            <div className="flex items-start gap-2">
              <Check size={14} className="text-[#3b82f6] shrink-0 mt-0.5" />
              <span>Docker Compose multi-service orchestrations</span>
            </div>
            <div className="flex items-start gap-2">
              <Check size={14} className="text-[#3b82f6] shrink-0 mt-0.5" />
              <span>Multi-stage builds for minimal image footprints</span>
            </div>
            <div className="flex items-start gap-2">
              <Check size={14} className="text-[#3b82f6] shrink-0 mt-0.5" />
              <span>Isolated bridge networking &amp; volume persistence</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-2">
            {dockerSkill.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-0.5 text-xs text-slate-300 bg-white/[0.04] border border-white/[0.06] rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
