'use client';

import Link from 'next/link';
import Image from 'next/image';
import Lottie from '@/components/Lottie';
import styles from './FlipCardGridInline.module.css';

type Item = { slug: string; title: string; lottie?: string; png: string };

const items: Item[] = [
    { slug:'software',        title:'Software',        lottie:'/lottie/software.json',        png:'/services/software.png' },
    { slug:'automatizacion',  title:'Automatización',  lottie:'/lottie/automatizacion.json',  png:'/services/automatizacion.png' },
    { slug:'analytics',       title:'Analytics',       lottie:'/lottie/analytics.json',       png:'/services/analytics.png' },
    { slug:'bigdata',         title:'Big Data',        lottie:'/lottie/bigdata.json',         png:'/services/bigdata.png' },
    { slug:'ciberseguridad',  title:'Ciberseguridad',  lottie:'/lottie/ciberseguridad.json',  png:'/services/seguridad.png' },
    { slug: 'consultoria',     title: 'Consultoría', lottie: '/lottie/consultoria.json', png: '/services/consultoria.png' },
    { slug: 'mantenimiento',   title: 'Mantenimiento', lottie: '/lottie/hero-animation.json', png: '/services/mantenimiento.png' },
    { slug:'nube',            title:'Nube',            lottie:'/lottie/nube.json',           png:'/services/nube.png' },
    { slug:'transformacion',  title:'Transformación',  lottie:'/lottie/transformacion.json', png:'/services/transformacion.png' },
];

export default function FlipCardGridInline() {
    return (
        <div className={styles.wrap}>
            <div className={styles.grid}>
                {items.map((s, i) => {
                    const variant = i % 2 === 0 ? 'navy' : 'teal';
                    return (
                        <Link key={s.slug} href={`/Servicios/${s.slug}`} className={`${styles.card} ${styles[variant]}`}>
                            <div className={styles.media}>
                                {s.lottie ? (
                                    <Lottie src={s.lottie} className={styles.lottie} />
                                ) : (
                                    <Image src={s.png} alt={s.title} fill sizes="150px" className={styles.image} />
                                )}
                            </div>
                            <div className={styles.label}>{s.title}</div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
