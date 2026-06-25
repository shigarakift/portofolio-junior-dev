import React from 'react';
import { motion } from 'framer-motion';

export default function TerminalWindow({ title, children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="rounded-lg border border-[var(--terminal-border)] bg-[#0d1117] overflow-hidden shadow-xl"
    >
      {/* Terminal Header */}
      <div className="flex items-center px-4 py-2 border-b border-[var(--terminal-border)] bg-[#161b22]">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="flex-1 text-center text-xs text-[var(--terminal-gray)] font-mono">
          shigarakift@{title || 'bash'} ~
        </div>
      </div>
      
      {/* Terminal Content */}
      <div className="p-4 sm:p-6 text-[var(--foreground)] font-mono text-sm leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
}
