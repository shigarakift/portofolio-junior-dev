"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, ChevronRight, Terminal as TerminalIcon, Globe } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import TerminalWindow from "@/components/TerminalWindow";
import { personalData, skills, education, projects } from "@/data/portfolio";

export default function Home() {
  return (
    <main className="min-h-screen font-mono selection:bg-[var(--terminal-yellow)] selection:text-[var(--background)]">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 pt-32 pb-24 space-y-32">
        {/* HERO SECTION */}
        <section id="hero" className="flex flex-col items-start justify-center min-h-[70vh]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[var(--terminal-yellow)] mb-4 flex items-center">
              <ChevronRight size={20} /> whoami
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              {personalData.name}
            </h1>
            <h2 className="text-2xl md:text-3xl text-[var(--terminal-gray)] mb-8 flex items-center">
              <TerminalIcon className="mr-3 text-[var(--terminal-yellow)]" />
              {personalData.role}
            </h2>
            <p className="max-w-2xl text-lg text-gray-400 mb-10 leading-relaxed font-sans">
              {personalData.about}
            </p>

            <div className="flex space-x-4">
              <a href="#projects" className="px-6 py-3 bg-[var(--terminal-yellow)] text-[var(--background)] font-bold rounded hover:bg-yellow-500 transition-colors flex items-center">
                <ChevronRight size={18} className="mr-1" /> View Projects
              </a>
              <a href="#contact" className="px-6 py-3 border border-[var(--terminal-yellow)] text-[var(--terminal-yellow)] font-bold rounded hover:bg-[var(--terminal-yellow)] hover:text-[var(--background)] transition-colors flex items-center">
                Contact Me
              </a>
            </div>
          </motion.div>
        </section>

        {/* ABOUT & SKILLS SECTION */}
        <section id="about" className="scroll-mt-24">
          <TerminalWindow title="cat about.txt" delay={0.1}>
            <div className="mb-8">
              <p className="text-gray-300 font-sans leading-relaxed">
                <span className="text-[var(--terminal-yellow)] font-mono">$&gt;</span> {personalData.about}
              </p>
            </div>
            
            <p className="text-[var(--terminal-yellow)] mb-4">$&gt; ls ./skills</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill, idx) => {
                const Icon = skill.icon;
                return (
                  <div key={idx} className="flex items-center space-x-3 text-gray-400 hover:text-[var(--terminal-yellow)] transition-colors p-2 rounded border border-transparent hover:border-[var(--terminal-border)] hover:bg-[#161b22]">
                    <Icon size={18} />
                    <span>{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </TerminalWindow>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="scroll-mt-24">
          <TerminalWindow title="tail -f education.log" delay={0.2}>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[var(--terminal-border)] before:to-transparent">
              {education.map((edu) => (
                <div key={edu.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[var(--terminal-yellow)] bg-[var(--background)] text-[var(--terminal-yellow)] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <TerminalIcon size={16} />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-[var(--terminal-border)] bg-[#161b22] hover:border-[var(--terminal-yellow)] transition-colors">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-bold text-white text-lg">{edu.school}</h3>
                      <span className="text-xs text-[var(--terminal-yellow)]">{edu.duration}</span>
                    </div>
                    <div className="text-[var(--terminal-gray)] text-sm font-bold mb-3">{edu.major}</div>
                    <p className="text-gray-400 font-sans text-sm">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </TerminalWindow>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-24">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <span className="text-[var(--terminal-yellow)] mr-2">~/</span>projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <TerminalWindow key={project.id} title={`./${project.title.toLowerCase().replace(/\s/g, '-')}.sh`} delay={0.1 * idx}>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 font-sans text-sm mb-6 h-12">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-[#161b22] border border-[var(--terminal-border)] text-[var(--terminal-gray)] rounded">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4 mt-auto">
                  <a href={project.github} className="flex items-center text-sm text-[var(--terminal-gray)] hover:text-white transition-colors">
                    <FaGithub size={16} className="mr-1" /> Source
                  </a>
                  <a href={project.demo} className="flex items-center text-sm text-[var(--terminal-gray)] hover:text-[var(--terminal-yellow)] transition-colors">
                    <Globe size={16} className="mr-1" /> Live Demo
                  </a>
                </div>
              </TerminalWindow>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="scroll-mt-24">
          <TerminalWindow title="ping contact" delay={0.3}>
            <div className="text-center py-8">
              <h2 className="text-2xl font-bold text-white mb-4">Connection Established</h2>
              <p className="text-gray-400 font-sans mb-8 max-w-md mx-auto">
                My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="flex justify-center space-x-6 mb-8">
                <a href={personalData.github} className="text-[var(--terminal-gray)] hover:text-white transition-colors">
                  <FaGithub size={24} />
                </a>
                <a href={personalData.linkedin} className="text-[var(--terminal-gray)] hover:text-[#0077b5] transition-colors">
                  <FaLinkedin size={24} />
                </a>
                <a href={`mailto:${personalData.email}`} className="text-[var(--terminal-gray)] hover:text-[var(--terminal-yellow)] transition-colors">
                  <Mail size={24} />
                </a>
              </div>

              <a href={`mailto:${personalData.email}`} className="inline-flex items-center px-6 py-3 border border-[var(--terminal-yellow)] text-[var(--terminal-yellow)] hover:bg-[var(--terminal-yellow)] hover:text-[var(--background)] transition-colors rounded font-bold">
                Send Transmission
              </a>
            </div>
          </TerminalWindow>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-[var(--terminal-border)] py-6 mt-12 bg-[#0d1117]">
        <div className="max-w-4xl mx-auto px-6 text-center text-[var(--terminal-gray)] text-sm">
          <p>
            <span className="text-[var(--terminal-yellow)]">root@localhost</span>:~$ logout
          </p>
          <p className="mt-2 text-xs">
            Built with Next.js & Tailwind CSS. Theme inspired by terminal interfaces.
          </p>
        </div>
      </footer>
    </main>
  );
}
