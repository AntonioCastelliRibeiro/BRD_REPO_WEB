import styled from "styled-components";
import { Box, CardActionArea } from "@material-ui/core";
import TextCenter from "../TextCenter";

const CardActionAreaComp = styled(CardActionArea)`
  height: 550px;
  width: 100%;
  border-radius: 4px;
  color: #fff;
`;

export default function ImageText(props) {
  return (
    <>
      <TextCenter
        isSticky={true}
        fontFamily={props.fontFamily}
        title={props.title}
        desc={props.desc}
        padding="20px 0px 28px 0px"
        fontSize="18px"
        color="#fff"
      />
      <Box data-aos="fade-up" data-aos-delay="200">
        <CardActionAreaComp>
          <img
            src={props.img}
            style={{ height: "inherit", width: "100%" }}
            alt="imageText"
          />
        </CardActionAreaComp>
      </Box>
    </>
  );
}
