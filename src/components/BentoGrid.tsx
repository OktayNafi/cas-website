"use client";

import { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Phone,
  Users,
  Headphones,
  Workflow,
  Code,
  BrainCircuit,
  ClipboardList,
  ArrowUpRight,
} from "lucide-react";

const agents = [
  {
    icon: Phone,
    title: "Recepta",
    subtitle: "AI Receptionist",
    description:
      "Answers calls 24/7, books appointments, handles enquiries. Sounds natural. Never takes a day off. Already live and deployed.",
    href: "/recepta",
    live: true,
    price: "Custom pricing",
  },
  {
    icon: Users,
    title: "Lead Generation",
    subtitle: "AI Prospecting Agent",
    description:
      "Automated outreach that finds, qualifies, and engages your ideal customers across channels.",
    href: "/agents#lead-generation",
    price: "Custom pricing",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    subtitle: "AI Support Agent",
    description:
      "Resolves tickets, answers FAQs, escalates intelligently. Response times drop from hours to seconds.",
    href: "/agents#customer-support",
    price: "Custom pricing",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    subtitle: "AI Process Agent",
    description:
      "Connects your tools, eliminates manual tasks. If it's repetitive, we automate it.",
    href: "/agents#workflow",
    price: "Custom pricing",
  },
  {
    icon: Code,
    title: "Custom AI Development",
    subtitle: "Bespoke Agents",
    description:
      "Full-stack AI applications built to your exact specifications. From concept to production. Currently building for Mediwell Clinic.",
    href: "/agents#custom-dev",
    price: "Custom pricing",
  },
  {
    icon: ClipboardList,
    title: "AI Project Manager",
    subtitle: "AI Coordination Agent",
    description:
      "Strategic planning, task delegation, progress tracking, and decision-making. Your AI PM coordinates everything — so you focus on the vision.",
    href: "/agents#project-manager",
    price: "Included with retainers",
  },
  {
    icon: BrainCircuit,
    title: "Consulting & Strategy",
    subtitle: "AI Advisory",
    description:
      "Expert guidance on where AI fits in your business and how to get there.",
    href: "/agents#consulting",
    price: "Custom pricing",
  },
];

function Card({
  agent,
  index,
}: {
  agent: (typeof agents)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;
    el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01,1.01,1.01)`;
    el.style.setProperty("--mouse-x", `${(x / rect.width) * 100}%`);
    el.style.setProperty("--mouse-y", `${(y / rect.height) * 100}%`);
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={agent.href} className="group block h-full">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative h-full rounded-2xl agent-card p-7 sm:p-8 overflow-hidden"
          style={{ transition: "transform 0.2s ease-out" }}
        >
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-5">
              <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                <agent.icon size={22} />
              </div>
              <div className="flex items-center gap-2">
                {agent.live && (
                  <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-highlight bg-highlight/10 rounded-full">
                    <span className="w-1.5 h-1.5 bg-highlight rounded-full animate-pulse" />
                    Live
                  </span>
                )}
                <ArrowUpRight
                  size={16}
                  className="text-white/15 group-hover:text-white/40 transition-colors duration-300"
                />
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mb-0.5">
              {agent.title}
            </h3>
            <p className="text-xs text-accent/70 font-medium mb-3">
              {agent.subtitle}
            </p>
            <p className="text-sm text-white/35 leading-relaxed mb-4">
              {agent.description}
            </p>
            <p className="text-xs font-medium text-highlight/70">
              {agent.price}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function BentoGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto">
      {/* Row 1: Recepta (2 cols, taller) + Lead Gen + Customer Support */}
      <div className="sm:col-span-2 sm:row-span-2">
        <Card agent={agents[0]} index={0} />
      </div>
      <div>
        <Card agent={agents[1]} index={1} />
      </div>
      <div>
        <Card agent={agents[2]} index={2} />
      </div>

      {/* Row 1 continued: Workflow + Project Manager fill under Lead/Support */}
      <div>
        <Card agent={agents[3]} index={3} />
      </div>
      <div>
        <Card agent={agents[5]} index={4} />
      </div>

      {/* Row 2: Custom AI Dev (2 cols) + Consulting */}
      <div className="sm:col-span-2">
        <Card agent={agents[4]} index={5} />
      </div>
      <div className="sm:col-span-2 lg:col-span-2">
        <Card agent={agents[6]} index={6} />
      </div>
    </div>
  );
}
