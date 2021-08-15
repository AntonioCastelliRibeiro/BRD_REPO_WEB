import IconArrowRight from "@material-ui/icons/ArrowForward";
import Styled from "styled-components";
import { motion } from "framer-motion";

const CotentButton = Styled.div`
  height: 3em;
  display: flex;
  justify-content: center;
`;

const ButtonHover = Styled(motion.div)`
  width: 140px;
  position: absolute;
  display: flex;
  justify-content: center;
  height: 3em;
  border: 1px solid #E4E8E2;
  border-radius: 50px;
  cursor: pointer;
  margin-top: -13px;
  background-color: #E4E8E2;
  transition: ease 0.1s;
`;

const DescButton = Styled(motion.div)`
  cursor: pointer;
  font-size: 20px;
  z-index: 1;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: ease 0.1s;
`;

const ContentArrow = Styled(motion.div)`
  transition: ease 0.1s;
`;

const DescriptionBase = Styled(motion.div)`
  font-family: ${(props) => props.fontFamily};
  font-weight: 500;
  display: flex;
  cursor: pointer;
  font-size: 20px;
  z-index: 1;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const IconArrowRightComp = Styled(IconArrowRight)`
    height: 18px; 
    padding-top: 4px;
  `;

const Description = Styled.div`
    font-weight: 600;
  `;

const transition = {
  duration: 0.4,
  ease: [0.04, 0.62, 0.23, 0.98]
};

export default function ButtonHoverComp(props) {
  return (
    <CotentButton data-aos="fade-up">
      <DescButton
        onHoverStart={props.sequenceUp}
        onHoverEnd={props.sequenceDown}
        transition={transition}
        onTapStart={props.sequenceUpTap}
        onTap={props.sequenceDownTap}
      >
        <DescriptionBase
          fontFamily={props.fontFamily}
          animate={props.descControls}
          transition={transition}
        >
          <Description children={"Visitar"} />
          <ContentArrow animate={props.arrowControls} children={<IconArrowRightComp />} />
        </DescriptionBase>
      </DescButton>
      <ButtonHover
        initial={props.sequenceDown}
        onHoverStart={props.sequenceUp}
        onHoverEnd={props.sequenceDown}
        animate={props.buttonControls}
        whileTap={{ scale: 0.98 }}
      />
    </CotentButton>
  );
}
