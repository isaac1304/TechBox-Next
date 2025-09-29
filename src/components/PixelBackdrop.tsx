import styles from './PixelBackdrop.module.css';

export default function PixelBackdrop() {
    return (
        <div className={styles.backdrop} aria-hidden>
            {/* capas que vienen de varios lados */}
            <div className={`${styles.layer} ${styles.l1}`} />
            <div className={`${styles.layer} ${styles.l2}`} />
            <div className={`${styles.layer} ${styles.l3}`} />
            <div className={`${styles.layer} ${styles.l4}`} />
            <div className={`${styles.layer} ${styles.l5}`} />
            {/* cubo final */}
            <div className={styles.cluster} />
        </div>
    );
}
