import React from 'react';
import Trust1 from "./trust-01/trust1";
import Trust2 from "./trust-02/trust2";
import Trust3 from "./trust-03/trust3";
import Trust4 from "./trust-04/trust4";

const Trust = (props) => {
    let container;

    if (props) {
        switch (props.layout) {
            case 'TRUST_01_SINGLEQUOTE':
                container = <Trust1 data={props.data}/>
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

export default Trust;