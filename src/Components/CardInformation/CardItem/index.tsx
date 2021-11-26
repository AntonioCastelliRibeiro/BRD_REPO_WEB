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
  background-color: #004500e6;
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

        </ContentFlex>
      </CardActionAreaComp>
    </ContentPrinc>
  );
}
