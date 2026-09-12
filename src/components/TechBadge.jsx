"use client";

import React from "react";
import {
  SiUbuntu,
  SiDebian,
  SiGnubash,
  SiNginx,
  SiNodedotjs,
  SiGo,
  SiLaravel,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiTailwindcss
} from "react-icons/si";
import { Terminal, Database, ShieldCheck, Cpu, KeyRound, Layers } from "lucide-react";

export default function TechBadge({ name }) {
  const getIcon = () => {
    switch (name) {
      case "Ubuntu Server":
        return <SiUbuntu className="text-[#E95420] shrink-0" size={13} />;
      case "Debian":
        return <SiDebian className="text-[#A81D33] shrink-0" size={13} />;
      case "Bash":
        return <SiGnubash className="text-[#4EAA25] shrink-0" size={13} />;
      case "Systemd":
        return <Terminal className="text-neutral-700 dark:text-neutral-300 shrink-0" size={13} />;
      case "Nginx":
        return <SiNginx className="text-[#009639] shrink-0" size={13} />;
      case "Node.js":
        return <SiNodedotjs className="text-[#5FA04E] shrink-0" size={13} />;
      case "Go":
        return <SiGo className="text-[#00ADD8] shrink-0" size={13} />;
      case "Go / Node.js":
        return (
          <div className="flex items-center gap-0.5 shrink-0">
            <SiGo className="text-[#00ADD8]" size={12} />
            <SiNodedotjs className="text-[#5FA04E]" size={12} />
          </div>
        );
      case "Laravel":
        return <SiLaravel className="text-[#FF2D20] shrink-0" size={13} />;
      case "PostgreSQL":
        return <SiPostgresql className="text-[#4169E1] shrink-0" size={13} />;
      case "MySQL":
        return <SiMysql className="text-[#4479A1] shrink-0" size={13} />;
      case "REST API":
        return <Database className="text-neutral-700 dark:text-neutral-300 shrink-0" size={13} />;
      case "Docker":
      case "Docker Compose":
        return <SiDocker className="text-[#2496ED] shrink-0" size={13} />;
      case "Container Security":
        return <ShieldCheck className="text-emerald-600 dark:text-emerald-400 shrink-0" size={13} />;
      case "CI/CD":
        return <Cpu className="text-indigo-600 dark:text-indigo-400 shrink-0" size={13} />;
      case "JWT":
        return <KeyRound className="text-amber-600 dark:text-amber-400 shrink-0" size={13} />;
      case "Tailwind CSS":
        return <SiTailwindcss className="text-[#06B6D4] shrink-0" size={13} />;
      default:
        return <Layers className="text-neutral-600 dark:text-neutral-400 shrink-0" size={13} />;
    }
  };

  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white dark:bg-white/[0.04] border border-neutral-200/90 dark:border-white/[0.08] text-neutral-800 dark:text-neutral-200 text-[11px] font-mono shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:border-neutral-300 dark:hover:border-white/[0.16] transition-colors">
      {getIcon()}
      <span>{name}</span>
    </span>
  );
}
