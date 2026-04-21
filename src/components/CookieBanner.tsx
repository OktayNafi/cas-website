"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const COOKIE_NAME = "cas_cookies_accepted";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = document.cookie
      .split(";")
      .map((c) => c.trim())
      .some((c) => c.startsWith(`${COOKIE_NAME}=true`));
    if (!accepted) {
      // Slight delay so it doesn't pop in during the loading screen
      const t = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    const oneYear = 60 * 60 * 24 * 365;
    document.cookie = `${COOKIE_NAME}=true; path=/; max-age=${oneYear}; SameSite=Lax`;
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 z-[100] mx-auto max-w-3xl"
          role="dialog"
          aria-label="Cookie consent"
        >
          <div
            className="flex flex-col sm:flex-row items-center gap-4 rounded-2xl px-5 py-3"
            style={{
              background: "rgba(10, 14, 22, 0.85)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
            }}
          >
            <p className="text-xs sm:text-[13px] text-white/60 flex-1 leading-relaxed">
              This website uses essential cookies for functionality. By continuing to browse, you accept our{" "}
              <Link href="/privacy" className="underline text-white/80 hover:text-highlight transition-colors">
                cookie policy
              </Link>
              .
            </p>
            <button
              onClick={accept}
              className="shrink-0 px-5 py-2 text-xs font-semibold rounded-full bg-highlight text-navy-deep hover:bg-highlight-dark transition-colors"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
