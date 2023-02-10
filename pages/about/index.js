import Head from "next/head";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import styles from "../../styles/About.module.css";
import Image from "next/image";

import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";

// ---------------------Fetching Data-------------------

const hygraph = new GraphQLClient(
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl9s32g1q2oun01td822bh5s6/master"
);

const QUERY = gql`
  {
    bios {
      id
      fullName
      nameWithInitials
      dob
      address
      maritalStatus
      vision {
        html
      }
      values {
        html
      }
      education {
        html
      }
      experience {
        html
      }
    }
  }
`;

export async function getStaticProps() {
  const { bios } = await hygraph.request(QUERY);

  return {
    props: {
      bios,
    },
  };
}

// -------------------------------------------------------------------

export default function About({ bios }) {
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

        {bios.map(
          ({
            id,
            fullName,
            nameWithInitials,
            dob,
            address,
            maritalStatus,
            vision,
            values,
            experience,
            education,
          }) => (
            <div className={styles.bioContainer} key={id}>

              <div className={styles.bio}>
                <div className={styles.bioTitle}>
                  <h3>Full Name</h3>
                </div>
                <div className={styles.bioDetails}>
                  <p>{fullName}</p>
                </div>
              </div>

              <hr className={styles.rule} />

              <div className={styles.bio}>
                <div className={styles.bioTitle}>
                  <h3>Name With Initials</h3>
                </div>
                <div className={styles.bioDetails}>
                  <p>{nameWithInitials}</p>
                </div>
              </div>

              <hr className={styles.rule} />

              <div className={styles.bio}>
                <div className={styles.bioTitle}>
                  <h3>DOB</h3>
                </div>
                <div className={styles.bioDetails}>
                  <p>{dob}</p>
                </div>
              </div>

              <hr className={styles.rule} />

              <div className={styles.bio}>
                <div className={styles.bioTitle}>
                  <h3>Address</h3>
                </div>
                <div className={styles.bioDetails}>
                  <p>{address}</p>
                </div>
              </div>

              <hr className={styles.rule} />

              <div className={styles.bio}>
                <div className={styles.bioTitle}>
                  <h3>Marital Status</h3>
                </div>
                <div className={styles.bioDetails}>
                  <p>{maritalStatus}</p>
                </div>
              </div>

              <hr className={styles.rule} />

              <div>
                <h2>Process</h2>
                <div className={styles.processGrid}>
                  <div className={styles.processItem}><p>1</p><h3>Initial Discussion</h3></div>
                  <div className={styles.processItem}><p>2</p><h3>Design</h3></div>
                  <div className={styles.processItem}><p>3</p><h3>Approve</h3></div>
                  <div className={styles.processItem}><p>4</p><h3>Development</h3></div>
                  <div className={styles.processItem}><p>5</p><h3>Testing</h3></div>
                  <div className={styles.processItem}><p>6</p><h3>Deploying</h3></div>
                </div>
              </div>

              <hr className={styles.rule} />

              <div className={styles.bio}>
                <div className={styles.bioTitle}>
                  <h3>Vision</h3>
                </div>
                <div className={styles.bioDetails}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: vision.html,
                    }}
                  ></div>
                </div>
              </div>

              <hr className={styles.rule} />

              <div className={styles.bio}>
                <div className={styles.bioTitle}>
                  <h3>Values</h3>
                </div>
                <div className={styles.bioDetails}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: values.html,
                    }}
                  ></div>
                </div>
              </div>

              <hr className={styles.rule} />

              <div className={styles.bio}>
                <div className={styles.bioTitle}>
                  <h3>Education</h3>
                </div>
                <div className={styles.bioDetails}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: education.html,
                    }}
                  ></div>
                </div>
              </div>

              <hr className={styles.rule} />

              <div className={styles.bio}>
                <div className={styles.bioTitle}>
                  <h3>Experience</h3>
                </div>
                <div className={styles.bioDetails}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: experience.html,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          )
        )}
      </main>

      {/* ---------------------footer------------------------- */}
    </div>
  );
}
