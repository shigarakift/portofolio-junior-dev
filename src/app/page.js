"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  ChevronRight, 
  Terminal as TerminalIcon, 
  Code2, 
  GraduationCap, 
  Layers, 
  Sparkles, 
  Mail, 
  Check, 
  Copy, 
  ArrowUpRight, 
  ExternalLink,
  Server,
  Cpu,
  Shield,
  Activity,
  CheckCircle2,
  Database
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import TerminalWindow from "@/components/TerminalWindow";
import HeroSysWidget from "@/components/HeroSysWidget";
import { personalData, skills, education, projects } from "@/data/portfolio";

export default function Home() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <main className="min-h-screen bg-[#080c14] bg-tech-pattern relative text-[#f8fafc] overflow-x-hidden selection:bg-[#0066FF]/30 selection:text-white">
      {/* Hero Ambient Radial Layer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] hero-glow-layer pointer-events-none z-0"></div>
      <div className="absolute top-72 right-0 w-[450px] h-[450px] secondary-glow-layer pointer-events-none z-0"></div>

      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-24 sm:pb-32 space-y-28 sm:space-y-36 relative z-10">
        
        {/* ========================================================================= */}
        {/* 1. HERO SECTION */}
        {/* ========================================================================= */}
        <section id="hero" className="min-h-[65vh] sm:min-h-[72vh] flex flex-col justify-center">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <motion.div 
              className="lg:col-span-7 space-y-6 min-w-0"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Availability Beacon */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/25 text-[#0066FF] text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-[#0066FF] animate-pulse shrink-0"></span>
                <span className="font-medium truncate">{personalData.status}</span>
              </div>

              {/* Headline */}
              <div className="space-y-2.5">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                  {personalData.name}
                </h1>
                <p className="text-base sm:text-xl font-mono text-[#0066FF] font-medium flex items-center gap-2">
                  <TerminalIcon size={19} className="shrink-0 text-[#0066FF]" />
                  <span>{personalData.title}</span>
                </p>
              </div>

              {/* Bio Summary */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-400 leading-relaxed max-w-xl font-sans">
                {personalData.bio}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 text-xs sm:text-sm font-medium">
                <a
                  href="#projects"
                  className="px-6 py-3.5 rounded-xl bg-[#0066FF] text-white hover:bg-[#0052CC] transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#0066FF]/25 font-semibold text-center shrink-0"
                >
                  <span>View Projects</span>
                  <ChevronRight size={18} />
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3.5 rounded-xl border border-white/[0.1] bg-[#0d1320]/90 text-slate-300 hover:text-white hover:border-[#0066FF]/50 hover:bg-[#121b2e] transition-all duration-200 flex items-center justify-center gap-2 text-center shrink-0"
                >
                  <span>Contact Me</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>

            {/* Right Telemetry Node Widget */}
            <motion.div 
              className="lg:col-span-5 w-full min-w-0"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <HeroSysWidget />
            </motion.div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"></div>

        {/* ========================================================================= */}
        {/* 2. ABOUT SECTION */}
        {/* ========================================================================= */}
        <section id="about" className="scroll-mt-24 sm:scroll-mt-28">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/20 text-[#0066FF]">
              <Code2 size={20} />
            </div>
            <div>
              <span className="text-[11px] font-mono text-[#0066FF] uppercase tracking-wider font-semibold">01. Profile &amp; Focus</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">About Me</h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 items-start">
            {/* Left Narrative Block */}
            <div className="lg:col-span-7 space-y-4 text-slate-400 font-sans leading-relaxed text-sm sm:text-base min-w-0">
              <div className="p-6 sm:p-7 rounded-2xl glass-tile space-y-4">
                <p>
                  {personalData.about}
                </p>
                <p>
                  As a student in the <strong className="text-white font-medium">SIJA (Sistem Informatika, Jaringan, dan Aplikasi)</strong> department at SMKN 1 Cibinong, I combine academic training in networking with self-driven expertise in Linux system administration and modern backend architectures.
                </p>
              </div>

              {/* Quick Specs Tiles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 font-mono text-xs">
                <div className="p-4 rounded-xl glass-tile min-w-0">
                  <div className="text-slate-500 text-[10px] uppercase mb-1">Primary Discipline</div>
                  <div className="text-white font-semibold truncate">{personalData.sysStats.mainFocus}</div>
                </div>
                <div className="p-4 rounded-xl glass-tile min-w-0">
                  <div className="text-slate-500 text-[10px] uppercase mb-1">Location</div>
                  <div className="text-white font-semibold truncate">{personalData.location}</div>
                </div>
              </div>
            </div>

            {/* Right Interactive Config Inspector */}
            <div className="lg:col-span-5 min-w-0 w-full">
              <TerminalWindow 
                title="cat info.json" 
                copyText={JSON.stringify(personalData, null, 2)}
                actionLabel="Copy JSON"
              >
                <div className="text-xs font-mono leading-relaxed space-y-1.5 text-slate-300 overflow-x-auto">
                  <div><span className="text-[#0066FF]">"name"</span>: <span className="text-emerald-400">"{personalData.name}"</span>,</div>
                  <div><span className="text-[#0066FF]">"username"</span>: <span className="text-emerald-400">"{personalData.username}"</span>,</div>
                  <div><span className="text-[#0066FF]">"role"</span>: <span className="text-emerald-400">"{personalData.role}"</span>,</div>
                  <div><span className="text-[#0066FF]">"school"</span>: <span className="text-emerald-400">"SMKN 1 Cibinong (SIJA)"</span>,</div>
                  <div><span className="text-[#0066FF]">"status"</span>: <span className="text-emerald-400">"Open for Internship"</span>,</div>
                  <div><span className="text-[#0066FF]">"focus"</span>: [<span className="text-sky-300">"Linux"</span>, <span className="text-sky-300">"Backend"</span>, <span className="text-sky-300">"Docker"</span>]</div>
                </div>
              </TerminalWindow>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"></div>

        {/* ========================================================================= */}
        {/* 3. CORE SKILLS SECTION */}
        {/* ========================================================================= */}
        <section id="skills" className="scroll-mt-24 sm:scroll-mt-28">
          <div className="flex items-center gap-3 mb-8 sm:mb-10">
            <div className="p-2.5 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/20 text-[#0066FF]">
              <Layers size={20} />
            </div>
            <div>
              <span className="text-[11px] font-mono text-[#0066FF] uppercase tracking-wider font-semibold">02. Technical Competencies</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Core Stack &amp; Skills</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skill, idx) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl glass-tile shimmer-hover flex flex-col justify-between group min-w-0"
                >
                  <div>
                    <div className="flex justify-between items-start mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#12192a] border border-white/[0.08] flex items-center justify-center text-[#0066FF] group-hover:border-[#0066FF]/50 group-hover:bg-[#0066FF]/10 transition-colors">
                        <IconComponent size={22} />
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/[0.05] text-slate-400 border border-white/[0.05]">
                        {skill.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#0066FF] transition-colors">{skill.name}</h3>
                    <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed mb-6">
                      {skill.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06] font-mono text-xs">
                    {skill.tags.map((tag, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg bg-[#080c14] border border-white/[0.06] text-slate-300 text-[10px] sm:text-[11px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Section Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"></div>

        {/* ========================================================================= */}
        {/* 4. EDUCATION SECTION */}
        {/* ========================================================================= */}
        <section id="education" className="scroll-mt-24 sm:scroll-mt-28">
          <div className="flex items-center gap-3 mb-8 sm:mb-10">
            <div className="p-2.5 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/20 text-[#0066FF]">
              <GraduationCap size={20} />
            </div>
            <div>
              <span className="text-[11px] font-mono text-[#0066FF] uppercase tracking-wider font-semibold">03. Academic Background</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Education</h2>
            </div>
          </div>

          <div className="space-y-6">
            {education.map((item) => (
              <div key={item.id} className="p-6 sm:p-8 rounded-2xl glass-tile relative overflow-hidden min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.06] mb-6">
                  <div>
                    <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-2">
                      {item.status}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{item.school}</h3>
                    <p className="text-sm sm:text-base text-[#0066FF] font-mono font-medium mt-0.5">{item.major}</p>
                  </div>
                  <div className="font-mono text-xs sm:text-sm text-slate-300 px-3.5 py-1.5 rounded-xl bg-[#080c14] border border-white/[0.08] self-start sm:self-auto">
                    {item.duration}
                  </div>
                </div>

                <p className="text-slate-400 font-sans leading-relaxed text-xs sm:text-base mb-6">
                  {item.description}
                </p>

                <div className="space-y-2.5 font-mono text-xs">
                  <div className="text-slate-500 text-[10px] uppercase tracking-wider">Focus Curriculum</div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                    {item.highlights.map((hl, i) => (
                      <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#080c14] border border-white/[0.05] text-white text-xs min-w-0">
                        <Check size={14} className="text-[#0066FF] shrink-0" />
                        <span className="truncate">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"></div>

        {/* ========================================================================= */}
        {/* 5. FEATURED PROJECTS SECTION */}
        {/* ========================================================================= */}
        <section id="projects" className="scroll-mt-24 sm:scroll-mt-28">
          <div className="flex items-center gap-3 mb-8 sm:mb-10">
            <div className="p-2.5 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/20 text-[#0066FF]">
              <Sparkles size={20} />
            </div>
            <div>
              <span className="text-[11px] font-mono text-[#0066FF] uppercase tracking-wider font-semibold">04. Portfolio Work</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Featured Projects</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl glass-tile shimmer-hover flex flex-col justify-between group min-w-0"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-[#0066FF]/10 border border-[#0066FF]/25 text-[#0066FF] text-xs font-mono font-medium">
                      {project.badge}
                    </span>
                    <div className="flex items-center space-x-3 text-slate-400">
                      {project.github !== "#" && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="Source Repository">
                          <FaGithub size={18} />
                        </a>
                      )}
                      {project.demo !== "#" && (
                        <a href={project.demo} target="_blank" rel="noreferrer" className="hover:text-[#0066FF] transition-colors" title="Live Demo">
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#0066FF] transition-colors mb-1">
                    {project.title}
                  </h3>
                  <div className="text-[11px] sm:text-xs font-mono text-slate-500 mb-4">{project.tagline}</div>

                  <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {project.highlights.map((hl, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] shrink-0"></span>
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2.5 py-0.5 rounded text-[10px] sm:text-[11px] font-mono bg-[#080c14] text-slate-400 border border-white/[0.05]">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"></div>

        {/* ========================================================================= */}
        {/* 6. CONTACT SECTION */}
        {/* ========================================================================= */}
        <section id="contact" className="scroll-mt-24 sm:scroll-mt-28">
          <div className="p-7 sm:p-14 rounded-3xl bg-gradient-to-b from-[#0d1320] to-[#080c14] border border-white/[0.08] text-center relative overflow-hidden min-w-0">
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono max-w-full">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                <span className="truncate">Open for Internship &amp; Part-Time Work</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight break-words">
                Let's Build Reliable Systems
              </h2>

              <p className="text-slate-400 font-sans text-xs sm:text-base leading-relaxed">
                Whether you're looking for an intern with strong Linux infrastructure skills or need a dedicated backend developer for your project, feel free to reach out directly.
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
      </div>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.06] py-6 sm:py-8 bg-[#080c14] text-center font-mono text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p>© {new Date().getFullYear()} {personalData.name} ({personalData.username}). All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span className="text-[#0066FF]">root@{personalData.username}</span>:~$ status ok
          </p>
        </div>
      </footer>
    </main>
  );
}
