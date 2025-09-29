'use client';

import { useEffect, useRef } from 'react';
import styles from './HeroBackdrop.module.css';

export default function HeroBackdrop() {
    const layerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const layer = layerRef.current;
        if (!layer) return;

        const SIZE = 10, GAP = 4, UNIT = SIZE + GAP;
        const GRID = 18;

        const makeTargets = () => {
            const rect = layer.getBoundingClientRect();
            const side = Math.min(rect.width, rect.height);
            const cols = GRID;
            const rows = GRID;
            const ox = rect.width / 2 - (cols * UNIT) / 2;
            const oy = rect.height / 2 - (rows * UNIT) / 2;
            const arr: Array<{x:number;y:number}> = [];
            for (let r=0; r<rows; r++){
                for (let c=0; c<cols; c++){
                    arr.push({ x: ox + c*UNIT, y: oy + r*UNIT });
                }
            }
            return arr;
        };

        let targets = makeTargets();
        let W = layer.clientWidth;
        let H = layer.clientHeight;

        const nodes: HTMLDivElement[] = targets.map(() => {
            const d = document.createElement('div');
            d.className = styles.px;
            d.style.left = Math.random() * W + 'px';
            d.style.top = Math.random() * H + 'px';
            layer.appendChild(d);
            return d;
        });

        let assembled = false;
        const tick = () => {
            assembled = !assembled;
            const rect = layer.getBoundingClientRect();
            W = rect.width; H = rect.height;
            if (assembled) targets = makeTargets();
            nodes.forEach((n, i) => {
                if (assembled){
                    n.style.left = targets[i].x + 'px';
                    n.style.top  = targets[i].y + 'px';
                    n.style.opacity = '0.95';
                    n.style.transform = 'rotate(0deg)';
                } else {
                    n.style.left = Math.random() * W + 'px';
                    n.style.top  = Math.random() * H + 'px';
                    n.style.opacity = '0.6';
                    n.style.transform = `rotate(${Math.random()*16-8}deg)`;
                }
            });
        };

        const t1 = setTimeout(tick, 600);
        const i1 = setInterval(tick, 8200);
        const onResize = () => { targets = makeTargets(); };
        window.addEventListener('resize', onResize);

        return () => {
            clearTimeout(t1); clearInterval(i1);
            window.removeEventListener('resize', onResize);
            layer.querySelectorAll('.' + styles.px).forEach(n => n.remove());
        };
    }, []);

    return <div className={styles.backdrop}><div ref={layerRef} className={styles.pixelLayer}/></div>;
}
