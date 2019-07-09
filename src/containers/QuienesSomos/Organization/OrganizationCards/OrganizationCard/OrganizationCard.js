import React from "react";

import "./OrganizationCard.scss";

const presentationCard = props => {
  return (
    <div className="OrganizationCard">
      <div className="OrganizationCard__Title">
        <p className="OrganizationCard__Label"> {props.title} </p>
        <img className="OrganizationCard__Icon" src={props.image} alt="Card" />
      </div>
      <p className="OrganizationCard__Description"> {props.description} </p>
    </div>
  );
};

export default presentationCard;
