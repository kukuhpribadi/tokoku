import React from "react";
import { categories } from "../utils/constants";

const SectionOne = () => {
  return (
    <div className="mt-5 max-w-[1600px] h-[500px] mx-auto grid md:grid-cols-3 gap-3">
      <div className="bg-yellow-300 h-[500px]">
        <img
          src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          className="object-cover object-bottom w-full h-full"
          alt="dummy yummy"
        />
      </div>
      <div className="bg-yellow-300 h-[500px]">
        <img
          src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          className="object-cover object-bottom w-full h-full"
          alt="dummy yummy"
        />
      </div>
      <div className="grid grid-rows-2 gap-2 h-[500px]">
        <div className="bg-green-200">
          <img
            src="https://images.unsplash.com/photo-1585565804112-f201f68c48b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            className="object-cover w-full h-full"
            alt="dummy yummy"
          />
        </div>
        <div className="bg-blue-300">
          <img
            src="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            className="object-cover w-full h-full"
            alt="dummy yummy"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
