"use client";

import Link from "next/link";
import type { ComponentType, SVGProps, MouseEvent } from "react";

type Props = {
  id: string;
  title: string;
  desc: string;
  href?: string;
  Icon?: ComponentType<SVGProps<SVGSVGElement>>;
};

export default function ServiceCard({ id, title, desc, href, Icon }: Props) {
  const to = href ?? `#${id}`;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if ((href ?? `#${id}`) === "#") {
      event.preventDefault();
    }
  };

  return (
    <Link
      id={id}
      href={to}
      className={[
        "group h-full min-h-[10.5rem] max-h-[10.5rem] overflow-hidden p-6 rounded-xl border shadow-sm transition-colors duration-200",
        "bg-white text-slate-900 border-slate-200",
        "dark:bg-slate-900 dark:text-slate-100 dark:border-slate-700",
        "hover:bg-gradient-to-b hover:from-[#E7EFFD] hover:via-[#D0CFEF] hover:to-[#D8E5FD] hover:text-[#0B1B2B] hover:border-transparent",
        "focus-visible:bg-gradient-to-b focus-visible:from-[#3351FC] focus-visible:to-[#1F7177] focus-visible:text-[#F8FAFC] focus-visible:border-transparent",
        "dark:hover:bg-gradient-to-b dark:hover:from-[#3351FC] dark:hover:to-[#1F7177] dark:hover:text-[#F8FAFC] dark:hover:border-transparent",
        "dark:focus-visible:bg-gradient-to-b dark:focus-visible:from-[#E7EFFD] dark:focus-visible:via-[#D0CFEF] dark:focus-visible:to-[#D8E5FD] dark:focus-visible:text-[#0B1B2B] dark:focus-visible:border-transparent",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current",
      ].join(" ")}
      onClick={handleClick}
    >
      <div className="flex h-full flex-col justify-between">
        <div>
          <h3 className="text-base font-semibold leading-tight">{title}</h3>
          <p className="mt-2 text-sm opacity-90 line-clamp-3">{desc}</p>
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
