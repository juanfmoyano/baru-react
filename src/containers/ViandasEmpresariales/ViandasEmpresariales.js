import React, { Component } from "react";
import "./ViandasEmpresariales.scss";

import background from "assets/background/background3.jpg";

class Viandas extends Component {
  render() {
    return (
      <div className="Viandas">
        <img className="Image" src={background} alt="Background" />
      </div>
    );
  }
}

export default Viandas;
