"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { href: "/agents", label: "Agents" },
  { href: "/recepta", label: "Recepta" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 bg-white border-b border-[#E5E7EB]"
      style={{
        boxShadow: scrolled ? "0 1px 3px rgba(0,0,0,0.06)" : "none",
        transition: "box-shadow 200ms ease",
      }}
    >
      <nav className="mx-auto max-w-[1200px] h-16 px-6 md:px-12 lg:px-0 flex items-center justify-between">
        <Link href="/" aria-label="Company AI Solutions — Home" className="flex items-center">
          <Logo size="sm" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="link-underline text-[14px] font-medium text-[#0A0A0A]"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link href="/contact" className="btn-primary !py-3 !px-7 !text-[14px]">
            Request a Quote
          </Link>
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-[#0A0A0A]"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile slide-in */}
      <div
        className={`md:hidden fixed inset-y-0 right-0 w-full max-w-sm bg-white border-l border-[#E5E7EB] transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: 64 }}
      >
        <div className="flex flex-col p-6 gap-6">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-[18px] font-medium text-[#0A0A0A]"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="btn-primary w-full mt-4"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
