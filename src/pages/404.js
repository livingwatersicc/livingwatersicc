import Link from "next/link";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

import { Banner } from "components/banner";
import { Wrapper } from "components/wrapper";

const Custom404 = () => {
  return (
    <>
      <Banner
        title={"Oops! Page Not Found"}
        image={"sheep.jpg"}
        position="center"
      />
      <Wrapper>
        <p>We're sorry, the page you're looking for isn't here.</p>
        <p>
          But don’t worry — even when something’s lost, God never loses sight of
          us.
        </p>
        <Stack gap={3} direction="horizontal" className="mt-5 pb-5">
          <Button as={Link} href="/" variant="dark">
            Back to home
          </Button>
          <Button as={Link} href="/contact" variant="dark">
            Contact us
          </Button>
        </Stack>
      </Wrapper>
    </>
  );
};

export default Custom404;
