import React, { Component } from "react";

// Components
import SideMenuHeader from "./SideMenuHeader/SideMenuHeader";
import SideMenuOptions from "./SideMenuOptions/SideMenuOptions";

import { SIDEMENU_TITLE } from "utils/constants";
import "./SideMenu.scss";

class SideMenu extends Component {
  render() {
    const className = this.props.open ? "SideMenu" : "SideMenu Inactive";
    return (
      <div className={className}>
        <SideMenuHeader closeMenu={this.props.closeMenu} menuTitle={SIDEMENU_TITLE}/>
        <SideMenuOptions closeMenu={this.props.closeMenu} options={this.props.options} />
      </div>
    );
  }
}

export default SideMenu;
