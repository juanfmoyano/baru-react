import React, { Component } from "react";

// Components
import Navbar from "components/Navigation/Navbar/Navbar";
import SideMenuToggle from "components/Navigation/SideMenu/SideMenuToggle/SideMenuToggle";
import Logo from "components/UI/Logo/Logo";
import BaruLogo from "assets/logo/baru.png";

import { HEADER_LABELS } from "utils/constants";

import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header__Main">
          <Logo imageSrc={BaruLogo} />
          <div className="Info"> {HEADER_LABELS.title} </div>
          <SideMenuToggle openMenu={this.props.openMenu} />
        </div>
        <Navbar options={this.props.navOptions} />
      </div>
    );
  }
}

export default Header;
