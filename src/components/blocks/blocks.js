import React, {useEffect, useState} from 'react';
import  TopNavigation from "./top-navigation/topNavigation";
import  Hero from "./hero/hero";
import  HowItWorks from "./how-it-works/howItWorks";
import  Features from "./features/features";
import  Trust from "./trust/trust";
import  Pricing from "./pricing/pricing";
import  Misc from "./misc/misc";
import  Footer from "./footer/footer";

const Blocks = (props) => {

    let blockType;

    if (props.block) {
        switch (props.block) {
            case 'TOP_NAVIGATION':
                blockType = <TopNavigation layout={props.layout} data={props.data}/>;
                break;
            case 'HERO_BLOCK':
                blockType = <Hero layout={props.layout} data={props.data}/>;
                break;
            case 'HOW_BLOCK':
                blockType = <HowItWorks layout={props.layout} data={props.data}/>;
                break;
            case 'FEATURES_BLOCK':
                blockType = <Features layout={props.layout} data={props.data}/>;
                break;
            case 'QUOTE':
                blockType = <Trust layout={props.layout} data={props.data}/>;
                break;
            case 'PRICING_BLOCK':
                blockType = <Pricing layout={props.layout} data={props.data}/>;
                break;
            case 'MISC_BLOCK':
                blockType = <Misc layout={props.layout} data={props.data}/>;
                break;
            case 'FOOTER_BLOCK':
                blockType = <Footer layout={props.layout} data={props.data}/>;
                break;
            default:
                return null
        }
    }

    return (
        <div>
            {blockType}
        </div>
    );
};

export default Blocks;