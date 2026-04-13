"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";

const serviceOptions = [
  "AI Receptionist (Recepta)",
  "AI Lead Generation",
  "AI Customer Support",
  "Workflow Automation",
  "Custom AI Application",
  "AI Consulting & Strategy",
  "Something else",
];

const budgetOptions = [
  "Under £1,000",
  "£1,000 – £5,000",
  "£5,000 – £15,000",
  "£15,000 – £50,000",
  "£50,000+",
  "Not sure yet",
];

const timelineOptions = [
  "ASAP",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "Just exploring",
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get("website")) {
      setStatus("success");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          companySize: data.get("companySize"),
          industry: data.get("industry"),
          service: data.get("service"),
          budget: data.get("budget"),
          timeline: data.get("timeline"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) throw new Error("Something went wrong. Please try again.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-accent/50 focus:ring-1 focus:ring-accent/30 outline-none transition-all duration-200 backdrop-blur-sm";

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight gradient-text">
              Request a quote
            </h1>
            <p className="mt-6 text-base text-white/40 leading-relaxed">
              Tell us what you need. We&apos;ll get back to you within 24 hours
              with a tailored proposal.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs text-white/25">Email us directly</p>
                <a
                  href="mailto:hello@companyaisolutions.co.uk"
                  className="text-sm text-white/60 hover:text-highlight transition-colors"
                >
                  hello@companyaisolutions.co.uk
                </a>
              </div>
            </div>

            <div className="mt-16 rounded-2xl glass p-8">
              <h3 className="text-sm font-semibold text-white/70 mb-5">
                What happens next?
              </h3>
              <ol className="space-y-3">
                {[
                  "We respond within 24 hours",
                  "Free 30-minute consultation call",
                  "We assess your needs and propose a solution",
                  "If it's a fit, we start building",
                ].map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-white/35">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 text-accent text-[10px] flex items-center justify-center font-semibold">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {status === "success" ? (
              <div className="rounded-2xl glass border-highlight/20 p-10 text-center">
                <CheckCircle2 size={44} className="text-highlight mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-white mb-2">Quote requested</h2>
                <p className="text-sm text-white/40">
                  Thanks for reaching out. We&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot */}
                <input
                  type="text"
                  name="website"
                  className="absolute opacity-0 pointer-events-none"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-white/40 mb-1.5">
                      Name *
                    </label>
                    <input id="name" name="name" type="text" required className={inputClass} placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-white/40 mb-1.5">
                      Email *
                    </label>
                    <input id="email" name="email" type="email" required className={inputClass} placeholder="you@company.com" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="company" className="block text-xs font-medium text-white/40 mb-1.5">
                      Company
                    </label>
                    <input id="company" name="company" type="text" className={inputClass} placeholder="Your company" />
                  </div>
                  <div>
                    <label htmlFor="companySize" className="block text-xs font-medium text-white/40 mb-1.5">
                      Company Size
                    </label>
                    <select id="companySize" name="companySize" className={inputClass + " appearance-none"}>
                      <option value="" className="bg-navy-deep">Select...</option>
                      {["1-10", "11-50", "51-200", "201-500", "500+"].map((s) => (
                        <option key={s} value={s} className="bg-navy-deep">{s} employees</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="industry" className="block text-xs font-medium text-white/40 mb-1.5">
                    Industry
                  </label>
                  <input id="industry" name="industry" type="text" className={inputClass} placeholder="e.g. Healthcare, Legal, SaaS..." />
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs font-medium text-white/40 mb-1.5">
                    What do you want to build?
                  </label>
                  <select id="service" name="service" className={inputClass + " appearance-none"}>
                    <option value="" className="bg-navy-deep">Select a category...</option>
                    {serviceOptions.map((o) => (
                      <option key={o} value={o} className="bg-navy-deep">{o}</option>
                    ))}
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="budget" className="block text-xs font-medium text-white/40 mb-1.5">
                      Budget Range
                    </label>
                    <select id="budget" name="budget" className={inputClass + " appearance-none"}>
                      <option value="" className="bg-navy-deep">Select...</option>
                      {budgetOptions.map((o) => (
                        <option key={o} value={o} className="bg-navy-deep">{o}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-xs font-medium text-white/40 mb-1.5">
                      Timeline
                    </label>
                    <select id="timeline" name="timeline" className={inputClass + " appearance-none"}>
                      <option value="" className="bg-navy-deep">Select...</option>
                      {timelineOptions.map((o) => (
                        <option key={o} value={o} className="bg-navy-deep">{o}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-white/40 mb-1.5">
                    Tell us more *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className={inputClass + " resize-none"}
                    placeholder="Describe what you want to build, automate, or improve..."
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-400">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Sending..." : "Request a Quote"}
                  <ArrowRight size={16} className="ml-2" />
                </button>

                <p className="text-[10px] text-white/15 text-center">
                  By submitting, you agree to our{" "}
                  <a href="/privacy" className="underline hover:text-white/30">Privacy Policy</a>.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
