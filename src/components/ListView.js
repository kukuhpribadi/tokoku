import React from "react";
import { FiShoppingCart, FiEye } from "react-icons/fi";
import { products } from "../utils/constants";

const ListView = () => {
  return (
    <div className="">
      {products.map((product) => {
        const { id, name, images, price, description } = product;
        return (
          <div className="grid grid-cols-5 gap-5 mb-5" key={id}>
            <div className="bg-white border p-5 h-72 col-span-2">
              <img
                src={images[0]}
                alt={name}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="col-span-3">
              <div className="mt-2 font-semibold uppercase">
                {name.split(" ").splice(0, 5).join(" ")}
              </div>
              <div className="mt-2 text-gray-400">
                {description.split(" ").splice(0, 15).join(" ")}
              </div>
              <div className="font-bold text-2xl mt-3">$ {price}</div>
              <div className="flex flex-col gap-2 mt-5">
                <div className="flex items-center gap-2 w-36 uppercase text-sm font-semibold border border-black rounded px-2 py-1">
                  <FiEye />
                  <div>view detail</div>
                </div>
                <div className="flex items-center gap-2 w-36 uppercase text-sm font-semibold border border-black rounded px-2 py-1">
                  <FiShoppingCart />
                  <div>Add to cart</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListView;
