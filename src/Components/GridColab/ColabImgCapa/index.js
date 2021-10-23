import { Box } from "@material-ui/core";
import ImageColab from "../../About/ImageAbout";
import TextureImage from "../../TextureImg";

export default function ColabImgCapa(props) {
  return (
    <>
      {/* <TextureImage> */}
      <ImageColab
        fontFamily={props.fontFamily}
        img={props.img}
        title={props.title}
        fontSize={props.fontSize}
        ocultaDesc={props.ocultaDesc}
      />
      {props.ocultaDesc ? false : <Box height="60vh" />}
      {/* </TextureImage> */}
    </>
  );
}
