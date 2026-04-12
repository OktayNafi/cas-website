import Link from "next/link";

const cols = {
  "AI Agents": [
    { href: "/recepta", label: "Recepta" },
    { href: "/agents#lead-generation", label: "Lead Generation" },
    { href: "/agents#customer-support", label: "Customer Support" },
    { href: "/agents#workflow", label: "Workflow Automation" },
    { href: "/agents#custom-dev", label: "Custom Development" },
    { href: "/agents#consulting", label: "Consulting" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/contact", label: "Contact" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <span className="text-xl font-bold text-white tracking-tight">
              CAS<span className="text-highlight">.</span>
            </span>
            <p className="mt-4 text-sm text-white/30 max-w-xs leading-relaxed">
              We build the AI your business actually needs. Custom AI agents,
              deployed into your workflow.
            </p>
          </div>

          {Object.entries(cols).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-4">
                {title}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/30 hover:text-white/60 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-white/20">
            &copy; {new Date().getFullYear()} Company AI Solutions Ltd.
            Registered in England & Wales. Registered with the ICO.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/company/companyaisolutions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/20 hover:text-white/40 transition-colors text-[11px]"
            >
              LinkedIn
            </a>
            <a
              href="mailto:hello@companyaisolutions.co.uk"
              className="text-white/20 hover:text-white/40 transition-colors text-[11px]"
            >
              hello@companyaisolutions.co.uk
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
