type IconType =
  | "receptionist"
  | "pm"
  | "custom-dev"
  | "lead-gen"
  | "support"
  | "automation"
  | "consulting";

const STROKE = "#0A0A0A";
const COPPER = "#B87333";

export default function AgentIcon({ type }: { type: IconType }) {
  return (
    <span
      className="agent-icon inline-block pointer-events-none"
      style={{ width: 48, height: 48 }}
      aria-hidden="true"
    >
      {type === "receptionist" && <ReceptionistIcon />}
      {type === "pm" && <PMIcon />}
      {type === "custom-dev" && <CustomDevIcon />}
      {type === "lead-gen" && <LeadGenIcon />}
      {type === "support" && <SupportIcon />}
      {type === "automation" && <AutomationIcon />}
      {type === "consulting" && <ConsultingIcon />}
    </span>
  );
}

/* 1. Recepta — 3 pulsing sound wave bars, black with copper tips */
function ReceptionistIcon() {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" fill="none">
      {/* Each group transforms about its own center; outer group sets scaleY pivot */}
      {[0, 1, 2].map((i) => {
        const x = 14 + i * 8;
        const animation = `pulse-bar-${i + 1} 2s ease-in-out infinite`;
        return (
          <g key={i} style={{ transformOrigin: `${x + 3}px 24px`, animation }}>
            <rect
              x={x}
              y={10}
              width={6}
              height={28}
              rx={1}
              fill={STROKE}
              data-fill-black
            />
            {/* Copper tip */}
            <rect x={x} y={10} width={6} height={4} rx={1} fill={COPPER} />
          </g>
        );
      })}
    </svg>
  );
}

/* 2. AI PM — 3-column kanban, tasks slide down */
function PMIcon() {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" fill="none">
      {/* Board outline */}
      <rect
        x={6}
        y={8}
        width={36}
        height={32}
        rx={2}
        stroke={STROKE}
        strokeWidth={1.5}
        data-stroke
      />
      {/* Column dividers */}
      <line x1={18} y1={8} x2={18} y2={40} stroke={STROKE} strokeWidth={1} data-stroke />
      <line x1={30} y1={8} x2={30} y2={40} stroke={STROKE} strokeWidth={1} data-stroke />

      {/* Tasks — subtle slide animation */}
      <g style={{ animation: "kanban-slide-1 4s ease-in-out infinite" }}>
        <rect x={8} y={13} width={8} height={4} rx={1} fill={COPPER} />
        <rect x={8} y={20} width={8} height={4} rx={1} fill={STROKE} data-fill-black />
      </g>
      <g style={{ animation: "kanban-slide-2 4s ease-in-out infinite" }}>
        <rect x={20} y={13} width={8} height={4} rx={1} fill={STROKE} data-fill-black />
        <rect x={20} y={20} width={8} height={4} rx={1} fill={COPPER} />
      </g>
      <g>
        <rect x={32} y={13} width={8} height={4} rx={1} fill={STROKE} data-fill-black />
        <rect x={32} y={20} width={8} height={4} rx={1} fill={STROKE} data-fill-black />
      </g>
    </svg>
  );
}

/* 3. Custom Dev — < /> with blinking cursor */
function CustomDevIcon() {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" fill="none">
      <path
        d="M14 16 L6 24 L14 32"
        stroke={STROKE}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        data-stroke
      />
      <path
        d="M30 16 L38 24 L30 32"
        stroke={STROKE}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        data-stroke
      />
      <line
        x1={19}
        y1={34}
        x2={25}
        y2={14}
        stroke={STROKE}
        strokeWidth={2}
        strokeLinecap="round"
        data-stroke
      />
      {/* Blinking cursor */}
      <rect
        x={41}
        y={19}
        width={3}
        height={10}
        fill={COPPER}
        style={{ animation: "cursor-blink 1s steps(1) infinite" }}
      />
    </svg>
  );
}

/* 4. Lead Gen — ascending bars growing staggered */
function LeadGenIcon() {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" fill="none">
      {/* Baseline */}
      <line x1={6} y1={40} x2={42} y2={40} stroke={STROKE} strokeWidth={1} data-stroke />

      <g style={{ transformOrigin: "13px 40px", animation: "bar-grow-1 2s ease-out infinite" }}>
        <rect x={9} y={28} width={8} height={12} fill={STROKE} data-fill-black />
      </g>
      <g style={{ transformOrigin: "24px 40px", animation: "bar-grow-2 2s ease-out infinite" }}>
        <rect x={20} y={20} width={8} height={20} fill={STROKE} data-fill-black />
      </g>
      <g style={{ transformOrigin: "35px 40px", animation: "bar-grow-3 2s ease-out infinite" }}>
        <rect x={31} y={10} width={8} height={30} fill={COPPER} />
      </g>
    </svg>
  );
}

/* 5. Support — chat bubble with typing dots */
function SupportIcon() {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" fill="none">
      <path
        d="M8 12 H40 A2 2 0 0 1 42 14 V30 A2 2 0 0 1 40 32 H22 L14 38 V32 H8 A2 2 0 0 1 6 30 V14 A2 2 0 0 1 8 12 Z"
        stroke={STROKE}
        strokeWidth={1.5}
        strokeLinejoin="round"
        fill="none"
        data-stroke
      />
      <circle
        cx={17}
        cy={22}
        r={2}
        fill={STROKE}
        data-fill-black
        style={{ animation: "dot-typing-1 1.5s ease-in-out infinite" }}
      />
      <circle
        cx={24}
        cy={22}
        r={2}
        fill={COPPER}
        style={{ animation: "dot-typing-2 1.5s ease-in-out infinite" }}
      />
      <circle
        cx={31}
        cy={22}
        r={2}
        fill={STROKE}
        data-fill-black
        style={{ animation: "dot-typing-3 1.5s ease-in-out infinite" }}
      />
    </svg>
  );
}

/* 6. Automation — three connected nodes, copper dot travels the path */
function AutomationIcon() {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" fill="none">
      {/* Connecting lines */}
      <path
        id="automation-path"
        d="M10 14 L38 14 L38 34 L10 34 Z"
        stroke={STROKE}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        data-stroke
      />
      {/* Nodes */}
      <circle cx={10} cy={14} r={3.5} fill="#FFFFFF" stroke={STROKE} strokeWidth={1.5} data-stroke />
      <circle cx={38} cy={14} r={3.5} fill="#FFFFFF" stroke={STROKE} strokeWidth={1.5} data-stroke />
      <circle cx={38} cy={34} r={3.5} fill="#FFFFFF" stroke={STROKE} strokeWidth={1.5} data-stroke />
      <circle cx={10} cy={34} r={3.5} fill="#FFFFFF" stroke={STROKE} strokeWidth={1.5} data-stroke />

      {/* Traveling copper dot */}
      <circle
        r={2.5}
        fill={COPPER}
        style={{
          offsetPath: "path('M10 14 L38 14 L38 34 L10 34 Z')",
          animation: "node-travel 3s linear infinite",
        }}
      />
    </svg>
  );
}

/* 7. Consulting — lightbulb with pulsing copper filament */
function ConsultingIcon() {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" fill="none">
      {/* Bulb outline */}
      <path
        d="M24 8 C17.4 8 12 13.4 12 20 C12 24.4 14.4 28.2 18 30.2 V34 H30 V30.2 C33.6 28.2 36 24.4 36 20 C36 13.4 30.6 8 24 8 Z"
        stroke={STROKE}
        strokeWidth={1.5}
        strokeLinejoin="round"
        fill="none"
        data-stroke
      />
      {/* Base */}
      <line x1={19} y1={37} x2={29} y2={37} stroke={STROKE} strokeWidth={1.5} data-stroke />
      <line x1={20} y1={40} x2={28} y2={40} stroke={STROKE} strokeWidth={1.5} data-stroke />

      {/* Glowing copper filament */}
      <g style={{ animation: "filament-glow 2s ease-in-out infinite" }}>
        <path
          d="M20 18 Q24 22 28 18 M24 22 V28"
          stroke={COPPER}
          strokeWidth={2}
          strokeLinecap="round"
          fill="none"
        />
      </g>
    </svg>
  );
}
