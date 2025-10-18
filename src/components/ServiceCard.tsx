"use client";
import Link from "next/link";

type Props = {
  id: string;          // ancla interna (ej: "agentes")
  title: string;
  desc: string;
  href?: string;       // default: `#${id}`
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export default function ServiceCard({ id, title, desc, href, Icon }: Props) {
  const to = href ?? `#${id}`;
  return (
    <Link
      id={id}
      href={to}
      className={[
        "service-card group overflow-hidden",
        "ibmish-hover bg-white text-slate-900",
        "rounded-2xl border border-slate-200 shadow-sm transition-colors duration-200",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
      ].join(" ")}
      onClick={(e) => {
        if (to === "#") e.preventDefault();
      }}
    >
      <span className="card-illust inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-900 transition-colors duration-200 group-hover:text-[var(--card-text)] group-focus-visible:text-[var(--card-text)] dark:bg-white/10 dark:text-white">
        {Icon ? <Icon className="h-6 w-6" aria-hidden="true" /> : <span className="h-3 w-3 rounded-full bg-[var(--accent-ice)]" />}
      </span>

      <div className="flex w-full flex-col items-center text-center">
        <h3 className="card-title text-base font-semibold leading-tight transition-colors duration-200 group-hover:text-[var(--card-text)] group-focus-visible:text-[var(--card-text)]">{title}</h3>
        <p className="card-desc mt-2 text-sm text-slate-600 transition-colors duration-200 line-clamp-3 group-hover:text-[var(--card-text)] group-focus-visible:text-[var(--card-text)]">{desc}</p>
      </div>

      <div className="card-cta flex w-full items-center justify-end text-slate-500 transition-colors duration-200 group-hover:text-[var(--card-text)] group-focus-visible:text-[var(--card-text)]">
        {Icon ? (
          <Icon className="card-cta-icon h-5 w-5 transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1" />
        ) : (
          <svg
            viewBox="0 0 24 24"
            className="card-cta-icon h-5 w-5 transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
    </Link>
  );
}
