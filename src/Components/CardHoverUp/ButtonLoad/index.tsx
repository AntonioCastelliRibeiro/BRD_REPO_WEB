import React from "react";
import { Button, Typography } from "@material-ui/core";
import styled from "styled-components";
import { motion } from "framer-motion";
import iButtonLoad from "./interface";

interface iButtonComp {
  fontFamily: string;
}

const ButtonComp = styled(Button) <iButtonComp>`
  font-family: ${(props) => props.fontFamily};
  border: 1px solid #fff;
  color: #fff;
  letter-spacing: 1px;
  font-weight: 500;
  transition: 0.7s ease;
  &:hover {
    border: 1px solid #66bb6a;
    background-color: #66bb6a;
    color: #fff;
  }
`;

const ContentButtonLoad = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default function ButtonLoad(props: iButtonLoad) {
  function retornarButtonLoad() {
    if (props.numPost >= props.sizeObj) return false;
    return (
      <ContentButtonLoad>
        <ButtonComp
          fontFamily={props.fontFamily}
          onClick={(e) => props.onClick(e)}
          children={<Typography variant="button" children="Carregar mais" />}
        />
      </ContentButtonLoad>
    );
  }

  return <>{retornarButtonLoad()}</>;
}
