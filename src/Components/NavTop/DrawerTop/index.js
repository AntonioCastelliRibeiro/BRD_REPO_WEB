import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Drawer } from "@material-ui/core";
import AHrefHover from "../../AHrefHover";
import { useHistory } from "react-router-dom";
import Slider from "../../Slider";
import { images } from "./data.js";

const CompDrawer = styled(Drawer)``;

const ContentMedia = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  flex-direction: row;
`;

const ContentAHref = styled.div`
  color: #fff;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const ContentPrincAHref = styled.div`
  font-family: ${(props) => props.fontFamily};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: 2;
`;

export default function DrawerTop(props) {
  const history = useHistory();
  const [onPage, setPage] = useState(0);

  React.useEffect(() => {
    return () => { setPage(1); };
  }, []);

  function onCloseProps(APatch) {
    history.push(APatch);
    props.onClose();
  }

  return (
    <CompDrawer
      elevation={3}
      transitionDuration={{ appear: 800, enter: 800, exit: 200 }}
      anchor={"top"}
      open={props.open}
      onClose={props.toggleDrawer(false)}
    >
      <ContentPrincAHref fontFamily={props.fontFamily}>
        <ContentAHref
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <AHrefHover desc={"Bom Dia Rural"} fontSize={"4.6976vw"} lineHeight={"0.7vw"}
            onClick={() => onCloseProps("/")}
            onHoverStart={() => setPage(1)}
          />
          <AHrefHover desc={"Matérias"} fontSize={"3.74976vw"} lineHeight={"0.6vw"}
            onClick={() => onCloseProps("/materias")}
            onHoverStart={() => setPage(2)}
          />
          <AHrefHover desc={"Colaboradores"} fontSize={"3.74976vw"} lineHeight={"0.6vw"}
            onClick={() => onCloseProps("/colaboradores")}
            onHoverStart={() => setPage(3)}
          />
          <AHrefHover desc={"Equipe"} fontSize={"3.74976vw"} lineHeight={"0.6vw"}
            onClick={() => onCloseProps("/equipe")}
            onHoverStart={() => setPage(4)}
          />
          <AHrefHover desc={"Sobre"} fontSize={"3.74976vw"} lineHeight={"0.6vw"}
            onClick={() => onCloseProps("/sobre")}
            onHoverStart={() => setPage(5)}
          />
          <ContentMedia>
            <AHrefHover desc={"Facebook"} fontSize={"2.50272vw"} lineHeight={"0.3vw"}
              onHoverStart={() => false}
            //  onClick={() => onCloseProps("/sobre")}
            />
            <AHrefHover desc={"Instagram"} fontSize={"2.50272vw"} lineHeight={"0.3vw"}
              onHoverStart={() => false}
            //  onClick={() => onCloseProps("/sobre")}
            />
            <AHrefHover desc={"Youtube"} fontSize={"2.50272vw"} lineHeight={"0.3vw"}
              onHoverStart={() => false}
            //  onClick={() => onCloseProps("/sobre")}
            />
          </ContentMedia>
        </ContentAHref>
      </ContentPrincAHref>
      <Slider images={images} Mater={false} isNav={true} onPage={onPage} />
    </CompDrawer>
  );
}
