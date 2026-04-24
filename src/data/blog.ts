export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: 'Automatización' | 'Cloud' | 'Ciberseguridad' | 'Datos' | 'Estrategia';
  readingTime: string;
  author: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'por-que-una-pyme-deberia-automatizar-sus-procesos',
    title: '¿Por qué una pyme debería automatizar sus procesos?',
    excerpt:
      'La automatización no es solo para grandes empresas. Te contamos cómo las pymes pueden ahorrar horas cada semana y reducir errores con herramientas accesibles.',
    date: '2026-03-10',
    category: 'Automatización',
    readingTime: '5 min',
    author: 'Equipo TechBox',
    content: [
      'En muchas pymes, una sola persona termina haciendo el trabajo de tres: atender al cliente, cuadrar ventas, enviar recordatorios y preparar reportes. La tecnología no puede reemplazar ese criterio humano, pero sí puede quitarle de encima el trabajo repetitivo.',
      'Automatizar no significa comprar un software caro. A veces empieza con conectar tu formulario web a una hoja de cálculo, enviar un correo automático cuando entra un pedido o recordarle al cliente su próxima cita por WhatsApp.',
      'El beneficio real no es solo ahorrar tiempo, es quitarle presión al equipo y reducir errores. Cuando un proceso se automatiza, deja de depender de que alguien se acuerde de hacerlo.',
      'Nuestro consejo: empieza pequeño. Elige la tarea que más se repite y más molesta al equipo, y automatízala primero. Ese primer paso suele liberar el tiempo y la motivación para los siguientes.',
    ],
  },
  {
    slug: 'cloud-para-pequenas-empresas-beneficios-sin-complicarse',
    title: 'Cloud para pequeñas empresas: beneficios sin complicarse',
    excerpt:
      'La nube dejó de ser cosa de grandes corporaciones. Hoy una pyme puede operar con la misma estabilidad y seguridad, a un costo razonable.',
    date: '2026-02-21',
    category: 'Cloud',
    readingTime: '6 min',
    author: 'Equipo TechBox',
    content: [
      'Durante años, la nube sonó a algo costoso y reservado para empresas grandes. Hoy, una pyme en Costa Rica puede operar con la misma infraestructura confiable que usan bancos y retailers internacionales, pagando solo por lo que consume.',
      'Los beneficios concretos son tres: continuidad (si tu oficina se queda sin luz, tu sistema sigue arriba), respaldo (tus datos no dependen de un disco físico) y escalabilidad (si creces, la infraestructura crece contigo).',
      'El error más común es llegar a la nube sin un plan. Servicios encendidos que nadie usa, datos duplicados y permisos abiertos. Por eso siempre empezamos con un diagnóstico y una arquitectura pensada para tu tamaño real, no para un crecimiento hipotético.',
      'Con una configuración ordenada, muchas pymes terminan pagando menos por su nube que por mantener un servidor local con soporte, respaldos y UPS.',
    ],
  },
  {
    slug: 'ciberseguridad-basica-para-pymes-en-costa-rica',
    title: 'Ciberseguridad básica para pymes en Costa Rica',
    excerpt:
      'No necesitas un equipo de seguridad dedicado para proteger tu negocio. Cinco prácticas realistas que reducen el riesgo de un incidente grave.',
    date: '2026-02-05',
    category: 'Ciberseguridad',
    readingTime: '7 min',
    author: 'Equipo TechBox',
    content: [
      'Los incidentes de ciberseguridad en pymes rara vez vienen de un ataque sofisticado. Casi siempre empiezan por un correo con una liga falsa, una contraseña reutilizada o un respaldo que nunca se probó.',
      'Cinco prácticas básicas marcan una diferencia enorme: usar un administrador de contraseñas, activar segundo factor en correo y banca, mantener respaldos automáticos en la nube, separar accesos por rol y capacitar al equipo en reconocer correos sospechosos.',
      'En Costa Rica, además, conviene revisar el cumplimiento con la Ley de Protección de la Persona frente al Tratamiento de sus Datos Personales. No aplica solo a empresas grandes: si almacenas datos de clientes, te involucra.',
      'La buena noticia es que la mayoría de estos controles no cuestan dinero; cuestan decisión y orden. Un diagnóstico inicial ayuda a priorizar qué hacer primero sin sobredimensionar la inversión.',
    ],
  },
  {
    slug: 'como-los-reportes-de-datos-ayudan-a-tomar-mejores-decisiones',
    title: 'Cómo los reportes de datos ayudan a tomar mejores decisiones',
    excerpt:
      'Tus datos ya existen. El reto no es generar más información, es convertir la que tienes en reportes que realmente se usen para decidir.',
    date: '2026-01-18',
    category: 'Datos',
    readingTime: '6 min',
    author: 'Equipo TechBox',
    content: [
      'La mayoría de pymes no tiene un problema de datos, tiene un problema de lectura de datos. Las ventas, los gastos, la asistencia y los clientes están registrados, pero dispersos entre hojas de cálculo, sistemas y correos.',
      'Un buen tablero de datos responde tres preguntas simples: qué está pasando, por qué está pasando y qué hacer al respecto. Si un reporte no ayuda a decidir, sobra.',
      'Antes de construir cualquier dashboard, nos sentamos con la gerencia a definir los 5 a 7 indicadores que de verdad importan. Menos es más: un tablero con 30 gráficos rara vez se revisa.',
      'Con Power BI, Looker Studio o incluso una página interna bien construida, se puede automatizar un reporte semanal que llegue listo al correo los lunes a las 7am. Ese hábito cambia la forma en que el equipo opera.',
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-');
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
  return `${parseInt(d, 10)} de ${months[parseInt(m, 10) - 1]}, ${y}`;
}
