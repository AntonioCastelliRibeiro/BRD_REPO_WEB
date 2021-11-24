import React from "react";
import { motion } from "framer-motion";
import { CardActionArea, CardMedia, Typography } from "@material-ui/core";
import styled from "styled-components";
import DescCard from "../DescCard";
import iProps from "./interface";
import { useHistory } from "react-router";

const transition = "ease-in-out .45s";

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
  background-color: #004500;
  color: #fff;
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
      color: black;
      background-color: #fff;
    }
  }
`;

const ContentDescCard = styled(motion.div)`
  transition: ${transition};
`;

const CardActionAreaComp = styled(CardActionArea)`
  color: #fff;
`;

export default function CardComp(props: iProps) {
  const history = useHistory();

  function onClick() {
    setTimeout(() => {
      history.push(props.datacard.pathName);
    }, 300);
  }

  return (
    <ContentPrinc key={props.count}>
      <ContentSec>
        <CardActionAreaComp onClick={() => onClick()} >
          <CardComponent children={<CardMediaComp image={props.datacard.img} />} />
          <ContentDescCard children={<DescCard ButtonComp={ButtonComp} {...props} />} />
        </CardActionAreaComp>
      </ContentSec>
    </ContentPrinc>
  );
}
