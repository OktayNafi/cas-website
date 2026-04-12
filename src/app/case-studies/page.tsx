import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "See what Company AI Solutions is building. Featured: Mediwell Clinic — a custom AI-powered patient booking and video consultation app.",
};

export default function CaseStudiesPage() {
  return (
    <section className="py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl mb-20">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight gradient-text">
              Case studies
            </h1>
            <p className="mt-6 text-lg text-white/40 leading-relaxed">
              What we&apos;re building for our clients.
            </p>
          </div>
        </Reveal>

        {/* Mediwell */}
        <Reveal>
          <div className="rounded-3xl glass overflow-hidden">
            <div className="bg-gradient-to-r from-accent/8 to-highlight/3 p-10 sm:p-16 border-b border-white/[0.04]">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-accent/70">
                Active Project
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Mediwell Clinic
              </h2>
              <p className="mt-2 text-sm text-white/30">
                Private medical clinic &middot; London, UK
              </p>
            </div>

            <div className="p-10 sm:p-16 space-y-16">
              {/* Overview */}
              <div className="grid lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2">
                  <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">
                    The Project
                  </h3>
                  <p className="text-white/45 leading-relaxed">
                    Building a custom patient booking and video consultation app
                    for a private medical clinic in London. AI-powered
                    scheduling, payments, and doctor-patient video calls — all in
                    one iOS app. This is a full-stack custom AI development
                    project, from design through to App Store deployment.
                  </p>
                </div>
                <div className="rounded-2xl agent-card p-6">
                  <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">
                    Scope
                  </h3>
                  <ul className="space-y-2.5 text-sm text-white/35">
                    <li>Custom iOS application</li>
                    <li>AI-powered appointment scheduling</li>
                    <li>Video consultation platform</li>
                    <li>Integrated payment processing</li>
                    <li>Patient management system</li>
                  </ul>
                </div>
              </div>

              {/* What we're building */}
              <div>
                <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-6">
                  What We&apos;re Building
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "AI scheduling agent that handles bookings, rescheduling, and cancellations",
                    "Video consultation system with waiting room and recording",
                    "Secure payment processing integrated with the booking flow",
                    "Patient portal with medical history and document uploads",
                    "Automated appointment reminders via SMS and email",
                    "Analytics dashboard for clinic management",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-white/45"
                    >
                      <CheckCircle2
                        size={14}
                        className="text-highlight flex-shrink-0 mt-0.5"
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Status */}
              <div className="rounded-2xl agent-card p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 bg-highlight rounded-full animate-pulse" />
                  <span className="text-xs font-semibold text-highlight uppercase tracking-wider">
                    In Development
                  </span>
                </div>
                <p className="text-sm text-white/40 leading-relaxed">
                  This project is currently in active development. Full case
                  study with results and outcomes will be published on launch.
                  Want to build something similar?{" "}
                  <Link
                    href="/contact"
                    className="text-accent hover:text-accent-light transition-colors"
                  >
                    Get in touch
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-20 text-center">
            <p className="text-white/25 text-sm">More case studies coming soon.</p>
            <Link
              href="/contact"
              className="inline-flex items-center mt-4 text-sm font-medium text-accent hover:text-accent-light transition-colors"
            >
              Want to be featured? Get in touch
              <ArrowRight size={14} className="ml-1.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
