import React from "react";
import { NavLink } from "react-router-dom";

import "./SideMenuItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const sideMenuItem = props => {
  return (
    <div className="SideMenuItem">
      <div className="SideMenuItem__Icon">
        <FontAwesomeIcon icon={props.icon} />
      </div>
      <div className="SideMenuItem__Link">
        <NavLink to={props.path} onClick={props.onClick}>
          {" "}
          {props.label}{" "}
        </NavLink>
      </div>
    </div>
  );
};

export default sideMenuItem;
