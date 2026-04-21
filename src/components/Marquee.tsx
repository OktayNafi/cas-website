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
    <div className="relative z-10 w-full overflow-hidden bg-[#05060A]/80 border-y border-highlight/5 py-3">
      <div className="marquee-track">
        <span
          className="text-base font-medium tracking-[0.15em] text-highlight whitespace-nowrap px-4"
          style={{ opacity: 0.7 }}
        >
          {text}&nbsp;&nbsp;{text}
        </span>
      </div>
    </div>
  );
}
