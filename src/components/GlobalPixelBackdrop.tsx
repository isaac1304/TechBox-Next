"use client";

import { useEffect, useRef } from "react";
import styles from "./GlobalPixelBackdrop.module.css";

export default function GlobalPixelBackdrop() {
    const layerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const layer = layerRef.current;
        if (!layer) return;

        const SIZE = 9, GAP = 4, UNIT = SIZE + GAP;
        const COLS = 28, ROWS = 18;

        const makeTargets = () => {
            const rect = layer.getBoundingClientRect();
            const totalW = COLS * UNIT;
            const totalH = ROWS * UNIT;
            const ox = rect.width / 2 - totalW / 2;
            const oy = rect.height / 2 - totalH / 2;
            const arr: Array<{ x: number; y: number }> = [];
            for (let r = 0; r < ROWS; r++) {
                for (let c = 0; c < COLS; c++) {
                    arr.push({ x: ox + c * UNIT, y: oy + r * UNIT });
                }
            }
            return arr;
        };

        let targets = makeTargets();
        let W = layer.clientWidth, H = layer.clientHeight;

        const dots: HTMLDivElement[] = targets.map(() => {
            const d = document.createElement("div");
            d.className = styles.px;
            d.style.left = Math.random() * W + "px";
            d.style.top = Math.random() * H + "px";
            layer.appendChild(d);
            return d;
        });

        const assemble = () => {
            targets = makeTargets();
            dots.forEach((n, i) => {
                n.style.left = targets[i].x + "px";
                n.style.top = targets[i].y + "px";
                n.style.opacity = "0.9";
            });
        };

        const floatAmbient = (el: HTMLDiv
