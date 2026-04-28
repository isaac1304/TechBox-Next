"use client";

import { ReactNode, useEffect, useState } from "react";
import { BigButton } from "./primitives";
import { CheckIcon, WalletIcon } from "./icons";

function Screen({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        flex: 1,
        padding: "28px 24px 24px",
        display: "flex",
        flexDirection: "column",
        background: "#fff",
      }}
    >
      {children}
    </div>
  );
}

export default function Onboarding({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step === 2) {
      const t = setTimeout(() => setStep(3), 2400);
      return () => clearTimeout(t);
    }
  }, [step]);

  if (step === 0) {
    return (
      <Screen>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            gap: 32,
          }}
        >
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 24,
              background: "linear-gradient(135deg, #0A84FF, #5E5CE6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 12px 36px rgba(10,132,255,0.32)",
            }}
          >
            <span style={{ fontSize: 48 }}>💸</span>
          </div>
          <div>
            <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: -0.7, color: "#000" }}>Saldo</div>
            <div
              style={{
                fontSize: 17,
                color: "rgba(60,60,67,0.7)",
                marginTop: 8,
                lineHeight: 1.4,
                maxWidth: 280,
              }}
            >
              Tu presupuesto se actualiza solo cada vez que pagás con tarjeta.
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <BigButton onClick={() => setStep(1)}>Empezar</BigButton>
          <BigButton kind="ghost" onClick={onComplete}>
            Ya tengo cuenta
          </BigButton>
        </div>
      </Screen>
    );
  }

  if (step === 1) {
    return (
      <Screen>
        <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: -0.6, marginTop: 16 }}>
          Conectá tu Apple Wallet
        </div>
        <div style={{ fontSize: 15, color: "rgba(60,60,67,0.7)", marginTop: 10, lineHeight: 1.45 }}>
          Saldo lee las notificaciones de tu banco para registrar cada compra y descontarla del presupuesto correcto.
        </div>
        <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 14 }}>
          {[
            {
              icon: "🔔",
              title: "Notificaciones del banco",
              body: "Otorgá permiso una sola vez. No leemos otros mensajes.",
            },
            {
              icon: "🏷️",
              title: "Clasificación inteligente",
              body: "Vos clasificás la primera compra de cada comercio. Después se aprende.",
            },
            {
              icon: "🔒",
              title: "Privado por diseño",
              body: "Los datos viven en tu iPhone. Nada se comparte.",
            },
          ].map((it, i) => (
            <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: "rgba(10,132,255,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  flexShrink: 0,
                }}
              >
                {it.icon}
              </div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 600 }}>{it.title}</div>
                <div
                  style={{ fontSize: 14, color: "rgba(60,60,67,0.7)", marginTop: 2, lineHeight: 1.4 }}
                >
                  {it.body}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ flex: 1 }} />
        <BigButton onClick={() => setStep(2)}>Conectar Apple Wallet</BigButton>
      </Screen>
    );
  }

  if (step === 2) {
    return (
      <Screen>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
          }}
        >
          <WalletIcon size={32} color="#0A84FF" />
          <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: -0.5 }}>Sincronizando…</div>
          <div
            style={{
              fontSize: 14,
              color: "rgba(60,60,67,0.6)",
              textAlign: "center",
              maxWidth: 240,
            }}
          >
            Buscando notificaciones recientes del Banco Nacional de Costa Rica
          </div>
          <div
            style={{
              width: 200,
              height: 4,
              borderRadius: 2,
              background: "rgba(120,120,128,0.16)",
              overflow: "hidden",
              marginTop: 12,
            }}
          >
            <div
              style={{
                height: "100%",
                background: "#0A84FF",
                animation: "saldoProgress 2.4s ease-out",
              }}
            />
          </div>
        </div>
      </Screen>
    );
  }

  return (
    <Screen>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: 20,
        }}
      >
        <div
          style={{
            width: 84,
            height: 84,
            borderRadius: "50%",
            background: "#34C759",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 28px rgba(52,199,89,0.4)",
          }}
        >
          <CheckIcon size={44} color="#fff" />
        </div>
        <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: -0.5 }}>Listo</div>
        <div
          style={{ fontSize: 15, color: "rgba(60,60,67,0.7)", maxWidth: 280, lineHeight: 1.4 }}
        >
          Encontramos <b>7 notificaciones</b> recientes para clasificar.
        </div>
      </div>
      <BigButton onClick={onComplete}>Ver bandeja</BigButton>
    </Screen>
  );
}
