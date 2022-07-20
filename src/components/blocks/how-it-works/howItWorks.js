import React from 'react';
import How1 from "./how-01/how1";
import How2 from "./how-02/how2";
import How3 from "./how-03/how3";

const HowItWorks = (props) => {

    let container;

    if (props) {
        switch (props.layout) {
            case 'HIW_01_3STEPS':
                container = <How1 data={props.data}/>
                break;
            default:
                return null
        }
    }

    return (
        <>
            {container}
        </>
    );
};

export default HowItWorks;