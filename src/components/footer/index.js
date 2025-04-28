import { Button, Image, NavLink, Stack } from "react-bootstrap";
import styles from "./footer.module.scss";
import { Wrapper } from "components/wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faFacebookSquare,
  faInstagram,
  faSquareInstagram,
  faSquareXTwitter,
  faSquareYoutube,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const SOCIAL_MEDIA = [
  { icon: faFacebookF },
  { icon: faXTwitter },
  { icon: faYoutube },
  { icon: faInstagram },
];

export const Footer = () => {
  return (
    <Wrapper className=" pt-5 pb-5">
      <div className={styles.footer}>
        <div className={styles.content}>
          <Stack direction="horizontal" gap={2}>
            {SOCIAL_MEDIA.map((media, idx) => (
              <FontAwesomeIcon key={idx} size="1x" icon={media.icon} />
            ))}
          </Stack>
          <Stack direction="horizontal" gap={2} className="flex-wrap">
            <NavLink href="/services" variant="outline-light" size="sm">
              Services
            </NavLink>
            |
            <NavLink
              href="/statement-of-faith"
              variant="outline-light"
              size="sm"
            >
              Statement of faith
            </NavLink>
            |
            <NavLink href="/contact" variant="outline-light" size="sm">
              Contact
            </NavLink>
          </Stack>
        </div>
        <div className={styles.logo}>
          <Image src="logo-white.png" alt="png logo" height={70} />
        </div>
      </div>
      <div className="small text-light text-center pt-3 border-top mt-3">
        Copyright © {new Date().getFullYear()} Living Waters International
        Christian Christ. All rights reserved.
      </div>
    </Wrapper>
  );
};
