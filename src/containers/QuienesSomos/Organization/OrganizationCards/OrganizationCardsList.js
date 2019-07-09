import React, { Component } from "react";

import OrganizationCard from "./OrganizationCard/OrganizationCard";

import "./OrganizationCardsList.scss";

class OrganizationCardsList extends Component {

  getCards() {
    return this.props.cards.map(card => <OrganizationCard key={card.title} {...card} />);
  }

  render() {
    return <div className="OrganizationCardsList">{this.getCards()}</div>;
  }
}

export default OrganizationCardsList;
