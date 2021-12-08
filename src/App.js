import React, { useEffect } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core";
import ReactRouter from "./Router";

import Aos from "aos";
import "./styles.css";
import "aos/dist/aos.css"; // You can also use <link> for styles

const font = "'ABeeZee', sans-serif";

const theme = createTheme({
  typography: {
    fontFamily: font
  },
});


export default function App(props) {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ReactRouter />
    </ThemeProvider>

  );
}
