"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  { icon: Search, label: "Discovery", desc: "We audit your workflows and find where AI creates the most value." },
  { icon: PenTool, label: "Design", desc: "We architect the AI agent — data flows, integrations, user experience." },
  { icon: Code2, label: "Build", desc: "We develop, test, and iterate until it performs flawlessly." },
  { icon: Rocket, label: "Deploy", desc: "We launch into production and monitor. Ongoing support included." },
];

export default function ProcessSteps() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
      {steps.map((step, i) => (
        <motion.div
          key={step.label}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
          className="relative"
        >
          {/* Connecting line */}
          {i < steps.length - 1 && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 + 0.3 }}
              className="hidden lg:block absolute top-7 left-[calc(50%+24px)] right-0 h-px bg-gradient-to-r from-white/10 to-white/5 origin-left"
            />
          )}

          <div className="relative z-10 flex flex-col items-center text-center px-4">
            <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center mb-4">
              <step.icon size={22} className="text-accent" />
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-highlight mb-2">
              0{i + 1}
            </span>
            <h3 className="text-base font-semibold text-white mb-2">{step.label}</h3>
            <p className="text-sm text-white/40 leading-relaxed max-w-[200px]">{step.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
