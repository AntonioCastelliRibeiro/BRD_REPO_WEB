import { memo } from "react";
import { Link } from "react-router-dom";
import { Box, Button, CardActionArea, Typography } from "@material-ui/core";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";

const transition = {
  duration: 0.5,
  ease: [0.04, 0.62, 0.23, 0.98]
};

const ButtonComp = styled(Typography)`
  font-family: inherit;
  cursor: pointer;
  user-select: none;
  padding: 8px 18px;
  border-radius: 5px;
  background-color: #fff;
  color: black;
  border: 1px solid #fff;
  transition: ${transition};
  font-family: inherit;
`;

const ContentImgLeft = styled(motion.div)`
  cursor: ${(props) => (props.mobile ? "pointer" : "")};
  border-right: ${(props) => (props.borderRight ? "1px solid #a1a1a1" : "0")};
  z-index: 1;
  height: 450px;
  width: ${(props) => (props.mobile ? "100%" : "50%")};
  &:hover {
    ${ButtonComp} {
      background-color: #fff;
      color: black;
    }
  }
`;

const ContentButton = styled(motion.div)`
  color: #fff;
  display: flex; 
  align-items: center;
  justify-content: center; 
  z-index: 5;
  margin: 2px;
`;

const ContentDesc = styled(motion.div)`
  color: #fff;
  display: flex; 
  height:100%;
  width:100%;
  align-items: center;
  justify-content: center; 
`;

const ContentHover = styled(motion.div)`
  height: inherit; 
  width: 100%;
  transition: ease 0.3s;
`;

const DescBase = styled(motion.div)`
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  text-align: center;
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  font-weight: 800;
`;

const DescTitle = styled(DescBase)`
  font-weight: 800;
  user-select: ${(props) => (props.mobile ? "none" : "")};
`;

const DescContent = styled(DescBase)`
  font-weight: 500;
  user-select: ${(props) => (props.mobile ? "none" : "")};
`;

const CardActionAreaComp = styled(CardActionArea)`
  height: 100%;
  width: 100%;
  color: #fff;
  font-family: inherit;
  border-top-left-radius: ${props => props.isLeft ? "15px" : "0px"};
  border-top-right-radius: ${props => props.isLeft ? "0px" : "15px"};
  border-bottom-left-radius: ${props => props.isLeft ? "15px" : "0px"};
  border-bottom-right-radius: ${props => props.isLeft ? "0px" : "15px"};
  @media (max-width: 600px) {
  border-radius: 15px;
  };
`;



const initialMenu = {
  y: 25
};

const initialItem = {
  y: 90,
  opacity: 0
};

export default memo(function CardUp(props) {
  const menuControls = useAnimation();
  const itemControls = useAnimation();
  const buttonControls = useAnimation();

  const sequenceUp = () => {
    props.setImage(props.isLeft ? 1 : 2);
    menuControls.start({ y: -25, transition: { transition } });
    itemControls.start({ opacity: 1, y: -20, transition: { transition } });
    return buttonControls.start({
      opacity: 1,
      y: 60,
      transition: { transition }
    });
  };

  const sequenceDown = () => {
    if (!props.isLeft) {
      props.setImage(1);
    }
    itemControls.start({ y: 0, opacity: 0, transition: { transition } });
    buttonControls.start({ opacity: 0, y: 90, transition: { transition } });
    return menuControls.start({
      y: 25,
      transition: { transition }
    });
  };

  return (
    <ContentImgLeft
      initial={props.mobile ? sequenceUp : sequenceDown}
      mobile={props.mobile}
      borderRight={props.borderRight}
      onHoverStart={props.mobile ? "" : sequenceUp}
      onHoverEnd={props.mobile ? "" : sequenceDown}
    >
      <CardActionAreaComp isLeft={props.isLeft}>
        <ContentHover>
          <ContentDesc>
            <Box display="flex" flexDirection="column">
              <DescTitle
                mobile={props.mobile}
                fontSize="33px"
                initial={initialMenu}
                animate={menuControls}
              >
                {props.title}
              </DescTitle>
              <DescContent
                mobile={props.mobile}
                fontSize="18px"
                lineHeight="1.75"
                marginRight="35px"
                marginLeft="35px"
                initial={initialItem}
                animate={itemControls}
                children={props.desc}
              />
              <ContentButton
                style={{ zIndex: 5 }}
                initial={initialItem}
                animate={buttonControls}
              >
                <ButtonComp children={props.btnDesc} />
              </ContentButton>
            </Box>
          </ContentDesc>
        </ContentHover>
      </CardActionAreaComp>
    </ContentImgLeft>
  );
});
