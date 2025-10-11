'use client';

import { useEffect, useRef } from 'react';

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
    interface Window {
        Calendly?: CalendlyAPI;
    }
}

const SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js';
const STYLE_HREF = 'https://assets.calendly.com/assets/external/widget.css';

export default function CalendlyBadge() {
    const initializedRef = useRef(false);

    useEffect(() => {
        let cancelled = false;
        let scriptEl: HTMLScriptElement | null = null;
        let loadHandler: (() => void) | null = null;
        let targetScript: HTMLScriptElement | null = null;

        const ensureStyles = () => {
            const existingStyles = document.querySelector<HTMLLinkElement>(`link[href="${STYLE_HREF}"]`);
            if (!existingStyles) {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = STYLE_HREF;
                document.head.appendChild(link);
            }
        };

        const initBadge = () => {
            if (cancelled || initializedRef.current) return;
            if (window.Calendly?.initBadgeWidget) {
                ensureStyles();
                window.Calendly.initBadgeWidget({
                    url: 'https://calendly.com/isaacxdd/30min',
                    text: 'Agenda una llamada',
                    color: '#0069ff',
                    textColor: '#ffffff',
                    branding: true,
                });
                initializedRef.current = true;
            }
        };

        const existingScript = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
        if (existingScript) {
            targetScript = existingScript;
            if (window.Calendly) initBadge();
            else {
                loadHandler = initBadge;
                existingScript.addEventListener('load', loadHandler, { once: true });
            }
        } else {
            scriptEl = document.createElement('script');
            scriptEl.src = SCRIPT_SRC;
            scriptEl.async = true;
            scriptEl.onload = initBadge;
            document.body.appendChild(scriptEl);
            targetScript = scriptEl;
        }

        return () => {
            cancelled = true;
            if (targetScript && loadHandler) {
                targetScript.removeEventListener('load', loadHandler);
            }
            if (scriptEl) scriptEl.onload = null;
            window.Calendly?.destroyBadgeWidget?.();
            initializedRef.current = false;
        };
    }, []);

    return null;
}
