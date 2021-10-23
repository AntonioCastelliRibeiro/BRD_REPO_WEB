import React from "react";
import styled from "styled-components";
import DescPrinc from "../CardHover/DescPrinc";
import Slider from "../Slider";
import CrSelMaterial from "./CrSelMaterial";
// import { images } from "./data.js";
import IProps from "./interface";

const ContentPrinc = styled.div<IProps>`
  font-family: ${(props) => props.fontFamily};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  background-color:transparent;
  /* background-color: rgb(8, 127, 35); */
`;

const ContentDesc = styled.div`
  /* background-color: #151515; */
  overflow: hidden;
`;

export default function Opinion(props: IProps) {
  return (
    <ContentPrinc fontFamily={props.fontFamily}>
      <ContentDesc>
        <DescPrinc
          paddingTop={"72px"}
          descFirst="Saiba o que nossos clientes dizem sobre o nosso Programa"
          descSec="A opinião é fundamental para a constução de um conteúdo cada vez mais refinado."
        />
      </ContentDesc>
      <CrSelMaterial fontFamily={props.fontFamily} />
      {/* <Slider height={"500px"} fontFamily={props.fontFamily} images={images} /> */}
    </ContentPrinc>
  );
}
