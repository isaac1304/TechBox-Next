import type { Metadata } from "next";
import Script from "next/script";

import { Badges } from "./components/Badges";
import { CaseStudies } from "./components/CaseStudies";
import { Differentiators } from "./components/Differentiators";
import { FAQ } from "./components/FAQ";
import { FinalCTAWithForm } from "./components/FinalCTAWithForm";
import { Hero } from "./components/Hero";
import { Industries } from "./components/Industries";
import { Practices } from "./components/Practices";
import { Process } from "./components/Process";
import { Testimonials } from "./components/Testimonials";
import { ValuePillars } from "./components/ValuePillars";

const description =
  "Consultoría, ingeniería y productos digitales de Techbox para lanzar más rápido, operar con confianza y crecer con datos accionables en Latinoamérica.";

export const metadata: Metadata = {
  title: "Servicios | Techbox",
  description,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Techbox",
  url: "https://techbox.cr/Servicios",
  areaServed: "Latin America",
  description,
  sameAs: [],
};

export default function ServiciosPage() {
  return (
    <main className="flex flex-col">
      <Script
        id="jsonld-professional-service"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero
        // videoSrc="/media/hero-techbox.mp4"           // NO incluir este archivo en el PR
        // posterSrc="/media/hero-techbox-poster.jpg"   // NO incluir este archivo en el PR
      />
      <ValuePillars />
      <Practices />
      <Industries />
      <CaseStudies />
      <Process />
      <Differentiators />
      <Badges />
      <Testimonials />
      <FAQ />
      <FinalCTAWithForm />
    </main>
  );
}
