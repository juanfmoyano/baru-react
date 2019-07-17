import React, { Component } from "react";

import "./LunchItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class LunchItem extends Component {
  render() {
    return (
      <div className="LunchItem">
        <div className="LunchItem__Icon">
          <FontAwesomeIcon icon={this.props.icon} />
        </div>
        <p className="LunchItem__Title"> {this.props.title} </p>
        <p className="LunchItem__Description"> {this.props.description} </p>
      </div>
    );
  }
}

export default LunchItem;
