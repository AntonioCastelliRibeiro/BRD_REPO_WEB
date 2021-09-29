import React, { useEffect, useState } from "react";
import {
    CardActionArea,
    CardMedia,
    Container,
    Hidden
} from "@material-ui/core";
import { motion } from "framer-motion";
import styled from "styled-components";
import ButtonHover from "./ButtonHover";
import DescHover from "./DescHover";
import DescHoverSec from "./DescHoverSec";
import DescMidComp from "./DescMid";
import logoNeg from "../../Image/logo/brdneg.png";

import IState from "./interface";

import dataCard from "./data.js";
import DescPrinc from "../CardHover/DescPrinc";

// import IState from "./interface";

const transition = "ease-in-out 1s";
const C_SIZE_HEIGHT = "500px";

interface IContent {
    hover?: boolean;
    mobile?: boolean;
    hoverLeft?: boolean;
    hoverRight?: boolean;
}

const ContentPrinc = styled.div<IContent>`
  height: ${C_SIZE_HEIGHT};
  user-select: none;
  width: 100%;
  border-radius: ${(props) => (props.mobile ? "0px" : "18px")};
  overflow: hidden;
  display: flex;
  z-index: 1;
`;

const ContentFirst = styled.div<IContent>`
  height: 100%;
  user-select: none;
  width: 100%;
  background-color: #37993a;
  background-image: linear-gradient(#37993a,#3a8d36);
  padding-top: 30px;
  padding-bottom: 130px;
  overflow: hidden;
  display: flex;
  z-index: 1;
`;


const ContentPrincMobile = styled.div<IContent>`
  display: flex;
  flex-direction: column;
  height: 100%;
  user-select: none;
  width: 100%;
  border-radius: ${(props) => (props.mobile ? "0px" : "18px")};
  overflow: hidden;
  display: flex;
  z-index: 1;
`;

const CardMediaComp = styled(CardMedia)`
  height: inherit;
  width: 100%;
  z-index: 2;
  transition: ${transition};
`;

const ContentLeft = styled.div<IContent>`
  height: ${(props) => (props.mobile ? "400px" : "100%")};
  border-radius: ${(props) => (props.mobile ? "18px" : "0px")};
  width: ${(props) => (props.mobile ? "100%" : props.hover ? "0%" : "100%")};
  transition: ${transition};
  overflow: hidden;
`;

const ContentRight = styled.div<IContent>`
  height: ${(props) => (props.mobile ? "400px" : "100%")};
  border-radius: ${(props) => (props.mobile ? "18px" : "0px")};
  width: ${(props) => (props.mobile ? "100%" : props.hover ? "0%" : "100%")};
  overflow: hidden;
  transition: ${transition};
`;

const ContentDesc = styled(motion.div) <IProps>`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  font-family: ${props => props.fontFamily};
  transition: ${transition};
`;

const LogoMid = styled(CardMedia)`
  height: 145px;
  width: 150px;
  z-index: 20;
  transition: ${transition};
`;

const CardActionAreaComp = styled(CardActionArea)`
  height: inherit;
  width: 100%;
  color: #f0e1ce;
  overflow: hidden;
`;

interface IProps {
    fontFamily: string;
    firstDescScroll?: string;
}

const C_DESC_SEC = "Bom dia Rural vem para auxiliar no conteúdo agricola no sudoeste do Paraná.";

export default function CardHoverLeftRight(props: IProps) {
    const [onHoverLeft, setHoverLeft] = useState(false);
    const [onHoverRight, setHoverRight] = useState(false);
    const [dataLeft, setDataLeft] = useState<IState>(dataCard[0]);
    const [dataRight, setDataRight] = useState<IState>(dataCard[1]);

    useEffect(() => {
        setDataLeft(dataCard[0]);
        setDataRight(dataCard[1]);
    }, []);

    useEffect(() => {
        if (onHoverLeft && onHoverRight) {
            setHoverRight(false);
            setHoverLeft(false);
        }
    }, [onHoverLeft, onHoverRight]);

    return (
        <ContentFirst>
            <Container maxWidth="lg">
                <DescPrinc fontFamily={props.fontFamily} descFirst={props.firstDescScroll} descSec={C_DESC_SEC} />
                <Hidden smDown>
                    <ContentPrinc mobile={false}>
                        <ContentLeft
                            mobile={false}
                            hover={onHoverRight}
                            onMouseEnter={() => setHoverLeft(true)}
                            onMouseLeave={() => setHoverLeft(false)}
                        >
                            <CardMediaComp image={dataLeft.img}>
                                <ContentDesc fontFamily={props.fontFamily}>
                                    <DescHover
                                        mobile={false}
                                        hover={onHoverLeft}
                                        desc={dataLeft.title}
                                    />
                                    <DescHoverSec
                                        mobile={false}
                                        hover={onHoverLeft}
                                        desc={dataLeft.desc}
                                    />
                                    <ButtonHover
                                        mobile={false}
                                        key={"esquerdo"}
                                        desc={dataLeft.buttonDesc}
                                        left={true}
                                        hoverLeft={onHoverLeft}
                                        hoverRight={onHoverRight}
                                    />
                                </ContentDesc>
                            </CardMediaComp>
                        </ContentLeft>
                        <ContentRight
                            mobile={false}
                            hover={onHoverLeft}
                            onMouseEnter={() => setHoverRight(true)}
                            onMouseLeave={() => setHoverRight(false)}
                        >
                            <CardMediaComp image={dataRight.img}>
                                <ContentDesc fontFamily={props.fontFamily}>
                                    <DescHover
                                        mobile={false}
                                        hover={onHoverRight}
                                        desc={dataRight.title}
                                    />
                                    <DescHoverSec
                                        mobile={false}
                                        hover={onHoverRight}
                                        desc={dataRight.desc}
                                    />
                                    <ButtonHover
                                        mobile={false}
                                        key={"direito"}
                                        desc={dataRight.buttonDesc}
                                        left={false}
                                        hoverLeft={onHoverLeft}
                                        hoverRight={onHoverRight}
                                    />
                                </ContentDesc>
                            </CardMediaComp>
                        </ContentRight>
                    </ContentPrinc>
                    <DescMidComp
                        fontFamily={props.fontFamily}
                        logo={logoNeg}
                        right={onHoverRight}
                        left={onHoverLeft}
                        hover={onHoverRight || onHoverLeft}
                        setHoverLeft={() => setHoverLeft(true)}
                        setHoverRight={() => setHoverRight(true)}
                    />
                </Hidden>
                <Hidden mdUp>
                    <ContentPrincMobile>
                        <ContentLeft mobile hover={false}>
                            <CardActionAreaComp>
                                <CardMediaComp image={dataLeft.img}>
                                    <ContentDesc fontFamily={props.fontFamily}>
                                        <LogoMid image={logoNeg} />
                                        <DescHover
                                            mobile={true}
                                            hover={true}
                                            desc={dataLeft.title}
                                        />
                                        <DescHoverSec
                                            mobile={true}
                                            hover={true}
                                            desc={dataLeft.desc}
                                        />
                                        <ButtonHover
                                            mobile
                                            key={"esquerdo"}
                                            desc={dataLeft.buttonDesc}
                                            left={true}
                                            hoverLeft={true}
                                            hoverRight={false}
                                        />
                                    </ContentDesc>
                                </CardMediaComp>
                            </CardActionAreaComp>
                        </ContentLeft>
                        <div style={{ padding: 9 }} />
                        <ContentRight mobile hover={onHoverLeft}>
                            <CardActionAreaComp>
                                <CardMediaComp image={dataRight.img}>
                                    <ContentDesc fontFamily={props.fontFamily}>
                                        <LogoMid image={logoNeg} />
                                        <DescHover
                                            mobile={true}
                                            hover={true}
                                            desc={dataRight.title}
                                        />
                                        <DescHoverSec
                                            mobile={true}
                                            hover={true}
                                            desc={dataRight.desc}
                                        />
                                        <ButtonHover
                                            mobile
                                            key={"direito"}
                                            desc={dataRight.buttonDesc}
                                            left={false}
                                            hoverLeft={false}
                                            hoverRight={true}
                                        />
                                    </ContentDesc>
                                </CardMediaComp>
                            </CardActionAreaComp>
                        </ContentRight>
                    </ContentPrincMobile>
                </Hidden>
            </Container>
        </ContentFirst>
    );
}


