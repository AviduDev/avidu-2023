import Head from "next/head";
import { motion } from "framer-motion";
import styles from "../../styles/Services.module.css";
import { useRouter } from "next/router";

import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";

// ------------------------gql Queries-------------------------

const hygraph = new GraphQLClient(
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl9s32g1q2oun01td822bh5s6/master"
);

const QUERY = gql`
  {
    services {
      id
      serviceTitle
      serviceDescription
      relatedServices {
        html
      }
      relatedTools {
        html
      }
    }
  }
`;

export async function getStaticProps() {
  const { services } = await hygraph.request(QUERY);

  return {
    props: {
      services,
    },
  };
}

// ------------------------------------------------------------

export default function Services({ services }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Services | Web Designer and Developer from Sri Lanka</title>
        <meta
          name="description"
          content="Other than web design and development, avidu offers most of web related services you can learn about them here."
        />
        <meta name="robots" content="all" />
        <link rel="canonical" href="https://avidu.me/" />
        <meta
          property="og:title"
          content="Services | Web Designer and Developer from Sri Lanka"
        />
        <meta
          property="og:description"
          content="Other than web design and development, avidu offers most of web related services you can learn about them here."
        />
        <meta property="og:image" content="" />
      </Head>

      {/* -------------------------------NAV---------------------------------- */}

      <nav className={styles.nav}>
        <button
          className={styles.back}
          type="button"
          onClick={() => router.back()}
        >
          Back
        </button>
        <motion.h1 layoutId="services" className={styles.ttl}>
          Services
        </motion.h1>
      </nav>

      {/* -----------------------------main---------------------------------- */}

      <main className={styles.main}>
        {/* --------------------------services--------------------------------- */}
        <div className={styles.serviceContainer}>
          {services.map(
            ({
              id,
              serviceTitle,
              serviceDescription,
              relatedServices,
              relatedTools,
            }) => (
              <div className={styles.service} key={id}>
                <div className={styles.titleBox}>
                  <h2>{serviceTitle}</h2>
                </div>
                <div className={styles.detailsBox}>
                  <p className={styles.serviceDescription}>
                    {serviceDescription}
                  </p>
                  <div className={styles.relatedServices}>
                    <p>
                      <b>Related Services</b>
                    </p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: relatedServices.html,
                      }}
                    />
                  </div>
                  <div className={styles.relatedTools}>
                    <p>
                      <b>Related Tools</b>
                    </p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: relatedTools.html,
                      }}
                    />
                  </div>
                </div>
              </div>
            )
          )}
    
        </div>
      </main>

      {/* ------------------------footer------------------------------------ */}
    </div>
  );
}
