import React, { Component } from "react";

import { QUIENES_SOMOS } from "utils/constants";

import "./Presentation.scss";

class Presentation extends Component {
  render() {
    return (
      <section className="Presentation">
        <div className="Content">
          <img
            className="Content__Logo"
            src={QUIENES_SOMOS.presentation.logo}
            alt="Baru Logo"
          />
          <p className="Content__Title">
            {" "}
            {QUIENES_SOMOS.presentation.slogan}{" "}
          </p>
        </div>
      </section>
    );
  }
}

export default Presentation;
