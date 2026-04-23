import Link from "next/link";
import Reveal from "@/components/Reveal";
import BentoGrid from "@/components/BentoGrid";
import ProcessSteps from "@/components/ProcessSteps";
import StatsBar from "@/components/StatsBar";
import QuoteForm from "@/components/QuoteForm";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white">
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
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#FAFAFA] border-y border-[#E5E7EB]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-0 py-20 md:py-28">
          <StatsBar />
        </div>
      </section>

      {/* BENTO */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-0 py-20 md:py-40">
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

      {/* PROCESS */}
      <section className="bg-[#FAFAFA] border-y border-[#E5E7EB]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-0 py-20 md:py-40">
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

      {/* CASE STUDY */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-0 py-20 md:py-40">
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
              <p className="mt-6 text-[14px] italic text-[#6B7280]">
                Case study available on request.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div
                className="aspect-[4/5] bg-[#F0F0F0] border border-[#E5E7EB] flex items-center justify-center"
                aria-label="App preview placeholder"
              >
                <span className="text-[14px] text-[#6B7280]">
                  App Preview Coming Soon
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section id="quote" className="bg-[#FAFAFA] border-t border-[#E5E7EB]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-0 py-20 md:py-40">
          <Reveal>
            <p className="eyebrow">Get Started</p>
            <h2 className="section-title mt-4">Request a custom quote.</h2>
            <p className="mt-4 text-[18px] text-[#1F2937] max-w-xl leading-[1.7]">
              Tell us what you need. We&apos;ll come back with a plan.
            </p>
          </Reveal>

          <div className="mt-16 max-w-2xl">
            <QuoteForm />
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
            sameAs: [
              "https://www.linkedin.com/company/companyaisolutions",
            ],
          }),
        }}
      />
    </>
  );
}
