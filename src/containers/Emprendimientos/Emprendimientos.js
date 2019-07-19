import React, { Component } from "react";

import { SERVICIOS } from "utils/constants";
import { transformObjectToArray } from "utils/helpers/objectsHelper";

import ServicesList from "./ServicesList/ServicesList";

import "./Emprendimientos.scss";

class Emprendimientos extends Component {
  getServicesList() {
    return transformObjectToArray(SERVICIOS.services);
  }
  render() {
    return (
      <section className="Emprendimientos">
        <div className="Content">
          <h2 className="Content__Title"> {SERVICIOS.title}</h2>
          <div className="Content__Section">
            <ServicesList services={this.getServicesList()} />
          </div>
        </div>
      </section>
    );
  }
}

export default Emprendimientos;
