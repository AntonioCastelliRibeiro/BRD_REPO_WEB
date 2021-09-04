import React from "react";
import { Star } from "@material-ui/icons";
import { Paper, Avatar } from "@material-ui/core";
import styled from "styled-components";
import IProps from "./interface";

interface IContentPrinc {
  fontFamily: string;
}

const ContentPrinc = styled.div<IContentPrinc>`
  font-family: ${(props) => props.fontFamily};
  height: 400px;
  user-select: none;
  overflow: hidden;
  width: 100%;
  background: inherit
`;

const ContentSec = styled.div`
  font-family: inherit;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
`;

const PaperAvatar = styled(Paper)`
  border-radius: 36px
`;

const AvatarComp = styled(Avatar)`
  height: 70px;
  width: 70px;
`;

const ContentDesc = styled.div`
  font-family: inherit;
  width: 70%;
  padding: 30px 0px 30px 0px;
  font-size: 1.0625rem;
  line-height: 1.55em;
  font-style: italic;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.76);
  text-align: center;
`;

const DescName = styled.div`
  font-family: inherit;
  width: auto;
  font-size: 1.125rem;
  text-align: center;
  line-height: 1.5em;
  font-weight: 700;
  color: #FFF
`;

const DescCargo = styled.div`
  font-family: inherit;
  font-size: .75rem;
  text-transform: uppercase;
  font-weight: 500;
  color: #6c757d;
  line-height: 1.5em;
`;

const ContentStar = styled.div`
  display: flex;
`;

const StarComp = styled(Star)`
  color: #ff9800
`;

export default function CardCrSel(props: IProps) {
  return (
    <ContentPrinc fontFamily={props.fontFamily} key={props.count}>
      <ContentSec>
        <PaperAvatar elevation={3}>
          <AvatarComp
            alt="User"
            src={props.img}
          />
        </PaperAvatar>
        <ContentDesc children={props.desc} />
        <DescName children={props.name} />
        <DescCargo children={props.cargo} />
        <ContentStar children={
          <>
            <StarComp />
            <StarComp />
            <StarComp />
            <StarComp />
            <StarComp />
          </>
        } />
      </ContentSec>
    </ContentPrinc>
  );
}
