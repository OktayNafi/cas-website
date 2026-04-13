"use client";

const items = [
  "LIVE NOW",
  "AI RECEPTIONIST DEPLOYED",
  "CUSTOM MEDICAL APP IN BUILD",
  "7 AI AGENTS AVAILABLE",
  "REQUEST QUOTE",
];

export default function Marquee() {
  const text = items.map((t) => `${t} •`).join("  ");
  return (
    <div className="relative z-10 w-full overflow-hidden bg-[#05060A]/80 border-y border-highlight/10 py-4">
      <div className="marquee-track">
        <span
          className="text-xl sm:text-2xl font-bold tracking-[0.15em] text-highlight whitespace-nowrap px-4"
          style={{
            textShadow: "0 0 20px rgba(15, 240, 160, 0.4), 0 0 40px rgba(15, 240, 160, 0.2)",
          }}
        >
          {text}&nbsp;&nbsp;{text}
        </span>
      </div>
    </div>
  );
}
