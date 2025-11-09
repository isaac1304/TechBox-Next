"use client";

import { FormEvent, useState } from "react";

interface FormState {
  nombre: string;
  email: string;
  mensaje: string;
}

const initialState: FormState = {
  nombre: "",
  email: "",
  mensaje: "",
};

export function FinalCTAWithForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (state: FormState) => {
    const newErrors: Partial<FormState> = {};
    if (!state.nombre.trim()) {
      newErrors.nombre = "Por favor ingresa tu nombre.";
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!state.email.trim()) {
      newErrors.email = "El correo es obligatorio.";
    } else if (!emailPattern.test(state.email.trim())) {
      newErrors.email = "Ingresa un correo válido.";
    }
    if (!state.mensaje.trim()) {
      newErrors.mensaje = "Cuéntanos más sobre tu reto.";
    }
    return newErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(formState);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Formulario enviado", formState);
      setSubmitted(true);
      setFormState(initialState);
    }
  };

  return (
    <section id="contacto" className="bg-slate-900 py-16 text-white" aria-labelledby="cta-final">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8 lg:flex-row">
        <div className="flex-1 space-y-4">
          <h2 id="cta-final" className="text-3xl font-semibold sm:text-4xl">
            ¿Listos para construir lo que sigue?
          </h2>
          <p className="text-base text-slate-200">
            Cuéntanos tu reto y armamos un plan realista para mover métricas.
          </p>
          {submitted && (
            <p className="rounded-lg bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
              Gracias por escribirnos. Nos pondremos en contacto pronto.
            </p>
          )}
        </div>
        <form
          className="flex-1 space-y-4 rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur"
          onSubmit={handleSubmit}
          noValidate
        >
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-white">
              Nombre
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              value={formState.nombre}
              onChange={(event) =>
                setFormState((prev) => ({ ...prev, nombre: event.target.value }))
              }
              className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm text-white placeholder-white/50 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              aria-invalid={Boolean(errors.nombre)}
              aria-describedby={errors.nombre ? "error-nombre" : undefined}
              required
            />
            {errors.nombre && (
              <p id="error-nombre" className="mt-1 text-xs text-rose-200">
                {errors.nombre}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Correo electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formState.email}
              onChange={(event) =>
                setFormState((prev) => ({ ...prev, email: event.target.value }))
              }
              className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm text-white placeholder-white/50 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "error-email" : undefined}
              required
            />
            {errors.email && (
              <p id="error-email" className="mt-1 text-xs text-rose-200">
                {errors.email}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="mensaje" className="block text-sm font-medium text-white">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={4}
              value={formState.mensaje}
              onChange={(event) =>
                setFormState((prev) => ({ ...prev, mensaje: event.target.value }))
              }
              className="mt-1 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-sm text-white placeholder-white/50 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              aria-invalid={Boolean(errors.mensaje)}
              aria-describedby={errors.mensaje ? "error-mensaje" : undefined}
              required
            />
            {errors.mensaje && (
              <p id="error-mensaje" className="mt-1 text-xs text-rose-200">
                {errors.mensaje}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            Empezar conversación
          </button>
        </form>
      </div>
    </section>
  );
}
