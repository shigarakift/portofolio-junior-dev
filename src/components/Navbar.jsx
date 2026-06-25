"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0d1117]/80 backdrop-blur-md border-b border-[var(--terminal-border)] py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2 text-[var(--terminal-yellow)] group">
          <Terminal size={24} className="group-hover:animate-pulse" />
          <span className="font-mono font-bold tracking-tighter text-lg">
            ~<span className="text-[var(--terminal-gray)]">/</span>vibe-code<span className="animate-pulse">_</span>
          </span>
        </a>

        <div className="hidden md:flex space-x-8 font-mono text-sm">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-[var(--terminal-gray)] hover:text-[var(--terminal-yellow)] transition-colors duration-200 flex items-center"
            >
              <span className="text-[var(--terminal-yellow)] mr-1">$</span>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
