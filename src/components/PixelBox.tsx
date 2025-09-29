// src/components/PixelBox.tsx
'use client';

import { useEffect, useRef } from 'react';
import styles from './PixelBox.module.css';

export default function PixelBox() {
    const layerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const layer = layerRef.current;
        if (!layer) return;

        const SIZE = 9, GAP = 4, UNIT = SIZE + GAP;
        const COLS = 18, ROWS = 10; // “cuadro” horizontal

        const targets = () => {
            const rect = layer.getBoundingClientRect();
            const totalW = COLS * UNIT;
            const totalH = ROWS * UNIT;
            const ox = rect.width / 2 - totalW / 2;
            const oy = rect.height / 2 - totalH / 2;
            const arr: Array<{x:number;y:number}> = [];
            for (let r=0; r<ROWS; r++){
                for (let c=0; c<COLS; c++){
                    arr.push({ x: ox + c*UNIT, y: oy + r*UNIT });
                }
            }
            return arr;
        };

        let T = targets();
        let W = layer.clientWidth;
        let H = layer.clientHeight;

        const nodes: HTMLDivElement[] = T.map(() => {
            const d = document.createElement('div');
            d.className = styles.px;
            d.style.left = Math.random() * W + 'px';
            d.style.top  = Math.random() * H + 'px';
            layer.appendChild(d);
            return d;
        });

        const tick = () => {
            T = targets();
            nodes.forEach((n, i) => {
                n.style.left = T[i].x + 'px';
                n.style.top  = T[i].y + 'px';
                n.style.opacity = '0.95';
                n.style.transform = 'rotate(0deg)';
            });
        };

        const t1 = setTimeout(tick, 300);
        const onResize = () => { T = targets(); };
        window.addEventListener('resize', onResize);

        return () => {
            clearTimeout(t1);
            window.removeEventListener('resize', onResize);
            layer.querySelectorAll('.' + styles.px).forEach(n => n.remove());
        };
    }, []);

    return (
        <div className={styles.box}>
            <div ref={layerRef} className={styles.layer} />
        </div>
    );
}
