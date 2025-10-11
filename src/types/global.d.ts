export {}

declare global {
    interface CalendlyApi {
        initPopupWidget?: (config: { url: string }) => void
        initBadgeWidget?: (config: {
            url: string
            text: string
            color?: string
            textColor?: string
            branding?: boolean
        }) => void
        destroyBadgeWidget?: () => void
    }

    interface Window {
        Calendly?: CalendlyApi
    }
}
