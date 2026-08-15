"use client";

import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";

export default function WibClock({ className = "", showIcon = true, showLabel = true }) {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const updateWibTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Jakarta",
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTimeString(formatter.format(now));
    };

    updateWibTime();
    const interval = setInterval(updateWibTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!timeString) {
    return (
      <div className={`inline-flex items-center gap-1.5 font-mono text-xs text-slate-400 ${className}`}>
        {showIcon && <Clock size={13} className="text-[#0066FF] animate-pulse" />}
        <span className="opacity-50">--:--:-- -- WIB</span>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-1.5 font-mono ${className}`}>
      {showIcon && <Clock size={13} className="text-[#0066FF] shrink-0" />}
      <span className="text-white font-medium tracking-tight text-xs">{timeString}</span>
      {showLabel && <span className="text-slate-500 text-[10px] uppercase font-semibold tracking-wider">WIB</span>}
    </div>
  );
}
