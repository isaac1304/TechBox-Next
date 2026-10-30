import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import SectionHeading from '@/components/SectionHeading';

const certifications = [
  { label: 'Certified Kubernetes Administrator (CKA)', image: '/badges/cka.png' },
  { label: 'Istio Certified Associate (ICA)', image: '/badges/istio-ica.png' },
  { label: 'HashiCorp Terraform Associate', image: '/badges/terraform-associate.png' },
];

// TODO(Isaac): confirmar si se mencionan los nombres de empresas anteriores.
// TODO(Isaac): confirmar nombre completo y foto del fundador.
export default function FounderSection() {
  const t = useTranslations('Founder');
  const facts = [t('fact1'), t('fact2'), t('fact3')];

  return (
    <section className="relative border-y border-[var(--border)] bg-[var(--surface-muted)]/60 py-20">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 lg:grid-cols-2 lg:px-6">
        <div className="flex flex-col gap-6">
          <SectionHeading
            align="left"
            eyebrow={t('eyebrow')}
            title={t('title')}
            description={t('quote')}
          />
          <ul className="flex flex-col gap-2.5">
            {facts.map((fact) => (
              <li key={fact} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-teal)]" />
                {fact}
              </li>
            ))}
          </ul>
        </div>
        <ul className="grid gap-4 sm:grid-cols-3">
          {certifications.map((cert) => (
            <li key={cert.label} className="card flex flex-col items-center gap-3 p-5 text-center">
              <div className="relative h-24 w-24">
                <Image
                  src={cert.image}
                  alt={cert.label}
                  fill
                  sizes="96px"
                  className="object-contain"
                />
              </div>
              <p className="text-xs font-semibold text-[var(--text)]">{cert.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
