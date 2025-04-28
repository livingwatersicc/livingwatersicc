import { faClockFour } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Banner } from "components/banner";
import { Wrapper } from "components/wrapper";
import { Button, Stack } from "react-bootstrap";
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

      <Wrapper>
        <Intro />
      </Wrapper>

      <Wrapper bg="bg-warning">
        <Stack className="text-center">
          <div className="display-6">
            See you soon! Join us for our Sunday Service
          </div>
          <div className="fw-light">
            <FontAwesomeIcon icon={faClockFour} /> 5:00 PM – 7:00 PM at Church
            of Christ building (1 St Andrew Street Dunedin)
          </div>
          <div className="mt-3">
            <Button as="a" href="/services" variant="outline-dark">
              Services
            </Button>
          </div>
        </Stack>
      </Wrapper>

      <Wrapper isGrayBg>
        <Believes />
      </Wrapper>

      <List showHEading />
    </>
  );
}
