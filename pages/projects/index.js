import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Projects.module.css";
import { useRouter } from "next/router";

import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

import { motion } from "framer-motion";

import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";

const hygraph = new GraphQLClient(
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl9s32g1q2oun01td822bh5s6/master"
);

const QUERY = gql`
  {
    projects {
      id
      title
      slug
      tags
      mainImage {
        url
        width
        height
        id
      }
      year
    }
  }
`;

export async function getStaticProps() {
  const { projects } = await hygraph.request(QUERY);

  return {
    props: {
      projects,
    },
  };
}

export default function Projects({ projects }) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Projects | Web Designer and Developer from Sri Lanka</title>
        <meta
          name="description"
          content="Browse his most of web design, post design and other development related works. You can contact him for more details."
        />
        <meta name="robots" content="all" />
        <link rel="canonical" href="https://avidu.me/projects" />
        <meta
          property="og:title"
          content="Projects | Web Designer and Developer from Sri Lanka"
        />
        <meta
          property="og:description"
          content="Browse his most of web design, post design and other development related works. You can contact him for more details."
        />
        <meta property="og:image" content="" />
      </Head>

      <nav className={styles.nav}>
        <motion.h2 layoutId="projects" className={styles.ttl}>
          Projects
        </motion.h2>
      </nav>

      <main className={styles.main}>
        <div>
          {projects.map(({ id, title, mainImage, slug, tags }) => (
            <div className={styles.projectContainer} key={id}>
              <img
                className={styles.projectImage}
                src={mainImage.url}
                alt={title}
                width="100%"
                height="100%"
              />
              <div className={styles.projectDetails}>
                <Link
                  className={styles.projectTitle}
                  href={`/projects/${slug}`}
                >
                  <h1>{title}</h1>
                </Link>

                <div className={styles.tags}>
                  {tags.map((tag) => (
                    <div className={styles.tag} key={tag}>
                      {tag}
                    </div>
                  ))}
                </div>
                <Link
                  href={`/projects/${slug}`}
                  className={styles.projectButton}
                >
                  <button>Case Study⟶</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
