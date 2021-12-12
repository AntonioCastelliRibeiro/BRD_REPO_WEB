import React from "react";
import { CardActionArea, Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import styled from "styled-components";
import IProps from "./interface";

const transition = "ease-in-out 0.33s";

interface IContent {
    hover?: boolean;
    hoverBg?: boolean;
    transitionDelay?: string;
    hoverLeft?: boolean;
    hoverRight?: boolean;
    left?: boolean;
}

const ButtonCompLeft = styled.div<IContent>`
  border-radius: 9px;
  width: 100px;
  filter: brightness(90%);
  cursor: pointer;
  font-family: inherit;
  color: black;
  padding: 17px 33px 17px 33px;
  user-select: none;
  opacity: ${(props) => (props.hover ? 0 : 1)};
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 1.5px;
  background-color:  #fff;
  transition: ${transition};
  transition-delay: ${(props) => props.transitionDelay};
  transition-property: all;
  @media (max-width: 900px){
    font-size: 15px;
  }
`;

const ContentButtonLeft = styled(motion.div) <IContent>`
  width: 100%;
  display: flex;
  font-family: inherit;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: ${transition};
  transform: translateX(${props => props.hover ? "0px" : props.left ? "25%" : "-25%"});
  transition-delay: 100ms;
`;

const TypographyComp = styled(Typography)`
    font-weight: 800;
`;

export default function Butthover(props: IProps) {
    const hover = props.left
        ? !props.hoverRight || props.hoverLeft
        : props.hoverRight || !props.hoverLeft;

    const hoverBg = props.left
        ? !props.hoverRight && props.hoverLeft
        : props.hoverRight && !props.hoverLeft;

    return (
        <>
            <ContentButtonLeft
                left={props.left}
                hoverLeft={props.hoverLeft}
                hoverRight={props.hoverRight}
                hover={props.hoverRight || props.hoverLeft}
            >
                {
                    props.mobile ? (
                        <ButtonCompLeft
                            hoverLeft={props.hoverLeft}
                            hoverRight={props.hoverRight}
                            hover={!hover}
                            children={<TypographyComp variant="body2" children={props.desc} />}
                            transitionDelay={"0ms"}
                        />
                    ) : (
                        <ButtonCompLeft
                            hoverLeft={props.hoverLeft}
                            hoverRight={props.hoverRight}
                            hoverBg={hoverBg}
                            hover={!hover
                            }
                            children={<TypographyComp variant="h6" children={props.desc} />}
                            transitionDelay={hoverBg ? "350ms" : "0ms"}
                        />
                    )}
            </ContentButtonLeft>
        </>
    );
}

