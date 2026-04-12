"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  Phone,
  Users,
  Headphones,
  Workflow,
  Code,
  BrainCircuit,
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
    price: "From £100/mo",
    size: "large",
  },
  {
    icon: Users,
    title: "Lead Generation",
    subtitle: "AI Prospecting Agent",
    description:
      "Automated outreach that finds, qualifies, and engages your ideal customers across channels.",
    href: "/agents#lead-generation",
    price: "From £200/mo",
    size: "medium",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    subtitle: "AI Support Agent",
    description:
      "Resolves tickets, answers FAQs, escalates intelligently. Response times drop from hours to seconds.",
    href: "/agents#customer-support",
    price: "From £100/mo",
    size: "medium",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    subtitle: "AI Process Agent",
    description:
      "Connects your tools, eliminates manual tasks. If it's repetitive, we automate it.",
    href: "/agents#workflow",
    price: "From £200/mo",
    size: "medium",
  },
  {
    icon: Code,
    title: "Custom AI Development",
    subtitle: "Bespoke Agents",
    description:
      "Full-stack AI applications built to your exact specifications. From concept to production. Currently building for Mediwell Clinic.",
    href: "/agents#custom-dev",
    price: "From £5,000",
    size: "large",
  },
  {
    icon: BrainCircuit,
    title: "Consulting & Strategy",
    subtitle: "AI Advisory",
    description:
      "Expert guidance on where AI fits in your business and how to get there.",
    href: "/agents#consulting",
    price: "From £500",
    size: "small",
  },
];

function Card({
  agent,
  index,
}: {
  agent: (typeof agents)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link href={agent.href} className="group block h-full">
        <div className="relative h-full rounded-2xl glass glass-hover p-7 sm:p-8 overflow-hidden">
          {/* Glow on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
          </div>

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
                  className="text-white/20 group-hover:text-white/50 transition-colors duration-300"
                />
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mb-0.5">
              {agent.title}
            </h3>
            <p className="text-xs text-accent/70 font-medium mb-3">
              {agent.subtitle}
            </p>
            <p className="text-sm text-white/40 leading-relaxed mb-4">
              {agent.description}
            </p>
            <p className="text-xs font-medium text-highlight/80">
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Row 1: Large (2 cols) + Medium + Medium */}
      <div className="sm:col-span-2">
        <Card agent={agents[0]} index={0} />
      </div>
      <div>
        <Card agent={agents[1]} index={1} />
      </div>
      <div>
        <Card agent={agents[2]} index={2} />
      </div>

      {/* Row 2: Medium + Large (2 cols) + Small */}
      <div>
        <Card agent={agents[3]} index={3} />
      </div>
      <div className="sm:col-span-2">
        <Card agent={agents[4]} index={4} />
      </div>
      <div>
        <Card agent={agents[5]} index={5} />
      </div>
    </div>
  );
}
