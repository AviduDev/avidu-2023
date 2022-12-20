import styles from "../../styles/Contact.module.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Contact() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Contact | Web Designer and Developer from Sri Lanka</title>
        <meta
          name="description"
          content="Contact details of avidu. You can contact him for all of his work related stuff, also you can follow him on linkedin."
        />
        <meta name="robots" content="all" />
        <link rel="canonical" href="https://avidu.me/contact" />
        <meta
          property="og:title"
          content="Contact | Web Designer and Developer from Sri Lanka"
        />
        <meta
          property="og:description"
          content="Contact details of avidu. You can contact him for all of his work related stuff, also you can follow him on linkedin."
        />
        <meta property="og:image" content="" />
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
