import React, { Component } from "react";

import Logo from "./LogoItem/LogoItem";
import "./LogosList.scss";

class LogosList extends Component {
    createLogos(){
        return this.props.logos.map(logo => <Logo key={logo} />)
    }
  render() {
    return <div className="LogosList"> 
    
    </div>;
  };
};

export default LogosList;
