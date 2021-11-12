import React from "react";
import { motion } from "framer-motion";
import {
  CardActionArea,
  CardMedia,
  Typography,
  IconButton
} from "@material-ui/core";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import styled from "styled-components";
// import DescCard from "../DescCard";
import iProps from "../CardComp/interface";

const transition = "ease-in-out .45s";

const CardMediaComp = styled(CardMedia)`
  background-color: #f0ffff;
  height: 300px;
  width: 100%;
  margin-bottom: 60px;
  filter: brightness(65%);
  transition: ${transition};
`;

const CardComponent = styled(motion.div)`
  font-family: inherit;
  height: inherit;
  width: inherit;
  border-radius: 9px;
  transition: ${transition};
`;

const CardActionComp = styled(CardActionArea)`
  font-family: inherit;
  color: #fff;
  position: relative;
`;

const ContentSec = styled(motion.div)`
  font-family: inherit;
  height: inherit;
  width: inherit;
  overflow: hidden;
  width: 100%;
  border-radius: 9px;
  transition: ${transition};
`;

const ContentDescCard = styled(motion.div)`
  font-family: inherit;
  height: inherit;
  width: 100%;
  overflow: hidden;
  transition: ${transition};
`;

const ContentDesc = styled.div`
  font-family: inherit;
  padding-left: 16px;
  padding-right: 16px;
  height: 78px;
  width: 93%;
  display: flex;
  align-items: center;
  transition: ${transition};
`;

const DescTitle = styled(Typography)`
  font-family: inherit;
  color: black;
  text-align: left;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 26px;
  margin-top: 0;
  margin-bottom: 0;
  opacity: 1;
  padding-top: 0px;
  transition: ${transition};
`;

const ContentItemDesc = styled(motion.div)`
  font-family: inherit;
  height: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  transition: ${transition};
`;

const DescTop = styled(motion.div)`
  font-family: inherit;
  user-select: none;
  position: absolute;
  z-index: 3;
  top: 12px;
  transform: translateX(16px);
  color: #fff;
  font-size: 2.5vw;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 13px;
  text-transform: uppercase;
  transition: ${transition};
`;

const ContentPrincUp = styled.div`
  font-family: inherit;
  position: absolute;
  border-radius: 9px;
  z-index: 0;
  background-color: rgb(0,69,0);
  background-image: linear-gradient(180deg, rgba(0,69,0,1) 0%, rgba(76,175,80,1) 0%);
  color: black;
  margin-top: -80px;
  user-select: none;
  width: 100%;
  overflow: hidden;
  transition: ${transition};
`;

const ContentButton = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  z-index: 1;
  top: 120px;
  width: 100%;
  opacity: 1;
  transition: ${transition};
`;

const IconPlay = styled(PlayCircleOutlineIcon)`
  color: #fff;
  transition: ${transition};
  height: 70px;
  width: 70px;
`;


interface iContentPadding {
  fontFamily: string;
}

const ContentPrinc = styled(motion.div) <iContentPadding>`
  font-family: ${(props) => props.fontFamily};
  min-width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  border-radius: 4px;
  transition: ${transition};
  @media (max-width: 600px) {
    min-width: 180px;
  }
  &:hover {
    ${IconPlay} {
      transform: scale(1.1);
    }
    ${CardMediaComp} {
      transform: scale(1.03);
    }
    ${ContentPrincUp} {
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
    }
    ${ContentDesc} {
      /* transform: scale(0.97); */
    }
    ${DescTop} {
      transform: translateX(17px);
    }
  }
`;

export default function CardCompMobile(props: iProps) {
  return (
    <ContentPrinc
      fontFamily={props.fontFamily}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      layout
      key={props.count}
      onClick={() => props.onSetMaterItem(props.datacard.search)}
    >
      <ContentSec>
        <CardActionComp>
          <CardComponent>
            <DescTop children={props.datacard.title} />
            <ContentButton>
              <IconPlay />
              {/* <IconButtonComp
                disableFocusRipple
                disableRipple
                size={"small"}
                children={<IconPlay />}
              /> */}
            </ContentButton>
            <CardMediaComp image={props.datacard.img} />
          </CardComponent>
          <ContentDescCard>
            <ContentPrincUp>
              <ContentDesc>
                <ContentItemDesc>
                  <Typography variant="h6" children={props.datacard.desc} />
                  {/* <DescTitle variant="h1" children={props.datacard.desc} /> */}
                </ContentItemDesc>
              </ContentDesc>
            </ContentPrincUp>
          </ContentDescCard>
        </CardActionComp>
      </ContentSec>
    </ContentPrinc>
  );
}
