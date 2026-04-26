import Link from "next/link";
import Reveal from "@/components/Reveal";
import BentoGrid from "@/components/BentoGrid";
import ProcessSteps from "@/components/ProcessSteps";
import StatsBar from "@/components/StatsBar";
import QuoteForm from "@/components/QuoteForm";
import TechMarquee from "@/components/TechMarquee";

const trustIndicators = [
  { icon: "🇬🇧", label: "UK Built & Hosted" },
  { icon: "🔒", label: "GDPR Compliant" },
  { icon: "⚡", label: "<8 Week Delivery" },
  { icon: "🏢", label: "Companies House Registered" },
];

const caseStats = [
  { value: "11", label: "Medical Specialties" },
  { value: "30–40", label: "Daily Patients" },
  { value: "20 min", label: "Appointment Slots" },
  { value: "iOS", label: "Platform" },
];

const nextSteps = [
  "You submit your details",
  "We review within 24 hours",
  "We schedule a free 30-minute discovery call",
  "You receive a custom proposal with pricing",
];

function CopperDivider() {
  return (
    <div
      aria-hidden="true"
      style={{
        width: 80,
        height: 1,
        backgroundColor: "#B87333",
        margin: "0 auto",
      }}
    />
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="copper-glow-hero">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-0 min-h-[calc(100vh-4rem)] flex flex-col justify-center py-32 md:py-40">
          <Reveal y={20}>
            <p className="eyebrow">AI Implementation Company</p>
          </Reveal>

          <div className="mt-8 max-w-5xl">
            <Reveal delay={0.05} y={30}>
              <h1 className="hero-title">We build the AI</h1>
            </Reveal>
            <Reveal delay={0.2} y={30}>
              <h1 className="hero-title">your business</h1>
            </Reveal>
            <Reveal delay={0.35} y={30}>
              <h1 className="hero-title">actually needs.</h1>
            </Reveal>
          </div>

          <Reveal delay={0.55}>
            <p className="mt-10 text-[20px] text-[#1F2937] max-w-xl leading-[1.7]">
              Custom AI agents designed, built, and deployed for your workflow.
              From phone receptionists to patient booking apps — if it can be
              smarter, we build it.
            </p>
          </Reveal>

          <Reveal delay={0.7}>
            <div className="mt-12 flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-primary">
                Request a Quote
              </Link>
              <Link href="/case-studies" className="btn-secondary">
                See Our Work
              </Link>
            </div>
          </Reveal>

          {/* Trust indicators row */}
          <Reveal delay={0.85}>
            <div
              className="mt-12 grid grid-cols-2 sm:flex sm:flex-row sm:flex-wrap gap-x-8 gap-y-3"
              style={{
                fontSize: 13,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                color: "#6B7280",
                opacity: 0.6,
              }}
            >
              {trustIndicators.map((t) => (
                <span
                  key={t.label}
                  className="inline-flex items-center gap-2 whitespace-nowrap"
                >
                  <span aria-hidden="true">{t.icon}</span>
                  <span>{t.label}</span>
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* TECH STACK MARQUEE */}
      <TechMarquee />

      <CopperDivider />

      {/* STATS */}
      <section>
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-0 py-20 md:py-28">
          <StatsBar />
        </div>
      </section>

      <CopperDivider />

      {/* BENTO */}
      <section className="copper-glow-agents">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-0 py-20 md:py-32">
          <Reveal>
            <p className="eyebrow">What We Build</p>
            <h2 className="section-title mt-4 max-w-3xl">
              Seven AI agents, one company.
            </h2>
          </Reveal>
          <div className="mt-16">
            <BentoGrid />
          </div>
        </div>
      </section>

      <CopperDivider />

      {/* PROCESS */}
      <section>
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-0 py-20 md:py-32">
          <Reveal>
            <p className="eyebrow">Our Process</p>
            <h2 className="section-title mt-4 max-w-3xl">
              Four steps to smarter operations.
            </h2>
          </Reveal>
          <div className="mt-20">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <CopperDivider />

      {/* CASE STUDY */}
      <section>
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-0 py-20 md:py-32">
          <Reveal>
            <p className="eyebrow">Client Work</p>
            <h2 className="section-title mt-4">Mediwell Healthcare</h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <Reveal>
              <p className="text-[18px] text-[#1F2937] leading-[1.7]">
                A private medical clinic in London seeing 30–40 patients daily
                across 11 specialties. We built a custom iOS app for patient
                self-booking, video consultations, medical history intake, and
                in-app payments — powered by Company AI Solutions.
              </p>

              {/* Mini stats row */}
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {caseStats.map((s) => (
                  <div key={s.label}>
                    <div
                      className="text-[36px] font-bold leading-none text-[#0A0A0A]"
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      {s.value}
                    </div>
                    <p className="mt-3 text-[12px] uppercase tracking-[0.1em] text-[#6B7280]">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-10 text-[14px] italic text-[#6B7280]">
                Case study available on request.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div
                className="aspect-[4/5] flex flex-col items-center justify-center text-center px-8"
                style={{
                  background: "#1A1A1A",
                  border: "1px solid #1A1A1A",
                }}
                aria-label="Mediwell iOS app teaser"
              >
                <span
                  className="text-[48px] font-extrabold uppercase tracking-[0.05em]"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "1px #FFFFFF",
                    letterSpacing: "0.08em",
                  }}
                >
                  MEDIWELL
                </span>
                <span
                  className="mt-6 text-[14px]"
                  style={{
                    color: "#999999",
                    letterSpacing: "0.05em",
                  }}
                >
                  iOS Patient App — Launching 2026
                </span>
                <span
                  className="mt-2 text-[11px] uppercase tracking-[0.2em]"
                  style={{ color: "#B87333" }}
                >
                  In Development
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CopperDivider />

      {/* QUOTE FORM */}
      <section id="quote">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-0 py-20 md:py-32">
          <Reveal>
            <p className="eyebrow">Get Started</p>
            <h2 className="section-title mt-4">Request a custom quote.</h2>
            <p className="mt-4 text-[18px] text-[#1F2937] max-w-xl leading-[1.7]">
              Tell us what you need. We&apos;ll come back with a plan.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-3">
              <QuoteForm />
            </div>
            <Reveal delay={0.1}>
              <aside className="lg:col-span-2">
                <p className="eyebrow">What happens next?</p>
                <ol className="mt-6 space-y-4">
                  {nextSteps.map((step, i) => (
                    <li
                      key={step}
                      className="flex items-start gap-4 text-[16px] leading-[1.6]"
                      style={{ color: "#6B7280" }}
                    >
                      <span
                        style={{
                          color: "#B87333",
                          fontWeight: 700,
                          minWidth: 18,
                        }}
                      >
                        {i + 1}.
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
                <p
                  className="mt-8 text-[14px] italic"
                  style={{ color: "#6B7280" }}
                >
                  No commitment. No pressure. Just a conversation about how AI
                  can help your business.
                </p>
              </aside>
            </Reveal>
          </div>
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
            email: "info@companyaisolutions.co.uk",
            address: {
              "@type": "PostalAddress",
              streetAddress: "46 Medway Drive",
              addressLocality: "Northampton",
              postalCode: "NN5 7NY",
              addressCountry: "GB",
            },
            sameAs: ["https://www.linkedin.com/company/companyaisolutions"],
          }),
        }}
      />
    </>
  );
}
