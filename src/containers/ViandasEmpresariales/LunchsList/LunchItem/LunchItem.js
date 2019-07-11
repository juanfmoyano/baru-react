import React from "react";

import "./LunchItem.scss";

const lunchItem = props => (
  <div className="LunchItem">
    <p className="LunchItem__Title"> {props.title} </p>
    <div className="LunchItem__Separator">
      <div className="LunchItem__Separator--1" />
      <div className="LunchItem__Separator--2" />
      <div className="LunchItem__Separator--3" />
    </div>
    <p className="LunchItem__Description"> {props.description} </p>
  </div>
);

export default lunchItem;
