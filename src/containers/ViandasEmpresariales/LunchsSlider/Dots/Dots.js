import React, { Component } from "react";

import Dot from "./Dot/Dot";

import "./Dots.scss";

class Dots extends Component {
  createDots() {
    return this.props.dots.map((dot, dotIndex) => {
      const active = dot === this.props.activeDot;
      return (
        <Dot
          key={dot}
          active={active}
          clicked={this.props.dotAction}
          index={dotIndex}
        />
      );
    });
  }
  render() {
    return <div className="Dots">{this.createDots()}</div>;
  }
}

export default Dots;
