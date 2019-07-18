import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./SideMenuToggle.scss";

const sideMenuToggle = props => {
  return (
    <div className="SideMenuToggle" onClick={() => props.openMenu()}>
      <FontAwesomeIcon icon={faBars} size={'2x'} />
    </div>
  );
};

export default sideMenuToggle;
