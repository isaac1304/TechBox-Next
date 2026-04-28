"use client";

import {
  CurrencyDisplay,
  PendingNotification,
  Transaction,
  formatMoney,
  getCategory,
} from "./data";
import { CategoryChip, ListGroup, ListRow } from "./primitives";
import { BNIcon } from "./icons";

export default function InboxScreen({
  pendingNotifs,
  transactions,
  onOpenNotif,
  currencyDisplay,
}: {
  pendingNotifs: PendingNotification[];
  transactions: Transaction[];
  onOpenNotif: (id: string) => void;
  currencyDisplay: CurrencyDisplay;
}) {
  const fmt = (n: number) => formatMoney(n, currencyDisplay);

  const byDate: Record<string, PendingNotification[]> = {};
  pendingNotifs.forEach((n) => {
    const d = n.receivedAt.slice(0, 10);
    (byDate[d] = byDate[d] || []).push(n);
  });

  const recentTx = [...transactions].reverse().slice(0, 8);

  function dateLabel(d: string) {
    if (d === "2026-04-28") return "Hoy";
    if (d === "2026-04-27") return "Ayer";
    return new Date(d + "T12:00:00").toLocaleDateString("es-CR", {
      weekday: "long",
      day: "numeric",
      month: "short",
    });
  }

  function timeLabel(iso: string) {
    return iso.slice(11, 16);
  }

  return (
    <div style={{ paddingBottom: 110 }}>
      <div style={{ padding: "14px 20px 8px" }}>
        <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: -0.8 }}>Bandeja</div>
        <div style={{ fontSize: 14, color: "rgba(60,60,67,0.6)", marginTop: 2 }}>
          {pendingNotifs.length}{" "}
          {pendingNotifs.length === 1 ? "notificación pendiente" : "notificaciones pendientes"}
        </div>
      </div>

      {pendingNotifs.length === 0 && (
        <div style={{ padding: "60px 24px", textAlign: "center" }}>
          <div style={{ fontSize: 56, marginBottom: 12 }}>✨</div>
          <div style={{ fontSize: 18, fontWeight: 600 }}>Todo clasificado</div>
          <div style={{ fontSize: 14, color: "rgba(60,60,67,0.6)", marginTop: 6 }}>
            Cuando llegue una compra nueva, aparecerá aquí.
          </div>
        </div>
      )}

      {Object.keys(byDate)
        .sort()
        .reverse()
        .map((date) => (
          <div key={date}>
            <div
              style={{
                padding: "14px 20px 6px",
                fontSize: 13,
                fontWeight: 500,
                color: "rgba(60,60,67,0.6)",
                textTransform: "capitalize",
              }}
            >
              {dateLabel(date)}
            </div>
            <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: 8 }}>
              {byDate[date].map((n) => {
                const cat = n.suggested ? getCategory(n.suggested) : null;
                return (
                  <div
                    key={n.id}
                    onClick={() => onOpenNotif(n.id)}
                    style={{
                      background: "#fff",
                      borderRadius: 14,
                      padding: "12px 14px",
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      cursor: "pointer",
                      WebkitTapHighlightColor: "transparent",
                    }}
                  >
                    <BNIcon />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "baseline",
                          gap: 8,
                        }}
                      >
                        <div
                          style={{
                            fontSize: 15,
                            fontWeight: 600,
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {n.merchant}
                        </div>
                        <div style={{ fontSize: 15, fontWeight: 600 }}>{fmt(n.amount)}</div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginTop: 4,
                          gap: 8,
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: 6, minWidth: 0, flex: 1 }}>
                          {cat && (
                            <>
                              <span style={{ fontSize: 13 }}>{cat.emoji}</span>
                              <span
                                style={{
                                  fontSize: 13,
                                  color: "rgba(60,60,67,0.7)",
                                  whiteSpace: "nowrap",
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                }}
                              >
                                Sugerido: {cat.name}
                              </span>
                            </>
                          )}
                          {!cat && (
                            <span style={{ fontSize: 13, color: "rgba(60,60,67,0.7)" }}>Sin sugerencia</span>
                          )}
                        </div>
                        <span
                          style={{
                            fontSize: 12,
                            color: "rgba(60,60,67,0.5)",
                            flexShrink: 0,
                          }}
                        >
                          {timeLabel(n.receivedAt)}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

      {/* Recent classified */}
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
        Clasificadas
      </div>
      <ListGroup>
        {recentTx.map((tx, i) => {
          const cat = getCategory(tx.category);
          return (
            <ListRow
              key={tx.id}
              left={<CategoryChip category={cat} size={36} />}
              title={tx.merchant}
              subtitle={`${cat.name} · ${new Date(tx.date + "T12:00:00").toLocaleDateString("es-CR", {
                day: "numeric",
                month: "short",
              })}`}
              right={fmt(tx.amount)}
              isLast={i === recentTx.length - 1}
              accessory="none"
            />
          );
        })}
      </ListGroup>
    </div>
  );
}
