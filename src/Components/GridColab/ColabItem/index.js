import { useEffect, useState } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import styled from "styled-components";

import {
  Box,
  Container,
  Card,
  CardActionArea,
  CardActions,
  IconButton,
  Button,
  makeStyles,
  Typography
} from "@material-ui/core";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import ArrowBack from "@material-ui/icons/ArrowBack";
import ColabImgCapa from "../ColabImgCapa";
import ContentLoad from "../ContentLoad";

const ContentBgColor = styled.div`
  height: 100%;
`;

const ContentRelative = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  min-height: 80vh;
  background: rgba(0,69,0,1);
  background: linear-gradient(339deg, rgba(0,0,0,1) 2%, rgba(0,69,0,1) 92%);
  padding-bottom: 45px;
`;

const ContainerComp = styled(Container)`
  display: inherit;
`;

const useStyles = makeStyles((theme) => ({
  boxPrinc: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      height: "100%"
    }
  },
  cardMedia: {
    height: "auto",
    backgroundColor: "#fff",
    borderRadius: 0,
    overflow: "hidden",
    width: "inherit",
  },
  cardPrinc: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center"
    }
  },
  boxImage: {

    width: "100%",
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center"
    }
  }
}));
export default function ColabItem(props) {
  const data = props.data;
  const { id } = useParams();
  const history = useHistory();
  const styles = useStyles();
  const [dataColab, setDataColab] = useState({ open: false, data: null });

  useEffect(() => {
    window.scrollTo(0, 0);
    const state = retornarState();
    state !== null ? setDataColab(state) : history.push(props.pathName);
  }, []);

  function retornarState() {
    let dataReturn = null;
    for (let index = 0; index < data.length; index++) {
      if (data[index].search.toString() === id) {
        dataReturn = { open: true, data: data[index] };
      }
    }
    return dataReturn !== null ? dataReturn : null;
  }

  function retornarConteudo(ADataColab) {
    return (
      <ContentBgColor>
        <ColabImgCapa ocultaDesc={true} img={props.imgBg} />
        <ContentRelative>
          <ContainerComp maxWidth="lg">
            <Box
              fontFamily={props.fontFamily}
              paddingTop={"70px"}
              paddingBottom={"0px"}
              display="flex"
              flexDirection="column"
              color={"#fff"}
            >
              <Box className={styles.boxPrinc}>
                <div data-aos="fade-left" style={{ width: "100%" }}>
                  <Box height="inherit">
                    <Box display="flex" paddingLeft="0px" marginBottom="24px">
                      <Link
                        style={{ textDecoration: "none", color: "#fff" }}
                        to={props.pathName}
                      >
                        <Button style={{ letterSpacing: "1px", fontFamily: props.fontFamily, color: "#fff" }}>
                          <ArrowBack />
                          <Box margin="0px 9px 0px 9px"><Typography variant="button" children={props.descButton} /></Box>
                        </Button>
                      </Link>
                    </Box>
                    <Box
                      style={{ textTransform: "uppercase" }}
                      color="#fff"
                    >
                      <Typography variant="h2" children={ADataColab.nome} />
                    </Box>
                    <Box
                      style={{ textTransform: "uppercase" }}
                      color="#fff"
                    >
                      <Typography variant="h2" children={ADataColab.sobreNome} />
                    </Box>
                    <Box marginBottom="8px">
                      <Typography variant="h5" children={ADataColab.cargo} />
                    </Box>
                    <Box height="50px" marginBottom="20px">
                      <CardActions style={{ padding: "6px" }}>
                        <IconButton
                          style={{ color: "#fff", border: "1px solid #fff" }}
                        >
                          <FacebookIcon />
                        </IconButton>
                        <IconButton
                          style={{ color: "#fff", border: "1px solid #fff" }}
                        >
                          <LinkedInIcon />
                        </IconButton>
                        <IconButton
                          style={{ color: "#fff", border: "1px solid #fff" }}
                        >
                          <InstagramIcon />
                        </IconButton>
                      </CardActions>
                    </Box>

                    <Box marginBottom="8px" >
                      <Typography variant="h6" children={ADataColab.descricao1} />
                    </Box>
                    <Box marginBottom="8px" >
                      <Typography variant="h6" children={ADataColab.descricao2} />
                    </Box>
                  </Box>
                </div>

                <Box className={styles.boxImage}>
                  <div data-aos="fade-up" style={{ width: "100%" }}>
                    <Card className={styles.cardPrinc}>
                      <CardActionArea
                        style={{
                          borderRadius: "9px",
                          display: "flex",
                          height: "inherit",
                          width: "inherit",
                          color: "#fff",
                        }}
                      >
                        <img
                          className={styles.cardMedia}
                          alt={"Imagem Colaborador"}
                          key={props.key}
                          src={
                            ADataColab.imgItem ? ADataColab.imgItem : ADataColab.img
                          }
                        />
                      </CardActionArea>
                    </Card>
                  </div>
                </Box>
              </Box>
            </Box>
          </ContainerComp>
        </ContentRelative>
      </ContentBgColor>
    );
  }

  return dataColab.open ? retornarConteudo(dataColab.data) : <ContentLoad />;
}
