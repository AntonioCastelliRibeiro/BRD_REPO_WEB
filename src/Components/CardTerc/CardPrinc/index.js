import Styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import CardImage from "../CardImage";
import ButtonHoverComp from "../ButtonHover";

const Content = Styled(motion.div)`
  width: 100%;
  display: flex;  
  /* padding: 24vh 0px 24vh 0px; */
  padding: 5vh 0px 5vh 0px;
  flex-direction: ${(props) => props.flexDirection};
  @media (max-width: 600px) {
    flex-direction: column-reverse;
    /* padding: 10vh 0px 10vh 0px; */
  };
`;

const CotentTitle = Styled.div`
  font-size: 3.1em;
  display:flex;
  font-weight:400;
  line-height:1.334;
  letterSpacing: 0;
  padding-bottom: 0;
  justify-content: center;
  @media (max-width: 600px) {
    padding-bottom: 30px;
  };
`;

const CotentDesc = Styled.div`
  font-size: 1.3rem;
  margin: 1rem auto 2rem;
  max-width: 500px;
  text-align: center;
  width: 100%;
  font-wWeight: 400;
  line-height: 1.43;
  max-height: 500px;
  @media (max-width: 600px) {
    margin-bottom: 30px;
  };
`;

const CotentCard = Styled(motion.div)`
  display: flex;
  width: 70%;
  padding: 0px;
  padding-bottom: 0px;
  @media (max-width: 600px) {
    width: 100%;
  };
`;

const CotentDescPrinc = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-grow: 2;
  font-family: ${(props) => props.fontFamily};
  width: 70%;
  padding: 4vw;
  @media (max-width: 600px) {
    width: 100%;
  };
`;

export default function CardPrinc(props) {
  const buttonControls = useAnimation();
  const descControls = useAnimation();
  const arrowControls = useAnimation();
  const imageControls = useAnimation();

  const sequenceUp = () => {
    descControls.start({
      x: 5
    });
    arrowControls.start({
      x: 0,
      opacity: 1
    });
    buttonControls.start({
      width: "125px"
    });
    return imageControls.start({
      scale: 1.1
    });
  };

  const sequenceDown = () => {
    descControls.start({
      x: 10
    });
    arrowControls.start({
      x: -20,
      opacity: 0
    });
    buttonControls.start({
      width: "140px"
    });
    return imageControls.start({
      scale: 1
    });
  };

  const sequenceUpTap = () => {
    descControls.start({
      scale: 0.95
    });
    arrowControls.start({
      scale: 0.95
    });
    return buttonControls.start({
      scale: 0.95
    });
  };

  const sequenceDownTap = () => {
    descControls.start({
      scale: 1
    });
    arrowControls.start({
      scale: 1
    });
    return buttonControls.start({
      scale: 1
    });
  };

  return (
    <Content key={props.key} flexDirection={props.data.flexDirection}>
      <CardImage
        sequenceUp={sequenceUp}
        sequenceDown={sequenceDown}
        imageControls={imageControls}
        image={props.data.img}
      />
      <CotentCard>
        <CotentDescPrinc fontFamily={props.fontFamily}>
          <CotentTitle data-aos="fade-up" children={props.data.title} />
          <CotentDesc data-aos="fade-up" children={props.data.descricao} />
          <ButtonHoverComp
            arrowControls={arrowControls}
            descControls={descControls}
            buttonControls={buttonControls}
            sequenceUp={sequenceUp}
            sequenceDown={sequenceDown}
            sequenceDownTap={sequenceDownTap}
            sequenceUpTap={sequenceUpTap}
          >
            {props.data.descButton}
          </ButtonHoverComp>
        </CotentDescPrinc>
      </CotentCard>
    </Content>
  );
}
