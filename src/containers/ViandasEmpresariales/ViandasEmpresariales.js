import React, { Component } from "react";
import "./ViandasEmpresariales.scss";

import "./LunchsList/LunchsList";

import { VIANDAS } from "utils/constants";
import { transformObjectToArray } from "utils/helpers/objectsHelper";

import LunchsList from "./LunchsList/LunchsList";
import LunchsSlider from "./LunchsSlider/LunchsSlider";

class Viandas extends Component {
  getLunchs() {
    return transformObjectToArray(VIANDAS.lunchTypes);
  }

  render() {
    const slidesArray = [
      "https://nishtischoice.com/wp-content/uploads/2017/12/shutterstock_375140833-1000x500.jpg",
      "https://www.epilepsysociety.org.uk/sites/default/files/diet.jpg",
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/701/6-2018-food-trends-bogus-blended-burger-1516384802.jpg?crop=1xw:0.786xh;center,top&resize=1200:*",
      "http://marypurdy.co/wp-content/uploads/2018/08/51-healthy-food.png"
    ];
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
