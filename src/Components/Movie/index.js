import { useEffect, useState, useRef } from "react";
import mopvieIntro from "../../Video/timelapse.mp4";
const movieIntro = "https://bdrbucket.s3.sa-east-1.amazonaws.com/timelapse.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIFHxUl6RmAJp6NQPR14%2Fz5i0ekcTerTjHxmV%2FG1WUXsiAiALM0q5a3Zk5Rompie%2FnRA8b9%2Bmq6WKrl1tIsFml3P8dir2AggwEAAaDDc3NDg5MDQxMDU3MiIMUDkW5NFuo2Fc1fDWKtMCNJokImLcVnRlCAI2ewsjidtkJtnIqTb%2FKZBhYCm54b1i5WrqX463WO9a0%2BISI9cOY%2Fdpbq5bRU77beO1FF3Q7MBmKjZ8sX3Ei7bkJ37Dle1hhr6KnT705Oyh%2FETeoq2Op2VbsssFWszZswaJxC5i%2B7qcIa3BT0PJixJ5%2BAAg2WEnfjvuzb6Fb9%2BpXHBUtI4vy9%2BQD%2Fg3sceyRULxCf78u4sAlzKm0tAF1bj3mgYshhRVYwMao69O4Y0Us2VBKjymamy4jYTzABcGnvig9Y%2BNa0OQMinlMbYRJojvSYYM4bxG8H1hhqY10WfNNl0xnvFYQ6LceIr%2FRf9ooKvZmy3ZMJcVM3Hzacj3DRPQ6TEEY6rZTrk0AKC%2FS29lGZr%2FwoK5ZIOuonyO2L%2FNkOgx05GfRRR6Z4isX94kghi2gKZDSHNc5ZyU1ble%2B%2Fc5haH50jQb29LsMJuN54oGOrQCP9j9rDiG0e5rs0A%2Bv%2FxhcFs2qz07Fi1KKu3fS%2BYY5rDsJUDdmzFbGSub84QdHR1e1PlM9twvkPxQ8rcgaGEgU0TfCYLM9b80XHTxP3bBG2ZBrcL2mrcu3JP7WNjyDOmr8yD%2BGyL6Gms%2BhIRISZ8tI4mwI1Y8hdoHX%2FaaexNCJ2teoXQMcKbVtoRCIJI5YLUhuhL4kJ0HEaFotzjmg1ujrlWBSlLTqx9MbxvchonV5q%2BcHnU6xKQOVmr%2Fl%2BhB%2FSSsWgPKMqvV%2B7JseWphgHG%2B6E0N9q8nk%2FtwBuMMg86d%2FwgT7MCSPYtk5QLmAAhUwo1nq5E0UzO%2B0whv8uReZMA3ZxBNgnAubPlMj4u0s9a%2FTskkjKNV3RdmXXdWj2DdzP4Q5SvVeXOSRR1TGHN6ulRQ8%2FuZDDI%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20211003T164817Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIA3I2YRKJGGUYIHY6Q%2F20211003%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5c2c470fa164440f8fd30231b66be504fda3e6e7e30c4fbf6beb00565de4ef66"
import { useScroll } from "react-use-gesture";

export default function CompMovie() {
  // const [onPlay, setOnPlay] = useState(false);
  const [render, setRender] = useState(true);
  const scroll = useScroll(
    ({ offset: [x, y] }) => {
      setPlayPause(y);
    },
    {
      domTarget: window
    }
  );
  // const [Scroll, onScroll] = useState(0);
  const ref = useRef(0);

  async function setPlayPause(AEixoY) {
    const C_SCROLL_TOP = Math.abs(AEixoY);
    if (C_SCROLL_TOP >= ref.current.scrollHeight * 0.5) {
      await playPauseMovie(false);
    } else {
      playPauseMovie(true);
    }
  }

  // useEffect(scroll, [scroll]);

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
      } else {
        await ref.current.pause();
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
      style={{ filter: 'brightness(94%)' }}
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
