import React from "react";
import { NavLink } from "react-router-dom";

import './NavItem.scss';

const navItem = props => (
  <div className="NavItem">
    <NavLink to={props.link} exact={props.exact}>
      {props.children}
    </NavLink>
  </div>
);

export default navItem;
