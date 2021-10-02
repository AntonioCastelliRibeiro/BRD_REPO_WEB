import React from "react";
import { CardActionArea, CardMedia } from "@material-ui/core";
import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import IconMotion from "../../LogoMotion";
import DescOpacity from "../DescOpacity";
import IProps from "./interface";

const transition = "ease-in-out 0.3s";

interface iCardCompPrinc {
  hover?: boolean;
  fontFamily?: string;
}

const CardCompPrinc = styled(motion.div) <iCardCompPrinc>`
  height: 300px;
  width: 100%;
  border-radius: 18px;
  border: ${(props) =>
    props.hover ? "2px solid transparent" : "2px solid #fff"};
  overflow: hidden;
  transition: ${transition};
`;

const CardMediaComp = styled(CardMedia)`
  height: inherit;
  width: inherit;
  border-radius: 18px;
  background-color: #8e8e8e;
  transition: ${transition};
  /* filter: brightness(80); */
`;

const CardDescPrinc = styled.div`
  height: inherit;
  width: inherit;
  position: absolute;
  /* background: rgb(43, 68, 70);
  background: linear-gradient(
    180deg,
    rgba(43, 68, 70, 1) 35%,
    rgba(39, 90, 94, 1) 100%
  ); */
  background-color: #37993a;
  background-image: linear-gradient(#3a8d36, #37993a);
  opacity: 1;
  border-radius: 18px;
  transition: ${transition};
`;

const ContentDescSec = styled.div`
  height: inherit;
  width: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentDescTerc = styled.div<iCardCompPrinc>`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-family: ${props => props.fontFamily};
  color: #fff;
`;

const DescPrinc = styled.div`
  font-size: 30px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: normal;
  line-height: 1.5;
  padding-bottom: 9px;
  transition: ${transition};
  text-align: center;
`;

const DescSec = styled.div`
  font-size: 18px;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  transition: ${transition};
`;

const CardMediaCompIconPrinc = styled.div`
  height: inherit;
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DescHoverUp = styled.div`
  opacity: 0;
`;

const CardActionAreaComp = styled(CardActionArea)`
  height: inherit;
  width: inherit;
  color: #fff;
  
  &:hover {
    ${DescPrinc} {
      transform: translateY(-25px);
    }
    ${DescSec} {
      transform: translateY(25px);
    }
    ${CardDescPrinc} {
      opacity: 0;
    }
    ${DescHoverUp} {
      opacity: 1;
    }
  }
`;

const ContentFade = styled.div``;

// https://www.beyourselfcannabis.com/shop

export default function CardItem(props: IProps) {
  const [onHover, setHover] = useState(false);
  return (
    <ContentFade data-aos="fade-up" data-aos-delay="300">
      <CardCompPrinc

        key={props.count}
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        hover={onHover}
      >
        <CardActionAreaComp

          style={{ borderRadius: 18 }}
          key={props.count}
        // onMouseOver={() => setHover(true)}
        // onMouseLeave={() => setHover(false)}
        >
          <CardDescPrinc>
            <ContentDescSec>
              <ContentDescTerc fontFamily={props.fontFamily}>
                <DescPrinc children={props.title} />
                <DescSec children={props.desc} />
              </ContentDescTerc>
            </ContentDescSec>
          </CardDescPrinc>
          <CardMediaComp image={props.image}>
            <CardMediaCompIconPrinc>
              {onHover ? <IconMotion height="120" width="150" /> : false}
              <DescOpacity
                fontFamily={props.fontFamily}
                hover={onHover}
                mobile={false}
                desc={props.descHover}
              />
            </CardMediaCompIconPrinc>
          </CardMediaComp>
        </CardActionAreaComp>
      </CardCompPrinc>
    </ContentFade>
  );
}
