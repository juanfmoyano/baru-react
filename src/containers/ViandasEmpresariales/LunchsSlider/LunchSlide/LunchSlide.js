import React from "react";

import "./LunchSlide.scss";

const lunchSlide = props => {
  return props.active ? (
    <div className="LunchSlide">
      <img className="LunchSlide__Image" src={props.image} alt="Launch type" />
    </div>
  ) : null;
};

export default lunchSlide;
