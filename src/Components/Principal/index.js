import { useEffect } from "react";

import useStyles from "./useStyles.js";

import { Box, Grid, Hidden, CardMedia } from "@material-ui/core";

import CardTerc from "../../Components/CardTerc";
import Patroc from "../../Components/Patroc";
import CrSel from "../../Components/CrSel";
import Foot from "../../Components/Foot";

import Movie from "../../Components/Movie";
import CardHover from "../CardHover";
import Opinion from "../Opinion";
import TextureImage from "../TextureImg";

const imgPrinc =
  "https://images.unsplash.com/photo-1620548473886-eb53c0402440?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80";

export default function Principal(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const styles = useStyles(props);
  return (
    <>
      <Hidden xsDown>
        <Movie />
        <Box
          data-aos="fade-down"
          data-aos-delay="1000"
          fontSize={"10vw"}
          fontWeight={800}
          fontFamily={props.fontFamily}
          color={"white"}
          display="flex"
          style={{
            justifyContent: "center",
            alignItems: "center",
            "&:hover": { backgroundColor: "blue" }
          }}
          height="100vh"
          width={"100%"}
          position="fixed"
        >
          Bom Dia Rural
        </Box>
        <div style={{ height: "105vh" }} />
      </Hidden>
      <Hidden smUp>
        <CardMedia image={imgPrinc} style={{ position: "fixed", height: "105vh", width: "100%" }} />
        <Box
          data-aos="fade-down"
          data-aos-delay="1000"
          fontSize={"10vw"}
          fontWeight={800}
          fontFamily={props.fontFamily}
          color={"white"}
          display="flex"
          style={{
            justifyContent: "center",
            alignItems: "center",
            "&:hover": { backgroundColor: "blue" }
          }}
          height="100vh"
          width={"100%"}
          position="fixed"
        >
          Bom Dia Rural
        </Box>
        <div style={{ height: "105vh" }} />
      </Hidden>
      <Box width={"100%"} >
        <TextureImage >
          {/* <div style={{ height: "105vh" }} /> */}
        </TextureImage>
        <Box
          // data-aos="fade-up"
          paddingTop="94px"
          margin={"0 auto"}
          position="relative"
          overflow="hidden"
          style={{ zIndex: 2, backgroundColor: "#ffffff" }}
        >
          <Box
            data-aos="fade"
            data-aos-delay="200"
            fontSize={"30px"}
            fontWeight={500}
            fontFamily={props.fontFamily}
            color={"black"}
            display="flex"
            textAlign={"center"}
            // margin={"0 auto"}
            style={{
              zIndex: 2,
              lineHeight: 2,
              justifyContent: "center",
              alignItems: "flex-start"
            }}
            // height="240px"
            width={"100%"}
            paddingBottom={8}
          >
            Ainda assim, existem dúvidas a respeito de como a revolução dos
            costumes assume importantes posições no estabelecimento de
            alternativas às soluções ortodoxas.
          </Box>
          <Box style={{ paddingBottom: "80px" }}>
            <CardTerc fontFamily={props.fontFamily} flexDirection="row" />
          </Box>
          <Box
            data-aos="fade-up" data-aos-delay="300">
            <CardHover fontFamily={props.fontFamily} />
          </Box>

          <div data-aos="fade-up" data-aos-delay="300">
            <Patroc fontFamily={props.fontFamily} />
          </div>

          <div data-aos="fade-up">
            <Opinion fontFamily={props.fontFamily} />
          </div>
          {/*
          <div className="item" data-aos="slide-up">
            7
          </div>

          <div className="item" data-aos="flip-up">
            8
          </div>
          <div className="item" data-aos="flip-down">
            9
          </div>
          <div className="item" data-aos="flip-right">
            10
          </div>
          <div className="item" data-aos="flip-left">
            11
          </div> */}
        </Box>
      </Box>
    </>
  );
}
