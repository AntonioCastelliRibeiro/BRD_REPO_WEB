import { Typography } from "@material-ui/core";
import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
  padding-top: 24px;
  color: #fff;
  text-align: center;
`;

export default function DescPrinc(props) {
  return (
    <Content>
      <Typography style={{ paddingBottom: 8 }} variant="h4" data-aos="fade-up" children={props.descFirst} />
      <Typography variant="h6" data-aos="fade-up" children={props.descSec} />
    </Content>
  );
}
