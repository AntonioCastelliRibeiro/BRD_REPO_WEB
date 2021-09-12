import React, { memo } from "react";

import DrawerTop from "./DrawerTop";

import { AppBar, Container, Toolbar, IconButton } from "@material-ui/core";

import { Menu, Close } from "@material-ui/icons";

import dataModal from "./DrawerTop/data.js";

export default React.memo(function TemporaryDrawer(props) {
  const [open, setOpen] = React.useState(false);

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
    dataModal.map((image, count) => {
      const newImage = new Image();
      newImage.src = image;
      window[image] = newImage;
    });
    setTimeout(() => {
      setOpen(!open);
    }, 200)
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
              {/* <Paper elevation={6}> */}
              <IconButton
                style={{
                  transition: "background-color 0.8s ease-in-out",
                  backgroundColor: open ? "transparent" : "#fff",
                  boxShadow:
                    "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)"
                }}
                edge="start"
                aria-label="open drawer"
                onClick={() => setOpenModal()
                  // setTimeout(() => {
                  //   setOpen(!open);
                  // }, 200)
                }
              >
                {open ? <Close style={{ color: "white" }} /> : <Menu />}
              </IconButton>
              {/* </Paper> */}
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
