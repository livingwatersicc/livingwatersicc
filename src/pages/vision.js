import { Banner } from "components/banner";
import { Vision } from "scenes/about/vision";

const OurVision = () => {
  return (
    <>
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
