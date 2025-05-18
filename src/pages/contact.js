import Head from "next/head";

import { Banner } from "components/banner";
import { ContactMap } from "scenes/contact";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Banner image={"water-church.jpg"} title={"Contact us"} isResponsive />

      <ContactMap />
    </>
  );
};

export default Contact;
