"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  target: number;
  display?: string;    // if set, renders statically (no count-up)
  prefix?: string;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  { target: 7, label: "AI Agents" },
  { target: 0, display: "24/7", label: "Uptime" },
  { target: 8, prefix: "<", label: "Week Delivery" },
  { target: 100, suffix: "%", label: "UK Built" },
];

function AnimatedNumber({
  stat,
  visible,
}: {
  stat: Stat;
  visible: boolean;
}) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!visible || started.current) return;
    started.current = true;

    // Static display — no count-up, just show immediately
    if (stat.display) return;

    const duration = 2000;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const p = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * stat.target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [visible, stat]);

  if (stat.display) return <span>{stat.display}</span>;

  return (
    <span>
      {stat.prefix ?? ""}
      {count}
      {stat.suffix ?? ""}
    </span>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);

    // Fallback: show final values after 4 seconds regardless
    const timeout = setTimeout(() => setVisible(true), 4000);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8"
    >
      {stats.map((stat) => (
        <div key={stat.label} className="text-left">
          <div
            className="text-[56px] font-extrabold leading-none"
            style={{ letterSpacing: "-0.03em", color: "#B87333" }}
          >
            <AnimatedNumber stat={stat} visible={visible} />
          </div>
          <p className="mt-4 text-[13px] uppercase tracking-[0.1em] text-[#6B7280]">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
