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
      <div className={`inline-flex items-center gap-1.5 font-mono text-xs text-[#94a3b8] ${className}`}>
        {showIcon && <Clock size={13} className="text-[#f59e0b] animate-pulse" />}
        <span className="opacity-50">--:--:-- -- WIB</span>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-1.5 font-mono ${className}`}>
      {showIcon && <Clock size={13} className="text-[#f59e0b] shrink-0 animate-pulse" />}
      <span className="text-[#fbbf24] font-semibold tracking-tight">{timeString}</span>
      {showLabel && <span className="text-[#64748b] text-[10px] uppercase font-bold tracking-wider">WIB</span>}
    </div>
  );
}
