import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Avatar, IconButton, Typography } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import styled from "styled-components";
import IProps from "./interface";

const transition = "ease 0.5s";

const AvatarComp = styled(Avatar)`
  z-index: 5;
`;

const ContentAvatarPrinc = styled.div`
  border: 3px solid transparent;
  background-color: #004500;
  border-radius: 50%;
  transition: ${transition};
`;

const ContentAvatar = styled.div`
  border: 4px solid transparent;
  border-radius: 50%;
  transition: ${transition};
  z-index: 5;
`;

const DescName = styled.div`
  text-align: center;
  margin-bottom: 5px;
  padding-top: 5px;
  color: #004500;
  font-size: 25px;
  font-weight: 600;
`;

const DescCargo = styled.div`
  font-weight: 500;
  padding-bottom: 5px;
  color: #1a1a1a;
  line-height: 24px;
  text-align: center;
`;

const ContentSocial = styled.div`
  opacity: 1;
  z-index: -1;
  transform: translateY(40px);
  transition: ${transition};
`;

const ContentCircle = styled.div`
  height: 600px;
  width: 55%;
  border: 1px #000;
  border-radius: 50%;
  background-color: #004500;
  opacity: 1;
  z-index: -1;
  transform: translateY(-55px) scale(1.4);
  transition: ${transition};
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  z-index: 5;
  align-items: center;
  /* padding-top: 20px; */
  height: 100%;
  width: 100%;
`;

interface IContentItem {
  fontFamily: string;
}

const ContentItem = styled.div<IContentItem>`
  font-family: ${props => props.fontFamily};
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 5;
  transform: translateY(-10px);
`;

const FacebookIconComp = styled(FacebookIcon)`
  color: #004500;
`;

const LinkedInIconComp = styled(LinkedInIcon)`
  color: #004500;
`;

const InstagramIconComp = styled(InstagramIcon)`
  color: #004500;
`;

const ContentDesc = styled.div`
  color: #004500;
  text-align: center;
`;

const CardComp = styled.div`
  background-color: #fff;
  user-select: none;
  overflow: hidden;
  border-radius: 5px;
  height: 300px;
  width: 100%;
  display: flex;
  z-index: 5;
  flex-direction: column;
  align-items: center;
  @media(max-width: 599px) {
    border: 1px solid #fff;
    ${ContentAvatar} {
      border: 4px solid #4caf50;
      transform: scale(0.96);
    }
    ${ContentSocial} {
      opacity: 1;
      transform: translateY(0px);
    }
    ${ContentCircle} {
      opacity: 1;
      transform: translateY(30px) scale(3.5);
    }
  };
  &:hover {
    ${ContentAvatar} {
      border: 4px solid #4caf50;
      transform: scale(0.96);
    }
    ${ContentSocial} {
      opacity: 1;
      transform: translateY(0px);
    }
    ${ContentCircle} {
      opacity: 1;
      transform: translateY(30px) scale(3.5);
    }
  }
`;

export default function EquipeCapa(props: IProps) {
  const location = useLocation();
  return (

    <Content data-aos="fade-up">
      <Link
        style={{ textDecoration: "none", color: "black", width: "100%" }}
        to={location.pathname + "/" + props.search}
      >
        <CardComp>
          <ContentItem fontFamily={props.fontFamily}>
            <ContentCircle />
            <ContentAvatarPrinc>
              <ContentAvatar>
                <AvatarComp
                  style={{ height: 150, width: 150 }}
                  src={props.img}
                />
              </ContentAvatar>
            </ContentAvatarPrinc>
            <ContentDesc>
              <Typography variant="h5" children={props.nome + " " + props.sobreNome} />
              <Typography variant="subtitle2" children={props.cargo} />
            </ContentDesc>
            <ContentSocial
              children={
                <>
                  <IconButton size="small" children={<FacebookIconComp />} />
                  <IconButton size="small" children={<LinkedInIconComp />} />
                  <IconButton size="small" children={<InstagramIconComp />} />
                </>
              }
            />
          </ContentItem>
        </CardComp>
      </Link>
    </Content>
  );
}
