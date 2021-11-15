import { Box, makeStyles, Typography } from "@material-ui/core";
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
      <Typography variant="h2" className={styles.firstText} data-aos="fade-up" data-aos-delay="200" children={props.desc} />
      <Typography variant="subtitle1" data-aos="fade-up" data-aos-delay="200" children={props.name} />
      {/* <Box data-aos="fade-up" data-aos-delay="200" className={styles.firstText} children={props.desc} />
      <DescSec data-aos="fade-up" data-aos-delay="200" children={props.name} /> */}
    </Content>
  );
}
