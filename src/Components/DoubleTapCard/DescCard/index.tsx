import React from "react";
import { Typography } from "@material-ui/core";
import styled from "styled-components";
import iProps from "./interface";

const ContentPrinc = styled.div`
  position: absolute;
  z-index: 1;
  color: #fff;
  margin-top: -350px;
  user-select: none;
  width: 100%;
`;

const ContentDesc = styled.div`
  height: 350px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DescTitle = styled(Typography)`
  text-align: center;
`;

const ContentItemDesc = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export default function DescCard(props: iProps) {
  return (
    <ContentPrinc>
      <ContentDesc>
        <ContentItemDesc>
          <DescTitle variant="h3" children={props.datacard.desc} />
          <props.ButtonComp variant="button" children={props.datacard.buttonDesc} />
        </ContentItemDesc>
      </ContentDesc>
    </ContentPrinc>
  );
}
