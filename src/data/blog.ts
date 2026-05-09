import type { Locale } from '@/i18n/routing';

type LocalizedString = Record<Locale, string>;
type LocalizedStringArray = Record<Locale, string[]>;

export type BlogCategory =
  | 'automation'
  | 'cloud'
  | 'cybersecurity'
  | 'data'
  | 'strategy';

export const categoryLabels: Record<BlogCategory, LocalizedString> = {
  automation: { es: 'Automatización', en: 'Automation' },
  cloud: { es: 'Cloud', en: 'Cloud' },
  cybersecurity: { es: 'Ciberseguridad', en: 'Cybersecurity' },
  data: { es: 'Datos', en: 'Data' },
  strategy: { es: 'Estrategia', en: 'Strategy' },
};

export type BlogPost = {
  /** Identificador estable del artículo. */
  id: string;
  /** Slug por idioma usado en la URL. */
  slug: LocalizedString;
  title: LocalizedString;
  excerpt: LocalizedString;
  date: string;
  category: BlogCategory;
  /** Tiempo de lectura por idioma (puede variar). */
  readingTime: LocalizedString;
  author: LocalizedString;
  content: LocalizedStringArray;
};

export const blogPosts: BlogPost[] = [
  {
    id: 'why-smbs-should-automate-processes',
    slug: {
      es: 'por-que-una-pyme-deberia-automatizar-sus-procesos',
      en: 'why-smbs-should-automate-processes',
    },
    title: {
      es: '¿Por qué una pyme debería automatizar sus procesos?',
      en: 'Why should an SMB automate its processes?',
    },
    excerpt: {
      es: 'La automatización no es solo para grandes empresas. Te contamos cómo las pymes pueden ahorrar horas cada semana y reducir errores con herramientas accesibles.',
      en: 'Automation isn’t just for big companies. Here’s how SMBs can save hours every week and cut errors with accessible tools.',
    },
    date: '2026-03-10',
    category: 'automation',
    readingTime: { es: '5 min', en: '5 min' },
    author: { es: 'Equipo Techbox', en: 'Techbox team' },
    content: {
      es: [
        'En muchas pymes, una sola persona termina haciendo el trabajo de tres: atender al cliente, cuadrar ventas, enviar recordatorios y preparar reportes. La tecnología no puede reemplazar ese criterio humano, pero sí puede quitarle de encima el trabajo repetitivo.',
        'Automatizar no significa comprar un software caro. A veces empieza con conectar tu formulario web a una hoja de cálculo, enviar un correo automático cuando entra un pedido o recordarle al cliente su próxima cita por WhatsApp.',
        'El beneficio real no es solo ahorrar tiempo, es quitarle presión al equipo y reducir errores. Cuando un proceso se automatiza, deja de depender de que alguien se acuerde de hacerlo.',
        'Nuestro consejo: empieza pequeño. Elige la tarea que más se repite y más molesta al equipo, y automatízala primero. Ese primer paso suele liberar el tiempo y la motivación para los siguientes.',
      ],
      en: [
        'In many SMBs, one person ends up doing the job of three: handling customers, reconciling sales, sending reminders, and preparing reports. Technology can’t replace that human judgment, but it can take the repetitive work off their plate.',
        'Automating doesn’t mean buying expensive software. It often starts with connecting your web form to a spreadsheet, sending an automatic email when an order comes in, or reminding the customer about their next appointment via WhatsApp.',
        'The real benefit isn’t just saving time — it’s taking pressure off the team and reducing errors. Once a process is automated, it stops depending on someone remembering to do it.',
        'Our advice: start small. Pick the most repetitive task that bothers the team the most and automate it first. That initial step usually unlocks the time and motivation for the next ones.',
      ],
    },
  },
  {
    id: 'cloud-benefits-without-complications',
    slug: {
      es: 'cloud-para-pequenas-empresas-beneficios-sin-complicarse',
      en: 'cloud-benefits-without-complications',
    },
    title: {
      es: 'Cloud para pequeñas empresas: beneficios sin complicarse',
      en: 'Cloud for small businesses: benefits without complications',
    },
    excerpt: {
      es: 'La nube dejó de ser cosa de grandes corporaciones. Hoy una pyme puede operar con la misma estabilidad y seguridad, a un costo razonable.',
      en: 'The cloud is no longer just for big corporations. Today an SMB can operate with the same stability and security at a reasonable cost.',
    },
    date: '2026-02-21',
    category: 'cloud',
    readingTime: { es: '6 min', en: '6 min' },
    author: { es: 'Equipo Techbox', en: 'Techbox team' },
    content: {
      es: [
        'Durante años, la nube sonó a algo costoso y reservado para empresas grandes. Hoy, una pyme en Costa Rica puede operar con la misma infraestructura confiable que usan bancos y retailers internacionales, pagando solo por lo que consume.',
        'Los beneficios concretos son tres: continuidad (si tu oficina se queda sin luz, tu sistema sigue arriba), respaldo (tus datos no dependen de un disco físico) y escalabilidad (si creces, la infraestructura crece contigo).',
        'El error más común es llegar a la nube sin un plan. Servicios encendidos que nadie usa, datos duplicados y permisos abiertos. Por eso siempre empezamos con un diagnóstico y una arquitectura pensada para tu tamaño real, no para un crecimiento hipotético.',
        'Con una configuración ordenada, muchas pymes terminan pagando menos por su nube que por mantener un servidor local con soporte, respaldos y UPS.',
      ],
      en: [
        'For years, the cloud sounded expensive and reserved for big companies. Today, an SMB in Costa Rica can operate on the same reliable infrastructure that international banks and retailers use, paying only for what it consumes.',
        'The concrete benefits are three: continuity (if your office loses power, your system stays up), backup (your data doesn’t depend on a physical disk), and scalability (if you grow, infrastructure grows with you).',
        'The most common mistake is reaching the cloud without a plan: idle services nobody uses, duplicated data, and open permissions. That’s why we always start with an assessment and an architecture sized for your real scale, not a hypothetical one.',
        'With an orderly setup, many SMBs end up paying less for their cloud than for keeping a local server with support, backups, and a UPS.',
      ],
    },
  },
  {
    id: 'basic-cybersecurity-for-smbs',
    slug: {
      es: 'ciberseguridad-basica-para-pymes-en-costa-rica',
      en: 'basic-cybersecurity-for-smbs-in-costa-rica',
    },
    title: {
      es: 'Ciberseguridad básica para pymes en Costa Rica',
      en: 'Basic cybersecurity for SMBs in Costa Rica',
    },
    excerpt: {
      es: 'No necesitas un equipo de seguridad dedicado para proteger tu negocio. Cinco prácticas realistas que reducen el riesgo de un incidente grave.',
      en: 'You don’t need a dedicated security team to protect your business. Five realistic practices that lower the risk of a serious incident.',
    },
    date: '2026-02-05',
    category: 'cybersecurity',
    readingTime: { es: '7 min', en: '7 min' },
    author: { es: 'Equipo Techbox', en: 'Techbox team' },
    content: {
      es: [
        'Los incidentes de ciberseguridad en pymes rara vez vienen de un ataque sofisticado. Casi siempre empiezan por un correo con una liga falsa, una contraseña reutilizada o un respaldo que nunca se probó.',
        'Cinco prácticas básicas marcan una diferencia enorme: usar un administrador de contraseñas, activar segundo factor en correo y banca, mantener respaldos automáticos en la nube, separar accesos por rol y capacitar al equipo en reconocer correos sospechosos.',
        'En Costa Rica, además, conviene revisar el cumplimiento con la Ley de Protección de la Persona frente al Tratamiento de sus Datos Personales. No aplica solo a empresas grandes: si almacenas datos de clientes, te involucra.',
        'La buena noticia es que la mayoría de estos controles no cuestan dinero; cuestan decisión y orden. Un diagnóstico inicial ayuda a priorizar qué hacer primero sin sobredimensionar la inversión.',
      ],
      en: [
        'Cybersecurity incidents at SMBs rarely come from a sophisticated attack. They almost always start with an email containing a fake link, a reused password, or a backup that was never tested.',
        'Five basic practices make a huge difference: use a password manager, enable two-factor auth on email and banking, keep automated backups in the cloud, separate access by role, and train the team to recognize suspicious emails.',
        'In Costa Rica, you should also review compliance with the personal data protection law. It doesn’t only apply to large companies: if you store customer data, it concerns you.',
        'The good news is that most of these controls don’t cost money — they cost decisiveness and order. An initial assessment helps prioritize what to do first without overspending.',
      ],
    },
  },
  {
    id: 'how-data-reports-improve-decisions',
    slug: {
      es: 'como-los-reportes-de-datos-ayudan-a-tomar-mejores-decisiones',
      en: 'how-data-reports-improve-decisions',
    },
    title: {
      es: 'Cómo los reportes de datos ayudan a tomar mejores decisiones',
      en: 'How data reports help you make better decisions',
    },
    excerpt: {
      es: 'Tus datos ya existen. El reto no es generar más información, es convertir la que tienes en reportes que realmente se usen para decidir.',
      en: 'Your data already exists. The challenge isn’t generating more information, it’s turning what you have into reports that actually drive decisions.',
    },
    date: '2026-01-18',
    category: 'data',
    readingTime: { es: '6 min', en: '6 min' },
    author: { es: 'Equipo Techbox', en: 'Techbox team' },
    content: {
      es: [
        'La mayoría de pymes no tiene un problema de datos, tiene un problema de lectura de datos. Las ventas, los gastos, la asistencia y los clientes están registrados, pero dispersos entre hojas de cálculo, sistemas y correos.',
        'Un buen tablero de datos responde tres preguntas simples: qué está pasando, por qué está pasando y qué hacer al respecto. Si un reporte no ayuda a decidir, sobra.',
        'Antes de construir cualquier dashboard, nos sentamos con la gerencia a definir los 5 a 7 indicadores que de verdad importan. Menos es más: un tablero con 30 gráficos rara vez se revisa.',
        'Con Power BI, Looker Studio o incluso una página interna bien construida, se puede automatizar un reporte semanal que llegue listo al correo los lunes a las 7am. Ese hábito cambia la forma en que el equipo opera.',
      ],
      en: [
        'Most SMBs don’t have a data problem, they have a data-reading problem. Sales, expenses, attendance, and customers are all recorded, but scattered across spreadsheets, systems, and emails.',
        'A good data dashboard answers three simple questions: what is happening, why is it happening, and what to do about it. If a report doesn’t help you decide, it’s noise.',
        'Before building any dashboard, we sit with leadership to define the 5 to 7 indicators that truly matter. Less is more: a dashboard with 30 charts rarely gets reviewed.',
        'With Power BI, Looker Studio, or even a well-built internal page, you can automate a weekly report that lands in your inbox on Mondays at 7am. That habit changes how the team operates.',
      ],
    },
  },
];

export function getPostBySlug(
  slug: string,
  locale: Locale,
): BlogPost | undefined {
  return blogPosts.find((p) => p.slug[locale] === slug);
}

export function formatDate(iso: string, locale: Locale): string {
  const [y, m, d] = iso.split('-');
  const day = parseInt(d, 10);
  const monthIdx = parseInt(m, 10) - 1;
  if (locale === 'en') {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return `${months[monthIdx]} ${day}, ${y}`;
  }
  const months = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'setiembre',
    'octubre',
    'noviembre',
    'diciembre',
  ];
  return `${day} de ${months[monthIdx]}, ${y}`;
}
