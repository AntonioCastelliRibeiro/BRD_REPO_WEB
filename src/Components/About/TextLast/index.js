import { Box, makeStyles } from "@material-ui/core";
import styled from "styled-components";

const Content = styled.div`
  font-family: ${props => props.fontFamily};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 65vh;
  text-align: center;
  align-items: center;
  width: 100%;
  color: #fff;
  background-color: rgb(8, 127, 35);
`;

const DescSec = styled.div`
  width: 100%;
  font-size: 16px;
`;

const useStyles = makeStyles((theme) => ({
  firstText: {
    width: "560px",
    fontWeight: 200,
    [theme.breakpoints.up("xs")]: {
      fontSize: "5vw",
      width: "58vw"
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "38px",
      width: "460px"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "38px",
      width: "560px"
    }
  }
}));

export default function TextLast(props) {
  const styles = useStyles();
  return (
    <Content fontFamily={props.fontFamily}>
      <Box data-aos="fade-up" data-aos-delay="200" className={styles.firstText} children={props.desc} />
      <DescSec data-aos="fade-up" data-aos-delay="200" children={props.name} />
    </Content>
  );
}
