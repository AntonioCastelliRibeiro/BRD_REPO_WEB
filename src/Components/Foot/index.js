import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Button,
  Box,
  IconButton,
  Container,
  Divider,
  Typography,
  Link
} from "@material-ui/core";


import logo from "../../Image/logo.svg";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";


const useStyles = makeStyles(({ props, typography, palette, breakpoints }) => ({
  legalLink: {
    ...typography.caption,
    justifyContent: "center",
    color: palette.type === "dark" ? "#fff" : palette.text.secondary,
    position: "relative",
    [breakpoints.up("sm")]: {
      "&:not(:first-of-type)": {
        "&:before": {
          content: '"|"',
          display: "block",
          position: "absolute",
          left: 0
        }
      }
    }
  },
  newsletter: {
    fontSize: typography.caption.fontSize
  },
  navMenu: {
    flexWrap: "wrap"
  },
  boxNavManu: {
    display: "flex",
    flexDirection: "column",
    [breakpoints.up("sm")]: {
      flexDirection: "row"
    }
  },
  boxNavTermos: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [breakpoints.up("md")]: {
      flexDirection: "row"
    }
  },
  itemSobre: {
    fontFamily: (props) => props.fontFamily,
    fontSize: 10,
    color: "#fff",
    cursor: "pointer",
    display: "flex",
    padding: "8px 16px",
    transition: "all 0.2s ease-out 0s",
    alignItems: "center",
    flexShrink: "0",
    borderRadius: "4px",
    textDecoration: "none",
    letterSpacing: "1px",
    fontWeight: 500,
    "&:hover": {
      backgroundColor: "rgb(255 255 255 / 12%)",
    }
  },
  fontBtn: {
    fontFamily: (props) => props.fontFamily,
    color: "#fff",
    textTransform: "lowercase",
    fontWeight: 300,
    fontSize: 20,
    letterSpacing: "1px",
  },
  btnFooter: {
    color: "#fff",
    padding: 0,
    "&:hover": {
      backgroundColor: "rgb(255 255 255 / 12%)",
    }
  },
  btnSocial: {
    color: "#fff",
    "&:hover": {
      backgroundColor: "rgb(255 255 255 / 12%)",
    }
  }
}));

const Foot = function FootComp(props) {
  const classes = useStyles(props);
  const history = useHistory();

  function setarRouter(AQueryParams) {
    setTimeout(() => {
      history.push(AQueryParams);
    }, 300);
  }

  function setarLinkExternal(ALink) {
    setTimeout(() => {
      history.push(ALink);
    }, 300);
  }

  return (
    <Box
      position="absolute"
      fontFamily={props.fontFamily}
      bgcolor={"transparent"}
      width={"100%"}
    >
      <Container>
        <Box pt={8} pb={1}>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <div style={{ flexGrow: 2 }}>
              <Button className={classes.btnFooter} onClick={() => setarRouter("/")} >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div style={{ paddingRight: 0 }}>
                    <Avatar style={{ height: "56px", width: "56px" }} src={logo} />
                  </div>
                  <div style={{ paddingRight: 10 }}>
                    <div
                      fontFamily={props.fontFamily}
                      className={classes.fontBtn}
                    >
                      bom dia rural
                    </div>
                  </div>
                </div>
              </Button>
              <div style={{ paddingTop: 5, display: "flex", flexWrap: "wrap" }}>
                <Button className={classes.itemSobre} onClick={() => setarRouter("/materias")} size="small">
                  Materias
                </Button>
                <Button
                  className={classes.itemSobre}
                  onClick={() => setarRouter("/colaboradores")}
                  size="small"
                >
                  Colaboradores
                </Button>
                <Button className={classes.itemSobre} onClick={() => setarRouter("/equipe")} size="small">
                  Equipe
                </Button>

                <Button className={classes.itemSobre} onClick={() => setarRouter("/sobre")} size="small">
                  Sobre
                </Button>
              </div>
            </div>
            <div
              style={{
                flexGrow: 1,
                maxWidth: "500px",
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >
              <Box textAlign={"center"} mt={{ xs: 2, md: 0 }} my={2}>
                <Link href="https://www.facebook.com/bomdiarural" target="_blank" children={<IconButton className={classes.btnSocial} size="medium" children={<FacebookIcon />} />} />
                <Link href="https://www.instagram.com/bomdiaruraltv" target="_blank" children={<IconButton className={classes.btnSocial} size="medium" children={<InstagramIcon />} />} />
                <Link href="https://www.youtube.com/channel/UCbFX6KlIvmunDv0uXrp2wDw" target="_blank" children={<IconButton className={classes.btnSocial} size="medium" children={<YouTubeIcon />} />} />
              </Box>
            </div>
          </div>
        </Box>
        <Divider style={{ backgroundColor: "#fff" }} />
        <Box pt={2} pb={10}>
          <div className={classes.boxNavTermos}>
            <div style={{ flexGrow: 1, flexShrink: 0, marginLeft: "-16px" }}>
              <div style={{ display: "flex" }}>
                {/* <Box className={classes.boxNavManu} component="div">
                  <Button className={classes.itemSobre}>
                    Termos e Condições
                  </Button>
                  <Button className={classes.itemSobre}>
                    Politica de Privacidade
                  </Button>
                  <Button className={classes.itemSobre}>Acessibilidade</Button>
                  <Button className={classes.itemSobre}>Legal</Button>
                </Box> */}
              </div>
            </div>
            <div>
              <Box py={1} textAlign={{ xs: "center", md: "right" }} >
                <Typography
                  component={"p"}
                  variant={"caption"}
                  color={"textSecondary"}
                  style={{ fontFamily: props.fontFamily, color: "#fff", letterSpacing: "1px" }}

                >
                  Designer Antonio Castelli © Tony Studios 2019-2021 Todos os
                  Direitos Reservados
                </Typography>
              </Box>
            </div>
          </div>
        </Box>
      </Container>
    </Box>
  );
};

export default Foot;

