import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Description from "../components/Description";
import Services from "../components/Services"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Web Designer and Frontend Developer from Sri Lanka</title>
        <meta
          name="description"
          content="Avidu is a creative web designer and developer from sri lanka, build fast, scalable and cost effective websites using modern technologies."
        />
        <meta name="robots" content="all" />
        <link rel="canonical" href="https://avidu.me/" />
        <meta
          property="og:title"
          content="Web Designer and Frontend Developer from Sri Lanka"
        />
        <meta
          property="og:description"
          content="Avidu is a creative web designer and developer from sri lanka, build fast, scalable and cost effective websites using modern technologies."
        />
        <meta property="og:image" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* ---------------------------------------------------------- */}
        <Hero />
        {/* ---------------------------------------------------------- */}
        <Navbar />
        {/* ---------------------------------------------------------- */}
        <Description />
        {/* ---------------------------------------------------------- */}
        <Services />
        {/* ---------------------------------------------------------- */}
        {/* ---------------------------------------------------------- */}
        {/* ---------------------------------------------------------- */}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span id="merch" className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
