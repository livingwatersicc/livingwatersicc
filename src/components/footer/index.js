import { Image, NavLink, Stack } from "react-bootstrap";
import styles from "./footer.module.scss";
import { Wrapper } from "components/wrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

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
          <div className="d-flex flex-column w-100 gap-2 flex-md-row justify-content-start flex-grow-1">
            <NavLink
              as={Link}
              href="/services"
              variant="outline-light"
              size="sm"
            >
              Services
            </NavLink>
            <div className="d-none d-md-inline">|</div>
            <NavLink
              as={Link}
              href="/statement-of-faith"
              variant="outline-light"
              size="sm"
            >
              Statement of faith
            </NavLink>
            <div className="d-none d-md-inline">|</div>
            <NavLink
              as={Link}
              href="/contact"
              variant="outline-light"
              size="sm"
            >
              Contact
            </NavLink>
          </div>
        </div>
        <div className={styles.logo}>
          <Image src="logo-white.png" alt="png logo" height={70} />
        </div>
      </div>
      <div className="small text-light text-center pt-3 border-top mt-3">
        Copyright © {new Date().getFullYear()} Living Waters International
        Christian Church. All rights reserved.
      </div>
    </Wrapper>
  );
};
