"use client";

import { useState } from "react";
import {
  CATEGORIES,
  CurrencyDisplay,
  FX_RATE,
  INCOME,
  MERCHANT_RULES,
  formatMoney,
  getCategory,
} from "./data";
import { CategoryChip, ListGroup, ListRow, Sheet } from "./primitives";
import { BNIcon, CloseIcon } from "./icons";

export default function SettingsScreen({
  currencyDisplay,
  onChangeCurrency,
}: {
  currencyDisplay: CurrencyDisplay;
  onChangeCurrency: (c: CurrencyDisplay) => void;
}) {
  const fmt = (n: number) => formatMoney(n, currencyDisplay);
  const [showRules, setShowRules] = useState(false);

  const totalBudget = CATEGORIES.reduce((s, c) => s + c.budget, 0);

  return (
    <div style={{ paddingBottom: 110 }}>
      <div style={{ padding: "14px 20px 8px" }}>
        <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: -0.8 }}>Ajustes</div>
      </div>

      {/* Profile */}
      <ListGroup>
        <ListRow
          left={
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 22,
                background: "linear-gradient(135deg, #0A84FF, #5E5CE6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: 700,
                fontSize: 17,
              }}
            >
              IG
            </div>
          }
          title="Isaac Granados"
          subtitle="isaac@granados.cr"
          isLast
          accessory="none"
        />
      </ListGroup>

      {/* Cuentas conectadas */}
      <ListGroup header="Cuentas conectadas">
        <ListRow
          left={<BNIcon />}
          title="Banco Nacional de Costa Rica"
          subtitle="Notificaciones activas · 7 hoy"
          right={<span style={{ color: "#34C759", fontSize: 13, fontWeight: 600 }}>Activo</span>}
          accessory="none"
        />
        <ListRow
          left={
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: 7,
                background: "#000",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: 14,
              }}
            >

            </div>
          }
          title="Apple Wallet"
          subtitle="Sincronizado hace 2 min"
          isLast
          accessory="none"
        />
      </ListGroup>

      {/* Reglas */}
      <ListGroup
        header="Reglas de clasificación"
        footer={`${MERCHANT_RULES.length} comercios aprendidos. Saldo aprende automáticamente cada vez que clasificás algo nuevo.`}
      >
        <ListRow
          title="Ver todas las reglas"
          right={
            <span style={{ color: "rgba(60,60,67,0.6)", fontSize: 15 }}>{MERCHANT_RULES.length}</span>
          }
          onClick={() => setShowRules(true)}
        />
        <ListRow
          title="Comercios sin clasificar"
          right={<span style={{ color: "rgba(60,60,67,0.6)", fontSize: 15 }}>0</span>}
          onClick={() => {}}
          isLast
        />
      </ListGroup>

      {/* Presupuesto */}
      <ListGroup header="Presupuesto">
        <ListRow title="Ingreso neto mensual" right={fmt(INCOME.neto)} accessory="none" />
        <ListRow title="Total presupuestado" right={fmt(totalBudget)} accessory="none" />
        <ListRow title="Editar categorías y montos" onClick={() => {}} isLast />
      </ListGroup>

      {/* Preferencias */}
      <ListGroup header="Preferencias">
        <CurrencyRow value={currencyDisplay} onChange={onChangeCurrency} />
        <ListRow
          title="Tipo de cambio"
          subtitle="Banco Central de Costa Rica"
          right={"₡" + FX_RATE}
          accessory="none"
        />
        <ListRow title="Notificaciones" right="Todas" onClick={() => {}} />
        <ListRow title="Privacidad y datos" onClick={() => {}} isLast />
      </ListGroup>

      <div
        style={{
          textAlign: "center",
          padding: "16px 20px 0",
          fontSize: 12,
          color: "rgba(60,60,67,0.5)",
        }}
      >
        Saldo · v1.0 · Hecho con ♥ en Costa Rica
      </div>

      {/* Rules sheet */}
      <Sheet open={showRules} onClose={() => setShowRules(false)} height="78%">
        <div
          style={{
            padding: "4px 16px 8px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: 17, fontWeight: 600 }}>Reglas aprendidas</div>
          <div
            onClick={() => setShowRules(false)}
            style={{
              width: 30,
              height: 30,
              borderRadius: 15,
              background: "rgba(120,120,128,0.16)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <CloseIcon size={15} color="#3C3C43" />
          </div>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "4px 0 24px" }}>
          <div style={{ padding: "8px 20px 4px", fontSize: 13, color: "rgba(60,60,67,0.6)" }}>
            Cada vez que clasificás un comercio nuevo, Saldo crea una regla para que la próxima compra se sugiera automáticamente.
          </div>
          <ListGroup>
            {MERCHANT_RULES.map((r, i) => {
              const cat = getCategory(r.category);
              return (
                <ListRow
                  key={i}
                  left={<CategoryChip category={cat} size={36} />}
                  title={r.merchant}
                  subtitle={`→ ${cat.name}`}
                  right={
                    <span style={{ fontSize: 12, color: "rgba(60,60,67,0.6)" }}>
                      {Math.round(r.confidence * 100)}%
                    </span>
                  }
                  isLast={i === MERCHANT_RULES.length - 1}
                  accessory="none"
                />
              );
            })}
          </ListGroup>
        </div>
      </Sheet>
    </div>
  );
}

function CurrencyRow({
  value,
  onChange,
}: {
  value: CurrencyDisplay;
  onChange: (v: CurrencyDisplay) => void;
}) {
  const opts: { id: CurrencyDisplay; label: string }[] = [
    { id: "CRC", label: "₡" },
    { id: "USD", label: "$" },
    { id: "BOTH", label: "₡+$" },
  ];
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "11px 16px",
        gap: 12,
        borderBottom: "0.5px solid rgba(60,60,67,0.18)",
        minHeight: 44,
      }}
    >
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 16, color: "#000", fontWeight: 400 }}>Moneda</div>
        <div style={{ fontSize: 13, color: "rgba(60,60,67,0.6)", marginTop: 1 }}>
          Mostrar montos en colones, dólares o ambos
        </div>
      </div>
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
        {opts.map((o) => (
          <div
            key={o.id}
            onClick={() => onChange(o.id)}
            style={{
              padding: "4px 12px",
              background: value === o.id ? "#fff" : "transparent",
              borderRadius: 7,
              cursor: "pointer",
              boxShadow:
                value === o.id
                  ? "0 3px 8px rgba(0,0,0,0.04), 0 0 0 0.5px rgba(0,0,0,0.04)"
                  : "none",
              color: "#000",
              minWidth: 32,
              textAlign: "center",
            }}
          >
            {o.label}
          </div>
        ))}
      </div>
    </div>
  );
}
