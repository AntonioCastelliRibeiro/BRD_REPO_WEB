import data from "./data.js";
import { Container } from "@material-ui/core";
import CardPrinc from "./CardPrinc";

export default function CardTerc(props) {
  return (
    <Container maxWidth="xl">
      {data.map((data, key) => {
        return (
          <CardPrinc fontFamily={props.fontFamily} key={key} data={data} />
        );
      })}
    </Container>
  );
}
