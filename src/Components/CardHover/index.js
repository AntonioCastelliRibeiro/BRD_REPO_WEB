import { useState, useEffect } from "react";
import { Container, Hidden } from "@material-ui/core";
import styled from "styled-components";
import data from "./data.js";

import CardUp from "./CardUp";
import ImageComp from "./Image";
import DescPrinc from "./DescPrinc";

const Content = styled.div`
  display: flex;
  height: 450px;
  border-radius: 15px;
  background-color: #b3b3b3;
`;

const ContentPrinc = styled.div`
  font-family: ${(props) => props.fontFamily};
  display: flex;
  height: 100%;
  width: 100%;
  background-color: transparent;
  /* background-color: rgb(8, 127, 35); */
  /* background-color: ${(props) =>
    props.image === data.image[0] ? "#8b582f" : "#766517"}; */
  /* filter: brightness(80%); */
  -web-kit-transition: background-color 300ms linear;
  -ms-transition: background-color 300ms linear;
  transition: background-color 300ms linear;
`;

const ContainerPrinc = styled(Container)`
  padding-top: 30px;
  padding-bottom: 130px;
`;

const ContentFade = styled.div``;

export default function CardHover(props) {
  const [onLoad, setOnLoad] = useState(false);
  const [image, setImage] = useState(data.image[0]);

  useEffect(() => {
    const imagesPreload = data.image;
    imagesPreload.forEach((image) => {
      const newImage = new Image();
      newImage.src = image;
      window[image] = newImage;
    });
    setOnLoad(true);
  }, []);

  const setImageChange = (e) => {
    return setImage(data.image[e - 1]);
    // return setImage(e === 1 ? data.image[0] : data.image[1]);
  };

  function retornarComp() {
    if (!onLoad) {
      return <div>Carregando</div>;
    } else {
      return (
        <ContentPrinc fontFamily={props.fontFamily} image={image}>
          <ContainerPrinc maxWidth="xl">
            <DescPrinc descFirst={data.descFirst} descSec={data.descSec} />
            <ContentFade data-aos="fade-up" data-aos-delay="300">
              <Hidden xsDown>
                <Content >
                  <CardUp
                    key="0"
                    isLeft
                    mobile={false}
                    setImage={setImageChange}
                    borderRight
                    title={data.titleLeft}
                    desc={data.descLeft}
                    btnDesc={data.btnLeft}
                    pathName={data.pathNameLeft}
                  />
                  <CardUp
                    key="1"
                    isMid
                    mobile={false}
                    borderRight
                    setImage={setImageChange}
                    title={data.titleMid}
                    desc={data.descMid}
                    btnDesc={data.btnMid}
                    pathName={data.pathNameMid}
                  />
                  <CardUp
                    key="2"
                    isRight
                    mobile={false}
                    setImage={setImageChange}
                    title={data.titleRight}
                    desc={data.descRight}
                    btnDesc={data.btnRight}
                    pathName={data.pathNameRight}
                  />
                </Content>
                <ImageComp image={image} />
              </Hidden>
            </ContentFade>
            <Hidden smUp>
              <ContentFade data-aos="fade-up" data-aos-delay="300">
                <Content>
                  <CardUp
                    key="0"
                    isLeft
                    mobile
                    setImage={setImageChange}
                    title={data.titleLeft}
                    desc={data.descLeft}
                    btnDesc={data.btnLeft}
                    pathName={data.pathNameLeft}
                  />
                </Content>
                <ImageComp mobile image={data.image[0]} />
              </ContentFade>
              <div style={{ padding: 10 }} />
              <ContentFade data-aos="fade-up" data-aos-delay="300">
                <Content>
                  <CardUp
                    key="1"
                    isMid
                    mobile
                    setImage={setImageChange}
                    title={data.titleMid}
                    desc={data.descMid}
                    btnDesc={data.btnMid}
                    pathName={data.pathNameMid}
                  />
                </Content>
                <ImageComp image={data.image[1]} />
              </ContentFade>
              <div style={{ padding: 10 }} />
              <ContentFade data-aos="fade-up" data-aos-delay="300">
                <Content>
                  <CardUp
                    key="2"
                    isRight
                    mobile
                    setImage={setImageChange}
                    title={data.titleRight}
                    desc={data.descRight}
                    btnDesc={data.btnRight}
                    pathName={data.pathNameRight}
                  />
                </Content>
                <ImageComp image={data.image[2]} />
              </ContentFade>
            </Hidden>
          </ContainerPrinc>
        </ContentPrinc>
      );
    }
  }

  return retornarComp();
}
