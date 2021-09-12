import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import "./styles.css";

import styled from "styled-components";
import CardCrSel from "../CardCrSel";

import objData from "./data.js";
import IProps from "./interface";

const ContentPrinc = styled.div<IProps>`
  display: flex;
  font-family: ${(props) => props.fontFamily};
  height: auto;
  padding: 24px 24px 24px 24px;
  /* margin: 20px; */
  overflow: hidden;
  /* width: auto; */
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

export default function CrSelMaterial(props: IProps) {
  const [onIndex, setOnIndex] = useState(0);
  return (
    <ContentPrinc fontFamily={props.fontFamily}>
      <ContentSec>
        <Carousel
          // className="carouselMaterialClass"
          // autoFocus
          onClickItem={() => console.log(onIndex)}
          selectedItem={onIndex}
          onChange={(index, intem) => setOnIndex(index)}
          emulateTouch
          showIndicators
          // dynamicHeight
          showThumbs={false}
          showStatus={false}
          swipeable
          // autoPlay
          showArrows
          useKeyboardArrows
          stopOnHover
        // centerMode
        // centerSlidePercentage={90}
        // infiniteLoop={!isSmall}
        >
          {objData.map((e, count) => {
            return (
              <div>
                <CardCrSel
                  fontFamily={props.fontFamily}
                  {...e}
                  count={count}
                />
              </div>
            )
          })}
          {/* <div>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1630481786681-a94a4dcb67dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
            />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1630481786681-a94a4dcb67dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
            />
            <p className="legend">Legend 3</p>
          </div> */}
        </Carousel>
      </ContentSec>
    </ContentPrinc>
  );
}
