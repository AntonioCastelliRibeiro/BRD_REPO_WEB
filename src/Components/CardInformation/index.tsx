import React from "react";
import { Grid, Container } from "@material-ui/core";
import styled from "styled-components";
import CardItem from "./CardItem";
import data from "./data.js";
import IProps from "./interface";
import DescPrinc from "../CardHover/DescPrinc";

const ContentPrinc = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 130px;
    /* background-color: rgb(8, 127, 35); */
    background-color: transparent;

`;

const ContentBgImage = styled.div`
    background-color: rgb(8, 127, 35);
    padding-top: 48px;
    padding-bottom: 130px;
    background-repeat: no-repeat;
    width: 100%;
    background-size: cover;
    background-image: url("https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80");
    background-position: bottom;
    background-position: center; 
    background-repeat: no-repeat;
    transition: ease 2000ms;
    &:hover{
        background-position: bottom;
    };
`;

const ContentbgImage = styled.div`
    border-radius: 10px;
    height: 100%;
    width: 100%;
`;
const C_FIRST_DESC_SCROLL = "Saiba mais sobre a vantagem em investir no agro."
const C_SEC_DESC_SCROLL = "O Agro movimenta a economia dos paises em todo o mundo."


export default function CardInformation(props: IProps) {
    return (
        <ContentPrinc>
            <ContentBgImage>
                <Container maxWidth="lg">
                    <DescPrinc fontFamily={props.fontFamily} descFirst={C_FIRST_DESC_SCROLL} descSec={C_SEC_DESC_SCROLL} />
                    <Grid container spacing={3} style={{ width: "100%", margin: 0 }}>
                        {data.map((e, key) => {
                            return (
                                <Grid
                                    item
                                    key={key + 1}
                                    xs={12}
                                    sm={6}
                                    md={4}
                                    lg={4}
                                    xl={4}
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",

                                    }}
                                >
                                    <ContentbgImage data-aos="fade-up" data-aos-delay={250 * key}>
                                        <CardItem fontFamily={props.fontFamily} desc={e.desc} titleFirst={e.titleFirst} titleSec={e.titleSec} />
                                    </ContentbgImage>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Container>
            </ContentBgImage>
        </ContentPrinc>

    );
}
