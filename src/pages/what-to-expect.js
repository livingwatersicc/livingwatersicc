import Head from "next/head";

import { Banner } from "components/banner";
import { Content } from "scenes/services/content";

const WhatToExpect = () => {
  return (
    <>
      <Head>
        <title>Services | What to expect?</title>
      </Head>
      <Banner
        image={"church-inside.jpg"}
        title={"What to expect"}
        isResponsive
        position="center"
      />
      <Content />
    </>
  );
};

export default WhatToExpect;
