import type { Locale } from '@/i18n/routing';
import { site } from '@/lib/site';

type LocalizedString = Record<Locale, string>;
type LocalizedStringArray = Record<Locale, string[]>;

export type Billing = 'one-time' | 'monthly';

export type Offer = {
  /** Identificador estable de la oferta (no se muestra). */
  id: string;
  name: LocalizedString;
  tagline: LocalizedString;
  priceRegular: number;
  /** Precio del programa Clientes Fundadores; solo aplica mientras esté activo. */
  priceLaunch?: number;
  billing: Billing;
  deliveryTime?: LocalizedString;
  includes: LocalizedStringArray;
  notIncluded?: LocalizedStringArray;
  ctaLabel: LocalizedString;
  ctaHref: string;
  /** Tarjeta destacada dentro de su grupo. */
  featured?: boolean;
};

export const currency = 'USD';

export const taxNote: LocalizedString = {
  es: 'Precios en dólares, más IVA (13%).',
  en: 'Prices in US dollars, plus 13% VAT.',
};

export const launchProgram = {
  enabled: true,
  spotsTotal: 5,
  spotsLeft: 5,
  endsOn: '2027-03-31',
};

/** Tarifa de horas adicionales del Plan Techbox. */
export const extraHourRate = 55;

const bookCta: LocalizedString = {
  es: 'Agendá tu diagnóstico',
  en: 'Book your assessment',
};

export const expressOffers: Offer[] = [
  {
    id: 'express',
    name: { es: 'Express', en: 'Express' },
    tagline: {
      es: 'Un proceso automatizado de punta a punta, a precio fijo.',
      en: 'One process automated end to end, at a fixed price.',
    },
    priceRegular: 650,
    priceLaunch: 450,
    billing: 'one-time',
    deliveryTime: { es: 'Entrega en 2 semanas', en: 'Delivered in 2 weeks' },
    includes: {
      es: [
        'Diagnóstico del proceso',
        'Automatización de 1 proceso de punta a punta',
        'Integración de hasta 3 herramientas (ej. formulario, CRM, correo, Google Sheets, WhatsApp, facturación)',
        'Pruebas con datos reales',
        'Documentación simple de cómo funciona',
        'Capacitación de 30 minutos',
        '30 días de garantía: si falla por causa nuestra, se arregla sin costo',
      ],
      en: [
        'Process assessment',
        'End-to-end automation of 1 process',
        'Integration of up to 3 tools (e.g. form, CRM, email, Google Sheets, WhatsApp, invoicing)',
        'Testing with real data',
        'Simple documentation of how it works',
        '30-minute training session',
        '30-day guarantee: if it fails because of us, we fix it at no cost',
      ],
    },
    ctaLabel: bookCta,
    ctaHref: site.booking,
  },
  {
    id: 'express-plus',
    name: { es: 'Express Plus', en: 'Express Plus' },
    tagline: {
      es: 'Varios procesos conectados, o un proceso con un agente de IA.',
      en: 'Several connected processes, or one process with an AI agent.',
    },
    priceRegular: 1450,
    priceLaunch: 1050,
    billing: 'one-time',
    deliveryTime: { es: 'Entrega en 4 semanas', en: 'Delivered in 4 weeks' },
    includes: {
      es: [
        'Todo lo de Express',
        'Hasta 3 procesos conectados, o 1 proceso + 1 agente de IA (atención o clasificación de consultas por WhatsApp, web o correo)',
        'Tablero simple de ejecuciones',
        '30 días de garantía',
      ],
      en: [
        'Everything in Express',
        'Up to 3 connected processes, or 1 process + 1 AI agent (handling or sorting inquiries via WhatsApp, web, or email)',
        'Simple run dashboard',
        '30-day guarantee',
      ],
    },
    ctaLabel: bookCta,
    ctaHref: site.booking,
  },
];

export const expressNotes: LocalizedStringArray = {
  es: [
    'Los costos de herramientas de terceros (por ejemplo n8n, APIs de IA o mensajes de la API oficial de WhatsApp) se cobran aparte, al costo y desglosados. Te los explicamos antes de arrancar.',
  ],
  en: [
    'Third-party tool costs (such as n8n, AI APIs, or official WhatsApp API messages) are billed separately, at cost and itemized. We walk you through them before we start.',
  ],
};

export const planOffers: Offer[] = [
  {
    id: 'plan-esencial',
    name: { es: 'Esencial', en: 'Essential' },
    tagline: {
      es: 'Tus automatizaciones vigiladas y funcionando.',
      en: 'Your automations monitored and running.',
    },
    priceRegular: 79,
    billing: 'monthly',
    includes: {
      es: [
        'Alojamiento y monitoreo de hasta 3 automatizaciones',
        'Corrección de fallas',
        'Actualizaciones de seguridad de la plataforma',
        'Reporte mensual: qué corrió, horas ahorradas y alertas',
        'Respuesta en 1 día hábil',
      ],
      en: [
        'Hosting and monitoring for up to 3 automations',
        'Bug fixes',
        'Platform security updates',
        'Monthly report: what ran, hours saved, and alerts',
        'Response within 1 business day',
      ],
    },
    ctaLabel: bookCta,
    ctaHref: site.booking,
  },
  {
    id: 'plan-crecimiento',
    name: { es: 'Crecimiento', en: 'Growth' },
    tagline: {
      es: 'Mantenimiento más horas para seguir mejorando.',
      en: 'Maintenance plus hours to keep improving.',
    },
    priceRegular: 249,
    billing: 'monthly',
    featured: true,
    includes: {
      es: [
        'Todo lo de Esencial',
        'Hasta 10 automatizaciones',
        '5 horas al mes de mejoras o cambios',
        'Revisión de respaldos y seguridad básica (Google Workspace o Microsoft 365)',
        'Respuesta en 4 horas hábiles',
        '15% de descuento en proyectos nuevos',
      ],
      en: [
        'Everything in Essential',
        'Up to 10 automations',
        '5 hours per month of improvements or changes',
        'Backup and basic security review (Google Workspace or Microsoft 365)',
        'Response within 4 business hours',
        '15% off new projects',
      ],
    },
    ctaLabel: bookCta,
    ctaHref: site.booking,
  },
  {
    id: 'plan-pro',
    name: { es: 'Pro', en: 'Pro' },
    tagline: {
      es: 'Tecnología acompañada de cerca, con revisión mensual.',
      en: 'Close technical support, with a monthly review.',
    },
    priceRegular: 490,
    billing: 'monthly',
    includes: {
      es: [
        'Todo lo de Crecimiento',
        'Automatizaciones ilimitadas dentro de lo razonable',
        '12 horas al mes de mejoras o cambios',
        'Tablero de KPIs del negocio',
        'Reunión mensual de revisión',
        '25% de descuento en proyectos nuevos',
      ],
      en: [
        'Everything in Growth',
        'Unlimited automations within reason',
        '12 hours per month of improvements or changes',
        'Business KPI dashboard',
        'Monthly review meeting',
        '25% off new projects',
      ],
    },
    ctaLabel: bookCta,
    ctaHref: site.booking,
  },
];

export const planNotes: LocalizedStringArray = {
  es: [
    'Mes a mes. Cancelás con 30 días de aviso, sin penalidad.',
    'Primer mes del Plan Esencial o Crecimiento gratis al contratar una Automatización Express.',
    `Horas adicionales: ${formatPrice(extraHourRate)}/hora.`,
    'Soporte en horario hábil de Costa Rica (lunes a viernes).',
  ],
  en: [
    'Month to month. Cancel with 30 days’ notice, no penalty.',
    'First month of the Essential or Growth plan free when you buy an Express Automation.',
    `Additional hours: ${formatPrice(extraHourRate)}/hour.`,
    'Support during Costa Rica business hours (Monday to Friday).',
  ],
};

export const sreOffers: Offer[] = [
  {
    id: 'sre-diagnostico',
    name: {
      es: 'Diagnóstico de confiabilidad y costos',
      en: 'Reliability and cost assessment',
    },
    tagline: { es: 'GCP/AWS + Kubernetes', en: 'GCP/AWS + Kubernetes' },
    priceRegular: 1800,
    priceLaunch: 1200,
    billing: 'one-time',
    deliveryTime: { es: 'Entrega en 2 semanas', en: 'Delivered in 2 weeks' },
    includes: {
      es: [
        'Revisión de arquitectura, costos, seguridad, observabilidad, backups y recuperación',
        'Informe con hallazgos priorizados y ahorro estimado',
        'Hoja de ruta de 90 días',
      ],
      en: [
        'Review of architecture, costs, security, observability, backups, and recovery',
        'Report with prioritized findings and estimated savings',
        '90-day roadmap',
      ],
    },
    ctaLabel: { es: 'Agendar llamada', en: 'Book a call' },
    ctaHref: site.booking,
  },
  {
    id: 'sre-20',
    name: { es: 'SRE fraccional — 20 h/mes', en: 'Fractional SRE — 20 h/month' },
    tagline: {
      es: 'SRE senior dedicado parcialmente.',
      en: 'A senior SRE, part-time.',
    },
    priceRegular: 2500,
    billing: 'monthly',
    includes: {
      es: [
        'SRE senior dedicado parcialmente',
        'CI/CD, Terraform, Kubernetes/Istio, monitoreo y alertas',
        'Revisión mensual de costos',
        'Respuesta en horario hábil',
      ],
      en: [
        'Senior SRE, part-time',
        'CI/CD, Terraform, Kubernetes/Istio, monitoring, and alerting',
        'Monthly cost review',
        'Response during business hours',
      ],
    },
    ctaLabel: { es: 'Agendar llamada', en: 'Book a call' },
    ctaHref: site.booking,
  },
  {
    id: 'sre-40',
    name: { es: 'SRE fraccional — 40 h/mes', en: 'Fractional SRE — 40 h/month' },
    tagline: {
      es: 'El doble de capacidad, con roadmap trimestral.',
      en: 'Double the capacity, with a quarterly roadmap.',
    },
    priceRegular: 4500,
    billing: 'monthly',
    includes: {
      es: [
        'Todo lo de 20 h/mes, con el doble de capacidad',
        'Acompañamiento en incidentes en horario hábil',
        'Roadmap trimestral',
      ],
      en: [
        'Everything in 20 h/month, with double the capacity',
        'Incident support during business hours',
        'Quarterly roadmap',
      ],
    },
    ctaLabel: { es: 'Agendar llamada', en: 'Book a call' },
    ctaHref: site.booking,
  },
];

export const sreNotes: LocalizedStringArray = {
  es: ['Cupos limitados: trabajamos con pocos clientes a la vez para dar atención directa.'],
  en: ['Limited spots: we work with few clients at a time to give direct attention.'],
};

/** Proyectos puntuales de la página SRE ("desde"). */
export const sreProjectPrices = {
  meshAssessment: 2000,
  terraformMigration: 5000,
  istioObservability: 9000,
  gkeSetup: 6000,
};

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

/** El programa aplica hasta el final de `endsOn`, hora de Costa Rica. */
export function isLaunchActive(now: Date = new Date()): boolean {
  if (!launchProgram.enabled || launchProgram.spotsLeft <= 0) return false;
  return now <= new Date(`${launchProgram.endsOn}T23:59:59-06:00`);
}

/** Precio vigente: el de fundador si el programa está activo y la oferta lo tiene. */
export function currentPrice(offer: Offer, now: Date = new Date()): number {
  return isLaunchActive(now) && offer.priceLaunch !== undefined
    ? offer.priceLaunch
    : offer.priceRegular;
}

/** Precio vigente más bajo de un grupo de ofertas. */
export function fromPrice(offers: Offer[], now: Date = new Date()): number {
  return Math.min(...offers.map((o) => currentPrice(o, now)));
}
