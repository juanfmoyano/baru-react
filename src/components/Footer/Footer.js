import React, { Component } from "react";

import { FOOTER_LABELS } from "utils/constants";

import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="Text"> {FOOTER_LABELS.copyright} </div>
        <div className="Text"> {FOOTER_LABELS.info} </div>
        <div className="Text"> {FOOTER_LABELS.design} </div>
      </div>
    );
  }
}

export default Footer;
