import React, { Component } from "react";

import Presentation from "./Presentation/Presentation";
import Organization from "./Organization/Organization";

class QuienesSomos extends Component {
  render() {
    return (
      <div className="QuienesSomos">
        <Presentation />
        <Organization />
      </div>
    );
  }
}

export default QuienesSomos;
