export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon:
    | 'code'
    | 'cloud'
    | 'workflow'
    | 'shield'
    | 'chart'
    | 'compass';
  features: string[];
  benefits: { title: string; description: string }[];
  useCases: string[];
  problem: string;
  solution: string;
  relatedServices: string[];
};

export const services: Service[] = [
  {
    slug: 'desarrollo-software',
    title: 'Desarrollo de software web y móvil',
    shortTitle: 'Desarrollo de software',
    tagline: 'Aplicaciones a la medida para tu negocio',
    description:
      'Creamos aplicaciones web y móviles a la medida: sistemas internos, portales de clientes, dashboards y productos digitales.',
    longDescription:
      'Diseñamos y construimos software que se adapta a cómo trabaja tu empresa. Desde un MVP para validar una idea, hasta un sistema interno que reemplaza hojas de Excel dispersas y planillas manuales. Nuestro equipo combina diseño, ingeniería y pruebas para entregar productos mantenibles, seguros y listos para crecer.',
    icon: 'code',
    features: [
      'Aplicaciones web (Next.js, React)',
      'Aplicaciones móviles (iOS y Android)',
      'Sistemas internos de gestión',
      'Portales de clientes y proveedores',
      'Desarrollo de MVPs',
      'Mantenimiento y mejoras evolutivas',
    ],
    benefits: [
      {
        title: 'Menos trabajo manual',
        description:
          'Reemplazamos procesos en hojas de cálculo con sistemas claros y auditables.',
      },
      {
        title: 'Información centralizada',
        description:
          'Un solo lugar para consultar clientes, inventario, pedidos u órdenes.',
      },
      {
        title: 'Crecimiento ordenado',
        description:
          'Construimos sobre bases sólidas para que el software escale con tu negocio.',
      },
    ],
    useCases: [
      'Expediente digital para una clínica veterinaria',
      'Sistema de órdenes de servicio para una empresa de mantenimiento',
      'Portal de clientes para una firma profesional',
      'App móvil para registro de visitas y entregas',
    ],
    problem:
      'Muchas pymes operan con planillas sueltas, WhatsApp y correos. Se pierde información, se duplican datos y la atención al cliente se vuelve lenta.',
    solution:
      'Diseñamos software que se ajusta a tus procesos reales. Empezamos con lo esencial y sumamos funciones conforme tu negocio lo necesita.',
    relatedServices: ['automatizacion-procesos', 'infraestructura-cloud', 'consultoria-tecnologica'],
  },
  {
    slug: 'infraestructura-cloud',
    title: 'Infraestructura cloud',
    shortTitle: 'Infraestructura cloud',
    tagline: 'Nube confiable y con costos bajo control',
    description:
      'Configuramos, desplegamos y gestionamos infraestructura en la nube para que tu empresa opere de forma estable, segura y escalable.',
    longDescription:
      'La nube no tiene que ser complicada ni costosa. Diseñamos arquitecturas sobre Google Cloud y AWS pensadas para pymes, con despliegues automatizados, monitoreo y optimización de costos desde el inicio. Migramos sistemas existentes, configuramos contenedores y preparamos tu operación para crecer sin sustos.',
    icon: 'cloud',
    features: [
      'Arquitectura cloud (GCP y AWS)',
      'Migraciones desde servidores locales',
      'Contenedores y Kubernetes',
      'Pipelines de CI/CD',
      'Monitoreo y alertas',
      'Optimización de costos cloud',
    ],
    benefits: [
      {
        title: 'Menos caídas',
        description:
          'Entornos redundantes y monitoreados para que tu operación no se detenga.',
      },
      {
        title: 'Costos predecibles',
        description:
          'Revisamos y optimizamos el gasto mensual sin sacrificar rendimiento.',
      },
      {
        title: 'Escalar sin rehacer',
        description:
          'Si mañana duplicas usuarios o datos, la infraestructura responde.',
      },
    ],
    useCases: [
      'Migración de un ERP local a Google Cloud',
      'Despliegue automatizado de una app web en AWS',
      'Respaldo y recuperación de datos en la nube',
      'Separación de ambientes de pruebas y producción',
    ],
    problem:
      'Servidores viejos, backups manuales y despliegues frágiles son un riesgo silencioso. Una caída puede costar ventas y confianza.',
    solution:
      'Llevamos tus sistemas a una nube gestionada con seguridad, backups automáticos, monitoreo y un plan de costos claro.',
    relatedServices: ['ciberseguridad-pymes', 'desarrollo-software', 'consultoria-tecnologica'],
  },
  {
    slug: 'automatizacion-procesos',
    title: 'Automatización de procesos',
    shortTitle: 'Automatización',
    tagline: 'Menos tareas manuales, más tiempo para crecer',
    description:
      'Automatizamos tareas repetitivas para reducir errores, ahorrar tiempo y conectar tus herramientas entre sí.',
    longDescription:
      'Si alguien en tu equipo copia y pega datos, manda correos iguales varias veces al día o arma reportes a mano cada semana, es candidato a automatización. Conectamos tus sistemas, limpiamos los flujos y dejamos que la tecnología haga el trabajo repetitivo.',
    icon: 'workflow',
    features: [
      'Flujos de trabajo automatizados',
      'Integraciones entre sistemas (APIs)',
      'Reportes automáticos por correo o Slack',
      'Notificaciones a clientes y al equipo',
      'Sincronización de datos entre plataformas',
      'Herramientas internas a la medida',
    ],
    benefits: [
      {
        title: 'Ahorro de horas semanales',
        description:
          'El equipo recupera tiempo para atender clientes y proyectos estratégicos.',
      },
      {
        title: 'Menos errores humanos',
        description:
          'Procesos consistentes, con trazabilidad y sin depender de la memoria.',
      },
      {
        title: 'Respuesta más rápida',
        description:
          'Los clientes reciben confirmaciones, recordatorios y seguimientos sin demora.',
      },
    ],
    useCases: [
      'Facturación automática a clientes recurrentes',
      'Conectar el formulario web con el CRM',
      'Recordatorios de citas por WhatsApp o SMS',
      'Reporte diario de ventas enviado por correo',
    ],
    problem:
      'Las tareas manuales consumen tiempo, generan errores y son difíciles de escalar cuando el negocio crece.',
    solution:
      'Identificamos los procesos que se repiten, los documentamos y diseñamos automatizaciones que liberan tiempo del equipo.',
    relatedServices: ['desarrollo-software', 'analisis-datos-reportes', 'infraestructura-cloud'],
  },
  {
    slug: 'ciberseguridad-pymes',
    title: 'Ciberseguridad para pymes',
    shortTitle: 'Ciberseguridad',
    tagline: 'Protección práctica, sin complicaciones',
    description:
      'Servicios de ciberseguridad adaptados a pymes: diagnóstico, controles básicos, respaldos y acompañamiento continuo.',
    longDescription:
      'Las pymes también son blanco de ataques, muchas veces por configuraciones inseguras o equipos sin protección. Hacemos una evaluación realista de tus riesgos y aplicamos medidas efectivas: control de accesos, respaldos, configuración segura de la nube y capacitación al equipo.',
    icon: 'shield',
    features: [
      'Evaluación de riesgos y diagnóstico',
      'Control de accesos y contraseñas',
      'Estrategia de respaldos y recuperación',
      'Hardening básico de servidores y endpoints',
      'Configuración segura de cloud y correo',
      'Recomendaciones de concientización',
    ],
    benefits: [
      {
        title: 'Menor riesgo de pérdida',
        description:
          'Respaldos probados y accesos controlados para evitar que un incidente te paralice.',
      },
      {
        title: 'Clientes más tranquilos',
        description:
          'Demuestras que tomas en serio la protección de sus datos.',
      },
      {
        title: 'Cumplimiento ordenado',
        description:
          'Te ayudamos a cumplir con buenas prácticas y requisitos contractuales.',
      },
    ],
    useCases: [
      'Diagnóstico de seguridad para una empresa de servicios',
      'Plan de respaldos para una tienda con facturación propia',
      'Control de accesos tras una rotación de personal',
      'Configuración segura de Google Workspace o Microsoft 365',
    ],
    problem:
      'La mayoría de incidentes en pymes ocurre por falta de respaldos, contraseñas débiles o configuraciones por defecto que nunca se revisaron.',
    solution:
      'Aplicamos un plan práctico: evaluamos, corregimos lo crítico primero y acompañamos al equipo para que los buenos hábitos se mantengan.',
    relatedServices: ['infraestructura-cloud', 'consultoria-tecnologica', 'desarrollo-software'],
  },
  {
    slug: 'analisis-datos-reportes',
    title: 'Análisis de datos y reportes',
    shortTitle: 'Datos y reportes',
    tagline: 'Decisiones con información clara',
    description:
      'Tableros, KPIs y reportes automatizados para que la gerencia y los equipos operativos tomen mejores decisiones.',
    longDescription:
      'Tus datos ya están en algún lado: ventas, inventario, asistencia, clientes. Los ordenamos, limpiamos y los convertimos en tableros y reportes que sí se usan. Power BI, Looker Studio o soluciones a la medida según lo que mejor se adapte a tu empresa.',
    icon: 'chart',
    features: [
      'Tableros en Power BI y Looker Studio',
      'Limpieza e integración de datos',
      'Definición de KPIs del negocio',
      'Reportes financieros y operativos',
      'Automatización de reportes periódicos',
      'Visualización clara para no técnicos',
    ],
    benefits: [
      {
        title: 'Ver el negocio completo',
        description:
          'Una vista única de ventas, gastos, operación y clientes.',
      },
      {
        title: 'Decisiones con datos',
        description:
          'Menos suposiciones y más información accionable para gerencia.',
      },
      {
        title: 'Equipos alineados',
        description:
          'Los mismos indicadores para todos: comercial, operación y finanzas.',
      },
    ],
    useCases: [
      'Tablero gerencial de ventas y márgenes',
      'Reporte semanal automático de inventario',
      'Indicadores operativos para una clínica',
      'Análisis de comportamiento de clientes',
    ],
    problem:
      'Los reportes se arman a mano, llegan tarde y cada área tiene su propia versión de los números.',
    solution:
      'Unificamos las fuentes, definimos KPIs con el equipo y entregamos tableros que se actualizan solos.',
    relatedServices: ['automatizacion-procesos', 'infraestructura-cloud', 'consultoria-tecnologica'],
  },
  {
    slug: 'consultoria-tecnologica',
    title: 'Consultoría tecnológica',
    shortTitle: 'Consultoría',
    tagline: 'Claridad antes de invertir',
    description:
      'Te acompañamos a diagnosticar, priorizar y planear las inversiones tecnológicas de tu empresa.',
    longDescription:
      'Antes de comprar software o contratar desarrolladores, necesitas claridad. Evaluamos cómo opera hoy tu empresa, identificamos oportunidades reales de mejora y te entregamos un plan priorizado. Sin lenguaje técnico innecesario y con foco en resultados para el negocio.',
    icon: 'compass',
    features: [
      'Diagnóstico tecnológico integral',
      'Hoja de ruta de modernización',
      'Evaluación de proveedores y herramientas',
      'Recomendaciones de arquitectura',
      'Priorización de iniciativas',
      'Acompañamiento a gerencia',
    ],
    benefits: [
      {
        title: 'Evitar inversiones innecesarias',
        description:
          'Pagas por lo que realmente mueve la aguja, no por modas.',
      },
      {
        title: 'Plan paso a paso',
        description:
          'Un roadmap realista, medible y adaptado al tamaño de tu empresa.',
      },
      {
        title: 'Decisiones informadas',
        description:
          'Comparamos opciones y dejamos claro el costo total de cada camino.',
      },
    ],
    useCases: [
      'Definir si conviene migrar a la nube',
      'Elegir entre un CRM existente o uno a la medida',
      'Roadmap de digitalización para una empresa de servicios',
      'Auditoría tecnológica previa a una ronda de inversión',
    ],
    problem:
      'Hay demasiadas opciones, demasiados proveedores y poco tiempo. Equivocarse en una decisión tecnológica cuesta caro.',
    solution:
      'Un diagnóstico claro, decisiones priorizadas y un plan que tu equipo puede ejecutar con o sin nosotros.',
    relatedServices: ['desarrollo-software', 'infraestructura-cloud', 'analisis-datos-reportes'],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
