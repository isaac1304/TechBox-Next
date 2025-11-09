/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

interface HeroProps {
  videoSrc?: string;
  posterSrc?: string;
}

export function Hero({ videoSrc, posterSrc }: HeroProps) {
  const hasVideo = Boolean(videoSrc);
  const hasPoster = !hasVideo && Boolean(posterSrc);
  const baseClasses = "relative overflow-hidden text-white";
  const fallbackBackground = !hasVideo && !hasPoster ? " bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-700" : "";

  return (
    <section className={baseClasses + fallbackBackground}>
      {hasVideo && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster={posterSrc}
        >
          <source src={videoSrc} />
        </video>
      )}

      {hasPoster && (
        <img
          src={posterSrc}
          alt="Fondo representativo de servicios Techbox"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {(hasVideo || hasPoster) && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-blue-900/80 to-indigo-700/70" aria-hidden="true" />
      )}

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-3xl space-y-6">
          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-widest text-slate-100 backdrop-blur">
            Servicios Techbox
          </p>
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Impulsamos tu negocio con tecnología que sí mueve la aguja
          </h1>
          <p className="text-base text-slate-100 sm:text-lg">
            Consultoría, ingeniería y productos digitales para lanzar más rápido, operar con confianza y crecer con datos.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="#contacto"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            Habla con un experto
          </Link>
          <Link
            href="#casos"
            className="inline-flex items-center justify-center rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            Ver casos de éxito
          </Link>
        </div>
      </div>
    </section>
  );
}
