import React, { Suspense, useEffect, useState, lazy } from "react";
import styled from "styled-components";
import { AnimateSharedLayout } from "framer-motion";
import {
    Grid,
    createTheme,
    ThemeProvider,
    Hidden
} from "@material-ui/core";

// import CardComp from "./CardComp";
// import CardCompMobile from "./CardCompMobile";
// import CardHoverPrinc from "./CardHoverPrinc";

const CardComp = lazy(() => import("./CardComp"));
const CardCompMobile = lazy(() => import("./CardCompMobile"));
const CardHoverPrinc = lazy(() => import("./CardHoverPrinc"));


import iCard from "./interface";
import objCard from "../GridMater/data.js";
import ButtonLoad from "./ButtonLoad";
import SkeletonComp from "../SkeletonComp";


const ContentBtnLoad = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
`;

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
            <Suspense fallback={<SkeletonComp principal={true} />} >
                <GridComp key={count} item xl={12} md={12} sm={12} xs={12}>
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
                </GridComp>
            </Suspense>
        );
    }


    function retornarSec(e: iCard, count: number) {
        return (
            <Suspense fallback={<SkeletonComp principal={false} />} >
                <GridComp key={count} item xl={4} md={4} sm={6} xs={12}>
                    <Hidden xsDown>
                        <CardComp fontFamily={props.fontFamily} count={count} datacard={e} onSetMaterItem={(e) => props.onSetMaterItem(e)} />
                    </Hidden>
                    <Hidden smUp>
                        <CardCompMobile fontFamily={props.fontFamily} count={count} datacard={e} onSetMaterItem={(e) => props.onSetMaterItem(e)} />
                    </Hidden>
                </GridComp>
            </Suspense>
        );

    }

    return (
        <>
            <GridContainer
                style={{ width: "100%", margin: 0 }}
                container
                spacing={2}
            >
                <AnimateSharedLayout>
                    {dataCard.map((e, count) => count === 0 ? retornarPrinc(e, count) : (count >= onNumLoadPost) ? false : retornarSec(e, count))}
                </AnimateSharedLayout>
            </GridContainer>
            <ContentBtnLoad>
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
            </ContentBtnLoad>
        </>
    );
}
