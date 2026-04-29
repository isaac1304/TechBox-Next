'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, MessageCircle } from 'lucide-react';
import { services } from '@/data/services';
import { site } from '@/lib/site';
import { LinkButton } from './Button';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Placeholder: no backend wired. Replace with fetch to your endpoint.
      await new Promise((r) => setTimeout(r, 800));
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="card flex flex-col items-center gap-4 p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-[var(--brand-teal)]" />
        <h3 className="text-xl font-semibold text-[var(--text)]">
          Mensaje recibido
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-[var(--text-muted)]">
          Te respondemos en 1–2 días hábiles desde{' '}
          <span className="font-medium text-[var(--text)]">{site.email}</span>.
          Si es urgente, escríbenos por WhatsApp.
        </p>
        <LinkButton href={site.whatsapp} external variant="whatsapp">
          <MessageCircle className="h-4 w-4" /> {site.whatsappLabel}
        </LinkButton>
      </div>
    );
  }

  const inputClass =
    'w-full rounded-xl border border-[var(--border-strong)] bg-[var(--surface-muted)] px-4 py-2.5 text-sm text-[var(--text)] outline-none transition placeholder:text-[var(--text-soft)] focus:border-[var(--brand-teal)] focus:ring-2 focus:ring-[var(--ring)] disabled:opacity-60';
  const labelClass =
    'mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)]';
  const optionalLabel = (
    <span className="ml-1 text-[10px] font-normal normal-case tracking-normal text-[var(--text-soft)]">
      (opcional)
    </span>
  );

  const submitting = status === 'submitting';

  return (
    <form onSubmit={handleSubmit} className="card flex flex-col gap-5 p-7">
      <fieldset disabled={submitting} className="contents">
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
              Empresa{optionalLabel}
            </label>
            <input id="company" name="company" className={inputClass} placeholder="Nombre de tu empresa" />
          </div>
          <div>
            <label className={labelClass} htmlFor="phone">
              Teléfono{optionalLabel}
            </label>
            <input id="phone" type="tel" name="phone" className={inputClass} placeholder="+506 8888 8888" />
          </div>
          <div className="md:col-span-2">
            <label className={labelClass} htmlFor="service">
              Servicio de interés{optionalLabel}
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
              ¿Qué quieres resolver?
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className={inputClass}
              placeholder="Ej.: queremos automatizar el seguimiento post-venta. Hoy lo hacemos en Excel y se nos olvidan clientes."
            />
          </div>
        </div>
      </fieldset>

      {status === 'error' && (
        <div className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-800 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-200">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>
            No pudimos enviar el mensaje. Vuelve a intentarlo o{' '}
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="underline">
              escríbenos por WhatsApp
            </a>
            .
          </span>
        </div>
      )}

      <button type="submit" disabled={submitting} className="btn btn-primary self-start disabled:opacity-70">
        <Send className="h-4 w-4" /> {submitting ? 'Enviando…' : 'Enviar mensaje'}
      </button>
      <p className="text-xs text-[var(--text-soft)]">
        Solo usamos estos datos para responderte. No te vamos a meter en una lista de mailing.
      </p>
    </form>
  );
}
