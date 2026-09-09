"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Copy, FileCode2 } from 'lucide-react';

export default function TerminalWindow({ title, children, delay = 0, copyText = null, actionLabel = null, className = "" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!copyText) return;
    navigator.clipboard.writeText(copyText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`rounded-2xl border border-white/[0.08] bg-[#0d131f] overflow-hidden shadow-2xl shadow-black/50 ${className}`}
    >
      {/* Code Header Bar - Minimalist Technical Spec Style */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.07] bg-[#111827] text-xs select-none">
        <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px] truncate">
          <FileCode2 size={14} className="text-[#0066FF] shrink-0" />
          <span className="text-white font-medium truncate">{title || 'system-dossier.conf'}</span>
          <span className="text-[10px] text-slate-500 font-mono border border-white/[0.06] px-1.5 py-0.2 rounded hidden sm:inline">ro</span>
        </div>

        <div>
          {copyText && (
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400 hover:text-white transition-colors bg-white/[0.04] hover:bg-white/[0.08] px-2.5 py-1 rounded-lg border border-white/[0.07]"
              title="Copy snippet"
            >
              {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
              <span>{copied ? 'Copied' : (actionLabel || 'Copy')}</span>
            </button>
          )}
        </div>
      </div>
      
      {/* Code Content Container */}
      <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm leading-relaxed text-slate-200 overflow-x-auto">
        {children}
      </div>
    </motion.div>
  );
}
