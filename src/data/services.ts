import type { Locale } from '@/i18n/routing';

type LocalizedString = Record<Locale, string>;
type LocalizedStringArray = Record<Locale, string[]>;
type LocalizedBenefits = Record<Locale, { title: string; description: string }[]>;

export type Service = {
  /** Identificador estable del servicio (no se muestra). */
  id: string;
  /** Slug por idioma usado en la URL. */
  slug: LocalizedString;
  title: LocalizedString;
  shortTitle: LocalizedString;
  tagline: LocalizedString;
  description: LocalizedString;
  longDescription: LocalizedString;
  icon:
    | 'code'
    | 'cloud'
    | 'workflow'
    | 'shield'
    | 'chart'
    | 'compass'
    | 'server-cog';
  features: LocalizedStringArray;
  benefits: LocalizedBenefits;
  useCases: LocalizedStringArray;
  problem: LocalizedString;
  solution: LocalizedString;
  /** IDs (no slugs) de los servicios relacionados. */
  relatedServices: string[];
  nextStep?: {
    title: LocalizedString;
    description: LocalizedString;
    /** El href apunta al ID del servicio destino, se traduce al renderizar. */
    link: { targetId: string; label: LocalizedString };
  };
  /** Si es true, el detalle se renderiza desde una ruta estática propia y se omite del template [slug]. */
  hasCustomPage?: boolean;
};

export const services: Service[] = [
  {
    id: 'software-development',
    slug: { es: 'desarrollo-software', en: 'software-development' },
    title: {
      es: 'Desarrollo de software web y móvil',
      en: 'Web and mobile software development',
    },
    shortTitle: {
      es: 'Desarrollo de software',
      en: 'Software development',
    },
    tagline: {
      es: 'Aplicaciones a la medida para tu negocio',
      en: 'Custom applications for your business',
    },
    description: {
      es: 'Creamos aplicaciones web y móviles a la medida: sistemas internos, portales de clientes, dashboards y productos digitales.',
      en: 'We build custom web and mobile applications: internal systems, customer portals, dashboards, and digital products.',
    },
    longDescription: {
      es: 'Diseñamos y construimos software que se adapta a cómo trabaja tu empresa. Desde un MVP para validar una idea, hasta un sistema interno que reemplaza un montón de hojas de Excel sueltas y planillas a mano. Nuestro equipo combina diseño, ingeniería y pruebas para entregar productos mantenibles, seguros y listos para crecer con vos.',
      en: 'We design and build software that adapts to how your company actually works. From an MVP to validate an idea, to an internal system that replaces a stack of loose spreadsheets and manual logs. Our team blends design, engineering, and testing to deliver products that are maintainable, secure, and ready to grow with you.',
    },
    icon: 'code',
    features: {
      es: [
        'Aplicaciones web (Next.js, React)',
        'Aplicaciones móviles (iOS y Android)',
        'Sistemas internos de gestión',
        'Portales de clientes y proveedores',
        'Desarrollo de MVPs',
        'Mantenimiento y mejoras evolutivas',
      ],
      en: [
        'Web apps (Next.js, React)',
        'Mobile apps (iOS and Android)',
        'Internal management systems',
        'Customer and vendor portals',
        'MVP development',
        'Maintenance and evolutionary improvements',
      ],
    },
    benefits: {
      es: [
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
      en: [
        {
          title: 'Less manual work',
          description:
            'We replace spreadsheet-driven processes with clear, auditable systems.',
        },
        {
          title: 'Centralized information',
          description:
            'A single place to check customers, inventory, orders, or work tickets.',
        },
        {
          title: 'Orderly growth',
          description:
            'We build on solid foundations so the software can scale with your business.',
        },
      ],
    },
    useCases: {
      es: [
        'Expediente digital para una clínica veterinaria',
        'Sistema de órdenes de servicio para una empresa de mantenimiento',
        'Portal de clientes para una firma profesional',
        'App móvil para registro de visitas y entregas',
      ],
      en: [
        'Digital records for a veterinary clinic',
        'Service-order system for a maintenance company',
        'Customer portal for a professional firm',
        'Mobile app for visit and delivery tracking',
      ],
    },
    problem: {
      es: 'Muchas pymes andan con planillas sueltas, WhatsApp y correos como sistema. Se pierde información, se duplican datos y la atención al cliente se vuelve lenta.',
      en: 'Many SMBs run on loose spreadsheets, WhatsApp, and email as their "system". Information gets lost, data is duplicated, and customer service slows down.',
    },
    solution: {
      es: 'Diseñamos software que se acopla a tus procesos reales. Arrancamos con lo esencial y le sumamos funciones conforme tu negocio las vaya necesitando.',
      en: 'We design software that fits your real processes. We start with the essentials and add features as your business actually needs them.',
    },
    relatedServices: ['process-automation', 'cloud-infrastructure', 'tech-consulting'],
  },
  {
    id: 'cloud-infrastructure',
    slug: { es: 'infraestructura-cloud', en: 'cloud-infrastructure' },
    title: {
      es: 'Infraestructura cloud',
      en: 'Cloud infrastructure',
    },
    shortTitle: {
      es: 'Infraestructura cloud',
      en: 'Cloud infrastructure',
    },
    tagline: {
      es: 'Tu primer paso a la nube, sin complicaciones',
      en: 'Your first step to the cloud, no headaches',
    },
    description: {
      es: 'Migramos y configuramos infraestructura cloud para empresas que están dando sus primeros pasos en la nube. Estable, segura y con costos bajo control desde el día uno.',
      en: 'We migrate and configure cloud infrastructure for companies taking their first steps to the cloud. Stable, secure, and cost-controlled from day one.',
    },
    longDescription: {
      es: 'Pensado para empresas que recién están migrando de servidores en oficina o que necesitan ordenar una nube heredada. Diseñamos arquitecturas sobre Google Cloud y AWS pensadas para pymes, con despliegues automatizados, monitoreo y costos bajo control desde el arranque. Si tu producto ya está operando en producción a escala — con Kubernetes, microservicios o requisitos de compliance — conocé también nuestra línea de SRE y Cloud Engineering.',
      en: 'Built for companies migrating off office servers or cleaning up an inherited cloud. We design SMB-friendly architectures on Google Cloud and AWS with automated deployments, monitoring, and cost control from the start. If your product is already running in production at scale — Kubernetes, microservices, or compliance requirements — check out our SRE and Cloud Engineering line as well.',
    },
    icon: 'cloud',
    features: {
      es: [
        'Arquitectura cloud (GCP y AWS)',
        'Migraciones desde servidores locales',
        'Contenedores básicos',
        'Pipelines de CI/CD',
        'Monitoreo y alertas',
        'Optimización de costos cloud',
      ],
      en: [
        'Cloud architecture (GCP and AWS)',
        'Migrations from on-prem servers',
        'Basic containerization',
        'CI/CD pipelines',
        'Monitoring and alerting',
        'Cloud cost optimization',
      ],
    },
    benefits: {
      es: [
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
      en: [
        {
          title: 'Fewer outages',
          description:
            'Redundant, monitored environments so your operation keeps running.',
        },
        {
          title: 'Predictable costs',
          description:
            'We review and optimize monthly spend without giving up performance.',
        },
        {
          title: 'Scale without rebuilding',
          description:
            'If you double users or data tomorrow, the infrastructure can take it.',
        },
      ],
    },
    useCases: {
      es: [
        'Migración de un ERP local a Google Cloud',
        'Despliegue automatizado de una app web en AWS',
        'Respaldo y recuperación de datos en la nube',
        'Separación de ambientes de pruebas y producción',
      ],
      en: [
        'Migrating an on-prem ERP to Google Cloud',
        'Automated deployment of a web app on AWS',
        'Cloud-based backup and disaster recovery',
        'Separating staging and production environments',
      ],
    },
    problem: {
      es: 'Servidores viejos, respaldos a mano y despliegues frágiles son un riesgo silencioso. Una caída te puede costar ventas y confianza.',
      en: 'Aging servers, manual backups, and fragile deployments are a silent risk. A single outage can cost you sales and trust.',
    },
    solution: {
      es: 'Llevamos tus sistemas a una nube gestionada con seguridad, respaldos automáticos, monitoreo y un plan de costos claro. Para etapas más avanzadas (Kubernetes, Istio, compliance), te llevamos al siguiente nivel con nuestra línea de SRE.',
      en: 'We move your systems to a managed cloud with security, automated backups, monitoring, and a clear cost plan. For more advanced stages (Kubernetes, Istio, compliance), our SRE line takes you to the next level.',
    },
    relatedServices: ['sre-gcp-kubernetes', 'cybersecurity', 'tech-consulting'],
    nextStep: {
      title: {
        es: '¿Tu producto ya está en producción?',
        en: 'Already running in production?',
      },
      description: {
        es: 'Si necesitás reliability avanzada — Kubernetes, Istio, observabilidad, compliance SOC2/PCI — el siguiente paso es nuestra línea de SRE y Cloud Engineering, especializada en operar producto digital a escala.',
        en: 'If you need advanced reliability — Kubernetes, Istio, observability, SOC2/PCI compliance — the next step is our SRE and Cloud Engineering line, focused on running digital product at scale.',
      },
      link: {
        targetId: 'sre-gcp-kubernetes',
        label: {
          es: 'Conocer SRE y Cloud Engineering',
          en: 'Explore SRE and Cloud Engineering',
        },
      },
    },
  },
  {
    id: 'process-automation',
    slug: { es: 'automatizacion-procesos', en: 'process-automation' },
    title: {
      es: 'Automatización de procesos',
      en: 'Process automation',
    },
    shortTitle: {
      es: 'Automatización',
      en: 'Automation',
    },
    tagline: {
      es: 'Menos tareas manuales, más tiempo para crecer',
      en: 'Fewer manual tasks, more time to grow',
    },
    description: {
      es: 'Automatizamos tareas repetitivas para reducir errores, ahorrar tiempo y conectar tus herramientas entre sí.',
      en: 'We automate repetitive tasks to cut errors, save time, and connect your tools to each other.',
    },
    longDescription: {
      es: 'Si alguien en tu equipo se la pasa copiando y pegando datos, mandando los mismos correos varias veces al día o armando reportes a mano cada semana, es candidato a automatizar. Conectamos tus sistemas, limpiamos los flujos y dejamos que la tecnología se encargue del trabajo repetitivo.',
      en: 'If someone on your team spends their day copy-pasting data, sending the same emails over and over, or building weekly reports by hand, that work is a prime candidate for automation. We connect your systems, clean up the flows, and let technology handle the repetitive work.',
    },
    icon: 'workflow',
    features: {
      es: [
        'Flujos de trabajo automatizados',
        'Integraciones entre sistemas (APIs)',
        'Reportes automáticos por correo o Slack',
        'Notificaciones a clientes y al equipo',
        'Sincronización de datos entre plataformas',
        'Herramientas internas a la medida',
      ],
      en: [
        'Automated workflows',
        'Integrations between systems (APIs)',
        'Automated reports via email or Slack',
        'Notifications for customers and the team',
        'Data sync between platforms',
        'Custom internal tools',
      ],
    },
    benefits: {
      es: [
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
      en: [
        {
          title: 'Save hours every week',
          description:
            'Your team gets time back for clients and strategic projects.',
        },
        {
          title: 'Fewer human errors',
          description:
            'Consistent, traceable processes that don’t rely on someone remembering.',
        },
        {
          title: 'Faster responses',
          description:
            'Customers get confirmations, reminders, and follow-ups without delay.',
        },
      ],
    },
    useCases: {
      es: [
        'Facturación automática a clientes recurrentes',
        'Conectar el formulario web con el CRM',
        'Recordatorios de citas por WhatsApp o SMS',
        'Reporte diario de ventas enviado por correo',
      ],
      en: [
        'Automatic invoicing for recurring customers',
        'Connecting the web form to your CRM',
        'Appointment reminders via WhatsApp or SMS',
        'Daily sales report delivered via email',
      ],
    },
    problem: {
      es: 'Las tareas a mano se llevan tiempo, generan errores y son difíciles de escalar cuando el negocio empieza a crecer.',
      en: 'Manual tasks eat up time, introduce errors, and become hard to scale once the business starts growing.',
    },
    solution: {
      es: 'Identificamos los procesos que se repiten, los documentamos y diseñamos automatizaciones que le devuelven tiempo a tu equipo.',
      en: 'We identify the repetitive processes, document them, and design automations that give your team time back.',
    },
    relatedServices: ['software-development', 'data-analytics', 'cloud-infrastructure'],
  },
  {
    id: 'cybersecurity',
    slug: { es: 'ciberseguridad-pymes', en: 'cybersecurity' },
    title: {
      es: 'Ciberseguridad para pymes',
      en: 'Cybersecurity for SMBs',
    },
    shortTitle: {
      es: 'Ciberseguridad',
      en: 'Cybersecurity',
    },
    tagline: {
      es: 'Protección práctica, sin complicaciones',
      en: 'Practical protection, no complications',
    },
    description: {
      es: 'Servicios de ciberseguridad adaptados a pymes: diagnóstico, controles básicos, respaldos y acompañamiento continuo.',
      en: 'Cybersecurity services tailored to SMBs: assessment, basic controls, backups, and ongoing support.',
    },
    longDescription: {
      es: 'Las pymes también son blanco de ataques, muchas veces por configuraciones inseguras o equipos sin protección. Hacemos una evaluación realista de tus riesgos y aplicamos medidas que sí funcionan: control de accesos, respaldos, configuración segura de la nube y acompañamiento al equipo.',
      en: 'SMBs are also targets, often because of insecure configurations or unprotected devices. We run a realistic risk assessment and apply measures that actually work: access control, backups, secure cloud configuration, and team coaching.',
    },
    icon: 'shield',
    features: {
      es: [
        'Evaluación de riesgos y diagnóstico',
        'Control de accesos y contraseñas',
        'Estrategia de respaldos y recuperación',
        'Hardening básico de servidores y endpoints',
        'Configuración segura de cloud y correo',
        'Recomendaciones de concientización',
      ],
      en: [
        'Risk assessment and diagnosis',
        'Access and password control',
        'Backup and recovery strategy',
        'Basic server and endpoint hardening',
        'Secure cloud and email configuration',
        'Awareness recommendations',
      ],
    },
    benefits: {
      es: [
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
      en: [
        {
          title: 'Lower risk of loss',
          description:
            'Tested backups and controlled access so an incident doesn’t bring you to a halt.',
        },
        {
          title: 'Calmer customers',
          description:
            'You can show you take their data seriously.',
        },
        {
          title: 'Orderly compliance',
          description:
            'We help you meet best practices and contractual requirements.',
        },
      ],
    },
    useCases: {
      es: [
        'Diagnóstico de seguridad para una empresa de servicios',
        'Plan de respaldos para una tienda con facturación propia',
        'Control de accesos tras una rotación de personal',
        'Configuración segura de Google Workspace o Microsoft 365',
      ],
      en: [
        'Security assessment for a services company',
        'Backup plan for a retail business with its own billing',
        'Access review after staff turnover',
        'Secure setup for Google Workspace or Microsoft 365',
      ],
    },
    problem: {
      es: 'La mayoría de incidentes en pymes pasa por falta de respaldos, contraseñas débiles o configuraciones por defecto que nunca se revisaron.',
      en: 'Most SMB incidents come from missing backups, weak passwords, or default configurations no one ever reviewed.',
    },
    solution: {
      es: 'Aplicamos un plan práctico: evaluamos, arreglamos lo crítico primero y acompañamos al equipo para que los buenos hábitos se queden.',
      en: 'We apply a practical plan: assess, fix the critical issues first, and coach the team so the good habits stick.',
    },
    relatedServices: ['cloud-infrastructure', 'tech-consulting', 'software-development'],
  },
  {
    id: 'data-analytics',
    slug: { es: 'analisis-datos-reportes', en: 'data-analytics' },
    title: {
      es: 'Análisis de datos y reportes',
      en: 'Data analytics and reporting',
    },
    shortTitle: {
      es: 'Datos y reportes',
      en: 'Data & reporting',
    },
    tagline: {
      es: 'Decisiones con información clara',
      en: 'Decisions with clear information',
    },
    description: {
      es: 'Tableros, KPIs y reportes automatizados para que la gerencia y los equipos operativos tomen mejores decisiones.',
      en: 'Dashboards, KPIs, and automated reports so leadership and operations can make better decisions.',
    },
    longDescription: {
      es: 'Tus datos ya están en algún lado: ventas, inventario, asistencia, clientes. Los ordenamos, los limpiamos y los volvemos tableros y reportes que sí se usan. Power BI, Looker Studio o soluciones a la medida, según lo que mejor le calce a tu empresa.',
      en: 'Your data already exists somewhere: sales, inventory, attendance, customers. We organize it, clean it, and turn it into dashboards and reports that actually get used. Power BI, Looker Studio, or custom solutions — whichever fits your company best.',
    },
    icon: 'chart',
    features: {
      es: [
        'Tableros en Power BI y Looker Studio',
        'Limpieza e integración de datos',
        'Definición de KPIs del negocio',
        'Reportes financieros y operativos',
        'Automatización de reportes periódicos',
        'Visualización clara para no técnicos',
      ],
      en: [
        'Dashboards in Power BI and Looker Studio',
        'Data cleaning and integration',
        'Business KPI definition',
        'Financial and operational reports',
        'Automation of recurring reports',
        'Clear visualization for non-technical audiences',
      ],
    },
    benefits: {
      es: [
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
      en: [
        {
          title: 'See the whole business',
          description:
            'A single view of sales, expenses, operations, and customers.',
        },
        {
          title: 'Data-driven decisions',
          description:
            'Fewer guesses, more actionable information for leadership.',
        },
        {
          title: 'Aligned teams',
          description:
            'The same metrics for everyone: sales, ops, and finance.',
        },
      ],
    },
    useCases: {
      es: [
        'Tablero gerencial de ventas y márgenes',
        'Reporte semanal automático de inventario',
        'Indicadores operativos para una clínica',
        'Análisis de comportamiento de clientes',
      ],
      en: [
        'Executive dashboard for sales and margins',
        'Automated weekly inventory report',
        'Operational metrics for a clinic',
        'Customer behavior analysis',
      ],
    },
    problem: {
      es: 'Los reportes se arman a mano, llegan tarde y cada área tiene su propia versión de los números.',
      en: 'Reports are built by hand, arrive late, and every department has its own version of the numbers.',
    },
    solution: {
      es: 'Unificamos las fuentes, definimos los KPIs junto con tu equipo y entregamos tableros que se actualizan solos.',
      en: 'We unify the sources, define KPIs with your team, and deliver dashboards that refresh themselves.',
    },
    relatedServices: ['process-automation', 'cloud-infrastructure', 'tech-consulting'],
  },
  {
    id: 'tech-consulting',
    slug: { es: 'consultoria-tecnologica', en: 'tech-consulting' },
    title: {
      es: 'Consultoría tecnológica',
      en: 'Tech consulting',
    },
    shortTitle: {
      es: 'Consultoría',
      en: 'Consulting',
    },
    tagline: {
      es: 'Claridad antes de invertir',
      en: 'Clarity before you invest',
    },
    description: {
      es: 'Te acompañamos a diagnosticar, priorizar y planear las inversiones tecnológicas de tu empresa.',
      en: 'We help you assess, prioritize, and plan your company’s technology investments.',
    },
    longDescription: {
      es: 'Antes de comprar software o contratar desarrolladores, hace falta claridad. Miramos cómo opera hoy tu empresa, identificamos oportunidades reales de mejora y te entregamos un plan priorizado. Sin tecnicismos innecesarios y con la mira puesta en resultados de negocio.',
      en: 'Before buying software or hiring developers, you need clarity. We look at how your company runs today, identify real improvement opportunities, and deliver a prioritized plan. No unnecessary jargon, all eyes on business outcomes.',
    },
    icon: 'compass',
    features: {
      es: [
        'Diagnóstico tecnológico integral',
        'Hoja de ruta de modernización',
        'Evaluación de proveedores y herramientas',
        'Recomendaciones de arquitectura',
        'Priorización de iniciativas',
        'Acompañamiento a gerencia',
      ],
      en: [
        'End-to-end technology assessment',
        'Modernization roadmap',
        'Vendor and tool evaluation',
        'Architecture recommendations',
        'Initiative prioritization',
        'Leadership advisory',
      ],
    },
    benefits: {
      es: [
        {
          title: 'Evitar inversiones innecesarias',
          description:
            'Pagás por lo que de verdad mueve la aguja, no por modas.',
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
      en: [
        {
          title: 'Avoid unnecessary spending',
          description:
            'You pay for what actually moves the needle, not for hype.',
        },
        {
          title: 'Step-by-step plan',
          description:
            'A realistic, measurable roadmap sized to your company.',
        },
        {
          title: 'Informed decisions',
          description:
            'We compare options and lay out the total cost of each path.',
        },
      ],
    },
    useCases: {
      es: [
        'Definir si conviene migrar a la nube',
        'Elegir entre un CRM existente o uno a la medida',
        'Roadmap de digitalización para una empresa de servicios',
        'Auditoría tecnológica previa a una ronda de inversión',
      ],
      en: [
        'Decide whether to migrate to the cloud',
        'Choose between an off-the-shelf CRM or a custom one',
        'Digitalization roadmap for a services company',
        'Pre-funding technology audit',
      ],
    },
    problem: {
      es: 'Hay demasiadas opciones, demasiados proveedores y muy poco tiempo. Equivocarse en una decisión tecnológica te puede salir caro.',
      en: 'Too many options, too many vendors, very little time. Getting a technology decision wrong can be expensive.',
    },
    solution: {
      es: 'Un diagnóstico claro, decisiones priorizadas y un plan que tu equipo puede arrancar a ejecutar con o sin nosotros.',
      en: 'A clear assessment, prioritized decisions, and a plan your team can start executing with or without us.',
    },
    relatedServices: ['software-development', 'cloud-infrastructure', 'data-analytics'],
  },
  {
    id: 'sre-gcp-kubernetes',
    slug: { es: 'sre-gcp-kubernetes', en: 'sre-gcp-kubernetes' },
    title: {
      es: 'SRE y Cloud Engineering en GCP y Kubernetes',
      en: 'SRE and Cloud Engineering on GCP and Kubernetes',
    },
    shortTitle: {
      es: 'SRE y Cloud Engineering',
      en: 'SRE & Cloud Engineering',
    },
    tagline: {
      es: 'Confiabilidad enterprise para producto digital',
      en: 'Enterprise-grade reliability for digital product',
    },
    description: {
      es: 'SRE fraccional especializado en GCP, Kubernetes e Istio. Para SaaS, fintechs y empresas escalando microservicios.',
      en: 'Fractional SRE specialized in GCP, Kubernetes, and Istio. For SaaS, fintechs, and companies scaling microservices.',
    },
    longDescription: {
      es: 'Confiabilidad de nivel enterprise para tu producto digital, sin contratar un equipo completo. SRE fraccional con 11+ años de experiencia operando producción a escala en entornos regulados.',
      en: 'Enterprise-grade reliability for your digital product, without hiring a full team. Fractional SRE with 11+ years operating production at scale in regulated environments.',
    },
    icon: 'server-cog',
    features: {
      es: [
        'Especialización en GCP y GKE',
        'Service mesh con Istio',
        'Infraestructura como código (Terraform)',
        'Hardening y compliance (SOC2, PCI)',
        'Observabilidad y SLOs',
        'Modelo fraccional por horas',
      ],
      en: [
        'GCP and GKE specialization',
        'Service mesh with Istio',
        'Infrastructure as Code (Terraform)',
        'Hardening and compliance (SOC2, PCI)',
        'Observability and SLOs',
        'Fractional model billed by the hour',
      ],
    },
    benefits: {
      es: [
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
      en: [
        {
          title: 'Specialist, not generalist',
          description:
            'GCP, GKE, and Istio are our focus. We don’t dabble in everything — we run production at scale.',
        },
        {
          title: 'Fractional cost',
          description:
            'You pay only for the hours you need. No headcount, no long onboarding, no payroll overhead.',
        },
        {
          title: 'Hands-on compliance',
          description:
            'Real experience running in SOC2/PCI-regulated enterprise environments. Not theory — daily practice.',
        },
      ],
    },
    useCases: {
      es: [
        'Migración a Terraform para una empresa con infra manual',
        'Implementación de Istio + observabilidad en cluster GKE',
        'Setup GKE producción-ready con multi-tenant',
        'Auditoría de costos y reliability en cuenta GCP existente',
      ],
      en: [
        'Migration to Terraform for a company with manual infra',
        'Istio + observability rollout on a GKE cluster',
        'Production-ready GKE setup with multi-tenant',
        'Cost and reliability audit on an existing GCP account',
      ],
    },
    problem: {
      es: 'Cuando tu producto crece — microservicios, Kubernetes, múltiples regiones, compliance — un cloud generalista se queda corto y contratar un SRE senior cuesta más de USD 100k/año.',
      en: 'Once your product grows — microservices, Kubernetes, multiple regions, compliance — a generalist cloud engineer falls short, and hiring a senior SRE costs over USD 100k/year.',
    },
    solution: {
      es: 'Un SRE certificado (CKA, ICA) operando tu infra como fraccional. Sin headcount, con la experiencia de quien ya operó producción a escala en una Fortune 500 financiera.',
      en: 'A certified SRE (CKA, ICA) running your infra as a fractional engineer. No headcount, with the experience of someone who has already operated production at scale at a Fortune 500 financial.',
    },
    relatedServices: ['cloud-infrastructure', 'cybersecurity', 'tech-consulting'],
    hasCustomPage: true,
  },
];

export function getServiceBySlug(
  slug: string,
  locale: Locale,
): Service | undefined {
  return services.find((s) => s.slug[locale] === slug);
}

export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}
