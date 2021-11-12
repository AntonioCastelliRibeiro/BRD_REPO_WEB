import React from "react";
import { CardMedia } from "@material-ui/core";
import { motion } from "framer-motion";
import styled from "styled-components";
import IProps from "./interface";

// import logoNeg from "../../../Image/logoneg.png";

const logoNeg =
    "https://www.travelstore.com/wp-content/uploads/2020/04/logo.png";

const transition = "ease-in-out 300ms";

interface IContent {
    opacity?: string;
    translatex?: string;
    translatey?: string;
    transitionDelay?: string;
}

interface IContentDescMid {
    fontFamily: string;
}

const ContentDescMid = styled(motion.div) <IContentDescMid>`
  height: 500px;
  display: contents;
  margin-top: -500px;
  user-select: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  color: #fff;
  font-family: ${props => props.fontFamily};
  transition: ${transition};
`;

const DescMid = styled(motion.div) <IContent>`
  padding-top: 45px;
  display: flex;
  z-index: 20;
  opacity: ${(props) => props.opacity};
  transform: translateY(${(props) => props.translatey});
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 65px;
  color: #fff;
  transition: ${transition};
  transition-delay: ${(props) => props.transitionDelay};
  transition-property: all;
`;

const LogoMid = styled(CardMedia) <IContent>`
  height: 145px;
  width: 150px;
  margin-top: 40px;
  z-index: 20;
  z-index: 1;
  transition: ${transition};
`;

const ContentVariant = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    },
    exit: {
        opacity: 0
    }
};

export default function CardHoverLeftRight(props: IProps) {
    return (
        <ContentDescMid
            fontFamily={props.fontFamily}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={ContentVariant}
            onMouseEnter={() =>
                props.left
                    ? props.setHoverLeft()
                    : props.right
                        ? props.setHoverRight()
                        : false
            }
        >
            <LogoMid image={props.logo} />
            <DescMid
                transitionDelay={props.hover ? "100ms" : "200ms"}
                translatey={props.hover ? "-38px" : "-10px"}
                opacity={props.hover ? "0" : "1"}
                children={"Nosso Programa"}
            />
        </ContentDescMid>
    );
}
