import React from "react";
import './Logo.scss';

const logo = props => {
  return (
    <div className="Logo">
      <img className="Logo__Image" src={props.imageSrc} alt="Logo" />
    </div>
  );
};

export default logo;
