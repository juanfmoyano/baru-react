import React, { Component } from "react";

import { QUIENES_SOMOS } from "utils/constants";

import OrganizationCardsList from "./OrganizationCards/OrganizationCardsList";

import "./Organization.scss";

class Organization extends Component {
  getCards() {
    const cards = QUIENES_SOMOS.organization.cards;
    const cardsArray = [];
    Object.keys(cards).forEach(card => {
      cardsArray.push(cards[card]);
    });
    return cardsArray;
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
