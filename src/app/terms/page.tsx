import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Service", description: "Terms of Service for Company AI Solutions Ltd." };

function S({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-base font-semibold text-white mb-2">{title}</h2>
      <div className="text-sm text-white/40 leading-relaxed">{children}</div>
    </div>
  );
}

export default function TermsPage() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white tracking-tight mb-2">Terms of Service</h1>
        <p className="text-xs text-white/25 mb-12">Last updated: April 2026</p>

        <div className="space-y-8">
          <S title="1. Introduction">
            These Terms govern your use of the website and services provided by Company AI Solutions Ltd, registered in England & Wales. By using our services, you agree to these Terms.
          </S>
          <S title="2. Services">
            We provide custom AI agents including phone receptionists, lead generation, customer support, workflow automation, custom development, and consulting. Specific terms for each engagement are set out in separate agreements.
          </S>
          <S title="3. Acceptable Use">
            You agree to use our website lawfully and not to breach applicable laws, attempt unauthorised access, transmit harmful content, or reproduce our content without permission.
          </S>
          <S title="4. Intellectual Property">
            All website content is our property or licensed to us, protected by IP laws. No reproduction without written consent.
          </S>
          <S title="5. Payment">
            Payment terms are specified in individual service agreements. Invoices are payable within 14 days unless otherwise stated.
          </S>
          <S title="6. Limitation of Liability">
            To the fullest extent permitted by law, we are not liable for indirect, incidental, or consequential damages. Our total liability shall not exceed fees paid in the preceding 12 months.
          </S>
          <S title="7. Confidentiality">
            We treat all client information as confidential and will not disclose it except as necessary to provide services or as required by law.
          </S>
          <S title="8. Data Protection">
            We process personal data in accordance with our Privacy Policy and UK GDPR.
          </S>
          <S title="9. Termination">
            Either party may terminate per the service agreement terms. We may suspend website access if these Terms are breached.
          </S>
          <S title="10. Governing Law">
            These Terms are governed by the laws of England & Wales, with exclusive jurisdiction of the courts of England & Wales.
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
