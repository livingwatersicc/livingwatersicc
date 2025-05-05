import { Banner } from "components/banner";
import { LeadMinister } from "scenes/about/minister";

const Team = () => {
  return (
    <>
      <Banner
        image={"bible.jpg"}
        title={"Our team"}
        isResponsive
        position="top"
      />
      <LeadMinister />
    </>
  );
};

export default Team;
