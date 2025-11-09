/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

type HeroProps = {
  title: string;
  subtitle: string;
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
  videoSrc?: string;
  posterSrc?: string;
};

export default function Hero({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  videoSrc,
  posterSrc,
}: HeroProps) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {videoSrc ? (
          <video
            className="h-full w-full object-cover"
            src={videoSrc}
            poster={posterSrc}
            autoPlay
            loop
            muted
            playsInline
            aria-label="Video de servicios Techbox"
          />
        ) : posterSrc ? (
          <img
            src={posterSrc}
            alt="Servicios de Techbox"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-slate-950 via-slate-900 to-blue-900" />
        )}
        <div className="absolute inset-0 bg-slate-950/60" />
      </div>
      <div className="mx-auto flex min-h-[460px] max-w-6xl flex-col justify-center gap-6 px-4 py-24 text-white">
        <div className="max-w-2xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-teal-200">
            Servicios Techbox
          </p>
          <h1 className="text-3xl font-bold leading-tight sm:text-5xl" aria-label={title}>
            {title}
          </h1>
          <p className="text-lg text-slate-100/90 sm:text-xl">{subtitle}</p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href={primaryCta.href}
            className="rounded-full bg-teal-400 px-6 py-3 text-center text-sm font-semibold text-slate-950 shadow-lg transition hover:bg-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-200"
          >
            {primaryCta.label}
          </Link>
          <Link
            href={secondaryCta.href}
            className="rounded-full border border-white/40 px-6 py-3 text-center text-sm font-semibold text-white transition hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {secondaryCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
