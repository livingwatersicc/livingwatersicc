import {
  faChildren,
  faChurch,
  faClock,
  faHandHoldingHeart,
  faHandsHolding,
  faHandsPraying,
  faHeart,
  faMapLocation,
  faPlaceOfWorship,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";
import { Stack } from "react-bootstrap";

import { Heading } from "components/typography";
import { Wrapper } from "components/wrapper";

import styles from "./list.module.scss";

const services = [
  {
    title: "Sunday service",
    frequency: "Weekly",
    timing: "Sundays 5.00 PM to 6.45 PM",
    location: (
      <div>
        Church of Christ building{" "}
        <span className="text-nowrap">(1 Saint Andrews Street, Dunedin)</span>
      </div>
    ),
    icon: faChurch,
    subIcon: {
      icon: faHandsPraying,
      transform: { x: 10, y: 15 },
    },
  },
  {
    title: "Youth fellowship",
    frequency: "Fortnightly",
    timing: "Fridays 5.00 PM to 6.30 PM",
    location: "contact info.lwicc@gmail.com for venue information",
    icon: faChurch,
    subIcon: {
      icon: faChildren,
      transform: { x: 10, y: 13 },
    },
  },
  {
    title: "Women's fellowship",
    frequency: "Fortnightly",
    timing: "Saturdays 4.00 PM to 6.00 PM",
    location: "contact info.lwicc@gmail.com for venue information",
    icon: faPlaceOfWorship,
    subIcon: {
      icon: faHandsHolding,
      transform: { x: 10, y: 13 },
    },
  },
  {
    title: "Intercessory prayers",
    frequency: "Fortnightly",
    timing: "On a weekday which moves around houses",
    location: "contact info.lwicc@gmail.com for venue information",
    icon: faPlaceOfWorship,
    subIcon: {
      icon: faHandHoldingHeart,
      transform: { x: 10, y: 10 },
    },
  },
];

export const List = ({ showHEading = false }) => {
  return (
    <Wrapper>
      {showHEading && (
        <Heading className="text-center mb-5 mt-0">Services</Heading>
      )}
      <div className={styles.services}>
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              delay: idx * 0.3,
              scale: {
                type: "spring",
                visualDuration: 0.3,
                bounce: 0.5,
                delay: idx * 0.3,
              },
            }}
            className={styles.service}>
            <div className={styles.image}>
              <span className="fa-layers fa-fw">
                <FontAwesomeIcon
                  className="text-warning"
                  icon={service.icon}
                  size="2x"
                />
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-danger"
                  {...service.subIcon}
                />
              </span>
            </div>
            <div className={styles.text}>
              <figure className="m-0">
                <blockquote className="blockquote">
                  <p>{service.title}</p>
                </blockquote>
                <figcaption className="blockquote-footer mb-0">
                  {service.frequency}
                </figcaption>
              </figure>

              <Stack
                className={"small align-items-start"}
                direction="horizontal">
                <FontAwesomeIcon
                  icon={faClock}
                  className="me-2 mt-1 text-secondary"
                />
                {service.timing}
              </Stack>

              <Stack
                className={"small align-items-start"}
                direction="horizontal">
                <FontAwesomeIcon
                  icon={faMapLocation}
                  className="me-2 mt-1 text-secondary"
                />
                {service.location}
              </Stack>
            </div>
          </motion.div>
        ))}
      </div>
    </Wrapper>
  );
};
