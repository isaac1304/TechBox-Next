"use client";

import { CSSProperties, ReactNode, useState } from "react";
import { Category } from "./data";
import { BellIcon, ChartIcon, ChevRight, GearIcon, HomeIcon } from "./icons";

export function ProgressBar({
  value,
  max,
  color = "#0A84FF",
  height = 6,
}: {
  value: number;
  max: number;
  color?: string;
  height?: number;
}) {
  const pct = Math.min(100, (value / max) * 100);
  let displayColor = color;
  if (pct >= 100) displayColor = "#FF3B30";
  else if (pct >= 80) displayColor = "#FF9500";
  return (
    <div
      style={{
        height,
        borderRadius: height / 2,
        background: "rgba(120,120,128,0.16)",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <div
        style={{
          height: "100%",
          width: `${pct}%`,
          background: displayColor,
          borderRadius: height / 2,
          transition: "width 600ms cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      />
    </div>
  );
}

export function Ring({
  value,
  max,
  size = 150,
  stroke = 12,
  color = "#0A84FF",
  label,
  sublabel,
}: {
  value: number;
  max: number;
  size?: number;
  stroke?: number;
  color?: string;
  label?: string;
  sublabel?: string;
}) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = Math.min(1, value / max);
  const offset = c * (1 - pct);
  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(120,120,128,0.18)" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 800ms cubic-bezier(0.34, 1.56, 0.64, 1)" }}
        />
      </svg>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {sublabel && (
          <div style={{ fontSize: 11, color: "rgba(60,60,67,0.6)", letterSpacing: 0.2, fontWeight: 500 }}>
            {sublabel}
          </div>
        )}
        {label && (
          <div style={{ fontSize: size > 140 ? 26 : 20, fontWeight: 700, letterSpacing: -0.5, color: "#000" }}>
            {label}
          </div>
        )}
      </div>
    </div>
  );
}

export function CategoryChip({ category, size = 36 }: { category: Category | null | undefined; size?: number }) {
  if (!category) return null;
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: size / 2.6,
        background: category.color + "22",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: size * 0.5,
        flexShrink: 0,
      }}
    >
      <span>{category.emoji}</span>
    </div>
  );
}

export function ListGroup({
  header,
  footer,
  children,
}: {
  header?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div style={{ marginBottom: 28 }}>
      {header && (
        <div
          style={{
            textTransform: "uppercase",
            fontSize: 13,
            letterSpacing: 0.3,
            color: "rgba(60,60,67,0.6)",
            padding: "0 16px 6px 16px",
            fontWeight: 400,
          }}
        >
          {header}
        </div>
      )}
      <div
        style={{
          margin: "0 16px",
          borderRadius: 12,
          background: "#fff",
          overflow: "hidden",
        }}
      >
        {children}
      </div>
      {footer && (
        <div
          style={{
            fontSize: 13,
            color: "rgba(60,60,67,0.6)",
            padding: "6px 16px 0 16px",
            lineHeight: 1.35,
          }}
        >
          {footer}
        </div>
      )}
    </div>
  );
}

export function ListRow({
  left,
  title,
  subtitle,
  right,
  onClick,
  isLast,
  accessory = "chevron",
}: {
  left?: ReactNode;
  title?: ReactNode;
  subtitle?: ReactNode;
  right?: ReactNode;
  onClick?: () => void;
  isLast?: boolean;
  accessory?: "chevron" | "none";
}) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseDown={() => setHover(true)}
      onMouseUp={() => setHover(false)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex",
        alignItems: "center",
        padding: "11px 16px",
        gap: 12,
        borderBottom: isLast ? "none" : "0.5px solid rgba(60,60,67,0.18)",
        cursor: onClick ? "pointer" : "default",
        minHeight: 44,
        background: hover && onClick ? "rgba(0,0,0,0.04)" : "transparent",
        transition: "background 100ms",
        WebkitTapHighlightColor: "transparent",
      }}
    >
      {left}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontSize: 16,
            color: "#000",
            fontWeight: 400,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </div>
        {subtitle && (
          <div style={{ fontSize: 13, color: "rgba(60,60,67,0.6)", marginTop: 1 }}>{subtitle}</div>
        )}
      </div>
      {right && <div style={{ fontSize: 16, color: "rgba(60,60,67,0.6)" }}>{right}</div>}
      {accessory === "chevron" && onClick && <ChevRight />}
    </div>
  );
}

export function Sheet({
  open,
  onClose,
  children,
  height = "85%",
}: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  height?: string;
}) {
  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.4)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 250ms",
          zIndex: 50,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height,
          background: "#F2F2F7",
          borderTopLeftRadius: 14,
          borderTopRightRadius: 14,
          transform: open ? "translateY(0)" : "translateY(110%)",
          transition: "transform 360ms cubic-bezier(0.32, 0.72, 0, 1)",
          zIndex: 51,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", padding: "8px 0 4px" }}>
          <div style={{ width: 36, height: 5, borderRadius: 3, background: "rgba(60,60,67,0.3)" }} />
        </div>
        {children}
      </div>
    </>
  );
}

export function BigButton({
  children,
  onClick,
  kind = "primary",
  disabled,
}: {
  children: ReactNode;
  onClick?: () => void;
  kind?: "primary" | "secondary" | "danger" | "ghost";
  disabled?: boolean;
}) {
  const styles: CSSProperties =
    kind === "primary"
      ? { background: "#0A84FF", color: "#fff" }
      : kind === "secondary"
      ? { background: "rgba(120,120,128,0.16)", color: "#0A84FF" }
      : kind === "danger"
      ? { background: "#FF3B30", color: "#fff" }
      : { background: "transparent", color: "#0A84FF" };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        ...styles,
        border: "none",
        borderRadius: 14,
        padding: "14px 16px",
        width: "100%",
        fontSize: 17,
        fontWeight: 600,
        cursor: disabled ? "default" : "pointer",
        opacity: disabled ? 0.5 : 1,
        fontFamily: "inherit",
        WebkitTapHighlightColor: "transparent",
      }}
    >
      {children}
    </button>
  );
}

export type TabId = "home" | "inbox" | "reports" | "settings";

export function TabBar({
  active,
  onChange,
  pendingCount,
}: {
  active: TabId;
  onChange: (id: TabId) => void;
  pendingCount: number;
}) {
  const tabs: { id: TabId; label: string; Icon: typeof HomeIcon }[] = [
    { id: "home", label: "Inicio", Icon: HomeIcon },
    { id: "inbox", label: "Bandeja", Icon: BellIcon },
    { id: "reports", label: "Reportes", Icon: ChartIcon },
    { id: "settings", label: "Ajustes", Icon: GearIcon },
  ];
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        paddingBottom: 28,
        background: "rgba(255,255,255,0.78)",
        backdropFilter: "blur(30px)",
        WebkitBackdropFilter: "blur(30px)",
        borderTop: "0.5px solid rgba(60,60,67,0.29)",
        display: "flex",
        justifyContent: "space-around",
        paddingTop: 8,
        zIndex: 20,
      }}
    >
      {tabs.map((t) => {
        const isActive = active === t.id;
        const c = isActive ? "#0A84FF" : "#8E8E93";
        const showBadge = t.id === "inbox" && pendingCount > 0;
        return (
          <div
            key={t.id}
            onClick={() => onChange(t.id)}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              cursor: "pointer",
              padding: "4px 14px",
              position: "relative",
              WebkitTapHighlightColor: "transparent",
            }}
          >
            <t.Icon size={26} color={c} />
            <div style={{ fontSize: 10, fontWeight: 500, color: c }}>{t.label}</div>
            {showBadge && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 6,
                  minWidth: 18,
                  height: 18,
                  borderRadius: 9,
                  background: "#FF3B30",
                  color: "#fff",
                  fontSize: 11,
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0 5px",
                  border: "1.5px solid rgba(255,255,255,0.95)",
                }}
              >
                {pendingCount}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
