"use client";

import { useEffect, useState } from "react";

const COOKIE_NAME = "cas_cookies_accepted";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = document.cookie
      .split(";")
      .map((c) => c.trim())
      .some((c) => c.startsWith(`${COOKIE_NAME}=true`));
    if (accepted) return;
    const t = setTimeout(() => setShow(true), 800);
    return () => clearTimeout(t);
  }, []);

  const accept = () => {
    document.cookie = `${COOKIE_NAME}=true; path=/; max-age=${
      60 * 60 * 24 * 365
    }; SameSite=Lax`;
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      role="region"
      aria-label="Cookie notice"
      className="fixed inset-x-0 bottom-0 z-40 bg-white border-t border-[#E5E7EB]"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-0 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-[14px] text-[#1F2937]">
          This site uses essential cookies.
        </p>
        <button
          onClick={accept}
          className="btn-primary !py-2.5 !px-6 !text-[13px]"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
