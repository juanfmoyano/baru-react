import React from "react";
import { NavLink } from "react-router-dom";

import { getRoutesInfo } from "utils/routing/routesInfo";

import "./LogoItem.scss";

const logoItem = props => {
  return (
    <div className="LogoItem">
      <NavLink to={getRoutesInfo().nuestrosEmprendimientos.path}>
        <img className="LogoItem__Image" src={props.logo} alt="Logo" />
      </NavLink>
    </div>
  );
};

export default logoItem;
