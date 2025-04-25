import Container from "react-bootstrap/Container";
import styles from "./list.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faLocation,
  faMap,
  faMapLocation,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    title: "Weekly service",
    timing: "Sundays 5pm to 6.45pm",
    location: "Church of Christ building (1 St Andrews Street, Dunedin)",
  },
  {
    title: "Fortnightly youth fellowship",
    timing: "Fridays 5pm to 6.30pm",
    location: "Church of Christ building (1 St Andrews Street, Dunedin)",
  },
  {
    title: "Fortnightly Women's fellowship",
    timing: "Saturdays 4pm to 6pm",
    location: "contact info.lwicc@gmail.com for venue information",
  },
  {
    title: "Fortnightly intercessory prayers",
    timing: "On a weekday which moves around houses",
    location: "contact info.lwicc@gmail.com for venue information",
  },
];
export const List = () => {
  return (
    <Container className="p-5">
      <div className={styles.services}>
        {services.map((service, idx) => (
          <div key={idx} className={`${styles.service} bg-light`}>
            <div className={"fw-bold"}>{service.title}</div>

            <div className={"small"}>
              <FontAwesomeIcon icon={faClock} className="me-2" />
              {service.timing}
            </div>

            <div className={"small"}>
              <FontAwesomeIcon icon={faMapLocation} className="me-2" />
              {service.location}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
