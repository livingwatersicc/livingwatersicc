import { Banner } from "components/banner";
import { Journey } from "scenes/about/journey";
const OurJourney = () => {
  return (
    <>
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
