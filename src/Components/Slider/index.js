import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

import { CardMedia, IconButton, Tooltip } from "@material-ui/core";

import IconExpand from "@material-ui/icons/AspectRatio";
import IconArrowRight from "@material-ui/icons/ArrowForwardIos";
import CloseIcon from "@material-ui/icons/Close";
// import CardCrlSel from "../Opinion/CardCrSel";

const BoxPrinc = styled.div`
  width: ${(props) => (props.onModal ? "100vw" : "inherit")};
  height: ${(props) => (props.height ? props.height : "100vh")};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /*body*/
  background: #151515;
  overflow: hidden;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgSlider = styled(motion.img)`
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
  position: absolute;
  max-width: 100vw;
`;

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const variantNav = {
  enter: () => {
    return {
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: () => {
    return {
      zIndex: 0,
      opacity: 0
    };
  }
};

const ButtonIcon = styled(IconButton)`
  top: calc(50% - 20px);
  position: absolute;
  width: 30px;
  height: 30px;
  user-select: none;
  z-index: 2;
`;

const CompSlider = styled(motion.div)`
  cursor: grab;
  height: 55vh;
  width: 86%;
  position: absolute;
  max-width: 100vw;
  background-color: #151515;
`;

const CompSliderNav = styled(motion.div)`
  cursor: grab;
  filter: brightness(50%);
  height: 100vh;
  width: 100%;
  position: absolute;
  max-width: 100vw;
  background-color: #151515;
`;

const ContentCrlSel = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default function Slider(props) {
  const [[page, direction], setPage] = useState([0, 0]);
  const timeoutRef = React.useRef(null);
  const images = props.images;

  if (props.isNav) {
    React.useEffect(() => {
      setPage([props.onPage, props.onPage + 1]);
      return () => { };
    }, [props.onPage]);

  }
  else {
    React.useEffect(() => {
      setAutoChange();
      return () => {
        resetTimeout();
      };
    }, [page]);
  }

  function setAutoChange() {
    resetTimeout();
    timeoutRef.current = setTimeout(() => setPage([page + 1, 1]), 3000);
  }


  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  function retornarConteudo() {
    if (props.Mater) {
      return (
        <ImgSlider
          draggable={false}
          whileDrag={{
            cursor: "grabbing",
            cursor: "-moz-grabbing,",
            cursor: "-webkit-grabbing"
          }}
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      );
    } else if (props.isNav) {
      return (
        <CompSliderNav
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
          key={page}
          custom={direction}
          variants={variantNav}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
        >
          <ContentCrlSel>
            <CardMedia
              image={images[imageIndex]}
              style={{
                height: "100vh",
                width: "100%",
                transition: "ease 0.3s"
              }}
            ></CardMedia>
          </ContentCrlSel>
        </CompSliderNav>
      )
    } else
      return (
        <CompSlider
          draggable={false}
          whileDrag={{
            cursor: "grabbing",
            cursor: "-moz-grabbing,",
            cursor: "-webkit-grabbing"
          }}
          onDragStart={(e) => e.preventDefault()}
          key={page}
          // src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <ContentCrlSel>
            {/* <CardCrlSel
              fontFamily={props.fontFamily}
              image={images[imageIndex].img}
            /> */}
          </ContentCrlSel>
        </CompSlider>
      );
  }

  function retornarButtonArrow() {
    if (props.isNav) {
      return false;
    } else {
      return (
        <>
          <ButtonIcon
            style={{ position: "absolute", right: "20px" }}
            children={
              <Tooltip
                arrow
                title={"Próximo"}
                children={
                  <IconArrowRight
                    style={{ color: "#fff" }}
                    onClick={() => paginate(1)}
                  />
                }
              />
            }
          />
          <ButtonIcon
            style={{ position: "absolute", left: "10px", transform: "scale(-1)" }}
            disableRipple={true}
            children={
              <Tooltip
                arrow
                title={"Anterior"}
                children={
                  <IconArrowRight
                    style={{ color: "#fff" }}
                    onClick={() => paginate(-1)}
                  />
                }
              />
            }
          />
          <ButtonIcon
            style={{ position: "absolute", right: "20px", top: "10px" }}
            children={
              props.Mater ? (
                <Tooltip
                  arrow
                  title={props.onModal ? "Fechar" : "Expandir"}
                  children={
                    props.onModal ? (
                      <CloseIcon
                        style={{ color: "#fff" }}
                        onClick={() => props.setCloseModal()}
                      />
                    ) : (
                      <IconExpand
                        style={{ color: "#fff" }}
                        onClick={() => props.onShowModal()}
                      />
                    )
                  }
                />
              ) : (
                false
              )
            }
          />
        </>
      )
    }
  }

  return (
    <BoxPrinc height={props.height}>
      <AnimatePresence initial={false} custom={direction}>
        {retornarConteudo()}
      </AnimatePresence>

      {retornarButtonArrow()}

    </BoxPrinc>
  );
}
