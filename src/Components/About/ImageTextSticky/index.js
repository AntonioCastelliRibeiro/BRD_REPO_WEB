import { Box, CardActionArea, CardMedia } from "@material-ui/core";
import { StickyContainer, Sticky } from "react-sticky";
import styled from "styled-components";

const CardActionAreaComp = styled(CardActionArea)`
  height: 40vw;
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

const DescLeft = styled.div`
  text-align: center;
  padding-bottom: 12px;
  font-size: 23px;
  font-weight: 500;
  color: #fff;
`;

const ContentImage = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top:-177px;
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
                {props.title ? <DescLeft data-aos="fade-up" data-aos-delay="200" children={props.title} /> : false}
                <Box data-aos="fade-up" data-aos-delay="200" children={props.desc} />
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
