"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

const stats: Stat[] = [
  { target: 7, label: "AI Agents Available" },
  { target: 24, suffix: "/7", label: "Uptime" },
  { target: 8, prefix: "<", suffix: " weeks", label: "Typical Delivery" },
  { target: 100, suffix: "%", label: "UK Built & Hosted" },
];

function Counter({ stat, triggered }: { stat: Stat; triggered: boolean }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!triggered || started.current) return;
    started.current = true;
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
  }, [triggered, stat.target]);

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
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const fallback = setTimeout(() => setTriggered(true), 3000);
    if (typeof IntersectionObserver === "undefined") {
      setTriggered(true);
      clearTimeout(fallback);
      return;
    }
    const el = ref.current;
    if (!el) return () => clearTimeout(fallback);
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setTriggered(true);
            obs.disconnect();
            clearTimeout(fallback);
            break;
          }
        }
      },
      { rootMargin: "-80px" }
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      clearTimeout(fallback);
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
            className="text-[56px] font-extrabold text-[#0A0A0A] leading-none"
            style={{ letterSpacing: "-0.03em" }}
          >
            <Counter stat={stat} triggered={triggered} />
          </div>
          <p className="mt-4 text-[13px] uppercase tracking-[0.1em] text-[#6B7280]">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
