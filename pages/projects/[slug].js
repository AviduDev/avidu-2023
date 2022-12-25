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
          html
         
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
          html
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
        {/* ------------------------Project Image------------------------ */}

        <div className={styles.image_container}>
          <img
            className={styles.project_image}
            src={project.mainImage.url}
            width={500}
            alt={project.name}
          />
        </div>

        {/* ------------------------Project Details Container------------------------ */}

        <div className={styles.projectContainer}>
          <h1 className={styles.projectTitle}>{project.title}</h1>
          <p className={styles.projectDescription}>{project.description}</p>
          <ul className={styles.tags}>
            {project.tags.map((tag) => (
              <li className={styles.tag} key={tag}>
                {tag}
              </li>
            ))}
          </ul>

          {/* ------------------------Project Link Box------------------------ */}

          <div className={styles.linkContainer}>
            <div className={styles.linkItem}>
              <p className={styles.company}>
                <span className={styles.boldText}>Company: </span>
                {project.company}
              </p>
            </div>
            <div className={styles.linkItem}>
              <p className={styles.collaboration}>
                <span className={styles.boldText}>Collaboration: </span>
                {project.collaboration}
              </p>
            </div>
            <div className={styles.linkItem}>
              <p className={styles.year}>
                <span className={styles.boldText}>Year: </span> {project.year}
              </p>
            </div>

            <div className={styles.linkItem}>
              <Link href={project.liveSite} target="blank">
                Live↗
              </Link>
            </div>
            <div className={styles.linkItem}>
              <Link href={project.sourceUrl} target="blank">
                Source↗
              </Link>
            </div>
            <div className={styles.linkItem}>
              <Link href={project.design} target="blank">
                Design↗
              </Link>
            </div>
          </div>

          {/* ------------------------Project Case Study------------------------ */}

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

            <hr />

            <div className={styles.details}>
              <div className={styles.sectionTitle}>
                <h3>Used Tools</h3>
              </div>
              <div className={styles.sectionDetails}>
                <div
                  dangerouslySetInnerHTML={{ __html: project.usedTools.html }}
                ></div>
              </div>
            </div>

            <hr />

            <div className={styles.details}>
              <div className={styles.sectionTitle}>
                <h3>Goals</h3>
              </div>
              <div className={styles.sectionDetails}>
                <div
                  dangerouslySetInnerHTML={{ __html: project.goals.html }}
                ></div>
              </div>
            </div>

            <hr />

            <div className={styles.details}>
              <div className={styles.sectionTitle}>
                <h3>Problems</h3>
              </div>
              <div className={styles.sectionDetails}>
                <div
                  dangerouslySetInnerHTML={{ __html: project.problems.html }}
                ></div>
              </div>
            </div>

            <hr />

            <div className={styles.details}>
              <div className={styles.sectionTitle}>
                <h3>Proposed Solutions</h3>
              </div>
              <div className={styles.sectionDetails}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: project.proposedSolution.html,
                  }}
                ></div>
              </div>
            </div>

            <hr />

            <div className={styles.details}>
              <div className={styles.sectionTitle}>
                <h3>Project Scope</h3>
              </div>
              <div className={styles.sectionDetails}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: project.projectScope.html,
                  }}
                ></div>
              </div>
            </div>

          </div>

          <div className={styles.galleryImages}>
            <div
              className={styles.galleryImage}
              dangerouslySetInnerHTML={{
                __html: project.galleryImages.html,
              }}
            ></div>
          </div>


        </div>
      </main>
    </div>
  );
}
