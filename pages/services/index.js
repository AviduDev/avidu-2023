import Head from "next/head";
import { motion } from "framer-motion";
import styles from "../../styles/Services.module.css";
import { useRouter } from "next/router";

export default function Services() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Services</title>
      </Head>
      <nav className={styles.nav}>
        <button
          className={styles.back}
          type="button"
          onClick={() => router.back()}
        >
          Back
        </button>
        <motion.h1 layoutId="services" className={styles.ttl}>
          Services
        </motion.h1>
      </nav>
      <main>
        <h1>Services</h1>
      </main>
    </div>
  );
}
