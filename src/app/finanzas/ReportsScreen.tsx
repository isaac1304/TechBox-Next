"use client";

import {
  CATEGORIES,
  CurrencyDisplay,
  FX_RATE,
  Transaction,
  formatMoney,
  getCategory,
} from "./data";
import { CategoryChip, ListGroup, ListRow } from "./primitives";

export default function ReportsScreen({
  transactions,
  currencyDisplay,
}: {
  transactions: Transaction[];
  currencyDisplay: CurrencyDisplay;
}) {
  const fmt = (n: number) => formatMoney(n, currencyDisplay);

  const spendByCat: Record<string, number> = {};
  transactions.forEach((tx) => {
    spendByCat[tx.category] = (spendByCat[tx.category] || 0) + tx.amount;
  });
  const total = Object.values(spendByCat).reduce((s, v) => s + v, 0);

  const ranked = CATEGORIES.map((c) => ({ ...c, spent: spendByCat[c.id] || 0 }))
    .filter((c) => c.spent > 0)
    .sort((a, b) => b.spent - a.spent);

  const size = 200;
  const stroke = 28;
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  let acc = 0;
  const segments = ranked.map((c) => {
    const frac = c.spent / total;
    const seg = { ...c, frac, offset: acc };
    acc += frac;
    return seg;
  });

  const months = ["Nov", "Dic", "Ene", "Feb", "Mar", "Abr"];
  const monthlyTotals = [1320000, 1480000, 1390000, 1420000, 1510000, total];
  const maxMonth = Math.max(...monthlyTotals);

  // Top merchants
  type MerchantAgg = { name: string; total: number; count: number; category: string };
  const byMerchant: Record<string, MerchantAgg> = {};
  transactions.forEach((t) => {
    if (!byMerchant[t.merchant]) {
      byMerchant[t.merchant] = { name: t.merchant, total: 0, count: 0, category: t.category };
    }
    byMerchant[t.merchant].total += t.amount;
    byMerchant[t.merchant].count++;
  });
  const topMerchants = Object.values(byMerchant)
    .sort((a, b) => b.total - a.total)
    .slice(0, 6);

  return (
    <div style={{ paddingBottom: 110 }}>
      <div style={{ padding: "14px 20px 8px" }}>
        <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: -0.8 }}>Reportes</div>
        <div style={{ fontSize: 14, color: "rgba(60,60,67,0.6)", marginTop: 2 }}>Abril 2026</div>
      </div>

      {/* Donut */}
      <div style={{ padding: "8px 16px 0" }}>
        <div style={{ background: "#fff", borderRadius: 18, padding: "20px 16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
              <circle
                cx={size / 2}
                cy={size / 2}
                r={r}
                fill="none"
                stroke="rgba(120,120,128,0.12)"
                strokeWidth={stroke}
              />
              {segments.map((s, i) => (
                <circle
                  key={i}
                  cx={size / 2}
                  cy={size / 2}
                  r={r}
                  fill="none"
                  stroke={s.color}
                  strokeWidth={stroke}
                  strokeDasharray={`${s.frac * circ} ${circ}`}
                  strokeDashoffset={-s.offset * circ}
                  style={{ transition: "all 800ms cubic-bezier(0.34, 1.56, 0.64, 1)" }}
                />
              ))}
            </svg>
            <div style={{ position: "absolute", textAlign: "center" }}>
              <div
                style={{
                  fontSize: 12,
                  color: "rgba(60,60,67,0.6)",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: 0.3,
                }}
              >
                Total
              </div>
              <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: -0.6 }}>{fmt(total)}</div>
              <div style={{ fontSize: 12, color: "rgba(60,60,67,0.6)", marginTop: 2 }}>
                {transactions.length} compras
              </div>
            </div>
          </div>

          {/* Legend */}
          <div
            style={{
              marginTop: 16,
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 8,
            }}
          >
            {ranked.slice(0, 8).map((c) => (
              <div
                key={c.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  minWidth: 0,
                }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 3,
                    background: c.color,
                    flexShrink: 0,
                  }}
                />
                <div
                  style={{
                    fontSize: 12,
                    flex: 1,
                    minWidth: 0,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {c.name}
                </div>
                <div style={{ fontSize: 12, fontWeight: 600 }}>
                  {Math.round((c.spent / total) * 100)}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6-month trend */}
      <div style={{ padding: "14px 16px 0" }}>
        <div style={{ background: "#fff", borderRadius: 18, padding: "16px 18px" }}>
          <div style={{ fontSize: 14, fontWeight: 600 }}>Últimos 6 meses</div>
          <div style={{ fontSize: 12, color: "rgba(60,60,67,0.6)", marginTop: 2 }}>
            Gasto total mensual
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: 10,
              height: 110,
              marginTop: 14,
            }}
          >
            {monthlyTotals.map((m, i) => {
              const h = (m / maxMonth) * 100;
              const isCurrent = i === monthlyTotals.length - 1;
              return (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      color: isCurrent ? "#0A84FF" : "rgba(60,60,67,0.5)",
                    }}
                  >
                    {currencyDisplay === "USD"
                      ? "$" + Math.round((m / FX_RATE / 100)) / 10 + "k"
                      : "₡" + Math.round(m / 1000) + "k"}
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: `${h}%`,
                      background: isCurrent ? "#0A84FF" : "rgba(10,132,255,0.3)",
                      borderRadius: 6,
                      minHeight: 4,
                    }}
                  />
                  <div
                    style={{
                      fontSize: 11,
                      color: isCurrent ? "#000" : "rgba(60,60,67,0.6)",
                      fontWeight: isCurrent ? 600 : 400,
                    }}
                  >
                    {months[i]}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Top merchants */}
      <div
        style={{
          padding: "24px 20px 6px",
          fontSize: 13,
          fontWeight: 500,
          color: "rgba(60,60,67,0.6)",
          textTransform: "uppercase",
          letterSpacing: 0.3,
        }}
      >
        Top comercios
      </div>
      <ListGroup>
        {topMerchants.map((m, i) => (
          <ListRow
            key={i}
            left={<CategoryChip category={getCategory(m.category)} size={36} />}
            title={m.name}
            subtitle={`${m.count} ${m.count === 1 ? "compra" : "compras"}`}
            right={fmt(m.total)}
            isLast={i === topMerchants.length - 1}
            accessory="none"
          />
        ))}
      </ListGroup>

      {/* Insights */}
      <div
        style={{
          padding: "0 20px 6px",
          fontSize: 13,
          fontWeight: 500,
          color: "rgba(60,60,67,0.6)",
          textTransform: "uppercase",
          letterSpacing: 0.3,
        }}
      >
        Insights
      </div>
      <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: 8 }}>
        {[
          {
            icon: "📈",
            tone: "#FF9500",
            title: "Restaurantes ↑ 18%",
            body: "Comparado con marzo. Llevás 6 visitas este mes.",
          },
          {
            icon: "⛽",
            tone: "#34C759",
            title: "Combustible bajo control",
            body: "Vas un 12% por debajo de tu promedio.",
          },
          {
            icon: "🎯",
            tone: "#0A84FF",
            title: "Cerca de la meta de ahorro",
            body: `Te faltan ${fmt(45000)} para cerrar abril en verde.`,
          },
        ].map((it, i) => (
          <div
            key={i}
            style={{
              background: "#fff",
              borderRadius: 14,
              padding: "14px 16px",
              display: "flex",
              gap: 12,
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 18,
                background: it.tone + "22",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 18,
                flexShrink: 0,
              }}
            >
              {it.icon}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15, fontWeight: 600 }}>{it.title}</div>
              <div
                style={{
                  fontSize: 13,
                  color: "rgba(60,60,67,0.7)",
                  marginTop: 2,
                  lineHeight: 1.4,
                }}
              >
                {it.body}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
