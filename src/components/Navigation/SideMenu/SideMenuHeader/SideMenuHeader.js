import React, { Component } from "react";

import { CROSS_LABEL } from "utils/constants";

import "./SideMenuHeader.scss";

class SideMenuHeader extends Component {
  render() {
    return (
      <div className="SideMenuHeader">
        <div className="CloseButton" onClick={this.props.closeMenu}>
          {" "}
          {CROSS_LABEL}{" "}
        </div>
        <h2 className="Title"> {this.props.menuTitle} </h2>
      </div>
    );
  }
}

export default SideMenuHeader;
