"use client";

import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 7, suffix: "", label: "AI AGENTS" },
  { value: 24, suffix: "/7", label: "UPTIME" },
  { value: 2, suffix: "", label: "MONTHS DELIVERY" },
  { value: 100, suffix: "%", label: "UK BUILT" },
];

function Counter({
  target,
  suffix,
  triggered,
}: {
  target: number;
  suffix: string;
  triggered: boolean;
}) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!triggered || started.current) return;
    started.current = true;

    const duration = 2000;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [triggered, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    // Fallback: if IntersectionObserver never fires (SSR edge cases, reduced motion
    // blockers, or the section is already above the fold), trigger after 3s.
    const fallback = setTimeout(() => setTriggered(true), 3000);

    if (typeof IntersectionObserver === "undefined") {
      // Very old browsers — just trigger immediately.
      setTriggered(true);
      clearTimeout(fallback);
      return;
    }

    const el = ref.current;
    if (!el) return () => clearTimeout(fallback);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setTriggered(true);
            observer.disconnect();
            clearTimeout(fallback);
            break;
          }
        }
      },
      { rootMargin: "-100px" }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div
            className="text-[80px] leading-none"
            style={{
              color: "#0FF0A0",
              fontWeight: 900,
              textShadow: "0 0 15px rgba(15, 240, 160, 0.15)",
            }}
          >
            <Counter target={stat.value} suffix={stat.suffix} triggered={triggered} />
          </div>
          <p className="mt-3 text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-white/40">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
