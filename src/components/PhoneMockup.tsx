"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface PhoneMockupProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  tilt?: "left" | "right" | "none";
}

export default function PhoneMockup({ children, className = "", delay = 0, tilt = "none" }: PhoneMockupProps) {
  const rotate = tilt === "left" ? -6 : tilt === "right" ? 6 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      whileHover={{ y: -6 }}
      className={`relative flex-shrink-0 ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {/* Phone shell */}
      <div
        className="relative overflow-hidden"
        style={{
          width: 220,
          borderRadius: 36,
          border: "8px solid #1a1a1a",
          boxShadow: "0 32px 64px rgba(0,0,0,0.22), 0 0 0 1px rgba(255,255,255,0.06) inset",
          background: "#1a1a1a",
        }}
      >
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10" style={{ width: 72, height: 22, background: "#1a1a1a", borderRadius: "0 0 16px 16px" }} />
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-2 pb-1 relative" style={{ background: "transparent", height: 28 }}>
          <span className="text-[9px] font-bold opacity-60 text-white">9:41</span>
          <div className="flex items-center gap-1 opacity-60">
            <div className="w-3 h-1.5 rounded-sm bg-white" />
            <div className="w-1 h-1 rounded-full bg-white" />
          </div>
        </div>
        {/* Content */}
        <div className="overflow-hidden" style={{ minHeight: 380 }}>
          {children}
        </div>
      </div>
    </motion.div>
  );
}
