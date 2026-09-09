"use client";

import React from "react";
import { personalData } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-7 sm:py-9 bg-[#090d16] font-sans text-xs text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
        <p>
          © {new Date().getFullYear()} {personalData.name} ({personalData.username}). All rights reserved.
        </p>
        <p className="flex items-center gap-2 text-slate-400 text-xs">
          <span>Next.js &amp; Tailwind CSS</span>
          <span className="text-slate-600">·</span>
          <span>Asia/Jakarta (WIB)</span>
        </p>
      </div>
    </footer>
  );
}
