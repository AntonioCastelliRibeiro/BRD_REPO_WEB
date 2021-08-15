import React from "react";
import { motion } from "framer-motion";
import { CardActionArea, CardMedia, Typography } from "@material-ui/core";
import styled from "styled-components";
import DescCard from "../DescCard";
import iProps from "./interface";

const transition = "ease 0.3s";

const CardMediaComp = styled(CardMedia)`
  height: 350px;
  width: 100%;
  transition: ${transition};
`;

const CardComponent = styled(motion.div)`
  height: inherit;
  width: inherit;
  border-radius: 4px;
  transition: ${transition};
`;

const ContentPrinc = styled.div`
  overflow: hidden;
  border-radius: 4px;
  transition: ${transition};
`;

const ButtonComp = styled(Typography)`
  padding: 8px 18px;
  border-radius: 5px;
  background-color: #fff;
  color: black;
  border: 1px solid #fff;
  transition: ${transition};
`;

const ContentSec = styled(motion.div)`
  height: inherit;
  width: inherit;
  overflow: hidden;
  border-radius: 4px;
  transition: ${transition};
  &:hover {
    ${CardMediaComp} {
      transform: scale(1.1);
    }
    ${ButtonComp} {
      color: #fff;
      background-color: rgb(68, 133, 69);
    }
  }
`;

const ContentDescCard = styled(motion.div)`
  transition: ${transition};
`;

export default function CardComp(props: iProps) {
  return (
    <ContentPrinc key={props.count}>
      <ContentSec>
        <CardActionArea style={{ color: "#fff" }}>
          <CardComponent>
            <CardMediaComp image={props.datacard.img} />
          </CardComponent>
          <ContentDescCard
            children={<DescCard ButtonComp={ButtonComp} {...props} />}
          />
        </CardActionArea>
      </ContentSec>
    </ContentPrinc>
  );
}
