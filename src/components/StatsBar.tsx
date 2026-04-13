"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 7, suffix: "", label: "AI AGENTS" },
  { value: 24, suffix: "/7", label: "UPTIME" },
  { value: 2, suffix: "", label: "MONTHS DELIVERY" },
  { value: 100, suffix: "%", label: "UK BUILT" },
];

function Counter({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 1500;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="text-center"
        >
          <div
            className="text-[80px] sm:text-[80px] lg:text-[80px] leading-none"
            style={{
              color: "#0FF0A0",
              fontWeight: 900,
              textShadow: "0 0 30px rgba(15, 240, 160, 0.3)",
            }}
          >
            <Counter target={stat.value} suffix={stat.suffix} inView={inView} />
          </div>
          <p className="mt-3 text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-white/40">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
