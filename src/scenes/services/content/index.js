import { Media } from "components/media";
import { Heading } from "components/typography";
import { Wrapper } from "components/wrapper";

export const Content = () => {
  return (
    <>
      <Wrapper isGrayBg>
        <Heading>What to expect in a Sunday service?</Heading>
        <p>
          Our service typically includes Praise and Worship, Intercessory
          prayers, Word of God and fellowship.
        </p>
        <Media image={"praying.jpg"} title={"Praise and worship"}>
          <p>
            Praise and worship are vital parts of the service at Living Waters
            Church. Every true believer is engaged in spiritual warfare, whether
            they recognise it or not. Praise is one of the greatest weapons God
            has placed in our hands, and we are called to use it in all the
            spiritual war that we are facing faithfully and effectively (2
            Chronicles 20:21-22).
          </p>
          <p>
            Worship, on the other hand, is an act of humility—laying aside our
            titles and achievements, submitting to God and honouring Him for who
            He is and all He has done (John 4:24). During this time, worshippers
            are exhorted through the Word and encouraged in their walk with God.
          </p>
        </Media>

        <Media image={"bible.jpg"} title={"Word of God"}>
          <p>
            The preaching of God's Word is another vital part of our service,
            designed to correct, rebuke, and encourage through careful
            instruction (2 Timothy 4:2). We encourage you to bring your personal
            Bible to mark and take notes. If you don't have one, we will be
            happy to arrange one for your personal use.
          </p>
        </Media>
        <Media image={"fellowship.jpg"} title={"Fellowship"}>
          <p>
            At the end of the service, there will be a time for fellowship with
            fellow believers to encourage, support, and pray for one another
            (Acts 2:42, Hebrews 10:25, 1 John 1:7).
          </p>
        </Media>
      </Wrapper>
    </>
  );
};
