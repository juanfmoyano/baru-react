import React, { Component } from "react";

import { QUIENES_SOMOS } from "utils/constants";
import { transformObjectToArray } from "utils/helpers/objectsHelper";

import LogosList from "./LogosList/LogosList";

import "./Presentation.scss";

class Presentation extends Component {
  render() {
    const logosList = transformObjectToArray(QUIENES_SOMOS.presentation.secondaryLogos);
    return (
      <section className="Presentation">
        <div className="Content">
          <img
            className="Content__Logo"
            src={QUIENES_SOMOS.presentation.mainLogo}
            alt="Baru Logo"
          />
          <p className="Content__Title">
            {" "}
            {QUIENES_SOMOS.presentation.slogan}{" "}
          </p>
          <LogosList logos={logosList} />
        </div>
      </section>
    );
  }
}

export default Presentation;
