import styles from "../../styles/Contact.module.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Contact() {
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
        <motion.h1 layoutId="contact" className={styles.ttl}>
          Contact
        </motion.h1>
      </nav>
      <main>
        <h1>Contact</h1>
      </main>
    </div>
  );
}
