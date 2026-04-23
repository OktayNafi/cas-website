"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const data = new FormData(e.currentTarget);

    // Client-side honeypot short-circuit
    if (data.get("website")) {
      setStatus("success");
      return;
    }

    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      company: data.get("company"),
      companySize: data.get("companySize"),
      message: data.get("message"),
      website: data.get("website"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        if (res.status === 429) {
          throw new Error(
            body.error || "Too many requests. Please try again later."
          );
        }
        throw new Error(body.error || "Failed to send message");
      }

      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Unknown error");
      setStatus("error");
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="eyebrow block mb-2">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="input-mono"
          />
        </div>
        <div>
          <label htmlFor="email" className="eyebrow block mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="input-mono"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="company" className="eyebrow block mb-2">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className="input-mono"
          />
        </div>
        <div>
          <label htmlFor="companySize" className="eyebrow block mb-2">
            Company size
          </label>
          <select
            id="companySize"
            name="companySize"
            className="input-mono"
            defaultValue=""
          >
            <option value="" disabled>
              Select…
            </option>
            <option value="1-10">1–10</option>
            <option value="11-50">11–50</option>
            <option value="51-200">51–200</option>
            <option value="200+">200+</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="eyebrow block mb-2">
          What do you need?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="input-mono resize-y"
        />
      </div>

      {/* Honeypot — visually hidden */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          width: "1px",
          height: "1px",
          opacity: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full sm:w-auto disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Request"}
      </button>

      {status === "success" && (
        <p className="text-[15px] text-[#0F7A3A] mt-2">
          Thank you. We&apos;ll be in touch within 24 hours.
        </p>
      )}
      {status === "error" && (
        <p className="text-[15px] text-[#0A0A0A] mt-2">
          Something went wrong. Please email us directly at{" "}
          <a
            href="mailto:info@companyaisolutions.co.uk"
            className="link-underline"
          >
            info@companyaisolutions.co.uk
          </a>
          {errorMsg ? ` (${errorMsg})` : ""}.
        </p>
      )}
    </form>
  );
}
