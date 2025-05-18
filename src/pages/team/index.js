import { motion } from "motion/react";
import Head from "next/head";
import Link from "next/link";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";

import { Banner } from "components/banner";
import { Wrapper } from "components/wrapper";
import { team } from "scenes/team";

const Team = () => {
  return (
    <>
      <Head>
        <title>Our team</title>
      </Head>
      <Banner
        image={"bible.jpg"}
        title={"Our team"}
        isResponsive
        position="top"
      />
      <Wrapper>
        <div className="display-6 text-center mb-3">Meet the team</div>
        <div className="d-flex flex-wrap justify-content-around">
          {team.map(({ slug, name, thumbnail, role }) => (
            <Link
              href={`/team/${slug}`}
              key={slug}
              className="link-dark text-decoration-none">
              <motion.div
                whileHover="hover"
                initial="rest"
                animate="rest"
                whileTap="tap">
                <Stack gap={3} className="p-4 align-items-center">
                  <motion.div
                    variants={{
                      rest: { scale: 1 },
                      hover: { scale: 1.1 },
                      tap: { scale: 0.9 },
                    }}
                    transition={{ type: "spring", stiffness: 300 }}>
                    <Image
                      src={thumbnail || "/people/minister1-thumbnail.jpeg"}
                      alt={name}
                      width={175}
                      height={175}
                      roundedCircle
                    />
                  </motion.div>
                  <div className="d-flex flex-column align-items-center">
                    <div className="h5">{name}</div>
                    <div className="text-info">{role}</div>
                  </div>
                </Stack>
              </motion.div>
            </Link>
          ))}
        </div>
      </Wrapper>
    </>
  );
};

export default Team;
