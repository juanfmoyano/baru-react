import React from "react";

import "./ServiceItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faClock,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";

import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const serviceItem = props => {
  return (
    <div className="ServiceItem">
      <div className="ServiceItem__Logo">
        <img className="ServiceItem__Logo--Image" alt="Logo" src={props.logo} />
      </div>
      <div className="ServiceItem__Details">
        <div className="ServiceItem__Description">
          <div className="ServiceItem__Text">{props.description}</div>
          <div className="ServiceItem__Social">
            <FontAwesomeIcon
              icon={faFacebook}
              className="ServiceItem__Social--Facebook"
            />{" "}
            {props.social.facebook}
            <br />
            <FontAwesomeIcon
              icon={faInstagram}
              className="ServiceItem__Social--Instagram"
            />{" "}
            {props.social.instagram}
          </div>
        </div>
        <div className="ServiceItem__Info">
          <div className="ServiceItem__Info--Address">
            <FontAwesomeIcon icon={faMapMarkerAlt} /> {props.info.address}
          </div>
          <div className="ServiceItem__Info--Schedule">
            <FontAwesomeIcon icon={faClock} /> {props.info.schedule}
          </div>
          <div className="ServiceItem__Info--Phone">
            <FontAwesomeIcon icon={faPhone} /> {props.info.phone}
          </div>
        </div>
      </div>
    </div>
  );
};

export default serviceItem;
