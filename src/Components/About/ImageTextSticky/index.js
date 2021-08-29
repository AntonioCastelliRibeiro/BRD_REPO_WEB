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

export default function ImageTextSticky(props) {
  function retornarTitle() {
    if (props.title) {
      return (
        <Box
          data-aos="fade-up"
          data-aos-delay="200"
          textAlign="center"
          paddingBottom={"12px"}
          fontSize={"23px"}
          fontWeight={500}
          style={{ color: "#1F1F1F" }}
        >
          {props.title}
        </Box>
      );
    } else return false;
  }

  return (
    <>
      <StickyContainer>
        <Sticky bottomOffset={-80}>
          {({
            style
          }) => (
            <header style={style}>
              <Box display="flex" width="100%">
                <Box
                  fontFamily={props.fontFamily}
                  width="50%"
                  textAlign="center"
                  fontSize="18px"
                  fontWeight={300}
                  paddingLeft="2vw"
                  paddingBottom="103px"
                  paddingTop="103px"
                  lineHeight="1.1333"
                  style={{ color: "#484848" }}
                >
                  {retornarTitle()}
                  <Box data-aos="fade-up" data-aos-delay="200">
                    {props.desc}
                  </Box>
                </Box>
                <Box width="50%"></Box>
              </Box>
            </header>
          )}
        </Sticky>
        <Box
          display="flex"
          width="100%"
          justifyContent="flex-end"
          marginTop="-177px"
        >
          <Box data-aos="fade-up" data-aos-delay="200">
            <CardActionAreaComp>
              <CardMediaComp
                image={props.img}
                alt="imgTxtSticky"
              />
            </CardActionAreaComp>
          </Box>
        </Box>
      </StickyContainer>
    </>
  );
}
