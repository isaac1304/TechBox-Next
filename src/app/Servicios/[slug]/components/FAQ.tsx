"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  items: FAQItem[];
};

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-10">
      <header className="max-w-2xl space-y-3">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Preguntas frecuentes</h2>
        <p className="text-base text-slate-300">
          Transparencia desde el inicio: esto es lo que más nos consultan los equipos de producto y tecnología.
        </p>
      </header>
      <div className="space-y-4">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-200"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
              >
                <span>{item.question}</span>
                <span aria-hidden="true" className="text-xl">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              <div
                id={`faq-panel-${index}`}
                role="region"
                aria-hidden={!isOpen}
                className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              >
                <div className="overflow-hidden px-6 pb-6 text-sm text-slate-200">
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
