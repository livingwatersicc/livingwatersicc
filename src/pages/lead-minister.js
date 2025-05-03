import { Banner } from "components/banner";
import { Minister } from "scenes/about/minister";

const LeadMinister = () => {
  return (
    <>
      <Banner
        image={"bible.jpg"}
        title={"Lead minister"}
        isResponsive
        position="top"
      />
      <Minister />
    </>
  );
};

export default LeadMinister;
