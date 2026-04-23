"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Agent = {
  href: string;
  tag: string;
  title: string;
  description: string;
  className: string;
};

const agents: Agent[] = [
  {
    href: "/recepta",
    tag: "LIVE",
    title: "Recepta — AI Phone Receptionist",
    description:
      "Answers your business calls 24/7. Collects caller details, determines urgency, sends you an instant summary. Never miss a customer.",
    className: "md:col-span-2",
  },
  {
    href: "/agents#project-manager",
    tag: "INCLUDED WITH RETAINERS",
    title: "AI Project Manager",
    description:
      "Strategic planning, task delegation, progress tracking. Your AI PM coordinates everything so you focus on the vision.",
    className: "md:col-span-1",
  },
  {
    href: "/agents#custom-dev",
    tag: "ACTIVE PROJECT",
    title: "Custom AI App Development",
    description:
      "Bespoke AI-powered applications built to your specification. Mobile apps, web platforms, dashboards.",
    className: "md:col-span-2",
  },
  {
    href: "/agents#lead-generation",
    tag: "COMING SOON",
    title: "AI Lead Generation",
    description:
      "Contacts your leads within 10 seconds. Qualifies, books appointments, follows up automatically.",
    className: "md:col-span-1",
  },
  {
    href: "/agents#support",
    tag: "COMING SOON",
    title: "AI Customer Support",
    description:
      "24/7 chatbot on your website and WhatsApp, trained on your knowledge base.",
    className: "md:col-span-1",
  },
  {
    href: "/agents#automation",
    tag: "COMING SOON",
    title: "Workflow Automation",
    description:
      "Connects your tools, eliminates repetitive admin. Invoice processing, data entry, report generation.",
    className: "md:col-span-1",
  },
  {
    href: "/agents#consulting",
    tag: "AVAILABLE NOW",
    title: "AI Consulting & Strategy",
    description:
      "We audit your operations, identify where AI saves money, and build a roadmap.",
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
          <Link
            href={a.href}
            className="group block h-full bg-white border border-[#E5E7EB] p-10 transition-colors duration-300 hover:bg-[#0A0A0A]"
            style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
          >
            <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-[#6B7280] group-hover:text-white transition-colors duration-300">
              {a.tag}
            </p>
            <h3 className="mt-6 text-[24px] font-semibold text-[#0A0A0A] group-hover:text-white tracking-[-0.01em] leading-tight transition-colors duration-300">
              {a.title}
            </h3>
            <p className="mt-4 text-[16px] text-[#1F2937] group-hover:text-white leading-[1.7] transition-colors duration-300">
              {a.description}
            </p>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
