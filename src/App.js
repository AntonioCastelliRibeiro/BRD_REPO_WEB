import React, { useEffect } from "react";
import ReactRouter from "./Router";

import Aos from "aos";
import "./styles.css";
import "aos/dist/aos.css"; // You can also use <link> for styles

const font = "'ABeeZee', sans-serif";

export default function App(props) {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <ReactRouter fontFamily={font} />
  );
}
