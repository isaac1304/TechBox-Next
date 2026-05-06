export type UseCase = {
  id: string;
  title: string;
  industry: string;
  problem: string;
  solution: string;
  impact: string;
  relatedService: string;
};

export const useCases: UseCase[] = [
  {
    id: 'veterinaria-expediente',
    title: 'Expediente digital para una clínica veterinaria',
    industry: 'Servicios veterinarios',
    problem:
      'La clínica llevaba el historial de cada mascota en cuadernos y hojas sueltas. Se perdía tiempo buscando información y costaba darle seguimiento a vacunas y tratamientos.',
    solution:
      'Pusimos en pie un sistema web con ficha por mascota, historial clínico, recordatorios automáticos de vacunación y consulta rápida desde tablet.',
    impact:
      'Consultas 30% más ágiles, menos olvidos en vacunación y una mejor experiencia para el dueño de la mascota.',
    relatedService: 'desarrollo-software',
  },
  {
    id: 'retail-inventario',
    title: 'Inventario y facturación para una tienda',
    industry: 'Retail',
    problem:
      'La tienda perdía ventas por quiebres de stock y no sabía con claridad qué productos sí dejaban margen. La facturación se hacía a mano.',
    solution:
      'Sistema de inventario en la nube con punto de venta, facturación electrónica y alertas de stock bajo.',
    impact:
      'Menos quiebres de inventario, facturación electrónica al día y un tablero semanal con los productos más y menos rentables.',
    relatedService: 'desarrollo-software',
  },
  {
    id: 'servicios-automatizacion',
    title: 'Automatización de tareas repetitivas en una empresa de servicios',
    industry: 'Servicios profesionales',
    problem:
      'El equipo se llevaba horas copiando datos entre el formulario web, el CRM y la hoja de seguimiento. Los clientes esperaban días por una respuesta.',
    solution:
      'Conectamos el formulario, el CRM y el correo. Cada solicitud entra al CRM con datos completos y dispara una respuesta automática con próximos pasos.',
    impact:
      'Respuesta inicial al cliente en menos de 5 minutos y 8 horas semanales recuperadas por el equipo comercial.',
    relatedService: 'automatizacion-procesos',
  },
  {
    id: 'migracion-cloud',
    title: 'Migración a la nube para una pyme',
    industry: 'Industrial',
    problem:
      'Dependían de un servidor físico metido en la oficina, con respaldos hechos a mano. Una caída de luz dejaba a toda la empresa sin sistema.',
    solution:
      'Migramos el ERP y los documentos a infraestructura en la nube con respaldos automáticos, monitoreo y acceso remoto seguro.',
    impact:
      'Operación continua aun fuera de horario, respaldos diarios probados y 22% menos de costo mensual en infraestructura.',
    relatedService: 'infraestructura-cloud',
  },
  {
    id: 'ciberseguridad-plan',
    title: 'Plan de mejora de ciberseguridad',
    industry: 'Servicios financieros',
    problem:
      'Accesos compartidos, contraseñas anotadas en papelitos y sin plan de respaldo. Un cliente corporativo pedía mejoras antes de renovar el contrato.',
    solution:
      'Diagnóstico de riesgos, administrador de contraseñas, segundo factor, política de accesos por rol y plan de respaldos probado.',
    impact:
      'Contrato renovado, cumplimiento básico al día y más tranquilidad operativa cuando hay rotación de personal.',
    relatedService: 'ciberseguridad-pymes',
  },
  {
    id: 'tableros-gerenciales',
    title: 'Tableros gerenciales en Power BI',
    industry: 'Distribución',
    problem:
      'La gerencia recibía reportes en Excel cada lunes, con datos que ya no reflejaban la realidad. Cada equipo trabajaba con cifras distintas.',
    solution:
      'Consolidamos las fuentes de datos, definimos KPIs junto con la gerencia y armamos un tablero en Power BI que se actualiza todos los días.',
    impact:
      'Decisiones semanales con datos al día y alineación entre finanzas, comercial y operaciones.',
    relatedService: 'analisis-datos-reportes',
  },
];
