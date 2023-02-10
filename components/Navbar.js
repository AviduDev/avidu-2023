import Link from "next/link";
import styles from "./Navbar.module.css";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
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
    </nav>
  );
}
