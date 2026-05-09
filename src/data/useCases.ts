import type { Locale } from '@/i18n/routing';

type LocalizedString = Record<Locale, string>;

export type UseCase = {
  id: string;
  title: LocalizedString;
  industry: LocalizedString;
  problem: LocalizedString;
  solution: LocalizedString;
  impact: LocalizedString;
  /** ID estable del servicio relacionado (no slug). */
  relatedService: string;
};

export const useCases: UseCase[] = [
  {
    id: 'veterinaria-expediente',
    title: {
      es: 'Expediente digital para una clínica veterinaria',
      en: 'Digital records for a veterinary clinic',
    },
    industry: {
      es: 'Servicios veterinarios',
      en: 'Veterinary services',
    },
    problem: {
      es: 'La clínica llevaba el historial de cada mascota en cuadernos y hojas sueltas. Se perdía tiempo buscando información y costaba darle seguimiento a vacunas y tratamientos.',
      en: 'The clinic kept each pet’s history in notebooks and loose papers. They lost time hunting for information and struggled to follow up on vaccinations and treatments.',
    },
    solution: {
      es: 'Pusimos en pie un sistema web con ficha por mascota, historial clínico, recordatorios automáticos de vacunación y consulta rápida desde tablet.',
      en: 'We built a web system with a per-pet record, clinical history, automated vaccination reminders, and quick lookup from a tablet.',
    },
    impact: {
      es: 'Consultas 30% más ágiles, menos olvidos en vacunación y una mejor experiencia para el dueño de la mascota.',
      en: 'Visits 30% faster, fewer missed vaccinations, and a better experience for pet owners.',
    },
    relatedService: 'software-development',
  },
  {
    id: 'retail-inventario',
    title: {
      es: 'Inventario y facturación para una tienda',
      en: 'Inventory and billing for a retail store',
    },
    industry: {
      es: 'Retail',
      en: 'Retail',
    },
    problem: {
      es: 'La tienda perdía ventas por quiebres de stock y no sabía con claridad qué productos sí dejaban margen. La facturación se hacía a mano.',
      en: 'The store lost sales to stockouts and lacked clarity on which products actually had margin. Billing was done by hand.',
    },
    solution: {
      es: 'Sistema de inventario en la nube con punto de venta, facturación electrónica y alertas de stock bajo.',
      en: 'Cloud inventory system with point of sale, electronic invoicing, and low-stock alerts.',
    },
    impact: {
      es: 'Menos quiebres de inventario, facturación electrónica al día y un tablero semanal con los productos más y menos rentables.',
      en: 'Fewer stockouts, electronic invoicing on time, and a weekly dashboard showing the most and least profitable products.',
    },
    relatedService: 'software-development',
  },
  {
    id: 'servicios-automatizacion',
    title: {
      es: 'Automatización de tareas repetitivas en una empresa de servicios',
      en: 'Automating repetitive tasks at a services firm',
    },
    industry: {
      es: 'Servicios profesionales',
      en: 'Professional services',
    },
    problem: {
      es: 'El equipo se llevaba horas copiando datos entre el formulario web, el CRM y la hoja de seguimiento. Los clientes esperaban días por una respuesta.',
      en: 'The team spent hours copying data between the web form, the CRM, and the tracking sheet. Customers waited days for a reply.',
    },
    solution: {
      es: 'Conectamos el formulario, el CRM y el correo. Cada solicitud entra al CRM con datos completos y dispara una respuesta automática con próximos pasos.',
      en: 'We connected the form, the CRM, and email. Every request lands in the CRM with full data and triggers an automated reply with next steps.',
    },
    impact: {
      es: 'Respuesta inicial al cliente en menos de 5 minutos y 8 horas semanales recuperadas por el equipo comercial.',
      en: 'Initial customer reply in under 5 minutes and 8 hours per week recovered by the sales team.',
    },
    relatedService: 'process-automation',
  },
  {
    id: 'migracion-cloud',
    title: {
      es: 'Migración a la nube para una pyme',
      en: 'Cloud migration for an SMB',
    },
    industry: {
      es: 'Industrial',
      en: 'Industrial',
    },
    problem: {
      es: 'Dependían de un servidor físico metido en la oficina, con respaldos hechos a mano. Una caída de luz dejaba a toda la empresa sin sistema.',
      en: 'They relied on a physical server tucked into the office, with manual backups. A power outage left the whole company without a system.',
    },
    solution: {
      es: 'Migramos el ERP y los documentos a infraestructura en la nube con respaldos automáticos, monitoreo y acceso remoto seguro.',
      en: 'We migrated the ERP and documents to cloud infrastructure with automated backups, monitoring, and secure remote access.',
    },
    impact: {
      es: 'Operación continua aun fuera de horario, respaldos diarios probados y 22% menos de costo mensual en infraestructura.',
      en: 'Continuous operation even off-hours, tested daily backups, and 22% lower monthly infrastructure cost.',
    },
    relatedService: 'cloud-infrastructure',
  },
  {
    id: 'ciberseguridad-plan',
    title: {
      es: 'Plan de mejora de ciberseguridad',
      en: 'Cybersecurity improvement plan',
    },
    industry: {
      es: 'Servicios financieros',
      en: 'Financial services',
    },
    problem: {
      es: 'Accesos compartidos, contraseñas anotadas en papelitos y sin plan de respaldo. Un cliente corporativo pedía mejoras antes de renovar el contrato.',
      en: 'Shared accounts, passwords scribbled on paper, and no backup plan. A corporate customer demanded improvements before renewing the contract.',
    },
    solution: {
      es: 'Diagnóstico de riesgos, administrador de contraseñas, segundo factor, política de accesos por rol y plan de respaldos probado.',
      en: 'Risk assessment, password manager, two-factor auth, role-based access policy, and a tested backup plan.',
    },
    impact: {
      es: 'Contrato renovado, cumplimiento básico al día y más tranquilidad operativa cuando hay rotación de personal.',
      en: 'Contract renewed, basic compliance up to date, and more peace of mind when staff turnover happens.',
    },
    relatedService: 'cybersecurity',
  },
  {
    id: 'tableros-gerenciales',
    title: {
      es: 'Tableros gerenciales en Power BI',
      en: 'Executive dashboards in Power BI',
    },
    industry: {
      es: 'Distribución',
      en: 'Distribution',
    },
    problem: {
      es: 'La gerencia recibía reportes en Excel cada lunes, con datos que ya no reflejaban la realidad. Cada equipo trabajaba con cifras distintas.',
      en: 'Leadership received Excel reports every Monday, with data that no longer reflected reality. Each team worked with different numbers.',
    },
    solution: {
      es: 'Consolidamos las fuentes de datos, definimos KPIs junto con la gerencia y armamos un tablero en Power BI que se actualiza todos los días.',
      en: 'We consolidated the data sources, defined KPIs with leadership, and built a Power BI dashboard that refreshes every day.',
    },
    impact: {
      es: 'Decisiones semanales con datos al día y alineación entre finanzas, comercial y operaciones.',
      en: 'Weekly decisions with up-to-date data and alignment between finance, sales, and operations.',
    },
    relatedService: 'data-analytics',
  },
];
