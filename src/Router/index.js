import React, { Suspense, lazy } from "react";

import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import NavTop from "../Components/NavTop";
import Foot from "../Components/Foot";

import Principal from "../Components/Principal";

import GridMater from "../Components/GridMater";
import MaterItem from "../Components/GridMater/Mater/MaterItem";

import GridColab from "../Components/GridColab";
import ColabItem from "../Components/GridColab/ColabItem";

import GridEquipe from "../Components/GridEquipe";
import EquipeItem from "../Components/GridColab/ColabItem";

import dataColab from "../Components/GridColab/data.js";
import dataEquip from "../Components/GridEquipe/data.js";

import About from "../Components/About";
import { AnimatePresence } from "framer-motion";
import { createTheme } from "@material-ui/core";
import { ThemeProvider } from "styled-components";

// import GridPrincipal from "../GridPrincipal";
// import Recipe from "../Recipe";

// import Movie from "../MyMovie";
// import Photo from "../Photo";

// const Principal = lazy(() => import("../Components/Principal"));
// const MaterItem = lazy(() => import("../Components/GridMater/Mater/MaterItem"));

// const GridMater = lazy(() => import("../Components/GridMater"));
// const GridColab = lazy(() => import("../Components/GridColab"));
// const ColabItem = lazy(() => import("../Components/GridColab/ColabItem"));

// const GridEquipe = lazy(() => import("../Components/GridEquipe"));
// const EquipeItem = lazy(() => import("../Components/GridColab/ColabItem"));

// const About = lazy(() => import("../Components/About"));

const C_IMG_BG_EQUIPE_ITEM = "https://images.unsplash.com/photo-1476554123255-b0ff6b30dcd8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80";
const C_IMG_BG_COLAB_ITEM = "https://images.unsplash.com/photo-1600275669439-14e40452d20b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80";

export default function ReactRouter(props) {

  const theme = createTheme({
    typography: {
      fontFamily: props.fontFamily
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavTop fontFamily={props.fontFamily} />
        <AnimatePresence>
          {/* <Suspense fallback={<div>carregando...</div>}> */}
          <Switch>
            <Route
              path="/"
              exact
              component={() => <Principal fontFamily={props.fontFamily} />}
            />
            <Route
              path="/materias/:id"
              component={(e) => <MaterItem fontFamily={props.fontFamily} />}
            />
            <Route
              path="/materias"
              component={() => <GridMater fontFamily={props.fontFamily} />}
            />
            <Route
              path="/colaboradores/:id"
              component={(e) => (
                <ColabItem
                  data={dataColab}
                  descButton="De Volta aos Colaboradores"
                  pathName="/colaboradores"
                  fontFamily={props.fontFamily}
                  imgBg={C_IMG_BG_COLAB_ITEM}
                />
              )}
            />
            <Route
              path="/colaboradores"
              component={() => <GridColab fontFamily={props.fontFamily} />}
            />
            <Route
              path="/equipe/:id"
              component={() => (
                <EquipeItem
                  data={dataEquip}
                  descButton="De Volta a Equipe"
                  pathName="/equipe"
                  fontFamily={props.fontFamily}
                  imgBg={C_IMG_BG_EQUIPE_ITEM}
                />
              )}
            />
            <Route
              path="/equipe"
              component={() => <GridEquipe fontFamily={props.fontFamily} />}
            />
            <Route
              path="/sobre"
              component={() => <About fontFamily={props.fontFamily} />}
            />
          </Switch>
          <Foot fontFamily={props.fontFamily} />
        </AnimatePresence>
        {/* </Suspense> */}
      </Router>
    </ThemeProvider>
  );
}
