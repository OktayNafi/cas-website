import Link from "next/link";

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
    <footer
      style={{
        background: "#0A0A0A",
        borderTop: "2px solid #B87333",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-0 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Left: tagline + logo (white) + caption */}
          <div>
            <p
              style={{
                fontSize: 11,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#B87333",
                fontWeight: 600,
              }}
            >
              AI Implementation Company
            </p>
            <span
              className="inline-flex flex-col items-start mt-4"
              aria-label="Company AI Solutions"
            >
              <span
                className="text-[40px] font-black uppercase leading-none tracking-[0.05em]"
                style={{ color: "#FFFFFF" }}
              >
                CAS
              </span>
              <span
                className="flex items-center"
                style={{ marginTop: 8, gap: 8 }}
                aria-hidden="true"
              >
                <span style={{ width: 24, height: 1, background: "#FFFFFF" }} />
                <span
                  className="text-[10px] uppercase tracking-[0.2em]"
                  style={{ color: "#FFFFFF" }}
                >
                  Company AI Solutions
                </span>
                <span style={{ width: 24, height: 1, background: "#FFFFFF" }} />
              </span>
            </span>
            <p
              className="mt-6 text-[14px] italic max-w-xs"
              style={{ color: "#999999" }}
            >
              We implement AI into your business.
            </p>
          </div>

          {/* Center: links */}
          <div>
            <p
              className="mb-5"
              style={{
                fontSize: 12,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#B87333",
                fontWeight: 500,
              }}
            >
              Navigate
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[15px] transition-colors duration-200 hover:text-[#B87333]"
                    style={{ color: "#FFFFFF" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: contact */}
          <div>
            <p
              className="mb-5"
              style={{
                fontSize: 12,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#B87333",
                fontWeight: 500,
              }}
            >
              Contact
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@companyaisolutions.co.uk"
                  className="text-[15px] transition-colors duration-200 hover:text-[#B87333]"
                  style={{ color: "#FFFFFF" }}
                >
                  info@companyaisolutions.co.uk
                </a>
              </li>
              <li>
                <a
                  href="https://companyaisolutions.co.uk"
                  className="text-[15px] transition-colors duration-200 hover:text-[#B87333]"
                  style={{ color: "#FFFFFF" }}
                >
                  companyaisolutions.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8" style={{ borderTop: "1px solid #222222" }}>
          <p style={{ fontSize: 12, color: "#666666", lineHeight: 1.6 }}>
            &copy; {new Date().getFullYear()} CompanyAiSolutions Ltd. Company
            Number 17143276. Registered in England and Wales. 46 Medway Drive,
            Northampton, NN5 7NY.
          </p>
        </div>
      </div>
    </footer>
  );
}
