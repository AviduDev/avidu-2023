import Head from "next/head";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import styles from "../../styles/About.module.css";

export default function About() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <nav className={styles.nav}>
        <button
          className={styles.back}
          type="button"
          onClick={() => router.back()}
        >
          Back
        </button>
        <motion.h1 layoutId="about" className={styles.ttl}>
          About
        </motion.h1>
      </nav>
      <main>
        <h1>About</h1>
      </main>
    </div>
  );
}
