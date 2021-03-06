import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import {
  Paper,
  Card,
  Container,
  CardActionArea,
  CardMedia,
  makeStyles,
  Modal,
  IconButton,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import objPrinc from "../../../../Comum";
import ButtonComp from "../../ButtonComp";
import Slider from "../../../Slider";
import objData from "../../data.js";
import CardNextPrev from "./CardNextPrev";
import CrSelMater from "./CrSelMater";
import MaterCapaApresent from "../../MaterCapaApresent";
import ContentLoad from "./ContentLoad";

// import logo from "../../Image/logo.svg";

// const image =
//   "https://drive.google.com/uc?id=1NAgbyMQy8nhcvXpNCCT5JU__xjrMuB_D";

// const img1 = "https://drive.google.com/uc?id=1KVufi5yIvVQLa-XpEimzEX4vQGyTO_bV";
// // "https://demos.creative-tim.com/material-kit-pro-react/static/media/kendall.19201574.jpg";
// const img2 = "https://drive.google.com/uc?id=1n9mYBgENNF47LbUTNxuUb8Qhu5P2bK1n";

const useStyles = makeStyles((theme) => ({
  boxDesc: {
    height: "188px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "4vw",
    [theme.breakpoints.up("sm")]: {
      height: "55%"
    },
    [theme.breakpoints.up("md")]: {
      height: "50%"
    }
  },
}));

// https://bobbyflay.com/
// https://munjoi.com/
// https://outofthevalley.co.uk/
// https://ester.co/
// https://www.neosoft.ch/en/search-rescue-solutions

const transition = "ease 0.3s";

const ContentOverFlowHidden = styled.div`
  overflow: hidden;
`;

const HeaderComp = styled.header`
  overflow: hidden;
`;

const PaperComp = styled(Paper)`
  font-family: ${(props) => props.fontFamily};
  padding-top: 72px;
  border: none;
  display: flex;
  justify-content: space-evenly;
  place-content: center space-evenly;
  align-items: center;
  width: 100%;
  background-color: transparent;
  flex-direction: column-reverse;
  height: 100%;
  width: 100%;
  @media (min-width: 600px) {
    width: 100%;
  }
  @media (min-width: 960px) {
  }
`;

const ContentDescPrinc = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-start;
  width: 100%;
`;

const ContentDescSec = styled.div`
  width: 100%;
`;

const ContentFlex = styled.div`
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  /* padding: 27px 27px 27px 9px; */
  padding: 16px 0 16px 0;
`;

const TitleComp = styled.div`
  font-weight: normal;
  line-height: 1;
  letter-spacing: 0.25px;
  font-size: 34px;
  padding-bottom: 8px;
`;

const TypographyTittleDescComp = styled(Typography)`
  padding-bottom: 8px;
`;

const ContentImagePrinc = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 9px;
`;

const ContentImageSec = styled.div`
  display: flex;
  height: 60vh;
  justify-content: center;
  width: 100%;
  border-radius: 9px;
`;

const ContentTextPrinc = styled.div`
  color: #fff;
  padding-bottom: 8px;
`;

const TypographyDescComp = styled(Typography)`
  padding-bottom: 8px;
`;

const ArticleComp = styled.article`
  overflow: hidden;
`;

const ContentImageComp = styled.div`
  height: inherit;
  width: 100%;
  &:hover {
    ${IconPlay}{
      scale: 1;
    }
  }
`;

const CardActionComp = styled(CardActionArea)`
  height: 100%;
  width: 100%;
  color: #fff;
  border-radius: 9px;
`;

const CardComp = styled(Card)`
  border-radius: 9px;
  height: inherit;
  width: 100%;
`;

const CardMediaComp = styled(CardMedia)`
  position: absolute;
  background-color: #f0ffff;
  height: 100%;
  width: 100%;
  filter: brightness(80%);
  border-radius: 9px;
  transition: ${transition};
`;

const CardComponent = styled(motion.div)`
  font-family: inherit;
  height: 100%;
  width: inherit;
  display: flex;
  align-items: center;
  border-radius: 18px;
  transition: ${transition};
`;

const ContentButton = styled.div`
  display: flex;
  justify-content: center;
  z-index: 1;
  width: 100%;
  opacity: 1;
  transition: ${transition};
`;

const IconButtonComp = styled(IconButton)`
  color: #fff;
  transition: ${transition};
`;

const IconPlay = styled(PlayCircleOutlineIcon)`
  height: 70px;
  width: 70px;
`;

const ContentHeightWidth = styled.div`
  height: inherit;
  width: 100%;
  touch-action: pan-x;
`;

const IframeComp = styled.iframe`
  background-color: #004500;
  /* background-image: linear-gradient(180deg, rgba(0,69,0,1) 0%, rgba(76,175,80,1) 0%); */
`;

const ContentCircular = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CircularProgressComp = styled(CircularProgress)`
  height: 100px;
  width: 100px;
  color: #004500;
`;

const ContentColor = styled.div`
  min-height: 1000px;
  position: relative;
  background: rgba(0,69,0,1);
  background: linear-gradient(339deg, rgba(0,0,0,1) 2%, rgba(0,69,0,1) 92%);
  padding-bottom: 24px;
`;


export default function MaterItem(props) {
  const C_TIME_FADE = objPrinc.timeFade;
  const { id } = useParams();
  const data = objData;
  const history = useHistory();
  const styles = useStyles(props);
  const [refresh, setRefresh] = useState(false);
  const [onPlayMovie, setPlayMovie] = useState(false);
  const [onShowModal, setShowModal] = useState({
    open: false,
    numberCarousel: 0
  });

  const [dataMater, setDataMater] = useState({
    open: false,
    data: null,
    index: 0
  });

  useEffect(() => {
    setRefresh(false);
    window.scrollTo(0, 0);
    const state = retornarState();
    state !== null ? setDataMater(state) : history.push("/materias");
  }, [refresh]);

  function retornarState() {
    let dataReturn = null;
    for (let index = 0; index < data.length; index++) {
      if (data[index].search.toString() === id) {
        return (dataReturn = {
          open: true,
          data: data[index],
          index: index
        });
      }
    }
    return dataReturn !== null ? dataReturn : null;
  }

  function setPlayMovieTime() {
    setTimeout(() => {
      setPlayMovie(true);
    }, C_TIME_FADE);
  }

  function retornarImgMovie() {
    if (onPlayMovie) {
      return (
        <IframeComp
          style={{
            border: "none",
            width: "100%",
            height: "inherit",
            borderRadius: "9px",
            backgroundColor: "#004500"
          }}
          // allowfullscreen
          allow="fullscreen"
          title="movie"
          src={retornarLinkMovie()}
        />
      )
    } else {
      return (
        <ContentImageComp data-aos="fade-left">
          <CardActionComp
            onClick={() => setPlayMovieTime()}
            children={<CardComp children={
              <>
                <CardMediaComp image={dataMater.data.img} />
                <CardComponent>
                  <ContentButton>
                    <IconButtonComp
                      disableFocusRipple
                      disableRipple
                      size={"small"}
                      children={<IconPlay />}
                    />
                  </ContentButton>
                </CardComponent>
              </>} />}
          />

        </ContentImageComp>
      );
    }
  }

  function retornarLinkMovie() {
    return `https://www.youtube.com/embed/${dataMater.data.link
      }?mute=0&autoplay=${onPlayMovie ? "1" : "0"}`;
  }

  function setHisory(e) {
    history.push(e);
    setDataMater({
      open: false,
      data: [{ sliderImage: [{ image: '' }] }],
      index: 0
    });
    setPlayMovie(false);
    setRefresh(true); // refresh para renderizar o componente e buscar o novo estado
    // window.scrollTo(0, 0);
  }

  const C_INDEXPREV = (dataMater.index === 0 ? data.length - 1 : dataMater.index - 1);
  const C_INDEXNEXT = (dataMater.index === 0 ? dataMater.index + 1 : dataMater.index === data.length - 1 ? 0 : dataMater.index + 1);

  const propsMaterCapa = {
    fontFamily: props.fontFamily,
    img: "https://images.unsplash.com/photo-1635183528637-14d9d852a20d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2098&q=80",
    title: "",
    fontSize: ""
  }


  function retornarConteudo() {
    return (
      <ContentOverFlowHidden>
        <MaterCapaApresent ocultaDesc={true} noHeight={true} {...propsMaterCapa} />
        {/* <Modal
          style={{ top: "0vh", zIndex: 1401 }}
          open={onShowModal.open}
          onClose={(e) =>
            setShowModal({ open: false, ...onShowModal.numberCarousel })
          }
          children={
            <Slider
              onModal
              Mater
              images={dataMater.data.slideImage}
              setCloseModal={() =>
                setShowModal({ open: false, ...onShowModal.numberCarousel })
              }
            />
          }
        /> */}
        <ContentColor>
          <Container data-aos="fade-up" maxWidth="lg">
            <HeaderComp>
              <PaperComp elevation={0} fontFamily={props.fontFamily}>
                <ContentDescPrinc>
                  <ContentDescSec data-aos="fade-up">
                    <ContentFlex className={styles.boxDesc}>
                      <Typography variant="h3" children={dataMater.data.title} />
                      <TypographyTittleDescComp variant="h5" children={dataMater.data.desc} />
                      <ButtonComp
                        name={onPlayMovie ? "Assitindo" : "Assistir"}
                        onClick={() => setPlayMovieTime()}
                      />
                    </ContentFlex>
                  </ContentDescSec>
                </ContentDescPrinc>
                <ContentImagePrinc children={<ContentImageSec children={retornarImgMovie()} />} />
              </PaperComp>
            </HeaderComp>
            <ArticleComp>
              <ContentTextPrinc fontFamily={props.fontFamily}>
                <TypographyDescComp variant="h6" data-aos="fade-up" children={dataMater.data.textPrinc} />
                <TypographyDescComp variant="h6" data-aos="fade-up" children={dataMater.data.textSec} />
                <TypographyDescComp variant="h6" data-aos="fade-up" children={dataMater.data.textThird} />
              </ContentTextPrinc>
            </ArticleComp>
            <ArticleComp>
              <ContentHeightWidth data-aos="fade-up">
                {/* <Slider */}
                <CrSelMater
                  fontFamily={props.fontFamily}
                  // setScrollTop={() => window.scrollTo(0, 0)}
                  // color="#4e9b31"
                  // Mater
                  // onModal={false}
                  dataImage={dataMater.data.slideImage}
                // onShowModal={(e) =>
                //   setShowModal({ open: true, numberCarousel: e })
                // }
                />
              </ContentHeightWidth>
            </ArticleComp>
            <ArticleComp>
              <div style={{ width: "100%" }} data-aos="fade-up">
                <CardNextPrev
                  fontFamily={props.fontFamily}
                  setHisory={(e) => setHisory(e)}
                  index={dataMater.index}
                  indexPrev={C_INDEXPREV}
                  indexNext={C_INDEXNEXT}
                  data={data}
                  type="Mat??ria"
                />
              </div>
            </ArticleComp>
          </Container>
        </ContentColor>
      </ContentOverFlowHidden >
    );
  }

  function retornarLoadForm() {
    return (
      <ContentCircular children={<CircularProgressComp style={{ height: 70, width: 70 }} disableShrink />} />
    )
  }

  return dataMater.open ? retornarConteudo() : <ContentLoad />;
}
