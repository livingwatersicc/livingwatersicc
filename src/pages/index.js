import { Banner } from "components/banner";
import { Wrapper } from "components/wrapper";
import { Believes } from "scenes/home/believes";
import { Intro } from "scenes/home/content";
import { List } from "scenes/services/list";

export default function Home() {
  return (
    <>
      <Banner
        image={"sea.jpg"}
        title={"Revelation 22:17"}
        subtitle={`The Spirit and the bride say, “Come!” And let the one who hears say,
            “Come!” Let the one who is thirsty come; and let the one who wishes
            take the free gift of the water of life.`}
      />

      <Wrapper>
        <Intro />
      </Wrapper>

      <Wrapper isGrayBg>
        <Believes />
      </Wrapper>

      <List showHEading />
    </>
  );
}
