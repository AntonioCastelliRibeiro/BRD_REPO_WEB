import { useEffect } from "react";
import { Box, Container, Grid } from "@material-ui/core";
import EquipeCapaApresent from "./EquipeCapaApresent";
import dataEquipe from "./data.js";
import EquipeCapa from "./EquipeCapa";

const C_ABOUT_EQUIPE =
  "https://images.unsplash.com/photo-1476554123255-b0ff6b30dcd8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80";

export default function GridEquipe(props) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const styleGrid = {
    justifyContent: "center",
    color: "#fff",
    margin: 0,
    width: "100%"
  };

  return (
    <>
      <Box>
        <EquipeCapaApresent
          fontFamily={props.fontFamily}
          img={C_ABOUT_EQUIPE}
          title={"NOSSA EQUIPE"}
          fontSize={"7vw"}
        />
        <Box
          position="relative"
          style={{ backgroundColor: "#087f23", paddingBottom: "45px" }}
        >
          <Container maxWidth="lg">
            <Box
              fontFamily={props.fontFamily}
              paddingTop="40px"
              display="flex"
              flexDirection="column"
              alignItems="center"
              data-aos="fade"
            >
              <Box
                data-aos="fade-up"
                textAlign="center"
                fontSize="30px"
                fontWeight={200}
                lineHeight="1.1667"
                color={"#fff"}
              >
                Nosso pessoal tem experiência, compromisso e conexões para
                ajudar empreendedores e fundadores a aumentar suas chances de
                sucesso
              </Box>
            </Box>
            <Grid style={styleGrid} spacing={1} container >
              {dataEquipe.map((e, count) => {
                return (
                  < Grid key={count} item xs={12} sm={6} md={4} xl={3} >
                    <EquipeCapa fontFamily={props.fontFamily} {...e} />
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}
