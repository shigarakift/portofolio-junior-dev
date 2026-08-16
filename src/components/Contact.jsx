"use client";

import React, { useState } from "react";
import { Mail, Check, Copy } from "lucide-react";
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
    <section id="contact" className="scroll-mt-24 sm:scroll-mt-28">
      <div className="p-7 sm:p-14 rounded-3xl bg-gradient-to-b from-[#0d1320] to-[#080c14] border border-white/[0.08] text-center relative overflow-hidden min-w-0">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono max-w-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
            <span className="truncate">Open for Internship &amp; Part-Time Work</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight break-words">
            Let&apos;s Build Reliable Systems
          </h2>

          <p className="text-slate-400 font-sans text-xs sm:text-base leading-relaxed">
            Whether you&apos;re looking for an intern with strong Linux infrastructure skills or need a dedicated backend developer for your project, feel free to reach out directly.
          </p>

          {/* Direct Mail Box */}
          <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 font-mono text-xs sm:text-sm">
            <div className="flex items-center justify-between gap-2.5 px-4 py-3 rounded-xl bg-[#080c14] border border-white/[0.08] text-white min-w-0">
              <div className="flex items-center gap-2.5 min-w-0">
                <Mail size={16} className="text-[#0066FF] shrink-0" />
                <span className="truncate">{personalData.email}</span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors shrink-0"
                title="Copy Email"
              >
                {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              </button>
            </div>

            <a
              href={`mailto:${personalData.email}`}
              className="px-6 py-3.5 rounded-xl bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-all shadow-lg shadow-[#0066FF]/25 flex items-center justify-center shrink-0 font-sans"
            >
              Send Direct Email
            </a>
          </div>

          {/* Social Links */}
          <div className="pt-4 flex justify-center items-center space-x-4 text-slate-400">
            <a
              href={personalData.github}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-[#080c14] border border-white/[0.08] hover:text-white hover:border-[#0066FF] transition-all"
              title="GitHub Profile"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-[#080c14] border border-white/[0.08] hover:text-[#0066FF] hover:border-[#0066FF] transition-all"
              title="LinkedIn Profile"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
