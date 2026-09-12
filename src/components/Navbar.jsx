"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { personalData } from '@/data/portfolio';
import WibClock from '@/components/WibClock';
import ThemeToggle from '@/components/ThemeToggle';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Approach', href: '#about' },
    { name: 'Capabilities', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Academic', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 transition-all duration-200 border-b border-neutral-200/80 dark:border-white/[0.08] bg-[#f5f4f2]/85 dark:bg-[#0e1117]/85 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Brand Identity */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-semibold text-sm text-neutral-950 dark:text-white tracking-tight group-hover:text-[#ff6b00] transition-colors">
              {personalData.name}
            </span>
            <span className="text-xs text-neutral-400 dark:text-neutral-500 hidden sm:inline">
              / {personalData.username}
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-6 text-xs text-neutral-600 dark:text-neutral-400 font-medium">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="hover:text-neutral-950 dark:hover:text-white transition-colors duration-150 py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action & Clock & Theme Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            <div className="hidden sm:flex items-center text-xs text-neutral-500 font-mono">
              <WibClock />
            </div>

            {/* Dark Mode Toggle Icon */}
            <ThemeToggle />

            <a
              href="#contact"
              className="text-xs font-medium px-3.5 py-1.5 rounded-xl bg-[#0a0a0a] dark:bg-white hover:bg-[#222] dark:hover:bg-slate-200 text-white dark:text-[#0a0c10] transition-all duration-150 flex items-center gap-1.5 shadow-sm shadow-black/10"
            >
              <span>Contact</span>
              <ArrowUpRight size={13} className="text-neutral-400 dark:text-neutral-600" />
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white cursor-pointer"
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
            className="fixed inset-x-0 top-16 z-40 md:hidden bg-[#f5f4f2] dark:bg-[#0e1117] border-b border-neutral-200/80 dark:border-white/[0.08] p-5 shadow-xl space-y-4"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors text-sm font-medium rounded-lg hover:bg-neutral-100 dark:hover:bg-white/[0.06]"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-neutral-200/70 dark:border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <WibClock />
                <ThemeToggle />
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs text-[#ff6b00] font-semibold"
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
