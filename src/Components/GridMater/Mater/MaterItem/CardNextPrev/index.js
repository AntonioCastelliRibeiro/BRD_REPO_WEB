import styled from "styled-components";
import { Hidden } from "@material-ui/core";
import { motion } from "framer-motion";
import CardLeftComp from "./CardLeft";
import CardRightComp from "./CardRight";

const Content = styled(motion.div)`
  display: flex;
  width: 100%;
  /* max-width: 900px; */
  /* min-width: 250px; */
  max-height: 200px;
  min-height: 200px;
  overflow: hidden;
  border-radius: 50px;
`;

const ContentBase = styled(motion.div)`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-top: 20px;
  overflow: hidden;
  align-items: center;
`;

export default function CardNextPrev(props) {
  return (
    <ContentBase  >
      <Content>
        <Hidden xsDown>
          <CardLeftComp
            fontFamily={props.fontFamily}
            setHisory={(e) => props.setHisory(e)}
            type={props.type}
            {...props.data[props.indexPrev]}
          />

          <CardRightComp
            fontFamily={props.fontFamily}
            setHisory={(e) => props.setHisory(e)}
            type={props.type}
            {...props.data[props.indexNext]}
          />
        </Hidden>
        <Hidden smUp>
          <CardLeftComp
            fontFamily={props.fontFamily}
            setHisory={(e) => props.setHisory(e)}
            type={props.type}
            isMobile
            {...props.data[props.indexPrev]}
          />
          <CardRightComp
            fontFamily={props.fontFamily}
            setHisory={(e) => props.setHisory(e)}
            type={props.type}
            isMobile
            {...props.data[props.indexNext]}
          />
        </Hidden>
      </Content>
    </ContentBase>
  );
}
