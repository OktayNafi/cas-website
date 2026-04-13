"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = [
  { href: "/agents", label: "Agents" },
  { href: "/recepta", label: "Recepta" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

function ArrowLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="group flex items-center gap-2 text-sm text-white/40 hover:text-highlight transition-colors duration-200">
      <motion.span
        className="inline-block"
        whileHover={{ x: 4 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        &rarr;
      </motion.span>
      {label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-highlight/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 sm:py-28">
        {/* Huge outlined CAS logo */}
        <div className="mb-16">
          <span
            className="text-[20vw] sm:text-[16vw] lg:text-[12vw] font-black leading-none tracking-tighter select-none"
            style={{
              WebkitTextStroke: "2px rgba(15, 240, 160, 0.15)",
              WebkitTextFillColor: "transparent",
            }}
          >
            CAS.
          </span>
        </div>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl lg:text-3xl font-black tracking-[-0.03em] text-white/60 max-w-2xl mb-16">
          WE IMPLEMENT AI INTO YOUR BUSINESS.
        </p>

        {/* Links + Info */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/20 mb-4">
              Navigate
            </h3>
            <div className="space-y-3">
              {footerLinks.slice(0, 5).map((link) => (
                <ArrowLink key={link.href} href={link.href} label={link.label} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/20 mb-4">
              Legal
            </h3>
            <div className="space-y-3">
              {footerLinks.slice(5).map((link) => (
                <ArrowLink key={link.href} href={link.href} label={link.label} />
              ))}
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/20 mb-4">
              Connect
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:hello@companyaisolutions.co.uk"
                className="group flex items-center gap-2 text-sm text-white/40 hover:text-highlight transition-colors duration-200"
              >
                <span>&rarr;</span>
                hello@companyaisolutions.co.uk
              </a>
              <a
                href="https://www.linkedin.com/company/companyaisolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm text-white/40 hover:text-highlight transition-colors duration-200"
              >
                <span>&rarr;</span>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5">
          <p className="text-[11px] text-white/15">
            &copy; {new Date().getFullYear()} Company AI Solutions Ltd. Registered in England &amp; Wales. Registered with the ICO.
          </p>
        </div>
      </div>
    </footer>
  );
}
