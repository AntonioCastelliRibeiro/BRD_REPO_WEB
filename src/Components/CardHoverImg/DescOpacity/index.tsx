import React from "react";
import styled from "styled-components";
import IProps from "./interface";

const transition = "ease-in-out 0.5s";
const transitionOut = "ease-in-out 0s";

interface IDescHoverUp {
    opacity: number;
    mobile: boolean;
    transition: string;
    transitionDelay: string;
    fontFamily: string;
}

const DescHoverUp = styled.div<IDescHoverUp>`
  font-family: ${props => props.fontFamily};
  font-size: 19px;
  font-weight: 600;
  letter-spacing: 0;
  opacity: ${(props) => props.opacity};
  transition: ${(props) => props.transition};
  text-align: center;
  color: #fff;
  transition-delay: ${(props) => props.transitionDelay};
  transform: translateY(
    ${(props) => (props.mobile ? "20px" : props.opacity > 0 ? "-20px" : "20px")}
  );
`;

export default function DescOpacity(props: IProps) {
    return (
        <DescHoverUp
            fontFamily={props.fontFamily}
            transition={props.hover ? transition : transitionOut}
            transitionDelay={props.hover ? "300ms" : "0ms"}
            mobile={props.mobile}
            opacity={props.hover ? 1 : 0}
            children={props.desc}
        />
    );
}
