import React from 'react';
import "./topNavigation.css"

const TopNavigation = (props) => {

    let layout;

    return (
        <div>
            <h1>{props.layout}</h1>
        </div>
    );
};

export default TopNavigation;