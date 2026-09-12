"use client";

import React from "react";
import { personalData } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200/80 dark:border-white/[0.06] py-7 sm:py-9 bg-[#f5f4f2] dark:bg-[#0e1117] font-sans text-xs text-neutral-500 dark:text-neutral-500 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
        <p>
          © {new Date().getFullYear()} {personalData.name} ({personalData.username}). All rights reserved.
        </p>
        <p className="flex items-center gap-2 text-neutral-500 dark:text-neutral-500 text-xs">
          <span>Next.js &amp; Tailwind CSS</span>
          <span className="text-neutral-300 dark:text-neutral-700">·</span>
          <span>Asia/Jakarta (WIB)</span>
        </p>
      </div>
    </footer>
  );
}
