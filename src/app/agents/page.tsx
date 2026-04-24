import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "AI Agents",
  description:
    "Custom AI agents for every business need. From AI receptionists to full-stack applications — explore the agents we build.",
};

type Agent = {
  id: string;
  tag: string;
  title: string;
  price: string;
  setup?: string;
  summary: string;
  outcomes: string[];
  useCases: string[];
  cta?: { label: string; href: string };
};

const agents: Agent[] = [
  {
    id: "recepta",
    tag: "FLAGSHIP",
    title: "Recepta — AI Phone Receptionist",
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
    useCases: [
      "Medical clinics",
      "Law firms",
      "Estate agents",
      "Dental practices",
      "High call volume",
    ],
    cta: { label: "Learn more about Recepta", href: "/recepta" },
  },
  {
    id: "project-manager",
    tag: "AVAILABLE NOW",
    title: "AI Project Manager",
    price: "Included with retainers",
    summary:
      "Strategic planning, task delegation, progress tracking, decision-making. Your AI PM coordinates everything so you focus on the vision.",
    outcomes: [
      "Automated project planning and task breakdown",
      "Real-time progress tracking and status reporting",
      "Intelligent task delegation and resource allocation",
      "Decision-support with data-driven recommendations",
    ],
    useCases: [
      "Teams managing multiple AI initiatives",
      "Companies on retainer engagements",
      "Leadership needing project visibility",
    ],
  },
  {
    id: "custom-dev",
    tag: "AVAILABLE NOW",
    title: "Custom AI Application Development",
    price: "From £5,000",
    summary:
      "Bespoke AI applications built from scratch. Custom dashboards, internal tools, customer-facing products — designed, built, and deployed end to end. Currently building for Mediwell Clinic.",
    outcomes: [
      "Full-stack AI applications, production-ready",
      "Custom LLM fine-tuning and deployment",
      "API development and third-party integrations",
      "Post-launch support and iteration",
    ],
    useCases: [
      "Businesses with unique workflows",
      "Startups building AI-native products",
      "Internal AI tools",
    ],
  },
  {
    id: "lead-generation",
    tag: "AVAILABLE NOW",
    title: "AI Lead Generation",
    price: "From £200/mo",
    summary:
      "Automated prospecting that identifies, qualifies, and engages your ideal customers. AI pipelines that fill your CRM with warm leads across email, LinkedIn, and phone.",
    outcomes: [
      "3x increase in qualified pipeline",
      "80% reduction in manual prospecting time",
      "Personalised outreach at scale",
      "Multi-channel campaign automation",
    ],
    useCases: [
      "B2B SaaS",
      "Agencies",
      "Professional services",
      "Recruitment",
      "Outbound sales",
    ],
  },
  {
    id: "support",
    tag: "AVAILABLE NOW",
    title: "AI Customer Support",
    price: "From £100/mo",
    summary:
      "Intelligent support agents that resolve Tier 1 tickets, answer FAQs, and seamlessly escalate complex issues. Integrates with your existing helpdesk.",
    outcomes: [
      "Response times from hours to seconds",
      "70% of tickets resolved without human intervention",
      "Multi-language support out of the box",
      "Sentiment analysis and customer insights",
    ],
    useCases: [
      "E-commerce",
      "SaaS",
      "Subscription services",
      "Any support queue",
    ],
  },
  {
    id: "automation",
    tag: "AVAILABLE NOW",
    title: "Workflow Automation",
    price: "From £200/mo + project fee",
    summary:
      "We connect your tools, eliminate manual processes, and build end-to-end automated workflows. Document processing, data entry, invoice handling, reporting.",
    outcomes: [
      "10–40 hours saved per week per team",
      "Zero manual data entry errors",
      "Integration across 200+ platforms",
      "Real-time monitoring and error handling",
    ],
    useCases: [
      "Operations teams",
      "Finance departments",
      "HR",
      "Teams drowning in repetitive tasks",
    ],
  },
  {
    id: "consulting",
    tag: "AVAILABLE NOW",
    title: "AI Consulting & Strategy",
    price: "From £500",
    summary:
      "Not sure where to start? Expert guidance on identifying the highest-impact opportunities for AI in your business, and a practical roadmap to get you there.",
    outcomes: [
      "Clear AI readiness assessment",
      "Prioritised opportunity map",
      "Technology stack recommendations",
      "ROI modelling and business case",
    ],
    useCases: [
      "Businesses exploring AI for the first time",
      "Companies scaling existing AI",
      "Leadership needing AI strategy",
    ],
  },
];

export default function AgentsPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-0 py-24 md:py-32">
          <Reveal>
            <p className="eyebrow">What We Build</p>
            <h1 className="section-title mt-4 max-w-3xl">
              AI agents we build.
            </h1>
            <p className="mt-6 text-[20px] text-[#1F2937] max-w-2xl leading-[1.7]">
              Every agent is custom-built for your business. We don&apos;t
              resell off-the-shelf tools — we design, build, and deploy AI
              that integrates into the way you actually work.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-dotted">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-0 py-20 md:py-32">
          <div className="space-y-16">
            {agents.map((agent) => (
              <Reveal key={agent.id}>
                <article
                  id={agent.id}
                  className="scroll-mt-24 bg-white border border-[#E5E7EB] p-8 md:p-12"
                  style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
                >
                  <div className="grid lg:grid-cols-5 gap-10">
                    <div className="lg:col-span-3">
                      <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-[#6B7280]">
                        {agent.tag}
                      </p>
                      <h2 className="mt-4 text-[28px] md:text-[32px] font-semibold text-[#0A0A0A] tracking-[-0.01em] leading-tight">
                        {agent.title}
                      </h2>
                      <p className="mt-5 text-[17px] text-[#1F2937] leading-[1.7]">
                        {agent.summary}
                      </p>
                      <p className="mt-6 text-[15px] text-[#0A0A0A] font-medium">
                        {agent.price}
                        {agent.setup ? (
                          <span className="text-[#6B7280] font-normal">
                            {" "}
                            · {agent.setup}
                          </span>
                        ) : null}
                      </p>
                      {agent.cta && (
                        <Link
                          href={agent.cta.href}
                          className="link-underline inline-block mt-6 text-[15px] text-[#0A0A0A]"
                        >
                          {agent.cta.label} →
                        </Link>
                      )}
                    </div>

                    <div className="lg:col-span-2 space-y-8">
                      <div>
                        <p className="eyebrow">Expected Outcomes</p>
                        <ul className="mt-4 space-y-2">
                          {agent.outcomes.map((o) => (
                            <li
                              key={o}
                              className="text-[15px] text-[#1F2937] leading-[1.6]"
                            >
                              — {o}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="eyebrow">Ideal For</p>
                        <p className="mt-4 text-[15px] text-[#1F2937] leading-[1.6]">
                          {agent.useCases.join(" · ")}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-[#E5E7EB]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-0 py-20 md:py-28">
          <Reveal>
            <h2 className="section-title max-w-3xl">
              Need something we haven&apos;t listed?
            </h2>
            <p className="mt-6 text-[18px] text-[#1F2937] max-w-xl leading-[1.7]">
              If a process can be improved with AI, we can build it. Tell us
              what you need.
            </p>
            <Link href="/contact" className="btn-primary mt-10">
              Request a Custom Quote
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
