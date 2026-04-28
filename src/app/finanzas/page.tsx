"use client";

import { useEffect, useMemo, useState } from "react";
import "./saldo.css";
import {
  CurrencyDisplay,
  PAST_TX,
  PENDING_NOTIFS,
  PendingNotification,
  Transaction,
  formatMoney,
  getCategory,
} from "./data";
import { Sheet, TabBar, TabId } from "./primitives";
import { BNIcon, CheckIcon } from "./icons";
import Onboarding from "./Onboarding";
import HomeScreen from "./HomeScreen";
import InboxScreen from "./InboxScreen";
import NotifDetail from "./NotifDetail";
import CategoryScreen from "./CategoryScreen";
import ReportsScreen from "./ReportsScreen";
import SettingsScreen from "./SettingsScreen";

type Period = "monthly" | "biweekly";

export default function SaldoPage() {
  const [onboarded, setOnboarded] = useState(false);
  const [tab, setTab] = useState<TabId>("home");
  const [period, setPeriod] = useState<Period>("monthly");
  const [transactions, setTransactions] = useState<Transaction[]>(PAST_TX);
  const [pendingNotifs, setPendingNotifs] = useState<PendingNotification[]>(PENDING_NOTIFS);
  const [activeNotifId, setActiveNotifId] = useState<string | null>(null);
  const [activeCatId, setActiveCatId] = useState<string | null>(null);
  const [livePush, setLivePush] = useState<PendingNotification | null>(null);
  const [toast, setToast] = useState<{ catId: string; amount: number } | null>(null);
  const [currencyDisplay, setCurrencyDisplay] = useState<CurrencyDisplay>("CRC");
  const [now, setNow] = useState<string>("9:41");

  // status bar clock
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const h = d.getHours();
      const m = d.getMinutes();
      const hh = h === 0 ? 12 : h > 12 ? h - 12 : h;
      setNow(`${hh}:${m.toString().padStart(2, "0")}`);
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  // Live notification 5s after onboarding completes
  useEffect(() => {
    if (!onboarded) return;
    const t = setTimeout(() => {
      const fake: PendingNotification = {
        id: "live01",
        merchant: "Más x Menos",
        amount: 8420,
        receivedAt: "2026-04-28T14:02:00",
        bank: "Banco Nacional de Costa Rica",
        suggested: "super",
        suggestedConfidence: 0.91,
        isNewMerchant: false,
      };
      setLivePush(fake);
      setPendingNotifs((p) => (p.find((n) => n.id === fake.id) ? p : [fake, ...p]));
      setTimeout(() => setLivePush(null), 4000);
    }, 5000);
    return () => clearTimeout(t);
  }, [onboarded]);

  const activeNotif = useMemo(
    () => pendingNotifs.find((n) => n.id === activeNotifId) ?? null,
    [pendingNotifs, activeNotifId]
  );

  function confirmNotif(id: string, catId: string, _createRule: boolean) {
    void _createRule; // rules persistence is part of v1.1 backend
    const n = pendingNotifs.find((x) => x.id === id);
    if (!n) return;
    const tx: Transaction = {
      id: "tx_" + id,
      merchant: n.merchant,
      amount: n.amount,
      date: n.receivedAt.slice(0, 10),
      category: catId,
    };
    setTransactions((t) => [...t, tx]);
    setPendingNotifs((p) => p.filter((x) => x.id !== id));
    setActiveNotifId(null);
    setToast({ catId, amount: n.amount });
    setTimeout(() => setToast(null), 1800);
  }

  return (
    <div className="saldo-root">
      <div className="saldo-frame">
        <StatusBar time={now} />

        {!onboarded ? (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              paddingTop: 47,
            }}
          >
            <Onboarding
              onComplete={() => {
                setOnboarded(true);
                setTab("inbox");
              }}
            />
          </div>
        ) : (
          <>
            <div className="saldo-content">
              {tab === "home" && (
                <HomeScreen
                  transactions={transactions}
                  pendingNotifs={pendingNotifs}
                  period={period}
                  onSwitchPeriod={setPeriod}
                  onOpenCategory={(id) => setActiveCatId(id)}
                  onGoInbox={() => setTab("inbox")}
                  currencyDisplay={currencyDisplay}
                />
              )}
              {tab === "inbox" && (
                <InboxScreen
                  transactions={transactions}
                  pendingNotifs={pendingNotifs}
                  onOpenNotif={(id) => setActiveNotifId(id)}
                  currencyDisplay={currencyDisplay}
                />
              )}
              {tab === "reports" && (
                <ReportsScreen transactions={transactions} currencyDisplay={currencyDisplay} />
              )}
              {tab === "settings" && (
                <SettingsScreen
                  currencyDisplay={currencyDisplay}
                  onChangeCurrency={setCurrencyDisplay}
                />
              )}
            </div>

            {/* Live push notification */}
            {livePush && (
              <div
                onClick={() => {
                  setActiveNotifId(livePush.id);
                  setLivePush(null);
                }}
                className="saldo-push"
                style={{
                  position: "absolute",
                  top: 56,
                  left: 8,
                  right: 8,
                  zIndex: 100,
                  background: "rgba(255,255,255,0.92)",
                  backdropFilter: "blur(40px)",
                  WebkitBackdropFilter: "blur(40px)",
                  borderRadius: 22,
                  padding: "12px 14px",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  cursor: "pointer",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                }}
              >
                <BNIcon />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                    }}
                  >
                    <div style={{ fontSize: 14, fontWeight: 600 }}>Banco Nacional</div>
                    <div style={{ fontSize: 11, color: "rgba(60,60,67,0.5)" }}>ahora</div>
                  </div>
                  <div style={{ fontSize: 13, marginTop: 1 }}>{livePush.merchant}</div>
                  <div style={{ fontSize: 13, color: "rgba(60,60,67,0.7)" }}>
                    {formatMoney(livePush.amount, currencyDisplay)}
                  </div>
                </div>
              </div>
            )}

            {/* Category overlay */}
            {activeCatId && (
              <div
                className="saldo-overlay-screen"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "#F2F2F7",
                  overflowY: "auto",
                  paddingTop: 47,
                  zIndex: 30,
                }}
              >
                <CategoryScreen
                  catId={activeCatId}
                  transactions={transactions}
                  onBack={() => setActiveCatId(null)}
                  currencyDisplay={currencyDisplay}
                />
              </div>
            )}

            {/* Notif Detail sheet */}
            <Sheet
              open={!!activeNotif}
              onClose={() => setActiveNotifId(null)}
              height="92%"
            >
              <NotifDetail
                notif={activeNotif}
                onClose={() => setActiveNotifId(null)}
                onConfirm={confirmNotif}
                currencyDisplay={currencyDisplay}
              />
            </Sheet>

            {/* Confirmation toast */}
            {toast && (
              <div
                className="saldo-toast"
                style={{
                  position: "absolute",
                  top: 56,
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 100,
                  background: "rgba(0,0,0,0.85)",
                  color: "#fff",
                  borderRadius: 22,
                  padding: "10px 18px",
                  fontSize: 14,
                  fontWeight: 500,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                }}
              >
                <CheckIcon size={16} color="#34C759" />
                <span>{getCategory(toast.catId).emoji}</span>
                <span>
                  −{formatMoney(toast.amount, currencyDisplay)} de {getCategory(toast.catId).name}
                </span>
              </div>
            )}

            <TabBar
              active={tab}
              onChange={(id) => {
                setTab(id);
                setActiveCatId(null);
              }}
              pendingCount={pendingNotifs.length}
            />
          </>
        )}
      </div>
    </div>
  );
}

function StatusBar({ time }: { time: string }) {
  return (
    <div className="saldo-status-bar">
      <span>{time}</span>
      <div className="saldo-status-bar-icons">
        <span style={{ letterSpacing: 1 }}>•••</span>
        <span>📶</span>
        <span style={{ display: "inline-block" }}>
          <svg width={26} height={12} viewBox="0 0 26 12" fill="none" aria-hidden>
            <rect x="0.5" y="0.5" width="22" height="11" rx="2.5" stroke="#000" />
            <rect x="2" y="2" width="19" height="8" rx="1.5" fill="#000" />
            <rect x="23.5" y="4" width="1.5" height="4" rx="0.5" fill="#000" />
          </svg>
        </span>
      </div>
    </div>
  );
}
