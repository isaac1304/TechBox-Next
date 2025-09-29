"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

interface CalendlyDialogProps {
    open: boolean;
    onOpenChange: (v: boolean) => void;
    url: string;
    title?: string;
}

export default function CalendlyDialog({ open, onOpenChange, url, title }: CalendlyDialogProps) {
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [open]);

    if (typeof window === "undefined" || !open) return null;

    const domain = window.location.hostname || "localhost";
    const src = `${url}?embed_type=Inline&embed_domain=${domain}&hide_landing_page_details=1&hide_event_type_details=1&hide_gdpr_banner=1&primary_color=0f766e`;

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center" role="dialog" aria-modal="true" aria-label={title ?? "Calendly"}>
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => onOpenChange(false)} />
            <div className="relative z-10 h-[85vh] w-[95vw] max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900">
                <div className="flex items-center justify-between border-b border-slate-200 p-3 dark:border-slate-800">
                    <div className="text-sm font-semibold">{title ?? "Calendly"}</div>
                    <button onClick={() => onOpenChange(false)} className="rounded-md px-3 py-1 text-sm hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Cerrar">✕</button>
                </div>
                <iframe title="Calendly" src={src} className="h-[calc(85vh-44px)] min-h-[620px] w-full" frameBorder={0} />
            </div>
        </div>,
        document.body
    );
}
