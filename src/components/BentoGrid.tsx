"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AgentIcon from "./AgentIcon";

type IconType =
  | "receptionist"
  | "pm"
  | "custom-dev"
  | "lead-gen"
  | "support"
  | "automation"
  | "consulting";

type Agent = {
  href: string;
  tag: string;
  title: string;
  description: string;
  icon: IconType;
  className: string;
};

const agents: Agent[] = [
  {
    href: "/recepta",
    tag: "FLAGSHIP",
    title: "Recepta — AI Phone Receptionist",
    description:
      "Answers your business calls 24/7. Collects caller details, determines urgency, sends you an instant summary. Never miss a customer.",
    icon: "receptionist",
    className: "md:col-span-2",
  },
  {
    href: "/agents#project-manager",
    tag: "AVAILABLE NOW",
    title: "AI Project Manager",
    description:
      "Strategic planning, task delegation, progress tracking. Your AI PM coordinates everything so you focus on the vision.",
    icon: "pm",
    className: "md:col-span-1",
  },
  {
    href: "/agents#custom-dev",
    tag: "AVAILABLE NOW",
    title: "Custom AI App Development",
    description:
      "Bespoke AI-powered applications built to your specification. Mobile apps, web platforms, dashboards.",
    icon: "custom-dev",
    className: "md:col-span-2",
  },
  {
    href: "/agents#lead-generation",
    tag: "AVAILABLE NOW",
    title: "AI Lead Generation",
    description:
      "Contacts your leads within 10 seconds. Qualifies, books appointments, follows up automatically.",
    icon: "lead-gen",
    className: "md:col-span-1",
  },
  {
    href: "/agents#support",
    tag: "AVAILABLE NOW",
    title: "AI Customer Support",
    description:
      "24/7 chatbot on your website and WhatsApp, trained on your knowledge base.",
    icon: "support",
    className: "md:col-span-1",
  },
  {
    href: "/agents#automation",
    tag: "AVAILABLE NOW",
    title: "Workflow Automation",
    description:
      "Connects your tools, eliminates repetitive admin. Invoice processing, data entry, report generation.",
    icon: "automation",
    className: "md:col-span-1",
  },
  {
    href: "/agents#consulting",
    tag: "AVAILABLE NOW",
    title: "AI Consulting & Strategy",
    description:
      "We audit your operations, identify where AI saves money, and build a roadmap.",
    icon: "consulting",
    className: "md:col-span-1",
  },
];

export default function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {agents.map((a, i) => (
        <motion.div
          key={a.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className={a.className}
        >
          <Link href={a.href} className="agent-card block group">
            <div className="flex items-start justify-between gap-4">
              <p className="agent-tag text-[12px] font-medium uppercase tracking-[0.15em]">
                {a.tag}
              </p>
              <AgentIcon type={a.icon} />
            </div>
            <h3 className="agent-title mt-6 text-[24px] font-semibold tracking-[-0.01em] leading-tight">
              {a.title}
            </h3>
            <p className="agent-body mt-4 text-[16px] leading-[1.7]">
              {a.description}
            </p>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
