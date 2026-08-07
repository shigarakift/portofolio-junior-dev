"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Copy, Terminal as TerminalIcon } from 'lucide-react';

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
      className={`rounded-xl border border-[#1e293b] bg-[#0f172a]/90 overflow-hidden shadow-2xl shadow-black/40 backdrop-blur-sm ${className}`}
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#1e293b] bg-[#111726]/80 font-mono text-xs select-none">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/70"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#eab308]/70"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]/70"></div>
        </div>

        <div className="flex items-center gap-1.5 text-[#94a3b8] font-mono text-[11px] truncate max-w-[220px] sm:max-w-xs">
          <TerminalIcon size={12} className="text-[#f59e0b] shrink-0" />
          <span className="truncate">{title || 'system.sh'}</span>
        </div>

        <div>
          {copyText && (
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 text-[10px] text-[#64748b] hover:text-[#f59e0b] transition-colors bg-[#1e293b]/60 px-2 py-0.5 rounded border border-[#334155]/40"
              title="Copy code"
            >
              {copied ? <Check size={11} className="text-emerald-400" /> : <Copy size={11} />}
              <span>{copied ? 'Copied' : (actionLabel || 'Copy')}</span>
            </button>
          )}
        </div>
      </div>
      
      {/* Terminal Content */}
      <div className="p-4 sm:p-6 font-mono text-sm leading-relaxed text-[#f8fafc]">
        {children}
      </div>
    </motion.div>
  );
}
