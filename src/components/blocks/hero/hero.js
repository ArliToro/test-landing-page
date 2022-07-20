import React from 'react';
import './hero.css'

const Hero = (props) => {

    let texts;
    let image;

    if (props) {
        texts = props.data[0].texts.map((item, index) => {
            if (item.type === "TEXT_FIELD" && item.name === "HEADER") {
                return (
                    <h4 key={index} className={item.name}>{item.value}</h4>
                )
            } else if (item.type === "TEXT_FIELD" && item.name === "SUB_HEADER") {
                return (
                    <h4 key={index} className={item.name}>{item.value}</h4>
                )
            } else if (item.type === "BUTTON") {
                return (
                    <button key={index}>{item.value}</button>
                )
            }
        })
        image = <img src={props.data[0].image.src} alt={props.data[0].image.name}/>
    }

    return (
        <div className={props ? props.layout : ""}>
            <div className={"text-containers"}>
                {texts}
            </div>
            {image}
        </div>
    );
};

export default Hero;