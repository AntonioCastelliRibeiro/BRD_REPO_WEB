import { Box, Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import IProps from "./interface";

const transition = { duration: 0.45, ease: "easeInOut" };


interface IDescPrincMobile {
    height?: string;
}

interface IPropsStyled extends IDescPrincMobile {
    fontFamily?: string;
    transition?: string;
}

const TypographyComp = styled(Typography) <IPropsStyled>`
  user-select: none;
  font-weight: 600;
  letter-spacing: 2px;
  text-align: center;
  font-family: ${(props) => props.fontFamily};
`;

const TypographyCompDesc = styled(Typography) <IPropsStyled>`
  font-family: ${(props) => props.fontFamily};
`;

const DescScroll = styled.div<IPropsStyled>`
  user-select: none;
  position: fixed;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  height: ${props => props.height};
  width: 100%;
  opacity: 1;
  transition: ${(props) => props.transition};
  position: fixed;
  color: #fff;
  z-index: 1;
  padding-left: 40px;
`;


const DescPrincMobile = styled.div<IDescPrincMobile>`
  height: ${props => props.height};
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  color: white;
  &:hover {
    background-color: "blue";
  }
`;

const ContentFadeDesc = styled(motion.div)``;

export default function DescScrollDown(props: IProps) {
    return (
        <ContentFadeDesc animate={{ opacity: 1 }} transition={transition} >
            <DescPrincMobile
                height={props.principal ? "98vh" : "60vh"}
                data-aos="fade"
                data-aos-delay="1000"
                children={<TypographyComp variant="h1" fontFamily={props.fontFamily} children={props.descPrinc} />}
            />
            <DescScroll height={props.principal ? "100vh" : "60vh"} transition={"ease-in-out .45s"} data-aos="fade-down" data-aos-delay="1000">
                <Box paddingBottom="35px"><TypographyCompDesc fontFamily={props.fontFamily} variant="h5" children={"Rolar para Baixo"} /> </Box>
            </DescScroll>
        </ContentFadeDesc>
    )
}