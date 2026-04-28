"use client";

import { useEffect, useState } from "react";
import {
  CATEGORIES,
  CurrencyDisplay,
  PendingNotification,
  formatCRC,
  formatMoney,
  formatUSD,
  getCategory,
} from "./data";
import { BigButton } from "./primitives";
import { BNIcon, ChevRight, SplitIcon } from "./icons";

const POPULAR = [
  "restaurante",
  "super",
  "combustible",
  "feria",
  "carniceria",
  "recreacion",
  "medicamentos",
  "otros",
];

export default function NotifDetail({
  notif,
  onClose,
  onConfirm,
  currencyDisplay,
}: {
  notif: PendingNotification | null;
  onClose: () => void;
  onConfirm: (id: string, catId: string, createRule: boolean) => void;
  currencyDisplay: CurrencyDisplay;
}) {
  const [selectedCat, setSelectedCat] = useState<string>(notif?.suggested ?? "otros");
  const [createRule, setCreateRule] = useState(true);
  const [showAllCats, setShowAllCats] = useState(false);

  useEffect(() => {
    if (notif) setSelectedCat(notif.suggested ?? "otros");
  }, [notif?.id, notif]);

  if (!notif) return null;
  const fmt = (n: number) => formatMoney(n, currencyDisplay);
  const time = new Date(notif.receivedAt).toLocaleString("es-CR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "2-digit",
  });

  const visibleCats = showAllCats ? CATEGORIES : CATEGORIES.filter((c) => POPULAR.includes(c.id));

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 16px 4px",
        }}
      >
        <div
          onClick={onClose}
          style={{ padding: 8, cursor: "pointer", color: "#0A84FF", fontSize: 16, fontWeight: 500 }}
        >
          Cancelar
        </div>
        <div style={{ fontSize: 16, fontWeight: 600 }}>Clasificar</div>
        <div style={{ width: 60 }} />
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "8px 0 24px" }}>
        {/* Notif preview */}
        <div style={{ padding: "0 16px" }}>
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              padding: "16px 18px",
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <BNIcon />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, color: "rgba(60,60,67,0.6)", fontWeight: 500 }}>{notif.bank}</div>
              <div style={{ fontSize: 17, fontWeight: 600, marginTop: 1 }}>{notif.merchant}</div>
              <div
                style={{
                  fontSize: 13,
                  color: "rgba(60,60,67,0.6)",
                  marginTop: 1,
                  textTransform: "capitalize",
                }}
              >
                {time}
              </div>
            </div>
          </div>
        </div>

        {/* Amount */}
        <div style={{ padding: "20px 16px 8px", textAlign: "center" }}>
          <div
            style={{
              fontSize: 13,
              color: "rgba(60,60,67,0.6)",
              textTransform: "uppercase",
              letterSpacing: 0.3,
              fontWeight: 500,
            }}
          >
            Monto
          </div>
          <div style={{ fontSize: 48, fontWeight: 700, letterSpacing: -1.6, marginTop: 4 }}>
            {fmt(notif.amount)}
          </div>
          {currencyDisplay !== "BOTH" && (
            <div style={{ fontSize: 14, color: "rgba(60,60,67,0.5)", marginTop: 2 }}>
              ≈ {currencyDisplay === "USD" ? formatCRC(notif.amount) : formatUSD(notif.amount)}
            </div>
          )}
        </div>

        {/* Picker header */}
        <div
          style={{
            padding: "8px 20px 8px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
          }}
        >
          <div style={{ fontSize: 15, fontWeight: 600 }}>Categoría</div>
          <div
            onClick={() => setShowAllCats(!showAllCats)}
            style={{ fontSize: 13, color: "#0A84FF", cursor: "pointer" }}
          >
            {showAllCats ? "Ver menos" : "Ver todas"}
          </div>
        </div>

        {/* Grid */}
        <div
          style={{
            padding: "0 16px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 8,
          }}
        >
          {visibleCats.map((cat) => {
            const isSelected = selectedCat === cat.id;
            const isSuggested = cat.id === notif.suggested;
            return (
              <div
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                style={{
                  background: isSelected ? cat.color + "22" : "#fff",
                  border: isSelected ? `1.5px solid ${cat.color}` : "1.5px solid transparent",
                  borderRadius: 14,
                  padding: "10px 6px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 4,
                  cursor: "pointer",
                  position: "relative",
                  WebkitTapHighlightColor: "transparent",
                  transition: "all 150ms",
                }}
              >
                {isSuggested && !isSelected && (
                  <div
                    style={{
                      position: "absolute",
                      top: 4,
                      right: 4,
                      fontSize: 10,
                      color: "#0A84FF",
                      fontWeight: 600,
                    }}
                  >
                    ✦
                  </div>
                )}
                <div style={{ fontSize: 24 }}>{cat.emoji}</div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 500,
                    textAlign: "center",
                    lineHeight: 1.15,
                    color: isSelected ? cat.color : "#000",
                  }}
                >
                  {cat.name}
                </div>
              </div>
            );
          })}
        </div>

        {/* Hint */}
        {notif.suggested && (
          <div
            style={{
              padding: "14px 20px 0",
              fontSize: 12,
              color: "rgba(60,60,67,0.6)",
              display: "flex",
              gap: 6,
            }}
          >
            <span style={{ color: "#0A84FF" }}>✦</span>
            <span>
              Sugerido por reglas previas ({Math.round(notif.suggestedConfidence * 100)}% confianza)
            </span>
          </div>
        )}

        {/* Toggle Crear regla */}
        <div style={{ padding: "20px 16px 0" }}>
          <div
            style={{
              background: "#fff",
              borderRadius: 12,
              padding: "12px 16px",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15, fontWeight: 500 }}>Crear regla</div>
              <div style={{ fontSize: 13, color: "rgba(60,60,67,0.6)", marginTop: 1 }}>
                Clasificar siempre <b>{notif.merchant}</b> como {getCategory(selectedCat).name}
              </div>
            </div>
            <div
              onClick={() => setCreateRule(!createRule)}
              style={{
                width: 51,
                height: 31,
                borderRadius: 16,
                padding: 2,
                background: createRule ? "#34C759" : "rgba(120,120,128,0.32)",
                transition: "background 200ms",
                cursor: "pointer",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  width: 27,
                  height: 27,
                  borderRadius: 14,
                  background: "#fff",
                  transform: createRule ? "translateX(20px)" : "translateX(0)",
                  transition: "transform 200ms",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Split (placeholder) */}
        <div style={{ padding: "8px 16px 0" }}>
          <div
            style={{
              background: "#fff",
              borderRadius: 12,
              padding: "12px 16px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              cursor: "pointer",
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: "rgba(10,132,255,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#0A84FF",
              }}
            >
              <SplitIcon size={18} color="#0A84FF" />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15, fontWeight: 500 }}>Dividir entre categorías</div>
              <div style={{ fontSize: 13, color: "rgba(60,60,67,0.6)", marginTop: 1 }}>
                Parte super, parte farmacia, etc.
              </div>
            </div>
            <ChevRight />
          </div>
        </div>
      </div>

      <div
        style={{
          padding: "12px 16px 28px",
          borderTop: "0.5px solid rgba(60,60,67,0.18)",
          background: "#F2F2F7",
        }}
      >
        <BigButton onClick={() => onConfirm(notif.id, selectedCat, createRule)}>
          Confirmar y descontar
        </BigButton>
      </div>
    </div>
  );
}
