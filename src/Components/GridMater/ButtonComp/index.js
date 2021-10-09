import { Button } from "@material-ui/core";
import styled from "styled-components";

const ButtonPrinc = styled(Button)`
  border-radius: 4px;
  border: 1px solid #fff;
  color: #fff;
  height: 50px;
  width: 150px;
  font-weight: 700;
  transition: ${(props) => props.transition};
  background-color: ${(props) => props.backgroundcolor};
  transition: ease 300ms;
  &:hover{
    background-color: #fff;
    color: rgb(8, 127, 35);
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
