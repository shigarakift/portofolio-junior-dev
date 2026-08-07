"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ArrowUpRight, Menu, X } from 'lucide-react';
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
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? 'bg-[#090d14]/90 backdrop-blur-xl border-b border-[#1e293b] py-3 shadow-2xl shadow-black/60'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Brand & Status */}
          <a href="#" className="flex items-center space-x-2.5 sm:space-x-3 group">
            <div className="w-8 h-8 rounded-lg bg-[rgba(245,158,11,0.1)] border border-[rgba(245,158,11,0.25)] flex items-center justify-center text-[#f59e0b] group-hover:border-[#f59e0b] group-hover:bg-[rgba(245,158,11,0.2)] transition-all">
              <Terminal size={17} />
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-bold tracking-tight text-white text-xs sm:text-sm flex items-center gap-1">
                shigarakift <span className="text-[#f59e0b] text-xs">/</span> sys
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono text-[#64748b] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                {personalData.role}
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1 font-mono text-xs bg-[#111726]/80 p-1.5 rounded-xl border border-[#1e293b] backdrop-blur-md">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-[#94a3b8] hover:text-white hover:bg-[#1e293b] transition-all flex items-center gap-1"
              >
                <span className="text-[#f59e0b] opacity-60 text-[10px]">&gt;</span>
                {link.name}
              </a>
            ))}
          </nav>

          {/* WIB Clock & Action Badge */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Sticky Live WIB Clock Badge at the Very Top */}
            <div className="flex items-center px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-[#111726]/90 border border-[#1e293b] backdrop-blur-md text-[11px] sm:text-xs shadow-inner">
              <WibClock />
            </div>

            <a
              href="#contact"
              className="hidden sm:flex items-center gap-2 text-xs font-mono px-3.5 py-1.5 rounded-lg border border-[rgba(245,158,11,0.3)] bg-[rgba(245,158,11,0.08)] text-[#fbbf24] hover:bg-[#f59e0b] hover:text-[#090d14] font-semibold transition-all shadow-sm"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={14} />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-[#111726] border border-[#1e293b] text-[#94a3b8] hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} className="text-[#f59e0b]" /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 md:hidden bg-[#090d14]/95 border-b border-[#1e293b] backdrop-blur-xl px-6 py-6 shadow-2xl space-y-4 font-mono text-sm"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-lg text-[#94a3b8] hover:text-white hover:bg-[#111726] transition-all flex items-center justify-between border border-transparent hover:border-[#1e293b]"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-[#f59e0b]">&gt;</span>
                    {link.name}
                  </span>
                  <span className="text-[10px] text-[#64748b]">0{idx + 1}</span>
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-[#1e293b]">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#f59e0b] text-[#090d14] font-bold transition-all shadow-lg shadow-[rgba(245,158,11,0.2)]"
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
