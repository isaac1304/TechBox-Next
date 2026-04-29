import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone } from 'lucide-react';
import { site } from '@/lib/site';
import { services } from '@/data/services';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--border)] bg-[var(--surface-muted)]/60">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div className="flex flex-col gap-4 md:col-span-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/brand/techbox-mark.png"
              alt="TechBox"
              width={40}
              height={40}
              className="h-10 w-10 rounded-md object-contain"
            />
            <span className="text-lg font-semibold text-[var(--text)]">
              Tech<span className="text-[var(--brand-teal)]">Box</span>
            </span>
          </Link>
          <p className="max-w-md text-sm leading-relaxed text-[var(--text-muted)]">
            Tecnología práctica para pymes. Costa Rica y LatAm.
          </p>
          <ul className="flex flex-col gap-2 text-sm text-[var(--text-muted)]">
            <li className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[var(--brand-teal)]" /> {site.location}
            </li>
            <li className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4 text-[var(--brand-teal)]" />
              <a href={`mailto:${site.email}`} className="hover:text-[var(--text)]">
                {site.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4 text-[var(--brand-teal)]" /> {site.phone}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text)]">
            Servicios
          </h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-[var(--text-muted)]">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/servicios/${s.slug}`} className="hover:text-[var(--brand-teal)]">
                  {s.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text)]">
            Empresa
          </h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-[var(--text-muted)]">
            <li><Link href="/nosotros" className="hover:text-[var(--brand-teal)]">Nosotros</Link></li>
            <li><Link href="/casos-de-uso" className="hover:text-[var(--brand-teal)]">Casos de uso</Link></li>
            <li><Link href="/blog" className="hover:text-[var(--brand-teal)]">Blog</Link></li>
            <li><Link href="/contacto" className="hover:text-[var(--brand-teal)]">Contacto</Link></li>
            <li>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--brand-teal)]">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--border)]">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-3 px-4 py-5 text-xs text-[var(--text-soft)] md:flex-row md:items-center md:px-6">
          <p>© {new Date().getFullYear()} TechBox S.R.L. — {site.domain}</p>
          <p>Hecho en Costa Rica.</p>
        </div>
      </div>
    </footer>
  );
}
