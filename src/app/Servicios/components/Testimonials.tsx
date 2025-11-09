const testimonials = [
  {
    quote: "“Techbox aceleró nuestro roadmap sin comprometer seguridad.”",
    author: "Carolina M., CIO",
  },
  {
    quote: "“Pasamos de idea a MVP en semanas, con métricas claras.”",
    author: "Jorge R., VP Producto",
  },
];

export function Testimonials() {
  return (
    <section className="bg-white py-16" aria-labelledby="testimonios">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl space-y-3">
          <h2 id="testimonios" className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Testimonios
          </h2>
          <p className="text-base text-slate-600">
            Historias de colaboración que demuestran impacto real en negocio.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.author}
              className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
            >
              <blockquote className="text-base text-slate-700">{testimonial.quote}</blockquote>
              <figcaption className="mt-6 text-sm font-semibold text-slate-900">{testimonial.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
