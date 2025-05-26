'use client';

import { useEffect } from 'react';

declare global {
    interface Window {
        Calendly: {
            initBadgeWidget: (options: {
                url: string;
                text: string;
                color: string;
                textColor: string;
            }) => void;
        };
    }
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
            if (window.Calendly) {
                window.Calendly.initBadgeWidget({
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