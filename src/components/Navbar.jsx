"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';
import { personalData } from '@/data/portfolio';
import WibClock from '@/components/WibClock';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Stack', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className="fixed top-0 sm:top-4 inset-x-0 mx-auto max-w-5xl z-50 px-3 sm:px-6 transition-all duration-300">
        <div
          className={`w-full transition-all duration-300 flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl ${
            scrolled || mobileMenuOpen
              ? 'bg-[#080c14]/85 backdrop-blur-xl border border-white/[0.1] shadow-2xl shadow-black/70'
              : 'bg-[#0d131f]/60 backdrop-blur-md border border-white/[0.06] shadow-lg'
          }`}
        >
          {/* Brand & Live Indicator */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/30 flex items-center justify-center text-[#0066FF] group-hover:bg-[#0066FF] group-hover:text-white transition-all duration-300 shadow-sm shadow-[#0066FF]/20">
              <Terminal size={16} />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-xs sm:text-sm text-white tracking-tight flex items-center gap-1.5">
                {personalData.username}
                <span className="text-[10px] font-mono text-[#0066FF] px-1.5 py-0.2 bg-[#0066FF]/10 rounded border border-[#0066FF]/20">dev</span>
              </span>
              <span className="text-[9px] sm:text-[10px] text-slate-400 flex items-center gap-1.5 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Active node</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 font-medium text-xs bg-[#080c14]/80 px-2 py-1 rounded-xl border border-white/[0.06]">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="px-3.5 py-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action & Clock */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Live WIB Clock Pill */}
            <div className="flex items-center px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-[#080c14]/90 border border-white/[0.08] text-[11px] sm:text-xs font-mono text-slate-300">
              <WibClock />
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white transition-all shadow-md shadow-[#0066FF]/25 font-sans"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={14} />
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-[#080c14] border border-white/[0.08] text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={18} className="text-[#0066FF]" /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-3 top-[68px] z-40 md:hidden bg-[#080c14]/95 border border-white/[0.1] rounded-2xl backdrop-blur-2xl p-5 shadow-2xl space-y-4"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.05] transition-all flex items-center justify-between text-sm font-medium"
                >
                  <span>{link.name}</span>
                  <span className="text-[10px] font-mono text-slate-500">0{idx + 1}</span>
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-white/[0.08]">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0066FF] text-white font-medium text-sm transition-all shadow-lg shadow-[#0066FF]/25"
              >
                <span>Get in Touch</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
