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
            className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm
                 border-transparent bg-slate-100 hover:bg-slate-200
                 dark:bg-slate-800 dark:hover:bg-slate-700 transition"
            aria-label="Toggle dark mode"
        >
            {isDark ? <SunIcon size={16}/> : <MoonIcon size={16}/>}
            {isDark ? 'Light' : 'Dark'}
        </button>
    )
}
