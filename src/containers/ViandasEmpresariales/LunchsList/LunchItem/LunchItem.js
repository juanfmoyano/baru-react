import React, { Component } from "react";

import "./LunchItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class LunchItem extends Component {
  state = {
    detailsOpen: false
  };
  onMouseEnterHandler = () => {
    this.setState({ detailsOpen: true });
  };

  onMouseLeaveHandler = () => {
    this.setState({ detailsOpen: false });
  };

  render() {
    return (
      <div
        className="LunchItem"
        onMouseLeave={this.onMouseLeaveHandler}
        onMouseEnter={this.onMouseEnterHandler}
      >
        <div className="LunchItem__Icon">
          <FontAwesomeIcon icon={this.props.icon} />
        </div>
        <p className="LunchItem__Title"> {this.props.title} </p>
        {this.state.detailsOpen ? (
          <p className="LunchItem__Description"> {this.props.description} </p>
        ) : null}
      </div>
    );
  }
}

export default LunchItem;
