import { Container, Typography } from "@material-ui/core";
import styled from "styled-components";

const ContentPrinc = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #fff;
  justify-content:center;
  font-family: ${props => props.fontFamily};
  padding: ${props => props.padding}; 
`;

const TypographySticky = styled(Typography)`
  padding-bottom: 16px;
`;

export default function TextCenter(props) {
  return (
    <Container maxWidth="xl">
      <ContentPrinc fontFamily={props.fontFamily} padding={props.padding}>
        {props.isSticky ? <TypographySticky variant="h3" children={props.title} /> : false}
        <Typography variant={props.isSticky ? "h4" : "h4"} children={props.desc} />
      </ContentPrinc>
    </Container>
  );
}
