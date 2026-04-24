import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "See what Company AI Solutions is building. Featured: Mediwell Clinic — a custom AI-powered patient booking and video consultation app.",
};

const scope = [
  "Custom iOS application",
  "AI-powered appointment scheduling",
  "Video consultation platform",
  "Integrated payment processing",
  "Patient management system",
];

const features = [
  "AI scheduling agent that handles bookings, rescheduling, and cancellations",
  "Video consultation system with waiting room and recording",
  "Secure payment processing integrated with the booking flow",
  "Patient portal with medical history and document uploads",
  "Automated appointment reminders via SMS and email",
  "Analytics dashboard for clinic management",
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-0 py-24 md:py-32">
          <Reveal>
            <p className="eyebrow">Client Work</p>
            <h1 className="section-title mt-4 max-w-3xl">
              What we&apos;re building.
            </h1>
            <p className="mt-6 text-[20px] text-[#1F2937] max-w-2xl leading-[1.7]">
              A selection of the active engagements we can talk about
              publicly. Full case studies published at launch.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-dotted">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-0 py-20 md:py-32">
          <Reveal>
            <article
              className="bg-white border border-[#E5E7EB] overflow-hidden"
              style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
            >
              <div className="p-10 md:p-16 border-b border-[#E5E7EB]">
                <p className="text-[12px] font-medium uppercase tracking-[0.15em] text-[#6B7280]">
                  Active Project
                </p>
                <h2 className="mt-4 text-[40px] md:text-[48px] font-bold text-[#0A0A0A] tracking-[-0.02em] leading-[1.05]">
                  Mediwell Healthcare
                </h2>
                <p className="mt-3 text-[15px] text-[#6B7280]">
                  Private medical clinic · London, UK
                </p>
              </div>

              <div className="p-10 md:p-16 space-y-16">
                <div className="grid lg:grid-cols-3 gap-12">
                  <div className="lg:col-span-2">
                    <p className="eyebrow">The Project</p>
                    <p className="mt-4 text-[17px] text-[#1F2937] leading-[1.7]">
                      A private medical clinic in London seeing 30–40 patients
                      daily across 11 specialties. We built a custom iOS app
                      for patient self-booking, video consultations, medical
                      history intake, and in-app payments. Full-stack custom
                      AI development, from design through App Store
                      deployment.
                    </p>
                  </div>
                  <div>
                    <p className="eyebrow">Scope</p>
                    <ul className="mt-4 space-y-2 text-[15px] text-[#1F2937] leading-[1.7]">
                      {scope.map((s) => (
                        <li key={s}>— {s}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <p className="eyebrow">What We&apos;re Building</p>
                  <div className="mt-5 grid sm:grid-cols-2 gap-x-10 gap-y-3">
                    {features.map((f) => (
                      <p
                        key={f}
                        className="text-[15px] text-[#1F2937] leading-[1.7]"
                      >
                        — {f}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="border-t border-[#E5E7EB] pt-10">
                  <p className="eyebrow">Status</p>
                  <p className="mt-4 text-[16px] text-[#1F2937] leading-[1.7]">
                    In active development. Full case study with results
                    published on launch.{" "}
                    <Link href="/contact" className="link-underline">
                      Want to build something similar?
                    </Link>
                  </p>
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-16 text-[14px] italic text-[#6B7280] text-center">
              More case studies coming soon.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white border-t border-[#E5E7EB]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-0 py-20 md:py-28">
          <Reveal>
            <h2 className="section-title max-w-3xl">
              Want to be our next case study?
            </h2>
            <Link href="/contact" className="btn-primary mt-10">
              Start a Conversation
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
