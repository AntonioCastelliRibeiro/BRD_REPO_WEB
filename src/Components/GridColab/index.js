import { useEffect, memo } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import styled from "styled-components";

import { Box, Button, Grid, Container } from "@material-ui/core";

import ColabImgCapa from "./ColabImgCapa";

import ColabCapaPrinc from "./ColabCapaPrinc";

import dataColab from "./data.js";

import objPrinc from "../../Comum";

const ContentPrinc = styled.div`

`;

const ContentBgColor = styled.div`
  position: relative;
  background-color: inherit;
  background: rgba(0,69,0,1);
  background: linear-gradient(339deg, rgba(0,0,0,1) 2%, rgba(0,69,0,1) 92%);
  min-height: 1000px;
  /* padding-bottom: 20px; */
`;

const ContentDescTop = styled.div`
  font-family: ${props => props.fontFamily};
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
`;

const DescCenterTop = styled.div`
  text-align: center;
  font-size: 30px;
  letter-spacing: 1px;
`;

const BtnCenterTop = styled(Button)`
  width: 180px;
  margin: 30px 0 30px;
  font-weight: 700;
  border: 1px solid #fff;
  color: #fff;
  letter-spacing: 1px;
  background-color: transparent;
  transition: ease 0.3s;
  &:hover{
    color: black;
    background-color: #fff;
  }
`;

const propColabImg = (props) => ({
  fontFamily: props.fontFamily,
  img: C_ABOUT_COLAB,
  title: "NOSSOS COLABORADORES",
  fontSize: "7vw"
});


const styleGrid = {
  paddingBottom: "48px",
  width: "100%",
  margin: 0
}

const propStyleGrid = {
  container: true,
  spacing: 2,
  style: styleGrid
};

const C_ABOUT_COLAB = "https://images.unsplash.com/photo-1600275669439-14e40452d20b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80";

export default memo(function GridColab(props) {
  const C_TIME_FADE = objPrinc.timeFade;
  const match = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function onSetColabItem(e) {
    setTimeout(() => {
      history.push(`${match.path}/${e}`);
    }, C_TIME_FADE);
  }

  return (
    <ContentPrinc>
      <ColabImgCapa {...propColabImg(props)} />
      <ContentBgColor>
        <ContentDescTop fontFamily={props.fontFamily}>
          <DescCenterTop children={"A sorte favorece a mente preparada"} />
          <BtnCenterTop children={"Louis Pasteur"} />
        </ContentDescTop>
        <Container maxWidth="lg">
          <Grid {...propStyleGrid} >
            {dataColab.map((e, key) => {
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
                  <ColabCapaPrinc
                    fontFamily={props.fontFamily}
                    search={e.search}
                    hexa={e.hexa}
                    title={e.nome + " " + e.sobreNome}
                    description={e.cargo}
                    image={e.img}
                    nome={e.nome}
                    setarColabItem={() => onSetColabItem(e.search)}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </ContentBgColor>
    </ContentPrinc>
  );
});
