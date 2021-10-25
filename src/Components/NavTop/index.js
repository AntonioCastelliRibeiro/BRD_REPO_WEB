import React, { useEffect } from "react";
import styled from "styled-components";
import DrawerTop from "./DrawerTop";

import { AppBar, Container, Toolbar, IconButton } from "@material-ui/core";

import { Menu, Close } from "@material-ui/icons";

import dataModal from "./DrawerTop/data.js";

const IconButtonComp = styled(IconButton)`
  background-color: ${props => props.open ? "transparent" : "#fff"};
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
  transition: 0.8s ease-in-out;
`;

export default React.memo(function TemporaryDrawer(props) {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    dataModal.map((image, count) => {
      const newImage = new Image();
      newImage.src = image;
      window[image] = newImage;
    });

  }, []);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  function setOpenModal() {
    setTimeout(() => {
      setOpen(!open);
    }, 200)
  }

  const IconComp = (e) => {
    if (e.open) {
      return (
        <Close style={{ color: "#fff", transition: "ease 0.3s" }} />
      )
    } else {
      return (
        <Menu />
      )
    }
  }

  return (
    <div>
      <React.Fragment key={"top"}>
        <AppBar
          style={{
            backgroundColor: "transparent",
            boxShadow: "none",
            zIndex: 1400
          }}
        >
          <Container size="xl">
            <Toolbar>
              <IconButtonComp
                open={open}
                edge="start"
                aria-label="open drawer"
                onClick={() => setOpenModal()}
                children={<IconComp open={open} />}
              />
            </Toolbar>
          </Container>
        </AppBar>
        <DrawerTop
          fontFamily={props.fontFamily}
          open={open}
          onClose={() => setOpen(false)}
          toggleDrawer={(e) => toggleDrawer(e)}
        />
      </React.Fragment>
    </div >
  );
})
