"use client";

import React, { useState, useEffect } from 'react';
import { Server, Activity, Shield, Cpu, CheckCircle2, HardDrive, Terminal, Layers } from 'lucide-react';
import { personalData } from '@/data/portfolio';

export default function HeroSysWidget() {
  const [cpuUsage, setCpuUsage] = useState(16);
  const [memUsage, setMemUsage] = useState(41);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const interval = setInterval(() => {
      setCpuUsage(Math.floor(13 + Math.random() * 16));
      setMemUsage(Math.floor(39 + Math.random() * 6));
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full rounded-2xl border border-white/[0.08] bg-[#0e1422]/90 overflow-hidden shadow-2xl shadow-black/80 backdrop-blur-2xl transition-all duration-300">
      {/* Top Bar with Node Identifier */}
      <div className="bg-[#12192a]/95 px-4 sm:px-5 py-3 border-b border-white/[0.07] flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </div>
          <span className="text-white font-mono font-semibold text-xs tracking-tight truncate">
            {personalData.username}-node01
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hidden sm:inline-block">
            online
          </span>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1 bg-[#090d16] p-1 rounded-xl border border-white/[0.06]">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1 rounded-lg text-[11px] font-medium transition-all ${
              activeTab === 'overview'
                ? 'bg-[#0066FF] text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('daemons')}
            className={`px-3 py-1 rounded-lg text-[11px] font-medium transition-all ${
              activeTab === 'daemons'
                ? 'bg-[#0066FF] text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Daemons
          </button>
        </div>
      </div>

      {/* Widget Body */}
      <div className="p-4 sm:p-5 space-y-4">
        {activeTab === 'overview' ? (
          <>
            {/* System Spec Matrix */}
            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-3 rounded-xl bg-[#090d16]/80 border border-white/[0.05]">
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Kernel / Host</div>
                <div className="text-xs sm:text-sm font-semibold text-white mt-1 flex items-center gap-1.5 truncate font-mono">
                  <Server size={13} className="text-[#0066FF] shrink-0" />
                  <span className="truncate">{personalData.sysStats.kernel}</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#090d16]/80 border border-white/[0.05]">
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Uptime SLA</div>
                <div className="text-xs sm:text-sm font-semibold text-emerald-400 mt-1 flex items-center gap-1.5 truncate font-mono">
                  <Shield size={13} className="text-emerald-400 shrink-0" />
                  <span className="truncate">{personalData.sysStats.uptime}</span>
                </div>
              </div>
            </div>

            {/* Dynamic Telemetry Bars */}
            <div className="space-y-3 pt-1">
              <div>
                <div className="flex justify-between text-xs mb-1.5 font-mono">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Cpu size={13} className="text-[#0066FF]" /> CPU Load
                  </span>
                  <span className="text-white font-semibold">{cpuUsage}%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-[#162035] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#0066FF] to-[#0052CC] transition-all duration-500"
                    style={{ width: `${cpuUsage}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5 font-mono">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Activity size={13} className="text-sky-400" /> RAM Allocation
                  </span>
                  <span className="text-white font-semibold">{memUsage}%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-[#162035] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-sky-400 to-[#0066FF] transition-all duration-500"
                    style={{ width: `${memUsage}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Active Shell & Service Line */}
            <div className="p-3 rounded-xl bg-[#090d16]/80 border border-white/[0.05] flex items-center justify-between text-[11px] font-mono">
              <div className="flex items-center gap-2 text-slate-300">
                <Terminal size={13} className="text-[#0066FF] shrink-0" />
                <span>Shell: {personalData.sysStats.shell}</span>
              </div>
              <span className="text-slate-500 text-[10px] uppercase">
                {personalData.sysStats.mainFocus}
              </span>
            </div>
          </>
        ) : (
          <div className="space-y-2">
            {[
              { name: "nginx.service", status: "active (running)", port: "80, 443" },
              { name: "docker.daemon", status: "active (running)", port: "unix socket" },
              { name: "postgresql.service", status: "active (running)", port: "5432" },
              { name: "systemd-resolved", status: "active (running)", port: "53" }
            ].map((daemon, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-2.5 rounded-xl bg-[#090d16]/80 border border-white/[0.05] text-xs font-mono"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
                  <span className="text-white font-medium truncate">{daemon.name}</span>
                </div>
                <span className="text-[10px] text-slate-400 shrink-0">
                  port {daemon.port}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
