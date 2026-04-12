import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Quote } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "See how businesses use Company AI Solutions to automate operations and grow. Featured: Mediwell Clinic.",
};

export default function CaseStudiesPage() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl mb-20">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight gradient-text">
              Case studies
            </h1>
            <p className="mt-6 text-lg text-white/40 leading-relaxed">
              Real results from real businesses.
            </p>
          </div>
        </Reveal>

        {/* Mediwell */}
        <Reveal>
          <div className="rounded-3xl glass overflow-hidden">
            <div className="bg-gradient-to-r from-accent/8 to-highlight/3 p-10 sm:p-16 border-b border-white/5">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-accent/70">
                Featured Case Study
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Mediwell Clinic
              </h2>
              <p className="mt-2 text-sm text-white/30">
                Private healthcare clinic &middot; London, UK
              </p>
            </div>

            <div className="p-10 sm:p-16 space-y-16">
              {/* Challenge */}
              <div className="grid lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2">
                  <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">
                    The Challenge
                  </h3>
                  <p className="text-white/45 leading-relaxed">
                    Mediwell Clinic was losing patients due to missed calls
                    during peak hours and outside business hours. Their
                    reception team was overwhelmed — juggling walk-ins, phone
                    calls, and admin simultaneously. They estimated 40% of
                    incoming calls went unanswered, each one worth £150-500.
                  </p>
                </div>
                <div className="rounded-2xl glass p-6">
                  <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">
                    Before CAS
                  </h3>
                  <ul className="space-y-2.5 text-sm text-white/35">
                    <li>40% of calls missed</li>
                    <li>Reception staff burnt out</li>
                    <li>No after-hours coverage</li>
                    <li>Manual appointment booking</li>
                    <li>Lost revenue from missed bookings</li>
                  </ul>
                </div>
              </div>

              {/* Solution */}
              <div>
                <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">
                  The Solution
                </h3>
                <p className="text-white/45 leading-relaxed max-w-3xl">
                  We deployed Recepta to handle all incoming calls. Within a
                  week, the AI receptionist was answering every call, booking
                  appointments into their practice management system, and
                  sending SMS confirmations — without human intervention.
                </p>
              </div>

              {/* Results */}
              <div>
                <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-6">
                  The Results
                </h3>
                <div className="grid sm:grid-cols-3 gap-5">
                  {[
                    { stat: "95%", label: "Reduction in missed calls" },
                    { stat: "30+", label: "Hours saved per week" },
                    { stat: "£12k+", label: "Additional monthly revenue" },
                  ].map((r) => (
                    <div key={r.label} className="rounded-2xl glass p-6 text-center">
                      <p className="text-4xl font-bold text-highlight">{r.stat}</p>
                      <p className="mt-2 text-xs text-white/35">{r.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Outcomes */}
              <div>
                <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">
                  Key Outcomes
                </h3>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {[
                    "24/7 patient call handling without additional staff",
                    "Reception team freed to focus on in-clinic experience",
                    "Seamless integration with practice management software",
                    "Patient satisfaction scores improved by 35%",
                    "ROI achieved within the first month",
                    "Zero training required for existing staff",
                  ].map((o) => (
                    <div key={o} className="flex items-start gap-2.5 text-sm text-white/45">
                      <CheckCircle2 size={14} className="text-highlight flex-shrink-0 mt-0.5" />
                      {o}
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="rounded-2xl glass p-8">
                <Quote size={20} className="text-accent/20 mb-4" />
                <blockquote className="text-base text-white/55 leading-relaxed italic">
                  &ldquo;Recepta transformed our front desk operations. We went
                  from missing almost half our calls to capturing virtually every
                  one. Patients often don&apos;t realise they&apos;re speaking to
                  an AI. It&apos;s paid for itself many times over.&rdquo;
                </blockquote>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-white/80">Dr. Sarah Chen</p>
                  <p className="text-xs text-white/30">Practice Director, Mediwell Clinic</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-16 text-center">
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
