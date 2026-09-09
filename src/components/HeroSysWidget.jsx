"use client";

import React from "react";
import { Server, Database, ShieldCheck, Box, GraduationCap, CheckCircle } from "lucide-react";
import { personalData } from "@/data/portfolio";

export default function HeroSysWidget() {
  return (
    <div className="w-full rounded-2xl border border-white/[0.08] bg-[#0f1523] p-5 sm:p-6 space-y-4 shadow-xl shadow-black/60">
      {/* Top Meta Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          <span className="text-white text-xs font-semibold tracking-tight">
            Technical Architecture
          </span>
        </div>
        <span className="text-[11px] font-sans px-2.5 py-0.5 rounded-full bg-[#151d30] border border-white/[0.06] text-slate-300">
          Production Standard
        </span>
      </div>

      {/* Core Discipline Cards */}
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3.5 rounded-xl bg-[#151d30] border border-white/[0.06] space-y-1.5">
          <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium">
            <Server size={14} className="text-[#3b82f6] shrink-0" />
            <span>Infrastructure</span>
          </div>
          <div className="text-white font-semibold text-xs sm:text-sm tracking-tight">
            Linux &amp; Containers
          </div>
          <p className="text-[11px] text-slate-400 leading-tight font-sans">
            Debian/Ubuntu, systemd, Docker Compose
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-[#151d30] border border-white/[0.06] space-y-1.5">
          <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium">
            <Database size={14} className="text-[#3b82f6] shrink-0" />
            <span>Backend APIs</span>
          </div>
          <div className="text-white font-semibold text-xs sm:text-sm tracking-tight">
            RESTful Services
          </div>
          <p className="text-[11px] text-slate-400 leading-tight font-sans">
            Go, Node.js, PostgreSQL pooling
          </p>
        </div>
      </div>

      {/* Architecture Highlights */}
      <div className="space-y-2 pt-1">
        <div className="p-3 rounded-xl bg-[#151d30] border border-white/[0.05] flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-200">
            <ShieldCheck size={15} className="text-[#3b82f6] shrink-0" />
            <span className="font-medium">Security &amp; Ingress</span>
          </div>
          <span className="text-slate-400 text-[11px]">Nginx TLS 1.3 · SSH Hardening</span>
        </div>

        <div className="p-3 rounded-xl bg-[#151d30] border border-white/[0.05] flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-200">
            <Box size={15} className="text-[#3b82f6] shrink-0" />
            <span className="font-medium">Virtualization</span>
          </div>
          <span className="text-slate-400 text-[11px]">Docker Engine · Bridge Isolation</span>
        </div>

        <div className="p-3 rounded-xl bg-[#151d30] border border-white/[0.05] flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-200">
            <GraduationCap size={15} className="text-[#3b82f6] shrink-0" />
            <span className="font-medium">Academic Track</span>
          </div>
          <span className="text-emerald-400 text-[11px] font-medium">SIJA SMKN 1 Cibinong</span>
        </div>
      </div>
    </div>
  );
}
