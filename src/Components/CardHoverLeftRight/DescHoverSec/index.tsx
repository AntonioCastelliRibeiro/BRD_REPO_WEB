import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import IProps from "./interface";

const transition = "ease 0.7s";

interface IDescHoverUp {
    hover: boolean;
    mobile: boolean;
    transitionDelay: string;
}

const DescHoverUp = styled(motion.div) <IDescHoverUp>`
  font-size: 2.5vw;
  font-weight: 600;
  letter-spacing: 0;
  opacity: ${(props) => (props.hover ? 1 : "0")};
  transition: ${transition};
  text-align: center;
  color: #f0e1ce;
  transform: translateY(${(props) => (props.mobile ? "0px" : "90px")});
  transition-delay: ${(props) => props.transitionDelay};
  transition-property: opacity;
`;

export default function DescHoverSec(props: IProps) {
    return (
        <DescHoverUp
            mobile={props.mobile}
            hover={props.hover}
            children={props.desc}
            transitionDelay={props.hover ? "800ms" : "0ms"}
        />
    );
}
