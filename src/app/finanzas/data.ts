export type Category = {
  id: string;
  name: string;
  emoji: string;
  color: string;
  budget: number;
  fixed?: boolean;
};

export type Transaction = {
  id: string;
  merchant: string;
  amount: number;
  date: string; // YYYY-MM-DD
  category: string;
};

export type PendingNotification = {
  id: string;
  merchant: string;
  amount: number;
  receivedAt: string; // ISO local
  bank: string;
  suggested: string | null;
  suggestedConfidence: number;
  isNewMerchant: boolean;
};

export type MerchantRule = {
  merchant: string;
  category: string;
  confidence: number;
};

export type CurrencyDisplay = "CRC" | "USD" | "BOTH";

export const CATEGORIES: Category[] = [
  { id: "combustible",   name: "Combustible",        emoji: "⛽", color: "#FF9500", budget: 60000 },
  { id: "super",         name: "Compras del super",  emoji: "🛒", color: "#34C759", budget: 100000 },
  { id: "carniceria",    name: "Carnicería",         emoji: "🥩", color: "#FF3B30", budget: 50000 },
  { id: "feria",         name: "Feria",              emoji: "🥬", color: "#30D158", budget: 50000 },
  { id: "restaurante",   name: "Restaurante",        emoji: "🍽️", color: "#FF2D55", budget: 80000 },
  { id: "recreacion",    name: "Recreación",         emoji: "🎟️", color: "#AF52DE", budget: 60000 },
  { id: "medicamentos",  name: "Medicamentos",       emoji: "💊", color: "#5AC8FA", budget: 25000 },
  { id: "agua",          name: "Agua",               emoji: "💧", color: "#64D2FF", budget: 8500,   fixed: true },
  { id: "electricidad",  name: "Electricidad",       emoji: "⚡", color: "#FFD60A", budget: 18500,  fixed: true },
  { id: "celular",       name: "Celular",            emoji: "📱", color: "#5E5CE6", budget: 9500,   fixed: true },
  { id: "alquiler",      name: "Alquiler",           emoji: "🏠", color: "#8E8E93", budget: 460000, fixed: true },
  { id: "gimnasio",      name: "Gimnasio",           emoji: "🏋️", color: "#FF6482", budget: 22000,  fixed: true },
  { id: "streaming",     name: "Suscripciones",      emoji: "📺", color: "#BF5AF2", budget: 22000,  fixed: true },
  { id: "mantenimiento", name: "Mantenimiento auto", emoji: "🔧", color: "#A2845E", budget: 30000 },
  { id: "otros",         name: "Otros",              emoji: "✨", color: "#8E8E93", budget: 50000 },
];

export const MERCHANT_RULES: MerchantRule[] = [
  { merchant: "Total Gas Station",  category: "combustible",  confidence: 0.98 },
  { merchant: "Delta",              category: "combustible",  confidence: 0.95 },
  { merchant: "Auto Mercado",       category: "super",        confidence: 0.99 },
  { merchant: "Walmart",            category: "super",        confidence: 0.97 },
  { merchant: "PriceSmart",         category: "super",        confidence: 0.94 },
  { merchant: "KFC",                category: "restaurante",  confidence: 0.99 },
  { merchant: "McDonald",           category: "restaurante",  confidence: 0.99 },
  { merchant: "Trigo y Sabores",    category: "restaurante",  confidence: 0.92 },
  { merchant: "La Casa Del Pie",    category: "restaurante",  confidence: 0.88 },
  { merchant: "Fischel",            category: "medicamentos", confidence: 0.96 },
  { merchant: "Farmacia",           category: "medicamentos", confidence: 0.93 },
  { merchant: "Cinépolis",          category: "recreacion",   confidence: 0.95 },
];

export const PAST_TX: Transaction[] = [
  { id: "t01", merchant: "Auto Mercado",              amount: 45200,  date: "2026-04-03", category: "super" },
  { id: "t02", merchant: "Total Gas Station",         amount: 18000,  date: "2026-04-04", category: "combustible" },
  { id: "t03", merchant: "KFC",                       amount: 6200,   date: "2026-04-06", category: "restaurante" },
  { id: "t04", merchant: "Fischel",                   amount: 8400,   date: "2026-04-07", category: "medicamentos" },
  { id: "t05", merchant: "Auto Mercado",              amount: 32100,  date: "2026-04-10", category: "super" },
  { id: "t06", merchant: "Delta Los Angeles",         amount: 25600,  date: "2026-04-12", category: "combustible" },
  { id: "t07", merchant: "Trigo y Sabores",           amount: 4200,   date: "2026-04-13", category: "restaurante" },
  { id: "t08", merchant: "Carnicería El Buen Corte",  amount: 28500,  date: "2026-04-14", category: "carniceria" },
  { id: "t09", merchant: "Feria Zapote",              amount: 18200,  date: "2026-04-19", category: "feria" },
  { id: "t10", merchant: "Cinépolis",                 amount: 14500,  date: "2026-04-20", category: "recreacion" },
  { id: "t11", merchant: "Auto Mercado",              amount: 19800,  date: "2026-04-22", category: "super" },
  { id: "t12", merchant: "McDonald's",                amount: 5400,   date: "2026-04-24", category: "restaurante" },
  { id: "t13", merchant: "Total Gas Station",         amount: 17500,  date: "2026-04-25", category: "combustible" },
  { id: "f01", merchant: "Alquiler Apartamento",      amount: 460000, date: "2026-04-01", category: "alquiler" },
  { id: "f02", merchant: "Gimnasio Smart Fit",        amount: 22000,  date: "2026-04-02", category: "gimnasio" },
  { id: "f03", merchant: "AyA",                       amount: 8500,   date: "2026-04-15", category: "agua" },
  { id: "f04", merchant: "CNFL",                      amount: 19200,  date: "2026-04-15", category: "electricidad" },
  { id: "f05", merchant: "Kolbi",                     amount: 9500,   date: "2026-04-18", category: "celular" },
  { id: "f06", merchant: "Netflix",                   amount: 7000,   date: "2026-04-12", category: "streaming" },
  { id: "f07", merchant: "Disney+",                   amount: 8500,   date: "2026-04-12", category: "streaming" },
];

export const PENDING_NOTIFS: PendingNotification[] = [
  { id: "n01", merchant: "Trigo y Sabores",   amount: 3650,    receivedAt: "2026-04-28T13:20:00", bank: "Banco Nacional de Costa Rica", suggested: "restaurante",  suggestedConfidence: 0.92, isNewMerchant: false },
  { id: "n02", merchant: "La Casa Del Pie",   amount: 43000,   receivedAt: "2026-04-28T10:32:00", bank: "Banco Nacional de Costa Rica", suggested: "restaurante",  suggestedConfidence: 0.88, isNewMerchant: false },
  { id: "n03", merchant: "Auto Mercado",      amount: 11945,   receivedAt: "2026-04-27T19:15:00", bank: "Banco Nacional de Costa Rica", suggested: "super",        suggestedConfidence: 0.99, isNewMerchant: false },
  { id: "n04", merchant: "Fischel",           amount: 5083.58, receivedAt: "2026-04-27T19:08:00", bank: "Banco Nacional de Costa Rica", suggested: "medicamentos", suggestedConfidence: 0.96, isNewMerchant: false },
  { id: "n05", merchant: "KFC",               amount: 5540,    receivedAt: "2026-04-27T18:55:00", bank: "Banco Nacional de Costa Rica", suggested: "restaurante",  suggestedConfidence: 0.99, isNewMerchant: false },
  { id: "n06", merchant: "Delta Los Angeles", amount: 29103,   receivedAt: "2026-04-27T18:49:00", bank: "Banco Nacional de Costa Rica", suggested: "combustible",  suggestedConfidence: 0.95, isNewMerchant: false },
  { id: "n07", merchant: "Total Gas Station", amount: 10500,   receivedAt: "2026-04-27T18:47:00", bank: "Banco Nacional de Costa Rica", suggested: "combustible",  suggestedConfidence: 0.98, isNewMerchant: false },
];

export const INCOME = {
  bruto: 2250000,
  neto: 1620000,
  deducciones: [
    { name: "Cargas Sociales", amount: 230000 },
    { name: "Asociación Ahorro", amount: 140000 },
    { name: "Pensión complementaria", amount: 60000 },
    { name: "Impuesto de Renta", amount: 65000 },
    { name: "Préstamo Asociación", amount: 135000 },
  ],
};

export const FX_RATE = 520; // CRC per USD

export function formatCRC(n: number, decimals = 0): string {
  return (
    "₡" +
    n.toLocaleString("es-CR", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })
  );
}

export function formatUSD(crc: number): string {
  return (
    "$" +
    (crc / FX_RATE).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
}

export function formatMoney(crc: number, mode: CurrencyDisplay = "CRC"): string {
  if (mode === "USD") return formatUSD(crc);
  if (mode === "BOTH") return `${formatCRC(crc)} · ${formatUSD(crc)}`;
  return formatCRC(crc);
}

export function getCategory(id: string): Category {
  return CATEGORIES.find((c) => c.id === id) ?? CATEGORIES[CATEGORIES.length - 1];
}
