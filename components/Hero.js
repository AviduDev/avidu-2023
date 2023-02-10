import Link from 'next/link'
import styles from './Hero.module.css'


export default function Hero() {
    return (
        <section className={styles.section}>
            <h1 className={styles.heroText}>website designer / frontend developer</h1>
            
            <div className={styles.socialLinks}>
                <Link className={styles.socialLink} href="">LinkedIn 🡥</Link>
                <Link className={styles.socialLink} href="">Behance 🡥</Link>
                <Link className={styles.socialLink} href="">GitHub 🡥</Link>
            </div>

            <div className={styles.locationCtn}>
                <p className={styles.location}>🌏 Sri Lanka</p>
                <p className={styles.available}>🟢 Available</p>
            </div>
        </section>
    )
}