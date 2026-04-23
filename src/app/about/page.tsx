import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Company AI Solutions is a UK-based AI implementation company. We build custom AI agents for mid-size businesses.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-0 py-24 md:py-32">
          <Reveal>
            <p className="eyebrow">About</p>
            <h1 className="section-title mt-4 max-w-3xl">
              A UK AI implementation company.
            </h1>
            <p className="mt-6 text-[20px] text-[#1F2937] max-w-2xl leading-[1.7]">
              We build custom AI agents for mid-size businesses — from phone
              receptionists to full-stack applications. Every agent is
              designed for your workflow, built to production standards, and
              supported long-term.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#FAFAFA] border-y border-[#E5E7EB]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-0 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <Reveal>
              <p className="eyebrow">Mission</p>
              <h2 className="mt-4 text-[28px] font-semibold text-[#0A0A0A] tracking-[-0.01em]">
                Make AI boringly practical.
              </h2>
              <p className="mt-5 text-[17px] text-[#1F2937] leading-[1.7]">
                Most businesses know AI could help them — they don&apos;t know
                where to start or who to trust. We identify high-ROI
                opportunities, build the solution, deploy it into your
                workflow, and maintain it. No jargon, no hand-waving.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="eyebrow">Vision</p>
              <h2 className="mt-4 text-[28px] font-semibold text-[#0A0A0A] tracking-[-0.01em]">
                AI as infrastructure, not a product.
              </h2>
              <p className="mt-5 text-[17px] text-[#1F2937] leading-[1.7]">
                Every business should have custom AI agents handling the
                repetitive work — so the people can focus on the work that
                actually matters. We build the picks and shovels.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-0 py-20 md:py-32">
          <Reveal>
            <p className="eyebrow">Company Information</p>
            <h2 className="section-title mt-4">Registered UK Ltd Company.</h2>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-2 gap-10 md:gap-16">
            <Reveal>
              <dl className="divide-y divide-[#E5E7EB]">
                <Row k="Registered Name" v="Company AI Solutions Ltd" />
                <Row k="Company Number" v="17143276" />
                <Row k="Jurisdiction" v="England & Wales" />
                <Row k="Company Type" v="Private Limited Company" />
              </dl>
            </Reveal>
            <Reveal delay={0.1}>
              <dl className="divide-y divide-[#E5E7EB]">
                <Row
                  k="Registered Office"
                  v="46 Medway Drive, Northampton, NN5 7NY"
                />
                <Row k="Data Protection" v="Registered with the ICO" />
                <Row k="Email" v="info@companyaisolutions.co.uk" />
                <Row k="Website" v="companyaisolutions.co.uk" />
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAFA] border-t border-[#E5E7EB]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-0 py-20 md:py-28">
          <Reveal>
            <h2 className="section-title max-w-3xl">
              Let&apos;s talk about what AI can do for you.
            </h2>
            <Link href="/contact" className="btn-primary mt-10">
              Request a Quote
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="grid grid-cols-[140px_1fr] md:grid-cols-[180px_1fr] gap-4 py-4">
      <dt className="text-[12px] uppercase tracking-[0.12em] text-[#6B7280] font-medium">
        {k}
      </dt>
      <dd className="text-[15px] text-[#0A0A0A]">{v}</dd>
    </div>
  );
}
