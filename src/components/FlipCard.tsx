'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './FlipCard.module.css';

export type FlipCardProps = {
    title: string;
    text?: string;
    iconPng?: string;
    lottieSrc?: string;
    href: string;
    square?: boolean;
    variant?: 'navy' | 'teal';
};

export default function FlipCard({
                                     title,
                                     text,
                                     iconPng,
                                     lottieSrc,
                                     href,
                                     square = true,
                                     variant = 'navy',
                                 }: FlipCardProps) {
    return (
        <article className={`${styles.card} ${square ? styles.square : ''} ${styles[variant]}`}>
            <div className={styles.inner}>
                <div className={styles.front}>
                    <div className={styles.media}>
                        {lottieSrc ? (
                            // @ts-expect-error
                            <lottie-player autoplay loop mode="normal" src={lottieSrc} style={{ width: '100%', height: '100%' }} />
                        ) : (
                            iconPng && (
                                <Image
                                    src={iconPng}
                                    alt={title}
                                    fill
                                    sizes="(max-width: 768px) 40vw, 240px"
                                    className={styles.imgContain}
                                    priority
                                />
                            )
                        )}
                    </div>
                    <h3 className={styles.title}>{title}</h3>
                </div>

                <div className={styles.back}>
                    {text && <p className={styles.text}>{text}</p>}
                    <Link className={styles.cta} href={href}>
                        Ver más →
                    </Link>
                </div>
            </div>
        </article>
    );
}
