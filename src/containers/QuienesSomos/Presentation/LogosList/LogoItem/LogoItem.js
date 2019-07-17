import React from 'react';

import "./LogoItem.scss";

const logoItem = (props) => {
    return (<div className="LogoItem">
        <img className="LogoItem__Image" src={props.logo} alt="Logo"/>
    </div>)
};

export default logoItem;