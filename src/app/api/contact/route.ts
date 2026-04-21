import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// ── In-memory rate limiting: 3 submissions per IP per hour ──
const rateLimitMap = new Map<string, number[]>();
const MAX_SUBMISSIONS = 3;
const WINDOW_MS = 60 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) ?? [];
  const recent = timestamps.filter((t) => now - t < WINDOW_MS);

  // Periodic cleanup of stale IPs
  if (rateLimitMap.size > 1000) {
    for (const [key, times] of rateLimitMap.entries()) {
      const stillRecent = times.filter((t) => now - t < WINDOW_MS);
      if (stillRecent.length === 0) rateLimitMap.delete(key);
      else rateLimitMap.set(key, stillRecent);
    }
  }

  if (recent.length >= MAX_SUBMISSIONS) {
    rateLimitMap.set(ip, recent);
    return true;
  }
  recent.push(now);
  rateLimitMap.set(ip, recent);
  return false;
}

export async function POST(req: NextRequest) {
  try {
    // ── Rate limit by IP ──
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
      req.headers.get("x-real-ip") ??
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in an hour." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const {
      name,
      email,
      company,
      companySize,
      industry,
      service,
      budget,
      timeline,
      message,
      company_url,
    } = body;

    // ── Honeypot: if filled, silently succeed without sending ──
    if (company_url) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const rows = [
      ["Name", name],
      ["Email", email],
      ...(company ? [["Company", company]] : []),
      ...(companySize ? [["Company Size", companySize]] : []),
      ...(industry ? [["Industry", industry]] : []),
      ...(service ? [["Service", service]] : []),
      ...(budget ? [["Budget", budget]] : []),
      ...(timeline ? [["Timeline", timeline]] : []),
    ];

    await resend.emails.send({
      from: "CAS Website <noreply@companyaisolutions.co.uk>",
      to: "info@companyaisolutions.co.uk",
      replyTo: email,
      subject: `New quote request from ${name}${company ? ` (${company})` : ""}`,
      html: `
        <h2>New Quote Request</h2>
        <table style="border-collapse:collapse;width:100%;">
          ${rows.map(([k, v]) => `<tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;width:140px;">${esc(k as string)}</td><td style="padding:8px;border-bottom:1px solid #eee;">${esc(v as string)}</td></tr>`).join("")}
        </table>
        <h3 style="margin-top:20px;">Message</h3>
        <p style="white-space:pre-wrap;">${esc(message)}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to send. Please try again." }, { status: 500 });
  }
}
