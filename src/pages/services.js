import Head from "next/head";

import { Banner } from "components/banner";
import { List } from "scenes/services/list";

const Services = () => {
  return (
    <>
      <Head>
        <title>Services</title>
      </Head>
      <Banner
        image={"communion.jpg"}
        title={"Services"}
        isResponsive
        position="center"
      />
      <List />
    </>
  );
};

export default Services;
