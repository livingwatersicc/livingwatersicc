import { Subtitle } from "components/typography";
import { Word } from "components/verse";
import Container from "react-bootstrap/Container";

export const Vision = () => {
  return (
    <Container className="p-5">
      <Subtitle>Our Vision</Subtitle>

      <Word verse={"Isaiah 61:4"}>
        They will rebuild the ancient ruins and restore the places long
        devastated; they will renew the ruined cities that have been devastated
        for generations.
      </Word>
      <p>
        The vision for the Church is to reach the unreached. There are many
        people in this world, mostly not due to their own fault, who are
        brokenhearted, captive to something, and living in darkness. The answer
        to all their problems is 'Jesus' as it says in Acts 4:12 “Salvation is
        found in no one else, for there is no other name under heaven given to
        mankind by which we must be saved”. Our vision is therefore to proclaim
        the good news and transform lives through the truth as revealed in the
        holy scriptures.
      </p>
      <p>
        Our vision is not just to fill the seats in church, but to fill God's
        kingdom with lives transformed by the love and grace of God!
      </p>
    </Container>
  );
};
