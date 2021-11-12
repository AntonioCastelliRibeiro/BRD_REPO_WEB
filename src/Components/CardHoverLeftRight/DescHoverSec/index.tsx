import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import IProps from "./interface";

const transition = "ease 0.3s";

interface IDescHoverUp {
    hover: boolean;
    mobile: boolean;
    transitionDelay: string;
}

const DescHoverUp = styled(motion.div) <IDescHoverUp>`
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 1px;
  opacity: ${(props) => (props.hover ? 1 : "0")};
  transition: ${transition};
  text-align: center;
  color: #ffff;
  transform: translateY(${(props) => (props.mobile ? "0px" : "90px")});
  transition-delay: ${(props) => props.transitionDelay};
  transition-property: opacity;
    @media (max-width: 900px){
    font-size: 25px;
  }
`;

export default function DescHoverSec(props: IProps) {
    return (
        <DescHoverUp
            mobile={props.mobile}
            hover={props.hover}
            children={props.desc}
            transitionDelay={props.hover ? "300ms" : "0ms"}
        />
    );
}
