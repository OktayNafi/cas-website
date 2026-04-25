"use client";

import { motion } from "framer-motion";
import { CountUp } from "./CountUp";

type Stat = {
  value: React.ReactNode;
  label: string;
};

const stats: Stat[] = [
  { value: <CountUp end={7} />, label: "AI Agents" },
  { value: "24/7", label: "Uptime" },
  { value: <CountUp end={8} prefix="<" />, label: "Week Delivery" },
  { value: <CountUp end={100} suffix="%" />, label: "UK Built" },
];

export default function StatsBar() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="text-left"
        >
          <div
            className="text-[56px] font-extrabold leading-none"
            style={{ letterSpacing: "-0.03em", color: "#B87333" }}
          >
            {stat.value}
          </div>
          <p className="mt-4 text-[13px] uppercase tracking-[0.1em] text-[#6B7280]">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
