import React, { Component } from "react";

import NavItem from "./NavItem/NavItem";

import "./Navbar.scss";

class Navbar extends Component {
  createNavItems() {
    return this.props.options.map(option => (
      <NavItem key={option.label} link={option.path} exact={option.exact}>
        {option.label}
      </NavItem>
    ));
  }
  render() {
    return <div className="Navbar"> {this.createNavItems()} </div>;
  }
}

export default Navbar;
