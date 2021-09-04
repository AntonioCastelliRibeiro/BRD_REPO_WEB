import React from "react";
import { Grid, Paper, Avatar, CardActionArea } from "@material-ui/core";
import styled from "styled-components";
import { motion } from "framer-motion";
import "aos/dist/aos.css";

import IPatrocItem from "./interface";

import Aspas from "../../../Image/quote.svg";

const transition = "ease 0.3s";

const ContentPrinc = styled.div`
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
  color: #3c4858;
  font-weight: 700;
  font-size: 1.125rem;
`;

const ContentSocial = styled.div`
  color: #999;
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

const AvatarComp = styled(Avatar)`
  border: 0.5px solid #fff;
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
  background-color: #ffff;
  width: 100%;
  min-width: 290px;
`;

const ImgComp = styled.img`
  border-radius: 50%;
  background-color: #fff;
`;

export default function PatrocItem(props: IPatrocItem) {
    return (
        <Grid key={props.count} item xs={12} sm={12} md={4} lg={4} xl={4}>
            <ContentGrid
                key={props.count}
                whileTap={{ scale: 0.97 }}
                // drag
                // dragConstraints={{
                //   top: 0,
                //   left: 0,
                //   right: 0,
                //   bottom: 0
                // }}
                // dragElastic={0.03}
                data-aos="fade-up"
            >
                <PaperComp>
                    <ContentPrinc>
                        <ImgAspas src={Aspas} alt="aspas" />
                        <ContentDesc children={props.desc} />
                        <ContentName children={props.name} />
                        <ContentSocial children={props.social} />
                        <ContentLogo
                            data-aos="fade"
                            children={
                                <ContentSecLogo
                                    children={
                                        <ImgComp src={props.logo} style={props.styleLogo} />
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
