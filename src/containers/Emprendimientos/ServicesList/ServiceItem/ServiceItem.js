import React from "react";

import "./ServiceItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faClock,
  faMapMarkerAlt,
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const serviceItem = (props) => {
  return (
    <div className="ServiceItem">
      <div className="ServiceItem__Logo">
        <img className="ServiceItem__Logo--Image" alt="Logo" src={props.logo} />
      </div>
      <div className="ServiceItem__Details">
        <div className="ServiceItem__Description">
          <div className="ServiceItem__Text InfoText">{props.description}</div>
          {props.social ? (
            <div className="ServiceItem__Social">
              {props.social.facebook ? (
                <>
                  <div className="ServiceItem__Social--Container">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="ServiceItem__Social--Facebook InfoText"
                    />
                    <a href={props.social.facebook.link} className="SocialLink">
                      <div className="InfoText">
                        {props.social.facebook.label}
                      </div>
                    </a>
                    <FontAwesomeIcon
                      icon={faArrowCircleLeft}
                      className="ServiceItem__Social--Facebook InfoText"
                    />
                  </div>
                </>
              ) : null}

              <div className="ServiceItem__Social--Container">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="ServiceItem__Social--Instagram InfoText"
                />
                <a href={props.social.instagram.link} className="SocialLink">
                  <div className="InfoText">{props.social.instagram.label}</div>
                </a>
                <FontAwesomeIcon
                  icon={faArrowCircleLeft}
                  className="ServiceItem__Social--Instagram InfoText"
                />
              </div>
            </div>
          ) : null}
        </div>
        <div className="ServiceItem__Info">
          {props.info && props.info.address ? (
            <div className="ServiceItem__Info--Address InfoText">
              <FontAwesomeIcon icon={faMapMarkerAlt} /> {props.info.address}
            </div>
          ) : null}
          {props.info && props.info.schedule ? (
            <div className="ServiceItem__Info--Schedule InfoText">
              <FontAwesomeIcon icon={faClock} /> {props.info.schedule}
            </div>
          ) : null}
          {props.info && props.info.phone ? (
            <div className="ServiceItem__Info--Phone InfoText">
              <FontAwesomeIcon icon={faPhone} /> {props.info.phone}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default serviceItem;
