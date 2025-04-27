import { Banner } from "components/banner";
import { Title } from "components/typography";
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
      <Content />
      <List />
    </>
  );
};

export default Services;
