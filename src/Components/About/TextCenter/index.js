import { Box, Container } from "@material-ui/core";
import styled from "styled-components";

const ContentPrinc = styled.div`
  display: flex;
  flex-direction: column;
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
        {props.title ? <DescTitle chidlren={props.title} /> : false}
        <CompDesc
          fontSize={props.fontSize}
          fontWeight={props.fontWeight}
          lineHeight={props.lineHeight || "1.1667"}
          color={props.color || "#fff"}
          children={props.desc}
        />
      </ContentPrinc>
    </Container>
  );
}
