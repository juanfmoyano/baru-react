import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./SideMenuHeader.scss";

class SideMenuHeader extends Component {
  render() {
    return (
      <div className="SideMenuHeader">
        <div className="CloseButton" onClick={this.props.closeMenu}>
          <FontAwesomeIcon icon={this.props.closeMenuIcon} />
        </div>
        <h2 className="Title"> {this.props.menuTitle} </h2>
      </div>
    );
  }
}

export default SideMenuHeader;
