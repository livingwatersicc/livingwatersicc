import { Amit } from "./amit";
import { Prasath } from "./prasath";
import { Tony } from "./tony";

const ROLE = {
  MINISTER: "Lead minister",
  ELDER: "Elder",
};

export const team = [
  {
    slug: "prasath",
    name: "Prasath Jayakaran",
    thumbnail: "/people/minister1-thumbnail.jpeg",
    role: ROLE.MINISTER,
    content: <Prasath />,
  },
  {
    slug: "amit",
    name: "Amit Ingle",
    thumbnail: "/people/elder1-thumbnail.jpeg",

    role: ROLE.ELDER,
    content: <Amit />,
  },
  {
    slug: "tony",
    name: "Tony Savarimuthu",
    thumbnail: "/people/elder2-thumbnail.jpeg",

    role: ROLE.ELDER,
    content: <Tony />,
  },
];
