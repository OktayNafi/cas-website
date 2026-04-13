import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Calendar,
  MessageSquare,
  PhoneForwarded,
  Clock,
  BarChart3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Recepta — AI Phone Receptionist",
  description:
    "AI-powered phone receptionist that answers calls 24/7, books appointments, and handles enquiries. From £100/mo. Live and ready to deploy.",
};

const features = [
  { icon: Phone, title: "Natural Voice AI", desc: "Sounds like a real person. Callers won't know the difference." },
  { icon: Calendar, title: "Appointment Booking", desc: "Books, reschedules, and confirms in real time with your calendar." },
  { icon: MessageSquare, title: "SMS Follow-ups", desc: "Automatic confirmation texts and follow-up messages after every call." },
  { icon: PhoneForwarded, title: "Smart Routing", desc: "Routes to the right person based on the caller's needs." },
  { icon: Clock, title: "24/7 Availability", desc: "Never miss a call. Weekends, bank holidays, 3am — covered." },
  { icon: BarChart3, title: "Call Analytics", desc: "Full transcriptions, summaries, and insights from every call." },
];

const plans = [
  {
    name: "Starter",
    price: "£100",
    desc: "For small practices getting started.",
    features: ["Up to 200 calls/month", "Appointment booking", "Call transcription", "SMS confirmations", "Email summaries", "Business hours support"],
  },
  {
    name: "Professional",
    price: "£200",
    desc: "For growing businesses needing more.",
    popular: true,
    features: ["Unlimited calls", "Everything in Starter", "Multi-location support", "Custom voice & personality", "Advanced analytics", "Priority support", "CRM integration"],
  },
];

export default function ReceptaPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-highlight bg-highlight/10 rounded-full mb-6">
                <span className="w-1.5 h-1.5 bg-highlight rounded-full animate-pulse" />
                Live Product
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] gradient-text">
                Your AI receptionist is ready to answer.
              </h1>
              <p className="mt-6 text-lg text-white/40 max-w-xl leading-relaxed">
                Recepta handles calls, books appointments, and manages enquiries
                around the clock. Deploy in days, not months.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://recepta-gilt.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Start Free Trial
                  <ArrowRight size={16} className="ml-2" />
                </a>
                <Link
                  href="/contact"
                  className="btn-secondary"
                >
                  Book a Demo
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 sm:py-32 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
              Everything your front desk does, automated
            </h2>
            <p className="text-sm text-white/30 mb-14">
              Recepta handles the entire workflow — from greeting to follow-up.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.06}>
                <div className="rounded-2xl glass glass-hover p-7 h-full">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5">
                    <f.icon size={20} />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-1.5">{f.title}</h3>
                  <p className="text-sm text-white/35 leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 sm:py-32 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Simple pricing
              </h2>
              <p className="mt-3 text-sm text-white/30">
                £999 one-time setup fee. Then choose your plan.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {plans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 0.1}>
                <div className={`relative rounded-2xl glass p-8 h-full ${plan.popular ? "border-highlight/20" : ""}`}>
                  {plan.popular && (
                    <span className="absolute -top-3 left-8 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-navy-deep bg-highlight rounded-full">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className="mt-1 text-xs text-white/30">{plan.desc}</p>
                  <div className="mt-6 flex items-baseline">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-white/30 ml-1 text-sm">/mo</span>
                  </div>
                  <ul className="mt-8 space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-white/50">
                        <CheckCircle2 size={14} className="text-highlight flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://recepta-gilt.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-8 w-full ${
                      plan.popular ? "btn-primary" : "btn-secondary"
                    }`}
                  >
                    Get Started
                    <ArrowRight size={14} className="ml-2" />
                  </a>
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
              Stop missing calls. Start today.
            </h2>
            <p className="mt-4 text-sm text-white/30 max-w-md mx-auto">
              Deploy Recepta in days. No hardware, no training, no hassle.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://recepta-gilt.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Sign Up Now
                <ArrowRight size={16} className="ml-2" />
              </a>
              <Link
                href="/contact"
                className="btn-secondary"
              >
                Talk to Us First
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
