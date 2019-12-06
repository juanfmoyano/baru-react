import React, { Component } from "react";

import LogoItem from "./LogoItem/LogoItem";
import "./LogosList.scss";

class LogosList extends Component {
  createLogos() {
    return this.props.logos.map(logo => <LogoItem key={logo} logo={logo} />);
  }
  render() {
    return <div className="LogosList">{this.createLogos()}</div>;
  }
}

export default LogosList;
