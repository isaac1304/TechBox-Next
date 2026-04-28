import { CSSProperties } from "react";

type IconProps = { size?: number; color?: string; style?: CSSProperties };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none" as const,
});

export const BellIcon = ({ size = 22, color = "currentColor", style }: IconProps) => (
  <svg {...base(size)} stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
);

export const HomeIcon = ({ size = 22, color = "currentColor", style }: IconProps) => (
  <svg {...base(size)} stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1z" />
  </svg>
);

export const ChartIcon = ({ size = 22, color = "currentColor", style }: IconProps) => (
  <svg {...base(size)} stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="M3 3v18h18" />
    <path d="M7 14l4-4 4 4 5-6" />
  </svg>
);

export const GearIcon = ({ size = 22, color = "currentColor", style }: IconProps) => (
  <svg {...base(size)} stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={style}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.01a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

export const ChevRight = ({ size = 14, color = "#C7C7CC", style }: IconProps) => (
  <svg {...base(size)} stroke={color} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" style={style}>
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export const ChevLeft = ({ size = 16, color = "#0A84FF", style }: IconProps) => (
  <svg {...base(size)} stroke={color} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" style={style}>
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

export const CloseIcon = ({ size = 18, color = "currentColor", style }: IconProps) => (
  <svg {...base(size)} stroke={color} strokeWidth={2.4} strokeLinecap="round" style={style}>
    <path d="M6 6l12 12M6 18L18 6" />
  </svg>
);

export const CheckIcon = ({ size = 16, color = "currentColor", style }: IconProps) => (
  <svg {...base(size)} stroke={color} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" style={style}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const SplitIcon = ({ size = 18, color = "currentColor", style }: IconProps) => (
  <svg {...base(size)} stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="M21 7H8M21 7l-3-3M21 7l-3 3M3 17h13M3 17l3 3M3 17l3-3" />
  </svg>
);

export const WalletIcon = ({ size = 22, color = "currentColor", style }: IconProps) => (
  <svg {...base(size)} stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" style={style}>
    <rect x="3" y="6" width="18" height="14" rx="2" />
    <path d="M3 10h18" />
    <circle cx="17" cy="15" r="1.2" fill={color} />
  </svg>
);

export const BNIcon = ({ size = 32 }: { size?: number }) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: 7,
      background: "linear-gradient(180deg,#fff 50%,#0033A0 50%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 0 0 0.5px rgba(0,0,0,0.1)",
      flexShrink: 0,
    }}
  >
    <span
      style={{
        fontFamily: "system-ui",
        fontWeight: 800,
        fontSize: 11,
        color: "#0033A0",
        letterSpacing: -0.5,
        marginTop: -4,
      }}
    >
      BN
    </span>
  </div>
);
