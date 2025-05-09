import { Banner } from "components/banner";
import { List } from "scenes/services/list";

const Services = () => {
  return (
    <>
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
