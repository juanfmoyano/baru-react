import React, { Component } from "react";
import "./QuienesSomos.scss";

import background from "assets/background/background1.jpg";

class QuienesSomos extends Component {
  render() {
    return (
      <div className="QuienesSomos">
        <img className="Image" src={background} alt="Background" />
      </div>
    );
  }
}

export default QuienesSomos;
