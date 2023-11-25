import React, { useState } from "react";
import { Floor, WalkinCloset, Bedroom } from "../../../assets";
import { IoIosPin } from "react-icons/io";
import { layerOneInfo } from "../data";
const LayerOne = () => {
  const [pinMark, setPinMark] = useState<number>(0);
  const [moreDetails, setMoreDetails] = useState<boolean>(false);
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="relative">
        <img
          src={Floor}
          alt="Layer"
          width={350}
          className="animate__animated animate__fadeInUp"
        />
        <div>
          <IoIosPin
            size={32}
            className="text-blue-600 absolute top-4 left-10 cursor-pointer hover:scale-125 transition-all"
            onClick={() => {
              setPinMark(0);
              setMoreDetails(true);
            }}
          />
          <IoIosPin
            size={32}
            className="text-green-500 absolute top-16 left-20 cursor-pointer hover:scale-125 transition-all"
          />
          <IoIosPin
            size={32}
            className="text-red-500 absolute top-20 right-16 cursor-pointer hover:scale-125 transition-all"
          />
        </div>
      </div>
      {moreDetails && (
        <div>
          <h1>{layerOneInfo[pinMark].title}</h1>
          <p>{layerOneInfo[pinMark].description}</p>
        </div>
      )}
    </div>
  );
};

export default LayerOne;
