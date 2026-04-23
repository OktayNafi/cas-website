type LogoProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const SIZES = {
  sm: { wordmark: "text-[22px]", caption: "text-[7px]", gap: 4, rule: 18 },
  md: { wordmark: "text-[28px]", caption: "text-[9px]", gap: 6, rule: 24 },
  lg: { wordmark: "text-[48px]", caption: "text-[10px]", gap: 8, rule: 36 },
} as const;

export default function Logo({ size = "md", className = "" }: LogoProps) {
  const s = SIZES[size];
  return (
    <span
      className={`inline-flex flex-col items-center ${className}`}
      aria-label="Company AI Solutions"
    >
      <span
        className={`${s.wordmark} font-black uppercase leading-none tracking-[0.05em] text-[#0A0A0A]`}
      >
        CAS
      </span>
      <span
        className="flex items-center"
        style={{ marginTop: s.gap, gap: 8 }}
        aria-hidden="true"
      >
        <span
          style={{ width: s.rule, height: 1, background: "#0A0A0A" }}
        />
        <span
          className={`${s.caption} uppercase tracking-[0.2em] text-[#0A0A0A]`}
        >
          Company AI Solutions
        </span>
        <span
          style={{ width: s.rule, height: 1, background: "#0A0A0A" }}
        />
      </span>
    </span>
  );
}
