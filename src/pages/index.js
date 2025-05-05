import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

import { Banner } from "components/banner";
import { Wrapper } from "components/wrapper";
import { Believes } from "scenes/home/believes";
import { Intro } from "scenes/home/content";

export default function Home() {
  return (
    <>
      <Banner
        image={"sea.jpg"}
        title={"John 7:37-38"}
        subtitle={
          "Let anyone who is thirsty come to me [Jesus] and drink. Whoever believes in me, as Scripture has said, rivers of living water will flow from within them."
        }
      />

      <Wrapper>
        <Intro />
      </Wrapper>

      <Wrapper bg="bg-warning">
        <Stack className="text-center">
          <div className="display-6">Join us for our Sunday service</div>
          <div className="h4">See you soon!</div>
          <div className="fw-light">
            <FontAwesomeIcon icon={faClock} /> 5:00 PM – 6:45 PM
          </div>
          <div className="fw-light">
            @ Church of Christ building (1 Saint Andrew Street Dunedin)
          </div>
          <div className="mt-3">
            <Button as={Link} href="/services" variant="outline-dark">
              Services
            </Button>
          </div>
        </Stack>
      </Wrapper>

      <Wrapper isGrayBg>
        <Believes />
      </Wrapper>
    </>
  );
}
