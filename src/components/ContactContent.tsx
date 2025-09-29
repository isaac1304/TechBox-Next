"use client";

import { useState } from "react";
import CalendlyDialog from "@/components/CalendlyDialog";

export default function ContactContent() {
    const [open, setOpen] = useState(false);

    return (
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <form className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <label className="text-sm text-slate-600 dark:text-slate-300">Nombre</label>
                        <input className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-950" />
                    </div>
                    <div>
                        <label className="text-sm text-slate-600 dark:text-slate-300">Email</label>
                        <input type="email" className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-950" />
                    </div>
                    <div className="md:col-span-2">
                        <label className="text-sm text-slate-600 dark:text-slate-300">Mensaje</label>
                        <textarea rows={5} className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-950" />
                    </div>
                </div>
                <button type="button" className="mt-4 rounded-lg bg-slate-900 px-4 py-2 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900">
                    Enviar
                </button>
            </form>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
                <h2 className="text-xl font-semibold">Agendar reunión</h2>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                    Reserva una llamada de 30 minutos con nuestro equipo.
                </p>
                <button
                    onClick={() => setOpen(true)}
                    className="mt-4 rounded-lg bg-teal-600 px-4 py-2 text-white shadow hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                    Abrir Calendly
                </button>
            </div>

            <CalendlyDialog
                open={open}
                onOpenChange={setOpen}
                url="https://calendly.com/isaacgranados/30min"
                title="Agenda con Techbox"
                clean
            />
        </div>
    );
}
