import { useMediaQuery, useTheme, Theme } from "@material-ui/core";
import React from "react";
import { Parallax } from "react-parallax";
import styled from "styled-components";
import IProps from "./interface";

interface IParallaxComp {
    height: string;
    width: string;
    theme: Theme;
}

const ParallaxComp = styled(Parallax) <IParallaxComp>`
    height: ${props => props.height};
    width: ${props => props.width};
    background-color: rgb(8, 127, 35);
    ${props => props.theme.breakpoints.down("sm")}{
        height: 100%;
        padding: 10px 0px 10px 0px;
    }
`;

export default function ParallaxImg(props: IProps) {
    const theme = useTheme();

    const MyProps = {
        filter: props.filter || "brightness(100%)",
    }

    return <ParallaxComp style={MyProps} theme={theme} height={props.height} width={props.width} bgImage={props.src} strength={500} children={props.children} />;
}
