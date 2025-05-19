import Head from "next/head";

import { Banner } from "components/banner";
import { Statements } from "scenes/statement";

const Statement = ({ siteName }) => {
  return (
    <>
      <Head>
        <title>Statement of faith | {siteName}</title>
      </Head>
      <Banner
        image={"bible-leaf.jpg"}
        title={"Statement of faith"}
        isResponsive
        position="center"
      />
      <Statements />
    </>
  );
};

export default Statement;
