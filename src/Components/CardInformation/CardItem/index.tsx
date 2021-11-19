import React from "react";
import { CardActionArea, Typography } from "@material-ui/core";
import styled from "styled-components";
import ICardItem from "./interface";

const ContentPrinc = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 9px;
  border: 1px solid #fff;
  /* background-color: #4caf50; */
`;

const CardActionAreaComp = styled(CardActionArea)`
  color: #fff;
  min-height: 290px;
  border-radius: inherit;
  width: 100%;
  background-color: #012401be;
  padding: 15px;
`;

interface IContentFlex {
  fontFamily: string;
}

const ContentFlex = styled.div<IContentFlex>`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-family: ${props => props.fontFamily};
`;

const TitleFirst = styled.div`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 26px;
  line-height: 1.4;
  color: #fff;
`;
const TitleSec = styled.div`
  font-weight: 800;
  letter-spacing: 3px;
  font-size: 60px;
  text-transform: uppercase;
  padding: 18px 0px 18px 0px;
  /* -webkit-text-stroke: 0.5px rgb(8,127,35); */
  color: #fff;
`;
const Desc = styled.div`
  font-size: 18px;
  line-height: 1.75;
  text-align: center;
  letter-spacing: 0.1px;
  /* margin-right: 35px;
  margin-left: 35px; */
  font-weight: 500;
  color: #fff;
`;

const TypographyComp = styled(Typography)`
  text-transform: uppercase;
`;

export default function CardItem(props: ICardItem) {
  return (
    <ContentPrinc>
      <CardActionAreaComp>
        <ContentFlex fontFamily={props.fontFamily}>
          <TypographyComp variant="h5" children={props.titleFirst} />
          <TypographyComp variant="h2" children={props.titleSec} />
          <Typography variant="h6" children={props.desc} />
          {/* <TitleFirst children={props.titleFirst} /> */}
          {/* <TitleSec children={props.titleSec} /> */}
          {/* <Desc children={props.desc} /> */}
        </ContentFlex>
      </CardActionAreaComp>
    </ContentPrinc>
  );
}
