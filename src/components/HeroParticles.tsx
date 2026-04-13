"use client";

import { useMemo, useState, useEffect } from "react";

function seededRandom(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

export default function HeroParticles() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const particles = useMemo(
    () =>
      Array.from({ length: 60 }, (_, i) => ({
        id: i,
        left: seededRandom(i * 1) * 100,
        delay: seededRandom(i * 2) * 15,
        duration: 12 + seededRandom(i * 3) * 10,
        size: 2 + seededRandom(i * 4) * 3,
        opacity: 0.3 + seededRandom(i * 5) * 0.5,
      })),
    []
  );

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            bottom: "-5%",
            width: p.size,
            height: p.size,
            background: "#0FF0A0",
            boxShadow: `0 0 ${p.size * 2}px rgba(15, 240, 160, ${p.opacity * 0.5})`,
            opacity: 0,
            animation: `float-up ${p.duration}s ${p.delay}s linear infinite`,
          }}
        />
      ))}
    </div>
  );
}
