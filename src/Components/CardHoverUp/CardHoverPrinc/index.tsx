import React from "react";
import { motion } from "framer-motion";
import {
    CardActionArea,
    CardMedia,
    Typography,
    Grid,
    IconButton
} from "@material-ui/core";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import styled from "styled-components";
import iProps from "./interface";

const transition = "ease-in-out .45s";

const CardMediaComp = styled(CardMedia)`
  background-color: #f0ffff;
  height: 100%;
  width: 100%;
  border-radius: 18px;
  filter: brightness(80%);
  transition: ${transition};
  @media (max-width: 600px) {
    height: 340px;
  }
`;

const CardComponent = styled(motion.div)`
  font-family: inherit;
  display: flex;
  height: inherit;
  width: inherit;
  border-radius: 18px;
  transition: ${transition};
`;

const ButtonComp = styled(Typography)`
  font-family: inherit;
  padding: 8px 18px;
  border-radius: 4px;
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
  filter: brightness(89%);
  transition: ${transition};
`;

const ContentDesc = styled.div`
  font-family: inherit;
  height: 100%;
  min-height: 450px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: ${transition};
  @media (max-width: 600px) {
    min-height: 350px;
  }
`;

const DescTitle = styled(Typography)`
  font-family: inherit;
  font-weight: 700;
  margin: 0;
  color: #000;
  text-align: left;
  font-size: 26px;
  line-height: 38px;
  font-weight: 700;
  letter-spacing: 0;
  opacity: 1;
  padding-top: 0px;
  transition: ${transition};
`;

const DescSec = styled(Typography)`
  font-family: inherit;
  color: rgba(0, 0, 0, 0.7);
  font-size: 14px;
  line-height: 26px;
  color: #000;
  opacity: 0.7;
  overflow: hidden;
  transition: color 500ms;
  display: -webkit-box;
  /* margin-top: 12px;
  margin-bottom: 15px; */
  transition: ${transition};
`;

const ContentItemDesc = styled(motion.div)`
  font-family: inherit;
  height: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const ContentItemDescSec = styled(motion.div)`
  font-family: inherit;
  height: 100%;
  padding: 16px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  transition: ${transition};
  /* @media (max-width: 800px) {
    justify-content: center;
  }
  @media (max-width: 600px) {
    justify-content: center;
  } */
`;



const DescTop = styled(motion.div)`
  font-family: inherit;
  user-select: none;
  z-index: 3;
  color: black;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.63px;
  line-height: 13px;
  text-transform: uppercase;
  transition: ease 1s;
`;

const ContentButton = styled.div`
  transition: ${transition};
`;

const ContentButtonIcon = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  z-index: 1;
  top: 120px;
  width: 100%;
  opacity: 1;
  transition: ${transition};
`;

const CardActionAreaComp = styled(CardActionArea)`
  font-family: inherit;
  color: #fff;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 18px;
  transition: ${transition};
`;

const CardMediaBase = styled(motion.div)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 18px;
  transition: ${transition};
`;

const IconButtonComp = styled(IconButton)`
  color: #fff;
  transition: ${transition};
`;

const IconPlay = styled(PlayCircleOutlineIcon)`
  height: 70px;
  width: 70px;
  opacity: 0;
`;

const ContentPrinc = styled.div`
  font-family: inherit;
  overflow: hidden;
  transition: ${transition};
  border-radius: 18px;
  @media (max-width: 600px) {
    padding-bottom: 0px;
    ${IconPlay} {
      opacity: 1;
    }
    &:hover {
      ${CardMediaBase} {
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
      }
      ${IconButtonComp} {
        transform: scale(1.1);
      }
    }
  }
  &:hover {
    ${CardMediaComp} {
      transform: scale(1.1);
    }
    ${CardMediaBase} {
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }
    ${ButtonComp} {
      background-color: #fff;
      color: #66bb6a;
    }
    ${ContentDesc} {
      transform: scale(0.95);
    }
  }
`;

const GridContainer = styled(Grid)`
  font-family: inherit;
  border-radius: 18px;
  background-color: #4cad45;
`;

const GridComp = styled(Grid)`
  font-family: inherit;
  border-radius: 18px;
`;

interface iContentPadding {
    fontFamily: string;
}

const ContentPadding = styled.div<iContentPadding>`
  font-family: ${(props) => props.fontFamily};
  width: 100%;
  padding-top: 40px;
  padding-bottom: 8px;
  @media (max-width: 600px) {
    padding-bottom: 4px;
  }
`;

export default function CardHoverPrinc(props: iProps) {
    return (
        <ContentPadding
            fontFamily={props.fontFamily}
            onClick={() => props.onSetMaterItem(props.search)}
        >
            <CardActionAreaComp>
                <ContentPrinc>
                    <CardComponent>
                        <GridContainer
                            style={{ width: "100%", margin: 0 }}
                            container
                            spacing={0}
                        >
                            <GridComp key={0} item xl={7} md={7} sm={6} xs={12}>
                                <ContentButtonIcon>
                                    <IconButtonComp
                                        disableFocusRipple
                                        disableRipple
                                        size={"small"}
                                        children={<IconPlay />}
                                    />
                                </ContentButtonIcon>
                                <CardMediaBase>
                                    <CardMediaComp image={props.image} />
                                </CardMediaBase>
                            </GridComp>
                            <GridComp key={1} item xl={5} md={5} sm={6} xs={12}>
                                <ContentDesc>
                                    <ContentItemDesc>
                                        <ContentItemDescSec>
                                            <DescTop children={props.title} />
                                            <DescTitle variant="h1" children={props.desc} />
                                            <DescSec variant="h2" children={props.descSec} />
                                            <ContentButton>
                                                <ButtonComp children={props.buttonDesc} />
                                            </ContentButton>
                                        </ContentItemDescSec>
                                    </ContentItemDesc>
                                </ContentDesc>
                            </GridComp>
                        </GridContainer>
                    </CardComponent>
                </ContentPrinc>
            </CardActionAreaComp>
        </ContentPadding>
    );
}
