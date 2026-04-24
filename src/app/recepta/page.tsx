import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Recepta — AI Phone Receptionist",
  description:
    "AI-powered phone receptionist that answers calls 24/7, books appointments, and handles enquiries. From £100/mo. Live and ready to deploy.",
};

const features = [
  {
    title: "Natural Voice AI",
    desc: "Sounds like a real person. Callers won’t know the difference.",
  },
  {
    title: "Appointment Booking",
    desc: "Books, reschedules, and confirms in real time with your calendar.",
  },
  {
    title: "SMS Follow-ups",
    desc: "Automatic confirmation texts and follow-up messages after every call.",
  },
  {
    title: "Smart Routing",
    desc: "Routes to the right person based on the caller’s needs.",
  },
  {
    title: "24/7 Availability",
    desc: "Never miss a call. Weekends, bank holidays, 3am — covered.",
  },
  {
    title: "Call Analytics",
    desc: "Full transcriptions, summaries, and insights from every call.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "£100",
    desc: "For small practices getting started.",
    features: [
      "Up to 200 calls/month",
      "Appointment booking",
      "Call transcription",
      "SMS confirmations",
      "Email summaries",
      "Business hours support",
    ],
  },
  {
    name: "Professional",
    price: "£200",
    desc: "For growing businesses needing more.",
    popular: true,
    features: [
      "Unlimited calls",
      "Everything in Starter",
      "Multi-location support",
      "Custom voice & personality",
      "Advanced analytics",
      "Priority support",
      "CRM integration",
    ],
  },
];

export default function ReceptaPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-0 py-24 md:py-32">
          <Reveal>
            <p className="eyebrow">Live Product</p>
            <h1 className="hero-title mt-6 max-w-4xl">
              Your AI receptionist is ready to answer.
            </h1>
            <p className="mt-8 text-[20px] text-[#1F2937] max-w-xl leading-[1.7]">
              Recepta handles calls, books appointments, and manages enquiries
              around the clock. Deploy in days, not months.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row gap-3">
              <a
                href="https://recepta-gilt.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Start Free Trial
              </a>
              <Link href="/contact" className="btn-secondary">
                Book a Demo
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-dotted">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-0 py-20 md:py-32">
          <Reveal>
            <p className="eyebrow">Capabilities</p>
            <h2 className="section-title mt-4 max-w-3xl">
              Everything your front desk does, automated.
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.05}>
                <div
                  className="bg-white border border-[#E5E7EB] p-10 h-full"
                  style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
                >
                  <h3 className="text-[20px] font-semibold text-[#0A0A0A] tracking-[-0.01em]">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-[16px] text-[#1F2937] leading-[1.7]">
                    {f.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-0 py-20 md:py-32">
          <Reveal>
            <p className="eyebrow">Pricing</p>
            <h2 className="section-title mt-4 max-w-3xl">
              Simple pricing. No surprises.
            </h2>
            <p className="mt-4 text-[18px] text-[#1F2937]">
              £999 one-time setup fee. Then choose your plan.
            </p>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-2 gap-4 max-w-3xl">
            {plans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 0.1}>
                <div
                  className={`h-full p-10 border ${
                    plan.popular
                      ? "bg-[#0A0A0A] border-[#0A0A0A] text-white"
                      : "bg-white border-[#E5E7EB] text-[#0A0A0A]"
                  }`}
                  style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
                >
                  <p
                    className={`text-[12px] font-medium uppercase tracking-[0.15em] ${
                      plan.popular ? "text-white/60" : "text-[#6B7280]"
                    }`}
                  >
                    {plan.name}
                  </p>
                  <p
                    className={`mt-2 text-[14px] ${
                      plan.popular ? "text-white/70" : "text-[#1F2937]"
                    }`}
                  >
                    {plan.desc}
                  </p>
                  <div className="mt-8 flex items-baseline">
                    <span
                      className="text-[56px] font-extrabold leading-none"
                      style={{ letterSpacing: "-0.03em" }}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`ml-2 text-[15px] ${
                        plan.popular ? "text-white/60" : "text-[#6B7280]"
                      }`}
                    >
                      /month
                    </span>
                  </div>
                  <ul
                    className={`mt-8 space-y-2 text-[15px] ${
                      plan.popular ? "text-white/85" : "text-[#1F2937]"
                    }`}
                  >
                    {plan.features.map((f) => (
                      <li key={f}>— {f}</li>
                    ))}
                  </ul>
                  <a
                    href="https://recepta-gilt.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-10 w-full ${
                      plan.popular
                        ? "inline-flex items-center justify-center bg-white text-[#0A0A0A] border border-white px-7 py-3.5 text-[15px] font-semibold hover:bg-transparent hover:text-white transition-colors duration-200"
                        : "btn-primary"
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-dotted">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-0 py-20 md:py-28">
          <Reveal>
            <h2 className="section-title max-w-3xl">
              Stop missing calls. Start today.
            </h2>
            <p className="mt-6 text-[18px] text-[#1F2937] max-w-xl leading-[1.7]">
              Deploy Recepta in days. No hardware, no training, no hassle.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href="https://recepta-gilt.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Sign Up Now
              </a>
              <Link href="/contact" className="btn-secondary">
                Talk to Us First
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
