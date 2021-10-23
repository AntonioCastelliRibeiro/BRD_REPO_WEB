import { useEffect } from "react";
import styled from "styled-components";
import { Container, Hidden } from "@material-ui/core";
import ImageAbout from "./ImageAbout";
import ImageText from "./ImageText";
import ImageTextSticky from "./ImageTextSticky";
import TextCenter from "./TextCenter";
import TextLast from "./TextLast";
// import TextureImage from "../TextureImg/index.js";
import DoubleCard from "../DoubleTapCard";
import data from "./data.js";

const ContentPrinc = styled.div``;
const ContentImage = styled.div`
  position: fixed;
`;

const ContentHeight = styled.div`
  height: 60vh;
`;

const ContentBgColor = styled.div`
  position: relative;
  background: rgba(0,69,0,1);
  background: linear-gradient(339deg, rgba(0,0,0,1) 2%, rgba(0,69,0,1) 92%);
`;

const ContainerComp = styled(Container)`
  padding: 0px 0px 103px 0px;
`;

export default function AboutComp(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ContentPrinc>
      <ContentImage>
        <ImageAbout
          fontFamily={props.fontFamily}
          title={data.aboutTitle}
          img={data.aboutImage}
        />
      </ContentImage>
      <ContentHeight />
      <ContentBgColor>
        <TextCenter
          fontFamily={props.fontFamily}
          desc={data.firstDesc}
          padding="40px 0px 20px 0px"
          fontSize="30px"
          fontWeight={200}
        />
        <Hidden mdUp>
          <ImageText
            fontFamily={props.fontFamily}
            title={data.secDescTitle}
            desc={data.secDesc}
            img={data.secImg}
          />
        </Hidden>
        <Hidden smDown>
          <ImageTextSticky
            fontFamily={props.fontFamily}
            title={data.secDescTitle}
            desc={data.secDesc}
            img={data.secImg}
          />
        </Hidden>
        <TextCenter
          fontFamily={props.fontFamily}
          desc={data.thirDesc}
          padding="103px 0px 103px 0px"
          fontSize="26px"
          lineHeight="1.43"
        />
        <ContainerComp data-aos="fade-up" data-aos-delay="200" size="xl">
          <DoubleCard fontFamily={props.fontFamily} />
        </ContainerComp>
        <TextLast fontFamily={props.fontFamily} desc={data.fourDesc} name={data.fourName} />
      </ContentBgColor>
    </ContentPrinc>
  );
}
