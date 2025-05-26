'use client';

import { useEffect } from 'react';

interface CalendlyApi {
    initBadgeWidget: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
    }) => void;
}

export default function CalendlyBadge() {
    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://assets.calendly.com/assets/external/widget.css';
        link.rel = 'stylesheet';
        document.head.appendChild(link);

        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        script.onload = () => {
            const calendly = (window as unknown as { Calendly?: CalendlyApi }).Calendly;
            if (calendly) {
                calendly.initBadgeWidget({
                    url: 'https://calendly.com/isaacxdd/30min',
                    text: 'Agendá tu cita',
                    color: '#0069ff',
                    textColor: '#ffffff',
                });
            }
        };
        document.body.appendChild(script);
    }, []);

    return null;
}