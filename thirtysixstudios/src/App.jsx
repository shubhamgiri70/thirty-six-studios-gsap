import "./index.css";
import Canvas from "./Canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";
import Navbar from "./Navbar";

const App = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);
  return (
    <>
      <div className="w-full relative min-h-screen">
        {data[0].map((canvasDels, index) => (
          <Canvas key={index} details={canvasDels} />
        ))}
        <div className="w-full h-screen text-white">
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default App;
