"use client";

import { CurrencyDisplay, Transaction, formatMoney, getCategory } from "./data";
import { CategoryChip, ListGroup, ListRow, Ring } from "./primitives";
import { ChevLeft } from "./icons";

export default function CategoryScreen({
  catId,
  transactions,
  onBack,
  currencyDisplay,
}: {
  catId: string;
  transactions: Transaction[];
  onBack: () => void;
  currencyDisplay: CurrencyDisplay;
}) {
  const cat = getCategory(catId);
  const fmt = (n: number) => formatMoney(n, currencyDisplay);
  const txs = transactions
    .filter((t) => t.category === catId)
    .sort((a, b) => b.date.localeCompare(a.date));
  const spent = txs.reduce((s, t) => s + t.amount, 0);
  const remaining = cat.budget - spent;
  const pct = (spent / cat.budget) * 100;

  const days = 30;
  const daily = new Array(days).fill(0) as number[];
  txs.forEach((t) => {
    const d = parseInt(t.date.slice(8, 10), 10);
    if (d >= 1 && d <= days) daily[d - 1] += t.amount;
  });
  const max = Math.max(...daily, 1);

  return (
    <div style={{ paddingBottom: 110 }}>
      <div style={{ padding: "8px 12px 4px", display: "flex", alignItems: "center" }}>
        <div
          onClick={onBack}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            padding: 8,
            cursor: "pointer",
            color: "#0A84FF",
            fontSize: 17,
          }}
        >
          <ChevLeft /> Inicio
        </div>
      </div>

      <div style={{ padding: "6px 20px 8px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <CategoryChip category={cat} size={48} />
          <div>
            <div
              style={{
                fontSize: 13,
                color: "rgba(60,60,67,0.6)",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: 0.3,
              }}
            >
              Categoría
            </div>
            <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: -0.5 }}>{cat.name}</div>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div style={{ padding: "8px 16px 0" }}>
        <div style={{ background: "#fff", borderRadius: 18, padding: "20px 22px" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: 13, color: "rgba(60,60,67,0.6)", fontWeight: 500 }}>Disponible</div>
              <div
                style={{
                  fontSize: 36,
                  fontWeight: 700,
                  letterSpacing: -1,
                  color: pct >= 100 ? "#FF3B30" : pct >= 80 ? "#FF9500" : "#000",
                }}
              >
                {fmt(remaining)}
              </div>
              <div style={{ fontSize: 13, color: "rgba(60,60,67,0.6)", marginTop: 2 }}>
                de {fmt(cat.budget)} este mes
              </div>
            </div>
            <Ring
              value={spent}
              max={cat.budget}
              size={84}
              stroke={8}
              color={cat.color}
              label={`${Math.round(pct)}%`}
              sublabel="usado"
            />
          </div>

          <div style={{ marginTop: 18, height: 64, display: "flex", alignItems: "flex-end", gap: 2 }}>
            {daily.map((v, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: `${(v / max) * 100}%`,
                  minHeight: v > 0 ? 4 : 1,
                  background: v > 0 ? cat.color : "rgba(120,120,128,0.16)",
                  borderRadius: 2,
                  opacity: v > 0 ? 0.8 : 1,
                }}
              />
            ))}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 11,
              color: "rgba(60,60,67,0.5)",
              marginTop: 6,
            }}
          >
            <span>1 abr</span>
            <span>15</span>
            <span>30</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div
        style={{
          padding: "12px 16px 0",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 8,
        }}
      >
        {[
          { label: "Compras", value: String(txs.length) },
          { label: "Promedio", value: txs.length ? fmt(spent / txs.length) : fmt(0) },
          { label: "Mayor", value: txs.length ? fmt(Math.max(...txs.map((t) => t.amount))) : fmt(0) },
        ].map((s, i) => (
          <div key={i} style={{ background: "#fff", borderRadius: 12, padding: "10px 12px" }}>
            <div
              style={{
                fontSize: 11,
                color: "rgba(60,60,67,0.6)",
                textTransform: "uppercase",
                letterSpacing: 0.3,
                fontWeight: 500,
              }}
            >
              {s.label}
            </div>
            <div style={{ fontSize: 16, fontWeight: 600, marginTop: 2, letterSpacing: -0.3 }}>
              {s.value}
            </div>
          </div>
        ))}
      </div>

      {/* History */}
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
        Historial · {txs.length}
      </div>
      {txs.length === 0 ? (
        <div
          style={{
            margin: "0 16px",
            padding: 32,
            background: "#fff",
            borderRadius: 14,
            textAlign: "center",
            color: "rgba(60,60,67,0.6)",
            fontSize: 14,
          }}
        >
          Sin compras este mes
        </div>
      ) : (
        <ListGroup>
          {txs.map((tx, i) => (
            <ListRow
              key={tx.id}
              left={<CategoryChip category={cat} size={36} />}
              title={tx.merchant}
              subtitle={new Date(tx.date + "T12:00:00").toLocaleDateString("es-CR", {
                weekday: "short",
                day: "numeric",
                month: "short",
              })}
              right={fmt(tx.amount)}
              isLast={i === txs.length - 1}
              accessory="none"
            />
          ))}
        </ListGroup>
      )}
    </div>
  );
}
