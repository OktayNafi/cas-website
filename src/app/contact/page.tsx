import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact — Request a Quote",
  description:
    "Tell us what you need. We'll come back with a plan within 24 hours.",
};

export default function ContactPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-0 py-24 md:py-32">
        <Reveal>
          <p className="eyebrow">Get Started</p>
          <h1 className="section-title mt-4">Request a custom quote.</h1>
          <p className="mt-6 text-[18px] text-[#1F2937] max-w-xl leading-[1.7]">
            Tell us what you need. We&apos;ll come back with a plan.
          </p>
        </Reveal>

        <div className="mt-16 max-w-2xl">
          <QuoteForm />
        </div>

        <div className="mt-20 pt-10 border-t border-[#E5E7EB] max-w-2xl">
          <p className="eyebrow">Or email us directly</p>
          <a
            href="mailto:info@companyaisolutions.co.uk"
            className="link-underline mt-3 inline-block text-[18px] text-[#0A0A0A]"
          >
            info@companyaisolutions.co.uk
          </a>
        </div>
      </div>
    </section>
  );
}
