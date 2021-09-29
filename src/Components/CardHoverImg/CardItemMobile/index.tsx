import React from "react";
import { CardActionArea, CardMedia } from "@material-ui/core";
import { motion } from "framer-motion";
import styled from "styled-components";
// import IconMotion from "../../IconMotion";
import DescOpacity from "../DescOpacity";
import IProps from "../CardItem/interface";

const transition = "ease-in-out 0.3s";

const CardCompPrinc = styled(motion.div)`
  height: 300px;
  width: 100%;
  border-radius: 18px;
  border: 2px solid #fff;
  overflow: hidden;
  transition: ${transition};
`;

const CardMediaComp = styled(CardMedia)`
  height: inherit;
  width: inherit;
  border-radius: 18px;
  background-color: #8e8e8e;
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

const CardActionAreaComp = styled(CardActionArea)`
  height: inherit;
  width: inherit;
  color: #fff;
`;

// https://www.beyourselfcannabis.com/shop

export default function CardItem(props: IProps) {
    return (
        <CardCompPrinc key={props.count}>
            <CardActionAreaComp style={{ borderRadius: 18 }} key={props.count}>
                <CardMediaComp image={props.image}>
                    <CardMediaCompIconPrinc>
                        <CardMedia
                            image={props.logo}
                            style={{ height: 80, width: 80, transform: "translateY(-10px)" }}
                        />
                        {/* <IconMotion height="120px" width="150px" /> */}
                        <DescOpacity fontFamily={props.fontFamily} hover={true} mobile={true} desc={props.descHover} />
                    </CardMediaCompIconPrinc>
                </CardMediaComp>
            </CardActionAreaComp>
        </CardCompPrinc>
    );
}
