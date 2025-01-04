import "./index.css";
import Canvas from "./Canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import gsap from "gsap";

const App = () => {
  const [showCanvas, setShowCanvas] = useState(false);
  const headingRef = useRef(null);
  const growingSpan = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();

    return () => locomotiveScroll.destroy();
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      setShowCanvas((prev) => {
        const isCanvasVisible = !prev;

        if (isCanvasVisible) {
          gsap.set(growingSpan.current, {
            top: e.clientY,
            left: e.clientX,
            scale: 0,
          });

          gsap.to("body", {
            color: "#000",
            backgroundColor: "#fd2c2a",
            duration: 1.2,
            ease: "power2.inOut",
          });

          gsap.to(growingSpan.current, {
            scale: 1000,
            duration: 2,
            ease: "power2.inOut",
            onComplete: () => {
              gsap.set(growingSpan.current, {
                scale: 0,
                clearProps: "all",
              });
            },
          });
        } else {
          gsap.to("body", {
            color: "",
            backgroundColor: "",
            duration: 1.2,
            ease: "power2.inOut",
          });

          gsap.to(growingSpan.current, {
            scale: 0,
            duration: 0.5,
            ease: "power2.inOut",
            clearProps: "all",
          });
        }

        return isCanvasVisible;
      });
    };

    if (headingRef.current) {
      headingRef.current.addEventListener("click", handleClick);
    }

    return () => {
      if (headingRef.current) {
        headingRef.current.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <>
      <span
        ref={growingSpan}
        className="growing rounded-full block fixed top-[-20px] left-[-20px] w-5 h-5 bg-black"
      ></span>
      <div className="w-full relative min-h-screen">
        {showCanvas &&
          data[0].map((canvasDels, index) => (
            <Canvas key={index} details={canvasDels} />
          ))}
        <div className="w-full h-screen relative z-[1]">
          <Navbar />
          <div ref={headingRef} className="textContainer px-[20%] w-full">
            <div className="text w-[50%]">
              <h3 className="text-3xl leading-[1.2]">
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
      <div className="relative w-full h-screen mt-32 px-10">
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
