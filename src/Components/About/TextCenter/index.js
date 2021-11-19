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

const DescTitle = styled.div`
  text-align: center;
  padding-bottom: 12px;
  font-size: 23px;
  font-weight: 500;
  color: #fff;
`;

const CompDesc = styled.div`
 text-align: center;
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  line-height: ${props => props.lineHeight};
  color:  ${props => props.color};
`;

export default function TextCenter(props) {
  return (
    <Container maxWidth="xl">
      <ContentPrinc fontFamily={props.fontFamily} padding={props.padding}>
        {props.isSticky ? <Typography variant="h5" children={props.title} /> : false}
        <Typography variant={props.isSticky ? "h6" : "h5"} children={props.desc} />
      </ContentPrinc>
    </Container>
  );
}
