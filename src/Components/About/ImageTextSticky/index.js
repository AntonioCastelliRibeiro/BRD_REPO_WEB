import { Box, CardActionArea, CardMedia, Typography } from "@material-ui/core";
import { StickyContainer, Sticky } from "react-sticky";
import styled from "styled-components";

const CardActionAreaComp = styled(CardActionArea)`
  height: 800px;
  width: 44vw;
  border-radius: 4px;
  color: #fff;
`;

const CardMediaComp = styled(CardMedia)`
  height: 100%;
  width: 100%;
  border-radius: 4px;
`;

const ContentDescLeftFlex = styled.div`
  display: flex;
  width: 100%;
`;

const ContentDescLeft = styled.div`
  font-family: ${props => props.fontFamily};
  width: 50%;
  text-align: center;
  font-size: 18px;
  font-weight:300;
  padding-left: 2vw;
  padding-bottom: 103px;
  padding-top: 103px;
  line-height: 1.1333;
  color: #fff;
`;

const ContentImage = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top:-377px;
`;

const TypographyTitle = styled(Typography)`
  padding-bottom: 16px;
`;

export default function ImageTextSticky(props) {
  return (
    <StickyContainer>
      <Sticky bottomOffset={-80}>
        {({
          style
        }) => (
          <header style={style}>
            <ContentDescLeftFlex>
              <ContentDescLeft fontFamily={props.fontFamily}>
                {props.title ? <TypographyTitle variant="h4" data-aos="fade-up" data-aos-delay="200" children={props.title} /> : false}
                <Typography variant="h5" data-aos="fade-up" data-aos-delay="200" children={props.desc} />
              </ContentDescLeft>
              <Box width="50%" />
            </ContentDescLeftFlex>
          </header>
        )}
      </Sticky>
      <ContentImage data-aos="fade-up" data-aos-delay="200">
        <CardActionAreaComp children={<CardMediaComp image={props.img} alt="Imagem de Fundo Sobre" />} />
      </ContentImage>
    </StickyContainer>
  );
}
