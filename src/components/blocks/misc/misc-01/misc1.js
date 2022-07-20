import React from 'react';
import "./misc1.css"

const Misc1 = (props) => {
    let containerContent;

    if (props) {
        containerContent = props.data.map((item, index) => {
            return (
                <div  key={index}>
                    {
                        item.texts.map((info, index) => {
                            return (
                                <div key={index}>
                                    {info.type === "BUTTON" ? <div key={index} className={"misc-button-01"}><button>{info.value}</button></div> :
                                        <h4 key={index} className={info.name}>{info.value}</h4>}
                                </div>
                            )
                        })
                    }
                </div>
            )
        });
    }

    return (
        <div className={"misc-container-01"}>
                <h1>FAQ</h1>
                {containerContent}
        </div>
    );
};

export default Misc1;