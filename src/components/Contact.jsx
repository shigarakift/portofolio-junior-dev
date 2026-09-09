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
    <section id="contact" className="scroll-mt-24 py-16 sm:py-24 border-t border-white/[0.08]">
      <div className="space-y-8 max-w-3xl">
        <div className="space-y-3">
          <span className="text-xs font-mono text-[#3b82f6] uppercase tracking-wider">
            05 / Contact
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Let&apos;s build reliable, production-ready systems.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            Whether you are looking for an intern with practical Linux server infrastructure skills or need a dedicated backend developer for your project, feel free to reach out directly.
          </p>
        </div>

        {/* Direct Email & Action Bar */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href={`mailto:${personalData.email}`}
            className="px-6 py-3 rounded-lg bg-white text-[#0a0c10] hover:bg-slate-200 font-semibold text-xs sm:text-sm transition-colors flex items-center gap-2"
          >
            <Mail size={16} />
            <span>Send Email</span>
          </a>

          <button
            onClick={handleCopyEmail}
            className="px-4 py-3 rounded-lg border border-white/[0.1] hover:border-white/[0.2] bg-white/[0.03] text-slate-300 hover:text-white font-mono text-xs transition-colors flex items-center gap-2"
            title="Copy Email Address"
          >
            {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            <span>{copiedEmail ? "Copied to Clipboard" : personalData.email}</span>
          </button>
        </div>

        {/* Social Profiles */}
        <div className="flex items-center gap-6 pt-6 border-t border-white/[0.06] text-xs font-medium text-slate-400">
          <a
            href={personalData.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <FaGithub size={15} />
            <span>GitHub Profile</span>
            <ArrowUpRight size={13} className="text-slate-500" />
          </a>

          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <FaLinkedin size={15} />
            <span>LinkedIn Profile</span>
            <ArrowUpRight size={13} className="text-slate-500" />
          </a>
        </div>
      </div>
    </section>
  );
}
