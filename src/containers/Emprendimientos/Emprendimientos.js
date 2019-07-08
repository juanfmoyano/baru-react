import React, { Component } from "react";
import "./Emprendimientos.scss";

import background from "assets/background/background2.jpg";

class Emprendimientos extends Component {
  render() {
    return (
      <div className="Emprendimientos">
        <img className="Image" src={background} alt="Background" />
      </div>
    );
  }
}

export default Emprendimientos;
