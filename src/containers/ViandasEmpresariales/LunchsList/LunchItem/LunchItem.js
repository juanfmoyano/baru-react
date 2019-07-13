import React from "react";

import "./LunchItem.scss";

const lunchItem = props => (
  <div className="LunchItem">
    <p className="LunchItem__Title"> {props.title} </p>
    <div className="LunchItem__Separator" />
    <p className="LunchItem__Description"> {props.description} </p>
  </div>
);

export default lunchItem;
