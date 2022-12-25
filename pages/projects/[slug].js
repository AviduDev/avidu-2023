/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../../styles/Project.module.css";

import { motion } from "framer-motion";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";

import { GraphQLClient } from "graphql-request";
import Link from "next/link";

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
        description
        tags
        year
        company
        collaboration
        liveSite
        sourceUrl
        design
        demoUrl
        providedServices {
          html
        }
        usedTools {
          html
        }
        goals {
          html
        }
        problems {
          html
        }
        proposedSolution {
          html
        }
        projectScope {
          html
        }
        galleryImages {
          url
          width
          height
        }
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
      <Head>
        <title>
          {project.title} | Web Designer and Developer from Sri Lanka
        </title>
        <meta
          name="description"
          content="Avidu is a creative web designer and developer from sri lanka, build fast, scalable and cost effective websites using modern technologies."
        />
        <meta name="robots" content="all" />
        <link rel="canonical" href="https://avidu.me/${slug}" />
        <meta property="og:title" content={project.title} />
        <meta
          property="og:description"
          content="Avidu is a creative web designer and developer from sri lanka, build fast, scalable and cost effective websites using modern technologies."
        />
        <meta property="og:image" content={project.mainImage.url} />
      </Head>

      <main className={styles.main}>
        <div className={styles.image_container}>
          <img
            className={styles.project_image}
            src={project.mainImage.url}
            width={500}
            alt={project.name}
          />
        </div>
        <div className={styles.projectContainer}>
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.description}>{project.description}</p>
          <ul>
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <div>
            <p className={styles.company}>
              <span className={styles.boldText}>Company: </span>
              {project.company}
            </p>
            <p className={styles.collaboration}>
              <span className={styles.boldText}>Collaboration: </span>
              {project.collaboration}
            </p>
            <p className={styles.year}>{project.year}</p>
            <Link href={project.liveSite}>Live↗</Link> <br />
            <Link href={project.sourceUrl}>Source↗</Link> <br />
            <Link href={project.demoUrl}>Demo↗</Link> <br />
          </div>
          <div className={styles.detailsContainer}>
            <div className={styles.details}>
              <div className={styles.sectionTitle}>
                <h3>Provided Services</h3>
              </div>
              <div className={styles.sectionDetails}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: project.providedServices.html,
                  }}
                ></div>
              </div>
            </div>

            <div className={styles.details}>
              <div className={styles.sectionTitle}>
                <h3>Used Tools</h3>
              </div>
              <div className={styles.sectionDetails}>
                <div dangerouslySetInnerHTML={{ __html: project.usedTools.html }}></div>
              </div>
            </div>

            <div className={styles.details}>
              <div className={styles.sectionTitle}>
                <h3>Goals</h3>
              </div>
              <div className={styles.sectionDetails}>
                <div dangerouslySetInnerHTML={{ __html: project.goals.html }}></div>
              </div>
            </div>

            <div className={styles.details}>
              <div className={styles.sectionTitle}>
                <h3>Problems</h3>
              </div>
              <div className={styles.sectionDetails}>
                <div dangerouslySetInnerHTML={{ __html: project.problems.html }}></div>
              </div>
            </div>

            <div className={styles.details}>
              <div className={styles.sectionTitle}>
                <h3>Proposed Solutions</h3>
              </div>
              <div className={styles.sectionDetails}>
                <div dangerouslySetInnerHTML={{ __html: project.proposedSolution.html }}></div>
              </div>
            </div>

            <div className={styles.details}>
              <div className={styles.sectionTitle}>
                <h3>Project Scope</h3>
              </div>
              <div className={styles.sectionDetails}>
                <div dangerouslySetInnerHTML={{ __html: project.projectScope.html }}></div>
              </div>
            </div>

            <div className={styles.galleryImages}></div>
          </div>
        </div>
      </main>
    </div>
  );
}
