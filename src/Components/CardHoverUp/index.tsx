import React from "react";
import {
    Grid,
    createTheme,
    ThemeProvider,
    Container,
    Hidden
} from "@material-ui/core";
import CardComp from "./CardComp";
import CardCompMobile from "./CardCompMobile";
import CardHoverPrinc from "./CardHoverPrinc";
import styled from "styled-components";
import { useEffect, useState } from "react";
import iCard from "./interface";
import objCard from "../GridMater/data.js";
import { AnimateSharedLayout } from "framer-motion";
import ButtonLoad from "./ButtonLoad";

const theme = createTheme({
    typography: {
        h1: {
            fontSize: 48,
            fontWeight: 800
        },
        h2: {
            // fontSize: 18,
            fontWeight: 700
        }
    }
});

const GridContainer = styled(Grid)``;

const GridComp = styled(Grid)``;

const C_SIZE_DATA = objCard.length;

interface IProps {
    fontFamily: string;
    onSetMaterItem(patch: string): any;
}

export default function CardHoverUp(props: IProps) {
    // const { scrollY } = useViewportScroll();
    // const [scrollYState, setScrollY] = useState(scrollY.current);
    const [onNumLoadPost, setNumLoadPost] = useState(7);
    const [dataCard, setDataCard] = useState<iCard[]>([]);

    useEffect(() => {
        setDataCard(objCard);
    }, []);

    // useEffect(() => {
    //   const subscription = scrollY.onChange((e) => {
    //     setScrollY(scrollY.current);
    //   });
    //   return subscription;
    // }, [scrollY]);

    // useEffect(() => {
    //   const executarFuncion = () => {
    //     const C_ScrollVp = document.documentElement.scrollHeight * 0.8;
    //     console.log(scrollYState);
    //     console.log(C_ScrollVp);
    //     if (onNumLoadPost === C_SIZE_DATA) {
    //       setNumLoadPost(onNumLoadPost);
    //     } else if (scrollYState >= C_ScrollVp) {
    //       setNumLoadPost(onNumLoadPost + 3);
    //     }
    //   };

    //   return executarFuncion;
    // }, [scrollYState, onNumLoadPost]);

    function retornarPrinc(e: iCard, count: number) {
        return (
            <CardHoverPrinc
                fontFamily={props.fontFamily}
                count={count}
                title={e.title}
                search={e.search}
                onSetMaterItem={() => props.onSetMaterItem(e.search)}
                desc={e.desc}
                descSec={e.descSec}
                buttonDesc={e.buttonDesc}
                image={e.img}
            />
        );
    }


    function retornarSec(e: iCard, count: number) {
        if (count >= onNumLoadPost) {
            return false;
        } else {
            return (
                <GridComp key={count} item xl={4} md={4} sm={6} xs={12}>
                    <Hidden xsDown>
                        <CardComp fontFamily={props.fontFamily} count={count} datacard={e} onSetMaterItem={(e) => props.onSetMaterItem(e)} />
                    </Hidden>
                    <Hidden smUp>
                        <CardCompMobile fontFamily={props.fontFamily} count={count} datacard={e} onSetMaterItem={(e) => props.onSetMaterItem(e)} />
                    </Hidden>
                </GridComp>
            );
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <GridContainer
                style={{ width: "100%", margin: 0 }}
                container
                spacing={1}
            >
                <AnimateSharedLayout>
                    {dataCard.map((e, count) => count === 0 ? retornarPrinc(e, count) : retornarSec(e, count))}
                </AnimateSharedLayout>
            </GridContainer>
            <ButtonLoad
                fontFamily={props.fontFamily}
                numPost={onNumLoadPost}
                sizeObj={C_SIZE_DATA}
                onClick={() =>
                    setTimeout(() => {
                        setNumLoadPost(onNumLoadPost + 3);
                    }, 300)
                }
            />
        </ThemeProvider>
    );
}
