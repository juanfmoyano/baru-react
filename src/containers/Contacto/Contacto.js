import React, { Component } from "react";
import "./Contacto.scss";

import background from "assets/background/background4.jpg";

class Contacto extends Component {
  render() {
    return (
      <div className="Contacto">
        <img className="Image" src={background} alt="Background" />
      </div>
    );
  }
}

export default Contacto;
