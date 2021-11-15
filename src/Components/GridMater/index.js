import { useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { Container, createTheme, ThemeProvider, Typography } from "@material-ui/core";

import MaterCapaApresent from "./MaterCapaApresent";
import CardHoverUp from "../CardHoverUp";
import objPrinc from "../../Comum";

const ContentPrinc = styled.div`
  min-height: 1000px;
  position: relative;
  background: rgba(0,69,0,1);
  background: linear-gradient(339deg, rgba(0,0,0,1) 2%, rgba(0,69,0,1) 92%);
`;

const ContentDescTop = styled.div`
  color: #fff;
  font-family: ${props => props.fontFamily};
  padding-top: 24px;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const DescTop = styled.div`
  font-size: 30px;
  text-align: center;
`;

const ContentBgColor = styled.div`
  height: 100%;
  background-color: rgb(8, 127, 35);
`;

const C_DESC_TOP = "Fique por dentro sobre as novidades do agronegócio na região do Sudoeste do Paraná";

export default function GridMater(props) {
  const C_TIME_FADE = objPrinc.timeFade;
  const match = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function onSetMaterItem(e) {
    setTimeout(() => {
      history.push(`${match.path}/${e}`);
    }, C_TIME_FADE);
  }

  const propsMaterCapa = {
    fontFamily: props.fontFamily,
    img: "https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    title: "MATÉRIAS",
    fontSize: "7vw"
  }

  const theme = createTheme({
    typography: {
      fontFamily: props.fontFamily
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <ContentBgColor>
        <MaterCapaApresent {...propsMaterCapa} />
        <ContentPrinc>
          <Container maxWidth="lg">
            <ContentDescTop fontFamily={props.fontFamily} children={<Typography variant="h5" children={C_DESC_TOP} />} />
            <CardHoverUp fontFamily={props.fontFamily} onSetMaterItem={(e) => onSetMaterItem(e)} />
          </Container>
        </ContentPrinc>
      </ContentBgColor>
    </ThemeProvider>
  );
}