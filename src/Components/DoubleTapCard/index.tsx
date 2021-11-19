import React from "react";
import { Grid } from "@material-ui/core";
import CardComp from "./Card";
import styled from "styled-components";
import { useEffect, useState } from "react";
import iCard from "./interface";
import objCard from "./data.js";

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
        <GridContainer style={{ width: "100%", margin: 0 }} container spacing={2}>
            {dataCard.map((e, count) => (
                <Grid key={count} item xs={12} md={6}>
                    <CardComp count={count} datacard={e} />
                </Grid>
            ))}
        </GridContainer>
    );
}
