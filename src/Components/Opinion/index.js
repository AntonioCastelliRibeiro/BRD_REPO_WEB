import styled from "styled-components";
import DescPrinc from "../CardHover/DescPrinc";
import Slider from "../Slider";
import { images } from "./data.js";

const ContentPrinc = styled.div`
  font-family: ${(props) => props.fontFamily};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
`;

const ContentDesc = styled.div`
  background-color: #151515;
  overflow: hidden;
`;

export default function Opinion(props) {
  return (
    <ContentPrinc fontFamily={props.fontFamily}>
      <ContentDesc>
        <DescPrinc
          paddingTop={"79px"}
          descFirst="Saiba o que nossos clientes dizem sobre o nosso Programa"
          descSec="A opinião é fundamental para a constução de um conteúdo cada vez mais refinado."
        />
      </ContentDesc>
      <Slider height={"500px"} fontFamily={props.fontFamily} images={images} />
    </ContentPrinc>
  );
}
