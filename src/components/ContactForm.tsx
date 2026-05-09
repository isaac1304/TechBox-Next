'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Send, CheckCircle2, AlertCircle, MessageCircle } from 'lucide-react';
import { services } from '@/data/services';
import { site } from '@/lib/site';
import type { Locale } from '@/i18n/routing';
import { LinkButton } from './Button';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const t = useTranslations('ContactForm');
  const locale = useLocale() as Locale;

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
          {t('successTitle')}
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-[var(--text-muted)]">
          {t.rich('successBody', {
            email: () => (
              <span className="font-medium text-[var(--text)]">{site.email}</span>
            ),
          })}
        </p>
        <LinkButton href={site.whatsapp} external variant="whatsapp">
          <MessageCircle className="h-4 w-4" /> {site.whatsappLabel[locale]}
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
      {t('optional')}
    </span>
  );

  const submitting = status === 'submitting';

  return (
    <form onSubmit={handleSubmit} className="card flex flex-col gap-5 p-7">
      <fieldset disabled={submitting} className="contents">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="name">
              {t('labelName')}
            </label>
            <input id="name" name="name" required className={inputClass} placeholder={t('placeholderName')} />
          </div>
          <div>
            <label className={labelClass} htmlFor="email">
              {t('labelEmail')}
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className={inputClass}
              placeholder={t('placeholderEmail')}
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="company">
              {t('labelCompany')}
              {optionalLabel}
            </label>
            <input id="company" name="company" className={inputClass} placeholder={t('placeholderCompany')} />
          </div>
          <div>
            <label className={labelClass} htmlFor="phone">
              {t('labelPhone')}
              {optionalLabel}
            </label>
            <input id="phone" type="tel" name="phone" className={inputClass} placeholder={t('placeholderPhone')} />
          </div>
          <div className="md:col-span-2">
            <label className={labelClass} htmlFor="service">
              {t('labelService')}
              {optionalLabel}
            </label>
            <select id="service" name="service" className={inputClass} defaultValue="">
              <option value="" disabled>
                {t('selectService')}
              </option>
              {services.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.shortTitle[locale]}
                </option>
              ))}
              <option value="other">{t('serviceOther')}</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className={labelClass} htmlFor="message">
              {t('labelMessage')}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className={inputClass}
              placeholder={t('placeholderMessage')}
            />
          </div>
        </div>
      </fieldset>

      {status === 'error' && (
        <div className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-800 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-200">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>
            {t.rich('errorBody', {
              whatsappLink: () => (
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  {t('errorWhatsapp')}
                </a>
              ),
            })}
          </span>
        </div>
      )}

      <button type="submit" disabled={submitting} className="btn btn-primary self-start disabled:opacity-70">
        <Send className="h-4 w-4" /> {submitting ? t('submitting') : t('submit')}
      </button>
      <p className="text-xs text-[var(--text-soft)]">{t('privacy')}</p>
    </form>
  );
}
