import { useMediaQuery, useTheme } from "@material-ui/core";
import { motion } from "framer-motion";
import Styled from "styled-components";
import ParallaxImg from "../../ParallaxImg";

const Content = Styled.div`
  margin-top: -650px;
  position: relative;
  height: 650px;
  width: 100%;
`;

const ImageLeft = Styled(motion.figure)`  
  margin: 0;
  height: 650px;
  width: 100%;
  /* border: 0; */
  /* border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px; */

  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  transition: background-image 300ms linear;
  transition-property: background-image;
  transition-duration: 300ms;
  transition-timing-function: linear;
  transition-delay: 0s;
  filter: brightness(50%);
`;

const ParallaxImgComp = Styled(ParallaxImg)`  
  margin: 0;
  transition: background-image 300ms linear;
  transition-property: background-image;
  transition-duration: 300ms;
  transition-timing-function: linear;
  transition-delay: 0s;
`;

export default function Image(props) {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Content>
      {isSm ? <ImageLeft image={props.image} /> : <ParallaxImgComp filter={"brightness(60%)"} height="100%" width="100%" src={props.image} />}
    </Content>
  );
}
