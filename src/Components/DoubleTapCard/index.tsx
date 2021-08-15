import React from "react";
import { Grid, ThemeProvider } from "@material-ui/core";
import createTheme from "@material-ui/core/styles/createTheme";
import CardComp from "./Card";
import styled from "styled-components";
import { useEffect, useState } from "react";
import iCard from "./interface";
import objCard from "./data.js";

const theme = (props: iProps) => createTheme({
    typography: {
        h1: {
            fontSize: 48,
            fontWeight: 800,
            fontFamily: props.fontFamily
        },
        h2: {
            fontSize: 18,
            fontWeight: 500,
            fontFamily: props.fontFamily
        }
    }
});

const GridContainer = styled(Grid)``;

interface iProps {
    fontFamily: string;
}

export default function DoubleCard(props: iProps) {
    const [dataCard, setDataCard] = useState<iCard[]>([]);

    useEffect(() => {
        setDataCard(objCard);
    }, []);

    return (
        <ThemeProvider theme={theme(props)}>
            <GridContainer style={{ width: "100%", margin: 0 }} container spacing={2}>
                {dataCard.map((e, count) => (
                    <Grid key={count} item xs={12} md={6}>
                        <CardComp count={count} datacard={e} />
                    </Grid>
                ))}
            </GridContainer>
        </ThemeProvider>
    );
}
