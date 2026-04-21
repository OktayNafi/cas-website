import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: {
    default: "Company AI Solutions | We build the AI your business actually needs",
    template: "%s | Company AI Solutions",
  },
  description:
    "Custom AI agents, integrated into your workflow. From AI receptionists to bespoke automations — if a process can be improved with AI, we build it.",
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
      "Custom AI agents, integrated into your workflow, delivered by Company AI Solutions.",
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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${GeistSans.className} antialiased`}>
        <LoadingScreen />
        <CustomCursor />
        <div className="mesh-gradient" aria-hidden="true" />
        <Navbar />
        <main className="relative z-10 min-h-screen pt-16">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
