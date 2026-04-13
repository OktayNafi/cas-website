"use client";

import { motion } from "framer-motion";

export function SoundWave() {
  return (
    <div className="flex items-end gap-[3px] h-8">
      {[0, 0.15, 0.3, 0.1, 0.25, 0.05, 0.2].map((delay, i) => (
        <motion.div
          key={i}
          className="w-[3px] rounded-full bg-highlight/40"
          animate={{ height: ["30%", "90%", "30%"] }}
          transition={{ duration: 0.8 + delay, repeat: Infinity, ease: "easeInOut", delay }}
        />
      ))}
    </div>
  );
}

export function ArrowChart() {
  return (
    <svg width="48" height="32" viewBox="0 0 48 32" fill="none" className="opacity-40">
      <motion.path
        d="M2 28 L16 18 L24 22 L46 4"
        stroke="#0FF0A0"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }}
      />
      <motion.polygon
        points="46,4 40,6 42,12"
        fill="#0FF0A0"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 1.5 }}
      />
    </svg>
  );
}

export function TypingBubble() {
  return (
    <div className="flex items-center gap-1 px-3 py-2 rounded-xl bg-highlight/5 w-fit">
      {[0, 0.2, 0.4].map((delay) => (
        <motion.div
          key={delay}
          className="w-[5px] h-[5px] rounded-full bg-highlight/50"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

export function NodeDiagram() {
  return (
    <svg width="56" height="32" viewBox="0 0 56 32" fill="none" className="opacity-40">
      <line x1="8" y1="16" x2="24" y2="8" stroke="#0FF0A0" strokeWidth="1" />
      <line x1="8" y1="16" x2="24" y2="24" stroke="#0FF0A0" strokeWidth="1" />
      <line x1="24" y1="8" x2="48" y2="16" stroke="#0FF0A0" strokeWidth="1" />
      <line x1="24" y1="24" x2="48" y2="16" stroke="#0FF0A0" strokeWidth="1" />
      {[[8, 16], [24, 8], [24, 24], [48, 16]].map(([cx, cy], i) => (
        <motion.circle
          key={i}
          cx={cx}
          cy={cy}
          r="3"
          fill="#0FF0A0"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
    </svg>
  );
}

export function KanbanBoard() {
  return (
    <div className="flex gap-1 opacity-40">
      {[0, 1, 2].map((col) => (
        <div key={col} className="flex flex-col gap-1 w-4">
          {[0, 1].map((row) => (
            <motion.div
              key={row}
              className="h-2 rounded-[2px] bg-highlight/50"
              animate={{ y: col === 1 ? [0, -6, 0] : 0, opacity: [0.4, 0.8, 0.4] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: col * 0.4 + row * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export function WireframeCube() {
  return (
    <motion.svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      className="opacity-35"
      animate={{ rotate: 360 }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
    >
      {/* Front face */}
      <rect x="6" y="6" width="16" height="16" stroke="#0FF0A0" strokeWidth="1" fill="none" />
      {/* Back face */}
      <rect x="14" y="14" width="16" height="16" stroke="#0FF0A0" strokeWidth="1" fill="none" />
      {/* Connecting lines */}
      <line x1="6" y1="6" x2="14" y2="14" stroke="#0FF0A0" strokeWidth="1" />
      <line x1="22" y1="6" x2="30" y2="14" stroke="#0FF0A0" strokeWidth="1" />
      <line x1="6" y1="22" x2="14" y2="30" stroke="#0FF0A0" strokeWidth="1" />
      <line x1="22" y1="22" x2="30" y2="30" stroke="#0FF0A0" strokeWidth="1" />
    </motion.svg>
  );
}

export function LightbulbRays() {
  return (
    <div className="relative w-8 h-8 opacity-40">
      {/* Bulb */}
      <div className="absolute inset-[25%] rounded-full bg-highlight/30" />
      {/* Rays */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <motion.div
          key={angle}
          className="absolute top-1/2 left-1/2 w-px h-3 bg-highlight/40 origin-bottom"
          style={{ transform: `translate(-50%, -100%) rotate(${angle}deg) translateY(-6px)` }}
          animate={{ opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: angle / 360, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
