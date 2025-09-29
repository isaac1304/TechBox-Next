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
            className="fixed bottom-5 right-5 z-[10000] rounded-full bg-[#2EC4B6] px-5 py-3
                 font-extrabold text-[#0b1b2b] shadow-[0_14px_28px_rgba(46,196,182,.35)]
                 transition hover:-translate-y-[1px] hover:shadow-[0_18px_34px_rgba(46,196,182,.42)]
                 disabled:opacity-60"
            aria-label="Agenda una llamada"
        >
            Agenda una llamada
        </button>
    );
}
