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
        "group h-full min-h-[10.5rem] max-h-[10.5rem] overflow-hidden",
        "p-6 rounded-xl border shadow-sm",
        "bg-white text-slate-900 border-slate-200",
        "dark:bg-slate-900 dark:text-slate-100 dark:border-slate-700",
        "transition-colors duration-200",
        "hover:bg-gradient-to-r hover:from-[#f4f4f4] hover:to-[#e0e0e0] hover:text-slate-900",
        "focus-visible:bg-gradient-to-r focus-visible:from-[#f4f4f4] focus-visible:to-[#e0e0e0] focus-visible:text-slate-900",
        "dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:hover:border-slate-600",
        "dark:focus-visible:bg-slate-800 dark:focus-visible:text-slate-100 dark:focus-visible:border-slate-600",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
      ].join(" ")}
      onClick={(e) => { if (to === "#") e.preventDefault(); }}
    >
      <div className="flex h-full flex-col justify-between">
        <div>
          <h3 className="text-base font-semibold leading-tight">{title}</h3>
          <p className="mt-2 text-sm opacity-90 line-clamp-2">{desc}</p>
        </div>
        <div className="mt-6 flex justify-end">
          {Icon ? (
            <Icon className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1" />
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1" aria-hidden="true">
              <path d="M5 12h14M13 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
      </div>
    </Link>
  );
}
