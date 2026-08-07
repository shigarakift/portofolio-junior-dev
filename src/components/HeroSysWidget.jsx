"use client";

import React, { useState, useEffect } from 'react';
import { Server, Activity, Shield, Cpu, CheckCircle2 } from 'lucide-react';

export default function HeroSysWidget() {
  const [cpuUsage, setCpuUsage] = useState(14);
  const [memUsage, setMemUsage] = useState(38);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const interval = setInterval(() => {
      setCpuUsage(Math.floor(12 + Math.random() * 18));
      setMemUsage(Math.floor(36 + Math.random() * 4));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full rounded-2xl border border-[#1e293b] bg-[#0f172a]/90 overflow-hidden shadow-2xl shadow-black/60 font-mono text-xs backdrop-blur-md">
      {/* Widget Header Bar */}
      <div className="bg-[#111726] px-3.5 sm:px-4 py-2.5 sm:py-3 border-b border-[#1e293b] flex items-center justify-between gap-2 flex-wrap sm:flex-nowrap">
        <div className="flex items-center gap-2 min-w-0">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping shrink-0"></span>
          <span className="text-white font-bold text-xs tracking-wide truncate">shigarakift-node01</span>
          <span className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-[#1e293b] text-[#94a3b8] hidden xs:inline-block shrink-0">production</span>
        </div>
        
        <div className="flex gap-1 shrink-0 ml-auto sm:ml-0">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-2 sm:px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-medium transition-all ${
              activeTab === 'overview'
                ? 'bg-[#f59e0b] text-[#090d14] font-bold'
                : 'text-[#94a3b8] hover:bg-[#1e293b]'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('stack')}
            className={`px-2 sm:px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-medium transition-all ${
              activeTab === 'stack'
                ? 'bg-[#f59e0b] text-[#090d14] font-bold'
                : 'text-[#94a3b8] hover:bg-[#1e293b]'
            }`}
          >
            Services
          </button>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-3.5 sm:p-5 space-y-3.5 sm:space-y-4">
        {activeTab === 'overview' ? (
          <>
            {/* System Info Banner (Responsive 1-col on mobile, 2-col on sm) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 p-3 rounded-xl bg-[#090d14] border border-[#1e293b]/70">
              <div className="min-w-0">
                <div className="text-[9px] sm:text-[10px] text-[#64748b] uppercase tracking-wider">OS Environment</div>
                <div className="text-white font-semibold text-xs sm:text-sm flex items-center gap-1.5 mt-0.5 min-w-0">
                  <Server size={13} className="text-[#f59e0b] shrink-0" />
                  <span className="truncate">Linux (Ubuntu 24.04)</span>
                </div>
              </div>
              <div className="min-w-0">
                <div className="text-[9px] sm:text-[10px] text-[#64748b] uppercase tracking-wider">Education Org</div>
                <div className="text-white font-semibold text-xs sm:text-sm flex items-center gap-1.5 mt-0.5 min-w-0">
                  <Shield size={13} className="text-emerald-400 shrink-0" />
                  <span className="truncate">SMKN 1 Cibinong</span>
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-[10px] sm:text-[11px] mb-1">
                  <span className="text-[#94a3b8] flex items-center gap-1">
                    <Cpu size={12} className="text-[#f59e0b]" /> CPU Load
                  </span>
                  <span className="text-white font-bold">{cpuUsage}%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-[#1e293b] overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#f59e0b] to-emerald-400 transition-all duration-500"
                    style={{ width: `${cpuUsage}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[10px] sm:text-[11px] mb-1">
                  <span className="text-[#94a3b8] flex items-center gap-1">
                    <Activity size={12} className="text-sky-400" /> RAM Allocation
                  </span>
                  <span className="text-white font-bold">{memUsage}%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-[#1e293b] overflow-hidden">
                  <div
                    className="h-full bg-sky-400 transition-all duration-500"
                    style={{ width: `${memUsage}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Live Terminal Log line */}
            <div className="p-3 rounded-lg bg-[#090d14] border border-[#1e293b] text-[10px] sm:text-[11px] leading-relaxed overflow-x-auto">
              <div className="text-[#64748b] text-[9px] sm:text-[10px] mb-1 font-bold">LIVE SYSTEM LOG</div>
              <p className="text-emerald-400 font-mono flex items-center gap-1.5 flex-wrap sm:flex-nowrap">
                <CheckCircle2 size={12} className="shrink-0" />
                <span className="break-all sm:break-normal">sysmon.service: Active (uptime: 99.98%)</span>
              </p>
              <p className="text-[#94a3b8] mt-1 font-mono text-[9px] sm:text-[10px] whitespace-nowrap overflow-x-auto">
                $&gt; nginx -t &amp;&amp; docker ps --format "table &#123;&#123;.Names&#125;&#125;\t&#123;&#123;.Status&#125;&#125;"
              </p>
            </div>
          </>
        ) : (
          <div className="space-y-2">
            <div className="text-[9px] sm:text-[10px] text-[#64748b] uppercase tracking-wider mb-2">ACTIVE DAEMONS</div>
            {[
              { name: "nginx.service", status: "active (running)", port: "80, 443" },
              { name: "docker.service", status: "active (running)", port: "unix socket" },
              { name: "postgresql.service", status: "active (running)", port: "5432" },
              { name: "sysmon-agent", status: "active (monitoring)", port: "9090" }
            ].map((srv, idx) => (
              <div key={idx} className="flex justify-between items-center p-2 rounded bg-[#090d14] border border-[#1e293b] text-[10px] sm:text-[11px]">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
                  <span className="text-white font-bold truncate">{srv.name}</span>
                </div>
                <span className="text-[#94a3b8] text-[9px] sm:text-[10px] font-mono shrink-0 ml-2">port {srv.port}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
