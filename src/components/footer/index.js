import {
  faFacebookSquare,
  faInstagram,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Image, NavLink, Stack } from "react-bootstrap";

import { Wrapper } from "components/wrapper";

import styles from "./footer.module.scss";

const SOCIAL_MEDIA = [
  { icon: faFacebookSquare, link: "https://www.facebook.com/lwicc.dunedin" },
  { icon: faXTwitter },
  { icon: faYoutube },
  { icon: faInstagram },
];

export const Footer = () => {
  return (
    <Wrapper className=" pt-5 pb-5">
      <div className={styles.footer}>
        <div className={styles.content}>
          <div className="d-flex flex-column w-100 gap-2 flex-md-row justify-content-start flex-grow-1">
            <Stack direction="horizontal" gap={2}>
              {SOCIAL_MEDIA.filter(media => !!media.link).map((media, idx) => (
                <Link key={idx} href={media.link || "/"} target="_blank">
                  <FontAwesomeIcon
                    size="1x"
                    className="text-light"
                    icon={media.icon}
                  />
                </Link>
              ))}
            </Stack>
            <div className="d-none d-md-inline">|</div>
            <NavLink
              as={Link}
              href="/services"
              variant="outline-light"
              size="sm">
              Services
            </NavLink>
            <div className="d-none d-md-inline">|</div>
            <NavLink
              as={Link}
              href="/statement-of-faith"
              variant="outline-light"
              size="sm">
              Statement of faith
            </NavLink>
            <div className="d-none d-md-inline">|</div>
            <NavLink
              as={Link}
              href="/contact"
              variant="outline-light"
              size="sm">
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
