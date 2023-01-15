import Head from "next/head";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import styles from "../../styles/About.module.css";
import Image from "next/image";

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

      {/* ----------------------------NAV---------------------------- */}

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

      {/* -----------------------main--------------------------- */}

      <main className={styles.main}>
        <div className={styles.imageContainer}>
          <img
            src="https://res.cloudinary.com/avidu/image/upload/v1672635657/12JOPV7bOKsma6ykaaSmL3tDLV67g4xUQ_uyp0cs.png"
            height={500}
          ></img>
        </div>

        <div className={styles.titleContainer}>
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            nemo eligendi mollitia ad? Iste doloribus expedita nostrum sequi
            perferendis quisquam porro corporis nobis? Debitis nam adipisci
            sapiente fuga nihil ab quas blanditiis est magnam. Officia,
            laboriosam voluptas exercitationem ab quidem ex, tempora iste
            ducimus architecto deserunt veniam, vitae beatae odit.
          </h1>
        </div>

        <div className={styles.bioContainer}>
          <div className={styles.bio}>
            <div className={styles.bioTitle}>
              <h3>Full Name</h3>
            </div>
            <div className={styles.bioDetails}>
              <p>Avidu Sampath Bandara</p>
            </div>

          </div>


        </div>
      </main>

      {/* ---------------------footer------------------------- */}
    </div>
  );
}
