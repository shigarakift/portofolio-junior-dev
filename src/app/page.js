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
  ExternalLink 
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
    <main className="min-h-screen bg-[#090d14] bg-grid-pattern relative text-[#f8fafc] selection:bg-[rgba(245,158,11,0.25)] selection:text-[#fbbf24] overflow-x-hidden">
      {/* Top Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] sm:h-[500px] amber-glow-radial pointer-events-none z-0"></div>

      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-36 pb-20 sm:pb-28 space-y-16 sm:space-y-32 relative z-10">
        {/* HERO SECTION */}
        <section id="hero" className="min-h-[65vh] sm:min-h-[75vh] flex flex-col justify-center">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              className="lg:col-span-7 space-y-5 sm:space-y-6 min-w-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[rgba(245,158,11,0.1)] border border-[rgba(245,158,11,0.25)] text-[#fbbf24] text-xs font-mono max-w-full">
                <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse shrink-0"></span>
                <span className="truncate">{personalData.status}</span>
              </div>

              {/* Title & Name */}
              <div className="min-w-0">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-2 sm:mb-3 break-words">
                  {personalData.name}
                </h1>
                <p className="text-base sm:text-2xl font-mono text-[#f59e0b] font-medium flex items-center gap-2 min-w-0">
                  <TerminalIcon size={20} className="shrink-0 text-[#f59e0b]" />
                  <span className="break-words">{personalData.title}</span>
                </p>
              </div>

              {/* Bio */}
              <p className="text-sm sm:text-base lg:text-lg text-[#94a3b8] leading-relaxed max-w-xl font-sans">
                {personalData.bio}
              </p>

              {/* CTA Group (Responsive Buttons) */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 font-mono text-xs sm:text-sm">
                <a
                  href="#projects"
                  className="px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl bg-[#f59e0b] text-[#090d14] font-bold hover:bg-[#fbbf24] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[rgba(245,158,11,0.2)] text-center shrink-0"
                >
                  <span>View Projects</span>
                  <ChevronRight size={18} />
                </a>
                <a
                  href="#contact"
                  className="px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl border border-[#1e293b] bg-[#0f172a] text-[#94a3b8] hover:text-white hover:border-[#f59e0b] hover:bg-[#162035] transition-all flex items-center justify-center gap-2 text-center shrink-0"
                >
                  <span>Contact Me</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>

            {/* Right Widget */}
            <motion.div 
              className="lg:col-span-5 w-full min-w-0"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <HeroSysWidget />
            </motion.div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="scroll-mt-24 sm:scroll-mt-28">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="p-2 rounded-lg bg-[rgba(245,158,11,0.1)] border border-[rgba(245,158,11,0.2)] text-[#f59e0b]">
              <Code2 size={20} />
            </div>
            <div>
              <span className="text-[10px] sm:text-xs font-mono text-[#f59e0b] uppercase tracking-wider">01. Profile &amp; Focus</span>
              <h2 className="text-xl sm:text-3xl font-bold text-white tracking-tight">About Me</h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-[#94a3b8] font-sans leading-relaxed text-sm sm:text-base min-w-0">
              <div className="p-5 sm:p-6 rounded-2xl bg-[#0f172a]/80 border border-[#1e293b] space-y-4">
                <p>
                  {personalData.about}
                </p>
                <p>
                  As a student in the <strong className="text-white font-medium">SIJA (Sistem Informatika, Jaringan, dan Aplikasi)</strong> department at SMKN 1 Cibinong, I combine academic training in networking with self-driven expertise in Linux system administration and modern backend architectures.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 font-mono text-xs">
                <div className="p-4 rounded-xl bg-[#0f172a] border border-[#1e293b] min-w-0">
                  <div className="text-[#64748b] text-[10px] uppercase mb-1">Primary Discipline</div>
                  <div className="text-white font-bold truncate">Infrastructure &amp; Backend</div>
                </div>
                <div className="p-4 rounded-xl bg-[#0f172a] border border-[#1e293b] min-w-0">
                  <div className="text-[#64748b] text-[10px] uppercase mb-1">Location</div>
                  <div className="text-white font-bold truncate">{personalData.location}</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 min-w-0 w-full">
              <TerminalWindow 
                title="cat info.json" 
                copyText={JSON.stringify(personalData, null, 2)}
                actionLabel="Copy JSON"
              >
                <div className="text-xs font-mono leading-relaxed space-y-1.5 text-[#94a3b8] overflow-x-auto">
                  <div><span className="text-[#f59e0b]">"name"</span>: <span className="text-emerald-400">"{personalData.name}"</span>,</div>
                  <div><span className="text-[#f59e0b]">"username"</span>: <span className="text-emerald-400">"{personalData.username}"</span>,</div>
                  <div><span className="text-[#f59e0b]">"role"</span>: <span className="text-emerald-400">"{personalData.role}"</span>,</div>
                  <div><span className="text-[#f59e0b]">"school"</span>: <span className="text-emerald-400">"SMKN 1 Cibinong (SIJA)"</span>,</div>
                  <div><span className="text-[#f59e0b]">"status"</span>: <span className="text-emerald-400">"Open for Internship"</span>,</div>
                  <div><span className="text-[#f59e0b]">"focus"</span>: [<span className="text-sky-300">"Linux"</span>, <span className="text-sky-300">"Backend"</span>, <span className="text-sky-300">"Docker"</span>]</div>
                </div>
              </TerminalWindow>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="scroll-mt-24 sm:scroll-mt-28">
          <div className="flex items-center gap-3 mb-8 sm:mb-10">
            <div className="p-2 rounded-lg bg-[rgba(245,158,11,0.1)] border border-[rgba(245,158,11,0.2)] text-[#f59e0b]">
              <Layers size={20} />
            </div>
            <div>
              <span className="text-[10px] sm:text-xs font-mono text-[#f59e0b] uppercase tracking-wider">02. Technical Competencies</span>
              <h2 className="text-xl sm:text-3xl font-bold text-white tracking-tight">Core Stack &amp; Skills</h2>
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
                  className="p-5 sm:p-6 rounded-2xl bg-[#0f172a] border border-[#1e293b] hover:border-[rgba(245,158,11,0.4)] transition-all duration-300 card-shine flex flex-col justify-between group min-w-0"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#111726] border border-[#1e293b] flex items-center justify-center text-[#f59e0b] group-hover:border-[#f59e0b] transition-colors">
                        <IconComponent size={22} />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-1 rounded bg-[#1e293b] text-[#94a3b8]">
                        {skill.category}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{skill.name}</h3>
                    <p className="text-xs sm:text-sm text-[#94a3b8] font-sans leading-relaxed mb-6">
                      {skill.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                    {skill.tags.map((tag, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-md bg-[#162035] border border-[#1e293b] text-[#fbbf24] text-[10px] sm:text-[11px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="scroll-mt-24 sm:scroll-mt-28">
          <div className="flex items-center gap-3 mb-8 sm:mb-10">
            <div className="p-2 rounded-lg bg-[rgba(245,158,11,0.1)] border border-[rgba(245,158,11,0.2)] text-[#f59e0b]">
              <GraduationCap size={20} />
            </div>
            <div>
              <span className="text-[10px] sm:text-xs font-mono text-[#f59e0b] uppercase tracking-wider">03. Academic Background</span>
              <h2 className="text-xl sm:text-3xl font-bold text-white tracking-tight">Education</h2>
            </div>
          </div>

          <div className="space-y-6">
            {education.map((item) => (
              <div key={item.id} className="p-5 sm:p-8 rounded-2xl bg-[#0f172a] border border-[#1e293b] relative overflow-hidden min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#1e293b] mb-6">
                  <div>
                    <div className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-2">
                      {item.status}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{item.school}</h3>
                    <p className="text-sm sm:text-base text-[#f59e0b] font-mono font-medium">{item.major}</p>
                  </div>
                  <div className="font-mono text-xs sm:text-sm text-[#94a3b8] px-3 py-1.5 rounded-lg bg-[#111726] border border-[#1e293b] self-start sm:self-auto">
                    {item.duration}
                  </div>
                </div>

                <p className="text-[#94a3b8] font-sans leading-relaxed text-xs sm:text-base mb-6">
                  {item.description}
                </p>

                <div className="space-y-2 font-mono text-xs">
                  <div className="text-[#64748b] text-[10px] uppercase tracking-wider">Focus Curriculum</div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                    {item.highlights.map((hl, i) => (
                      <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-[#162035] border border-[#1e293b] text-white text-xs min-w-0">
                        <Check size={14} className="text-[#f59e0b] shrink-0" />
                        <span className="truncate">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-24 sm:scroll-mt-28">
          <div className="flex items-center gap-3 mb-8 sm:mb-10">
            <div className="p-2 rounded-lg bg-[rgba(245,158,11,0.1)] border border-[rgba(245,158,11,0.2)] text-[#f59e0b]">
              <Sparkles size={20} />
            </div>
            <div>
              <span className="text-[10px] sm:text-xs font-mono text-[#f59e0b] uppercase tracking-wider">04. Portfolio Work</span>
              <h2 className="text-xl sm:text-3xl font-bold text-white tracking-tight">Featured Projects</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 sm:p-6 rounded-2xl bg-[#0f172a] border border-[#1e293b] hover:border-[#f59e0b]/40 transition-all flex flex-col justify-between group min-w-0"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-[rgba(245,158,11,0.1)] border border-[rgba(245,158,11,0.2)] text-[#fbbf24] text-xs font-mono">
                      {project.badge}
                    </span>
                    <div className="flex items-center space-x-3 text-[#94a3b8]">
                      {project.github !== "#" && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="Source Repository">
                          <FaGithub size={18} />
                        </a>
                      )}
                      {project.demo !== "#" && (
                        <a href={project.demo} target="_blank" rel="noreferrer" className="hover:text-[#f59e0b] transition-colors" title="Live Demo">
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#f59e0b] transition-colors mb-1">
                    {project.title}
                  </h3>
                  <div className="text-[11px] sm:text-xs font-mono text-[#64748b] mb-4">{project.tagline}</div>

                  <p className="text-xs sm:text-sm text-[#94a3b8] font-sans leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {project.highlights.map((hl, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-mono text-[#cbd5e1]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] shrink-0"></span>
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#1e293b]">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-mono bg-[#111726] text-[#94a3b8] border border-[#1e293b]">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="scroll-mt-24 sm:scroll-mt-28">
          <div className="p-5 sm:p-12 rounded-3xl bg-gradient-to-b from-[#0f172a] to-[#090d14] border border-[#1e293b] text-center relative overflow-hidden min-w-0">
            <div className="max-w-2xl mx-auto space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono max-w-full">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                <span className="truncate">Open for Internship &amp; Part-Time Work</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight break-words">
                Let's Build Reliable Systems
              </h2>

              <p className="text-[#94a3b8] font-sans text-xs sm:text-base leading-relaxed">
                Whether you're looking for an intern with strong Linux infrastructure skills or need a dedicated backend developer for your project, feel free to reach out directly.
              </p>

              {/* Direct Mail Box */}
              <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
                <div className="flex items-center justify-between gap-2 px-3.5 py-3 rounded-xl bg-[#090d14] border border-[#1e293b] text-white font-mono text-xs sm:text-sm min-w-0">
                  <div className="flex items-center gap-2 min-w-0">
                    <Mail size={16} className="text-[#f59e0b] shrink-0" />
                    <span className="truncate">{personalData.email}</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded bg-[#1e293b] hover:bg-[#334155] text-[#94a3b8] hover:text-white transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  </button>
                </div>

                <a
                  href={`mailto:${personalData.email}`}
                  className="px-6 py-3 rounded-xl bg-[#f59e0b] text-[#090d14] font-bold font-mono text-xs sm:text-sm hover:bg-[#fbbf24] transition-all shadow-lg shadow-[rgba(245,158,11,0.2)] flex items-center justify-center shrink-0"
                >
                  Send Direct Email
                </a>
              </div>

              {/* Social Links */}
              <div className="pt-4 sm:pt-6 flex justify-center items-center space-x-4 sm:space-x-6 text-[#94a3b8]">
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-[#111726] border border-[#1e293b] hover:text-white hover:border-[#f59e0b] transition-all"
                  title="GitHub Profile"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-[#111726] border border-[#1e293b] hover:text-[#0077b5] hover:border-[#0077b5] transition-all"
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
      <footer className="border-t border-[#1e293b] py-6 sm:py-8 bg-[#090d14] text-center font-mono text-xs text-[#64748b]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p>© {new Date().getFullYear()} {personalData.name} ({personalData.username}). All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span className="text-[#f59e0b]">root@shigarakift</span>:~$ status ok
          </p>
        </div>
      </footer>
    </main>
  );
}
