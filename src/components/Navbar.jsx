"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
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
      <header className="fixed top-0 inset-x-0 z-50 transition-all duration-200 border-b border-white/[0.06] bg-[#0a0c10]/80 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Brand Identity */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-semibold text-sm text-white tracking-tight group-hover:text-[#3b82f6] transition-colors">
              {personalData.name}
            </span>
            <span className="text-xs text-slate-500 hidden sm:inline">
              / {personalData.username}
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-6 text-xs text-slate-400 font-medium">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="hover:text-white transition-colors duration-150 py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action & Clock */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden sm:flex items-center text-xs text-slate-400 font-mono">
              <WibClock />
            </div>

            <a
              href="#contact"
              className="text-xs font-medium px-3.5 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-white border border-white/[0.08] transition-colors duration-150 flex items-center gap-1.5"
            >
              <span>Contact</span>
              <ArrowUpRight size={13} className="text-slate-400" />
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-slate-400 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden bg-[#0a0c10] border-b border-white/[0.08] p-5 shadow-2xl space-y-4"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-slate-300 hover:text-white transition-colors text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
              <WibClock />
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs text-[#3b82f6] font-medium"
              >
                Get in touch →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
