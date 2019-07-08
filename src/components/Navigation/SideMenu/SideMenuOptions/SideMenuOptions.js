import React, { Component } from "react";

import SideMenuItem from "../SideMenuItem/SideMenuItem";

import "./SideMenuOptions.scss";

class SideMenuOptions extends Component {
  getOptions() {
    return this.props.options.map(menuOption => (
      <SideMenuItem {...menuOption} key={menuOption.path} onClick={this.props.closeMenu} />
    ));
  }
  render() {
    return <div className="SideMenuOptions"> {this.getOptions()} </div>;
  }
}

export default SideMenuOptions;
