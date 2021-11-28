import { Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useScroll } from "react-use-gesture";
import styled from "styled-components";
import DescScrollDown from "../DescScrollDown";

const movieIntro = "https://bdrbucket.s3.sa-east-1.amazonaws.com/timelapse.mp4";

const DescMovDesktop = styled(motion.div)`
  height: 100vh;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const TypographyComp = styled(Typography)`
  user-select: none;
  font-weight: 600;
  letter-spacing: 2px;
  text-align: center;
  font-family: ${(props) => props.fontFamily};
`;

const C_BRIGTHNESS_PADRAO = "80%";
const C_BRIGTHNESS_FOOT = "70%"

export default function CompMovie(props) {
  const [render, setRender] = useState(true);
  const [onBrightness, setBrightness] = useState(C_BRIGTHNESS_PADRAO);
  const [onDescription, setDescription] = useState(true);
  const scroll = useScroll(
    ({ offset: [x, y] }) => {
      setPlayPause(y);
      setOnOffDescription(y);
    },
    {
      domTarget: window
    }
  );
  const ref = useRef(0);

  async function setPlayPause(AEixoY) {
    const C_SCROLL_TOP = Math.abs(AEixoY);
    try {
      const C_SCROLL_HEIGH = ref.current.scrollHeight;
      if (C_SCROLL_HEIGH !== null) {
        if (C_SCROLL_TOP >= ref.current.scrollHeight * 0.48) {
          await playPauseMovie(false);
        } else {

          await playPauseMovie(true);
        }
      }
    } catch (error) {
      playPauseMovie(false);
      await setBrightness(C_BRIGTHNESS_FOOT);
    }
  }

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

  useEffect(() => {
    if (render) {
      playPauseMovie(true);
    }
    return () => setRender(false);
  }, [render]);

  async function playPauseMovie(APlay) {
    try {
      if (APlay) {
        await ref.current.play();
        setBrightness(C_BRIGTHNESS_PADRAO);
      } else {
        await ref.current.pause();
        setBrightness(C_BRIGTHNESS_FOOT);

      }
    } catch (error) {
      return false; // Caso os navegadores não suportarem o play autom.
    }
  }

  return (
    <>
      <video
        style={{ filter: `brightness(${onBrightness})`, transition: "ease 0.3s" }}
        id="video"
        ref={ref}
        autoPlay
        loop
        playsInline
        muted
      >
        <source
          src={movieIntro}
          type="video/mp4"
        />
      </video>
      {onDescription ?
        <>
          <DescMovDesktop
            data-aos="fade2"
            data-aos-delay="1000"
            children={<TypographyComp fontFamily={props.fontFamily} variant="h1" children={props.namePrograma} />} />
          <DescScrollDown principal fontFamily={props.fontFamily} />
        </>
        : false}
    </>
  );
}
