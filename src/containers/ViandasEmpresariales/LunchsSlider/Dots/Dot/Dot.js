import React from "react";

import "./Dot.scss";

const dot = props => {
  const activeClasses = props.active ? "Dot Active" : "Dot";
  return <div className={activeClasses} />;
};

export default dot;
