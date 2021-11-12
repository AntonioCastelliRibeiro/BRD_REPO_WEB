import { Typography } from "@material-ui/core";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

const Content = styled(motion.div)`
  font-family: ${(props) => props.fontFamily};
  display: flex;
  width: 100%;
  max-height: inherit;
  min-height: inherit;
  background-color: rgb(222, 222, 222);
  overflow: hideen;
  z-index: 1;
  border-top-right-radius: 9px;
  border-bottom-right-radius: 9px;
`;

const ContentImage = styled(motion.figure)`
  opacity: ${(props) => (props.isMobile ? 0 : 1)};
  margin: 0;
  background-color: rgba(0,69,0,1);
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
  position: absolute;
  max-height: inherit;
  min-height: inherit;
  width: 16%;  
  left: 50%;
`;

const DescCenter = styled(motion.div)`
  /* font-family: ${(props) => props.fontFamily}; */
  /* -webkit-text-fill-color: #4caf50;//#3767B9; */
  display: flex;
  width: inherit;
  color: #4caf50;
  text-align: center;
  align-items: center;
  justify-content: center;
  /* font-size: 39px;
  font-style: normal;
  font-weight: 800;
  letter-spacing: 3px;
  line-height: 1.2; */
`;

const ContentLeft = styled(motion.div)`
  display: flex;
  width: inherit;
  color: #fff;
  position: fixed;
`;

const ContentLeftFlex = styled(motion.div)`
  width: inherit;
  padding-left: 10px;
  padding-top: 10px;
  color: #4caf50;
  text-align: start;
`;

const DescTitleRight = styled(motion.div)`
  color: hsl(338, 77%, 57%);
  font-size: ${(props) => (props.isMobile ? "6vw" : "16px")};
  font-style: normal;
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 1.2;
  text-align: left;
`;

const DescRight = styled(motion.div)`
  font-size: ${(props) => (props.isMobile ? "7vw" : "2.9vw")};
  font-style: normal;
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 1.2;
  text-align: left;
  color: #4caf50;//#477DDC;
`;

const DescSubRight = styled(motion.div)`
  color: #4caf50;//#477DDC;
  font-size: ${(props) => (props.isMobile ? "8vw" : "2.8vw")};
  font-style: normal;
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 1.2;
  text-align: left;
`;

const AHrefHistory = styled(motion.a)`
  text-decoration: none;
  display: flex;
  width: 100%;
  max-height: inherit;
  min-height: inherit;
  overflow: hideen;
  z-index: 2;
`;

export default function CardRightComp(props) {
  const descCenterControls = useAnimation();
  const contentControls = useAnimation();
  const contentLeftControls = useAnimation();

  const sequenceUp = async () => {
    contentControls.start({
      x: "32%"
    });
    descCenterControls.start({
      x: "20%",
      opacity: 0
    });
    return contentLeftControls.start({
      opacity: 1
    });
  };

  const sequenceUpInitialMobile = async () => {
    await contentControls.start({
      x: "0"
    });
    await descCenterControls.start({
      opacity: 0
    });
    return await contentLeftControls.start({
      opacity: 1
    });
  };

  const sequenceDown = () => {
    contentControls.start({
      x: 0
    });
    descCenterControls.start({
      x: 0,
      opacity: 1
    });
    return contentLeftControls.start({
      opacity: 0
    });
  };

  function setHisory(e) {
    e.preventDefault();
    props.setHisory(props.search.toString());
  }

  const transition = { duration: 0.4, type: "tween" };
  const transitionChil = { duration: 0.4, type: "tween" };

  return (
    <>
      <AHrefHistory
        initial={props.isMobile ? sequenceUpInitialMobile : sequenceDown}
        href={props.search}
        onClick={(e) => setHisory(e)}
      >
        <ContentImage
          isMobile={props.isMobile}
          image={props.img}
          onHoverStart={props.isMobile ? false : sequenceUp}
          onHoverEnd={props.isMobile ? false : sequenceDown}
        />
        <Content
          fontFamily={props.fontFamily}
          animate={contentControls}
          initial={props.isMobile ? sequenceUpInitialMobile : sequenceDown}
          onHoverStart={props.isMobile ? false : sequenceUp}
          onHoverEnd={props.isMobile ? false : sequenceDown}
          transition={transition}
        >
          <DescCenter fontFamily={props.fontFamily} animate={descCenterControls} transition={transition}>

            <Typography variant="h4" >Próximo</Typography>
          </DescCenter>
          <ContentLeft>
            <ContentLeftFlex
              initial={{ opacity: 0 }}
              animate={contentLeftControls}
              transition={transitionChil}
            >
              <Typography variant="subtitle1" >Próximo</Typography>
              <Typography variant="h4" >{props.type}</Typography>
              <Typography variant="h5" >{props.titleBtnNextPrev}</Typography>
              {/* <DescTitleRight isMobile={props.isMobile} children={"Próximo"} />
              <DescRight isMobile={props.isMobile} children={props.type} />
              <DescSubRight isMobile={props.isMobile} children={props.titleBtnNextPrev} /> */}
            </ContentLeftFlex>
          </ContentLeft>
        </Content>
      </AHrefHistory>
    </>
  );
}
