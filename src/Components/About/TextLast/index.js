import { Container, Typography } from "@material-ui/core";
import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 65vh;
  text-align: center;
  align-items: center;
  width: 100%;
  color: #fff;
  background-color: transparent;
`;

export default function TextLast(props) {
  return (
    <Container maxWidth="sm">
      <Content fontFamily={props.fontFamily}>
        <Typography variant="h4" data-aos="fade-up" data-aos-delay="200" children={props.desc} />
        <Typography variant="h6" data-aos="fade-up" data-aos-delay="200" children={props.name} />
      </Content>
    </Container>
  );
}
