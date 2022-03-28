import React from "react";
import { FiShoppingCart, FiEye } from "react-icons/fi";
import { products } from "../utils/constants";

const GridView = () => {
  return (
    <div className="grid grid-cols-2 gap-5 xl:grid-cols-3">
      {products.map((product) => {
        const { id, name, images, price } = product;
        return (
          <div className="" key={id}>
            <div className="bg-white border h-72 p-5">
              <img
                src={images[0]}
                alt={name}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="mt-2 text-xs md:text-base">{name}</div>
            <div className="mt-2 flex justify-between items-center">
              <div className="font-semibold md:text-lg">$ {price}</div>
              <div className="flex gap-x-2 text-xs">
                <div className="border border-black rounded px-2 py-1">
                  <FiEye />
                </div>
                <div className="border border-black rounded px-2 py-1">
                  <FiShoppingCart />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GridView;
