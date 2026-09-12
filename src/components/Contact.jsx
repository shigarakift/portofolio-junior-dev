"use client";

import React, { useState } from "react";
import { Mail, Check, Copy, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalData } from "@/data/portfolio";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="scroll-mt-24 py-14 sm:py-20 border-t border-neutral-200/80 dark:border-white/[0.08]">
      <div className="space-y-7 max-w-3xl">
        <div className="space-y-3">
          <span className="text-xs font-mono text-[#d95700] dark:text-[#ff6b00] uppercase tracking-wider font-semibold">
            DIRECT CONTACT
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-neutral-950 dark:text-white tracking-tight leading-tight">
            Let&apos;s build reliable, production-ready systems.
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed">
            Whether you are looking for an intern with practical Linux server infrastructure skills or need a dedicated backend developer for your project, feel free to reach out directly.
          </p>
        </div>

        {/* Direct Email & Action Bar */}
        <div className="flex flex-wrap items-center gap-4 pt-1">
          <a
            href={`mailto:${personalData.email}`}
            className="px-6 py-3.5 rounded-xl bg-[#0a0a0a] dark:bg-white text-white dark:text-[#0a0c10] hover:bg-[#222] dark:hover:bg-slate-200 font-semibold text-xs sm:text-sm transition-all duration-150 flex items-center gap-2 shadow-md shadow-black/10 hover:shadow-lg active:scale-[0.99]"
          >
            <Mail size={16} />
            <span>Send Email</span>
          </a>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="px-4 py-3.5 rounded-xl border border-neutral-300 dark:border-white/[0.1] bg-white dark:bg-white/[0.04] text-neutral-800 dark:text-slate-300 hover:bg-neutral-50 dark:hover:bg-white/[0.08] hover:border-neutral-400 font-mono text-xs transition-all duration-150 flex items-center gap-2 cursor-pointer shadow-sm"
            title="Copy Email Address"
          >
            {copiedEmail ? <Check size={14} className="text-emerald-600 dark:text-emerald-400" /> : <Copy size={14} className="text-neutral-500 dark:text-neutral-400" />}
            <span className={copiedEmail ? "text-emerald-700 dark:text-emerald-400 font-medium" : ""}>
              {copiedEmail ? "Copied to Clipboard" : personalData.email}
            </span>
          </button>
        </div>

        {/* Social Profiles */}
        <div className="flex items-center gap-6 pt-5 border-t border-neutral-200/70 dark:border-white/[0.06] text-xs font-medium text-neutral-600 dark:text-neutral-400">
          <a
            href={personalData.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-neutral-950 dark:hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <FaGithub size={15} />
            <span>GitHub Profile</span>
            <ArrowUpRight size={13} className="text-neutral-400" />
          </a>

          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1.5 transition-colors"
          >
            <FaLinkedin size={15} className="text-[#0077b5]" />
            <span>LinkedIn Profile</span>
            <ArrowUpRight size={13} className="text-neutral-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
