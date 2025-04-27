import Container from "react-bootstrap/Container";
import styles from "./list.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChurch,
  faClock,
  faMapLocation,
  faPlaceOfWorship,
} from "@fortawesome/free-solid-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core";

const services = [
  {
    title: "Sunday service",
    frequency: "Weekly",
    timing: "Sundays 5.00 pm to 6.45 pm",
    location: "Church of Christ building (1 St Andrews Street, Dunedin)",
    icon: faChurch,
  },
  {
    title: "Youth fellowship",
    frequency: "Fortnightly",
    timing: "Fridays 5.00 pm to 6.30 pm",
    location: "Church of Christ building (1 St Andrews Street, Dunedin)",
    icon: faChurch,
  },
  {
    title: "Women's fellowship",
    frequency: "Fortnightly",
    timing: "Saturdays 4.00 pm to 6.00 pm",
    location: "contact info.lwicc@gmail.com for venue information",
    icon: faPlaceOfWorship,
  },
  {
    title: "Intercessory prayers",
    frequency: "Fortnightly",
    timing: "On a weekday which moves around houses",
    location: "contact info.lwicc@gmail.com for venue information",
    icon: faPlaceOfWorship,
  },
];

export const List = () => {
  return (
    <Container className="p-5">
      <div className={styles.services}>
        {services.map((service, idx) => (
          <div key={idx} className={styles.service}>
            <div className={styles.image}>
              <FontAwesomeIcon color="#268dbc" icon={service.icon} size="3x" />
            </div>
            <div className={styles.text}>
              <figure className="m-0">
                <blockquote className="blockquote">
                  <p>{service.title}</p>
                </blockquote>
                <figcaption class="blockquote-footer mb-0">
                  {service.frequency}
                </figcaption>
              </figure>

              <div className={"small"}>
                <FontAwesomeIcon
                  icon={faClock}
                  className="me-2 text-secondary"
                />
                {service.timing}
              </div>

              <div className={"small"}>
                <FontAwesomeIcon
                  icon={faMapLocation}
                  className="me-2 text-secondary"
                />
                {service.location}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
