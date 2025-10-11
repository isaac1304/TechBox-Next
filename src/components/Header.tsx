'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isSmall, setIsSmall] = useState(false);
    const barRef = useRef<HTMLDivElement|null>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        const onResize = () => setIsSmall(window.innerWidth < 1024);
        onScroll(); onResize();
        window.addEventListener('scroll', onScroll, { passive:true });
        window.addEventListener('resize', onResize);
        return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onResize); };
    }, []);

    // --- Ajuste global: header no tapa contenido ---
    useEffect(() => {
        const el = barRef.current;
        if (!el) return;
        const setH = () => {
            const h = el.getBoundingClientRect().height;
            document.documentElement.style.setProperty('--header-h', `${Math.ceil(h)}px`);
            document.body.classList.add('with-float-header');
        };
        setH();
        const ro = new ResizeObserver(setH);
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    return (
        <header className={isSmall ? styles.mobileTop : styles.wrapper}>
            <div ref={barRef} className={`${styles.bar} ${scrolled ? styles.scrolled : ''}`}>
                <Link href="/" className={styles.logoWrap}>
                    <span className={styles.logoGlow}>
                        <Image src="/brand/techbox-logo.png" alt="TechBox" width={500} height={272} priority className={styles.logoImage} />
                    </span>
                </Link>

                {!isSmall && (
                    <nav className={styles.nav}>
                        <Link href="/Servicios" className={styles.link}>Servicios</Link>
                        <Link href="/Blog" className={styles.link}>Blog</Link>
                        <Link href="/Contacto" className={styles.link}>Contacto</Link>
                    </nav>
                )}

                {isSmall && (
                    <button
                        aria-label="Abrir menú"
                        onClick={() => setOpen(true)}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-[var(--text-soft)] transition hover:border-white/30 hover:bg-white/10"
                    >
                        <svg width="22" height="22" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                )}
            </div>

            {open && (
                <div className="fixed inset-0 z-[60]">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
                    <div className="absolute right-0 top-0 h-full w-[82%] max-w-sm rounded-l-3xl border-l border-white/15 bg-[rgba(6,10,28,0.95)] p-5 shadow-[0_30px_60px_rgba(2,6,23,0.65)]">
                        <div className="flex items-center justify-between border-b border-white/12 pb-3">
                            <span className={styles.logoGlowSmall}>
                                <Image src="/brand/techbox-logo.png" alt="TechBox" width={180} height={40} className={styles.logoImageMobile} />
                            </span>
                            <button
                                aria-label="Cerrar menú"
                                onClick={() => setOpen(false)}
                                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-[var(--text-soft)] transition hover:border-white/30 hover:bg-white/10"
                            >
                                <svg width="18" height="18" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6l-12 12" />
                                </svg>
                            </button>
                        </div>
                        <nav className="mt-4 grid gap-3 text-[17px] leading-[1.35] text-[var(--text-soft)]">
                            <Link href="/Servicios" className="rounded-xl px-3 py-2 transition hover:bg-white/10 hover:text-white" onClick={() => setOpen(false)}>Servicios</Link>
                            <Link href="/Blog" className="rounded-xl px-3 py-2 transition hover:bg-white/10 hover:text-white" onClick={() => setOpen(false)}>Blog</Link>
                            <Link href="/Contacto" className="rounded-xl px-3 py-2 transition hover:bg-white/10 hover:text-white" onClick={() => setOpen(false)}>Contacto</Link>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}
