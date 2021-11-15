import { Button } from "@material-ui/core";
import styled from "styled-components";

const ButtonPrinc = styled(Button)`
  border-radius: 9px;
  border: 1px solid #fff;
  color: #fff;
  height: 50px;
  width: 150px;
  font-size: 14px;
  letter-spacing: 1.25px;
  font-weight: 700;
  transition: ${(props) => props.transition};
  background-color: ${(props) => props.backgroundcolor};
  transition: ease 300ms;
  &:hover{
    background-color: #fff;
    color: #004500;
  }
`;

export default function ButtonComp(props) {
  return (
    <ButtonPrinc
      backgroundcolor={props.backgroundcolor}
      transition={props.transition}
      onClick={() => props.onClick()}
      children={props.name || "Explorar"}
    />
  );
}
