import { Banner } from "components/banner";
import { ContactMap } from "scenes/contact";

const Contact = () => {
  return (
    <>
      <Banner image={"water-church.jpg"} title={"Contact us"} isResponsive />

      <ContactMap />
    </>
  );
};

export default Contact;
