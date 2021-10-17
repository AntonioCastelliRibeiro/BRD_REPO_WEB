import React from "react";
import { motion } from "framer-motion";
import { CardActionArea, CardMedia, Typography } from "@material-ui/core";
import styled from "styled-components";
// import DescCard from "../DescCard";
import iProps from "./interface";

const transition = "ease-in-out .45s";

const CardMediaComp = styled(CardMedia)`
  background-color: #f0ffff;
  height: 300px;
  width: 100%;
  margin-bottom: 60px;
  filter: brightness(80%);
  transition: ${transition};
`;

const CardComponent = styled(motion.div)`
  height: inherit;
  width: inherit;
  border-radius: 18px;
  transition: ${transition};
`;

const CardActionComp = styled.div`
  position: relative;
`;

const ButtonComp = styled(Typography)`
  font-family: inherit;
  padding: 8px 16px;
  border-radius: 4px;
  background-color: transparent;
  color: black;
  border: 1px solid #66bb6a;
  filter: brightness(89%);
  transition: ${transition};
`;

const ContentSec = styled(motion.div)`
  height: inherit;
  width: inherit;
  overflow: hidden;
  width: 100%;
  border-radius: 18px;
  transition: ${transition};
  &:hover {
    ${ButtonComp} {
      background-color: #fff;
      color: #66bb6a;
    }
  }
`;

const ContentDescCard = styled(motion.div)`
  font-family: inherit;
  width: 100%;  
  overflow: hidden;
  transition: ${transition};
`;

const ContentDesc = styled.div`
  font-family: inherit;
  height: 360px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${transition};
  /* @media (min-width: 600px) {
    padding-top: 2.9vw;
  }
  @media (min-width: 960px) {
    padding-top: 2vw;
  }
  @media (min-width: 1000px) {
    padding-top: 2vw;
  }
  @media (min-width: 1280px) {
    padding-top: 1vw;
  } */
`;

const DescTitle = styled(Typography)`
  font-family: inherit;
  /* color: #000; */
  text-align: left;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: 26px;
  margin-top: 0;
  margin-bottom: 0;
  opacity: 1;
  padding-top: 0px;
  transition: ${transition};
`;

const DescSec = styled(Typography)`
  font-family: inherit;
  /* margin-top: 15px; */
  /* color: rgba(0, 0, 0, 0.7); */
  font-size: 14px;
  letter-spacing: 0;
  line-height: 24px;
  opacity: 0;
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
  transition: ${transition};
`;

const ContentItemDescSec = styled(motion.div)`
  color: #004500;
  font-family: inherit;
  height: 100%;
  padding: 16px 16px 16px 16px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  transition: ${transition};
`;

const DescTop = styled(motion.div)`
  user-select: none;
  position: absolute;
  z-index: 3;
  top: 12px;
  left: 16px;
  color: #fff;
  font-family: inherit;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.63px;
  line-height: 13px;
  text-transform: uppercase;
  transition: ease 1s;
`;

const ContentPrincUp = styled.div`
  font-family: inherit;
  position: absolute;
  border-radius: 18px;
  z-index: 1;
  background-color: rgb(0,69,0);
  background-image: linear-gradient(180deg, rgba(0,69,0,1) 0%, rgba(76,175,80,1) 0%);
  color: black;
  transform: translateY(-80px);
  user-select: none;
  width: 100%;
  overflow: hidden;
  transition: ${transition};
`;

const ContentButton = styled.div`
  font-family: inherit;
  opacity: 0;
  transition: ${transition};
`;

const CardActionAreaComp = styled(CardActionArea)`
  font-family: inherit;
  color: #fff;
`;

interface iContentPrinc {
  fontFamily: string;
}

const ContentPrinc = styled(motion.div) <iContentPrinc>`
  font-family: ${(props) => props.fontFamily};
  min-width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  border-radius: 4px;
  transition: ${transition};
  @media (max-width: 600px) {
    min-width: 280px;
  }
  &:hover {
    ${ContentPrincUp} {
      transform: translateY(-360px);
      border-radius: 0px;
      z-index: 2;
    }
    ${DescSec} {
      opacity: 1;
    }
    ${DescTop} {
      color: #004500;
    }
    ${ContentItemDescSec} {
      padding: 32px 16px 16px 16px;
    }
    ${ContentButton} {
      opacity: 1;
    }
    ${CardMediaComp} {
      transform: scale(1.1);
    }
  }
`;

export default function CardComp(props: iProps) {
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
            <CardMediaComp image={props.datacard.img} />
          </CardComponent>
          <ContentDescCard>
            <ContentPrincUp>
              <CardActionAreaComp>
                <ContentDesc>
                  <ContentItemDesc>
                    <ContentItemDescSec>
                      <DescTitle variant="h1" children={props.datacard.desc} />
                      <DescSec variant="h2" children={props.datacard.descSec} />
                      <ContentButton>
                        <ButtonComp children={props.datacard.buttonDesc} />
                      </ContentButton>
                    </ContentItemDescSec>
                  </ContentItemDesc>
                </ContentDesc>
              </CardActionAreaComp>
            </ContentPrincUp>
          </ContentDescCard>
        </CardActionComp>
      </ContentSec>
    </ContentPrinc>
  );
}
