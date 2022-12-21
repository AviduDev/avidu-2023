import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Avidu | Web Designer and Developer from Sri Lanka</title>
        <meta
          name="description"
          content="Avidu is a creative web designer and developer from sri lanka, build fast, scalable and cost effective websites using modern technologies."
        />
        <meta name="robots" content="all" />
        <link rel="canonical" href="https://avidu.me/" />
        <meta
          property="og:title"
          content="Avidu | Web Designer and Developer from Sri Lanka"
        />
        <meta
          property="og:description"
          content="Avidu is a creative web designer and developer from sri lanka, build fast, scalable and cost effective websites using modern technologies."
        />
        <meta property="og:image" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <motion.div layoutId="projects" className={styles.item1}>
          <Link className={styles.link1} href="/projects">
            <h1>Projects</h1>
          </Link>
        </motion.div>
        <motion.div layoutId="services" className={styles.item2}>
          <Link className={styles.link2} href="/services">
            <h1>Services</h1>
          </Link>
        </motion.div>
        <motion.div layoutId="about" className={styles.item3}>
          <Link className={styles.link3} href="/about">
            <h1>About</h1>
          </Link>
        </motion.div>
        <motion.div layoutId="contact" className={styles.item4}>
          <Link className={styles.link4} href="/contact">
            <h1>Contact</h1>
          </Link>
        </motion.div>
        <div className={styles.item5}>
          <Link className={styles.link5} href="/">
            <h1>Merch↗</h1>
          </Link>
        </div>
        <div className={styles.socialIcons}>
          <Link className={styles.socialIcon} href="https://www.linkedin.com/in/avidu-web-designer-from-sri-lanka/" target="blank">
            <img src="linkedin.svg" alt="" />
          </Link>
          <Link className={styles.socialIcon} href="https://github.com/AviduDev" target="blank">
            <img src="github.svg" alt="" />
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
