import React, { Component } from "react";

import { VIANDAS } from "utils/constants";
import { transformObjectToArray } from "utils/helpers/objectsHelper";

import { slidesArray } from "./constants";
import LunchsList from "./LunchsList/LunchsList";
import LunchsSlider from "./LunchsSlider/LunchsSlider";
import "./ViandasEmpresariales.scss";
import "./LunchsList/LunchsList";

class Viandas extends Component {
  getLunchs() {
    return transformObjectToArray(VIANDAS.lunchTypes);
  }

  render() {
    return (
      <section className="Viandas">
        <div className="Content">
          <h2 className="Content__Title"> {VIANDAS.title}</h2>
          <LunchsSlider
            slides={slidesArray}
            iconPrevious={VIANDAS.icons.backward}
            iconNext={VIANDAS.icons.forward}
          />
          <LunchsList lunchs={this.getLunchs()} />
        </div>
      </section>
    );
  }
}

export default Viandas;
