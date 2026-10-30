import type { ReactNode } from 'react';

type Props = {
  eyebrow?: string;
  title: ReactNode;
  /** Usá 'h1' cuando este encabezado abre la página. */
  as?: 'h1' | 'h2';
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  as: Heading = 'h2',
  description,
  align = 'center',
  className = '',
}: Props) {
  const alignment =
    align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';
  return (
    <div className={`flex flex-col gap-4 ${alignment} max-w-3xl ${className}`.trim()}>
      {eyebrow && (
        <span className="inline-flex items-center rounded-full border border-[var(--border-strong)] bg-[var(--surface-muted)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]">
          {eyebrow}
        </span>
      )}
      <Heading className="text-3xl font-semibold leading-tight text-[var(--text)] md:text-[2.5rem]">
        {title}
      </Heading>
      {description && (
        <p className="text-base leading-relaxed text-[var(--text-muted)] md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
