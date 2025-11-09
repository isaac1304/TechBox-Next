import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import Hero from "./components/Hero";
import ValuePillars from "./components/ValuePillars";
import Practices from "./components/Practices";
import Industries from "./components/Industries";
import CaseStudies from "./components/CaseStudies";
import Process from "./components/Process";
import Differentiators from "./components/Differentiators";
import Badges from "./components/Badges";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import FinalCTAWithForm from "./components/FinalCTAWithForm";

const services = [
  { slug: "software", name: "Software" },
  { slug: "automatizacion", name: "Automatización" },
  { slug: "analytics", name: "Analytics" },
  { slug: "bigdata", name: "Big Data" },
  { slug: "ciberseguridad", name: "Ciberseguridad" },
  { slug: "consultoria", name: "Consultoría" },
  { slug: "mantenimiento", name: "Mantenimiento" },
  { slug: "nube", name: "Nube" },
  { slug: "transformacion", name: "Transformación" },
];

export const metadata: Metadata = {
  title: "Servicios | Techbox",
  description:
    "Consultoría, ingeniería y analítica de Techbox para lanzar productos rápido, operar con seguridad y crecer con datos medibles en toda Latinoamérica empresarial.",
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Techbox Servicios",
  url: "https://www.techbox.cr/Servicios",
  areaServed: "Latin America",
  description:
    "Consultoría, ingeniería y analítica de Techbox para lanzar productos rápido, operar con seguridad y crecer con datos medibles en toda Latinoamérica empresarial.",
  sameAs: [],
};

const pillars = [
  {
    title: "Velocidad con calidad",
    description:
      "Entregamos valor en ciclos cortos, con estándares de ingeniería modernos.",
  },
  {
    title: "Arquitectura segura",
    description:
      "Diseño con seguridad por defecto, cumplimiento y observabilidad.",
  },
  {
    title: "Datos accionables",
    description:
      "Métricas, analítica y ML alineados a KPIs de negocio.",
  },
  {
    title: "Equipo a tu medida",
    description:
      "Células cross-funcionales que se integran con tu organización.",
  },
];

const practices = [
  {
    title: "Estrategia y Descubrimiento",
    description:
      "Alineamos objetivos, medimos impacto y definimos roadmap priorizado.",
    results: [
      "Resultados: backlog priorizado, prototipos, estimaciones y métricas de éxito.",
    ],
  },
  {
    title: "Desarrollo de Productos Digitales",
    description:
      "Frontend, backend y mobile con CI/CD, testing y performance desde el día uno.",
    results: [
      "Resultados: releases frecuentes, deuda técnica controlada, UX medible.",
    ],
  },
  {
    title: "Modernización y Cloud",
    description:
      "Migraciones, contenedores, observabilidad, seguridad y costes optimizados.",
    results: [
      "Resultados: resiliencia, escalabilidad y time-to-market reducido.",
    ],
  },
  {
    title: "Data, Analytics & AI",
    description:
      "Data pipelines, gobernanza, dashboards y casos de ML generativos/classic.",
    results: [
      "Resultados: decisiones con datos, automatización y crecimiento eficiente.",
    ],
  },
];

const industries = [
  {
    name: "Retail & eCommerce",
    description:
      "Conversión, OMS, personalización y fidelización.",
  },
  {
    name: "Servicios Financieros",
    description:
      "Cumplimiento, scoring, antifraude y apps seguras.",
  },
  {
    name: "Salud",
    description:
      "Interoperabilidad, privacidad y experiencias del paciente.",
  },
  {
    name: "Manufactura",
    description: "IoT, trazabilidad y mantenimiento predictivo.",
  },
  {
    name: "Telecom",
    description: "Provisionamiento, billing y experiencia digital.",
  },
];

const caseStudies = [
  {
    title: "Checkout 3× más rápido",
    result:
      "Redujimos TTFB 42% y mejoramos conversión 18% en 8 semanas.",
  },
  {
    title: "Migración a nube segura",
    result:
      "De monolito a microservicios con 99.95% uptime y -27% costos.",
  },
  {
    title: "Analítica accionable",
    result:
      "Dashboard ejecutivo con KPIs en tiempo real; decisiones semanales basadas en datos.",
  },
];

const processSteps = [
  {
    title: "Descubrimiento",
    description: "Metas, usuarios y restricciones claras.",
  },
  {
    title: "Diseño de solución",
    description: "Arquitectura, riesgos y plan de entrega.",
  },
  {
    title: "Construcción",
    description: "Sprints con demo y feedback continuo.",
  },
  {
    title: "Aseguramiento",
    description:
      "Pruebas, seguridad, observabilidad y hardening.",
  },
  {
    title: "Despliegue y éxito",
    description:
      "Go-live asistido, medición y mejora continua.",
  },
];

const differentiators = [
  "Seniority comprobable, governance técnica y calidad medible.",
  "Seguridad desde el diseño y cumplimiento práctico.",
  "Entregas frecuentes con foco en impacto.",
  "Co-creación con tu equipo: transferencia de conocimiento real.",
];

const badges = ["AWS Partner", "Google Cloud Partner", "ISO 27001"];

const testimonials = [
  {
    quote:
      "Techbox aceleró nuestro roadmap sin comprometer seguridad.",
    author: "Carolina M., CIO",
  },
  {
    quote:
      "Pasamos de idea a MVP en semanas, con métricas claras.",
    author: "Jorge R., VP Producto",
  },
];

const faqItems = [
  {
    question: "¿Cómo empieza un proyecto?",
    answer:
      "Con un workshop de descubrimiento para alinear objetivos y priorizar impacto.",
  },
  {
    question: "¿Trabajan con equipos internos?",
    answer:
      "Sí, células mixtas y transferencia de conocimiento.",
  },
  {
    question: "¿Cómo miden el éxito?",
    answer:
      "KPIs definidos al inicio y revisados cada sprint.",
  },
  {
    question: "¿Tiempos de entrega?",
    answer: "Ciclos cortos; roadmap validado en Descubrimiento.",
  },
  {
    question: "¿Seguridad y cumplimiento?",
    answer: "Seguridad by-design y estándares reconocidos.",
  },
  {
    question: "¿Costos?",
    answer:
      "Propuestas transparentes; optimizamos TCO en cada fase.",
  },
];

export default function ServicioDetallePage({
  params,
}: {
  params: { slug: string };
}) {
  const service = services.find((item) => item.slug === params.slug);

  if (!service) {
    return notFound();
  }

  return (
    <>
      <Script
        id="jsonld-servicios"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="bg-slate-950 text-slate-100">
        <Hero
          title="Impulsamos tu negocio con tecnología que sí mueve la aguja"
          subtitle="Consultoría, ingeniería y productos digitales para lanzar más rápido, operar con confianza y crecer con datos."
          primaryCta={{ href: "#cta", label: "Habla con un experto" }}
          secondaryCta={{ href: "#casos", label: "Ver casos de éxito" }}
        />
        <section id="propuesta" className="mx-auto max-w-6xl px-4 py-16">
          <ValuePillars pillars={pillars} />
        </section>
        <section id="practicas" className="bg-slate-900/60">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <Practices practices={practices} />
          </div>
        </section>
        <section id="industrias" className="mx-auto max-w-6xl px-4 py-16">
          <Industries industries={industries} />
        </section>
        <section id="casos" className="bg-slate-900/60">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <CaseStudies caseStudies={caseStudies} />
          </div>
        </section>
        <section id="proceso" className="mx-auto max-w-6xl px-4 py-16">
          <Process steps={processSteps} />
        </section>
        <section id="diferenciales" className="bg-slate-900/60">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <Differentiators differentiators={differentiators} />
            <Badges badges={badges} />
          </div>
        </section>
        <section id="testimonios" className="mx-auto max-w-6xl px-4 py-16">
          <Testimonials testimonials={testimonials} />
        </section>
        <section id="faq" className="bg-slate-900/60">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <FAQ items={faqItems} />
          </div>
        </section>
        <section id="cta" className="mx-auto max-w-6xl px-4 py-16">
          <FinalCTAWithForm />
        </section>
      </main>
    </>
  );
}
