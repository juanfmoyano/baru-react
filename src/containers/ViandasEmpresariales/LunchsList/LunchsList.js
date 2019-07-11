import React, { Component } from "react";

import LunchItem from "./LunchItem/LunchItem";

import "./LunchsList.scss";

class LunchsList extends Component {
  getLunchs() {
    return this.props.lunchs.map(lunch => (
      <LunchItem key={lunch.title} {...lunch} backgroundColor="green" />
    ));
  }

  render() {
    return <div className="LunchsList">{this.getLunchs()}</div>;
  }
}

export default LunchsList;
