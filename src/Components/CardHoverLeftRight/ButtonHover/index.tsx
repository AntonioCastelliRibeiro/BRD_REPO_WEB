import React from "react";
import { CardActionArea, Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import styled from "styled-components";
import IProps from "./interface";

const transition = "ease-in-out 0.3s";

interface IContent {
    hover?: boolean;
    hoverBg?: boolean;
    transitionDelay?: string;
    hoverLeft?: boolean;
    hoverRight?: boolean;
    left?: boolean;
}

const CardActionAreaComp = styled(CardActionArea)`
  height: inherit;
  width: 190px;
  color: rgb(8, 127, 35);
  font-family: inherit;
  overflow: hidden;
  border-radius: 18px;
`;

const ButtonCompLeft = styled.div<IContent>`
  border-radius: 18px;
  filter: brightness(90%);
  cursor: pointer;
  /* border: ${(props) => (props.hoverBg ? "2px ridge #ffff" : "2px ridge transparent")}; */
  font-family: inherit;
  /* z-index: 2; */
  color: black;
  /* color: ${(props) => (props.hoverBg ? "#ffff" : "black")}; */
  padding: 17px 33px 17px 33px;
  user-select: none;
  opacity: ${(props) => (props.hover ? 0 : 1)};
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 1.5px;
  background-color:  #fff;
  /* background-color: ${(props) => (props.hoverBg ? "rgb(8, 127, 35)" : "#fff")}; */
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

const BgBtnColor = styled.div<IContent>`
  position: absolute;
  height: 60px;
  width: 200px;
  z-index: 1;
  background-color: rgb(0,69,0);
  background-image: linear-gradient(180deg, rgba(0,69,0,1) 0%, rgba(76,175,80,1) 0%);
  margin-left: -30px;
  opacity: ${(props) => (props.hover ? 0 : 1)};
  transition: ${transition};

  /* padding: 8px 10px 8px 10px; */
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
                            // hoverBg={hoverBg}
                            hover={!hover}
                            children={<TypographyComp variant="button" children={props.desc} />}
                            transitionDelay={"0ms"}
                        />
                    ) : (
                        <CardActionAreaComp>
                            <ButtonCompLeft
                                hoverLeft={props.hoverLeft}
                                hoverRight={props.hoverRight}
                                hoverBg={hoverBg}
                                hover={!hover
                                }
                                children={<TypographyComp variant="button" children={props.desc} />}
                                transitionDelay={hoverBg ? "350ms" : "0ms"}
                            />
                        </CardActionAreaComp>
                    )}
                {/* <BgBtnColor hover={!hover} /> */}
            </ContentButtonLeft>
        </>
    );
}

