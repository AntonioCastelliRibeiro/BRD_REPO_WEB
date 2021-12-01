import { useEffect, useState } from "react";
import { Hidden } from "@material-ui/core";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import data from "./data.js";

import Patroc from "../../Components/Patroc";
import IconMotion from "../LogoMotion";
import Movie from "../../Components/Movie";
import CardHover from "../CardHover";
import Opinion from "../Opinion";
import DescMobile from "./DescMobile";
import CardHoverLeftRight from "../CardHoverLeftRight";
import CardInformation from "../CardInformation";
import ImageColab from "../About/ImageAbout";


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

const ContentCardInformation = styled.div`
  padding-bottom: 160px;
`;

const ContentCardHover = styled.div`
  padding-bottom: 160px;
`;

const ContentCardHoverLeftRight = styled.div`
  padding-bottom: 160px;
`;

const ContentPatroc = styled.div`
  padding-bottom: 130px;
`;

const ContentOpinion = styled.div``;

const IconVariants = {
  initial: { opacity: 0 },
  enter: { opacity: 1, transition },
  exit: { opacity: 0, transition }
};

export default function Principal(props) {
  const [onLoad, setLoad] = useState(true);

  useEffect(() => {
    setLoad(props.onLoad);
  }, [props.onLoad])

  useEffect(() => {
    data.images.map((image, count) => {
      const newImage = new Image();
      newImage.src = image;
      window[image] = newImage;
    });
    setTimeout(() => {
      setLoad(false);
      // window.scrollTo(0, 0);
    }, 3000);
    return () => { props.setLoad(false) }
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
                <Movie fontFamily={props.fontFamily} namePrograma={data.namePrograma} transition={transition} />
                <ContentSpaceDescPrinc />
              </Hidden>
              <Hidden smUp>
                <ImageColab
                  img={data.imgPrinc}
                  fontFamily={props.fontFamily}
                  img={data.imgPrinc}
                  title={data.namePrograma}
                  ocultaDesc={false}
                  principal
                  descPrinc={"bom dia rural"}
                />
                <ContentSpaceDescPrinc />
              </Hidden>
              <ContentPrincTimeLine>
                <ContentSecTimeLine>
                  <ContentCardHoverLeftRight children={<CardHoverLeftRight firstDescScroll={data.firstDescScroll} fontFamily={props.fontFamily} />} />
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
