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
        "bg-[#F3F8FF] text-[#0B1B2B] border-[#C5D9F6]",
        "dark:bg-[#0B1B2B] dark:text-[#F3F8FF] dark:border-[#1C2F45]",
        "transition-colors duration-200",
        "hover:bg-[#0E2236] hover:text-[#F8FAFC] hover:border-[#0E2236]",
        "focus-visible:bg-[#0E2236] focus-visible:text-[#F8FAFC] focus-visible:border-[#0E2236]",
        "dark:hover:bg-[#F3F8FF] dark:hover:text-[#0B1B2B] dark:hover:border-[#F3F8FF]",
        "dark:focus-visible:bg-[#F3F8FF] dark:focus-visible:text-[#0B1B2B] dark:focus-visible:border-[#F3F8FF]",
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
