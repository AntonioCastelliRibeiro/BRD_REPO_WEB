import { Box } from "@material-ui/core";
import ImageColab from "../../About/ImageAbout";

export default function EquipeCapaApresent(props) {
  return (
    <>
      <ImageColab
        fontFamily={props.fontFamily}
        img={props.img}
        title={props.title}
        fontSize={props.fontSize}
        descPrinc={"Equipe"}
      />
      <Box height="60vh" />
    </>
  );
}
