import React from 'react';
import "./how1.css";

const How1 = (props) => {

    let headerContent;
    let containerContent;
    let headerArray;
    let containerArray;

    if (props) {
        headerArray = [];
        containerArray = [];
        for (let i = 0; i < props.data.length; i++) {
            if (props.data[i].texts[0].name === "HEADER") {
                headerArray.push(props.data[i]);
            } else {
                containerArray.push(props.data[i]);
            }
        }
        headerContent = headerArray.map((item, index) => {
            return (
                <div key={index}>
                    {item.texts.map((info, index) => {
                        return (
                            <h4 key={index} className={info.name}>{info.value}</h4>
                        )
                    })}
                </div>
            )
        });
        containerContent = containerArray.map((item, index) => {
            return (
                <div key={index} className={"how-triple-container"}>
                    <img src={item.image.src}/>
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
        <div className={"how-it-works-wrapper"}>
            {headerContent}
            <div className={"how-triple-flex"}>
                {containerContent}
            </div>
        </div>
    );
};

export default How1;