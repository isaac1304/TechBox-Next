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
    | 'compass'
    | 'server-cog';
  features: string[];
  benefits: { title: string; description: string }[];
  useCases: string[];
  problem: string;
  solution: string;
  relatedServices: string[];
  nextStep?: {
    title: string;
    description: string;
    link: { href: string; label: string };
  };
  /** Si es true, el detalle se renderiza desde una ruta estática propia y se omite del template [slug]. */
  hasCustomPage?: boolean;
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
    tagline: 'Tu primer paso a la nube, sin complicaciones',
    description:
      'Migramos y configuramos infraestructura cloud para empresas que están dando sus primeros pasos en la nube. Estable, segura y con costos bajo control desde el día uno.',
    longDescription:
      'Pensado para empresas que recién migran de servidores locales o que necesitan ordenar una nube heredada. Diseñamos arquitecturas sobre Google Cloud y AWS pensadas para pymes, con despliegues automatizados, monitoreo y optimización de costos desde el inicio. Si tu producto ya está operando en producción a escala — con Kubernetes, microservicios o requerimientos de compliance — conocé también nuestra línea de SRE y Cloud Engineering.',
    icon: 'cloud',
    features: [
      'Arquitectura cloud (GCP y AWS)',
      'Migraciones desde servidores locales',
      'Contenedores básicos',
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
      'Llevamos tus sistemas a una nube gestionada con seguridad, backups automáticos, monitoreo y un plan de costos claro. Para etapas más avanzadas (Kubernetes, Istio, compliance), te llevamos al siguiente nivel con nuestra línea de SRE.',
    relatedServices: ['sre-gcp-kubernetes', 'ciberseguridad-pymes', 'consultoria-tecnologica'],
    nextStep: {
      title: '¿Tu producto ya está en producción?',
      description:
        'Si necesitás reliability avanzada — Kubernetes, Istio, observabilidad, compliance SOC2/PCI — el siguiente paso es nuestra línea de SRE y Cloud Engineering, especializada en operar producto digital a escala.',
      link: {
        href: '/servicios/sre-gcp-kubernetes',
        label: 'Conocer SRE y Cloud Engineering',
      },
    },
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
  {
    slug: 'sre-gcp-kubernetes',
    title: 'SRE y Cloud Engineering en GCP y Kubernetes',
    shortTitle: 'SRE y Cloud Engineering',
    tagline: 'Confiabilidad enterprise para producto digital',
    description:
      'SRE fraccional especializado en GCP, Kubernetes e Istio. Para SaaS, fintechs y empresas escalando microservicios.',
    longDescription:
      'Confiabilidad de nivel enterprise para tu producto digital, sin contratar un equipo completo. SRE fraccional con 11+ años de experiencia operando producción a escala en entornos regulados.',
    icon: 'server-cog',
    features: [
      'Especialización en GCP y GKE',
      'Service mesh con Istio',
      'Infraestructura como código (Terraform)',
      'Hardening y compliance (SOC2, PCI)',
      'Observabilidad y SLOs',
      'Modelo fraccional por horas',
    ],
    benefits: [
      {
        title: 'Especialista, no generalista',
        description:
          'GCP, GKE e Istio son nuestro foco. No tocamos un poco de todo — operamos producción a escala.',
      },
      {
        title: 'Costo de un fraccional',
        description:
          'Pagás solo las horas que necesitás. Sin headcount, sin onboarding largo, sin cargas sociales.',
      },
      {
        title: 'Compliance hands-on',
        description:
          'Experiencia operando en entorno enterprise regulado SOC2/PCI. No es teoría — es día a día.',
      },
    ],
    useCases: [
      'Migración a Terraform para una empresa con infra manual',
      'Implementación de Istio + observabilidad en cluster GKE',
      'Setup GKE producción-ready con multi-tenant',
      'Auditoría de costos y reliability en cuenta GCP existente',
    ],
    problem:
      'Cuando tu producto crece — microservicios, Kubernetes, múltiples regiones, compliance — un cloud generalista se queda corto y contratar un SRE senior cuesta más de USD 100k/año.',
    solution:
      'Un SRE certificado (CKA, ICA) operando tu infra como fraccional. Sin headcount, con la experiencia de quien ya operó producción a escala en una Fortune 500 financiera.',
    relatedServices: ['infraestructura-cloud', 'ciberseguridad-pymes', 'consultoria-tecnologica'],
    hasCustomPage: true,
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
