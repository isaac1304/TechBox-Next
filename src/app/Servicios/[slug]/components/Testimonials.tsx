type Testimonial = {
  quote: string;
  author: string;
};

type TestimonialsProps = {
  testimonials: Testimonial[];
};

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <div className="space-y-10">
      <header className="max-w-2xl space-y-3">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">
          Testimonios
        </h2>
        <p className="text-base text-slate-300">
          Historias reales de equipos que hoy lanzan más rápido y con mayor visibilidad del impacto.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.author}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_12px_30px_rgba(8,13,32,0.45)]"
          >
            <blockquote className="text-sm text-slate-200">
              “{testimonial.quote}”
            </blockquote>
            <figcaption className="mt-4 text-sm font-semibold text-teal-200">
              {testimonial.author}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
