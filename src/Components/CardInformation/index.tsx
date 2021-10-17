import React from "react";
import { Grid, Container } from "@material-ui/core";
import styled from "styled-components";
import CardItem from "./CardItem";
import data from "./data.js";
import IProps from "./interface";
import DescPrinc from "../CardHover/DescPrinc";

const ContentColor = styled.div`
    background-color: rgb(8, 127, 35);
    padding-top: 48px;
    padding-bottom: 130px;
`;

const C_FIRST_DESC_SCROLL = "Saiba mais sobre a vantagem em investir no agro."
const C_SEC_DESC_SCROLL = "O Agro movimenta a economia dos paises em todo o mundo."

export default function CardInformation(props: IProps) {
    return (
        <ContentColor>
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
                                style={{ display: "flex", justifyContent: "center" }}
                            >
                                <div data-aos="fade-up" data-aos-delay={250 * key}>
                                    <CardItem fontFamily={props.fontFamily} desc={e.desc} titleFirst={e.titleFirst} titleSec={e.titleSec} />
                                </div>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </ContentColor>
    );
}
