import React from 'react';
import "./trust1.css"

const Trust1 = (props) => {

    let containerContent;

    if (props){
        containerContent = props.data.map((item, index) => {
            return (
                <div key={index}>
                    {
                        item.texts.map((info, index) => {
                            return (
                                <h4 key={index} className={info.name}>{info.value}</h4>
                            )
                        })
                    }
                </div>
            )
        });
    }

    return (
        <div className={"quote-container"}>
            {containerContent}
        </div>
    );
};

export default Trust1;