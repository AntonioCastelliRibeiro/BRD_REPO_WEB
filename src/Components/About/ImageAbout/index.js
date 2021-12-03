import { memo, useRef, useState } from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components";
import { useScroll } from "react-use-gesture";
import DescScrollDown from "../../DescScrollDown";

const transition = "all 0.45s ease";

const BgImage = styled.div`
  height: 100%;
  width: 100%;
  transition: ${transition};
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(80%);
  transform: scale(${(props) => props.scale});
`;

const BoxPrinc = styled.div`
  font-family: ${props => props.fontFamily};
  height: 100%;
  width: 100%;
  position: fixed;
`;

export default memo(function ImageAbout(props) {
  const ref = useRef(0);
  const [onDescription, setDescription] = useState(true);
  const scroll = useScroll(
    ({ offset: [x, y] }) => {
      setOnOffDescription(y);
    },
    {
      domTarget: window
    }
  );

  async function setOnOffDescription(AEixoY) {
    const C_SCROLL_TOP = Math.abs(AEixoY);
    try {
      const C_SCROLL_HEIGH = ref.current.scrollHeight;
      if (C_SCROLL_HEIGH !== null) {
        if (C_SCROLL_TOP >= ref.current.scrollHeight * 0.70) {
          await setDescription(false);
        } else {

          await setDescription(true);
        }
      }
    } catch (error) {
      await setDescription(false);
    }
  }


  return (
    <BoxPrinc ref={ref} fontFamily={props.fontFamily}>
      {onDescription ? <DescScrollDown principal={props.principal} fontFamily={props.fontFamily} descPrinc={props.descPrinc} /> : false}
      <BgImage img={props.img} />
      {props.ocultaDesc ? false : <Box height={props.principal ? "100vh" : "60vh"} width="100%" />}
    </BoxPrinc>
  );
});
