import FlipCard from "./FlipCard";
import styles from "./FlipCardGrid.module.css";

export default function FlipCardGrid() {
    return (
        <section className={styles.wrap}>
            <div className={styles.grid}>
                <FlipCard
                    title="Desarrollo Web"
                    text="Sitios rápidos con Next.js, SEO y analítica."
                    iconPng="/services/software.png"
                    href="/servicios/desarrollo"
                    square
                />
                <FlipCard
                    title="Automatización"
                    text="Bots, integraciones y flujos sin fricción."
                    iconPng="/services/automatizacion.png"
                    href="/servicios/automatizacion"
                    square
                />
                <FlipCard
                    title="Seguridad"
                    text="Backups, hardening y continuidad del negocio."
                    iconPng="/services/seguridad.png"
                    href="/servicios/seguridad"
                    square
                />
                <FlipCard
                    title="Cloud & SRE"
                    text="Infra, CI/CD y observabilidad productiva."
                    iconPng="/services/nube.png"
                    href="/servicios/cloud"
                    square
                />
            </div>
        </section>
    );
}
