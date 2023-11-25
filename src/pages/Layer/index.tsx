import React from "react";
import "animate.css";
import Navbar from "./components/Navbar";
import LayerOne from "./components/LayerOne";

const Layer = () => {
  return (
    <div className="h-screen">
      <Navbar />

      {/* layout */}
      <div className="grid grid-cols-5 gap-4 pt-10 px-20">
        {/* content */}
        <div className="col-span-4">
          <LayerOne />
        </div>
        {/* side info */}
        <div className=" border-l-4 border-[#212529] h-full">
          <p>PIN [1]</p>
          <p>PIN [2]</p>
          <p>PIN [3]</p>
          <p>PIN [4]</p>
        </div>
      </div>
    </div>
  );
};

export default Layer;
