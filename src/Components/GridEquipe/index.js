import { useEffect } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import styled from "styled-components";
import EquipeCapaApresent from "./EquipeCapaApresent";
import dataEquipe from "./data.js";
import EquipeCapa from "./EquipeCapa";

const ContentRelative = styled.div`
  position: relative;
  background: rgba(0, 69, 0, 1);
  background: linear-gradient(339deg, rgba(0, 0, 0, 1) 2%, rgba(0, 69, 0, 1) 92%);
  padding-bottom: 45px;
`;

const ContentFade = styled.div`
  color: #fff;
  text-align: center;
  padding-top: 24px;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const C_ABOUT_EQUIPE =
  "https://images.unsplash.com/photo-1476554123255-b0ff6b30dcd8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80";

const C_DESC_FIRST = "Nosso pessoal tem experiência, compromisso e conexões para ajudar empreendedores e fundadores a aumentar suas chances de sucesso."

export default function GridEquipe(props) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const styleGrid = {
    justifyContent: "center",
    color: "#fff",
    margin: 0,
    width: "100%"
  };

  return (
    <>
      <EquipeCapaApresent
        fontFamily={props.fontFamily}
        img={C_ABOUT_EQUIPE}
        fontSize={"7vw"}
      />
      <ContentRelative>
        <Container maxWidth="lg">
          <ContentFade fontFamily={props.fontFamily} >
            <Typography variant="h4" children={C_DESC_FIRST} />
          </ContentFade>
          <Grid style={styleGrid} spacing={2} container >
            {dataEquipe.map((e, count) => {
              return (
                < Grid key={count} item xs={12} sm={6} md={3} xl={3} >
                  <EquipeCapa fontFamily={props.fontFamily} {...e} count={count} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </ContentRelative>
    </>
  );
}
