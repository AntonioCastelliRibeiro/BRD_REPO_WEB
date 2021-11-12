import { memo } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

const Content = styled(motion.div)`
  z-index: 1300;
  cursor: pointer;
  user-select: none;
  max-width: 100%;
  overflow: hidden;
`;

const ContentHoverLeft = styled(motion.div)`
  max-width: inherit;
  height: ${props => props.height || "1vw"};
  overflow: hidden;
  border-radius: 45px;
`;

const CompHoverLeft = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: green;
  margin-left: -150px;
  border-radius: 45px;
`;

const ContentDesc = styled(motion.div)`
  text-align: center;
  font-size: ${props => props.fontSize};
  font-weight: 900;
  letter-spacing: 5px;
`;

const transition = {
    duration: 0.5,
    ease: [0.04, 0.62, 0.23, 0.98]
};

export default memo(function AHrefHover(props) {
    const compControlsLeft = useAnimation();

    const sequenceUp = async () => {
        props.onHoverStart();
        compControlsLeft.start({
            x: 150
        });
    };

    const sequenceDown = async () => {
        return compControlsLeft.start({
            x: -550
        });
    };

    return (
        <Content
            // onMouseOver={props.onMouseOver || false}
            onClick={props.onClick}
            // whileHover={sequenceUp}
            whileTap={{ scale: 0.95 }}
            onHoverStart={sequenceUp}
            onHoverEnd={sequenceDown}
        >
            <ContentDesc fontSize={props.fontSize} children={props.desc || "Descrição"} />
            <ContentHoverLeft height={props.lineHeight}>
                <CompHoverLeft initial={sequenceDown} animate={compControlsLeft} transition={transition} />
            </ContentHoverLeft>
        </Content>
    );
})
