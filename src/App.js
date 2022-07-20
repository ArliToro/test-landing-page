import logo from './logo.svg';
import './App.css';
import Blocks from "./components/blocks/blocks"
import {BrowserRouter, Route, Routes} from "react-router-dom";

let data = {
    "blocks": [
        {
            "orderNo": 1,
            "blockTypeEnum": "HERO_BLOCK",
            "blockNameEnum": "HERO_04_CENTERTEXT",
            "items": [
                {
                    "texts": [
                        {
                            "type": "TEXT_FIELD",
                            "name": "HEADER",
                            "value": "Banking for humans",
                            "label": "Headline"
                        },
                        {
                            "type": "TEXT_FIELD",
                            "name": "SUB_HEADER",
                            "value": "Meet the banking app on a mission to build products that level the financial playing field.",
                            "label": "Subtitle"
                        },
                        {
                            "type": "BUTTON",
                            "name": "MAIN_CTA",
                            "value": "Join Dave!",
                            "label": "Button title"
                        }
                    ],
                    "image": {
                        "name": "IMAGE",
                        "src": "https://landingpage-1kj.pages.dev/static/media/header-image.1100303f3a2b74ccdce1.png"
                    }
                }
            ]
        },
        {
            "orderNo": 2,
            "blockTypeEnum": "HOW_BLOCK",
            "blockNameEnum": "HIW_01_3STEPS",
            "items": [
                {
                    "texts": [
                        {
                            "type": "TEXT_FIELD",
                            "name": "HEADER",
                            "value": "How it works",
                            "label": "title"
                        },
                        {
                            "type": "TEXT_FIELD",
                            "name": "SUB_HEADER",
                            "value": "Show step by step how to get started",
                            "label": "Subtitle"
                        }
                    ]
                },
                {
                    "texts": [
                        {
                            "type": "TEXT_FIELD",
                            "name": "STEPS_HEADER",
                            "value": "First Step",
                            "label": "title"
                        },
                        {
                            "type": "TEXT_FIELD",
                            "name": "STEPS_DESCRIPTION",
                            "value": "At the beginning you have to signup and verify your account ...",
                            "label": "Subtitle"
                        }
                    ],
                    "image": {
                        "name": "IMAGE",
                        "src": "https://landingpage-1kj.pages.dev/static/media/duck.77f08ba65f1018aa2d97.png"
                    }
                },
                {
                    "texts": [
                        {
                            "type": "TEXT_FIELD",
                            "name": "STEPS_HEADER",
                            "value": "Second Step",
                            "label": "title"
                        },
                        {
                            "type": "TEXT_FIELD",
                            "name": "STEPS_DESCRIPTION",
                            "value": "At the beginning you have to signup and verify your account ...",
                            "label": "Subtitle"
                        }
                    ],
                    "image": {
                        "name": "STEPS_IMAGE",
                        "src": "https://landingpage-1kj.pages.dev/static/media/duck.77f08ba65f1018aa2d97.png"
                    }
                },
                {
                    "texts": [
                        {
                            "type": "TEXT_FIELD",
                            "name": "STEPS_HEADER",
                            "value": "Third Step",
                            "label": "Title"
                        },
                        {
                            "type": "TEXT_FIELD",
                            "name": "STEPS_DESCRIPTION",
                            "value": "At the beginning you have to signup and verify your account ...",
                            "label": "Subtitle"
                        }
                    ],
                    "image": {
                        "name": "STEPS_IMAGE",
                        "src": "https://landingpage-1kj.pages.dev/static/media/duck.77f08ba65f1018aa2d97.png"
                    }
                }
            ]
        },
        {
            "orderNo": 3,
            "blockTypeEnum": "HERO_BLOCK",
            "blockNameEnum": "HERO_02_RIGHTTEXT",
            "items": [
                {
                    "texts": [
                        {
                            "type": "TEXT_FIELD",
                            "name": "HEADER",
                            "value": "Need help covering a bill?",
                            "label": "Title"
                        },
                        {
                            "type": "TEXT_FIELD",
                            "name": "SUB_HEADER",
                            "value": "Meet the banking app on a mission to build products that level the financial playing field.",
                            "label": "Subtitle"
                        }
                    ],
                    "image": {
                        "src": "https://landingpage-1kj.pages.dev/static/media/phone.c30bec00c7a837274ffb.png"
                    }
                }
            ]

        },
        {
            "orderNo": 4,
            "blockTypeEnum": "QUOTE",
            "blockNameEnum": "TRUST_01_SINGLEQUOTE",
            "items": [
                {
                    "texts": [
                        {
                            "type": "TEXT_FIELD",
                            "name": "HEADER",
                            "value": "What people say about Dave",
                            "label": "Title"
                        },
                        {
                            "type": "TEXT_FIELD",
                            "name": "TRUST_BLOCK_QUOTE",
                            "value": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
                            "label": "Quote"
                        },
                        {
                            "type": "TEXT_FIELD",
                            "name": "TRUST_BLOCK_QUOTE_WRITER",
                            "value": "Jane Doe - CEO at ACME inc.",
                            "label": "Writer"
                        }
                    ],
                    "image": null
                }
            ]

        },
        {
            "orderNo": 5,
            "blockTypeEnum": "HERO_BLOCK",
            "blockNameEnum": "HERO_01_LEFTTEXT",
            "items": [
                {
                    "texts": [
                        {
                            "type": "TEXT_FIELD",
                            "name": "HEADER",
                            "value": "Join millions of members and counting",
                            "label": "Title"
                        },
                        {
                            "type": "BUTTON",
                            "name": "MAIN_CTA",
                            "value": "Join Dave!",
                            "label": "Button title"
                        }
                    ],
                    "image": {
                        "src": "https://landingpage-1kj.pages.dev/static/media/header-image.1100303f3a2b74ccdce1.png"
                    }
                }
            ]
        },
        {

            "orderNo": 6,
            "blockTypeEnum": "MISC_BLOCK",
            "blockNameEnum": "MISC_01_FAQ",
            "items": [
                {
                    "texts": [
                        {
                            "type": "TEXT_FIELD",
                            "name": "MISC_BLOCK_QUESTION",
                            "value": "Question one",
                            "label": "Question one"
                        },
                        {
                            "type": "TEXT_FIELD",
                            "name": "MISC_BLOCK_ANSWER",
                            "value": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
                            "label": "Answer one"
                        }
                    ],
                    "image": null
                },
                {
                    "texts": [
                        {
                            "type": "TEXT_FIELD",
                            "name": "MISC_BLOCK_QUESTION",
                            "value": "Question two",
                            "label": "Question two"
                        },
                        {
                            "type": "TEXT_FIELD",
                            "name": "MISC_BLOCK_ANSWER",
                            "value": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
                            "label": "Answer two"
                        }
                    ],
                    "image": null
                },
                {
                    "texts": [
                        {
                            "type": "TEXT_FIELD",
                            "name": "MISC_BLOCK_QUESTION",
                            "value": "Question three",
                            "label": "Question three"
                        },
                        {
                            "type": "TEXT_FIELD",
                            "name": "MISC_BLOCK_ANSWER",
                            "value": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
                            "label": "Answer three"
                        }
                    ],
                    "image": null
                },
                {
                    "texts": [
                        {
                            "type": "TEXT_FIELD",
                            "name": "MISC_BLOCK_QUESTION",
                            "value": "Question four",
                            "label": "Question four"
                        },
                        {
                            "type": "TEXT_FIELD",
                            "name": "MISC_BLOCK_ANSWER",
                            "value": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
                            "label": "Answer four"
                        }
                    ],
                    "image": null
                },
                {
                    "texts": [
                        {
                            "type": "TEXT_FIELD",
                            "name": "MISC_BLOCK_QUESTION",
                            "value": "Question five",
                            "label": "Question five"
                        },
                        {
                            "type": "TEXT_FIELD",
                            "name": "MISC_BLOCK_ANSWER",
                            "value": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
                            "label": "Answer five"
                        }
                    ],
                    "image": null
                },
                {
                    "texts": [
                        {
                            "type": "BUTTON",
                            "name": "MAIN_CTA",
                            "value": "Contact for more",
                            "label": "Button title"
                        }
                    ],
                    "image": null
                }
            ]

        }
    ]
}

let allBLock = data.blocks.map((item, index) => {
    return (
        <Blocks
            key={index}
            block={item.blockTypeEnum}
            layout={item.blockNameEnum}
            data={item.items}
        />
    )
})

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/review-ads" element={<div className="App">{allBLock}</div>}>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
