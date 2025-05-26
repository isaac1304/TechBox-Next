export {}

declare global {
    interface CalendlyApi {
        initBadgeWidget: (config: {
            url: string
            text: string
        }) => void
    }

    interface Window {
        Calendly: CalendlyApi
    }
}