'use client';

import { useMemo } from 'react';

type Props = {
  size?: number;
  className?: string;
};

const PALETTE = [
  'var(--brand-navy)',
  'var(--brand-navy-500)',
  'var(--brand-teal)',
  'var(--brand-teal-300)',
  'var(--brand-navy-300)',
];

export default function PixelMosaic({ size = 6, className = '' }: Props) {
  const cells = useMemo(() => {
    const total = size * size;
    return Array.from({ length: total }, (_, i) => {
      const color = PALETTE[(i * 3 + (i % 5)) % PALETTE.length];
      const baseOpacity = 0.15 + ((i * 7) % 80) / 100;
      const delay = ((i * 137) % 4000) / 1000;
      const duration = 3 + ((i * 13) % 30) / 10;
      return { color, baseOpacity, delay, duration };
    });
  }, [size]);

  return (
    <div
      className={`relative aspect-square w-full ${className}`.trim()}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 rounded-[2rem] opacity-30 blur-3xl"
        style={{ background: 'var(--gradient-brand)' }}
      />
      <div
        className="relative grid h-full w-full gap-2 rounded-[2rem] border border-[var(--border-strong)] bg-[var(--surface-raised)] p-4 shadow-[var(--shadow-card)]"
        style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))` }}
      >
        {cells.map((cell, idx) => (
          <span
            key={idx}
            className="block rounded-md pixel-tile"
            style={{
              background: cell.color,
              opacity: cell.baseOpacity,
              animationDelay: `${cell.delay}s`,
              animationDuration: `${cell.duration}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
