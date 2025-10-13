"use client";
import Link from "next/link";

type Props = {
  title: string;
  desc: string;
  href: string;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export default function ServiceCard({ title, desc, href, Icon }: Props) {
  return (
    <Link
      href={href}
      className={[
        "group h-full min-h-[11rem] p-6 rounded-xl border shadow-sm",
        "bg-white text-slate-900 border-slate-200",
        "dark:bg-slate-900 dark:text-slate-100 dark:border-slate-700",
        "transition-colors duration-200",
        "hover:bg-[#0B1B2B] hover:text-[#F8FAFC] hover:border-[#0B1B2B]",
        "dark:hover:bg-[#F8FAFC] dark:hover:text-[#0B1B2B] dark:hover:border-[#F8FAFC]",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
      ].join(" ")}
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
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1"
              aria-hidden="true"
            >
              <path
                d="M5 12h14M13 5l7 7-7 7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>
    </Link>
  );
}
