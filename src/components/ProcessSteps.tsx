"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    icon: "🔍",
    title: "Discover",
    body: "We audit your business and identify where AI delivers the highest ROI.",
  },
  {
    num: "02",
    icon: "✏️",
    title: "Design",
    body: "We architect the solution — data flows, integrations, user experience.",
  },
  {
    num: "03",
    icon: "⚙️",
    title: "Build",
    body: "Our engineering team builds, tests, and deploys. Typical delivery: under 8 weeks.",
  },
  {
    num: "04",
    icon: "🛡️",
    title: "Support",
    body: "Ongoing maintenance, monitoring, and iteration. Your AI gets smarter over time.",
  },
];

export default function ProcessSteps() {
  return (
    <div className="relative">
      {/* Animated horizontal copper rule connecting the four step numbers
          (desktop only). Aligned to the vertical centre of the 72px numerals. */}
      <motion.div
        aria-hidden="true"
        className="hidden md:block absolute left-0 right-0 h-px origin-left"
        style={{ top: 64, background: "#B87333" }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Vertical copper rule for mobile */}
      <motion.div
        aria-hidden="true"
        className="md:hidden absolute left-4 top-0 bottom-0 w-px origin-top"
        style={{ background: "#B87333" }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 relative">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="pl-12 md:pl-0"
          >
            {/* Icon — emoji at 32px, sits above the numeral on white plate so
                it covers the connecting copper line cleanly */}
            <div
              className="inline-flex items-center justify-center"
              style={{
                width: 48,
                height: 48,
                fontSize: 28,
                lineHeight: 1,
                background: "#FFFFFF",
                border: "1px solid #EBEBEB",
                borderRadius: 2,
              }}
              aria-hidden="true"
            >
              <span>{s.icon}</span>
            </div>

            <div
              className="mt-4 text-[72px] font-extrabold text-[#0A0A0A] leading-none"
              style={{ letterSpacing: "-0.03em" }}
            >
              {s.num}
            </div>
            <div className="mt-6 md:mt-8">
              <p className="text-[12px] uppercase tracking-[0.15em] text-[#6B7280] font-medium">
                {s.title}
              </p>
              <p className="mt-3 text-[16px] text-[#1F2937] leading-[1.7] max-w-xs">
                {s.body}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
