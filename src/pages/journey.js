import Head from "next/head";

import { Banner } from "components/banner";
import { Journey } from "scenes/journey";

const OurJourney = () => {
  return (
    <>
      <Head>
        <title>About Us | Our journey</title>
      </Head>
      <Banner
        image={"cross-ocean.jpg"}
        title={"Our journey"}
        isResponsive
        position="center"
      />
      <Journey />
    </>
  );
};

export default OurJourney;
