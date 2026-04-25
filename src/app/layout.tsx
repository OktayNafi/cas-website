import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: {
    default: "Company AI Solutions | We build the AI your business actually needs",
    template: "%s | Company AI Solutions",
  },
  description:
    "Custom AI agents designed, built, and deployed for your workflow. From phone receptionists to patient booking apps, if it can be smarter, we build it.",
  keywords: [
    "AI agents",
    "custom AI",
    "business automation",
    "AI implementation",
    "AI receptionist",
    "UK AI company",
    "workflow automation",
    "AI consulting",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://companyaisolutions.co.uk",
    siteName: "Company AI Solutions",
    title: "Company AI Solutions | We build the AI your business actually needs",
    description:
      "Custom AI agents designed, built, and deployed for your workflow.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Company AI Solutions",
    description: "We build the AI your business actually needs.",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://companyaisolutions.co.uk"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} antialiased noise-overlay`}>
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
