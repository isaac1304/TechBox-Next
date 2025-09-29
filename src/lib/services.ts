export type Service = {
    slug: string;
    name: string;
    lottie?: string;
    longDescription: string;
    includes: string[];
    deliverables: string[];
};

export const services: Service[] = [
    { slug: 'software', name: 'Software',
        lottie: '/lottie/software.json',
        longDescription: 'Construimos productos web robustos con Next.js, APIs y CI/CD.',
        includes: ['Arquitectura y estimación', 'Desarrollo front/back', 'Pruebas y despliegue'],
        deliverables: ['Repositorio y pipelines', 'Manual de uso', 'Checklist de lanzamiento']
    },
    { slug: 'automatizacion', name: 'Automatización',
        lottie: '/lottie/automatizacion.json',
        longDescription: 'Bots e integraciones que eliminan trabajo manual.',
        includes: ['Mapeo de procesos', 'Integraciones', 'Monitoreo'],
        deliverables: ['Flujos automatizados', 'KPIs de ahorro', 'Runbooks']
    },
    { slug: 'analytics', name: 'Analytics',
        lottie: '/lottie/analytics.json',
        longDescription: 'Métricas, paneles y trazabilidad para decisiones reales.',
        includes: ['Instrumentación', 'ETL/ELT', 'Dashboards'],
        deliverables: ['Tableros', 'Definición de métricas', 'Documentación']
    },
    { slug: 'bigdata', name: 'Big Data',
        lottie: '/lottie/bigdata.json',
        longDescription: 'Pipelines escalables y almacenamiento eficiente.',
        includes: ['Data lake/warehouse', 'Jobs escalables', 'Cost control'],
        deliverables: ['Infra as code', 'Jobs programados', 'Guía de gobierno']
    },
    { slug: 'ciberseguridad', name: 'Ciberseguridad',
        lottie: '/lottie/ciberseguridad.json',
        longDescription: 'Endurecimiento, backups y respuesta a incidentes.',
        includes: ['Hardening', 'Backups', 'Alertas'],
        deliverables: ['Matriz de riesgos', 'Playbooks', 'Reporte final']
    },
    { slug: 'consultoria', name: 'Consultoría',
        lottie: '/lottie/consultoria.json',
        longDescription: 'Alineamos la tecnología con tus metas de negocio.',
        includes: ['Assessment', 'Roadmap', 'PMO ligera'],
        deliverables: ['Roadmap trimestral', 'Backlog priorizado', 'KPIs']
    },
    { slug: 'mantenimiento', name: 'Mantenimiento',
        lottie: '/lottie/hero-animation.json',
        longDescription: 'Soporte, parches y mejoras continuas.',
        includes: ['SLA y soporte', 'Actualizaciones', 'Observabilidad'],
        deliverables: ['Tablero de soporte', 'Historial de cambios', 'SLA']
    },
    { slug: 'nube', name: 'Nube',
        lottie: '/lottie/nube.json',
        longDescription: 'Infra en la nube, CI/CD y SRE para operar con confianza.',
        includes: ['IaC', 'CI/CD', 'Monitoreo y alertas'],
        deliverables: ['Pipelines', 'Diagramas', 'Runbooks SRE']
    },
    { slug: 'transformacion', name: 'Transformación Digital',
        lottie: '/lottie/transformacion.json',
        longDescription: 'De procesos manuales a flujos digitales.',
        includes: ['Discovery', 'MVP', 'Escalamiento'],
        deliverables: ['Mapa To-Be', 'MVP live', 'Plan de adopción']
    },
];
