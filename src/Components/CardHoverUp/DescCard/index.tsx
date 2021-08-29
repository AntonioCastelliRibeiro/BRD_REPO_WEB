import React from "react";
import { Typography } from "@material-ui/core";
import styled from "styled-components";
import iProps from "./interface";

const ContentDesc = styled.div`
  height: 360px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DescTitle = styled(Typography)`
  opacity: 0;
  transition: ease 0.3s;
`;

const ContentItemDesc = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const ContentPrincUp = styled.div`
  position: absolute;
  border-radius: 20px;
  z-index: 1;
  background-color: #f2f5f7;
  color: black;
  margin-top: -60px;
  user-select: none;
  width: 100%;
  overflow: hidden;
  transition: ease 0.3s;
  &:hover {
    margin-top: -360px;
    border-radius: 0px;
    z-index: 500;

    ${DescTitle} {
      opacity: 1;
    }
  }
`;

export default function DescCard(props: iProps) {
    return (
        <ContentPrincUp>
            <ContentDesc>
                <ContentItemDesc>
                    <DescTitle variant="h1" children={props.datacard.desc} />
                </ContentItemDesc>
            </ContentDesc>
        </ContentPrincUp>
    );
}
