import { Banner } from "components/banner";
import { Subtitle } from "components/typography";
import Container from "react-bootstrap/Container";
import { Believes } from "scenes/home/believes";
import { Intro } from "scenes/home/content";
import { List } from "scenes/services/list";

export default function Home() {
  return (
    <>
      <Banner
        image={"sea.jpg"}
        title={"Revelation 22:17"}
        subtitle={`The Spirit and the bride say, “Come!” And let the one who hears say,
            “Come!” Let the one who is thirsty come; and let the one who wishes
            take the free gift of the water of life.`}
      />

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
