import { useState } from "react";
import { CardActionArea, CardMedia } from "@material-ui/core";

import ButtonComp from "../../../ButtonComp";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";

const transition = "all 0.3s ease";

const ContentPrinc = styled(motion.div)`
  user-select: none;
  background-color: #d8caa5;
  width: 100%;
  overflow: hidden;
  border-radius: 4px;
`;

const ContentSec = styled(motion.div)`
  transition: ${transition};
`;

const PaperPrinc = styled(motion.div)`
  font-family: ${(props) => props.fontFamily};
  padding: 25px 0px 25px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  place-content: center space-evenly;
  align-items: center;
  height: 450px;
  width: 100%;
  background-color: #d8caa5;
`;

const ContentTitle = styled(motion.div)`
  font-weight: 700;
  line-height: 1.2;
  font-size: 25px;
  font-style: normal;
  letter-spacing: -0.05em;
`;

const ContentImageFlex = styled(motion.div)`
  display: flex;
  justify-content: center;
  width: inherit;
`;

const CardActionComp = styled(CardActionArea)`
  overflow: hidden;
  border-radius: 4px;
  height: 200px;
  width: 100%;
  max-width: 250px;
  filter: grayscale(0);
  transition: transform 0.5s;
  &:hover {
    /* transform: translate(-10px, -10px); */
  }
`;

const ContentButton = styled(motion.div)`
  background-color: transparent;
  &:hover {
    background-color: #fff;
  }
`;

const CardComp = styled(motion.div)`
  border-radius: 0;
  height: inherit;
  width: inherit;
  transition: ${transition};
  ${ContentButton}:hover & {
    background-color: #fff;
  }
`;

const CardMediaComp = styled(CardMedia)`
  height: inherit;
  width: inherit;
`;

const ContentDescFlex = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ContentDesc = styled.div`
  padding: 0vw 5vw 0vw 5vw;
  font-size: 18px;
  font-weight: 100;
  color: black;
  text-align: center;
`;

const BottomBar = styled(motion.div)`
  width: 100%;
  z-index: 10;
  height: 8px;
  background: green;
`;

// https://bobbyflay.com/
// https://munjoi.com/
// https://outofthevalley.co.uk/
// https://ester.co/
// https://www.neosoft.ch/en/search-rescue-solutions
// https://andyhardy.co/motion
// https://girlculture.com/photography/
// https://omegafunds.impression.studio/team
// https://www.fern.team/allies
// https://www.henamo-stefanshof.be/geschichte/
// https://bac.eeq.ca/en/series

// https://drive.google.com/uc?id= // + ID da imagem compartilhada

export default function CardSec(props) {
  const [onBtnBgColor, setBtnBgColor] = useState("#transparent");
  const contentControls = useAnimation();
  const cardControls = useAnimation();
  const bottomBarContols = useAnimation();

  const buttonHoverUp = () => {
    setBtnBgColor("#fff");
    return cardControls.start({
      scale: 1.05
    });
  };

  const buttonHoverDown = () => {
    setBtnBgColor("transparent");
    return cardControls.start({
      scale: 1
    });
  };

  const contentHoverUp = () => {
    contentControls.start({
      scale: 0.98
    });
    return bottomBarContols.start({
      borderRadius: "4px 4px 4px 4px"
    });
  };

  const contentHoverDown = () => {
    contentControls.start({
      scale: 1
    });
    return bottomBarContols.start({
      borderRadius: "0px 0px 4px 4px"
    });
  };

  const cardCompHoverUp = () => {
    setBtnBgColor("#fff");
    return cardControls.start({
      scale: 1.05
    });
  };

  const cardCompHoverDown = () => {
    setBtnBgColor("transparent");
    return cardControls.start({
      scale: 1
    });
  };

  function onSetMaterItemProps(ACount) {
    props.onSetMaterItem(props.search);
  }

  return (
    <>
      <ContentPrinc
        layout
        data-aos="fade-up"
      >
        <ContentSec
          animate={contentControls}
          onHoverStart={contentHoverUp}
          onHoverEnd={contentHoverDown}
        >
          <PaperPrinc fontFamily={props.fonfamily}>
            <ContentTitle children={props.title} />
            <ContentImageFlex>
              <CardActionComp onClick={() => onSetMaterItemProps()}>
                <CardComp
                  animate={cardControls}
                  onHoverStart={cardCompHoverUp}
                  onHoverEnd={cardCompHoverDown}
                  children={<CardMediaComp image={props.image} />}
                />
              </CardActionComp>
            </ContentImageFlex>
            <ContentDescFlex>
              <ContentDesc children={props.desc} />
            </ContentDescFlex>
            <ContentButton
              onHoverStart={buttonHoverUp}
              onHoverEnd={buttonHoverDown}
              children={
                <ButtonComp
                  backgroundcolor={onBtnBgColor}
                  transition={transition}
                  onClick={() => onSetMaterItemProps()}
                />
              }
            />
          </PaperPrinc>
          <BottomBar
            initial={{ borderRadius: "0 0 4px 4px" }}
            animate={bottomBarContols}
          />
        </ContentSec>
      </ContentPrinc>
    </>
  );
}
