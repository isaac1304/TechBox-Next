"use client";

import { FormEvent, useState } from "react";

type FormState = {
  nombre: string;
  email: string;
  mensaje: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  nombre: "",
  email: "",
  mensaje: "",
};

export default function FinalCTAWithForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<string>("");

  const validate = (state: FormState): Errors => {
    const validationErrors: Errors = {};
    if (!state.nombre.trim()) {
      validationErrors.nombre = "El nombre es requerido.";
    }
    if (!state.email.trim()) {
      validationErrors.email = "El correo es requerido.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
      validationErrors.email = "Ingresa un correo válido.";
    }
    if (!state.mensaje.trim()) {
      validationErrors.mensaje = "El mensaje es requerido.";
    }
    return validationErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(formState);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Formulario Servicios", formState);
      setStatus("¡Gracias! Nuestro equipo te contactará pronto.");
      setFormState(initialState);
    } else {
      setStatus("");
    }
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-950 p-8 shadow-[0_18px_48px_rgba(8,13,32,0.65)]">
      <div className="mb-8 max-w-2xl space-y-4">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">
          ¿Listos para construir lo que sigue?
        </h2>
        <p className="text-base text-slate-300">
          Cuéntanos tu reto y armamos un plan realista para mover métricas.
        </p>
      </div>
      <form className="grid gap-6 md:grid-cols-2" onSubmit={handleSubmit} noValidate>
        <div className="flex flex-col gap-2">
          <label htmlFor="nombre" className="text-sm font-semibold text-slate-100">
            Nombre completo
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-300/60"
            value={formState.nombre}
            onChange={(event) =>
              setFormState((prev) => ({ ...prev, nombre: event.target.value }))
            }
            aria-invalid={Boolean(errors.nombre)}
            aria-describedby={errors.nombre ? "error-nombre" : undefined}
          />
          {errors.nombre && (
            <p id="error-nombre" className="text-xs text-red-400">
              {errors.nombre}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-semibold text-slate-100">
            Correo electrónico
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-300/60"
            value={formState.email}
            onChange={(event) =>
              setFormState((prev) => ({ ...prev, email: event.target.value }))
            }
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "error-email" : undefined}
          />
          {errors.email && (
            <p id="error-email" className="text-xs text-red-400">
              {errors.email}
            </p>
          )}
        </div>
        <div className="md:col-span-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="mensaje" className="text-sm font-semibold text-slate-100">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={5}
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-300/60"
              value={formState.mensaje}
              onChange={(event) =>
                setFormState((prev) => ({ ...prev, mensaje: event.target.value }))
              }
              aria-invalid={Boolean(errors.mensaje)}
              aria-describedby={errors.mensaje ? "error-mensaje" : undefined}
            />
            {errors.mensaje && (
              <p id="error-mensaje" className="text-xs text-red-400">
                {errors.mensaje}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-3 md:col-span-2 md:flex-row md:items-center md:justify-between">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-teal-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:bg-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-200"
          >
            Empezar conversación
          </button>
          {status && <span className="text-sm text-teal-200">{status}</span>}
        </div>
      </form>
    </div>
  );
}
