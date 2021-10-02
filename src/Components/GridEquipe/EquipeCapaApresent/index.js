import { Box } from "@material-ui/core";
import ImageColab from "../../About/ImageAbout";
import TextureImage from "../../TextureImg";

export default function EquipeCapaApresent(props) {
  return (
    // <TextureImage>
    <>
      <ImageColab
        fontFamily={props.fontFamily}
        img={props.img}
        title={props.title}
        fontSize={props.fontSize}
      />
      <Box height="60vh" />
    </>
    // </TextureImage >
  );
}
