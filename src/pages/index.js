import { Banner } from "components/banner";
import { Subtitle } from "components/typography";
import Container from "react-bootstrap/Container";
import { Believes } from "scenes/home/believes";
import { Intro } from "scenes/home/content";
import { List } from "scenes/services/list";

export default function Home() {
  return (
    <>
      <Banner />

      <Container>
        <Intro />
      </Container>

      <div className="bg-light">
        <Container>
          <Believes />
        </Container>
      </div>
      <Container className="p-5 pb-1 text-center">
        <Subtitle>Services</Subtitle>
      </Container>
      <List />
    </>
  );
}
