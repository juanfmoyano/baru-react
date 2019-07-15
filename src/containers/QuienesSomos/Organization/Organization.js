import React, { Component } from "react";

import { QUIENES_SOMOS } from "utils/constants";
import { transformObjectToArray } from "utils/helpers/objectsHelper";

import OrganizationCardsList from "./OrganizationCards/OrganizationCardsList";

import "./Organization.scss";

class Organization extends Component {
  getCards() {
    return transformObjectToArray(QUIENES_SOMOS.organization.cards);
  }
  render() {
    return (
      <section className="Organization">
        <div className="Content">
          <div className="Content--left">
            <h2 className="Content__Title">
              {" "}
              {QUIENES_SOMOS.organization.title}{" "}
            </h2>
            <p className="Content__Description">
              {QUIENES_SOMOS.organization.description}
            </p>
          </div>
          <div className="Content--right">
            <OrganizationCardsList cards={this.getCards()} />
          </div>
        </div>
      </section>
    );
  }
}

export default Organization;
