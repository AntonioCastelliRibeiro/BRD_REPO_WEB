import React, { useState } from "react";

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

const C_IMG_BG_EQUIPE_ITEM = "https://images.unsplash.com/photo-1476554123255-b0ff6b30dcd8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80";
const C_IMG_BG_COLAB_ITEM = "https://images.unsplash.com/photo-1600275669439-14e40452d20b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80";

export default function ReactRouter(props) {
  const [onLoad, setLoad] = useState(true);

  return (
    <Router>
      <NavTop fontFamily={props.fontFamily} />
      <AnimatePresence>
        <Switch>
          <Route
            path="/"
            exact
            component={() => <Principal onLoad={onLoad} setLoad={(e) => setLoad(e)} fontFamily={props.fontFamily} />}
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
    </Router>
  );
}
