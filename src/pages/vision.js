import Head from "next/head";

import { Banner } from "components/banner";
import { Vision } from "scenes/vision";

const OurVision = () => {
  return (
    <>
      <Head>
        <title>About Us | Our vision</title>
      </Head>
      <Banner
        image={"church-mountain.jpg"}
        title={"Our vision"}
        isResponsive
        position="bottom"
      />
      <Vision />
    </>
  );
};

export default OurVision;
