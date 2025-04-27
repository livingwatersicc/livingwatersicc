import { Banner } from "components/banner";
import { Content } from "scenes/services/content";
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
      <Content />
    </>
  );
};

export default Services;
