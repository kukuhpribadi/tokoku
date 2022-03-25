import React from "react";
import { Link } from "react-router-dom";

const Hero = ({ url }) => {
  return (
    <div
      className="flex justify-center items-center relative  min-h-[350px] bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      <div className="bg-black/40 h-full w-full absolute"></div>
      <div className="text-center  p-5 flex flex-col gap-2 items-center z-10">
        <div className="uppercase text-white font-bold text-2xl">
          Lorem ipsum dolor sit amet.
        </div>
        <div className="text-white text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          voluptatum?
        </div>
        <Link to="/shop">
          <button className="border border-white shadow px-5 py-1.5 mt-5 rounded text-white uppercase font-medium hover:bg-black transition-all duration-500">
            shop now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
