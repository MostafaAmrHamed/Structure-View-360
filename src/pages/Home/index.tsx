import React from "react";
import Floor from "../../assets/Floor.png";
import { Link } from "react-router-dom";
import "animate.css";

const Home = () => {
  const layers = [1, 2, 3, 4];
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
      <div>
        <ul className="space-y-5 text-center text-2xl h-0">
          {layers.reverse().map((layer) => (
            <li>
              <Link
                to={"/layer"}
                className="bg-gray-600 px-3 py-1 rounded text-white cursor-pointer"
              >
                {layer}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
