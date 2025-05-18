import Head from "next/head";
import Badge from "react-bootstrap/Badge";

import { Banner } from "components/banner";
import { Heading } from "components/typography";
import { Wrapper } from "components/wrapper";
import { team } from "scenes/team";

const slugs = team.map(t => t.slug);

const Team = ({ slug }) => {
  const member = team.find(t => t.slug == slug);
  if (!member) return null;

  return (
    <>
      <Head>
        <title>Our team | {member.name}</title>
      </Head>
      <Banner
        image={"bible.jpg"}
        title={"Our team"}
        isResponsive
        position="top"
      />
      <Wrapper>
        <h5>
          <Badge bg={"info"}>{member.role}</Badge>
        </h5>
        <Heading>{member.name}</Heading>
        {member.content}
      </Wrapper>
    </>
  );
};

export async function getStaticPaths() {
  const paths = team.map(({ slug }) => ({ params: { slug } }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params: { slug } }) {
  if (!slugs.includes(slug)) return { notFound: true };
  return { props: { slug } };
}

export default Team;
