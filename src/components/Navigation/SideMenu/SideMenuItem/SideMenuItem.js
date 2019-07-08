import React from "react";
import { NavLink } from "react-router-dom";

import "./SideMenuItem.scss";

const sideMenuItem = props => {
  return (
    <div className="SideMenuItem">
      <NavLink to={props.path} onClick={props.onClick}> {props.label} </NavLink>
    </div>
  );
};

export default sideMenuItem;
