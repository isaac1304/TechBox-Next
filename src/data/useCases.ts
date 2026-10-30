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
      es: 'Una clínica lleva el historial de cada mascota en cuadernos y hojas sueltas. Se pierde tiempo buscando información y cuesta darle seguimiento a vacunas y tratamientos.',
      en: 'A clinic keeps each pet’s history in notebooks and loose papers. Time goes to hunting for information, and following up on vaccinations and treatments is hard.',
    },
    solution: {
      es: 'Un sistema web con ficha por mascota, historial clínico, recordatorios automáticos de vacunación y consulta rápida desde tablet.',
      en: 'A web system with a per-pet record, clinical history, automated vaccination reminders, and quick lookup from a tablet.',
    },
    impact: {
      es: 'Podría agilizar las consultas, reducir los olvidos en vacunación y mejorar la experiencia del dueño de la mascota.',
      en: 'Could speed up visits, reduce missed vaccinations, and improve the experience for pet owners.',
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
      es: 'Una tienda pierde ventas por quiebres de stock y no sabe con claridad qué productos sí dejan margen. La facturación se hace a mano.',
      en: 'A store loses sales to stockouts and lacks clarity on which products actually have margin. Billing is done by hand.',
    },
    solution: {
      es: 'Sistema de inventario en la nube con punto de venta, facturación electrónica y alertas de stock bajo.',
      en: 'Cloud inventory system with point of sale, electronic invoicing, and low-stock alerts.',
    },
    impact: {
      es: 'Podría reducir los quiebres de inventario, mantener la facturación electrónica al día y dar un tablero semanal con los productos más y menos rentables.',
      en: 'Could reduce stockouts, keep electronic invoicing on time, and provide a weekly dashboard of the most and least profitable products.',
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
      es: 'El equipo se lleva horas copiando datos entre el formulario web, el CRM y la hoja de seguimiento. Los clientes esperan días por una respuesta.',
      en: 'The team spends hours copying data between the web form, the CRM, and the tracking sheet. Customers wait days for a reply.',
    },
    solution: {
      es: 'Conectar el formulario, el CRM y el correo. Cada solicitud entra al CRM con datos completos y dispara una respuesta automática con próximos pasos.',
      en: 'Connect the form, the CRM, and email. Every request lands in the CRM with full data and triggers an automated reply with next steps.',
    },
    impact: {
      es: 'Estimamos que podría acortar la primera respuesta al cliente de días a minutos y liberarle horas semanales al equipo comercial.',
      en: 'We estimate it could cut the first customer reply from days to minutes and free up weekly hours for the sales team.',
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
      es: 'Una empresa depende de un servidor físico metido en la oficina, con respaldos hechos a mano. Una caída de luz la deja sin sistema.',
      en: 'A company relies on a physical server tucked into the office, with manual backups. A power outage leaves it without a system.',
    },
    solution: {
      es: 'Migrar el ERP y los documentos a infraestructura en la nube con respaldos automáticos, monitoreo y acceso remoto seguro.',
      en: 'Migrate the ERP and documents to cloud infrastructure with automated backups, monitoring, and secure remote access.',
    },
    impact: {
      es: 'Podría dar operación continua aun fuera de horario, respaldos diarios probados y un costo de infraestructura más predecible.',
      en: 'Could provide continuous operation even off-hours, tested daily backups, and more predictable infrastructure costs.',
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
      es: 'Accesos compartidos, contraseñas anotadas en papelitos y sin plan de respaldo. Un cliente corporativo pide mejoras antes de renovar el contrato.',
      en: 'Shared accounts, passwords scribbled on paper, and no backup plan. A corporate customer asks for improvements before renewing the contract.',
    },
    solution: {
      es: 'Diagnóstico de riesgos, administrador de contraseñas, segundo factor, política de accesos por rol y plan de respaldos probado.',
      en: 'Risk assessment, password manager, two-factor auth, role-based access policy, and a tested backup plan.',
    },
    impact: {
      es: 'Podría ayudar a cumplir lo que pide el cliente, poner al día el cumplimiento básico y dar más tranquilidad cuando hay rotación de personal.',
      en: 'Could help meet the customer’s requirements, bring basic compliance up to date, and give more peace of mind when staff turnover happens.',
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
      es: 'La gerencia recibe reportes en Excel cada lunes, con datos que ya no reflejan la realidad. Cada equipo trabaja con cifras distintas.',
      en: 'Leadership receives Excel reports every Monday, with data that no longer reflects reality. Each team works with different numbers.',
    },
    solution: {
      es: 'Consolidar las fuentes de datos, definir KPIs junto con la gerencia y armar un tablero en Power BI que se actualiza todos los días.',
      en: 'Consolidate the data sources, define KPIs with leadership, and build a Power BI dashboard that refreshes every day.',
    },
    impact: {
      es: 'Podría permitir decisiones semanales con datos al día y alinear a finanzas, comercial y operaciones.',
      en: 'Could enable weekly decisions with up-to-date data and align finance, sales, and operations.',
    },
    relatedService: 'data-analytics',
  },
];
