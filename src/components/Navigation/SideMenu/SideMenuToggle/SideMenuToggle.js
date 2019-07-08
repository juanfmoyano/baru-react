import React from 'react';

import './SideMenuToggle.scss';;

const sideMenuToggle = (props) => {  
    return (
    <div className="SideMenuToggle" onClick={() => props.openMenu()}>
        <div className="ToggleElement"></div>
        <div className="ToggleElement"></div>
        <div className="ToggleElement"></div>
    </div>
)};

export default sideMenuToggle;