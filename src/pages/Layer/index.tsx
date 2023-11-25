import React, { useState } from "react";
import "animate.css";
import Navbar from "./components/Navbar";
import { Floor } from "../../assets";
import { IoIosPin } from "react-icons/io";
import { layerOneInfo } from "./data";

const Layer = () => {
  const [pinMark, setPinMark] = useState<number>(0);
  //To get exact position for Pin mark
  const PinMarkSize = {
    width: 16,
    height: 30,
  };
  const [moreDetails, setMoreDetails] = useState<boolean>(false);
  const [localMousePos, setLocalMousePos] = useState<Coordinates | null>(null);
  const handleMouseMove = (event: React.MouseEvent<HTMLImageElement>) => {
    // Get mouse position relative to element
    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;
    setLocalMousePos({ x, y });
    console.log(`X: ${localMousePos?.x}  /  Y:${localMousePos?.y}`);
  };
  return (
    <div className="h-screen">
      <Navbar />

      {/* layout */}
      <div className="md:grid md:grid-cols-5 gap-4 pt-10 md:px-10">
        {/* Layer with the Pin Marks */}
        <div className="md:col-span-4">
          <div className="flex flex-col justify-center items-center gap-10">
            <div className="relative">
              <img
                src={Floor}
                alt="Layer"
                width={350}
                className="animate__animated animate__fadeInUp"
                onClick={handleMouseMove}
              />
              <div>
                {layerOneInfo.map((item) => (
                  <IoIosPin
                    key={item.id}
                    size={32}
                    style={{
                      top: `${item.y - PinMarkSize.height}px`,
                      left: `${item.x - PinMarkSize.width}px`,
                    }}
                    className={`${item.color} absolute cursor-pointer hover:scale-125 transition-all`}
                    onClick={() => {
                      setPinMark(item.id);
                      setMoreDetails(true);
                    }}
                  />
                ))}
              </div>
            </div>
            {moreDetails && (
              <div className="p-5 bg-white shadow-lg animate__animated animate__fadeInUp">
                <div className="flex flex-col items-center justify-center mb-5">
                  <img
                    src={layerOneInfo[pinMark].image}
                    alt={layerOneInfo[pinMark].title}
                    width={300}
                    height={250}
                    className="rounded-t-md shadow-2xl"
                  />
                  <h1 className="bg-[#6c757c w-[300px] py-1 font-semibold text-center text-xl text-white rounded-b-md bg-primary-3 shadow-lg">
                    {layerOneInfo[pinMark].title}
                  </h1>
                </div>
                <p className="leading-8">{layerOneInfo[pinMark].description}</p>
              </div>
            )}
          </div>
        </div>
        {/* side pin information */}
        <div className="flex gap-2 flex-wrap mt-5 px-5 md:px-0 md:mt-0 md:block md:space-y-5">
          {layerOneInfo.map((item) => (
            <div
              key={item.id}
              className=" flex items-center gap-2 bg-primary-3 text-white font-semibold w-fit py-1 pl-1 pr-3 rounded animate__animated animate__fadeInRight cursor-pointer"
              onClick={() => {
                setPinMark(item.id);
                setMoreDetails(true);
              }}
            >
              <IoIosPin size={32} className={`${item.color}`} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Layer;
