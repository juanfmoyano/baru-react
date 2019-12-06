import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Area.scss";

class Area extends Component {
  render() {
    const classes = `Area ${this.props.reverse ? "Reverse" : ""}`;
    return (
      <div className={classes}>
        <div className="Area__Icon">
          <FontAwesomeIcon icon={this.props.icon} />
        </div>
        <div className="Area__Details">
          <h2 className="Area__Title"> {this.props.title} </h2>
          <p className="Area__Description"> {this.props.description} </p>
          <div className="Area__Contacto"> {this.props.contact} </div>
        </div>
      </div>
    );
  }
}

export default Area;
