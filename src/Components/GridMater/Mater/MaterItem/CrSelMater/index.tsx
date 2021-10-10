import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./styles.css";

import styled from "styled-components";
// import CardCrSel from "../CardCrSel";

// import objData from "./data.js";
import IProps from "./interface";

const ContentPrinc = styled.div<IProps>`
  display: flex;
  font-family: ${(props) => props.fontFamily};
  height: auto;
  /* padding: 24px 24px 24px 24px; */
  overflow: hidden;
  align-items: center;
  justify-content: center;
  background-color: #151515;
`;

const ContentSec = styled.div`
  font-family: inherit;
  display: flex;
  background-color: #151515;
`;

// touchAction: 'pan-y'

export default function CrSelMater(props: IProps) {
    const [onIndex, setOnIndex] = useState(0);

    // useEffect(() => { props.setScrollTop() }, [])

    return (
        // <ContentPrinc fontFamily={props.fontFamily}>
        //     <ContentSec>
        <Carousel
            className="CarouselMaterClass"
            statusFormatter={(current, total) => `${current} de ${total}`}
            // autoFocus
            onClickItem={() => console.log(onIndex)}
            selectedItem={onIndex}
            onChange={(index, intem) => setOnIndex(index)}
            emulateTouch
            showIndicators
            dynamicHeight
            infiniteLoop
            showThumbs={true}
            showStatus={true}
            swipeable
            // autoPlay
            showArrows
            useKeyboardArrows
            stopOnHover
        // centerMode
        // centerSlidePercentage={90}
        // infiniteLoop={!isSmall}
        >
            {props.dataImage.map((e, count: number) => {
                return (
                    <div key={count}>
                        <img
                            style={{ backgroundColor: "#4caf50" }}
                            alt=""
                            src={e}
                        />
                    </div>
                )
            })}
        </Carousel>
        //     </ContentSec>
        // </ContentPrinc>
    );
}
