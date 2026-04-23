import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Company AI Solutions Ltd.",
};

function S({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-[18px] font-semibold text-[#0A0A0A] mb-3">{title}</h2>
      <div className="text-[16px] text-[#1F2937] leading-[1.7]">{children}</div>
    </div>
  );
}

export default function TermsPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[760px] px-6 md:px-12 lg:px-0 py-24 md:py-32">
        <p className="eyebrow">Legal</p>
        <h1 className="section-title mt-4 mb-3">Terms of Service</h1>
        <p className="text-[13px] text-[#6B7280] mb-12">
          Last updated: April 2026
        </p>

        <div className="space-y-10">
          <S title="1. Introduction">
            These Terms govern your use of the website and services provided
            by Company AI Solutions Ltd, registered in England &amp; Wales. By
            using our services, you agree to these Terms.
          </S>
          <S title="2. Services">
            We provide custom AI agents including phone receptionists, lead
            generation, customer support, workflow automation, custom
            development, and consulting. Specific terms for each engagement
            are set out in separate agreements.
          </S>
          <S title="3. Acceptable Use">
            You agree to use our website lawfully and not to breach applicable
            laws, attempt unauthorised access, transmit harmful content, or
            reproduce our content without permission.
          </S>
          <S title="4. Intellectual Property">
            All website content is our property or licensed to us, protected
            by IP laws. No reproduction without written consent.
          </S>
          <S title="5. Payment">
            Payment terms are specified in individual service agreements.
            Invoices are payable within 14 days unless otherwise stated.
          </S>
          <S title="6. Limitation of Liability">
            To the fullest extent permitted by law, we are not liable for
            indirect, incidental, or consequential damages. Our total
            liability shall not exceed fees paid in the preceding 12 months.
          </S>
          <S title="7. Confidentiality">
            We treat all client information as confidential and will not
            disclose it except as necessary to provide services or as required
            by law.
          </S>
          <S title="8. Data Protection">
            We process personal data in accordance with our Privacy Policy and
            UK GDPR.
          </S>
          <S title="9. Termination">
            Either party may terminate per the service agreement terms. We may
            suspend website access if these Terms are breached.
          </S>
          <S title="10. Governing Law">
            These Terms are governed by the laws of England &amp; Wales, with
            exclusive jurisdiction of the courts of England &amp; Wales.
          </S>
          <S title="11. Changes">
            We may update these Terms. Continued use constitutes acceptance.
          </S>
          <S title="12. Contact">
            Questions? Contact info@companyaisolutions.co.uk.
          </S>
        </div>
      </div>
    </section>
  );
}
