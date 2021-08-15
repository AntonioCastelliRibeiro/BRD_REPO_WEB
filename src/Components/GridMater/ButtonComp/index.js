import { Button } from "@material-ui/core";
import styled from "styled-components";

const ButtonPrinc = styled(Button)`
  border-radius: 0;
  border: 1px solid black;
  height: 50px;
  width: 150px;
  font-weight: 700;
  transition: ${(props) => props.transition};
  background-color: ${(props) => props.backgroundcolor};
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
