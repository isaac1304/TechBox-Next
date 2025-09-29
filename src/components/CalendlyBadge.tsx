'use client';

import { useEffect } from 'react';

declare global { interface Window { Calendly?: any } }

export default function CalendlyBadge() {
    useEffect(() => {
        // CSS del badge
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://assets.calendly.com/assets/external/widget.css';
        document.head.appendChild(link);

        // Script del badge
        const s = document.createElement('script');
        s.src = 'https://assets.calendly.com/assets/external/widget.js';
        s.async = true;
        s.onload = () => {
            window.Calendly?.initBadgeWidget?.({
                url: 'https://calendly.com/isaacxdd/30min',
                text: 'Agenda una llamada',
                color: '#2EC4B6',
                textColor: '#0b0f24',
                branding: false,
            });
        };
        document.head.appendChild(s);

        return () => {
            try { window.Calendly?.destroyBadgeWidget?.(); } catch {}
            s.remove();
            link.remove();
        };
    }, []);

    return null;
}
