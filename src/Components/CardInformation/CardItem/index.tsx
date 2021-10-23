import React from "react";
import { CardActionArea } from "@material-ui/core";
import styled from "styled-components";
import ICardItem from "./interface";

const ContentPrinc = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  border: 1px solid #fff;
  /* background-color: #4caf50; */
`;

const CardActionAreaComp = styled(CardActionArea)`
  color: #fff;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  background-color: #0124017a;
`;

interface IContentFlex {
  fontFamily: string;
}

const ContentFlex = styled.div<IContentFlex>`
  font-family: ${props => props.fontFamily};
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 15px;
`;

const TitleFirst = styled.div`
  text-transform: uppercase;
  font-size: 26px;
  line-height: 1.4;
  color: #fff;
`;
const TitleSec = styled.div`
  font-weight: 700;
  font-size: 60px;
  text-transform: uppercase;
  /* -webkit-text-stroke: 0.5px rgb(8,127,35); */
  color: #fff;
`;
const Desc = styled.div`
  font-size: 14px;
  color: #fff;
`;

export default function CardItem(props: ICardItem) {
  return (
    <ContentPrinc>
      <CardActionAreaComp>
        <ContentFlex fontFamily={props.fontFamily}>
          <TitleFirst children={props.titleFirst} />
          <TitleSec children={props.titleSec} />
          <Desc children={props.desc} />
        </ContentFlex>
      </CardActionAreaComp>
    </ContentPrinc>
  );
}
