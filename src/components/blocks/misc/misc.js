import React from 'react';
import Misc1 from "./misc-01/misc1";

const Misc = (props) => {
    let container;

    if (props) {
        switch (props.layout) {
            case 'MISC_01_FAQ':
                container = <Misc1 data={props.data}/>
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

export default Misc;