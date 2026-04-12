import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();
    const { name, email, company, companySize, industry, service, budget, timeline, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

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
      to: "hello@companyaisolutions.co.uk",
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
