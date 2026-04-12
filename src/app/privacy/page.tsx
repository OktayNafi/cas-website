import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy", description: "Privacy Policy for Company AI Solutions Ltd." };

function S({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-base font-semibold text-white mb-2">{title}</h2>
      <div className="text-sm text-white/40 leading-relaxed">{children}</div>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white tracking-tight mb-2">Privacy Policy</h1>
        <p className="text-xs text-white/25 mb-12">Last updated: April 2026</p>

        <div className="space-y-8">
          <S title="1. Introduction">
            Company AI Solutions Ltd (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal data in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
          </S>
          <S title="2. Data Controller">
            The data controller is Company AI Solutions Ltd, registered in England & Wales. Contact: hello@companyaisolutions.co.uk.
          </S>
          <S title="3. Information We Collect">
            We may collect: name, email, phone number, company name (via our contact form); usage data and analytics; communication records; and any information you voluntarily provide.
          </S>
          <S title="4. How We Use Your Data">
            We use your data to respond to enquiries, provide services, send information about our services (with consent), improve our website, and comply with legal obligations.
          </S>
          <S title="5. Legal Basis">
            We process data based on: consent, performance of a contract, legitimate business interests, or legal obligations.
          </S>
          <S title="6. Data Sharing">
            We do not sell your personal data. We may share data with trusted third-party processors (e.g., email delivery) subject to appropriate safeguards.
          </S>
          <S title="7. Data Retention">
            We retain data only as long as necessary or as required by law. Contact form submissions are retained for up to 2 years.
          </S>
          <S title="8. Your Rights">
            Under UK GDPR you may: access, rectify, erase, restrict, port, or object to processing of your data. Contact hello@companyaisolutions.co.uk to exercise these rights.
          </S>
          <S title="9. Cookies">
            We use essential cookies for functionality and may use analytics cookies. Manage preferences via your browser settings.
          </S>
          <S title="10. Security">
            We implement appropriate technical and organisational measures to protect your data.
          </S>
          <S title="11. Changes">
            We may update this policy. Changes will be posted here with an updated date.
          </S>
          <S title="12. Contact & Complaints">
            Contact hello@companyaisolutions.co.uk. You may also complain to the ICO at ico.org.uk.
          </S>
        </div>
      </div>
    </section>
  );
}
