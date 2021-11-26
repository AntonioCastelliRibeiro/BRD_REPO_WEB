import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import IProps from "./interface";
import { Typography } from "@material-ui/core";

const transition = "ease-in-out 0.33s";

interface IDescHoverUp {
  hover: boolean;
  mobile: boolean;
  transitionDelay: string;
}

const DescHoverUp = styled(motion.div) <IDescHoverUp>`
  font-size: 55px;
  font-weight: 600;
  letter-spacing: 1px;
  opacity: ${(props) => (props.hover ? 1 : "0")};
  text-align: center;
  color: #fff;
  transform: translateY(
    ${(props) => (props.mobile ? "0px" : props.hover ? "130px" : "100px")}
  );
  transition: ${transition};
  transition-delay: ${(props) => props.transitionDelay};
  transition-property: all;
  @media (max-width: 900px){
    font-size: 35px;
  }
`;

export default function DescHover(props: IProps) {
  return (
    <DescHoverUp
      mobile={props.mobile}
      hover={props.hover}
      transitionDelay={props.hover ? "300ms" : "0ms"}
    >
      <Typography variant="h2" children={props.desc} />
    </DescHoverUp>
  );
}
