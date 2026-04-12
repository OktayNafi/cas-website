import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";
import Reveal from "@/components/Reveal";
import BentoGrid from "@/components/BentoGrid";
import ProcessSteps from "@/components/ProcessSteps";
import HeroSceneLoader from "@/components/HeroSceneLoader";

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <HeroSceneLoader />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-32 sm:py-40">
          <Reveal>
            <h1 className="text-[clamp(3rem,7vw,6rem)] font-extrabold tracking-tight leading-[1.02] max-w-5xl">
              <span className="gradient-text">
                We build the AI your business actually needs.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-8 text-base sm:text-lg text-white/40 max-w-2xl leading-relaxed">
              Custom AI agents, integrated into your workflow, delivered by
              Company AI Solutions. From AI receptionists to bespoke
              automations — if a process can be improved with AI, we build it.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="btn-glow btn-pulse inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-navy-deep bg-highlight rounded-full hover:bg-highlight-dark transition-colors duration-200"
              >
                Request a Custom Quote
                <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link
                href="/agents"
                className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white/70 border border-white/10 rounded-full hover:bg-white/5 hover:border-white/20 transition-all duration-200"
              >
                See What We Build
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.45}>
            <p className="mt-14 text-[11px] text-white/20 flex items-center gap-1.5">
              <Lock size={10} />
              Powered by Company AI Solutions Ltd — Registered in England & Wales
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── WHAT WE DO ─── */}
      <section className="py-36 sm:py-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl space-y-2">
            {[
              "We audit your business.",
              "We design the AI.",
              "We build and deploy.",
            ].map((line, i) => (
              <Reveal key={line} delay={i * 0.12}>
                <p className="text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white/80">
                  {line}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BENTO GRID ─── */}
      <section className="pb-36 sm:pb-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                AI agents we build
              </h2>
              <p className="mt-3 text-sm text-white/30">
                Seven product lines. Infinite configurations. Every agent is
                custom-built for your business.
              </p>
            </div>
          </Reveal>
          <BentoGrid />
        </div>
      </section>

      {/* ─── HOW WE WORK ─── */}
      <section className="py-36 sm:py-44 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-24">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                How we work
              </h2>
              <p className="mt-3 text-sm text-white/30">
                From first call to live deployment in weeks, not months.
              </p>
            </div>
          </Reveal>
          <ProcessSteps />
        </div>
      </section>

      {/* ─── CASE STUDY TEASER ─── */}
      <section className="py-36 sm:py-44 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="relative rounded-3xl glass p-10 sm:p-16 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
              <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.08),transparent_70%)] pointer-events-none" />

              <div className="relative max-w-2xl">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-accent/70">
                  Active Project
                </span>
                <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Mediwell Clinic
                </h2>
                <p className="mt-1 text-sm text-white/30">
                  Private medical clinic — London, UK
                </p>
                <p className="mt-6 text-white/40 leading-relaxed">
                  Building a custom patient booking and video consultation app
                  for a private medical clinic in London. AI-powered scheduling,
                  payments, and doctor-patient video calls — all in one iOS app.
                  Case study coming on launch.
                </p>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center mt-8 text-sm font-medium text-accent hover:text-accent-light transition-colors duration-200"
                >
                  Learn more
                  <ArrowRight size={14} className="ml-1.5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="py-36 sm:py-44 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="relative rounded-3xl glass p-10 sm:p-16 text-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-highlight/3 via-transparent to-accent/3 pointer-events-none" />

              <div className="relative">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight max-w-2xl mx-auto">
                  Ready to build something?
                </h2>
                <p className="mt-4 text-base text-white/30 max-w-lg mx-auto">
                  Tell us what you need. We&apos;ll tell you how AI can solve it
                  — and build it for you.
                </p>
                <Link
                  href="/contact"
                  className="btn-glow btn-pulse inline-flex items-center mt-10 px-8 py-3.5 text-sm font-semibold text-navy-deep bg-highlight rounded-full hover:bg-highlight-dark transition-colors duration-200"
                >
                  Request a Custom Quote
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Company AI Solutions Ltd",
            description:
              "Custom AI agents for mid-size businesses. We build, deploy, and maintain AI systems.",
            url: "https://companyaisolutions.co.uk",
            email: "hello@companyaisolutions.co.uk",
            address: { "@type": "PostalAddress", addressCountry: "GB" },
            sameAs: ["https://www.linkedin.com/company/companyaisolutions"],
          }),
        }}
      />
    </>
  );
}
