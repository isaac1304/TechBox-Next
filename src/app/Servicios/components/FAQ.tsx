"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Cómo empieza un proyecto?",
    answer: "Con un workshop de descubrimiento para alinear objetivos y priorizar impacto.",
  },
  {
    question: "¿Trabajan con equipos internos?",
    answer: "Sí, células mixtas y transferencia de conocimiento.",
  },
  {
    question: "¿Cómo miden el éxito?",
    answer: "KPIs definidos al inicio y revisados cada sprint.",
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
    answer: "Propuestas transparentes; optimizamos TCO en cada fase.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-16" aria-labelledby="faq-servicios">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl space-y-3">
          <h2 id="faq-servicios" className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            FAQ
          </h2>
          <p className="text-base text-slate-600">
            Respuestas claras para avanzar sin fricción.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <div key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <button
                  id={buttonId}
                  className="flex w-full items-center justify-between text-left text-base font-semibold text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  {faq.question}
                  <span aria-hidden="true" className="text-xl font-normal text-indigo-500">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`overflow-hidden transition-[max-height] duration-300 ${isOpen ? "max-h-40" : "max-h-0"}`}
                >
                  <p className="mt-3 text-sm text-slate-600">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
