'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, CalendarCheck } from 'lucide-react';
import { site } from '@/lib/site';
import ThemeToggle from './ThemeToggle';
import { LinkButton } from './Button';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const setH = () => {
      const h = el.getBoundingClientRect().height;
      document.documentElement.style.setProperty('--header-h', `${Math.ceil(h + 24)}px`);
    };
    setH();
    const ro = new ResizeObserver(setH);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.body.dataset.mobileMenuOpen = 'true';
    return () => {
      document.body.style.overflow = prev;
      delete document.body.dataset.mobileMenuOpen;
    };
  }, [open]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 md:px-6 md:pt-5">
      <div
        ref={barRef}
        className={[
          'mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl border px-4 py-3 transition-all md:px-5',
          scrolled
            ? 'border-[var(--border-strong)] bg-[var(--surface)]/85 shadow-[0_14px_40px_-18px_rgba(17,24,61,0.35)] backdrop-blur-lg'
            : 'border-[var(--border)] bg-[var(--surface)]/70 backdrop-blur-md',
        ].join(' ')}
      >
        <Link href="/" aria-label="TechBox — Inicio" className="flex items-center gap-3">
          <Image
            src="/brand/techbox-mark.png"
            alt="TechBox"
            width={80}
            height={80}
            priority
            className="h-14 w-14 rounded-xl object-contain md:h-16 md:w-16"
          />
          <span className="hidden text-2xl font-semibold tracking-tight text-[var(--text)] sm:block md:text-[1.7rem]">
            Tech<span className="text-[var(--brand-teal)]">Box</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={[
                'rounded-full px-3.5 py-2 text-sm font-medium transition',
                isActive(item.href)
                  ? 'bg-[var(--gradient-brand-soft)] text-[var(--brand-navy)] dark:text-[var(--brand-teal)]'
                  : 'text-[var(--text-muted)] hover:bg-[var(--surface-muted)] hover:text-[var(--text)]',
              ].join(' ')}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden lg:block">
            <ThemeToggle />
          </div>
          <LinkButton
            href={site.calendly}
            external
            variant="primary"
            className="hidden md:inline-flex"
          >
            <CalendarCheck className="h-4 w-4" /> Agendar diagnóstico
          </LinkButton>
          <button
            type="button"
            aria-label="Abrir menú"
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--surface-muted)] text-[var(--text)] lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menú principal"
          className="fixed inset-0 z-50 lg:hidden"
        >
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          <div className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col gap-6 overflow-y-auto border-l border-[var(--border-strong)] bg-[var(--surface)] px-6 py-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
                <Image
                  src="/brand/techbox-mark.png"
                  alt="TechBox"
                  width={72}
                  height={72}
                  className="h-14 w-14 rounded-xl object-contain"
                />
                <span className="text-2xl font-semibold text-[var(--text)]">
                  Tech<span className="text-[var(--brand-teal)]">Box</span>
                </span>
              </Link>
              <button
                type="button"
                aria-label="Cerrar menú"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--surface-muted)] text-[var(--text)]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-1">
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={[
                    'rounded-xl px-4 py-3 text-base font-medium transition',
                    isActive(item.href)
                      ? 'bg-[var(--gradient-brand-soft)] text-[var(--brand-navy)] dark:text-[var(--brand-teal)]'
                      : 'text-[var(--text-muted)] hover:bg-[var(--surface-muted)] hover:text-[var(--text)]',
                  ].join(' ')}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-3">
              <LinkButton href={site.calendly} external variant="primary">
                <CalendarCheck className="h-4 w-4" /> Agendar diagnóstico
              </LinkButton>
              <LinkButton href={site.whatsapp} external variant="whatsapp">
                Escribir por WhatsApp
              </LinkButton>
              <div className="flex items-center justify-between border-t border-[var(--border)] pt-4">
                <span className="text-xs text-[var(--text-soft)]">Tema</span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
