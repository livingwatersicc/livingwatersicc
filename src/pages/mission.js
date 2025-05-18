import Head from "next/head";

import { Banner } from "components/banner";
import { Mission } from "scenes/mission";

const OurMission = () => {
  return (
    <>
      <Head>
        <title>About Us | Our mission</title>
      </Head>
      <Banner
        image={"water-cross.png"}
        title={"Our mission"}
        isResponsive
        position="top"
      />
      <Mission />
    </>
  );
};

export default OurMission;
