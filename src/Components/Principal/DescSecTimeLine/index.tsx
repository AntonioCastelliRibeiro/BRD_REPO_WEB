import React from "react";
import styled from "styled-components";
import { IProps } from "./interface";

const ContentPrinc = styled.div<IProps>`
    font-size: 30px;
    font-weight: 500;
    font-family: ${props => props.fontFamily};
    color: black;
    display: flex;
    text-align: center;
    z-index: 2;
    line-height: 2;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    padding-bottom:9px;
`;

export default function DescSecTimeLine(props: IProps) {
    return (
        <ContentPrinc
            data-aos="fade"
            data-aos-delay="200"
            fontFamily={props.fontFamily}
            children={props.firstDescScroll}
        />
    )
}