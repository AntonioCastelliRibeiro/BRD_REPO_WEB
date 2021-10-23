import React from "react";
import { Grid, Paper } from "@material-ui/core";
import styled from "styled-components";
import { motion } from "framer-motion";
import "aos/dist/aos.css";

import IPatrocItem from "./interface";

import Aspas from '@material-ui/icons/FormatQuote';
// import Aspas from "../../../Image/quote.svg";

const transition = "ease 0.3s";

const ContentPrinc = styled.div`
  color: #004500;
  width: 100%;
  user-select: none;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  transition: ${transition};
  @media (max-width: 600px) {
    height: 100%;
    padding-top: 0px;
  }
`;

const ImgAspas = styled.img`
  height: 30px;
  width: 30px;
  transition: ${transition};
`;

const ContentDesc = styled.div`
  font-style: italic;
  font-size: 1.0625rem;
  line-height: 1.55em;
  padding: 0.9375rem 1.875rem;
`;

const ContentName = styled.div`
  /* color: #3c4858; */
  font-weight: 700;
  font-size: 1.125rem;
`;

const ContentSocial = styled.div`
  /* color: #999; */
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: 500;
`;

const ContentLogo = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

const ContentSecLogo = styled.div`
  transform: translateY(30px);
  transition: ${transition};
`;

const ContentGrid = styled(motion.div)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  transition: ${transition};
  &:hover {
    ${ContentPrinc} {
      transform: scale(1.05);
    }
    ${ImgAspas} {
      transform: translateY(10px);
    }
    ${ContentSecLogo} {
      transform: translateY(20px);
    }
  }
`;

const PaperComp = styled(Paper)`
  border: none;
  box-shadow: 0;
  height: 350px;
  background-color: #fff;
  width: 100%;
  min-width: 290px;
  box-shadow: none;
`;

const ImgComp = styled.img`
  font-size: 8px;
  border-radius: 50%;
  background-color: #fff;
`;

const AspasComp = styled(Aspas)`
  height: 50px;
  width: 50px;
  color: #004500;
`;

export default function PatrocItem(props: IPatrocItem) {
  return (
    <Grid key={props.count} item xs={12} sm={12} md={4} lg={4} xl={4}>
      <ContentGrid
        key={props.count}
        whileTap={{ scale: 0.97 }}
      >
        <PaperComp data-aos="fade-up" data-aos-delay={300 * props.count}>
          <ContentPrinc>
            <AspasComp />
            {/* <ImgAspas src={Aspas} alt="aspas" /> */}
            <ContentDesc children={props.desc} />
            <ContentName children={props.name} />
            <ContentSocial children={props.social} />
            <ContentLogo
              children={
                <ContentSecLogo
                  children={
                    <ImgComp alt={"Imagem Colaborador"} src={props.logo} style={props.styleLogo} />
                  }
                />
              }
            />
          </ContentPrinc>
        </PaperComp>
      </ContentGrid>
    </Grid>
  );
}
