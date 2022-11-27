import Head from "next/head";

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
    <div>
      <Head></Head>
      <main>
        <div>
          <h1>This is Project Details Page</h1>
          <img src={project.mainImage.url} width={500} alt={project.name} />
          <h2>{project.title}</h2>
          <ul>
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}