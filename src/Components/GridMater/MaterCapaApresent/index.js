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
        ocultaDesc={props.ocultaDesc}
        descPrinc={"Matérias"}
      />
      {props.noHeight ? false : <Box height="60vh" />}
    </>
  );
}
