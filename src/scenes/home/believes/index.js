import { Heading } from "components/typography";
import Link from "next/link";

const believes = [
  {
    text: (
      <p>
        The word of God is the supreme authority - above all traditions and any
        man's words. The Bible (66 books) is the inspired and infallible Word of
        God.
      </p>
    ),
  },
  {
    text: (
      <p>
        There is one true God who exists eternally in three Persons: the Father,
        the Son, and the Holy Spirit. Each of them are co-equal and co-eternal
      </p>
    ),
  },
  {
    text: (
      <p>
        Jesus Christ, God revealed in the flesh, is the only begotten Son of God
        and God the Son from eternity. We affirm His virgin birth, sinless life,
        sacrificial death, bodily resurrection and His return in power and
        glory.
      </p>
    ),
  },
  {
    text: (
      <p>
        God created man in His own image and He created them as male & female.
        Marriage is a God ordained covenantal relationship between one man and
        one woman.
      </p>
    ),
  },
  {
    text: (
      <p>
        All humans are spiritually dead in their sin and completely lost, and
        the only way to receive forgiveness is through repentance and faith in
        the death and resurrection of our Lord Jesus Christ.
      </p>
    ),
  },
  {
    text: (
      <p>
        Water baptism of a believer and the Lord's Supper are the only
        sacraments of the new covenant Church.
      </p>
    ),
  },
  {
    text: (
      <p>
        A believer must be continually filled with the Holy Spirit to have the
        power to witness for Christ, both through actions and words.{" "}
      </p>
    ),
  },
  {
    text: (
      <p>
        The righteous will be raised to eternal life with God, while the
        unrighteous will be raised to eternal separation from Him.
      </p>
    ),
  },
];
export const Believes = () => {
  return (
    <>
      <Heading className="text-center">What do we believe?</Heading>
      <div className="text-center mb-4 small text-secondary">
        Below is a summary of our beliefs. Please click{" "}
        <Link href="/statement-of-faith">here</Link> for our detailed statement
        of faith.
      </div>
      <ol>
        {believes.map(({ text }, idx) => (
          <li className="mb-3" key={idx}>
            {text}
          </li>
        ))}
      </ol>
    </>
  );
};
