import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${props => props.fontFamily || "inherit"};
  // padding-right: 10vw;
  padding-bottom: 30px;
  // // padding-left: 10vw;
  padding-top: ${(props) => props.paddingTop || 0};
`;

const ContentDescFirst = styled.div`
  margin-bottom: 10px;
  font-size: 1.6rem;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  line-height: 1.75;
  font-weight: 800;
  letter-spacing: 1px;
`;


const ContentDescSec = styled.div`
  margin-bottom: 10px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  -webkit-font-smoothing: antialiased;
  letter-spacing: 0px;
  color: rgba(255,255,255,0.76);
  line-height: 1.75;
  /* font-weight: 800; */
  letter-spacing: 1px;
`;

export default function DescPrinc(props) {
  return (
    <Content fontFamily={props.fontFamily} paddingTop={props.paddingTop}>
      <ContentDescFirst data-aos="fade-up" children={props.descFirst} />
      <ContentDescSec data-aos="fade-up" children={props.descSec} />
    </Content>
  );
}
