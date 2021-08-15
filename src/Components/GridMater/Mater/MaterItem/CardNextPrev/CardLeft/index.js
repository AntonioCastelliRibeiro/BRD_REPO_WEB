import Styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

const Content = Styled(motion.div)`
  font-family: ${(props) => props.fontFamily};
  display: flex;
  width: 100%;
  max-height: inherit;
  min-height: inherit;
  background-color: #4e9b31;//rgb(55, 103, 185);
  overflow: hideen;
  z-index: 1;
`;

const ContentImage = Styled(motion.figure)`
  opacity: ${(props) => (props.isMobile ? 0 : 1)};
  margin: 0;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  z-index: 0;
  position: absolute;
  max-height: inherit;
  min-height: inherit;
  width: 16%;
  left: 34%;
`;

const DescCenter = Styled(motion.div)`
  font-family: ${(props) => props.fontFamily};
  display: flex;
  width: inherit;
  color: rgb(222, 222, 222);
  text-align: center;
  align-items: center;
  justify-content: center;
  font-size: 39px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 1.2;
`;

const ContentLeft = Styled(motion.div)`
  display: flex;
  width: inherit;
  color: #fff;
  position: fixed;
`;

const ContentRightFlex = Styled(motion.div)`
  display: flex;  
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  width: inherit;
  padding-right: 10px;
  padding-top: 10px;
`;

const DescTitleLeft = Styled(motion.div)`
  color: hsl(44deg 99% 50%); //hsl(22, 100%, 68%);
  font-size: ${(props) => (props.isMobile ? "6vw" : "16px")};
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 1.2;
  text-align: right;
`;

const DescLeft = Styled(motion.div)`
  font-size: ${(props) => (props.isMobile ? "7vw" : "3vw")};
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 1.2;
  text-align: right;
  color: #DEDEDE;
`;

const DescSubLeft = Styled(motion.div)`
  font-size: ${(props) => (props.isMobile ? "8vw" : "3vw")};
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 1.2;
  text-align: right;
  color: #DEDEDE;
`;

const AHrefHistory = Styled(motion.a)`
  text-decoration: none;
  display: flex;
  width: 100%;
  max-height: inherit;
  min-height: inherit;
  overflow: hideen;
  z-index: 2;
`;

const transition = { duration: 0.5, type: "tween" };
const transitionChil = { duration: 0.4, type: "tween" };

export default function CardLeftComp(props) {
  const descCenterControls = useAnimation();
  const contentControls = useAnimation();
  const contentLeftControls = useAnimation();

  const sequenceUp = async () => {
    contentControls.start({
      x: "-32%"
    });
    descCenterControls.start({
      x: "-20%",
      opacity: 0
    });
    return contentLeftControls.start({
      opacity: 1
    });
  };

  const sequenceUpMobile = async () => {
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

  return (
    <>
      <AHrefHistory
        initial={props.isMobile ? sequenceUpMobile : sequenceDown}
        href={props.search}
        onClick={(e) => setHisory(e)}
      >
        <ContentImage
          isMobile={props.isMobile}
          image={props.image}
          onHoverStart={props.isMobile ? false : sequenceUp}
          onHoverEnd={props.isMobile ? false : sequenceDown}
        />
        <Content
          fontFamily={props.fontFamily}
          initial={props.isMobile ? sequenceUpMobile : false}
          animate={contentControls}
          onHoverStart={props.isMobile ? false : sequenceUp}
          onHoverEnd={props.isMobile ? false : sequenceDown}
          transition={transition}
        >
          <DescCenter fontFamily={props.fontFamily} animate={descCenterControls} transition={transition}>
            Anterior
          </DescCenter>
          <ContentLeft>
            <ContentRightFlex
              initial={{ opacity: 0 }}
              animate={contentLeftControls}
              transition={transitionChil}
            >
              <DescTitleLeft isMobile={props.isMobile} children={"Anterior"} />
              <DescLeft isMobile={props.isMobile} children={props.type} />
              <DescSubLeft isMobile={props.isMobile} children={props.title} />
            </ContentRightFlex>
          </ContentLeft>
        </Content>
      </AHrefHistory>
    </>
  );
}
