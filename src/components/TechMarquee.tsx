const TECH = [
  "Next.js",
  "Supabase",
  "Stripe",
  "OpenAI",
  "Vapi",
  "Twilio",
  "React Native",
  "Vercel",
  "Daily.co",
  "ElevenLabs",
];

export default function TechMarquee() {
  // The strip duplicates its content twice so translateX(-50%) loops seamlessly.
  const segment = (
    <span className="flex items-center shrink-0">
      <span className="px-6 text-[#B87333] font-medium">POWERED BY:</span>
      {TECH.map((t, i) => (
        <span key={`${t}-${i}`} className="flex items-center shrink-0">
          <span className="px-6 whitespace-nowrap">{t}</span>
          <span aria-hidden className="text-[#CCC]">
            •
          </span>
        </span>
      ))}
    </span>
  );

  return (
    <div
      aria-label="Technology stack"
      className="relative overflow-hidden"
      style={{
        height: 40,
        background: "#F0EFED",
        borderTop: "1px solid #E5E5E3",
        borderBottom: "1px solid #E5E5E3",
      }}
    >
      <div
        className="flex items-center h-full whitespace-nowrap"
        style={{
          fontSize: 11,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#999",
          width: "max-content",
          animation: "tech-marquee 30s linear infinite",
        }}
      >
        {segment}
        {segment}
      </div>
    </div>
  );
}
