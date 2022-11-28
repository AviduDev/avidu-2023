/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../../styles/Projects.module.css";

import { motion } from "framer-motion";

import { GraphQLClient } from "graphql-request";

const hygraph = new GraphQLClient(
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl9s32g1q2oun01td822bh5s6/master"
);

export async function getStaticProps({ params }) {
  const { project } = await hygraph.request(
    `
    query MyQuery($slug: String!) {
      project(where: { slug: $slug }) {
        id
        title
        mainImage {
          url
          width
          height
        }
        slug
        tags
      }
    }
  `,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      project,
    },
  };
}

export async function getStaticPaths() {
  const { projects } = await hygraph.request(`
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
        }
      }
    }
  `);

  return {
    paths: projects.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

export default function Project({ project }) {
  return (
    <div className={styles.wrapper}>
      <Head></Head>
      <main className={styles.container}>
        <div>
          <div className={styles.image_container}>
            <motion.img
            layoutId="image"
              className={styles.project_image}
              src={project.mainImage.url}
              width={500}
              alt={project.name}
            />
          </div>
          <div className={styles.title_container}>
            <motion.h1 layoutId="title" className={styles.title}>{project.title}</motion.h1>
          </div>
          <ul>
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
