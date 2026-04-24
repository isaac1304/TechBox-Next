'use client';

import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { services } from '@/data/services';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Placeholder: no backend wired. Replace with fetch to your endpoint.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card flex flex-col items-center gap-4 p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-[var(--brand-teal)]" />
        <h3 className="text-xl font-semibold text-[var(--text)]">
          ¡Gracias por escribirnos!
        </h3>
        <p className="text-sm leading-relaxed text-[var(--text-muted)]">
          Recibimos tu mensaje. Te contactaremos en 1 a 2 días hábiles.
        </p>
      </div>
    );
  }

  const inputClass =
    'w-full rounded-xl border border-[var(--border-strong)] bg-[var(--surface-muted)] px-4 py-2.5 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-soft)] focus:border-[var(--brand-teal)] focus:ring-2 focus:ring-[var(--ring)]';
  const labelClass =
    'mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]';

  return (
    <form onSubmit={handleSubmit} className="card flex flex-col gap-5 p-7">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Nombre
          </label>
          <input id="name" name="name" required className={inputClass} placeholder="Tu nombre" />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Correo
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className={inputClass}
            placeholder="tu@empresa.com"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="company">
            Empresa
          </label>
          <input id="company" name="company" className={inputClass} placeholder="Nombre de tu empresa" />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Teléfono
          </label>
          <input id="phone" type="tel" name="phone" className={inputClass} placeholder="+506 ..." />
        </div>
        <div className="md:col-span-2">
          <label className={labelClass} htmlFor="service">
            Servicio de interés
          </label>
          <select id="service" name="service" className={inputClass} defaultValue="">
            <option value="" disabled>
              Selecciona un servicio…
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.shortTitle}
              </option>
            ))}
            <option value="otro">Otro / no estoy seguro</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className={labelClass} htmlFor="message">
            Cuéntanos tu caso
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className={inputClass}
            placeholder="¿Qué quieres resolver o mejorar?"
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary self-start">
        <Send className="h-4 w-4" /> Enviar mensaje
      </button>
      <p className="text-xs text-[var(--text-soft)]">
        Al enviar, aceptas que usemos tu información únicamente para contactarte sobre este mensaje.
      </p>
    </form>
  );
}
