'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

type Square = { x:number; y:number; size:number; delay:number; opacity:number }

const gen = (count=18): Square[] =>
    Array.from({length: count}, (_,i) => ({
        x: Math.random()*100,
        y: Math.random()*100,
        size: 6 + Math.random()*14,
        delay: i*0.07,
        opacity: 0.15 + Math.random()*0.25
    }))

export default function AnimatedSquares({ className='' }: { className?: string }) {
    const [squares, setSquares] = useState<Square[]>([]) // vacío en SSR

    useEffect(() => {
        setSquares(gen()) // solo en cliente
    }, [])

    return (
        <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
            {squares.map((s,i)=>(
                <motion.span
                    key={i}
                    className="absolute rounded-[4px] bg-[var(--brand)] dark:bg-[var(--accent)]/80"
                    style={{ left:`${s.x}%`, top:`${s.y}%`, width:s.size, height:s.size, opacity:s.opacity }}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: -10, opacity: s.opacity }}
                    transition={{
                        type:'spring',
                        stiffness: 35,
                        damping: 16,
                        delay: s.delay,
                        repeat: Infinity,
                        repeatType:'reverse',
                        duration: 4
                    }}
                />
            ))}
        </div>
    )
}
