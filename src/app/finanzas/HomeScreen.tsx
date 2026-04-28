"use client";

import { useState } from "react";
import {
  CATEGORIES,
  CurrencyDisplay,
  PendingNotification,
  Transaction,
  formatMoney,
} from "./data";
import { CategoryChip, ListGroup, ListRow, ProgressBar } from "./primitives";
import { BellIcon, ChevRight } from "./icons";

type Period = "monthly" | "biweekly";

export default function HomeScreen({
  transactions,
  pendingNotifs,
  period,
  onSwitchPeriod,
  onOpenCategory,
  onGoInbox,
  currencyDisplay,
}: {
  transactions: Transaction[];
  pendingNotifs: PendingNotification[];
  period: Period;
  onSwitchPeriod: (p: Period) => void;
  onOpenCategory: (id: string) => void;
  onGoInbox: () => void;
  currencyDisplay: CurrencyDisplay;
}) {
  const [showBalance, setShowBalance] = useState(true);

  const spendByCat: Record<string, number> = {};
  transactions.forEach((tx) => {
    spendByCat[tx.category] = (spendByCat[tx.category] || 0) + tx.amount;
  });

  const totalBudget = CATEGORIES.reduce((s, c) => s + c.budget, 0);
  const totalSpent = Object.values(spendByCat).reduce((s, v) => s + v, 0);
  const totalRemaining = totalBudget - totalSpent;
  const pctSpent = (totalSpent / totalBudget) * 100;
  const periodLabel = period === "monthly" ? "Abril 2026" : "2da quincena · Abril";
  const fmt = (n: number) => formatMoney(n, currencyDisplay);

  const variableCats = CATEGORIES.filter((c) => !c.fixed);
  const fixedCats = CATEGORIES.filter((c) => c.fixed);

  const daysInMonth = 30;
  const daysElapsed = 28;
  const daysLeft = daysInMonth - daysElapsed;
  const dailyAllowance = totalRemaining / Math.max(daysLeft, 1);

  return (
    <div style={{ paddingBottom: 110 }}>
      <div style={{ padding: "12px 20px 8px" }}>
        <div
          style={{
            fontSize: 13,
            color: "rgba(60,60,67,0.6)",
            fontWeight: 500,
            letterSpacing: 0.2,
            textTransform: "uppercase",
          }}
        >
          Hola, Isaac
        </div>
        <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: -0.8, marginTop: 2 }}>
          Tu presupuesto
        </div>
      </div>

      {/* Period segmented control */}
      <div style={{ padding: "4px 20px 16px" }}>
        <div
          style={{
            display: "flex",
            background: "rgba(120,120,128,0.16)",
            borderRadius: 9,
            padding: 2,
            fontSize: 13,
            fontWeight: 500,
          }}
        >
          {(["monthly", "biweekly"] as const).map((p) => (
            <div
              key={p}
              onClick={() => onSwitchPeriod(p)}
              style={{
                flex: 1,
                textAlign: "center",
                padding: "6px 0",
                background: period === p ? "#fff" : "transparent",
                borderRadius: 7,
                cursor: "pointer",
                boxShadow:
                  period === p
                    ? "0 3px 8px rgba(0,0,0,0.04), 0 0 0 0.5px rgba(0,0,0,0.04)"
                    : "none",
                transition: "background 200ms",
                color: "#000",
              }}
            >
              {p === "monthly" ? "Mensual" : "Quincenal"}
            </div>
          ))}
        </div>
      </div>

      {/* Hero card */}
      <div style={{ padding: "0 16px" }}>
        <div
          style={{
            background: "linear-gradient(135deg, #1a1a1f 0%, #2a2a2f 100%)",
            borderRadius: 18,
            padding: "20px 22px",
            color: "#fff",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div
                style={{
                  fontSize: 12,
                  opacity: 0.7,
                  letterSpacing: 0.3,
                  fontWeight: 500,
                  textTransform: "uppercase",
                }}
              >
                {periodLabel} · Disponible
              </div>
              <div
                onClick={() => setShowBalance(!showBalance)}
                style={{ display: "flex", alignItems: "baseline", gap: 6, marginTop: 6, cursor: "pointer" }}
              >
                <div style={{ fontSize: 36, fontWeight: 700, letterSpacing: -1.2 }}>
                  {showBalance ? fmt(totalRemaining) : "••••••"}
                </div>
              </div>
              <div style={{ fontSize: 13, opacity: 0.65, marginTop: 4 }}>
                de {fmt(totalBudget)} en presupuesto
              </div>
            </div>
            <div
              style={{
                padding: "5px 9px",
                borderRadius: 11,
                background: pctSpent < 80 ? "rgba(52,199,89,0.18)" : "rgba(255,149,0,0.22)",
                color: pctSpent < 80 ? "#7BE894" : "#FFD08A",
                fontSize: 11,
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              <span style={{ fontSize: 9 }}>●</span> {pctSpent < 80 ? "Al día" : pctSpent < 100 ? "Atento" : "Excedido"}
            </div>
          </div>

          <div style={{ marginTop: 16 }}>
            <div
              style={{
                height: 6,
                borderRadius: 3,
                background: "rgba(255,255,255,0.12)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${Math.min(100, pctSpent)}%`,
                  background: "linear-gradient(90deg, #34C759, #30D158)",
                  borderRadius: 3,
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 8,
                fontSize: 12,
                opacity: 0.75,
              }}
            >
              <span>Gastado {fmt(totalSpent)}</span>
              <span>{Math.round(pctSpent)}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Runway card */}
      <div style={{ padding: "14px 16px 0" }}>
        <div
          style={{
            background: "#fff",
            borderRadius: 14,
            padding: "14px 16px",
            display: "flex",
            alignItems: "center",
            gap: 14,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              background: "rgba(10,132,255,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
            }}
          >
            📅
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 500 }}>Quedan {daysLeft} días del mes</div>
            <div style={{ fontSize: 13, color: "rgba(60,60,67,0.6)", marginTop: 2 }}>
              Podés gastar {fmt(dailyAllowance)} por día
            </div>
          </div>
        </div>
      </div>

      {/* Pending notifications banner */}
      {pendingNotifs.length > 0 && (
        <div style={{ padding: "12px 16px 0" }}>
          <div
            onClick={onGoInbox}
            style={{
              background: "linear-gradient(135deg, #FF9500, #FF6B22)",
              borderRadius: 14,
              padding: "14px 16px",
              display: "flex",
              alignItems: "center",
              gap: 14,
              cursor: "pointer",
              color: "#fff",
              boxShadow: "0 6px 20px rgba(255,149,0,0.3)",
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 22,
                background: "rgba(255,255,255,0.22)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <BellIcon size={22} color="#fff" />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15, fontWeight: 600 }}>
                {pendingNotifs.length} notificaciones por clasificar
              </div>
              <div style={{ fontSize: 13, opacity: 0.9, marginTop: 2 }}>
                Total: {fmt(pendingNotifs.reduce((s, n) => s + n.amount, 0))}
              </div>
            </div>
            <ChevRight size={14} color="#fff" />
          </div>
        </div>
      )}

      {/* Categorías variables */}
      <div
        style={{
          padding: "24px 20px 8px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: -0.4 }}>Categorías</div>
        <div style={{ fontSize: 13, color: "rgba(60,60,67,0.6)" }}>{variableCats.length} variables</div>
      </div>

      <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: 8 }}>
        {variableCats.map((cat) => {
          const spent = spendByCat[cat.id] || 0;
          const remaining = cat.budget - spent;
          const pct = (spent / cat.budget) * 100;
          return (
            <div
              key={cat.id}
              onClick={() => onOpenCategory(cat.id)}
              style={{
                background: "#fff",
                borderRadius: 14,
                padding: "14px 16px",
                cursor: "pointer",
                WebkitTapHighlightColor: "transparent",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <CategoryChip category={cat} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <div style={{ fontSize: 15, fontWeight: 500 }}>{cat.name}</div>
                    <div
                      style={{
                        fontSize: 15,
                        fontWeight: 600,
                        color: pct >= 100 ? "#FF3B30" : pct >= 80 ? "#FF9500" : "#000",
                      }}
                    >
                      {fmt(remaining)}
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: 3,
                      fontSize: 12,
                      color: "rgba(60,60,67,0.6)",
                    }}
                  >
                    <span>
                      {fmt(spent)} de {fmt(cat.budget)}
                    </span>
                    <span>{Math.round(pct)}%</span>
                  </div>
                  <div style={{ marginTop: 8 }}>
                    <ProgressBar value={spent} max={cat.budget} color={cat.color} height={5} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Fixed expenses */}
      <div style={{ padding: "24px 20px 8px" }}>
        <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: -0.4 }}>Gastos fijos</div>
        <div style={{ fontSize: 13, color: "rgba(60,60,67,0.6)", marginTop: 2 }}>
          Pagados automáticamente
        </div>
      </div>

      <ListGroup>
        {fixedCats.map((cat, i) => {
          const spent = spendByCat[cat.id] || 0;
          const paid = spent >= cat.budget * 0.95;
          return (
            <ListRow
              key={cat.id}
              left={<CategoryChip category={cat} size={32} />}
              title={cat.name}
              subtitle={paid ? `Pagado · ${fmt(spent)}` : `Pendiente · ${fmt(cat.budget)}`}
              right={paid ? <span style={{ color: "#34C759", fontSize: 18 }}>✓</span> : null}
              isLast={i === fixedCats.length - 1}
              accessory="none"
            />
          );
        })}
      </ListGroup>
    </div>
  );
}
