import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./OrganizationCard.scss";

const presentationCard = props => {
  return (
    <div className="OrganizationCard">
      <div className="OrganizationCard__Title">
        <p className="OrganizationCard__Label"> {props.title} </p>
        <FontAwesomeIcon
          className="OrganizationCard__Icon"
          icon={props.icon}
          size={"2x"}
          spin
        />
      </div>
      <p className="OrganizationCard__Description"> {props.description} </p>
    </div>
  );
};

export default presentationCard;
