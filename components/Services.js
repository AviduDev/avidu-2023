import Link from 'next/link'
import styles from './Services.module.css'

export default function Services() {
    return (
        <section className={styles.section}>
            <h1 className={styles.title}>SERVICES</h1>
            <ul className={styles.ul}>
                <li><Link className={styles.link} href="/services/#web"><h2>Web Design</h2><span className={styles.icon}>🡢</span></Link></li>
                <li><Link className={styles.link} href="/services"><h2>Front-end Development</h2><span className={styles.icon}>🡢</span></Link></li>
                <li><Link className={styles.link} href="/services"><h2>Designing</h2><span className={styles.icon}>🡢</span></Link></li>
                <li><Link className={styles.link} href="/services"><h2>Other Services</h2><span className={styles.icon}>🡢</span></Link></li>
            </ul>
        </section>
    )
}