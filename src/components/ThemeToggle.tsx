'use client'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
// eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { theme, setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])
    if (!mounted) return null

    const isDark = resolvedTheme === 'dark'
    return (
        <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="inline-flex items-center gap-2 rounded-full border border-slate-300/70 bg-white/90 px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-white dark:border-white/15 dark:bg-slate-900/70 dark:text-slate-100 dark:shadow-[0_10px_30px_rgba(8,18,48,0.45)]"
            aria-label="Cambiar tema"
        >
            {isDark ? <SunIcon size={16} /> : <MoonIcon size={16} />}
            <span className="hidden sm:inline-block">{isDark ? 'Claro' : 'Oscuro'}</span>
        </button>
    )
}
