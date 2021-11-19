import React from "react";
import { Container, Grid } from "@material-ui/core";
import styled from "styled-components";
import { motion } from "framer-motion";

import IProps from "./interface";

import objData from "./data.js";
import PatrocItem from "./PatrocItem";
import PatrocCapa from "./PatrocCapa";

interface IContentPrinc {
  fontFamily: string;
  bgImage: string;
}

const ContentPrinc = styled.div<IContentPrinc>`
  font-family: ${(props) => props.fontFamily};
  display: flex;
  justify-content: center;
  flex-direction: column;  
  /* background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: 50%; */
  background-color: transparent;
  /* background-color: rgb(8, 127, 35); */
`;

const bgImage =
  "https://images.unsplash.com/photo-1620931688541-605e52dc27ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80";

export default function Patroc(props: IProps) {

  return (
    <ContentPrinc bgImage={bgImage} fontFamily={props.fontFamily}>
      <Container maxWidth="xl">
        <PatrocCapa fontFamily={props.fontFamily} />
        <Grid
          style={{
            // paddingBottom: "30px",
            display: "flex",
            textAlign: "center",
            width: "100%",
            margin: 0
            // paddingLeft: "20px"
          }}
          container
          spacing={2}
        >
          {objData.map((e, count) => (
            <PatrocItem {...e} count={count} />
          ))}
        </Grid>
      </Container>
    </ContentPrinc>
  );
}
