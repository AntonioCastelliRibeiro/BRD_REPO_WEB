import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { Drawer, Hidden, Link } from "@material-ui/core";

import AHrefHover from "../../AHrefHover";
import Slider from "../../Slider";
import images from "./data.js";

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


  function AHrefMobile() {
    return (
      <ContentAHref>
        <AHrefHover desc={"bom dia rural"} variant={"h4"} lineHeight={"0.7vw"}
          onClick={() => onCloseProps("/")}
          onHoverStart={() => setPage(1)}
        />
        <AHrefHover desc={"Matérias"} variant={"h4"} lineHeight={"0.6vw"}
          onClick={() => onCloseProps("/materias")}
          onHoverStart={() => setPage(2)}
        />
        <AHrefHover desc={"Colaboradores"} variant={"h4"} lineHeight={"0.6vw"}
          onClick={() => onCloseProps("/colaboradores")}
          onHoverStart={() => setPage(3)}
        />
        <AHrefHover desc={"Equipe"} variant={"h4"} lineHeight={"0.6vw"}
          onClick={() => onCloseProps("/equipe")}
          onHoverStart={() => setPage(4)}
        />
        <AHrefHover desc={"Sobre"} variant={"h4"} lineHeight={"0.6vw"}
          onClick={() => onCloseProps("/sobre")}
          onHoverStart={() => setPage(5)}
        />
        <ContentMedia>
          <AHrefHover desc={"Facebook"} variant={"h6"} lineHeight={"0.3vw"}
            onHoverStart={() => false}
          />
          <AHrefHover desc={"Instagram"} variant={"h6"} lineHeight={"0.3vw"}
            onHoverStart={() => false}
          />
          <AHrefHover desc={"Youtube"} variant={"h6"} lineHeight={"0.3vw"}
            onHoverStart={() => false}
          />
        </ContentMedia>
      </ContentAHref>
    )
  }

  function AHrefDesktop() {
    return (
      <ContentAHref>
        <AHrefHover desc={"bom dia rural"} variant={"h2"} lineHeight={"0.7vw"}
          onClick={() => onCloseProps("/")}
          onHoverStart={() => setPage(1)}
        />
        <AHrefHover desc={"Matérias"} variant={"h3"} lineHeight={"0.6vw"}
          onClick={() => onCloseProps("/materias")}
          onHoverStart={() => setPage(2)}
        />
        <AHrefHover desc={"Colaboradores"} variant={"h3"} lineHeight={"0.6vw"}
          onClick={() => onCloseProps("/colaboradores")}
          onHoverStart={() => setPage(3)}
        />
        <AHrefHover desc={"Equipe"} variant={"h3"} lineHeight={"0.6vw"}
          onClick={() => onCloseProps("/equipe")}
          onHoverStart={() => setPage(4)}
        />
        <AHrefHover desc={"Sobre"} variant={"h3"} lineHeight={"0.6vw"}
          onClick={() => onCloseProps("/sobre")}
          onHoverStart={() => setPage(5)}
        />
        <ContentMedia>
          <Link style={{ color: "inherit", textDecoration: "none" }} href="https://www.facebook.com/bomdiarural" target="_blank" children={<AHrefHover desc={"Facebook"} variant={"h4"} lineHeight={"0.3vw"}
            onHoverStart={() => false}
          />} />
          <Link style={{ color: "inherit", textDecoration: "none" }} h href="https://www.instagram.com/bomdiaruraltv" target="_blank" children={<AHrefHover desc={"Instagram"} variant={"h4"} lineHeight={"0.3vw"}
            onHoverStart={() => false}
          />} />
          <Link style={{ color: "inherit", textDecoration: "none" }} h href="https://www.youtube.com/channel/UCbFX6KlIvmunDv0uXrp2wDw" target="_blank" children={<AHrefHover desc={"Youtube"} variant={"h4"} lineHeight={"0.3vw"}
            onHoverStart={() => false}
          />} />
        </ContentMedia>
      </ContentAHref>
    )
  }

  return (
    <CompDrawer
      elevation={3}
      transitionDuration={{ appear: 800, enter: 800, exit: 200 }}
      anchor={"top"}
      open={props.open}
      onClose={props.toggleDrawer(false)}
    >
      <ContentPrincAHref>
        <Hidden smUp children={AHrefMobile()} />
        <Hidden xsDown children={AHrefDesktop()} />
      </ContentPrincAHref >
      <Slider images={images} Mater={false} isNav={true} onPage={onPage} />
    </CompDrawer >
  );
}
