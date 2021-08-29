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
  widht: 100%;
  color: #fff;
  background-color: rgb(68, 133, 69);
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
    <Content
      data-aos="fade-up"
      data-aos-delay="200"
      fontFamily={props.fontFamily}
    >
      <Box data-aos="fade-up" data-aos-delay="200" className={styles.firstText}>
        {props.desc}
      </Box>
      <Box data-aos="fade-up" data-aos-delay="200" width="100%" fontSize="16px">
        {props.name}
      </Box>
    </Content>
  );
}
