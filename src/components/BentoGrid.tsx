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
  category: string;
  title: string;
  description: string;
  bullets: string[];
  icon: IconType;
  className: string;
};

const agents: Agent[] = [
  {
    href: "/recepta",
    tag: "FLAGSHIP",
    category: "VOICE AI",
    title: "Recepta — AI Phone Receptionist",
    description:
      "Answers your business calls 24/7. Collects caller details, determines urgency, sends you an instant summary. Never miss a customer.",
    bullets: [
      "24/7 call answering with AI voice",
      "Instant email summaries to your inbox",
      "Full call transcripts and analytics dashboard",
    ],
    icon: "receptionist",
    className: "md:col-span-2",
  },
  {
    href: "/agents#project-manager",
    tag: "AVAILABLE NOW",
    category: "PLANNING",
    title: "AI Project Manager",
    description:
      "Strategic planning, task delegation, progress tracking. Your AI PM coordinates everything so you focus on the vision.",
    bullets: [
      "Automated task tracking and delegation",
      "Progress reports and milestone alerts",
      "Resource planning and timeline management",
    ],
    icon: "pm",
    className: "md:col-span-1",
  },
  {
    href: "/agents#custom-dev",
    tag: "AVAILABLE NOW",
    category: "BESPOKE",
    title: "Custom AI App Development",
    description:
      "Bespoke AI-powered applications built to your specification. Mobile apps, web platforms, dashboards.",
    bullets: [
      "Native iOS and Android apps",
      "Web dashboards and admin portals",
      "API integrations with your existing tools",
    ],
    icon: "custom-dev",
    className: "md:col-span-2",
  },
  {
    href: "/agents#lead-generation",
    tag: "AVAILABLE NOW",
    category: "SALES",
    title: "AI Lead Generation",
    description:
      "Contacts your leads within 10 seconds. Qualifies, books appointments, follows up automatically.",
    bullets: [
      "10-second response to form submissions",
      "Automated calendar booking",
      "Multi-channel follow-up (call, SMS, email)",
    ],
    icon: "lead-gen",
    className: "md:col-span-1",
  },
  {
    href: "/agents#support",
    tag: "AVAILABLE NOW",
    category: "CHATBOT",
    title: "AI Customer Support",
    description:
      "24/7 chatbot on your website and WhatsApp, trained on your knowledge base.",
    bullets: [
      "Trained on your FAQ and knowledge base",
      "WhatsApp and website widget deployment",
      "Seamless human handoff when needed",
    ],
    icon: "support",
    className: "md:col-span-1",
  },
  {
    href: "/agents#automation",
    tag: "AVAILABLE NOW",
    category: "OPS",
    title: "Workflow Automation",
    description:
      "Connects your tools, eliminates repetitive admin. Invoice processing, data entry, report generation.",
    bullets: [
      "CRM, email, and calendar synchronisation",
      "Automated invoice processing",
      "Custom reporting and data pipelines",
    ],
    icon: "automation",
    className: "md:col-span-1",
  },
  {
    href: "/agents#consulting",
    tag: "AVAILABLE NOW",
    category: "STRATEGY",
    title: "AI Consulting & Strategy",
    description:
      "We audit your operations, identify where AI saves money, and build a roadmap.",
    bullets: [
      "Full operational AI audit",
      "ROI-focused implementation roadmap",
      "Ongoing strategy advisory",
    ],
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
              <div className="flex flex-col items-start gap-3">
                <p className="agent-tag text-[12px] font-medium uppercase tracking-[0.15em]">
                  {a.tag}
                </p>
                <span className="category-badge">{a.category}</span>
              </div>
              <AgentIcon type={a.icon} />
            </div>
            <h3 className="agent-title mt-6 text-[24px] font-semibold tracking-[-0.01em] leading-tight">
              {a.title}
            </h3>
            <p className="agent-body mt-4 text-[16px] leading-[1.7]">
              {a.description}
            </p>
            <ul className="mt-4 space-y-2">
              {a.bullets.map((b) => (
                <li key={b} className="agent-bullet">
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
