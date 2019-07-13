import React, { Component } from "react";

import { ICONS_LABELS } from "utils/constants";

import "./SideMenuHeader.scss";

class SideMenuHeader extends Component {
  render() {
    return (
      <div className="SideMenuHeader">
        <div className="CloseButton" onClick={this.props.closeMenu}>
          {" "}
          {ICONS_LABELS.cross}{" "}
        </div>
        <h2 className="Title"> {this.props.menuTitle} </h2>
      </div>
    );
  }
}

export default SideMenuHeader;
