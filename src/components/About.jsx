"use client";

import React from "react";
import { Code2 } from "lucide-react";
import TerminalWindow from "@/components/TerminalWindow";
import { personalData } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 sm:scroll-mt-28">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2.5 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/20 text-[#0066FF]">
          <Code2 size={20} />
        </div>
        <div>
          <span className="text-[11px] font-mono text-[#0066FF] uppercase tracking-wider font-semibold">
            01. Profile &amp; Focus
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">About Me</h2>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-6 items-start">
        {/* Left Narrative Block */}
        <div className="lg:col-span-7 space-y-4 text-slate-400 font-sans leading-relaxed text-sm sm:text-base min-w-0">
          <div className="p-6 sm:p-7 rounded-2xl glass-tile space-y-4">
            <p>{personalData.about}</p>
            <p>
              As a student in the{" "}
              <strong className="text-white font-medium">
                SIJA (Sistem Informatika, Jaringan, dan Aplikasi)
              </strong>{" "}
              department at SMKN 1 Cibinong, I combine academic training in networking with self-driven expertise in Linux system administration and modern backend architectures.
            </p>
          </div>

          {/* Quick Specs Tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 font-mono text-xs">
            <div className="p-4 rounded-xl glass-tile min-w-0">
              <div className="text-slate-500 text-[10px] uppercase mb-1">Primary Discipline</div>
              <div className="text-white font-semibold truncate">{personalData.sysStats.mainFocus}</div>
            </div>
            <div className="p-4 rounded-xl glass-tile min-w-0">
              <div className="text-slate-500 text-[10px] uppercase mb-1">Location</div>
              <div className="text-white font-semibold truncate">{personalData.location}</div>
            </div>
          </div>
        </div>

        {/* Right Interactive Config Inspector */}
        <div className="lg:col-span-5 min-w-0 w-full">
          <TerminalWindow
            title="cat info.json"
            copyText={JSON.stringify(personalData, null, 2)}
            actionLabel="Copy JSON"
          >
            <div className="text-xs font-mono leading-relaxed space-y-1.5 text-slate-300 overflow-x-auto">
              <div>
                <span className="text-[#0066FF]">&quot;name&quot;</span>:{" "}
                <span className="text-emerald-400">&quot;{personalData.name}&quot;</span>,
              </div>
              <div>
                <span className="text-[#0066FF]">&quot;username&quot;</span>:{" "}
                <span className="text-emerald-400">&quot;{personalData.username}&quot;</span>,
              </div>
              <div>
                <span className="text-[#0066FF]">&quot;role&quot;</span>:{" "}
                <span className="text-emerald-400">&quot;{personalData.role}&quot;</span>,
              </div>
              <div>
                <span className="text-[#0066FF]">&quot;school&quot;</span>:{" "}
                <span className="text-emerald-400">&quot;SMKN 1 Cibinong (SIJA)&quot;</span>,
              </div>
              <div>
                <span className="text-[#0066FF]">&quot;status&quot;</span>:{" "}
                <span className="text-emerald-400">&quot;Open for Internship&quot;</span>,
              </div>
              <div>
                <span className="text-[#0066FF]">&quot;focus&quot;</span>: [
                <span className="text-sky-300">&quot;Linux&quot;</span>,{" "}
                <span className="text-sky-300">&quot;Backend&quot;</span>,{" "}
                <span className="text-sky-300">&quot;Docker&quot;</span>]
              </div>
            </div>
          </TerminalWindow>
        </div>
      </div>
    </section>
  );
}
