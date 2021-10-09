import { Box } from "@material-ui/core";
import ImageColab from "../../About/ImageAbout";
import TextureImage from "../../TextureImg";

export default function MaterCapaApresent(props) {
  return (
    <>
      <ImageColab
        fontFamily={props.fontFamily}
        img={props.img}
        title={props.title}
        fontSize={props.fontSize}
      />
      <Box height="60vh" />
    </>
  );
}
