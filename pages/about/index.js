import Head from "next/head";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import styles from "../../styles/About.module.css";

export default function About() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>About Me | Web Designer and Developer from Sri Lanka</title>
        <meta
          name="description"
          content="Learn more about avidu, his vision, mission and how he got where he's now. Also, he explains what technologies he uses to create websites"
        />
        <meta name="robots" content="all" />
        <link rel="canonical" href="https://avidu.me/about" />
        <meta
          property="og:title"
          content="About Me | Web Designer and Developer from Sri Lanka"
        />
        <meta
          property="og:description"
          content="Learn more about avidu, his vision, mission and how he got where he's now. Also, he explains what technologies he uses to create websites"
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
