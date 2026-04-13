import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Lightbulb, Handshake } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Company AI Solutions is a UK-based AI implementation company. We build custom AI agents for mid-size businesses.",
};

const values = [
  {
    icon: Target,
    title: "Results First",
    desc: "Every solution is measured by real business impact, not technical novelty.",
  },
  {
    icon: Lightbulb,
    title: "Practical Innovation",
    desc: "We use proven, production-ready AI. If it's not reliable enough for your customers, we don't ship it.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    desc: "We build, deploy, and maintain. You're not left with a report and a handshake.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl mb-20">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight gradient-text">
                About Company AI Solutions
              </h1>
              <p className="mt-6 text-lg text-white/40 leading-relaxed">
                We&apos;re a UK-based AI implementation company. We build custom
                AI agents for mid-size businesses — from phone receptionists to
                full automation suites.
              </p>
            </div>
          </Reveal>

          {/* Story */}
          <div className="grid lg:grid-cols-2 gap-16 mb-28">
            <Reveal>
              <div>
                <h2 className="text-xl font-bold text-white tracking-tight mb-5">
                  Our story
                </h2>
                <div className="space-y-4 text-sm text-white/40 leading-relaxed">
                  <p>
                    Company AI Solutions was founded with a simple observation:
                    most businesses know AI could help them, but they don&apos;t
                    know where to start, who to trust, or how to implement it
                    without disrupting what already works.
                  </p>
                  <p>
                    We started by building Recepta — an AI phone receptionist for
                    healthcare clinics losing patients to missed calls. The
                    results were immediate. That success led us to expand into a
                    full suite of custom AI agents: lead generation, support,
                    workflow automation, bespoke development, and strategic
                    consulting.
                  </p>
                  <p>
                    Today we work with businesses across the UK, from private
                    clinics to growing startups. Every agent we build is
                    custom-designed for the client&apos;s specific workflow.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <h2 className="text-xl font-bold text-white tracking-tight mb-5">
                  Our approach
                </h2>
                <div className="space-y-4 text-sm text-white/40 leading-relaxed">
                  <p>
                    We don&apos;t believe in AI for AI&apos;s sake. Every project
                    starts with understanding your business — your workflows,
                    pain points, and goals. Then we identify where AI creates the
                    most value and build a solution that integrates seamlessly.
                  </p>
                  <p>
                    We handle everything: design, development, deployment, and
                    ongoing maintenance. You don&apos;t need a technical team or
                    AI expertise. You need results — that&apos;s what we deliver.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Values */}
          <Reveal>
            <h2 className="text-xl font-bold text-white tracking-tight mb-10">
              What we stand for
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-5 mb-28">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="rounded-2xl glass glass-hover p-8 h-full">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5">
                    <v.icon size={20} />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{v.title}</h3>
                  <p className="text-sm text-white/35 leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Company Info */}
          <Reveal>
            <div className="rounded-2xl glass p-10">
              <h2 className="text-xl font-bold text-white tracking-tight mb-6">
                Company information
              </h2>
              <div className="grid sm:grid-cols-2 gap-8 text-sm">
                <div className="space-y-4">
                  <div>
                    <p className="text-white/25 text-xs mb-0.5">Registered Name</p>
                    <p className="text-white/60">Company AI Solutions Ltd</p>
                  </div>
                  <div>
                    <p className="text-white/25 text-xs mb-0.5">Jurisdiction</p>
                    <p className="text-white/60">England & Wales</p>
                  </div>
                  <div>
                    <p className="text-white/25 text-xs mb-0.5">Email</p>
                    <p className="text-white/60">
                      <a href="mailto:info@companyaisolutions.co.uk" className="hover:text-highlight transition-colors">
                        info@companyaisolutions.co.uk
                      </a>
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-white/25 text-xs mb-0.5">Company Type</p>
                    <p className="text-white/60">Private Limited Company (Ltd)</p>
                  </div>
                  <div>
                    <p className="text-white/25 text-xs mb-0.5">Data Protection</p>
                    <p className="text-white/60">Registered with the ICO</p>
                  </div>
                  <div>
                    <p className="text-white/25 text-xs mb-0.5">Website</p>
                    <p className="text-white/60">companyaisolutions.co.uk</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Let&apos;s talk about what AI can do for you
            </h2>
            <p className="mt-4 text-sm text-white/30 max-w-md mx-auto">
              No pressure, no jargon. Just a conversation about your business.
            </p>
            <Link
              href="/contact"
              className="btn-primary mt-10"
            >
              Book a Free Consultation
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
