import { useEffect, useState, useRef } from "react";
const movieIntro = "https://bdrbucket.s3.sa-east-1.amazonaws.com/timelapse.mp4";
import { useScroll } from "react-use-gesture";

const C_BRIGTHNESS_PADRAO = "80%";
const C_BRIGTHNESS_FOOT = "70%"

export default function CompMovie() {
  const [render, setRender] = useState(true);
  const [onBrightness, setBrightness] = useState(C_BRIGTHNESS_PADRAO);
  const scroll = useScroll(
    ({ offset: [x, y] }) => {
      setPlayPause(y);
    },
    {
      domTarget: window
    }
  );
  const ref = useRef(0);

  async function setPlayPause(AEixoY) {
    const C_SCROLL_TOP = Math.abs(AEixoY);
    try {
      const C_SCROLL_HEIGH = ref.current.scrollHeight;
      if (C_SCROLL_HEIGH !== null) {
        if (C_SCROLL_TOP >= ref.current.scrollHeight * 0.48) {
          await playPauseMovie(false);
        } else {

          await playPauseMovie(true);
        }
      }
    } catch (error) {
      playPauseMovie(false);
      await setBrightness(C_BRIGTHNESS_FOOT);
    }
  }

  useEffect(() => {
    if (render) {
      playPauseMovie(true);
    }
    return () => setRender(false);
  }, [render]);

  async function playPauseMovie(APlay) {
    try {
      if (APlay) {
        await ref.current.play();
        setBrightness(C_BRIGTHNESS_PADRAO);
      } else {
        await ref.current.pause();
        setBrightness(C_BRIGTHNESS_FOOT);

      }
    } catch (error) {
      return false; // Caso os navegadores não suportarem o play autom.
    }
  }

  // useEffect(() => {
  //   const C_SCROLL_TOP = Math.abs(Scroll);
  //   if (C_SCROLL_TOP >= ref.current.scrollHeight * 0.5) {
  //     ref.current.pause();
  //   } else {
  //     ref.current.play();
  //   }
  //   return () => {
  //     window.onscroll = null;
  //   };
  // }, [Scroll]);

  // function handleScroll() {
  //   if (document.documentElement.scrollTop >= ref.current.scrollHeight * 0.6) {
  //     return false;
  //   } else {
  //     onScroll(document.documentElement.scrollTop);
  //   }
  // }

  // window.onscroll = () => handleScroll();

  return (
    <video
      // onPlay={() => setOnPlay(true)}
      // onPause={() => setOnPlay(false)}
      style={{ filter: `brightness(${onBrightness})`, transition: "ease 0.3s" }}
      id="video"
      ref={ref}
      autoPlay
      loop
      // controls
      // contols={false}
      playsInline
      muted
    >
      <source
        // src="https://css-tricks-post-videos.s3.us-east-1.amazonaws.com/708209935.mp4"
        src={movieIntro/*mopvieIntro*/}
        // src={video}
        type="video/mp4"
      />
    </video>
  );
}
