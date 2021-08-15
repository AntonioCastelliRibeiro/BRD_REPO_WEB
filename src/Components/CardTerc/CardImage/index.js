import Styled from "styled-components";
import { motion } from "framer-motion";
import { CardActionArea, CardMedia } from "@material-ui/core";

const CardBase = Styled(motion.div)`
  cursor: pointer;
  height: 65vh;
  width: 100%;
  background-color: "#e8h9z9";
  min-width: 260px;
  border: none;
  overflow: hidden; 
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px; 

  transition: ease 0.3s;
`;


const Content = Styled.div`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  height: 100%;
  width: 100%;
`;

const ContentPric = Styled.div`
  height: 100%;
  width: 70%;
  color: #fff;
  overflow: hidden;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
      @media (max-width: 600px) {
    width: 100%;
  };
`;

const CardActionAreaComp = Styled(CardActionArea)`
  height: 100%;
  width: 100%;
`;

const Image = Styled(CardMedia)`
  height: inherit;
  width: inherit;
`;

export default function CardImage(props) {
  return (
    <ContentPric>
      <Content>
        <CardBase
          data-aos="fade-up"
          animate={props.imageControls}
          onHoverStart={props.sequenceUp}
          onHoverEnd={props.sequenceDown}
          children={<CardActionAreaComp children={<Image image={props.image} />} />}
        />
      </Content>
    </ContentPric>
  );
}
