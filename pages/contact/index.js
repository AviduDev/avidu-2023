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
        <motion.h1 layoutId="contact" className={styles.ttl}>
          Contact
        </motion.h1>
      </nav>

      <main className={styles.main}>
        <h2 className={styles.mainTitle}>
          I WILL BE VERY pleasing to help you out with your any question
        </h2>

        <div className={styles.gridContainer}>
          <div className={styles.grid}>
            <div className={styles.title}>
              <h3>E-mail</h3>
            </div>
            <div className={styles.details}>
              <a href="mailto:avidu97@gmail.com">avidu97@gmail.com</a>
            </div>
          </div>

          <hr />

          <div className={styles.grid}>
            <div className={styles.title}>
              <h3>Phone</h3>
            </div>
            <div className={styles.details}>
              <a href="tel:+94767578127">+9476-75-78-127</a>
            </div>
          </div>

          <hr />

          <div className={styles.grid}>
            <div className={styles.title}>
              <h3>Address</h3>
            </div>
            <div className={styles.details}>
              <address>
                Santhanagama, <br />
                Kumbukgete, <br />
                60508.
              </address>
            </div>
          </div>

          <hr />

          <div className={styles.grid}>
            <div className={styles.title}>
              <h3>Links</h3>
            </div>
            <div className={styles.details}>
              <a
                href="https://www.linkedin.com/in/avidu-web-designer-from-sri-lanka/"
                target="blank"
              >
                LinkedIn🡥
              </a>{" "}
              <br />
              <a href="https://github.com/AviduDev" target="blank">
                GitHub🡥
              </a>{" "}
              <br />
              <a href="https://www.behance.net/avidu">Behance🡥</a> <br />
            </div>
          </div>

          <hr />
        </div>

        <h2 className={styles.mainTitle}>FAQs</h2>

        <div className={styles.faq}>
          <div>
            <input
              type="checkbox"
              id="question1"
              name="q"
              className={styles.questions}
            />
            <div className={styles.plus}>+</div>
            <label for="question1" className={styles.question}>
              Question 1
            </label>
            <div className={styles.answers}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              numquam quos saepe tempora. Quidem doloremque nisi exercitationem,
              quasi assumenda rem!
            </div>
          </div>

          <div>
            <input
              type="checkbox"
              id="question2"
              name="q"
              className={styles.questions}
            />
            <div className={styles.plus}>+</div>
            <label for="question2" className={styles.question}>
              Question 2
            </label>
            <div className={styles.answers}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In labore
              dolorem maiores dolor quidem distinctio repellendus hic harum
              eligendi corrupti.
            </div>
          </div>

          <div>
            <input
              type="checkbox"
              id="question3"
              name="q"
              className={styles.questions}
            />
            <div className={styles.plus}>+</div>
            <label for="question3" className={styles.question}>
              Question 3
            </label>
            <div className={styles.answers}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore veritatis sapiente voluptatem. Eveniet blanditiis,
              minima corrupti totam modi saepe illo?
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
