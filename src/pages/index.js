import { Banner } from "components/banner";
import Container from "react-bootstrap/Container";
import { Believes } from "scenes/home/believes";
import { Intro } from "scenes/home/content";

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
    </>
  );
}
