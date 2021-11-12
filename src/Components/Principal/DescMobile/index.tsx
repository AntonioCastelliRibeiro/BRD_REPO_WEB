import React from "react";
import styled from "styled-components";
import { CardMedia } from "@material-ui/core";
import { IProps } from "./interface";

const ImageBg = styled(CardMedia)`
    position: fixed;
    height: 105vh;
    width: 100%;
`;

const DescPrincMobile = styled.div<IProps>`
  height: 100vh;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10vw;
  font-weight: 800;
  font-family: ${(props) => props.fontFamily};
  color: white;
  letter-spacing: 1px;
  &:hover {
    background-color: "blue";
  }
`;

export default function DescMobile(props: IProps) {
    return (
        <>
            <ImageBg image={props.imgPrinc} />
            <DescPrincMobile
                data-aos="fade"
                data-aos-delay="1000"
                fontFamily={props.fontFamily}
                children={props.namePrograma}
            />
        </>
    )
}