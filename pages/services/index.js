import Head from "next/head";
import { motion } from "framer-motion";
import styles from "../../styles/Services.module.css";
import { useRouter } from "next/router";

export default function Services() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Services | Web Designer and Developer from Sri Lanka</title>
        <meta
          name="description"
          content="Other than web design and development, avidu offers most of web related services you can learn about them here."
        />
        <meta name="robots" content="all" />
        <link rel="canonical" href="https://avidu.me/" />
        <meta
          property="og:title"
          content="Services | Web Designer and Developer from Sri Lanka"
        />
        <meta
          property="og:description"
          content="Other than web design and development, avidu offers most of web related services you can learn about them here."
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
