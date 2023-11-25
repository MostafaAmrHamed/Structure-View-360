import React from "react";
import Floor from "../../assets/Floor.png";
import "animate.css";

const Home = () => {
  return (
    <div className="flex items-center justify-center h-[600px]">
      <div className="flex justify-center relative w-[500px]">
        <div className="flex absolute translate-y-[6rem]">
          <img
            src={Floor}
            alt="Layer"
            width={350}
            className="animate__animated animate__fadeInUp"
          />
        </div>
        <div className="flex absolute translate-y-[4rem]">
          <img
            src={Floor}
            alt="Layer"
            width={350}
            className="animate__animated animate__fadeInUp animate__delay-1s"
          />
        </div>
        <div className="flex absolute translate-y-[2rem]">
          <img
            src={Floor}
            alt="Layer"
            width={350}
            className="animate__animated animate__fadeInUp  animate__delay-2s"
          />
        </div>
        <div className="flex absolute">
          <img
            src={Floor}
            alt="Layer"
            width={350}
            className="animate__animated animate__fadeInUp  animate__delay-3s"
          />
        </div>
      </div>
      <div className="space-y-5 text-center text-2xl h-0">
        <p className="bg-gray-600 px-3 py-1 rounded text-white">4</p>
        <p className="bg-gray-600 px-3 py-1 rounded text-white">3</p>
        <p className="bg-gray-600 px-3 py-1 rounded text-white">2</p>
        <p className="bg-gray-600 px-3 py-1 rounded text-white">1</p>
      </div>
    </div>
  );
};

export default Home;
