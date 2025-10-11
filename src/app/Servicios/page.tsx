import FlipCard from "@/components/FlipCard";
import { services } from "@/lib/services";
import s from "./puzzle.module.css";

export const dynamic = "force-static";

export default function ServiciosPage() {
    // Asegura 9 servicios (si hay más, corta; si hay menos, rellena)
    const items = services.slice(0, 9);

    return (
        <main className="mx-auto max-w-6xl px-4 py-10 min-h-[calc(100vh-var(--header-h))] text-white">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-6">
                Nuestros servicios
            </h1>

            {/* Contenedor cuadrado del “rompecabezas” */}
            <section className={s.square}>
                <div className={s.grid}>
                    {items.map((svc, i) => {
                        // asigna las áreas A..I en orden
                        const area = ["a", "b", "c", "d", "e", "f", "g", "h", "i"][i] as
                            | "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i";

                        return (
                            <div key={svc.slug} className={`${s.item} ${s[area]}`}>
                                <FlipCard
                                    href={`/Servicios/${svc.slug}`}
                                    title={svc.name}
                                    // en flipcards prefieres lottie (no png)
                                    lottieSrc={svc.lottie}
                                    // colas alternando #2A2F73 y #2EC4B6
                                    variant={i % 2 === 0 ? "navy" : "teal"}
                                    // controla el tamaño de la ilustración dentro del card
                                    mediaScale={0.78}
                                />
                            </div>
                        );
                    })}
                </div>
            </section>
        </main>
    );
}
