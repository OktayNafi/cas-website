"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  { label: "Discovery", desc: "We audit your workflows and find where AI creates the most value." },
  { label: "Design", desc: "We architect the AI agent — data flows, integrations, user experience." },
  { label: "Build", desc: "We develop, test, and iterate until it performs flawlessly." },
  { label: "Deploy", desc: "We launch into production and monitor. Ongoing support included." },
];

export default function ProcessSteps() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
      {steps.map((step, i) => (
        <motion.div
          key={step.label}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: i * 0.25, ease: "easeOut" }}
          className="relative flex flex-col items-center text-center"
        >
          {/* Huge outlined number — positioned behind content */}
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.5, delay: i * 0.25 + 0.1, ease: "easeOut" }}
            className="text-[96px] sm:text-[120px] lg:text-[160px] leading-none select-none"
            style={{
              fontWeight: 900,
              WebkitTextStroke: "2px #0FF0A0",
              color: "transparent",
              opacity: 0.2,
            }}
          >
            0{i + 1}
          </motion.span>

          {/* Title overlapping the number */}
          <h3 className="text-lg font-bold text-white -mt-8 sm:-mt-10 lg:-mt-14 mb-3 relative z-10">
            {step.label}
          </h3>
          <p className="text-sm text-white/35 leading-relaxed max-w-[220px] relative z-10">
            {step.desc}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
