import React from "react";

const believes = [
  "The word of God is the supreme authority - above all traditions and any man's words. The Bible (66 books) is the inspired and infallible Word of God.",
  "There is one true God who exists eternally in three Persons: the Father, the Son, and the Holy Spirit. Each of them are co-equal and co-eternal",
  "Jesus Christ, God revealed in the flesh, is the only begotten Son of God and God the Son from eternity. We affirm His virgin birth, sinless life, sacrificial death, bodily resurrection and His return in power and glory.",
  "God created man in His own image and He created them as male & female. Marriage is a God ordained covenantal relationship between one man and one woman.",
  "All humans are spiritually dead in their sin and completely lost, and the only way to receive forgiveness is through repentance and faith in the death and resurrection of our Lord Jesus Christ.",
  " Water baptism of a believer and the Lord's Supper are the only sacraments of the new covenant Church.",
  "A believer must be continually filled with the Holy Spirit to have the power to witness for Christ, both through actions and words. ",
  "The righteous will be raised to eternal life with God, while the unrighteous will be raised to eternal separation from Him.",
];
export const Believes = () => {
  return (
    <div className="pt-5 pb-5 ps-4 pe-5">
      <div className="h2 text-center mb-4">What do we believe?</div>
      <ol>
        {believes.map((believe, idx) => (
          <li className="mb-3" key={idx}>
            {believe}
          </li>
        ))}
      </ol>
    </div>
  );
};
