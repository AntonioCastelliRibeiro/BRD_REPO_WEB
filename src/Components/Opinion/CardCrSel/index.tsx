import React from "react";
import { Star } from "@material-ui/icons";
import { Paper, Avatar, Typography } from "@material-ui/core";
import styled from "styled-components";
import IProps from "./interface";
import { Rating } from "@material-ui/lab";

interface IContentPrinc {
  fontFamily: string;
}

const ContentPrinc = styled.div<IContentPrinc>`
  font-family: ${(props) => props.fontFamily};
  height: 450px;
  user-select: none;
  overflow: hidden;
  width: 100%;
  background: inherit;
  @media(max-width: 900px){
    height: 600px;
  }
`;

const ContentSec = styled.div`
  height: 100%;
  font-family: inherit;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const PaperAvatar = styled(Paper)`
  border-radius: 36px;
`;

const AvatarComp = styled(Avatar)`
  height: 70px;
  width: 70px;
`;

const ContentDesc = styled.div`
  /* font-family: inherit; */
  width: 70%;
  padding: 30px 0px 30px 0px;
  font-size: 1.0925rem;
  /* font-style: italic; */
  color: #fff;
  text-align: center;
  letter-spacing: 1px;
  /* line-height: 1.75;
  font-weight: 800; */
`;

const DescName = styled.div`
  padding-bottom: 8px;
  text-align: center;
  color: #fff;
`;

const DescCargo = styled.div`
  padding-bottom: 8px;
  text-transform: uppercase;
  color: #fff;
`;

const ContentStar = styled.div`
  display: flex;
`;

const StarComp = styled(Star)`
  height: 25px;
  width: 25px;
  color: #ffb400;
  transition: 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
`;

const ContentSocialInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export default function CardCrSel(props: IProps) {
  return (
    <ContentPrinc data-aos="fade-up" data-aos-delay={300} fontFamily={props.fontFamily} key={props.count}>
      <ContentSec>
        <PaperAvatar elevation={3}>
          <AvatarComp
            alt="User"
            src={props.img}
          />
        </PaperAvatar>
        <ContentDesc children={<Typography variant="h6" children={props.desc} />} />
        <ContentSocialInfo>
          <DescName children={<Typography variant="h5" children={props.name} />} />
          <DescCargo children={<Typography variant="subtitle2" children={props.cargo} />} />
          <ContentStar children={
            <>
              {/* <Rating name="size-large" value={6} defaultValue={6} size="large" /> */}

              <StarComp />
              <StarComp />
              <StarComp />
              <StarComp />
              <StarComp />
            </>
          } />
        </ContentSocialInfo>
      </ContentSec>
    </ContentPrinc>
  );
}
