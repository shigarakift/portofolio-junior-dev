"use client";

import React from "react";
import { personalData } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-6 sm:py-8 bg-[#080c14] text-center font-mono text-xs text-slate-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
        <p>
          © {new Date().getFullYear()} {personalData.name} ({personalData.username}). All rights reserved.
        </p>
        <p className="flex items-center gap-1.5">
          <span className="text-[#0066FF]">root@{personalData.username}</span>:~$ status ok
        </p>
      </div>
    </footer>
  );
}
