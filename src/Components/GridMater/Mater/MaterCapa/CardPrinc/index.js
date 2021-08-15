import { useState } from "react";
import { CardActionArea, CardMedia } from "@material-ui/core";
import { motion, useAnimation } from "framer-motion";
import ButtonComp from "../../../ButtonComp";

// import aos from "aos";

import styled from "styled-components";

const transition = "all 0.3s ease";

// const transition = {
//   duration: 0.5,
//   ease: [0.04, 0.62, 0.23, 0.98]
// };

const ContentPrinc = styled(motion.div)`
  user-select: none;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  width: 100%;
  background-color: #d8caa5;
  transition: ${transition};
`;

const ContentSec = styled(motion.div)`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  width: 100%;
  background-color: #d8caa5;
  transition: ${transition};
  /* transform: translateY(0px) scale(1); */
`;

const PapperPrinc = styled.div`
  /* border-top-left-radius: 4px; */
  border-radius: 4px;
  box-shadow: 0px;
  font-family: ${(props) => props.fontFamily};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  place-content: center space-evenly;
  align-items: center;
  height: 490px;
  width: 100%;
  border: 0px;
  background-color: #d8caa5;
`;

const ContentDesc = styled(motion.div)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 600px) {
    width: 50%;
  }
  @media (min-width: 960px) {
    width: 33%;
  }
`;

const ContentDescFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 50%;
  padding: 25px 25px 25px 25px;
`;

const DescTitle = styled.div`
  font-weight: 800;
  line-height: 1;
  font-size: 25px;
`;

const ContentDescSec = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const DescSec = styled.div`
  padding: 0vw 5vw 0vw 5vw;
  font-size: 18px;
  font-weight: 100;
  color: black;
  text-align: center;
`;

const ContentPrincImage = styled(motion.div)`
  transform: translateX(-2px) translateY(1px) scale(0.99);
  border-radius: 4px;
  height: 100%;
  @media (min-width: 600px) {
    width: 50%;
    transform: translateX(-2px) translateY(1px) scale(0.99);
  }
  @media (min-width: 960px) {
    transform: translateX(2px) translateY(1px) scale(0.99);
    width: 67%;
  }
`;

const ContentImage = styled(motion.div)`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  transition: ${transition};
`;

const CardActionAreaComp = styled(CardActionArea)`
  border-radius: 4px;
  overflow: hidden;
  height: 100%;
  width: 100%;
`;

const CardComp = styled(motion.div)`
  height: inherit;
  width: 100%;
  background-color: transparent;
  transition: ${transition};
`;

const CardMediaComp = styled(CardMedia)`
  height: inherit;
  width: inherit;
`;

const BottomBar = styled(motion.div)`
  width: 100%;
  z-index: 10;
  height: 8px;
  background: green;
`;

const ContentButton = styled(motion.div)`
  background-color: transparent;
  &:hover {
    background-color: #fff;
  }
`;

export default function Mater(props) {
  const [onBtnBgColor, setBtnBgColor] = useState("#transparent");
  const cardImageContols = useAnimation();
  const cardCompContols = useAnimation();
  const contentSecContols = useAnimation();
  const bottomBarContols = useAnimation();

  const onHoverUp = () => {
    contentSecContols.start({
      scale: 0.98
    });
    cardImageContols.start({
      transform: "translateY(-3px)"
    });
    return bottomBarContols.start({
      borderRadius: "4px 4px 4px 4px"
    });
  };

  const onHoverDown = () => {
    contentSecContols.start({
      borderRadius: "4px",
      scale: 1
    });
    cardImageContols.start({
      transform: "translateX(0px)"
    });
    return bottomBarContols.start({
      borderRadius: "0px 0px 4px 4px"
    });
  };

  const onHoverBtnUp = () => {
    setBtnBgColor("#fff");
    return cardCompContols.start({
      scale: 1.05
    });
  };

  const onHoverBtnDown = () => {
    setBtnBgColor("trasnparent");
    return cardCompContols.start({
      scale: 1
    });
  };

  const cardCompHoverUp = () => {
    setBtnBgColor("#fff");
    return cardCompContols.start({
      scale: 1.05
    });
  };

  const cardCompHoverDown = () => {
    setBtnBgColor("trasnparent");
    return cardCompContols.start({
      scale: 1
    });
  };

  // useEffect(() => {
  //   aos.init({
  //     duration: 1000
  //   });
  // }, []);

  function onSetMaterItemProps() {
    props.onSetMaterItem(props.search);
  }

  return (
    <>
      <ContentPrinc
        onHoverStart={onHoverUp}
        onHoverEnd={onHoverDown}
        transition={transition}
        data-aos="fade-up"
      >
        <ContentSec animate={contentSecContols}>
          <PapperPrinc fontFamily={props.fontFamily}>
            <ContentDesc>
              <ContentDescFlex>
                <DescTitle children={props.title} />
                <ContentDescSec children={<DescSec children={props.desc} />} />
                <ContentButton
                  onHoverStart={onHoverBtnUp}
                  onHoverEnd={onHoverBtnDown}
                  children={
                    <ButtonComp
                      backgroundcolor={onBtnBgColor}
                      transition={transition}
                      onClick={() => onSetMaterItemProps()}
                    />
                  }
                />
              </ContentDescFlex>
            </ContentDesc>
            <ContentPrincImage>
              <ContentImage animate={cardImageContols}>
                <CardActionAreaComp
                  onClick={() => onSetMaterItemProps()}
                  children={
                    <CardComp
                      animate={cardCompContols}
                      onHoverStart={cardCompHoverUp}
                      onHoverEnd={cardCompHoverDown}
                      children={<CardMediaComp image={props.image} />}
                    />
                  }
                ></CardActionAreaComp>
              </ContentImage>
            </ContentPrincImage>
          </PapperPrinc>
          <BottomBar
            initial={{ borderRadius: "0 0 4px 4px" }}
            animate={bottomBarContols}
          />
        </ContentSec>
      </ContentPrinc>
    </>
  );
}
