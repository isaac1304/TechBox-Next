'use client';

import { useCallback, useEffect, useState } from 'react';

type CalendlyBadgeOpts = {
    url: string;
    text: string;
    color?: string;
    textColor?: string;
    branding?: boolean;
};

interface CalendlyAPI {
    initPopupWidget(opts: { url: string }): void;
    initBadgeWidget?(opts: CalendlyBadgeOpts): void;
    destroyBadgeWidget?(): void;
}

declare global {
    interface Window { Calendly?: CalendlyAPI }
}

export default function CalendlyBadge() {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        // inyecta script si falta
        const existing = document.querySelector<HTMLScriptElement>(
            'script[src*="assets.calendly.com/assets/external/widget.js"]'
        );
        if (existing) {
            if (window.Calendly) setReady(true);
            else existing.addEventListener('load', () => setReady(true), { once: true });
        } else {
            const s = document.createElement('script');
            s.src = 'https://assets.calendly.com/assets/external/widget.js';
            s.async = true;
            s.onload = () => setReady(true);
            document.body.appendChild(s);
        }
    }, []);

    const open = useCallback(() => {
        window.Calendly?.initPopupWidget({ url: 'https://calendly.com/isaacxdd/30min' });
    }, []);

    return (
        <button
            type="button"
            disabled={!ready}
            onClick={open}
            className="calendly-fab group fixed bottom-6 right-6 z-[10000] inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--accent-ice)] via-[#6ff3ff] to-[var(--accent-teal)] px-5 py-3 text-sm font-semibold text-[#041520] shadow-[0_22px_52px_rgba(64,194,255,0.42)] transition-all duration-300 ease-out hover:shadow-[0_26px_60px_rgba(64,194,255,0.52)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-ice)] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgba(8,14,36,0.85)] disabled:cursor-not-allowed disabled:opacity-60"
            aria-label="Agenda una llamada"
        >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/80 text-[#03121e] shadow-[0_4px_10px_rgba(3,17,26,0.18)]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </span>
            <span className="font-semibold tracking-wide">Agenda una llamada</span>
        </button>
    );
}
