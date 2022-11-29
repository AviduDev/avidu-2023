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
        <title>Projects</title>
      </Head>

      <nav className={styles.nav}>
        <button
          className={styles.back}
          type="button"
          onClick={() => router.back()}
        >
          Back
        </button>
        <motion.h1 layoutId="projects" className={styles.ttl}>
          Projects
        </motion.h1>
      </nav>
      
      <main className={styles.main}>
        <div>
          {projects.map(({ id, title, mainImage, slug, tags }) => (
            <div key={slug}>
              <div>
                <Link href={`/projects/${slug}`}>
                  <h1>{title}</h1>
                </Link>
                <div>
                  <motion.img src={mainImage.url} alt={title} width={500} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
