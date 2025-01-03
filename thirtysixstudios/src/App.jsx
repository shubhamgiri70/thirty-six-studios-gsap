import "./index.css";
import Canvas from "./Canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";

const App = () => {
  const [showCanvas, setShowCanvas] = useState(false);
  const headingref = useRef(null);
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
    headingref.current.addEventListener("click", () => {
      setShowCanvas(true);
    });
  }, []);
  return (
    <>
      <div className="w-full relative min-h-screen">
        {showCanvas &&
          data[0].map((canvasDels, index) => (
            <Canvas key={index} details={canvasDels} />
          ))}
        <div className="w-full h-screen relative z-[1] text-white">
          <Navbar />
          <div className="textContainer px-[20%] w-full">
            <div className="text w-[50%]">
              <h3 ref={headingref} className="text-3xl leading-[1.2]">
                At Thirtysixstudio, we build immersive digital experiences for
                brands with a purpose.
              </h3>
              <p className="text-md w-[80%] mt-10 font-normal">
                We’re a boutique production studio focused on design, motion,
                and creative technology, constantly reimagining what digital
                craft can do for present-time ads and campaigns.
              </p>
              <p className="text-md mt-10">scroll</p>
            </div>
          </div>
          <div className="overflow-x-hidden w-full">
            <div className="w-full absolute bottom-0 left-0 pl-5">
              <h1 className="text-[16rem] font-normal tracking-tight leading-none">
                Thirtysixstudios
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-screen text-white mt-32 px-10">
        {data[1].map((canvasDels, index) => (
          <Canvas key={index} details={canvasDels} />
        ))}
        <div>
          <h1 className="text-8xl tracking-tighter">about the brand</h1>
          <p className="text-4xl leading-[1.8] w-[80%] mt-10 font-light">
            AtThirtysixstudio, we recognize that our industry can
            perpetuateharm. We believe we have to try and reverse some of these
            imbalances. That’s why we’re launching SS36,our local social
            sustainability hub.
          </p>
          <img
            className="w-[80%] mt-10"
            src="https://directus.funkhaus.io/assets/b3b5697d-95a0-4af5-ba59-b1d423411b1c?withoutEnlargement=true&fit=outside&width=1400&height=1400"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default App;
