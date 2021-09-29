import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import IProps from "./interface";

const transition = "ease-in-out 0.5s";

interface IDescHoverUp {
  hover: boolean;
  mobile: boolean;
  transitionDelay: string;
}

const DescHoverUp = styled(motion.div) <IDescHoverUp>`
  font-size: 3vw;
  font-weight: 600;
  letter-spacing: 0;
  opacity: ${(props) => (props.hover ? 1 : "0")};
  text-align: center;
  color: #f0e1ce;
  transform: translateY(
    ${(props) => (props.mobile ? "0px" : props.hover ? "130px" : "100px")}
  );
  transition: ${transition};
  transition-delay: ${(props) => props.transitionDelay};
  transition-property: all;
`;

export default function DescHover(props: IProps) {
  return (
    <DescHoverUp
      mobile={props.mobile}
      hover={props.hover}
      children={props.desc}
      transitionDelay={props.hover ? "600ms" : "0ms"}
    />
  );
}
