import React from "react";

import "./LunchSlide.scss";

const lunchSlide = props => {
  const activeClass = props.active ? "LunchSlide Active" : "LunchSlide";
  return (
    <div className={activeClass}>
      <img className="LunchSlide__Image" src={props.image} alt="Launch type" />
    </div>
  );
};

export default lunchSlide;
