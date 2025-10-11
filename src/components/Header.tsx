'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styles from './Header.module.css';
import ThemeToggle from '@/components/ThemeToggle';

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
            <div
                ref={barRef}
                className={`${styles.bar} ${scrolled ? styles.scrolled : ''} ${isSmall ? styles.barCompact : ''}`.trim()}
            >
                <Link href="/" className={`${styles.logoWrap} ${isSmall ? styles.logoWrapCompact : ''}`.trim()}>
                    <span className={`${styles.logoGlow} ${isSmall ? styles.logoGlowCompact : ''}`.trim()}>
                        <Image
                            src="/brand/techbox-logo.png"
                            alt="TechBox"
                            width={500}
                            height={272}
                            priority
                            className={`${styles.logoImage} ${isSmall ? styles.logoImageCompact : ''}`.trim()}
                        />
                    </span>
                </Link>

                <div className={`${styles.actions} ${isSmall ? styles.actionsCompact : ''}`.trim()}>
                    {!isSmall && (
                        <nav className={styles.nav}>
                            <Link href="/Servicios" className={styles.link}>Servicios</Link>
                            <Link href="/Blog" className={styles.link}>Blog</Link>
                            <Link href="/Contacto" className={styles.link}>Contacto</Link>
                        </nav>
                    )}
                    <ThemeToggle />
                    {isSmall && (
                        <button
                            aria-label="Abrir menú"
                            onClick={() => setOpen(true)}
                            className={styles.mobileMenuButton}
                        >
                            <svg width="22" height="22" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>

            {open && (
                <div className="fixed inset-0 z-[60]">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
                    <div className={styles.mobilePanel}>
                        <div className={styles.mobileHeader}>
                            <span className={styles.logoGlowSmall}>
                                <Image src="/brand/techbox-logo.png" alt="TechBox" width={180} height={40} className={styles.logoImageMobile} />
                            </span>
                            <button
                                aria-label="Cerrar menú"
                                onClick={() => setOpen(false)}
                                className={styles.mobileClose}
                            >
                                <svg width="18" height="18" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6l-12 12" />
                                </svg>
                            </button>
                        </div>
                        <nav className={styles.mobileNav}>
                            <Link href="/Servicios" className={styles.mobileLink} onClick={() => setOpen(false)}>Servicios</Link>
                            <Link href="/Blog" className={styles.mobileLink} onClick={() => setOpen(false)}>Blog</Link>
                            <Link href="/Contacto" className={styles.mobileLink} onClick={() => setOpen(false)}>Contacto</Link>
                        </nav>
                        <div className={styles.mobileToggleRow}>
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
