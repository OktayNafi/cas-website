import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Users,
  Headphones,
  Workflow,
  Code,
  BrainCircuit,
  ClipboardList,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "AI Agents",
  description:
    "Custom AI agents for every business need. From AI receptionists to full-stack applications — explore the agents we build.",
};

const agents = [
  {
    id: "recepta",
    icon: Phone,
    title: "Recepta — AI Receptionist",
    badge: "Live",
    price: "From £100/mo",
    setup: "£999 one-time setup",
    summary:
      "An AI phone receptionist that answers calls 24/7, books appointments, handles enquiries, and routes calls. Deployed and live — our flagship product.",
    outcomes: [
      "95% reduction in missed calls",
      "30+ hours saved per week on admin",
      "24/7 coverage without extra staff",
      "Natural-sounding voice AI that callers trust",
    ],
    useCases: ["Medical clinics", "Law firms", "Estate agents", "Dental practices", "Any business with high call volume"],
    cta: { label: "Learn more about Recepta", href: "/recepta" },
  },
  {
    id: "lead-generation",
    icon: Users,
    title: "AI Lead Generation Agent",
    price: "From £200/mo",
    summary:
      "Automated prospecting that identifies, qualifies, and engages your ideal customers. We build AI pipelines that fill your CRM with warm leads across email, LinkedIn, and phone.",
    outcomes: [
      "3x increase in qualified pipeline",
      "80% reduction in manual prospecting time",
      "Personalised outreach at scale",
      "Multi-channel campaign automation",
    ],
    useCases: ["B2B SaaS", "Agencies", "Professional services", "Recruitment", "Any business doing outbound sales"],
  },
  {
    id: "customer-support",
    icon: Headphones,
    title: "AI Customer Support Agent",
    price: "From £100/mo",
    summary:
      "Intelligent support agents that resolve Tier 1 tickets, answer FAQs, and seamlessly escalate complex issues. Integrates with your existing helpdesk.",
    outcomes: [
      "Response times from hours to seconds",
      "70% of tickets resolved without human intervention",
      "Multi-language support out of the box",
      "Sentiment analysis and customer insights",
    ],
    useCases: ["E-commerce", "SaaS", "Subscription services", "Any business with a support queue"],
  },
  {
    id: "workflow",
    icon: Workflow,
    title: "Workflow Automation Agent",
    price: "From £200/mo + project fee",
    summary:
      "We connect your tools, eliminate manual processes, and build end-to-end automated workflows. Document processing, data entry, invoice handling, reporting — if it's repetitive, we automate it.",
    outcomes: [
      "10-40 hours saved per week per team",
      "Zero manual data entry errors",
      "Integration across 200+ platforms",
      "Real-time monitoring and error handling",
    ],
    useCases: ["Operations teams", "Finance departments", "HR", "Any team drowning in repetitive tasks"],
  },
  {
    id: "custom-dev",
    icon: Code,
    title: "Custom AI Application Development",
    price: "From £5,000",
    summary:
      "Bespoke AI applications built from scratch. Whether you need a custom dashboard, an internal tool, or a customer-facing product, we design, build, and deploy end to end. Currently building for Mediwell Clinic.",
    outcomes: [
      "Full-stack AI applications, production-ready",
      "Custom LLM fine-tuning and deployment",
      "API development and third-party integrations",
      "Post-launch support and iteration",
    ],
    useCases: ["Businesses with unique workflows", "Startups building AI-native products", "Companies needing internal AI tools"],
  },
  {
    id: "project-manager",
    icon: ClipboardList,
    title: "AI Project Manager",
    price: "Included with retainers",
    summary:
      "Strategic planning, task delegation, progress tracking, and decision-making. Your AI PM coordinates everything — so you focus on the vision. Available as part of any retainer engagement.",
    outcomes: [
      "Automated project planning and task breakdown",
      "Real-time progress tracking and status reporting",
      "Intelligent task delegation and resource allocation",
      "Decision-support with data-driven recommendations",
    ],
    useCases: ["Teams managing multiple AI initiatives", "Companies on retainer engagements", "Leadership needing project visibility"],
  },
  {
    id: "consulting",
    icon: BrainCircuit,
    title: "AI Consulting & Strategy",
    price: "From £500",
    summary:
      "Not sure where to start? We provide expert guidance on identifying the highest-impact opportunities for AI in your business, and build a practical roadmap to get you there.",
    outcomes: [
      "Clear AI readiness assessment",
      "Prioritised opportunity map",
      "Technology stack recommendations",
      "ROI modelling and business case",
    ],
    useCases: ["Businesses exploring AI for the first time", "Companies wanting to scale existing AI", "Leadership teams needing an AI strategy"],
  },
];

export default function AgentsPage() {
  return (
    <>
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mb-24">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight gradient-text">
                AI agents we build
              </h1>
              <p className="mt-6 text-lg text-white/40 leading-relaxed">
                Every agent is custom-built for your business. We don&apos;t
                resell off-the-shelf tools — we design, build, and deploy AI
                that integrates into the way you actually work.
              </p>
            </div>
          </Reveal>

          <div className="space-y-24">
            {agents.map((agent, i) => (
              <Reveal key={agent.id} delay={0.05}>
                <div
                  id={agent.id}
                  className="scroll-mt-24 grid lg:grid-cols-5 gap-10 items-start"
                >
                  {/* Info — 3 cols */}
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                        <agent.icon size={20} />
                      </div>
                      {agent.badge && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-highlight bg-highlight/10 rounded-full">
                          <span className="w-1.5 h-1.5 bg-highlight rounded-full animate-pulse" />
                          {agent.badge}
                        </span>
                      )}
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {agent.title}
                    </h2>
                    <p className="mt-4 text-white/40 leading-relaxed">
                      {agent.summary}
                    </p>

                    <div className="mt-5 flex items-baseline gap-3">
                      <span className="text-sm font-semibold text-highlight">
                        {agent.price}
                      </span>
                      {agent.setup && (
                        <span className="text-xs text-white/25">
                          + {agent.setup}
                        </span>
                      )}
                    </div>

                    {agent.cta && (
                      <Link
                        href={agent.cta.href}
                        className="inline-flex items-center mt-6 text-sm font-medium text-accent hover:text-accent-light transition-colors duration-200"
                      >
                        {agent.cta.label}
                        <ArrowRight size={14} className="ml-1.5" />
                      </Link>
                    )}
                  </div>

                  {/* Details — 2 cols */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="rounded-2xl glass p-6">
                      <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">
                        Expected Outcomes
                      </h3>
                      <ul className="space-y-2.5">
                        {agent.outcomes.map((o) => (
                          <li key={o} className="flex items-start gap-2.5 text-sm text-white/50">
                            <CheckCircle2 size={14} className="text-highlight flex-shrink-0 mt-0.5" />
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl glass p-6">
                      <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">
                        Ideal For
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {agent.useCases.map((uc) => (
                          <span
                            key={uc}
                            className="px-2.5 py-1 text-xs text-white/40 bg-white/5 rounded-lg"
                          >
                            {uc}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {i < agents.length - 1 && (
                    <div className="lg:col-span-5 border-t border-white/5" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Need something we haven&apos;t listed?
            </h2>
            <p className="mt-4 text-base text-white/30 max-w-xl mx-auto">
              If a process can be improved with AI, we can build it. Tell us
              what you need.
            </p>
            <Link
              href="/contact"
              className="btn-primary mt-10"
            >
              Request a Custom Quote
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
