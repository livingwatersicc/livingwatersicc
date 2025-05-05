import { Reference } from "components/verse";

export const Intro = () => {
  return (
    <div>
      <p>
        Welcome to the Living Waters community! We are glad you are here and we
        wish you grace and peace in the name of our Lord and Saviour{" "}
        <strong>Jesus Christ</strong>.
      </p>
      <p>
        We are a non-denominational, Bible believing christian community who
        seek to follow <strong>Christ</strong>.
      </p>
      <p>
        Regardless of language, tribe, race, or nationality, we gather together
        as one family to worship the one true Triune <strong>God</strong>. As
        Scripture reminds us in{" "}
        <Reference
          verse={
            <>
              9 After this I looked, and there before me was a great multitude
              that no one could count, from every nation, tribe, people and
              language, standing before the throne and before the Lamb. They
              were wearing white robes and were holding palm branches in their
              hands. 10 And they cried out in a loud voice: “Salvation belongs
              to our God, who sits on the throne, and to the Lamb.”
            </>
          }>
          Revelation 7:9-10
        </Reference>
        , people from every nation, tribe, and tongue will stand before His
        throne, united in worship.
      </p>
      <p>
        Here, we celebrate the unity we have in <strong>Christ!</strong>
      </p>
      <p>
        The church is run by a set of believing volunteers who are in various
        secular jobs. There are no paid staff who work for the church.
      </p>
    </div>
  );
};
