import { Suspense, useEffect, useState } from "react";
import { Box, Hidden, Typography } from "@material-ui/core";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import data from "./data.js";

import CardTerc from "../../Components/CardTerc";
import Patroc from "../../Components/Patroc";
import IconMotion from "../LogoMotion";
import Movie from "../../Components/Movie";
import CardHover from "../CardHover";
import Opinion from "../Opinion";
import TextureImage from "../TextureImg";
import DescMobile from "./DescMobile";
import DescSecTimeLine from "./DescSecTimeLine";
import SuspenseImage from "../PreloadImage/SuspenseImg";
import CardHoverLeftRight from "../CardHoverLeftRight";
import CardHoverImg from "../CardHoverImg";
import CardInformation from "../CardInformation";
// import PreloadImages from "../PreloadImage";

const transition = { duration: 0.45, ease: "easeInOut" };

const ContentLogoLoad = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100vh;
  width: 100%;
  z-index: 99999;
  background-color: #ffff;
`;

const DescMovDesktop = styled(motion.div)`
  height: 100vh;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  /* font-size: 10vw; */
  /* font-weight: 800; */  
  color: white;
  /* letter-spacing: 1px; */
  /* &:hover {
    background-color: "blue";
  } */
`;

const ContentSpaceDescPrinc = styled(motion.div)`
  height: 105vh;
`;

const ContentPrincTimeLine = styled(motion.div)`
  height: 100%;
  width: 100%;
`;

const ContentSecTimeLine = styled(motion.div)`
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  z-index: 2;
  background: rgba(0,69,0,1);
  background: linear-gradient(339deg, rgba(0,0,0,1) 2%, rgba(0,69,0,1) 92%);
`;

const ContentCardTerc = styled.div`
  padding-bottom: "80px";
`;

const ContentCardInformation = styled.div`
  padding-bottom: 160px;
`;

const ContentCardHover = styled.div`
  padding-bottom: 160px;
`;

const ContentCardHoverLeftRight = styled.div`
  padding-bottom: 160px;
  /* padding-top: 150px;
  padding-bottom:150px; */
`;

const ContentCardHoverImg = styled.div``;

const ContentPatroc = styled.div`
  padding-bottom: 130px;
`;

const ContentOpinion = styled.div``;

const TypographyComp = styled(Typography)`
  user-select: none;
  font-weight: 600;
  font-size: 10vw;
  font-family: ${(props) => props.fontFamily};
`
const DescScroll = styled.div`
  user-select: none;
  position: fixed;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  height: 98vh;
  width: 100%;
  opacity: 1;
  transition: ${transition};
  position: fixed;
  color: #fff;
  z-index: 1;
  padding-left: 40px;
`;


const IconVariants = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition },
  exit: { opacity: 0, transition }
};

export default function Principal(props) {
  const [onLoad, setOnLoad] = useState(true);

  useEffect(() => {
    data.images.map((image, count) => {
      const newImage = new Image();
      newImage.src = image;
      window[image] = newImage;
    });
    setTimeout(() => {
      setOnLoad(false);
      window.scrollTo(0, 0);
    }, 3000);
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      {
        onLoad ?
          <ContentLogoLoad
            exit="exit"
            variants={IconVariants}
            children={< IconMotion />} />
          : (<>
            <motion.div
              initial="initial"
              animate="enter"
              variants={IconVariants}
            >
              <Hidden xsDown>
                <Movie />
                <DescMovDesktop
                  data-aos="fade2"
                  data-aos-delay="1000"
                  children={<TypographyComp font-family={props.fontFamily} variant="h1" children={data.namePrograma} />} />
                <DescScroll data-aos="fade-down" data-aos-delay="1000">
                  <Box paddingBottom="35px"><Typography variant="h5" children={"Rolar para Baixo"} /> </Box>
                </DescScroll>
                <ContentSpaceDescPrinc />
              </Hidden>
              <Hidden smUp>
                <DescMobile namePrograma={data.namePrograma} fontFamily={props.fontFamily} imgPrinc={data.imgPrinc} />
                <ContentSpaceDescPrinc />
              </Hidden>
              <ContentPrincTimeLine>
                <ContentSecTimeLine>
                  {/* <DescSecTimeLine fontFamily={props.fontFamily} firstDescScroll={data.firstDescScroll} /> */}
                  {/* <ContentCardTerc children={<CardTerc fontFamily={props.fontFamily} />} /> */}
                  <ContentCardHoverLeftRight children={<CardHoverLeftRight firstDescScroll={data.firstDescScroll} fontFamily={props.fontFamily} />} />
                  {/* <ContentCardHoverImg children={<CardHoverImg fontFamily={props.fontFamily} />} /> */}
                  <ContentCardInformation children={<CardInformation fontFamily={props.fontFamily} />} />
                  <ContentCardHover children={<CardHover fontFamily={props.fontFamily} />} />
                  <ContentPatroc children={<Patroc fontFamily={props.fontFamily} />} />
                  <ContentOpinion children={<Opinion fontFamily={props.fontFamily} />} />
                </ContentSecTimeLine>
              </ContentPrincTimeLine>
            </motion.div>
          </>
          )
      }
    </AnimatePresence >
  );
}
