import React from "react";
import DescPrinc from "../../CardHover/DescPrinc";
import IProps from "./interface";

const C_TITLE = "Nossos Colaboradores";
const C_DESC =
  "Somos gratos pelo trabalho árduo dos nossos colaboradores profissionais e experientes no ramo agrícola.";

export default function PatrocCapa(props: IProps) {
  return (
    <DescPrinc fontFamily={props.fontFamily} descFirst={C_TITLE} descSec={C_DESC} />
  );
}
