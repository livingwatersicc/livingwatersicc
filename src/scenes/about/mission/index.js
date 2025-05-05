import { Reference, Word } from "components/verse";
import { Wrapper } from "components/wrapper";

export const Mission = () => {
  return (
    <Wrapper>
      <p>
        The mission of the Living Waters Church is to inspire the believers to
        deeply study God’s Word, inviting the Holy Spirit’s transformative work
        through a growing personal relationship with God.
      </p>
      <p>
        The Lord says in{" "}
        <Reference
          verse={
            <>
              “My people have committed two sins: They have forsaken me, the
              spring of living water, and have dug their own cisterns, broken
              cisterns that cannot hold water.“
            </>
          }>
          Jeremiah 2: 13
        </Reference>
        ,{" "}
        <em>
          My people have committed two sins: They have forsaken me, the spring
          of living water, and have dug their own cisterns, broken cisterns that
          cannot hold water
        </em>
        . The Word of God cannot be understood by mere intellectual capability
        <em>(own cisterns, broken cisterns that cannot hold water)</em> but by
        the revelation of the Holy Spirit <em>(the spring of living water)</em>{" "}
        to the humble{" "}
        <Reference
          verse={
            <>
              At that time Jesus said, “I praise you, Father, Lord of heaven and
              earth, because you have hidden these things from the wise and
              learned, and revealed them to little children.
            </>
          }>
          (Matt 11:25)
        </Reference>
        .
      </p>
      <p>Jesus said to the Samaritan woman at the well,</p>
      <Word verse={"John 4: 10"}>
        If you knew the gift of God and who it is that asks you for a drink, you
        would have asked him and he would have given you living water.
      </Word>
      <p>Furthermore he said,</p>
      <Word verse={"John 4:13"}>
        Indeed, the water I give them will become in them a spring of water
        welling up to eternal life .
      </Word>
      <p>
        It is God’s sovereign will that His children walk in the fullness of the
        freedom granted through Christ. Yet, numerous believers continue to live
        in bondage to entrenched sinful & selfish behaviors and the traditions
        of men. This spiritual captivity often stems from a shallow and
        inattentive engagement with Scripture, which hinders the transformative
        work of the Holy Spirit through the revealed Word.
      </p>
      <p>
        The mission of the Living Waters Church is to inspire the believers to
        deeply study God’s Word, inviting the Holy Spirit’s transformative work
        through a growing relationship with God.
      </p>
      <p>
        As we earnestly devote ourselves to the diligent study of God's Word,
        the truth it imparts will progressively sanctify and liberate us{" "}
        <Reference
          verse={
            <>Then you will know the truth, and the truth will set you free.”</>
          }>
          (John 8:32)
        </Reference>
        , bringing freedom to every area of our lives in accordance with His
        divine purpose.
      </p>
    </Wrapper>
  );
};
