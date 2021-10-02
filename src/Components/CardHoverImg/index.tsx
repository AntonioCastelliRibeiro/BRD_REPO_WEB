import React from "react";
import { Container, Grid, Hidden } from "@material-ui/core";
import styled from "styled-components";
import CardItem from "./CardItem";
import CardItemMobile from "./CardItemMobile";
import IProps from "./interface";
import data from "./data.js";
import DescPrinc from "../CardHover/DescPrinc";

const C_COLOR = "#fff";

const ContentBg = styled.div`
  height: 100%;
  width: 100%;
  /* background: rgb(43, 68, 70);
  background: linear-gradient(
    180deg,
    rgba(43, 68, 70, 1) 35%,
    rgba(48, 105, 110, 1) 100%
  ); */
  background-color: #37993a;
  background-image: linear-gradient(#3a8d36, #37993a);
  padding: 30px 0px 130px 0px;

`;

const ContentDescTop = styled.div`
  height: 100%;
  width: 100%;
  /* padding: 36px 0px 45px 0px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const styleGrid = {
    justifyContent: "center",
    color: C_COLOR,
    margin: 0,
    width: "100%"
};

export default function CardHoverImg(props: IProps) {
    return (
        <ContentBg>
            <Container maxWidth="lg">
                <ContentDescTop>
                    <DescPrinc fontFamily={props.fontFamily} descFirst={"Teste Descrição Titulo"} descSec={"Teste Descrição"} />
                </ContentDescTop>
                <Grid style={styleGrid} spacing={2} container>
                    {data.map((e, count) => (
                        <React.Fragment key={count}>
                            <Hidden xsDown>
                                <Grid key={count} item xs={12} sm={12} md={4} xl={3}>
                                    <CardItem
                                        fontFamily={props.fontFamily}
                                        count={count}
                                        image={e.image}
                                        logo={e.logo}
                                        title={e.title}
                                        desc={e.desc}
                                        descHover={e.descHover}
                                    />
                                </Grid>
                            </Hidden>
                            <Hidden smUp>
                                <Grid key={count} item xs={12} sm={12} md={6} xl={3}>
                                    <CardItemMobile
                                        fontFamily={props.fontFamily}
                                        count={count}
                                        image={e.image}
                                        logo={e.logo}
                                        title={e.title}
                                        desc={e.desc}
                                        descHover={e.descHover}
                                    />
                                </Grid>
                            </Hidden>
                        </React.Fragment>
                    ))}
                </Grid>
            </Container>
        </ContentBg>
    );
}
