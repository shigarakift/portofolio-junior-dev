"use client";

import React, { useState } from "react";
import { personalData } from "@/data/portfolio";
import { Check, Server, Box, Database, ArrowRight } from "lucide-react";

export default function About() {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      id: "infra",
      name: "Linux Infrastructure",
      icon: Server,
      tag: "Server Core",
      summary: "Prioritizing high uptime, hardened access, and reliable process supervision.",
      points: [
        "Systemd daemon orchestration & service control",
        "SSH hardening with key-only authentication",
        "Nginx reverse proxy with TLS 1.3 termination",
        "Automated maintenance scripts with Bash & cron"
      ],
      environment: "Ubuntu Server / Debian GNU/Linux"
    },
    {
      id: "containers",
      name: "Containerization",
      icon: Box,
      tag: "DevOps & Parity",
      summary: "Ensuring reproducible environments from development to production deployments.",
      points: [
        "Multi-stage Dockerfile builds for minimal footprint",
        "Docker Compose service networks & bridge isolation",
        "Non-root container user security practices",
        "Persistent volume management for databases"
      ],
      environment: "Docker Engine & Docker Compose"
    },
    {
      id: "backend",
      name: "Backend Architecture",
      icon: Database,
      tag: "API Engineering",
      summary: "Designing scalable, structured RESTful services with connection pooling & auth.",
      points: [
        "Clean REST API design with structured request validation",
        "PostgreSQL connection pooling and query optimization",
        "JWT token authentication with role-based access control",
        "Consistent error responses and request logging"
      ],
      environment: "Go, Node.js & PostgreSQL"
    }
  ];

  const current = pillars[activePillar];
  const CurrentIcon = current.icon;

  return (
    <section id="about" className="scroll-mt-24 py-10 sm:py-14 border-t border-white/[0.08]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
        {/* Left Column: Metadata & Overview */}
        <div className="lg:col-span-4 space-y-3">
          <span className="text-xs font-mono text-[#3b82f6] uppercase tracking-wider">
            01 / Background
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Engineering Approach
          </h2>
          <p className="text-xs text-slate-400 font-sans leading-relaxed pt-1">
            Combining vocational networking fundamentals with practical Linux server management and modern software architectures.
          </p>

          <div className="pt-4 space-y-2 text-xs text-slate-400 border-t border-white/[0.06]">
            <div className="flex justify-between py-1">
              <span className="text-slate-500">Education Track</span>
              <span className="text-slate-200 font-medium">SMKN 1 Cibinong (SIJA)</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-500">Program Length</span>
              <span className="text-slate-200 font-medium">4-Year Vocational</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-slate-500">Target Role</span>
              <span className="text-emerald-400 font-medium">Internship / Part-Time</span>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative & Interactive Focus Switcher */}
        <div className="lg:col-span-8 space-y-6 text-slate-300 font-sans leading-relaxed text-sm sm:text-base">
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
            {personalData.about}
          </p>

          <p className="text-slate-400 text-sm leading-relaxed">
            As a student in the{" "}
            <strong className="text-white font-medium">
              SIJA (Sistem Informatika, Jaringan, dan Aplikasi)
            </strong>{" "}
            program at SMKN 1 Cibinong, my daily focus is on understanding what happens beneath the application layer: how packets route, how services daemonize, and how containerized backends stay resilient under load.
          </p>

          {/* Interactive Focus Switcher */}
          <div className="pt-4 space-y-4">
            <div className="text-xs text-slate-400 font-medium">
              Explore Core Competency Focus:
            </div>

            {/* Interactive Tabs Row */}
            <div className="flex flex-wrap gap-2">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                const isActive = activePillar === idx;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActivePillar(idx)}
                    className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-colors duration-150 flex items-center gap-2 cursor-pointer ${
                      isActive
                        ? "bg-white text-[#0a0c10] shadow-sm font-semibold"
                        : "bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
                    }`}
                  >
                    <Icon size={14} className={isActive ? "text-[#0a0c10]" : "text-[#3b82f6]"} />
                    <span>{pillar.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Interactive Details Panel (Lightweight, Instant, Tactile) */}
            <div className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-3 transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <CurrentIcon size={16} className="text-[#3b82f6]" />
                  <span className="text-white font-semibold text-sm">
                    {current.name}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]">
                  {current.environment}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {current.summary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs text-slate-300">
                {current.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check size={14} className="text-[#3b82f6] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
