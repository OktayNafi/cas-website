import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/agents", label: "Agents" },
  { href: "/recepta", label: "Recepta" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-dotted">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-0 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Left: logo + tagline */}
          <div>
            <Logo size="lg" />
            <p className="mt-6 text-[14px] italic text-[#6B7280] max-w-xs">
              We implement AI into your business.
            </p>
          </div>

          {/* Center: links */}
          <div>
            <p className="eyebrow mb-5">Navigate</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="link-underline text-[15px] text-[#0A0A0A]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: contact */}
          <div>
            <p className="eyebrow mb-5">Contact</p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@companyaisolutions.co.uk"
                  className="link-underline text-[15px] text-[#0A0A0A]"
                >
                  info@companyaisolutions.co.uk
                </a>
              </li>
              <li>
                <a
                  href="https://companyaisolutions.co.uk"
                  className="link-underline text-[15px] text-[#0A0A0A]"
                >
                  companyaisolutions.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8" style={{ borderTop: "1px solid #B87333" }}>
          <p className="text-[12px] text-[#6B7280] leading-relaxed">
            &copy; {new Date().getFullYear()} CompanyAiSolutions Ltd. Company
            Number 17143276. Registered in England and Wales. 46 Medway Drive,
            Northampton, NN5 7NY.
          </p>
        </div>
      </div>
    </footer>
  );
}
