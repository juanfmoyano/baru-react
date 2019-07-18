import React, { Component } from "react";
import "./Contacto.scss";

import { CONTACTO } from "utils/constants";

import { transformObjectToArray } from "utils/helpers/objectsHelper";

import Area from "./Area/Area";

class Contacto extends Component {
  createAreas() {
    const areasArray = transformObjectToArray(CONTACTO.sections);
    return areasArray.map(area => <Area key={area.title} {...area} />);
  }
  render() {
    return (
      <section className="Contacto">
        <div className="Content">
          <h2 className="Content__Title"> {CONTACTO.title}</h2>
          <div className="Content__Section">{this.createAreas()}</div>
        </div>
      </section>
    );
  }
}

export default Contacto;
